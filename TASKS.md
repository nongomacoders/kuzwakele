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

## Object Concords — Izivumelwano Zikabagcwalisi (Section 8)
- [x] Implement Section 8 ("Object Concords — Izivumelwano Zikabagcwalisi") covering pronoun infix mechanics, class-specific concords, definiteness marking, the reflexive prefix `-zi-`, and clinical bedside checkpoints
  - [x] Create Category Data Module in `frontend/src/data/grammar/objectConcords.js`:
    - [x] Export `OBJECT_CONCORDS_SECTION` (`object-concords`, "Object Concords (Object Infixes)", 5 Rules, Target icon, blue theme)
    - [x] Export `OBJECT_CONCORD_MATRIX` (11 rows comparing 1st Sing, 2nd Sing, Class 1/1a, Class 2, Class 3, Class 5, Class 6, Class 7, Class 10, Class 14, and Reflexive)
    - [x] Export `OBJECT_CONCORD_CHECKPOINTS` with 3 clinical challenges (medication adherence with `-wa-`, doctor examination with `-ku-`, subjective wellness with `-zi-`)
    - [x] Export `OBJECT_CONCORDS_RULES` (5 clinical rules: `obj-infix-slot`, `obj-definiteness-dual`, `obj-class1-m-mu`, `obj-clinical-concords`, `obj-reflexive-zi`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `OBJECT_CONCORDS_SECTION`, `OBJECT_CONCORDS_RULES`, `OBJECT_CONCORD_MATRIX`, and `OBJECT_CONCORD_CHECKPOINTS`
    - [x] Add `{ id: 'object-concords', label: 'Object Concords (-m-, -wa-, -ku-)' }` to `GRAMMAR_CATEGORIES` (now 8 sections, 40 rules)
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `ObjectConcordsTable` rendering the 11-row object concord matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `blue` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `object-concords` in `grammarSectionConfigs.js`
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `Target` icon for `object-concords` in `GrammarDirectoryView.jsx` (displays dynamic badge `8 Sections • 40 Rules`)
    - [x] Sync `OBJECT_CONCORD_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file maintained at 246 lines, under 250 boundary)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 8 section cards with `8 Sections • 40 Rules`
    - [x] Verified Section 8 rules and `ObjectConcordsTable` matrix
    - [x] Revealed Challenge #1 (*Uyawaphuza amaphilisi njalo ekuseni?*) and flagged for drills
    - [x] Confirmed presence in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## The Qualificative System: True Adjectives & Relatives (Section 9)
- [x] Implement Section 9 ("The Qualificative System: True Adjectives & Relatives — Iziphawulo Nezibaluli") covering double vs. single concords, verbal relatives with -yo, attributive vs. predicative shifts, clinical diagnostic descriptors, and bedside practice checkpoints
  - [x] Create Category Data Module in `frontend/src/data/grammar/qualificatives.js`:
    - [x] Export `QUALIFICATIVES_SECTION` (`qualificatives`, "The Qualificative System (Adjectives & Relatives)", 5 Rules, Sparkles icon, orange theme)
    - [x] Export `QUALIFICATIVE_MATRIX` (8 rows comparing Class 1/1a, Class 2, Class 5, Class 6, Class 7, Class 9, Class 10, Class 14 across attributive/predicative adjectives and relatives)
    - [x] Export `QUALIFICATIVE_CHECKPOINTS` with 3 clinical challenges (True Adj vs Relative distinction, verbal relative with clause-final *-yo*, and physical exam predicative shift)
    - [x] Export `QUALIFICATIVES_RULES` (5 clinical rules: `qual-true-adjectives`, `qual-relative-system`, `qual-verbal-relatives`, `qual-attributive-vs-predicative`, `qual-clinical-descriptors`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `QUALIFICATIVES_SECTION`, `QUALIFICATIVES_RULES`, `QUALIFICATIVE_MATRIX`, and `QUALIFICATIVE_CHECKPOINTS`
    - [x] Add `{ id: 'qualificatives', label: 'Qualificatives (Adjectives & Relatives)' }` to `GRAMMAR_CATEGORIES` (now 9 sections, 45 rules)
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `QualificativesTable` rendering the 8-class matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `orange` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `qualificatives` in `grammarSectionConfigs.js` with Sparkles icon
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `Sparkles` icon for `qualificatives` in `GrammarDirectoryView.jsx` (displays dynamic badge `9 Sections • 45 Rules`)
    - [x] Sync `QUALIFICATIVE_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file maintained at 248 lines, under 250 boundary)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 9 section cards with `9 Sections • 45 Rules`
    - [x] Verified Section 9 rules and `QualificativesTable` matrix
    - [x] Revealed Challenge #3 (*Isisu asithambile; siqatha futhi sibuhlungu kakhulu.*) and flagged for drills
    - [x] Confirmed presence in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Absolute & Quantitative Pronouns (Izabizwana Zoqobo Nezenani - Section 10)
