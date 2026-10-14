# Project Tasks

## Setup & Environment
- [x] Set up Python virtual environment and tracking documentation on Windows
  - [x] Create `requirements.txt` with core dependencies
  - [x] Create virtual environment `venv`
  - [x] Upgrade pip and install `requirements.txt` using `.\venv\Scripts\python.exe`
  - [x] Document Windows execution rules in `ENVIRONMENT.md`
  - [x] Configure `.gitignore`
  - [x] Update `STATE.md` and `TASKS.md`

## Backend Configuration
- [x] Configure backend secrets loading from external credentials store
  - [x] Create `backend/` package and `backend/config.py`
  - [x] Load external `secrets.env` via `python-dotenv`
  - [x] Read and export `OPENROUTER_API_KEY`, `GOOGLE_APPLICATION_CREDENTIALS`, and `DEFAULT_MODEL`
  - [x] Ensure `os.environ["GOOGLE_APPLICATION_CREDENTIALS"]` is explicitly set
  - [x] Configure fallback AI provider resolution
  - [x] Update `ENVIRONMENT.md` with credentials location and security rules
  - [x] Update `STATE.md`

## AI Pipeline
- [x] Configure dual-provider AI pipeline with Vertex AI and OpenRouter fallback
  - [x] Add `httpx>=0.27.0` to `requirements.txt` and install in venv
  - [x] Configure `VERTEX_MODEL = "gemini-3.5-flash-lite"` with `VERTEX_LOCATION = "global"` in `backend/config.py`
  - [x] Create `backend/ai_client.py` with resilient `generate_response()`
  - [x] Create test script `backend/test_ai.py` and verify all tests pass
  - [x] Update `STATE.md` and `TASKS.md`

## FastAPI Backend Server
- [x] Implement FastAPI server with /api/consult endpoint and CORS
  - [x] Initialize FastAPI app and configure CORS for desktop and mobile devices (`--host 0.0.0.0`)
  - [x] Define `ConsultRequest` and `ConsultResponse` schemas
  - [x] Define `KZN_CLINICAL_SYSTEM_PROMPT` for rural KZN clinical consultations
  - [x] Implement `GET /api/health` and `POST /api/consult` endpoints
  - [x] Create `backend/test_server.py` and verify 200 OK responses
  - [x] Document server launch instructions in `ENVIRONMENT.md`
  - [x] Update `STATE.md` and `TASKS.md`

## Frontend PWA & Live UI
- [x] Scaffold Vite PWA with Tailwind CSS and build Live Co-Pilot UI
  - [x] Scaffold Vite React app in `frontend/`
  - [x] Install and configure Tailwind CSS, PostCSS, Autoprefixer, Lucide React, and VitePWA
  - [x] Configure proxy for `/api` to `http://localhost:8000`
  - [x] Build 3-tab navigation shell (`Live`, `Scenarios`, `Drills`) with header health indicator in `App.jsx`
  - [x] Implement operational `LiveConsult.jsx` co-pilot with modes, presets, provider badge, and copy button
  - [x] Verify production build compiles cleanly (`npm run build`)
  - [x] Update `ENVIRONMENT.md`, `STATE.md`, and `TASKS.md`

## Clinical Cards & GFM Presentation
- [x] Transform Live Co-Pilot output into structured high-contrast Clinical Cards
  - [x] Install `react-markdown` and `remark-gfm` in `frontend/`
  - [x] Update `backend/main.py` with structured JSON schema and resilient `parse_questions_response` fallback parser
  - [x] Update `backend/test_server.py` and verify endpoint tests
  - [x] Redesign `frontend/src/components/LiveConsult.jsx` with Clinical Question Cards and Markdown rendering
  - [x] Clean up input area with prominent KZN presets and comfortable padding
  - [x] Verify production build compiles cleanly (`npm run build`)
  - [x] Update `STATE.md` and `TASKS.md`

