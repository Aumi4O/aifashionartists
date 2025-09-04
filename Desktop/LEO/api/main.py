from __future__ import annotations

from typing import Any, Dict, List, Optional
import os
import uuid
from pathlib import Path

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from agent.router import chat as agent_chat
from openai import OpenAI


app = FastAPI(title="Advisor API", version="0.1.0")

# Ensure uploads directory exists and mount static serving
UPLOADS_DIR = Path("uploads")
UPLOADS_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/uploads", StaticFiles(directory=str(UPLOADS_DIR)), name="uploads")


class ChatRequest(BaseModel):
    message: str
    profile: Optional[Dict[str, Any]] = None
    images: Optional[List[str]] = None  # URLs under /uploads or remote


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/chat")
async def chat(req: ChatRequest):
    return agent_chat(req.message, req.profile, images=req.images or [])


@app.post("/upload/image")
async def upload_image(file: UploadFile = File(...)):
    ext = os.path.splitext(file.filename or "")[1].lower() or ".bin"
    fname = f"{uuid.uuid4().hex}{ext}"
    dest = UPLOADS_DIR / fname
    content = await file.read()
    dest.write_bytes(content)
    url = f"/uploads/{fname}"
    return {"url": url, "filename": fname}


@app.post("/audio/transcribe")
async def transcribe_audio(file: UploadFile = File(...)):
    # Stream to OpenAI Whisper API
    client = OpenAI()
    # Save temp file for API call
    tmp_path = UPLOADS_DIR / f"{uuid.uuid4().hex}_{file.filename}"
    content = await file.read()
    tmp_path.write_bytes(content)
    with tmp_path.open("rb") as fh:
        tr = client.audio.transcriptions.create(model="whisper-1", file=fh)
    # Clean up temp file
    try:
        tmp_path.unlink(missing_ok=True)
    except Exception:
        pass
    return {"text": tr.text}


