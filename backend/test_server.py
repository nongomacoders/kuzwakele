"""Test verification script for FastAPI server endpoints.

Tests:
1. GET /api/health -> 200 OK
2. POST /api/consult with mode='questions' -> 200 OK (structured JSON cards)
3. POST /api/consult with mode='translate' -> 200 OK (translated text)
"""

import sys
from pathlib import Path

# Add project root to sys.path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)


def test_health_endpoint():
    print("\n--- Testing GET /api/health ---")
    response = client.get("/api/health")
    print(f"Status Code: {response.status_code}")
    data = response.json()
    print(f"Response: {data}")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert data.get("status") == "ok", "Expected status 'ok'"
    assert "provider" in data, "Expected provider in health response"
    print("[PASS] Health endpoint verified.")


def test_consult_questions_endpoint():
    print("\n--- Testing POST /api/consult (mode='questions') ---")
    payload = {
        "text": "3-year-old child presenting with acute diarrhoea and mild dehydration for 24 hours.",
        "mode": "questions",
    }
    response = client.post("/api/consult", json=payload)
    print(f"Status Code: {response.status_code}")
    data = response.json()
    print(f"Provider used: {data.get('provider_used')}")
    print(f"Model used: {data.get('model')}")

    result = data.get("result")
    if isinstance(result, dict):
        print(f"Structured result summary: {result.get('summary')}")
        print(f"Questions count: {len(result.get('questions', []))}")
        if result.get("questions"):
            first_q = result["questions"][0]
            print(f"Sample isiZulu: {first_q.get('isizulu')}")
            print(f"Sample English: {first_q.get('english')}")
            print(f"Sample Note: {first_q.get('cultural_note')}")
    else:
        print(f"Result preview:\n{str(result)[:200]}...")

    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert data.get("result"), "Expected non-empty result"
    assert data.get("provider_used") in ("vertex", "openrouter")
    assert data.get("model")
    print("[PASS] Consult questions endpoint verified.")


def test_consult_translate_endpoint():
    print("\n--- Testing POST /api/consult (mode='translate') ---")
    payload = {
        "text": "Take this oral rehydration mixture three times a day after meals.",
        "mode": "translate",
    }
    response = client.post("/api/consult", json=payload)
    print(f"Status Code: {response.status_code}")
    data = response.json()
    print(f"Provider used: {data.get('provider_used')}")
    print(f"Model used: {data.get('model')}")
    print(f"Result preview:\n{str(data.get('result', ''))[:200]}...")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert data.get("result"), "Expected non-empty result"
    assert data.get("provider_used") in ("vertex", "openrouter")
    assert data.get("model")
    print("[PASS] Consult translate endpoint verified.")


if __name__ == "__main__":
    print("==================================================")
    print("Running Kuzwakele FastAPI Server Verification Tests")
    print("==================================================")

    test_health_endpoint()
    test_consult_questions_endpoint()
    test_consult_translate_endpoint()

    print("\n==================================================")
    print("All server endpoint tests passed successfully!")
    print("==================================================")
