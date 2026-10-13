"""Resilient dual-provider AI client for Kuzwakele.

Tries primary generation with Vertex AI (gemini-3.5-flash-lite, thinking: low)
and automatically falls back to OpenRouter (openrouter/free) upon failure.
"""

import json
import logging
import os
from pathlib import Path
from typing import Any, Dict, Optional

import httpx

from backend.config import (
    GOOGLE_APPLICATION_CREDENTIALS,
    OPENROUTER_API_KEY,
    OPENROUTER_FALLBACK_MODEL,
    THINKING_BUDGET,
    VERTEX_LOCATION,
    VERTEX_MODEL,
)

logger = logging.getLogger(__name__)

OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"


def _get_gcp_project_id() -> Optional[str]:
    """Extract project_id from service account credentials file or environment."""
    if GOOGLE_APPLICATION_CREDENTIALS and Path(GOOGLE_APPLICATION_CREDENTIALS).exists():
        try:
            with open(GOOGLE_APPLICATION_CREDENTIALS, "r", encoding="utf-8") as f:
                data = json.load(f)
                project = data.get("project_id")
                if project:
                    return project
        except Exception as e:
            logger.debug("Failed reading service account file: %s", e)
    return os.getenv("GOOGLE_CLOUD_PROJECT") or os.getenv("GCP_PROJECT")


async def _call_vertex_ai(prompt: str, system_instruction: str = "") -> Dict[str, Any]:
    """Attempt generation via Vertex AI gemini-3.5-flash-lite with low thinking effort."""
    if not GOOGLE_APPLICATION_CREDENTIALS or not Path(GOOGLE_APPLICATION_CREDENTIALS).exists():
        raise RuntimeError("Valid GOOGLE_APPLICATION_CREDENTIALS file not configured")

    project_id = _get_gcp_project_id()
    if not project_id:
        raise RuntimeError("Google Cloud project ID could not be determined")

    from google import genai
    from google.genai import types

    location = os.getenv("VERTEX_LOCATION", VERTEX_LOCATION)
    client = genai.Client(vertexai=True, project=project_id, location=location)

    # Configure thinking budget / reasoning effort (low)
    thinking_level = types.ThinkingLevel.LOW
    if str(THINKING_BUDGET).upper() in ("MINIMAL", "LOW", "MEDIUM", "HIGH"):
        thinking_level = getattr(types.ThinkingLevel, str(THINKING_BUDGET).upper(), types.ThinkingLevel.LOW)

    config = types.GenerateContentConfig(
        system_instruction=system_instruction if system_instruction else None,
        thinking_config=types.ThinkingConfig(thinking_level=thinking_level),
    )

    response = await client.aio.models.generate_content(
        model=VERTEX_MODEL,
        contents=prompt,
        config=config,
    )

    text_output = response.text or ""
    return {
        "text": text_output,
        "provider_used": "vertex",
        "model": VERTEX_MODEL,
    }


async def _call_openrouter(prompt: str, system_instruction: str = "") -> Dict[str, Any]:
    """Execute fallback generation via OpenRouter API."""
    if not OPENROUTER_API_KEY:
        raise RuntimeError("OPENROUTER_API_KEY is not configured for fallback provider")

    messages = []
    if system_instruction:
        messages.append({"role": "system", "content": system_instruction})
    messages.append({"role": "user", "content": prompt})

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://kuzwakele.app",
        "X-Title": "Kuzwakele Dual-Provider AI",
    }
    payload = {
        "model": OPENROUTER_FALLBACK_MODEL,
        "messages": messages,
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        resp = await client.post(OPENROUTER_API_URL, headers=headers, json=payload)
        resp.raise_for_status()
        data = resp.json()

    choices = data.get("choices", [])
    if not choices:
        raise RuntimeError(f"OpenRouter returned empty choices: {data}")

    text_output = choices[0].get("message", {}).get("content", "")
    return {
        "text": text_output,
        "provider_used": "openrouter",
        "model": OPENROUTER_FALLBACK_MODEL,
    }


async def generate_response(prompt: str, system_instruction: str = "") -> Dict[str, Any]:
    """Generate a response using Vertex AI with automatic failover to OpenRouter.

    Primary attempt: Vertex AI (gemini-3.5-flash-lite, location: global, thinking: low).
    Failover triggers: Quota limits (429/ResourceExhausted), billing/credit errors (402),
    client errors (404/403), connection errors, or missing credentials.
    Fallback: OpenRouter (openrouter/free) via async HTTP POST.

    Returns:
        dict: {"text": str, "provider_used": "vertex" | "openrouter", "model": str}
    """
    try:
        logger.info("Attempting primary generation via Vertex AI (%s, %s)...", VERTEX_MODEL, VERTEX_LOCATION)
        return await _call_vertex_ai(prompt, system_instruction=system_instruction)
    except Exception as exc:
        logger.warning(
            "Primary Vertex AI failed (%s: %s). Executing fallback to OpenRouter (%s)...",
            type(exc).__name__,
            exc,
            OPENROUTER_FALLBACK_MODEL,
        )
        return await _call_openrouter(prompt, system_instruction=system_instruction)
