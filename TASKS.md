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
    - [x] Scenario 1: Gogo MaMthethwa â Ukubonisana (Life Counseling)
    - [x] Scenario 2: The Roadside Greeting â Ukubingelela & News
    - [x] Detailed phonetic text cues and multi-morpheme grammatical breakdowns on all patient turns and doctor options
  - [x] Redesign `frontend/src/components/ScenariosView.jsx` as a mobile-first offline stepper:
    - [x] Scenario selector and step progress indicator (`Step X of Y`)
    - [x] Dual independent toggles: `[ ð English ]` and `[ ð¬ Detailed Grammar ]`
    - [x] High-contrast patient speech bubble with phonetic cue and 1-tap `[ Flag for Drills ]` bookmark button
    - [x] Collapsible/expandable morpheme grammar breakdown cards
    - [x] Selectable clinician phrasing options with bedside nuance and dedicated `[ ð Drill ]` flagging
    - [x] Fixed bottom navigation bar with thumb-accessible `[ â¹ Back ]` and `[ Next Step âº ]` / `[ Restart Scenario ]`
  - [x] Connect `frontend/src/components/DrillsGym.jsx`:
    - [x] Primary "Review List" section reactively displaying flagged scenario sentences from `localStorage`
    - [x] Speaker filters (`All`, `Patient`, `Doctor`), translation reveal toggle, complete grammar panel, and remove button
  - [x] Verify clean compilation (`npm run build`) and cross-tab reactive persistence
## Desktop Split-Screen & Latency Tracking Optimization
- [x] Optimize the Live tab for desktop with a split-screen layout, animated waiting state, and per-turn request latency badges
  - [x] Measure latency using `time.perf_counter()` on backend (`execution_time_ms`) and `performance.now()` in frontend
  - [x] Implement live ticking waiting state (`Timer` and animated dots) while awaiting Vertex AI (`gemini-3.5-flash-lite`)
  - [x] Redesign layout to desktop split-screen grid (`lg:col-span-8` active console, `lg:col-span-4` sticky history)
  - [x] Enhance history cards with turn latency badges (`â¡ 1.2s`), timestamp, and clean dividers
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
    - [x] Level 2 Section Detail View with `[ â¹ All Sections ]` header navigation, active section rules, and bottom return button
    - [x] Unified search results view searching across all sections with clear search action
  - [x] Verify production build (`npm run build`)
  - [x] End-to-end browser subagent verification on mobile viewport (380x750)

## Intensive Stative Aspect Expansion & Interactive Checkpoints
- [x] Intensively expand "The Stative Aspect" section in Grammar Reference with 5 deep rules, irregular mutation grid, negative formations, bedside inventory, and interactive practice checkpoints
  - [x] Update `frontend/src/data/grammarData.js`:
    - [x] Rule 1: Process vs. Present Resulting State (`stative-core-concept`)
    - [x] Rule 2: The Contraction Rule (`stative-contraction-rule`, `-ile` vs `-e` before adverbs/complements)
    - [x] Rule 3: Irregular Stative Mutations (`stative-irregular-stems`, `-ala -> -ele`, `-ama -> -eme`, `-sutha -> -suthi`, `-lala -> -lele`)
    - [x] Rule 4: Stative Negation Retention Trap (`stative-negation-trap`, retaining `-ile` / `-ele` without shifting to `-i`)
    - [x] Rule 5: Essential Clinical Stative Inventory (`stative-clinical-lexicon`, peripheral edema, dehydration, consciousness, effusion)
    - [x] Export `STATIVE_IRREGULAR_TABLE` comparing 10 high-yield roots, positive statives, and negative statives
    - [x] Export `STATIVE_PRACTICE_CHECKPOINTS` with 3 clinical challenges, target concepts, answer reveals, and breakdown tokens
    - [x] Update `stative` section in `GRAMMAR_SECTIONS` to `5 Rules`
  - [x] Enhance `frontend/src/components/GrammarReference.jsx`:
    - [x] Render collapsible High-Yield Stative Mutation Reference Grid with color-coded positive/negative badges
    - [x] Render Interactive Checkpoint Bedside Self-Test with toggleable answer reveal and 1-tap `[ Flag for Drills ]` bookmarking
  - [x] Verify clean production build (`npm run build`)
  - [x] Verify in mobile browser subagent: 5 rules rendered, answers revealed, drill flagged and verified in Drills Gym