## Interactive Consultation Steering Loop
- [x] Upgrade Live Tab into an Interactive Steering Loop with Clickable Responses & Steering Bar
  - [x] Enhance `backend/main.py` with `PatientResponseOption`, `LoopQuestionItem`, and `ConsultLoopResponse`
  - [x] Update `KZN_CLINICAL_SYSTEM_PROMPT` with anticipated patient replies rules and bedside tone
  - [x] Support conversation history and `steer_instruction` in `/api/consult`
  - [x] Redesign `frontend/src/components/LiveConsult.jsx`:
    - [x] Clickable anticipated patient response chips under each card
    - [x] Collapsible turn-by-turn consultation history log
    - [x] Sticky bottom steering bar with quick chips and custom input
    - [x] Top utility bar with "New Consult" reset and KZN presets
  - [x] Verify endpoints via `backend/test_server.py`
  - [x] Verify frontend build via `npm run build`
  - [x] Update `STATE.md` and `TASKS.md`

## Mobile Scenario Stepper & Offline Practice
- [x] Implement text-only mobile scenario stepper with grammar breakdown and 1-tap drill flagging
  - [x] Create `frontend/src/utils/drillsStorage.js` with `localStorage` persistence and `drills-updated` reactive event dispatching
  - [x] Create `frontend/src/data/scenariosData.js` with pre-filled community scenarios:
    - [x] Scenario 1: Gogo MaMthethwa — Ukubonisana (Life Counseling)
    - [x] Scenario 2: The Roadside Greeting — Ukubingelela & News
    - [x] Detailed phonetic text cues and multi-morpheme grammatical breakdowns on all patient turns and doctor options
  - [x] Redesign `frontend/src/components/ScenariosView.jsx` as a mobile-first offline stepper:
    - [x] Scenario selector and step progress indicator (`Step X of Y`)
    - [x] Dual independent toggles: `[ 🌐 English ]` and `[ 🔬 Detailed Grammar ]`
    - [x] High-contrast patient speech bubble with phonetic cue and 1-tap `[ Flag for Drills ]` bookmark button
    - [x] Collapsible/expandable morpheme grammar breakdown cards
    - [x] Selectable clinician phrasing options with bedside nuance and dedicated `[ 🔖 Drill ]` flagging
    - [x] Fixed bottom navigation bar with thumb-accessible `[ ‹ Back ]` and `[ Next Step › ]` / `[ Restart Scenario ]`
  - [x] Connect `frontend/src/components/DrillsGym.jsx`:
    - [x] Primary "Review List" section reactively displaying flagged scenario sentences from `localStorage`
    - [x] Speaker filters (`All`, `Patient`, `Doctor`), translation reveal toggle, complete grammar panel, and remove button
  - [x] Verify clean compilation (`npm run build`) and cross-tab reactive persistence
## Desktop Split-Screen & Latency Tracking Optimization
- [x] Optimize the Live tab for desktop with a split-screen layout, animated waiting state, and per-turn request latency badges
  - [x] Measure latency using `time.perf_counter()` on backend (`execution_time_ms`) and `performance.now()` in frontend
  - [x] Implement live ticking waiting state (`Timer` and animated dots) while awaiting Vertex AI (`gemini-3.5-flash-lite`)
  - [x] Redesign layout to desktop split-screen grid (`lg:col-span-8` active console, `lg:col-span-4` sticky history)
  - [x] Enhance history cards with turn latency badges (`⚡ 1.2s`), timestamp, and clean dividers
  - [x] Add empty state illustration for consultation timeline
  - [x] Verify production bundle compiles cleanly (`npm run build`)
  - [x] Update `STATE.md` and `TASKS.md`

## SQLite Seed Harvester & Zero-Click Auto-Harvesting
- [x] Implement SQLite Seed Harvester with Firebase-compatible schema and silent zero-click auto-harvesting
  - [x] Create `backend/database.py` with `init_db`, `save_seed`, `get_seeds`, `delete_seed`, and `export_seeds_for_firebase`
  - [x] Add `backend/kuzwakele.db` to `.gitignore`
  - [x] Connect FastAPI lifespan to auto-initialize SQLite database on startup
  - [x] Define `SaveSeedRequest` and endpoints: `POST /api/seeds`, `GET /api/seeds`, `DELETE /api/seeds/{id}`, `GET /api/seeds/export`
  - [x] Add automated test cases in `backend/test_server.py` verifying seed save, retrieval, Firestore export, and deletion
  - [x] Refactor `LiveConsult.jsx` for silent zero-click auto-harvesting:
    - [x] Remove manual `[ Save Seed ]` / `[ Saved Seed ]` buttons and target intent dropdown
    - [x] Remove unused state (`savingSeedId`, `savedSeedIds`, `turnTargetIntent`)
    - [x] Implement non-blocking fire-and-forget `autoSaveTurn(turnData)` helper
    - [x] Automatically trigger `autoSaveTurn()` on turn commitment and steering resolution
    - [x] Minimize history cards to Turn Header, Doctor turn, and Patient turn
  - [x] Verify clean frontend compilation (`npm run build`) and backend tests (`python backend/test_server.py`)