- [x] Implement Section 10 ("Absolute & Quantitative Pronouns") covering independent stems, prepositional binding (na-, nga-, ku-), quantifiers (-onke, -edwa), and clinical independence assessments
  - [x] Create Category Data Module in `frontend/src/data/grammar/pronouns.js`:
    - [x] Export `PRONOUNS_SECTION` (`pronouns`, "Absolute & Quantitative Pronouns", 5 Rules, UserCheck icon, cyan theme)
    - [x] Export `PRONOUNS_MATRIX` (8-row table comparing 1st Sing, 2nd Sing, Class 1/1a, Class 2, Class 6, Class 7, Class 9, Class 10 across absolute, associative, instrumental, locative, and quantitative forms)
    - [x] Export `PRONOUNS_CHECKPOINTS` with 3 clinical challenges (indirect relative with *kuso*, geriatric independence with *yedwa*, and complete antibiotic course with *wonke*)
    - [x] Export `PRONOUNS_RULES` (5 clinical rules: `pron-absolute-contrast`, `pron-preposition-contractions`, `pron-quantitative-onke`, `pron-quantitative-edwa`, `pron-clinical-adherence`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `PRONOUNS_SECTION`, `PRONOUNS_RULES`, `PRONOUNS_MATRIX`, and `PRONOUNS_CHECKPOINTS`
    - [x] Add `{ id: 'pronouns', label: 'Absolute & Quantitative Pronouns' }` to `GRAMMAR_CATEGORIES`
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `PronounsTable` rendering the 8-class matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `cyan` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `pronouns` in `grammarSectionConfigs.js` with `UserCheck` icon

## Demonstratives & Spatial Deixis (Izabizwana Zokukhomba - Section 11)
- [x] Implement Section 11 ("Demonstratives & Spatial Deixis") covering Positions 1/2/3, obligatory initial-vowel elision, copulative presenters (nangu, nasi), and physical examination deixis
  - [x] Create Category Data Module in `frontend/src/data/grammar/demonstratives.js`:
    - [x] Export `DEMONSTRATIVES_SECTION` (`demonstratives`, "Demonstratives & Spatial Deixis", 5 Rules, Navigation icon, amber theme)
    - [x] Export `DEMONSTRATIVES_MATRIX` (8-row table comparing Position 1 "this", Position 2 "that referenced", Position 3 "that yonder", elided examples, and clinical applications)
    - [x] Export `DEMONSTRATIVES_CHECKPOINTS` with 3 clinical challenges (anatomical localization with *lobu buhlungu* / *kulo mlenze*, referencing prior complaints with *leyo nkinga*, and handover with *nayi* / *nazi*)
    - [x] Export `DEMONSTRATIVES_RULES` (5 clinical rules: `dem-position-1-near`, `dem-position-2-referenced`, `dem-position-3-remote`, `dem-vowel-elision`, `dem-copulative-presenters`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `DEMONSTRATIVES_SECTION`, `DEMONSTRATIVES_RULES`, `DEMONSTRATIVES_MATRIX`, and `DEMONSTRATIVES_CHECKPOINTS`
    - [x] Add `{ id: 'demonstratives', label: 'Demonstratives & Spatial Deixis' }` to `GRAMMAR_CATEGORIES` (now 11 sections, 55 rules total)
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `DemonstrativesTable` rendering the 8-class demonstratives matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `amber` / `yellow` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `demonstratives` in `grammarSectionConfigs.js` with `Navigation` icon
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `UserCheck` (Pronouns) and `Navigation` (Demonstratives) in `GrammarDirectoryView.jsx` (dynamic badge shows `11 Sections • 55 Rules`)
    - [x] Sync `PRONOUNS_CHECKPOINTS` and `DEMONSTRATIVES_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file maintained at 247 lines, strictly under 250 boundary)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 11 section cards with `11 Sections • 55 Rules`
    - [x] Verified Section 10 rules and `PronounsTable` matrix
    - [x] Revealed Challenge #1 (*Isimo akuso sinzima kakhulu.*) and flagged for drills
    - [x] Confirmed presence in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## The Potential Mood (Isimo Sokwenzeka - Section 12)
- [x] Implement Section 12 ("The Potential Mood") covering capability/permission with -nga-, negative potential with -nge-...-e, absolute negative with angeke, and functional mobility assessments
  - [x] Create Category Data Module in `frontend/src/data/grammar/potentialMood.js`:
    - [x] Export `POTENTIAL_MOOD_SECTION` (`potential-mood`, "The Potential Mood (Can / May)", 5 Rules, Activity icon, emerald theme)
    - [x] Export `POTENTIAL_MOOD_MATRIX` (8-row table comparing 1st Sing, 2nd Sing, Class 1/1a, Class 2, Class 6, Class 7, Class 9, Class 10 across positive potential, negative potential, absolute negative angeke, and clinical application)
    - [x] Export `POTENTIAL_MOOD_CHECKPOINTS` with 3 clinical challenges (mobility assessment with *singehambe* / *angeke sihambe*, triage consent with *ungangena*, and treatment feasibility with *singasipholisa*)
    - [x] Export `POTENTIAL_MOOD_RULES` (5 clinical rules: `pot-positive-nga`, `pot-negative-nge`, `pot-absolute-angeke`, `pot-with-oc-stative`, `pot-clinical-mobility`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `POTENTIAL_MOOD_SECTION`, `POTENTIAL_MOOD_RULES`, `POTENTIAL_MOOD_MATRIX`, and `POTENTIAL_MOOD_CHECKPOINTS`
    - [x] Add `{ id: 'potential-mood', label: 'The Potential Mood (-nga-)' }` to `GRAMMAR_CATEGORIES`
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `PotentialMoodTable` rendering the 8-class matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `emerald` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `potential-mood` in `grammarSectionConfigs.js` with `Activity` icon

## Imperatives, Prohibitions & Obligative -bo- (Imiyalo Nezivimbelo - Section 13)
- [x] Implement Section 13 ("Imperatives, Prohibitions & Obligative -bo-") covering direct commands, monosyllabic yi-, plural -ni, musa/musani prohibitions, mandatory -bo-, and procedural instructions
  - [x] Create Category Data Module in `frontend/src/data/grammar/imperatives.js`:
    - [x] Export `IMPERATIVES_SECTION` (`imperatives-prohibitions`, "Imperatives, Prohibitions & Obligative -bo-", 5 Rules, AlertCircle icon, red theme)
    - [x] Export `IMPERATIVES_MATRIX` (8-row table comparing 8 verb types across singular commands, plural commands, negative safety prohibitions, and mandatory adherence)
    - [x] Export `IMPERATIVES_CHECKPOINTS` with 3 clinical challenges (procedural stillness with *Musa ukunyakazisa*, chronic medication adherence with *Ubophuza*, and group instructions with *Hlalani*)
    - [x] Export `IMPERATIVES_RULES` (5 clinical rules: `imp-direct-monosyllabic`, `imp-plural-ni`, `imp-prohibitions-musa`, `imp-obligative-bo`, `imp-clinical-procedural`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `IMPERATIVES_SECTION`, `IMPERATIVES_RULES`, `IMPERATIVES_MATRIX`, and `IMPERATIVES_CHECKPOINTS`
    - [x] Add `{ id: 'imperatives-prohibitions', label: 'Imperatives & Prohibitions' }` to `GRAMMAR_CATEGORIES` (now 13 sections, 65 rules total)
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `ImperativesTable` rendering the 8-verb-type matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `red` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `imperatives-prohibitions` in `grammarSectionConfigs.js` with `AlertCircle` icon
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `Activity` (Potential Mood) and `AlertCircle` (Imperatives & Prohibitions) in `GrammarDirectoryView.jsx` (dynamic badge shows `13 Sections • 65 Rules`)
    - [x] Sync `POTENTIAL_MOOD_CHECKPOINTS` and `IMPERATIVES_CHECKPOINTS` via `ALL_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file maintained at 230 lines, strictly under 250 boundary)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 13 section cards with `13 Sections • 65 Rules`
    - [x] Verified Section 12 rules and `PotentialMoodTable` matrix
    - [x] Revealed Challenge #1 in Section 12 and flagged for drills
    - [x] Verified Section 13 rules and `ImperativesTable` matrix
    - [x] Revealed Challenge #1 in Section 13 and flagged for drills
    - [x] Confirmed presence of flagged items in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Associative, Instrumental & Comparative Formatives (Izakhi Zokuhlobanisa - Section 14)
- [x] Implement Section 14 ("Associative, Instrumental & Comparative Formatives") covering vowel-coalescing prefixes na- ("with/have"), nga- ("by means of"), njenga- ("like"), and nganga- ("size of")
  - [x] Create Category Data Module in `frontend/src/data/grammar/formatives.js`:
    - [x] Export `FORMATIVES_SECTION` (`formatives`, "Associative, Instrumental & Comparative Formatives", 5 Rules, Scale icon, teal theme)
    - [x] Export `FORMATIVES_MATRIX` (8-row table comparing Class 1/1a, Class 2, Class 3, Class 5, Class 6, Class 7, Class 9, Class 10/14 across associative, instrumental, comparative, and equative forms)
    - [x] Export `FORMATIVES_CHECKPOINTS` with 3 clinical challenges (MVA mechanism of injury with *ngemoto*, neuropathic pain simile with *njengomlilo*, and mass sizing with *ngangengqindi*)
    - [x] Export `FORMATIVES_RULES` (5 clinical rules: `form-associative-na`, `form-instrumental-nga`, `form-comparative-njenga`, `form-equative-nganga`, `form-coalescence-rules`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `FORMATIVES_SECTION`, `FORMATIVES_RULES`, `FORMATIVES_MATRIX`, and `FORMATIVES_CHECKPOINTS`
    - [x] Add `{ id: 'formatives', label: 'Formatives (na-, nga-, njenga-)' }` to `GRAMMAR_CATEGORIES`
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `FormativesTable` rendering the 8-class matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `teal` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `formatives` in `grammarSectionConfigs.js` with `Scale` icon

## Interrogatives & Question Enclitics (Izakhi Zokubuza - Section 15)
- [x] Implement Section 15 ("Interrogatives & Question Enclitics") covering verbal enclitics (-ni?, -phi?), interrogative stems (nini?, kanjani?, ubani?), causal inquiry (kungani? vs -elani?), and polite question openers
  - [x] Create Category Data Module in `frontend/src/data/grammar/interrogatives.js`:
    - [x] Export `INTERROGATIVES_SECTION` (`interrogatives`, "Interrogatives & Question Enclitics", 5 Rules, HelpCircle icon, indigo theme)
    - [x] Export `INTERROGATIVES_MATRIX` (8-row table comparing 8 question strategies across morphemes, clinical formulas, bedside question examples, and diagnostic utilities)
    - [x] Export `INTERROGATIVES_CHECKPOINTS` with 3 clinical challenges (pain localization with *kuphi?*, onset timeline with *nini?*, and adherence exploration with *kungani?* + participial negative)
    - [x] Export `INTERROGATIVES_RULES` (5 clinical rules: `int-enclitic-ni`, `int-enclitic-phi`, `int-stems-timeline-manner`, `int-causal-etiology`, `int-clinical-polite-openers`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `INTERROGATIVES_SECTION`, `INTERROGATIVES_RULES`, `INTERROGATIVES_MATRIX`, and `INTERROGATIVES_CHECKPOINTS`
    - [x] Add `{ id: 'interrogatives', label: 'Interrogatives & Question Enclitics' }` to `GRAMMAR_CATEGORIES` (now 15 sections, 75 rules total)
    - [x] Update `ALL_CHECKPOINTS` to include all 45 clinical practice challenges
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `InterrogativesTable` rendering the 8-strategy matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `indigo` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `interrogatives` in `grammarSectionConfigs.js` with `HelpCircle` icon
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `Scale` (Formatives) and `HelpCircle` (Interrogatives) in `GrammarDirectoryView.jsx` (dynamic badge shows `15 Sections • 75 Rules`)
    - [x] Sync `ALL_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file maintained at 230 lines, strictly under 250 boundary)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 15 section cards with `15 Sections • 75 Rules`
    - [x] Verified Section 14 rules and `FormativesTable` matrix
    - [x] Revealed Challenge #1 in Section 14 and flagged for drills
    - [x] Verified Section 15 rules and `InterrogativesTable` matrix
    - [x] Revealed Challenge #1 in Section 15 and flagged for drills
    - [x] Confirmed presence of flagged items in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## The Complete Negation Systems (Izindlela Zokuphika - Section 16)
- [x] Implement Section 16 ("The Complete Negation Systems") covering main clause initial a-...-i vs subordinate medial -nga-...-i, mandatory negative object vowel drop, future negation (-zu-/-zuku-), and infinitive fasting (ukungadli)
  - [x] Create Category Data Module in `frontend/src/data/grammar/negation.js`:
    - [x] Export `NEGATION_SECTION` (`negation`, "The Complete Negation Systems", 5 Rules, ShieldAlert icon, purple theme)
    - [x] Export `NEGATION_MATRIX` (8-row table comparing Present Indicative, Dependent/Subordinate, Immediate Past Continuous, Remote Completed Past, Near Future, Stative Aspect, Class 15 Infinitive, and Associative Copulative)
    - [x] Export `NEGATION_CHECKPOINTS` with 3 clinical challenges (mandatory object vowel drop with *Angizwa buhlungu*, pre-operative fasting with *ukungadli*, and subordinate condition with *uma singawaphuzi*)
    - [x] Export `NEGATION_RULES` (5 clinical rules: `neg-present-indicative`, `neg-vowel-drop-objects`, `neg-main-vs-subordinate`, `neg-future-systems`, `neg-infinitive-ukunga`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export `NEGATION_SECTION`, `NEGATION_RULES`, `NEGATION_MATRIX`, and `NEGATION_CHECKPOINTS`
    - [x] Add `{ id: 'negation', label: 'The Complete Negation Systems' }` to `GRAMMAR_CATEGORIES` (now 16 sections, 80 rules total)
    - [x] Update `ALL_CHECKPOINTS` to include all 48 clinical practice challenges
  - [x] Create Table Renderer in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `NegationTable` rendering the 8-tense/mood master negation matrix
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `purple` theme palette in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `negation` in `grammarSectionConfigs.js` with `ShieldAlert` icon
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `ShieldAlert` (Negation) in `GrammarDirectoryView.jsx` (dynamic badge shows `16 Sections • 80 Rules`)
    - [x] Sync `ALL_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file maintained at 230 lines, strictly under 250 boundary)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 16 section cards with `16 Sections • 80 Rules`
    - [x] Verified Section 16 rules and `NegationTable` matrix
    - [x] Revealed Challenge #1 in Section 16 (*Angizwa buhlungu esifubeni namhlanje.*) and flagged for drills
    - [x] Confirmed presence of flagged item in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Ideophones & Defective -thi (Section 17) and Diminutives & Noun Palatalization (Section 18)
- [x] Implement Section 17 ("Ideophones & the Defective Verb -thi — Izifanekisombhalo") and Section 18 ("Diminutives, Augmentatives & Noun Palatalization — Izinciphiso Nezenkiso")
  - [x] Create Category Data Module in `frontend/src/data/grammar/ideophones.js`:
    - [x] Export `IDEOPHONES_SECTION` (`ideophones`, "Ideophones & Defective -thi", 5 Rules, Flame icon, pink theme)
    - [x] Export `IDEOPHONES_MATRIX` (8 sensory ideophones: *dwe*, *tebhu*, *cwaka*, *bha*, *ngci*, *phaqa*, *qhu*, *ntwesi*)
    - [x] Export `IDEOPHONES_CHECKPOINTS` (3 acute challenges: syncopal onset, traumatic hemorrhage, and pediatrics hyperpyrexia)
    - [x] Export `IDEOPHONES_RULES` (5 clinical rules: `ideo-syntax-invariance`, `ideo-thi-conjugation`, `ideo-neuro-syncope`, `ideo-trauma-hemorrhage`, `ideo-thermal-obstruction`)
  - [x] Create Category Data Module in `frontend/src/data/grammar/diminutives.js`:
    - [x] Export `DIMINUTIVES_SECTION` (`diminutives-palatalization`, "Diminutives & Noun Palatalization", 5 Rules, Minimize2 icon, lime theme)
    - [x] Export `DIMINUTIVES_MATRIX` (8 sound shift/augmentative entries: $m \to ny$, $mb \to nj$, $u \to wa$, $b \to j$, $l \to dl$, augmentative `-kazi`)
    - [x] Export `DIMINUTIVES_CHECKPOINTS` (3 clinical challenges: symptom attenuation with *umkhuhlwana*, pediatric anatomy on *ithanjana*, and augmentative catastrophe with *ingozikazi*)
    - [x] Export `DIMINUTIVES_RULES` (5 clinical rules: `dim-labial-palatalization`, `dim-alveolar-shifts`, `dim-clinical-attenuation`, `dim-pediatric-anatomy`, `dim-augmentative-kazi`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export both sections, rules, matrices, and checkpoints
    - [x] Add `{ id: 'ideophones' }` and `{ id: 'diminutives-palatalization' }` to `GRAMMAR_CATEGORIES` (now 18 sections, 90 rules total)
    - [x] Update `ALL_CHECKPOINTS` to include all 54 clinical practice challenges
  - [x] Create Table Renderers in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `IdeophonesTable` rendering 8 acute sensory ideophones
    - [x] Export `DiminutivesTable` rendering 8 sound shift and augmentative classes
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `pink` and `lime` theme palettes in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `ideophones` (Flame) and `diminutives-palatalization` (Minimize2) in `grammarSectionConfigs.js`
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `Flame` and `Minimize2` in `GrammarDirectoryView.jsx` (dynamic badge shows `18 Sections • 90 Rules`)
    - [x] Verify `ALL_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file strictly maintained at 230 lines)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all 6 tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 18 section cards with `18 Sections • 90 Rules`
    - [x] Verified Section 17 rules and `IdeophonesTable` matrix
    - [x] Revealed Challenge #1 in Section 17 (*Kwathi dwe emehlweni ami ngokushesha, ngase ngiwa phansi.*) and flagged for drills
    - [x] Verified Section 18 rules and `DiminutivesTable` matrix
    - [x] Revealed Challenge #1 in Section 18 (*Nginomkhuhlwana nje nekhandana elincane, akukho okusabisayo.*) and flagged for drills
    - [x] Confirmed presence of flagged items in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Compound Tenses (Section 19) and Narrative Sequencing & Irregular Verbs (Section 20) — 20-Section Master Curriculum Completion
- [x] Complete the 20-Section Master Curriculum with Section 19 ("Compound Tenses & Multi-Tier Aspect Chaining — Izinkathi Ezimbaxambaxa") and Section 20 ("Narrative Sequencing & Irregular Verbs — Ukuxhumanisa Izenzo Nezinto Ezixakile")
  - [x] Create Category Data Module in `frontend/src/data/grammar/compoundTenses.js`:
    - [x] Export `COMPOUND_TENSES_SECTION` (`compound-tenses`, "Compound Tenses & Aspect Chaining", 5 Rules, History icon, violet theme)
    - [x] Export `COMPOUND_TENSES_MATRIX` (8 compound patterns: past frequentative *-lokhu*, prior state *wayese-*, future perfect *ngobe sengi-*, progressive continuity *wayesa-*, future continuous *uzobe e-*, unfulfilled intent *ngangisazo-*, past pending *wayengaka-*, frequentative recurrence)
    - [x] Export `COMPOUND_TENSES_CHECKPOINTS` (3 acute challenges: persistent vomiting with *bengilokhu*, pre-admission coma with *sasesiqulekile*, and future antibiotic clearance with *ngobe sengi-*)
    - [x] Export `COMPOUND_TENSES_RULES` (5 clinical rules: `comp-past-frequentative-lokhu`, `comp-prior-state-se`, `comp-future-continuous-perfect`, `comp-unfulfilled-intent`, `comp-clinical-longitudinal-timeline`)
  - [x] Create Category Data Module in `frontend/src/data/grammar/narrativeSequence.js`:
    - [x] Export `NARRATIVE_SEQUENCE_SECTION` (`narrative-irregular`, "Narrative Sequencing & Irregular Verbs", 5 Rules, ListOrdered icon, stone theme)
    - [x] Export `NARRATIVE_SEQUENCE_MATRIX` (8 sequencing mechanics: sequential subjunctive *bese*, prerequisite *anduba*, narrative chaining *wa-... wa-*, temporal pivot *kwathi lapho*, irregular *-azi*, defective *-sho*, defective *-thi*, consecutive care regimen)
    - [x] Export `NARRATIVE_SEQUENCE_CHECKPOINTS` (3 clinical challenges: multi-step wound care with *bese*, symptom clarification with *usho ukuthini?*, and acute trauma fall chaining with *wabe esequleka*)
    - [x] Export `NARRATIVE_SEQUENCE_RULES` (5 clinical rules: `narr-sequential-subjunctive-bese`, `narr-prerequisite-anduba`, `narr-past-chaining`, `narr-irregular-azi`, `narr-defective-sho-thi`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export both sections, rules, matrices, and checkpoints
    - [x] Add `{ id: 'compound-tenses' }` and `{ id: 'narrative-irregular' }` to `GRAMMAR_CATEGORIES` (bringing curriculum to exactly 20 sections, 100 rules, 60 checkpoints)
    - [x] Update `ALL_CHECKPOINTS` to assemble all 60 clinical practice checkpoints
  - [x] Create Table Renderers in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `CompoundTensesTable` rendering 8 compound timeline patterns
    - [x] Export `NarrativeSequenceTable` rendering 8 narrative sequencing mechanics
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `violet` and `stone` theme palettes in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `compound-tenses` (History) and `narrative-irregular` (ListOrdered) in `grammarSectionConfigs.js`
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `History` and `ListOrdered` in `GrammarDirectoryView.jsx` (dynamic badge shows `20 Sections • 100 Rules`)
    - [x] Verify `ALL_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file strictly maintained at 230 lines)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all 6 tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 20 section cards with `20 Sections • 100 Rules`
    - [x] Verified Section 19 rules and `CompoundTensesTable` matrix
    - [x] Revealed Challenge #1 in Section 19 (*Bengilokhu ngiphalaza futhi ngizizwa nginesiyezi kusukela izolo ekuseni.*) and flagged for drills
    - [x] Verified Section 20 rules and `NarrativeSequenceTable` matrix
    - [x] Revealed Challenge #1 in Section 20 (*Qala uhlanze isilonda ngamanzi ahlanzekile, bese ugcoba umuthi, bese usibopha ngebhandishi elihlanzekile.*) and flagged for drills
    - [x] Confirmed presence of flagged items in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Section 1 Past Tense Systems Refactor & Sections 21 (Present Indicative) & 22 (Primary Future Tenses)
- [x] Refactor Section 1 ("The Complete Past Tense Systems") to incorporate Recent Completed Past (-ile / -e), and implement Section 21 ("The Present Indicative Tense — Inkathi Yamanje") and Section 22 ("The Primary Future Tenses — Inkathi Ezayo")
  - [x] Refactor Section 1 in `frontend/src/data/grammar/pastTenses.js`:
    - [x] Update `PAST_TENSES_SECTION` with recent completed past (-ile / -e) description and preview hook
    - [x] Update `PAST_CONCORD_MATRIX` adding Recent Completed Long (`recentCompletedLong`) and Recent Completed Short (`recentCompletedShort`) columns
    - [x] Dedicate Rule 1 to Recent Completed Past: Long Form -ile vs. Short Form -e (`past-recent-completed-ile-e`)
    - [x] Update `PAST_PRACTICE_CHECKPOINTS` Challenge 1 to test short form -e before complements (*Ngiphuze amaphilisi ami ekuseni kakhulu ekhaya.*)
  - [x] Create Category Data Module in `frontend/src/data/grammar/presentIndicative.js`:
    - [x] Export `PRESENT_INDICATIVE_SECTION` (`present-indicative`, "The Present Indicative Tense", 5 Rules, Sun icon, amber theme)
    - [x] Export `PRESENT_INDICATIVE_MATRIX` (8-row clinical verbs table comparing *-gula*, *-phuza*, *-funa*, *-zwa*, *-hlola*, *-buhlungu*, *-khwehlela*, *-phefumula* across long form -ya-, short form complement, with object concord, and syntax rule)
    - [x] Export `PRESENT_INDICATIVE_CHECKPOINTS` (3 clinical challenges: mandatory -ya- drop before object, long form -ya- emphatic/intransitive, and ROS with adverbial qualifier)
    - [x] Export `PRESENT_INDICATIVE_RULES` (5 clinical rules: `pres-long-form-ya`, `pres-short-drop-ya`, `pres-habitual-aspect`, `pres-object-concords`, `pres-clinical-ros`)
  - [x] Create Category Data Module in `frontend/src/data/grammar/futureTenses.js`:
    - [x] Export `FUTURE_TENSES_SECTION` (`future-tenses`, "The Primary Future Tenses (Near -zo- & Remote -yo-)", 5 Rules, CalendarClock icon, sky theme)
    - [x] Export `FUTURE_TENSES_MATRIX` (8-row table comparing noun classes/persons across near future contracted, near future monosyllabic with -zoku-, remote future -yo-, with object concord, and prognostic utility)
    - [x] Export `FUTURE_TENSES_CHECKPOINTS` (3 clinical challenges: near future with OC insertion, monosyllabic stem retention of -zoku-, and remote future prognosis with -yo-)
    - [x] Export `FUTURE_TENSES_RULES` (5 clinical rules: `fut-near-zo`, `fut-monosyllabic-retention`, `fut-remote-yo`, `fut-object-concord-slot`, `fut-clinical-prognosis`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export both sections, rules, matrices, and checkpoints
    - [x] Add `{ id: 'present-indicative' }` and `{ id: 'future-tenses' }` to `GRAMMAR_CATEGORIES` (bringing curriculum to exactly 22 sections, 110 rules, 66 checkpoints)
    - [x] Update `ALL_CHECKPOINTS` to assemble all 66 clinical practice checkpoints
  - [x] Update Table Renderers in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Update `PastConcordTable` to include Recent Long (`-ile`) and Recent Short (`-e`) columns
    - [x] Export `PresentIndicativeTable` rendering 8 clinical verb rows
    - [x] Export `FutureTensesTable` rendering 8 noun class / person rows
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `amber` and `sky` theme palettes in `GrammarPracticeDrawer.jsx` and `GrammarMatrixTable.jsx`
    - [x] Register `present-indicative` (Sun) and `future-tenses` (CalendarClock) in `grammarSectionConfigs.js`
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `Sun` and `CalendarClock` in `GrammarDirectoryView.jsx` (dynamic badge shows `22 Sections • 110 Rules`)
    - [x] Verify `ALL_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file strictly maintained at 230 lines)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all 6 tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 22 section cards with `22 Sections • 110 Rules`
    - [x] Verified Section 1 refactored table (Recent Completed Long & Short), Rule 1, and Challenge 1 reveal (*Ngiphuze amaphilisi ami ekuseni kakhulu ekhaya.*)
    - [x] Verified Section 21 rules, `PresentIndicativeTable` matrix, and Challenge 1 reveal (*Ngiphuza amaphilisi omfutho wegazi njalo ekuseni.*)
    - [x] Verified Section 22 rules, `FutureTensesTable` matrix, and Challenge 1 reveal (*Ngizokunika amaphilisi aqinile obuhlungu ozowaphuza ekhaya.*)
    - [x] Confirmed presence of flagged items in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase deploy --only hosting`)

## Sections 23 (Class 15 Infinitives & Prepositions) & 24 (Clinical Inhlonipho & Vocatives) — 24-Section Master Curriculum Completion
- [x] Complete the 24-Section Master Curriculum by implementing Section 23 ("Class 15 Infinitives & Prepositional Governance — Izakhi Zesenzo Sokwenza") and Section 24 ("Clinical Inhlonipho, Vocatives & Respectful Registers — Inhlonipho Nezokubingelela")
  - [x] Create Category Data Module in `frontend/src/data/grammar/infinitives.js`:
    - [x] Export `INFINITIVES_SECTION` (`infinitives`, "Class 15 Infinitives & Prepositional Governance", 5 Rules, FileText icon, teal theme)
    - [x] Export `INFINITIVES_MATRIX` (8-row table comparing pre-prandial timing *ngaphambi ko-*, post-prandial *emva ko-*, procedural stillness *ngaphandle ko-*, prerequisite *ngaphambi kokuba*, Class 15 concord *ku-*, patient OC *ukukusiza*, organ OC *ukuyihlola*, and substance abstinence *ngaphandle kokuphuza*)
    - [x] Export `INFINITIVES_CHECKPOINTS` (3 clinical challenges: pre-meal scheduling with *ngaphambi kokudla*, procedural stillness with *ngaphandle kokunyakazisa*, and embedded OC with *ukusihlola* / *nokukusiza*)
    - [x] Export `INFINITIVES_RULES` (5 clinical rules: `inf-nominalization-agreement`, `inf-temporal-ngaphambi`, `inf-temporal-emva`, `inf-exclusion-ngaphandle`, `inf-object-concord-embedding`)
  - [x] Create Category Data Module in `frontend/src/data/grammar/inhlonipho.js`:
    - [x] Export `INHLONIPHO_SECTION` (`inhlonipho-registers`, "Clinical Inhlonipho, Vocatives & Respectful Registers", 5 Rules, HeartHandshake icon, rose theme)
    - [x] Export `INHLONIPHO_MATRIX` (8-row table comparing respectful vs crude registers across vocatives, elders, clan praises, obstetrics, bereavement, palliative, procedures, and communal greetings)
    - [x] Export `INHLONIPHO_CHECKPOINTS` (3 clinical challenges: vocative vowel drop with *Sawubona Sibiya, Nongombili!*, obstetric modesty with *uzithwele*, and compassionate bereavement with *udlule emhlabeni*)
    - [x] Export `INHLONIPHO_RULES` (5 clinical rules: `inh-vocative-vowel-drop`, `inh-clan-izithakazelo`, `inh-obstetric-euphemism`, `inh-bereavement-palliative`, `inh-clinical-consent-etiquette`)
  - [x] Re-Export via Barrel in `frontend/src/data/grammarData.js`:
    - [x] Re-export both sections, rules, matrices, and checkpoints
    - [x] Add `{ id: 'infinitives' }` and `{ id: 'inhlonipho-registers' }` to `GRAMMAR_CATEGORIES` (bringing curriculum to exactly 24 sections, 120 rules, 72 checkpoints)
    - [x] Update `ALL_CHECKPOINTS` to assemble all 72 clinical practice checkpoints
  - [x] Create Table Renderers in `frontend/src/components/grammar/GrammarSectionTables.jsx`:
    - [x] Export `InfinitivesTable` rendering 8 prepositional and governance rows
    - [x] Export `InhloniphoTable` rendering 8 respectful vs crude communication rows
  - [x] Update Theme Presets & Section Configuration:
    - [x] Add `teal` and `rose` theme palettes in `grammarSectionConfigs.js`
    - [x] Register `infinitives` (FileText) and `inhlonipho-registers` (HeartHandshake) in `grammarSectionConfigs.js`
  - [x] Update Directory View & Active Flag State:
    - [x] Bind `FileText` and `HeartHandshake` in `GrammarDirectoryView.jsx` (dynamic badge shows `24 Sections • 120 Rules`)
    - [x] Verify `ALL_CHECKPOINTS` in `GrammarReference.jsx` `refreshFlaggedState()` (file strictly maintained at 229 lines, under 250 boundary)
  - [x] Run production verification:
    - [x] `npm run build` in `frontend/` (0 compilation errors, clean bundle)
    - [x] `backend/test_server.py` (all 6 tests passing)
  - [x] Test end-to-end in mobile browser subagent:
    - [x] Verified directory displays 24 section cards with `24 Sections • 120 Rules`
    - [x] Verified Section 23 rules, `InfinitivesTable` matrix, and Challenge 1 reveal (*Phuza leli philisi ngemizuzu engamashumi amathathu ngaphambi kokudla ekuseni.*)
    - [x] Verified Section 24 rules, `InhloniphoTable` matrix, and Challenge 1 reveal (*Sawubona Sibiya, Nongombili! Uzizwa kanjani namuhla, gogo?*)
    - [x] Confirmed presence of flagged items in Drills Gym review deck
  - [x] Deploy to Firebase Hosting (`firebase.cmd deploy --only hosting`)