## Intensive Past Tenses Expansion & Interactive History-Taking Checkpoints
- [x] Intensively expand "Past Continuous & Remote Past" in Grammar Reference with 5 clinical-grade rules, compound concord matrix, and interactive diagnostic self-checks
  - [x] Update `frontend/src/data/grammarData.js`:
    - [x] Rule 1: Immediate Past Continuous / Imperfect (`past-immediate-continuous`, `be-` + concords `bengi-`, `ubu-`, `ube-`, `bebe-`)
    - [x] Rule 2: Remote Past Simple / Deep Past (`past-remote-simple`, fused `-a-` concords `nga-`, `wa-`, `sa-`, `ba-`, `kwa-`)
    - [x] Rule 3: Remote Past Continuous / Habitual (`past-remote-continuous`, `ngangi-`, `wawu-`, `waye-`, `sasi-`, `babe-`)
    - [x] Rule 4: Past Negation Systems (`past-negation-systems`, completed `-anga` vs continuous `bengi-nga-...-i`)
    - [x] Rule 5: Clinical History-Taking & Onset Formulas (`past-clinical-history-stems`, onset timeline formulas)
    - [x] Export `PAST_CONCORD_MATRIX` comparing 7 subject persons/classes across the 3 past paradigms
    - [x] Export `PAST_PRACTICE_CHECKPOINTS` with 3 clinical challenges, target concepts, answer reveals, rule tips, and breakdown tokens
    - [x] Update `past-tenses` section in `GRAMMAR_SECTIONS` to `badge: '5 Rules'`, `ruleCount: 5`
  - [x] Enhance `frontend/src/components/GrammarReference.jsx`:
    - [x] Render collapsible Past Concord & Auxiliary Reference Matrix table comparing 7 core forms with styled badges
    - [x] Render Interactive Checkpoint: History-Taking Clinical Self-Check with answer reveal toggles and 1-tap `[ Flag for Drills ]` bookmarking
    - [x] Sync past checkpoints in `refreshFlaggedState()` for cross-tab reactivity with Drills Gym
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean PWA bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified 5 rules, pitfall callouts, and formulas
    - [x] Verified concord matrix table
    - [x] Tested answer reveal on Challenge #1
    - [x] Flagged Challenge #1 and confirmed in Drills Gym

