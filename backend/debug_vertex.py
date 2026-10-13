import os
import json
import traceback
from pathlib import Path
from dotenv import load_dotenv

secrets_path = Path(r"C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env")
if secrets_path.exists():
    load_dotenv(secrets_path)

creds_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS") or os.getenv("PATH_TO_GOOGLE_APPLICATION_CREDENTIALS")
if creds_path and not Path(creds_path).exists():
    candidate = secrets_path.parent / Path(creds_path).name
    if candidate.exists():
        creds_path = str(candidate)

print("Credentials Path:", creds_path)
print("File Exists:", Path(creds_path).exists() if creds_path else False)

if creds_path and Path(creds_path).exists():
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = creds_path
    with open(creds_path) as f:
        creds_data = json.load(f)
    project_id = creds_data.get("project_id")
    client_email = creds_data.get("client_email")
    print("Project ID:", project_id)
    print("Service Account Email:", client_email)

    # Test Google GenAI client directly without try/except masking
    from google import genai

    print("\nAttempting direct Vertex AI call...")
    try:
        client = genai.Client(vertexai=True, project=project_id, location="us-central1")
        # Test standard model IDs
        for test_model in ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-2.5-flash"]:
            print(f"\n--- Testing model: {test_model} ---")
            try:
                response = client.models.generate_content(
                    model=test_model,
                    contents="Hello",
                )
                print(f"SUCCESS on {test_model}:", response.text)
                break
            except Exception as e:
                print(f"FAILED on {test_model}: {type(e).__name__} - {e}")
    except Exception:
        traceback.print_exc()
else:
    print("ERROR: Credentials file not found.")
