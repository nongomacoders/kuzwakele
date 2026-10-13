"""Configuration module for Kuzwakele backend.

Loads secrets from an external credentials repository outside the codebase
and configures primary (Vertex AI) and fallback (OpenRouter) AI providers.
"""

import os
from pathlib import Path
from typing import Optional
from dotenv import load_dotenv

# Path to external credentials file
EXTERNAL_CREDENTIALS_DIR = Path(r"C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials")
EXTERNAL_SECRETS_FILE = EXTERNAL_CREDENTIALS_DIR / "secrets.env"

# Load local .env first if present
load_dotenv()

# Load external secrets if file exists
if EXTERNAL_SECRETS_FILE.exists():
    load_dotenv(dotenv_path=EXTERNAL_SECRETS_FILE, override=False)

# Read API keys and credentials
OPENROUTER_API_KEY: Optional[str] = os.getenv("OPENROUTER_API_KEY")

# Resolve Google Application Credentials
_raw_google_creds = os.getenv("GOOGLE_APPLICATION_CREDENTIALS") or os.getenv("PATH_TO_GOOGLE_APPLICATION_CREDENTIALS")
GOOGLE_APPLICATION_CREDENTIALS: Optional[str] = None

if _raw_google_creds:
    creds_path = Path(_raw_google_creds)
    if creds_path.exists():
        GOOGLE_APPLICATION_CREDENTIALS = str(creds_path.resolve())
    else:
        # Check if the file exists directly in the external credentials directory
        fallback_candidate = EXTERNAL_CREDENTIALS_DIR / creds_path.name
        if fallback_candidate.exists():
            GOOGLE_APPLICATION_CREDENTIALS = str(fallback_candidate.resolve())
        else:
            GOOGLE_APPLICATION_CREDENTIALS = _raw_google_creds

    # Ensure Google Cloud SDK picks it up automatically via os.environ
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = GOOGLE_APPLICATION_CREDENTIALS

# Model and thinking constants
VERTEX_MODEL: str = os.getenv("VERTEX_MODEL", "gemini-3.8-flash")
THINKING_BUDGET: str = os.getenv("THINKING_BUDGET", "low")
OPENROUTER_FALLBACK_MODEL: str = os.getenv("OPENROUTER_FALLBACK_MODEL", "openrouter/free")

# General fallback defaults for backward compatibility
DEFAULT_MODEL: str = os.getenv("DEFAULT_MODEL", VERTEX_MODEL)
OPENROUTER_DEFAULT_MODEL: str = os.getenv("OPENROUTER_DEFAULT_MODEL", OPENROUTER_FALLBACK_MODEL)

# Provider priority and fallback definitions
PRIMARY_AI_PROVIDER: str = os.getenv("PRIMARY_AI_PROVIDER", "vertex")
FALLBACK_AI_PROVIDER: str = os.getenv("FALLBACK_AI_PROVIDER", "openrouter")


def get_active_provider(preferred: Optional[str] = None) -> str:
    """Return the active AI provider based on preference and available credentials."""
    target = preferred or PRIMARY_AI_PROVIDER

    if target in ("vertex", "google"):
        if GOOGLE_APPLICATION_CREDENTIALS and Path(GOOGLE_APPLICATION_CREDENTIALS).exists():
            return "vertex"
        if OPENROUTER_API_KEY:
            return "openrouter"

    if target == "openrouter":
        if OPENROUTER_API_KEY:
            return "openrouter"
        if GOOGLE_APPLICATION_CREDENTIALS and Path(GOOGLE_APPLICATION_CREDENTIALS).exists():
            return "vertex"

    return target


def get_model_for_provider(provider: str) -> str:
    """Get the appropriate default model identifier for the given provider."""
    if provider == "openrouter":
        return OPENROUTER_FALLBACK_MODEL
    return VERTEX_MODEL