## Intensive Conjunctions & Clause Governance Expansion
- [x] Intensively expand "Conjunctions & Clause Governance" in Grammar Reference with 5 clinical-grade rules, clause governance matrix, and clinical advisory self-checks
  - [x] Update `frontend/src/data/grammarData.js`:
    - [x] Rule 1: Subjunctive-Triggering Conjunctions (`conj-subjunctive-triggers`, *ukuze*, *kufanele*, *kumele*, *ake*, final vowel `-e`, `-nga-...-i` negative)
    - [x] Rule 2: Participial-Triggering Conjunctions (`conj-participial-triggers`, *uma*, *ngenkathi*, *ngoba*, Class 1 `u-` -> `e-`, Class 2 `ba-` -> `be-`, `-nga-...-i` negative)
    - [x] Rule 3: Independent Coordinating Conjunctions (`conj-coordinating-linkers`, *kodwa*, *futhi*, *noma*, *kanti*, neutral clause coordination)
    - [x] Rule 4: Prepositional Conjunctions (`conj-compound-prepositional`, *ngaphambi kokuba* + subjunctive vs *emva kokuba* + participial/stative)
    - [x] Rule 5: Clinical Advisory & Action-Plan Formulations (`conj-clinical-advisories`, multi-clause conditional discharge advisories and emergency escalation)
    - [x] Export `CONJUNCTION_GOVERNANCE_TABLE` comparing 8 key conjunction particles, triggered moods, mutation rules, and negative forms
    - [x] Export `CONJUNCTION_PRACTICE_CHECKPOINTS` with 3 clinical challenges, target concepts, answer reveals, rule tips, and breakdown tokens
    - [x] Update `conjunctions` section in `GRAMMAR_SECTIONS` to `badge: '5 Rules'`, `ruleCount: 5`
  - [x] Enhance `frontend/src/components/GrammarReference.jsx`:
    - [x] Render collapsible Clause Governance Matrix Table comparing 8 core forms with amber styling
    - [x] Render Interactive Checkpoint: Clause Governance Clinical Self-Check with answer reveal toggles and 1-tap `[ Flag for Drills ]` bookmarking
    - [x] Sync conjunctions checkpoints in `refreshFlaggedState()` for cross-tab reactivity with Drills Gym
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean PWA bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified 5 rules, pitfall callouts, and formulas
    - [x] Verified Clause Governance Matrix table
    - [x] Tested answer reveal on Challenge #1
    - [x] Flagged Challenge #1 and confirmed in Drills Gym
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Intensive Time-Flow Aspectual Infixes Expansion
- [x] Intensively expand "Time-Flow Aspectual Infixes" in Grammar Reference with 5 clinical-grade rules, symptom trajectory matrix, and longitudinal monitoring self-checks
  - [x] Update `frontend/src/data/grammarData.js`:
    - [x] Rule 1: Progressive Infix `-sa-` ("Still" & "No Longer", `aspect-progressive-sa`, `SC + -sa- + Verb Root + -a` vs `a- + SC + -sa- + Verb Root + -i`)
    - [x] Rule 2: Exclusive Aspect `se-` / `-se-` ("Now" & "Already", `aspect-exclusive-se`, `sengi-`, `ususe-` / `use-`, `sebe-`, `sekuyi-`, state transitions)
    - [x] Rule 3: Negative Incomplete Infix `-ka-` ("Not Yet", `aspect-incomplete-ka`, `a- + SC + -ka- + Verb Root + -i / -e`, pending lab turnaround and unfulfilled therapy)
    - [x] Rule 4: Occasional / Frequentative Infix `-ke-` ("Ever / Once / Sometimes", `aspect-occasional-ke`, `SC + -ke- + Verb Root + -e / -a`, review of systems and allergic history)
    - [x] Rule 5: Clinical Symptom Trajectory & Longitudinal Monitoring (`aspect-clinical-trajectory`, multi-encounter disease tracking: prior `wake...`, transition `se-...`, persistence `-sa-...`, resolution `abusekho...`)
    - [x] Export `ASPECT_INFIX_MATRIX` comparing 4 temporal infixes with formulas, concepts, and bedside examples
    - [x] Export `ASPECT_INFIX_CHECKPOINTS` with 3 clinical challenges, target concepts, answer reveals, rule tips, and breakdown tokens
    - [x] Update `aspect-infixes` section in `GRAMMAR_SECTIONS` to `badge: '5 Rules'`, `ruleCount: 5`
  - [x] Enhance `frontend/src/components/GrammarReference.jsx`:
    - [x] Render collapsible Symptom Trajectory Matrix Table comparing 4 core temporal infixes with emerald styling
    - [x] Render Interactive Checkpoint: Symptom Trajectory Clinical Self-Check with answer reveal toggles and 1-tap `[ Flag for Drills ]` bookmarking
    - [x] Sync aspect infix checkpoints in `refreshFlaggedState()` for cross-tab reactivity with Drills Gym
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean PWA bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified 5 rules, formulas, and pitfall callouts
    - [x] Verified Symptom Trajectory Matrix table
    - [x] Tested answer reveal on Challenge #1 (`Usabuzwa ubuhlungu besifuba, noma abusebuhlungu?`)
    - [x] Flagged Challenge #1 and confirmed in Drills Gym
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## GrammarReference Modularization & Subcomponent Architecture
- [x] Modularize `GrammarReference.jsx` by extracting reusable subcomponents to shrink file under 250 lines without regressions
  - [x] Create `frontend/src/components/grammar/GrammarRuleCard.jsx` (standalone rule card with formula, explanation, pitfall box, examples, breakdowns, and copy/drill actions)
  - [x] Create `frontend/src/components/grammar/GrammarPracticeDrawer.jsx` (generic collapsible clinical challenge drawer with reveal and drill toggle)
  - [x] Create `frontend/src/components/grammar/GrammarMatrixTable.jsx` (generic collapsible reference table container with responsive scrollbar)
  - [x] Create `frontend/src/components/grammar/GrammarSectionTables.jsx` (specialized table content for past tenses, statives, conjunctions, and aspect infixes)
  - [x] Create `frontend/src/components/grammar/GrammarDirectoryView.jsx` (Level 1 Section Hub directory view with 2x2 cards and search bar)
  - [x] Create `frontend/src/components/grammar/grammarSectionConfigs.js` (presets and theme configuration)
  - [x] Refactor `frontend/src/components/GrammarReference.jsx` (consolidated state, unified practice drill handler, shrunk to 237 lines)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean PWA bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent (Directory view, search, section navigation, matrix collapse/expand, practice reveal, drill flagging)
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Complete Grammar Reference Curriculum (Verbal Extensions & Copulative Locatives)
- [x] Complete the Grammar Reference curriculum by adding the final two core grammatical pillars with 10 clinical-grade rules, reference tables, practice checkpoints, and drill integration
  - [x] Deepen Grammar Data in `frontend/src/data/grammarData.js`:
    - [x] Register Section 5 `verbal-extensions` ("Verbal Extensions & Mutations", 5 Rules, `Repeat` icon, fuchsia theme)
    - [x] Register Section 6 `copulatives-locatives` ("Copulatives & Locative Shifts", 5 Rules, `MapPin` icon, rose theme)
    - [x] Append 5 clinical rules for `verbal-extensions`: Applicative `-ela`, Causative `-isa`, Passive `-wa` with labial palatalization, Neuter-Stative `-eka`/`-akala`, and Reciprocal `-ana`
    - [x] Append 5 clinical rules for `copulatives-locatives`: Identification Copulatives, Negative Identification, Locative Copulatives & Presence (`khona`/`akakho`), Locative Sound Mutations (`e-...-ini` & palatalization), and Possessive Concord Coalescence
    - [x] Export `VERBAL_EXTENSIONS_TABLE` and `VERBAL_EXTENSIONS_CHECKPOINTS` (3 interactive challenges)
    - [x] Export `COPULATIVE_LOCATIVE_TABLE` and `COPULATIVE_LOCATIVE_CHECKPOINTS` (3 interactive challenges)
  - [x] Create Table Renderers in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `VerbalExtensionsTable` with 5 extension rows, formulas, sound shifts, and clinical examples
    - [x] Export `CopulativesLocativesTable` comparing 6 noun classes across positive/negative copulatives and locative shifts
  - [x] Configure Subcomponents & Themes:
    - [x] Add fuchsia and rose themes in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register themes and section configs in `grammarSectionConfigs.js`
    - [x] Add icons and dynamic sections count in `GrammarDirectoryView.jsx`
    - [x] Sync `VERBAL_EXTENSIONS_CHECKPOINTS` and `COPULATIVE_LOCATIVE_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()`
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean PWA bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified Directory displays all 6 sections dynamically
    - [x] Verified Section 5 (Verbal Extensions) table, 5 rules, and practice reveal
    - [x] Verified Section 6 (Copulatives & Locatives) table, 5 rules, and practice reveal
    - [x] Flagged challenges from both sections and confirmed presence in Drills Gym
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Deficient / Auxiliary Verbs (Izenzo Ezisizayo - Section 7)
- [x] Implement Section 7 ("Deficient / Auxiliary Verbs") covering auxiliary stems, mood chaining, reference matrix, and bedside practice checkpoints
  - [x] Deepen Grammar Data in frontend/src/data/grammarData.js:
    - [x] Register Section 7 deficient-verbs ("Deficient / Auxiliary Verbs", 5 Rules, Zap icon, sky theme)
    - [x] Append 5 clinical-grade rules: Casual Occurrence & Immediacy (-vele), Near-Misses & Imminent Events (-cishe), Recurrence & Adherence Warnings (-phinde), Inevitable Choice & Resignation (-sale), and Elapsed Time & Chronicity (-kade)
    - [x] Export DEFICIENT_VERBS_TABLE mapping 6 stems (-vele, -cishe, -phinde, -sale, -kade, -simze) with governed moods and clinical utility
    - [x] Export DEFICIENT_VERBS_CHECKPOINTS with 3 interactive challenges (near-fall with -cishe, hortative prompt with -vele, adherence warning with -phinde)
  - [x] Create Table Renderer in frontend/src/components/grammar/GrammarSectionTables.jsx:
    - [x] Export DeficientVerbsTable mapping auxiliary stem, meaning, governed mood, formula, clinical application, and bedside example
  - [x] Configure Subcomponents & Themes:
    - [x] Add sky theme palette in GrammarPracticeDrawer.jsx and GrammarMatrixTable.jsx
    - [x] Register theme and section config in grammarSectionConfigs.js
    - [x] Bind Zap icon in GrammarDirectoryView.jsx (dynamic badge shows 7 Sections  35 Rules)
    - [x] Sync DEFICIENT_VERBS_CHECKPOINTS in GrammarReference.jsx 