## Grammar Reference Tab & Drill Integration
- [x] Implement dedicated Grammar Reference Tab with category filters, structural formulas, clinical/community examples, and drill integration
  - [x] Create curated grammar reference dataset `frontend/src/data/grammarData.js` across 4 targeted modules:
    - [x] Category 1: Past Continuous & Remote Past (`past-tenses`) - Immediate Past Continuous (`be-`), Remote Past Simple (`nga-`, `wa-`, `sa-`), Remote Past Continuous (`ngangi-`, `waye-`)
    - [x] Category 2: The Stative Aspect (`stative`) - Stative mechanism (*-vuvukile*, *-khathele*, *-lambile*, *-lele*) and contracted stative rule (*-ile* to *-e* before complement)
    - [x] Category 3: Conjunctions & Clause Governance (`conjunctions`) - Subjunctive triggers (*ukuze*, *kumele*, *ake*), Participial triggers (*uma*, *ngenkathi*, *ngoba*, *lapho... khona* with Class 1 `u-` -> `e-` and `-nga-...-i`), Coordinating (*kodwa*, *futhi*, *noma*, *kanti*)
    - [x] Category 4: Time-Flow Aspectual Infixes (`aspect-infixes`) - Progressive `-sa-`, Exclusive `se-` / `-se-`, Negative incomplete `-ka-`
  - [x] Create `frontend/src/components/GrammarReference.jsx`:
    - [x] Header, stats pill, and search input with instant filtering across title, formula, words, and explanations
    - [x] Category filter pills (`All Rules`, `Past Continuous & Remote`, `Stative Aspect`, `Conjunctions & Clauses`, `Time Infixes (-sa-, se-, -ka-)`)
    - [x] High-contrast rule cards with category badges, monospace formula banners, and one-click copy buttons
    - [x] Common English-speaker pitfall warning callouts (`AlertTriangle`)
    - [x] Contextual clinical vs community example cards with expandable/collapsible morpheme breakdown tokens
    - [x] 1-Tap "Flag for Drills" button integrated with `localStorage` and reactive `drills-updated` event dispatch
  - [x] Update `frontend/src/App.jsx` with 4th navigation tab (`Grammar Rules` with `Library` icon)
  - [x] Enhance `frontend/src/components/DrillsGym.jsx` to render both `g.analysis` and `g.gloss`
  - [x] Verify production build (`npm run build`) and backend tests (`python backend/test_server.py`)
  - [x] Test responsive UI, category filtering, morpheme expansion, and drill flagging end-to-end in browser subagent

## Grammar Section Hub Refactor & Mobile Navigation Overflow Fix
- [x] Refactor Grammar Reference into a 2-level Section Hub (Directory Index -> Section Detail View) and fix mobile tab clipping
  - [x] Update `frontend/src/App.jsx` navigation bar:
    - [x] Adjust tab padding to `px-2.5 sm:px-3.5` and gap to `gap-1 sm:gap-1.5`
    - [x] Add responsive text spans: `Live<span className="hidden md:inline"> Co-Pilot</span>`, `Drills<span className="hidden sm:inline"> Gym</span>`, `Grammar<span className="hidden sm:inline"> Rules</span>`
    - [x] Verify clean fit on narrow mobile screens (375px - 390px) without truncation
  - [x] Update `frontend/src/data/grammarData.js`:
    - [x] Export `GRAMMAR_SECTIONS` with badges, rule counts, key concepts, and preview hooks
  - [x] Refactor `frontend/src/components/GrammarReference.jsx`:
    - [x] State architecture with `selectedCategory === null` (Directory Hub) and `searchQuery`
    - [x] Level 1 Directory Index Hub displaying 4 section cards with icons, badges, key concepts, preview hooks, and drill-down links
    - [x] Level 2 Section Detail View with `[ ‹ All Sections ]` header navigation, active section rules, and bottom return button
    - [x] Unified search results view searching across all sections with clear search action
  - [x] Verify production build (`npm run build`)
  - [x] End-to-end browser subagent verification on mobile viewport (380x750)
