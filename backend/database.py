"""SQLite Database Module for Kuzwakele Seed Harvester.

Stores curated bedside interaction seeds captured during live consultations.
Maintains a Firebase/Firestore-compatible schema for seamless export and syncing.
"""

from datetime import datetime, timezone
import json
import logging
from pathlib import Path
import sqlite3
from typing import Any, Dict, List, Optional
import uuid

logger = logging.getLogger(__name__)

DEFAULT_DB_PATH = Path(__file__).resolve().parent / "kuzwakele.db"


def get_connection(db_path: Optional[Path | str] = None) -> sqlite3.Connection:
    """Return a connection to the SQLite database with row factory enabled."""
    path = Path(db_path) if db_path else DEFAULT_DB_PATH
    conn = sqlite3.connect(str(path))
    conn.row_factory = sqlite3.Row
    return conn


def init_db(db_path: Optional[Path | str] = None) -> None:
    """Initialize the database schema if tables do not exist."""
    path = Path(db_path) if db_path else DEFAULT_DB_PATH
    path.parent.mkdir(parents=True, exist_ok=True)

    with get_connection(path) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS interaction_seeds (
                id TEXT PRIMARY KEY,
                session_id TEXT NOT NULL,
                created_at TEXT NOT NULL,
                intake_summary TEXT,
                turn_number INTEGER DEFAULT 1,
                doctor_isizulu TEXT NOT NULL,
                doctor_english TEXT,
                patient_isizulu TEXT,
                patient_english TEXT,
                cultural_note TEXT,
                steer_context TEXT,
                tags TEXT,
                distill_target TEXT DEFAULT 'both',
                sync_status TEXT DEFAULT 'local_only',
                firebase_id TEXT,
                raw_turn_payload TEXT
            );
            """
        )
        conn.commit()
    logger.info("Initialized interaction_seeds table at %s", path)


def save_seed(seed_data: Dict[str, Any], db_path: Optional[Path | str] = None) -> str:
    """Save an interaction seed to the database and return its ID.

    Generates a UUID and ISO-8601 timestamp if not provided.
    """
    init_db(db_path)

    seed_id = str(seed_data.get("id") or uuid.uuid4())
    session_id = str(seed_data.get("session_id") or uuid.uuid4())
    created_at = seed_data.get("created_at") or datetime.now(timezone.utc).isoformat()

    tags_val = seed_data.get("tags", [])
    if isinstance(tags_val, (list, dict)):
        tags_json = json.dumps(tags_val, ensure_ascii=False)
    else:
        tags_json = str(tags_val or "[]")

    raw_payload_val = seed_data.get("raw_turn_payload")
    if isinstance(raw_payload_val, (dict, list)):
        raw_payload_json = json.dumps(raw_payload_val, ensure_ascii=False)
    elif raw_payload_val is not None:
        raw_payload_json = str(raw_payload_val)
    else:
        raw_payload_json = None

    distill_target = seed_data.get("distill_target") or "both"
    sync_status = seed_data.get("sync_status") or "local_only"

    with get_connection(db_path) as conn:
        conn.execute(
            """
            INSERT OR REPLACE INTO interaction_seeds (
                id, session_id, created_at, intake_summary, turn_number,
                doctor_isizulu, doctor_english, patient_isizulu, patient_english,
                cultural_note, steer_context, tags, distill_target,
                sync_status, firebase_id, raw_turn_payload
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
            """,
            (
                seed_id,
                session_id,
                created_at,
                seed_data.get("intake_summary"),
                int(seed_data.get("turn_number", 1)),
                seed_data["doctor_isizulu"],
                seed_data.get("doctor_english"),
                seed_data.get("patient_isizulu"),
                seed_data.get("patient_english"),
                seed_data.get("cultural_note"),
                seed_data.get("steer_context"),
                tags_json,
                distill_target,
                sync_status,
                seed_data.get("firebase_id"),
                raw_payload_json,
            ),
        )
        conn.commit()

    return seed_id


def row_to_dict(row: sqlite3.Row) -> Dict[str, Any]:
    """Convert an SQLite Row to a dictionary with parsed JSON fields."""
    d = dict(row)
    if d.get("tags"):
        try:
            d["tags"] = json.loads(d["tags"])
        except Exception:
            pass
    else:
        d["tags"] = []

    if d.get("raw_turn_payload"):
        try:
            d["raw_turn_payload"] = json.loads(d["raw_turn_payload"])
        except Exception:
            pass
    return d


def get_seeds(
    limit: int = 50,
    sync_status: Optional[str] = None,
    db_path: Optional[Path | str] = None,
) -> List[Dict[str, Any]]:
    """Retrieve seeds sorted by created_at DESC with optional sync_status filtering."""
    init_db(db_path)

    query = "SELECT * FROM interaction_seeds"
    params: List[Any] = []

    if sync_status:
        query += " WHERE sync_status = ?"
        params.append(sync_status)

    query += " ORDER BY created_at DESC LIMIT ?"
    params.append(limit)

    with get_connection(db_path) as conn:
        cursor = conn.execute(query, params)
        rows = cursor.fetchall()
        return [row_to_dict(row) for row in rows]


def get_seed_by_id(seed_id: str, db_path: Optional[Path | str] = None) -> Optional[Dict[str, Any]]:
    """Retrieve a single seed by ID."""
    init_db(db_path)
    with get_connection(db_path) as conn:
        cursor = conn.execute("SELECT * FROM interaction_seeds WHERE id = ?", (seed_id,))
        row = cursor.fetchone()
        return row_to_dict(row) if row else None


def delete_seed(seed_id: str, db_path: Optional[Path | str] = None) -> bool:
    """Delete an interaction seed by ID."""
    init_db(db_path)
    with get_connection(db_path) as conn:
        cursor = conn.execute("DELETE FROM interaction_seeds WHERE id = ?", (seed_id,))
        conn.commit()
        return cursor.rowcount > 0


def export_seeds_for_firebase(db_path: Optional[Path | str] = None) -> List[Dict[str, Any]]:
    """Export interaction seeds cleanly formatted for Firestore batch collection migration."""
    seeds = get_seeds(limit=1000, db_path=db_path)
    export_payload = []
    for s in seeds:
        export_payload.append(
            {
                "id": s["id"],
                "collection": "interaction_seeds",
                "data": {
                    "sessionId": s["session_id"],
                    "createdAt": s["created_at"],
                    "intakeSummary": s.get("intake_summary"),
                    "turnNumber": s.get("turn_number", 1),
                    "doctorIsizulu": s.get("doctor_isizulu"),
                    "doctorEnglish": s.get("doctor_english"),
                    "patientIsizulu": s.get("patient_isizulu"),
                    "patientEnglish": s.get("patient_english"),
                    "culturalNote": s.get("cultural_note"),
                    "steerContext": s.get("steer_context"),
                    "tags": s.get("tags") or [],
                    "distillTarget": s.get("distill_target") or "both",
                    "syncStatus": s.get("sync_status") or "local_only",
                    "firebaseId": s.get("firebase_id"),
                    "rawTurnPayload": s.get("raw_turn_payload"),
                    "_exportedAt": datetime.now(timezone.utc).isoformat(),
                },
            }
        )
    return export_payload