efreshFlaggedState()
  - [x] Run production verification:
    - [x] 
pm run build in frontend/ (0 compilation errors, clean PWA bundle)
    - [x] ackend/test_server.py (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified Directory displays 7 section cards
    - [x] Verified Section 7 (Deficient Verbs) matrix table, 5 rules, and practice drawer
    - [x] Revealed Challenge #2 (*Ake uvele ulale embhedeni*) and flagged for drills
    - [x] Confirmed presence in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (firebase deploy --only hosting)

## Grammar Data Modularization & Aggregating Barrel Exporter
- [x] Decompose frontend/src/data/grammarData.js into modular, category-specific data files in frontend/src/data/grammar/ and convert grammarData.js into a clean aggregating barrel exporter
  - [x] Create directory frontend/src/data/grammar/
  - [x] Create pastTenses.js exporting PAST_TENSES_SECTION, PAST_TENSES_RULES, PAST_CONCORD_MATRIX, PAST_PRACTICE_CHECKPOINTS
  - [x] Create stative.js exporting STATIVE_SECTION, STATIVE_RULES, STATIVE_IRREGULAR_TABLE, STATIVE_PRACTICE_CHECKPOINTS
  - [x] Create conjunctions.js exporting CONJUNCTIONS_SECTION, CONJUNCTIONS_RULES, CONJUNCTION_GOVERNANCE_TABLE, CONJUNCTION_PRACTICE_CHECKPOINTS
  - [x] Create aspectInfixes.js exporting ASPECT_INFIXES_SECTION, ASPECT_INFIXES_RULES, ASPECT_INFIX_MATRIX, ASPECT_INFIX_CHECKPOINTS
  - [x] Create verbalExtensions.js exporting VERBAL_EXTENSIONS_SECTION, VERBAL_EXTENSIONS_RULES, VERBAL_EXTENSIONS_TABLE, VERBAL_EXTENSIONS_CHECKPOINTS
  - [x] Create copulativesLocatives.js exporting COPULATIVES_LOCATIVES_SECTION, COPULATIVES_LOCATIVES_RULES, COPULATIVE_LOCATIVE_TABLE, COPULATIVE_LOCATIVE_CHECKPOINTS
  - [x] Create deficientVerbs.js exporting DEFICIENT_VERBS_SECTION, DEFICIENT_VERBS_RULES, DEFICIENT_VERBS_TABLE, DEFICIENT_VERBS_CHECKPOINTS
  - [x] Refactor frontend/src/data/grammarData.js into an aggregating barrel exporter (67 lines, under 80-line limit) re-exporting GRAMMAR_CATEGORIES, GRAMMAR_SECTIONS, GRAMMAR_RULES, all 7 reference matrices, and all 7 checkpoint sets with 100% backward compatibility
  - [x] Run production verification:
    - [x] 
pm run build in frontend/ (0 compilation errors, clean bundle)
    - [x] ackend/test_server.py (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified 7 sections and 35 total rules load seamlessly
    - [x] Verified table rendering and checkpoint breakdowns across modules
    - [x] Verified reactive drill flagging into Drills Gym
  - [x] Deploy to Firebase Hosting (firebase deploy --only hosting)
