from __future__ import annotations

from typing import Dict, List, Optional

import chromadb


def _get_chroma_client(persist_dir: str = ".chroma"):
    return chromadb.PersistentClient(path=persist_dir)


def ask_intel(question: str, tickers: List[str], top_k: int = 6, persist_dir: str = ".chroma") -> Dict:
    """Retrieve relevant snippets from Chroma and return with citations.

    Returns dict: {"question":..., "snippets":[{"text":..., "url":..., "ticker":...}], "tickers":[...]}
    """
    client = _get_chroma_client(persist_dir)
    # Merge across collections for simplicity
    results = []
    for name in ["news", "filings"]:
        try:
            coll = client.get_collection(name)
        except Exception:
            continue
        q = coll.query(query_texts=[question], n_results=top_k, where={"ticker": {"$in": tickers}})
        for i in range(len(q.get("ids", [[]])[0])):
            meta = q["metadatas"][0][i]
            doc = q["documents"][0][i]
            results.append({"text": doc, "url": meta.get("url"), "ticker": meta.get("ticker"), "source": meta.get("source"), "kind": meta.get("kind")})

    return {"question": question, "snippets": results[:top_k], "tickers": tickers}


