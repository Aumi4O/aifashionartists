from __future__ import annotations

import os
from typing import Any, Dict, List
import json

from dotenv import load_dotenv
from openai import OpenAI

from data_providers.openbb_client import history, options_chain, quote
from intel.qa import ask_intel as rag_ask
from portfolio.optimizer import mean_var_weights
from options.strategies import covered_call_candidates


load_dotenv()

SYSTEM_PROMPT = (
    "You are a fiduciary-style portfolio adviser. Always ground facts in tool outputs. "
    "For portfolios, present target weights, rationale, risks, constraints, liquidity, alternatives. "
    "For options, include DTE, delta, OI, spread, yield/hedge cost, assignment risks. Cite links when relevant."
)


client = OpenAI()


def _tool_schema() -> List[Dict[str, Any]]:
    return [
        {
            "type": "function",
            "function": {
                "name": "get_quote",
                "description": "Return L1 quotes for symbols",
                "parameters": {
                    "type": "object",
                    "properties": {"symbols": {"type": "array", "items": {"type": "string"}}},
                    "required": ["symbols"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "get_options_chain",
                "description": "Return options chain for a symbol",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "symbol": {"type": "string"},
                        "provider": {"type": "string"},
                    },
                    "required": ["symbol"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "optimize_portfolio",
                "description": "Compute Max Sharpe weights given tickers and historical prices",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "tickers": {"type": "array", "items": {"type": "string"}},
                        "max_weight": {"type": "number"},
                        "period": {"type": "string"},
                    },
                    "required": ["tickers"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "ask_intel",
                "description": "RAG over news/filings for tickers",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "question": {"type": "string"},
                        "tickers": {"type": "array", "items": {"type": "string"}},
                    },
                    "required": ["question"],
                },
            },
        },
        {
            "type": "function",
            "function": {
                "name": "covered_call_screener",
                "description": "Suggest covered call candidates for a symbol",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "symbol": {"type": "string"},
                        "provider": {"type": "string"},
                        "target_delta": {"type": "number"},
                        "dte_min": {"type": "integer"},
                        "dte_max": {"type": "integer"},
                        "min_open_interest": {"type": "integer"},
                    },
                    "required": ["symbol"],
                },
            },
        },
    ]


def _dispatch(tool_name: str, args: Dict[str, Any]) -> Dict[str, Any]:
    if tool_name == "get_quote":
        df = quote(args["symbols"]).reset_index()
        return {"data": df.to_dict(orient="records")}
    if tool_name == "get_options_chain":
        df = options_chain(args["symbol"], provider=args.get("provider")).reset_index(drop=True)
        return {"data": df.to_dict(orient="records")}
    if tool_name == "optimize_portfolio":
        tickers = args["tickers"]
        period = args.get("period", "1y")
        prices = history(tickers, period=period)
        weights, perf = mean_var_weights(prices)
        return {"weights": weights, "performance": {"return": perf[0], "vol": perf[1], "sharpe": perf[2]}}
    if tool_name == "ask_intel":
        return rag_ask(args["question"], args.get("tickers", []))
    if tool_name == "covered_call_screener":
        df = options_chain(args["symbol"], provider=args.get("provider"))
        cands = covered_call_candidates(
            df,
            target_delta=args.get("target_delta", 0.30),
            dte_min=args.get("dte_min", 21),
            dte_max=args.get("dte_max", 60),
            min_open_interest=args.get("min_open_interest", 100),
        )
        return {"data": cands.to_dict(orient="records")}
    raise ValueError(f"Unknown tool: {tool_name}")


def chat(user_msg: str, session_profile: Dict[str, Any] | None = None, images: List[str] | None = None) -> Dict[str, Any]:
    content: List[Dict[str, Any]] = []
    if images:
        # Construct a multimodal message with text + image URLs
        parts: List[Dict[str, Any]] = []
        if user_msg:
            parts.append({"type": "text", "text": user_msg})
        for url in images:
            # Accept relative URLs from our static mount
            if url.startswith("/"):
                url = f"http://localhost:8000{url}"
            parts.append({"type": "image_url", "image_url": {"url": url}})
        content.append({"role": "user", "content": parts})
    else:
        content.append({"role": "user", "content": user_msg})

    rsp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "system", "content": SYSTEM_PROMPT}, *content],
        tools=_tool_schema(),
        tool_choice="auto",
        temperature=0.3,
    )

    msg = rsp.choices[0].message
    if msg.tool_calls:
        tool_msgs = []
        for call in msg.tool_calls:
            tool_args = json.loads(call.function.arguments or "{}")
            tool_response = _dispatch(call.function.name, tool_args)
            tool_msgs.append({
                "role": "tool",
                "tool_call_id": call.id,
                "name": call.function.name,
                "content": str(tool_response),
            })
        final = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_msg},
                msg,
                *tool_msgs,
            ],
            temperature=0.3,
        )
        text = final.choices[0].message.content or ""
        return {"text": text}
    else:
        return {"text": msg.content or ""}


