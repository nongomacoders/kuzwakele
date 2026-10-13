"""List all available models on Google Cloud Vertex AI.

Reads credentials from external secrets.env and queries the Vertex AI Model Garden /
Publisher Model registry.
"""

import json
import os
import sys
from pathlib import Path
from dotenv import load_dotenv

# Ensure project root is in sys.path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

# Load external secrets
secrets_path = Path(r"C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env")
if secrets_path.exists():
    load_dotenv(secrets_path)

creds_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS") or os.getenv("PATH_TO_GOOGLE_APPLICATION_CREDENTIALS")
if creds_path and not Path(creds_path).exists():
    candidate = secrets_path.parent / Path(creds_path).name
    if candidate.exists():
        creds_path = str(candidate)

if not creds_path or not Path(creds_path).exists():
    print(f"Error: Credentials file not found at {creds_path}")
    sys.exit(1)

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = str(creds_path)

with open(creds_path, "r", encoding="utf-8") as f:
    creds_data = json.load(f)

project_id = creds_data.get("project_id")
client_email = creds_data.get("client_email")
location = os.getenv("VERTEX_LOCATION", "us-central1")

print("==================================================")
print("Vertex AI Model Registry Explorer")
print("==================================================")
print(f"Project ID     : {project_id}")
print(f"Service Account: {client_email}")
print(f"Region         : {location}")
print("==================================================\n")

from google import genai

client = genai.Client(vertexai=True, project=project_id, location=location)

try:
    print("Fetching models from Vertex AI...")
    all_models = list(client.models.list())
    print(f"Total models available: {len(all_models)}\n")

    gemini_models = []
    gemma_models = []
    embedding_models = []
    other_models = []

    for m in all_models:
        name = getattr(m, "name", str(m))
        short_name = name.split("/")[-1] if "/" in name else name

        if "gemini" in short_name.lower():
            gemini_models.append(short_name)
        elif "gemma" in short_name.lower():
            gemma_models.append(short_name)
        elif "embed" in short_name.lower():
            embedding_models.append(short_name)
        else:
            other_models.append(short_name)

    print(f"--- Gemini Models ({len(gemini_models)}) ---")
    for name in sorted(gemini_models):
        print(f"  • {name}")

    print(f"\n--- Gemma Models ({len(gemma_models)}) ---")
    for name in sorted(gemma_models):
        print(f"  • {name}")

    print(f"\n--- Embedding Models ({len(embedding_models)}) ---")
    for name in sorted(embedding_models):
        print(f"  • {name}")

    print(f"\n--- Other Vision / Specialized Models ({len(other_models)}) ---")
    for name in sorted(other_models)[:15]:
        print(f"  • {name}")
    if len(other_models) > 15:
        print(f"  ... and {len(other_models) - 15} more.")

    print("\n==================================================")
    print("Testing generate_content availability on top Gemini models:")
    print("==================================================")

    # Test top candidates
    test_candidates = ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-2.5-flash-lite", "gemini-3.7-flash", "gemini-3.8-flash"]
    for candidate in test_candidates:
        if candidate in gemini_models:
            try:
                resp = client.models.generate_content(
                    model=candidate,
                    contents="Say 'OK' in one word.",
                )
                print(f"  [AVAILABLE & READY] {candidate}: {resp.text.strip()!r}")
            except Exception as exc:
                print(f"  [NOT CALLABLE]      {candidate}: {type(exc).__name__} ({str(exc).splitlines()[0]})")

except Exception as err:
    print(f"Failed to query Vertex AI models: {err}")
    import traceback
    traceback.print_exc()
