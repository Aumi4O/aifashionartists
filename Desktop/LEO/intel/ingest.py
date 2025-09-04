from __future__ import annotations

from datetime import datetime, timedelta
from typing import Iterable, List, Optional

import httpx
import chromadb


def _get_chroma_client(persist_dir: str = ".chroma"):
    return chromadb.PersistentClient(path=persist_dir)


async def ingest_company_news(
    ticker: str,
    since_days: int = 30,
    persist_dir: str = ".chroma",
    collection_name: str = "news",
    fmp_api_key: Optional[str] = None,
):
    """Ingest recent company news into Chroma (title, url, published, summary)."""
    client = _get_chroma_client(persist_dir)
    collection = client.get_or_create_collection(collection_name)

    end = datetime.utcnow()
    start = end - timedelta(days=since_days)

    params = {"from": start.date().isoformat(), "to": end.date().isoformat()}
    base_url = f"https://financialmodelingprep.com/api/v3/stock_news?tickers={ticker}"
    if fmp_api_key:
        base_url += f"&apikey={fmp_api_key}"

    async with httpx.AsyncClient(timeout=15) as http:
        r = await http.get(base_url, params=params)
        r.raise_for_status()
        items = r.json() if r.content else []

    ids, docs, metas = [], [], []
    for i, item in enumerate(items):
        uid = f"{ticker}-news-{item.get('symbol','')}-{item.get('publishedDate','')}-{i}"
        ids.append(uid)
        docs.append(item.get("text", ""))
        metas.append(
            {
                "ticker": ticker,
                "title": item.get("title"),
                "url": item.get("url"),
                "published": item.get("publishedDate"),
                "source": item.get("site"),
                "kind": "news",
            }
        )

    if ids:
        collection.upsert(ids=ids, documents=docs, metadatas=metas)


async def ingest_sec_filings(
    cik_or_ticker: str,
    lookback_years: int = 2,
    persist_dir: str = ".chroma",
    collection_name: str = "filings",
):
    """Stub: Ingest SEC filings via data.sec.gov.

    For MVP: index metadata records pointing to docs.
    """
    client = _get_chroma_client(persist_dir)
    collection = client.get_or_create_collection(collection_name)

    # Simple metadata placeholder
    now = datetime.utcnow().isoformat()
    uid = f"{cik_or_ticker}-filings-stub-{now}"
    collection.upsert(
        ids=[uid],
        documents=[f"SEC filings stub for {cik_or_ticker} at {now}"],
        metadatas=[{"ticker": cik_or_ticker, "kind": "filing", "url": "https://www.sec.gov/edgar/searchedgar/companysearch"}],
    )


