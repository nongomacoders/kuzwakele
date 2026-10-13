"""Test verification script for FastAPI server endpoints.

Tests:
1. GET /api/health -> 200 OK
2. POST /api/consult with mode='questions' -> 200 OK (structured JSON cards with anticipated replies)
3. POST /api/consult with mode='loop' (history + steering instruction) -> 200 OK
4. POST /api/consult with mode='translate' -> 200 OK (translated text)
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
            print(f"Anticipated replies count: {len(first_q.get('anticipated_patient_replies', []))}")
            assert len(first_q.get("anticipated_patient_replies", [])) >= 2, "Expected at least 2 anticipated replies"
    else:
        print(f"Result preview:\n{str(result)[:200]}...")

    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert data.get("result"), "Expected non-empty result"
    assert data.get("provider_used") in ("vertex", "openrouter")
    assert data.get("model")
    print("[PASS] Consult questions endpoint verified.")


def test_consult_loop_with_steering():
    print("\n--- Testing POST /api/consult (mode='loop' with history and steering) ---")
    payload = {
        "text": "3-year-old child presenting with acute diarrhoea and mild dehydration.",
        "mode": "loop",
        "history": [
            {
                "role": "doctor",
                "text": "Ake ungitshele, usuke washintsha isisu esingakanani umntwana?",
                "subtext": "Please tell me, how much has the child had runny tummy?"
            },
            {
                "role": "patient",
                "text": "Uqale kuthangi dokotela, uhuda kakhulu.",
                "subtext": "Started day before yesterday, running frequently."
            }
        ],
        "steer_instruction": "Inquire about wet nappies and signs of severe dehydration."
    }
    response = client.post("/api/consult", json=payload)
    print(f"Status Code: {response.status_code}")
    data = response.json()
    print(f"Provider used: {data.get('provider_used')}")
    print(f"Model used: {data.get('model')}")

    result = data.get("result")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert isinstance(result, dict), "Expected structured dict result"
    assert "questions" in result, "Expected questions in result"
    print(f"Generated loop questions count: {len(result['questions'])}")
    if result["questions"]:
        first_q = result["questions"][0]
        print(f"First steered question: {first_q.get('isizulu')}")
        print(f"Anticipated replies count: {len(first_q.get('anticipated_patient_replies', []))}")
        assert len(first_q.get("anticipated_patient_replies", [])) >= 2
        first_rep = first_q["anticipated_patient_replies"][0]
        print(f"Sample reply: {first_rep.get('isizulu')} -> {first_rep.get('english')} ({first_rep.get('clinical_meaning')})")
    print("[PASS] Consult loop with steering verified.")


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


def test_scenario_turn_endpoint():
    print("\n--- Testing POST /api/scenario/turn (Gogo MaMthethwa simulator) ---")
    payload = {
        "scenario_id": "gogo-mamthethwa",
        "history": [
            {
                "role": "doctor",
                "text": "Sawubona Gogo MaMthethwa, umfutho wegazi usuhleli kahle ku-150/92, siwabhale phansi amaphilisi."
            },
            {
                "role": "patient",
                "text": "Yebo dokotela mntanami, ngiyabonga. Kodwa umgwaqo unzima kakhulu ngenxa yemvula."
            }
        ],
        "doctor_input": "Kunzima ngempela gogo. Baphila kanjani ekhaya, ikakhulukazi abantwana?"
    }
    response = client.post("/api/scenario/turn", json=payload)
    print(f"Status Code: {response.status_code}")
    data = response.json()
    assert response.status_code == 200, f"Expected 200, got {response.status_code}"
    assert "patient_reply_isizulu" in data and data["patient_reply_isizulu"], "Expected patient_reply_isizulu"
    assert "patient_reply_english" in data and data["patient_reply_english"], "Expected patient_reply_english"
    assert "feedback" in data and isinstance(data["feedback"], dict), "Expected feedback dict"

    fb = data["feedback"]
    assert "natural_alternative" in fb, "Expected natural_alternative in feedback"
    assert "cultural_and_tone_notes" in fb, "Expected cultural_and_tone_notes in feedback"
    assert "listening_cues" in fb, "Expected listening_cues in feedback"
    assert "suggested_steer_chips" in data and isinstance(data["suggested_steer_chips"], list), "Expected steer chips"

    print(f"Patient Reply (isiZulu): {data['patient_reply_isizulu']}")
    print(f"Patient Reply (English): {data['patient_reply_english']}")
    print(f"Feedback Alternative: {fb['natural_alternative']}")
    print(f"Cultural/Tone Note: {fb['cultural_and_tone_notes']}")
    print(f"Listening Cues: {fb['listening_cues']}")
    print(f"Suggested Steer Chips: {data['suggested_steer_chips']}")
    print("[PASS] Scenario turn endpoint verified.")


if __name__ == "__main__":
    print("==================================================")
    print("Running Kuzwakele FastAPI Server Verification Tests")
    print("==================================================")

    test_health_endpoint()
    test_consult_questions_endpoint()
    test_consult_loop_with_steering()
    test_consult_translate_endpoint()
    test_scenario_turn_endpoint()

    print("\n==================================================")
    print("All server endpoint tests passed successfully!")
    print("==================================================")
