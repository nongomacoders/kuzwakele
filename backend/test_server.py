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
        "steer_instruction": "Inquire about wet nappies and hydration."
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
        print(f"Sample reply: {first_rep.get('isizulu')} -> {first_rep.get('english')}")
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


def test_seeds_endpoints():
    print("\n--- Testing Interaction Seeds SQLite Endpoints ---")
    seed_payload = {
        "session_id": "test-session-456",
        "intake_summary": "2yo boy with acute diarrhoea and vomiting for 24h",
        "turn_number": 2,
        "doctor_isizulu": "Ngicela ukubuza mama, mancane kangakanani amanzi aphumayo?",
        "doctor_english": "Please tell me mother, how much watery stool is passing?",
        "patient_isizulu": "Uyakhipha kakhulu dokotela, amanabukeni omile.",
        "patient_english": "He is passing a lot doctor, and the nappies are dry.",
        "cultural_note": "Gentle polite softening using 'Ngicela ukubuza'.",
        "steer_context": "Hydration status inquiry",
        "tags": ["paediatrics", "dehydration", "kzn_rural"],
        "distill_target": "both",
        "raw_turn_payload": {"test": True, "turn": 2}
    }

    # 1. POST /api/seeds
    post_res = client.post("/api/seeds", json=seed_payload)
    print(f"POST /api/seeds Status: {post_res.status_code}")
    assert post_res.status_code == 200, f"Expected 200, got {post_res.status_code}"
    post_data = post_res.json()
    assert post_data.get("status") == "saved", "Expected status 'saved'"
    saved_id = post_data.get("id")
    assert saved_id and len(saved_id) >= 10, "Expected valid seed ID"
    print(f"Saved Seed ID: {saved_id}")

    # 2. GET /api/seeds
    get_res = client.get("/api/seeds")
    print(f"GET /api/seeds Status: {get_res.status_code}")
    assert get_res.status_code == 200, f"Expected 200, got {get_res.status_code}"
    get_data = get_res.json()
    assert "count" in get_data and get_data["count"] >= 1, "Expected count >= 1"
    assert "seeds" in get_data and isinstance(get_data["seeds"], list)
    matching = [s for s in get_data["seeds"] if s["id"] == saved_id]
    assert len(matching) == 1, "Expected to find saved seed in seeds list"
    assert matching[0]["doctor_isizulu"] == seed_payload["doctor_isizulu"]
    print(f"Found saved seed: '{matching[0]['doctor_isizulu'][:40]}...' with tags: {matching[0]['tags']}")

    # 3. GET /api/seeds/export
    export_res = client.get("/api/seeds/export")
    print(f"GET /api/seeds/export Status: {export_res.status_code}")
    assert export_res.status_code == 200, f"Expected 200, got {export_res.status_code}"
    export_data = export_res.json()
    assert "records" in export_data and len(export_data["records"]) >= 1
    sample_record = export_data["records"][0]
    assert sample_record.get("collection") == "interaction_seeds", "Expected collection 'interaction_seeds'"
    assert "data" in sample_record and "doctorIsizulu" in sample_record["data"]
    print(f"Verified Firestore export schema for {export_data['count']} record(s)")

    # 4. DELETE /api/seeds/{id}
    del_res = client.delete(f"/api/seeds/{saved_id}")
    print(f"DELETE /api/seeds/{saved_id} Status: {del_res.status_code}")
    assert del_res.status_code == 200, f"Expected 200, got {del_res.status_code}"
    del_data = del_res.json()
    assert del_data.get("status") == "deleted"

    print("[PASS] Interaction seeds SQLite & Firebase export endpoints verified.")


if __name__ == "__main__":
    print("==================================================")
    print("Running Kuzwakele FastAPI Server Verification Tests")
    print("==================================================")

    test_health_endpoint()
    test_seeds_endpoints()
    test_consult_questions_endpoint()
    test_consult_loop_with_steering()
    test_consult_translate_endpoint()
    test_scenario_turn_endpoint()

    print("\n==================================================")
    print("All server endpoint tests passed successfully!")
    print("==================================================")
