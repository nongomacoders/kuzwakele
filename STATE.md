# Project State

## Environment & Dependencies
- **Status**: Verified
- **Virtual Environment**: Configured at `.\venv` using `.\venv\Scripts\python.exe`
- **Dependencies**: Verified and installed from `requirements.txt`:
  - `google-cloud-aiplatform>=1.60.0`
  - `fastapi>=0.115.0`
  - `uvicorn[standard]>=0.30.0`
  - `python-dotenv>=1.0.0`
  - `pydantic>=2.8.0`
  - `httpx>=0.27.0`
- **Execution Rules**: Windows-specific guidelines documented in `ENVIRONMENT.md`.

## Backend Configuration & Secrets
- **Status**: Configured and verified
- **Configuration Module**: `backend/config.py`
- **Secrets Store**: Credentials loaded externally from `C:\Users\diond\Desktop\Projects\EXTERNAL_TO_REPOS\credentials\secrets.env`
- **Exported Settings**:
  - `OPENROUTER_API_KEY` (loaded from external secrets)
  - `GOOGLE_APPLICATION_CREDENTIALS` (resolved and explicitly populated in `os.environ` for Google Cloud SDK)
  - `VERTEX_MODEL = "gemini-3.5-flash-lite"`
  - `VERTEX_LOCATION = "global"`
  - `THINKING_BUDGET = "low"`
  - `OPENROUTER_FALLBACK_MODEL = "openrouter/free"`
  - `DEFAULT_MODEL` (configured with fallback provider resolution)

## AI Pipeline
- **Status**: Active & Verified (Hardened against hallucinations)
- **Client Module**: `backend/ai_client.py`
- **Function**: `generate_response(prompt: str, system_instruction: str = "") -> dict`
- **Primary Provider**: Vertex AI (`gemini-3.5-flash-lite`, location: `global`, thinking effort: `low`, `temperature=0.1`) authenticated via service account.
- **Failover / Fallback Provider**: OpenRouter (`openrouter/free`, `temperature=0.1`) via async HTTP POST using `httpx`.
- **Hallucination Hardening**:
  - Clamped `temperature=0.1` on both Vertex AI `GenerateContentConfig` and OpenRouter fallback payload to maximize deterministic grounding.
  - Injected Grounding & Naming Guardrails in `KZN_CLINICAL_SYSTEM_PROMPT` forbidding invented proper names, enforcing standard generic kinship terms (`umntwana`, `ingane`, `umfana`, `intombazane`, `mama`), mandating biological sex alignment, and requiring 1:1 translation fidelity.
- **Resilience**: Catches quota exhaustion (429/ResourceExhausted), billing errors (402), client/not-found errors, connection issues, or bypassed credentials, seamlessly routing to OpenRouter.
- **Validation**: Verified end-to-end via `backend/test_server.py` (200 OK across all endpoints) and targeted paediatric skin rash intake test verifying zero invented proper names.

## FastAPI Server & Live Co-Pilot API
- **Status**: Active & Verified (Pure Linguistic & Cultural Scoping)
- **Server Module**: `backend/main.py`
- **App**: `Kuzwakele API` v1.0.0
- **CORS Configuration**: Wildcard CORS enabled (`allow_origins=["*"]`, `allow_methods=["*"]`, `allow_headers=["*"]`) for desktop (`localhost`) and mobile access across local Wi-Fi subnet.
- **Consultation Loop Schemas**: `PatientResponseOption` (strictly `isizulu` and `english`), `LoopQuestionItem`, `ConsultLoopResponse`, and `ConsultRequest`.
- **Linguistic Scoping & Prompt Policy**: The model is explicitly scoped to linguistic and cultural assistance for experienced doctors. All clinical advice, diagnostic labels, severity grading, and summary framing are strictly prohibited.
- **Robust Parser**: `parse_questions_response()` strips any hallucinated diagnostic meaning or summaries and returns clean linguistic questions and anticipated patient replies.
- **Endpoints**:
  - `GET /api/health`: Health status and active AI provider (`vertex`).
  - `POST /api/consult`: Interactive consultation co-pilot delivering conversational questions and realistic patient replies without medical advice or diagnostic tags.
  - `POST /api/scenario/turn`: "Beyond the Prescription" dialogue simulator advancing KZN persona interaction (Gogo MaMthethwa) and delivering coaching feedback with Widex hearing aid phonetic listening cues.
- **Validation**: Fully verified via `backend/test_server.py` (200 OK across health, consult questions, loop steering, translation, and scenario turn endpoints).

## Frontend PWA & Desktop Split-Screen Optimization
- **Status**: Active & Verified
- **Directory**: `frontend/`
- **Stack**: Vite + React + Tailwind CSS + Lucide React + VitePWA + ReactMarkdown + RemarkGfm
- **Desktop Split-Screen Architecture & Streamlining**:
  - **Streamlined Workspace**: Removed the mode toggle bar; defaults directly to the Interactive Consultation Loop co-pilot.
  - **Top-Level Intake Banner**: Placed active case intake above the split grid for clean top alignment across desktop columns.
  - **Left Pane (`lg:col-span-8`)**: Active Consultation Console with quick KZN presets and equalized question cards.
  - **Typography Equalization**: Primary isiZulu phrase styling is equalized to match the English text size (`text-base font-semibold text-emerald-300` and `text-base text-slate-300`).
  - **UI Simplification**: Removed the "Clinical Focus" advice card, the "ACTIVE RECOMMENDATIONS" header wrapper, and all diagnostic labels.
  - **Entrance Fade-In Animation**: Fast, smooth 200ms ease-out fade-in animation (`animate-fadeIn`) triggers on the question cards container and Option 1 when new responses arrive.
  - **Clean Patient Response Chips**: Stripped all "Clinical Sign: ..." badges; displays solely the patient's spoken isiZulu and English translation in clean, balanced text.
  - **Animated Waiting State Card**: Glowing pulse card with live second-counter ticking (`⏱️ {elapsedWaitSec}s`), typing animation, and `"Waiting for Gemini (gemini-3.5-flash-lite)..."` status.
  - **Right Pane (`lg:col-span-4`) - Reverse History Aligned with Option 1**: Renders turns in reverse chronological order (`[...history].reverse()`) with the latest turn at the very top (bearing a `Latest` badge and `Turn #N`), aligned with Option 1 across the desktop split grid (`items-start`).
  - **Interactive Steering Loop**: Clickable anticipated patient reply chips and fixed bottom steering bar with rapid prompt chips.

## Mobile Scenario Stepper & Offline Practice
- **Status**: Active & Verified (Text-Only, Zero Mic/Audio Dependencies)
- **Components**:
  - `frontend/src/components/ScenariosView.jsx`: Mobile-first dialogue stepper with Back/Next navigation.
  - `frontend/src/data/scenariosData.js`: Pre-filled community dialogue scenarios.
  - `frontend/src/utils/drillsStorage.js`: LocalStorage manager (`kuzwakele_flagged_drills`) with reactive window events.
  - `frontend/src/components/DrillsGym.jsx`: Spaced repetition drill deck with Review List for flagged phrases.
- **Scenarios Included**:
  - **Scenario 1**: "Gogo MaMthethwa — Ukubonisana (Life Counseling)" (washed-out roads, caregiver burden, whoonga crisis, swollen feet, medication side-effects, dignity).
  - **Scenario 2**: "The Roadside Greeting — Ukubingelela & News" (respectful plural greeting, homestead well-being, drought/water crisis, non-condescending water purification).
- **Core Capabilities**:
  - **Text-Only Design**: Completely eliminated audio players, recording permissions, and live generation latency for fluid mobile reading.
  - **Dual Independent Toggles**: `[ 🌐 English ]` and `[ 🔬 Detailed Grammar ]` switches for focused immersion or grammatical deep-dives.
  - **Phonetic & Cadence Cues**: Plain-text acoustic guidance on vowel coalescence (*yemvula*), contractions (*kukhon'okuhambayo*), click pronunciations (*q*, *c*, *x*), and penultimate lengthening.
  - **Morphological Analysis**: Granular breakdown cards detailing subject concords, noun classes, stative suffixes (*-ile*), negative participials, applicatives, and causatives.
  - **1-Tap Sentence Bookmarking**: Instant flagging for both patient colloquialisms and doctor response choices with live badge counter synchronization.
  - **Drills Gym Review List**: Dedicated review deck displaying flagged sentences, complete grammar breakdowns, speaker filters (`Patient`, `Doctor`, `All`), and remove actions.

## SQLite Seed Harvester & Zero-Click Auto-Harvesting
- **Status**: Active & Verified (Silent Fire-and-Forget Auto-Persist)
- **Database Module**: `backend/database.py` using standard library `sqlite3`
- **Database File**: `backend/kuzwakele.db` (git-ignored)
- **Table Schema**: `interaction_seeds` (`id`, `session_id`, `created_at`, `intake_summary`, `turn_number`, `doctor_isizulu`, `doctor_english`, `patient_isizulu`, `patient_english`, `cultural_note`, `steer_context`, `tags`, `distill_target`, `sync_status`, `firebase_id`, `raw_turn_payload`)
- **API Endpoints**:
  - `POST /api/seeds`: Saves interaction seed, generates UUID and ISO-8601 UTC timestamp.
  - `GET /api/seeds`: Lists saved seeds sorted by `created_at DESC` with optional `sync_status` filter.
  - `DELETE /api/seeds/{seed_id}`: Deletes a seed record.
  - `GET /api/seeds/export`: Formats seeds into Firestore batch collection document format (`collection: "interaction_seeds"`, `data: {...}`).
- **Zero-Click Silent Auto-Harvesting**:
  - `autoSaveTurn(turnData)`: Non-blocking fire-and-forget helper silently persisting consultation turns directly to `POST /api/seeds`.
  - Automatically triggered whenever a turn is committed to history (upon selecting an anticipated patient reply) and after steering responses resolve.
  - Silent error handling ensures consultation flow is never interrupted or blocked by network or database issues.
  - Removed all manual bookmarking UI: stripped `[ Save Seed ]` / `[ Saved Seed ]` buttons, intent dropdowns, and associated component state.
  - Minimal History Cards: each card now displays solely the Turn header (Turn #N, latency badge, timestamp), Doctor turn (isiZulu & English subtitle), and Patient turn (isiZulu & English subtitle).

## Grammar Reference Tab & Spaced Repetition Drill Integration
- **Status**: Active & Verified (2-Level Section Hub Architecture)
- **Components & Data**:
  - `frontend/src/data/grammarData.js`: Curated, linguistically deep grammar reference dataset covering 4 targeted modules with 20 detailed clinical rules, verified clinical/community examples, and `GRAMMAR_SECTIONS` metadata.
  - `frontend/src/components/GrammarReference.jsx`: Main grammar view controller (shrunk to 237 lines) managing section selection, search state, unified drill flagging, and reactive drill synchronization.
  - `frontend/src/components/grammar/GrammarRuleCard.jsx`: Reusable rule card component rendering formula banners, structural rules, pitfall warnings, and contextual examples with morpheme breakdowns.
  - `frontend/src/components/grammar/GrammarPracticeDrawer.jsx`: Generic collapsible clinical challenge drawer rendering question prompts, answer reveals, rule keys, and 1-tap drill bookmarks.
  - `frontend/src/components/grammar/GrammarMatrixTable.jsx`: Reusable collapsible reference table container with responsive overflow.
  - `frontend/src/components/grammar/GrammarSectionTables.jsx`: Specialized reference tables (`PastConcordTable`, `StativeMutationTable`, `ConjunctionGovernanceTable`, `AspectInfixTable`).
  - `frontend/src/components/grammar/GrammarDirectoryView.jsx`: Level 1 Section Hub directory view with 2x2 cards and search bar.
  - `frontend/src/components/grammar/grammarSectionConfigs.js`: Theme tokens and section presets mapping.
  - `frontend/src/App.jsx`: Responsive 4-tab top navigation shell (`Live`, `Scenarios`, `Drills`, `Grammar`) with tailored mobile padding (`px-2.5 sm:px-3.5`) and responsive text spans to prevent truncation on screens down to 360px.
- **2-Level Section Hub Architecture**:
  - **Level 1: Section Hub / Directory Index**:
    - Clean 2x2 grid displaying thumb-friendly section cards for each core module (`past-tenses`, `stative`, `conjunctions`, `aspect-infixes`).
    - Visual hierarchy with module icons (`Clock`, `Activity`, `GitFork`, `FastForward`), rule count badges (`3 Rules`), key concepts, and monospace preview hooks (`bengihamba vs. ngahamba`, `-vuvukile, -khathele`, `ukuze vs. uma`, `-sa-, se-, -ka-`).
    - Quick global search input searching across titles, formulas, roots, and English glosses.
  - **Level 2: Section Detail View**:
    - Accessible `[ ‹ All Sections ]` top navigation bar returning directly to directory index.
    - Isolates rules belonging strictly to the selected module, eliminating infinite vertical scrolling.
    - Bottom `[ ‹ Back to All Sections ]` navigation button allowing quick return after reviewing long clinical examples.
  - **Search Results View**:
    - Automatically displays matching rules across all sections whenever search query is non-empty, with one-tap `[ Clear Search ]` button.
- **Targeted Grammatical Modules**:
  1. **The Complete Past Tense Systems (`past-tenses` - Comprehensive 5-Rule Curriculum & Concord Matrix)**:
     - *Rule 1: Recent Completed Past: Long Form -ile vs. Short Form -e (`past-recent-completed-ile-e`)*: Long form `-ile` strictly clause-final (*Ngiphuzile* = I have taken [it]; *Udokotela ufikile* = The doctor has arrived). When followed immediately by an object, adverb, time word, or prepositional phrase, the verb obligatorily shortens to `-e` (*Ngiphuze amaphilisi ekuseni*; *Ngibone udokotela izolo*). Common Pitfall: *ngiphuzile umuthi is ungrammatical.
     - *Rule 2: Immediate Past Continuous / Imperfect (`past-immediate-continuous`)*: `be-` + concord (`bengi-`, `ubu-`, `ube-`, `sibe-`, `bebe-`, `beku-`) for actions ongoing earlier today or yesterday. Contrast of Class 1 *ube-* with 2nd person *ubu-*.
     - *Rule 3: Remote Past Simple / Deep Past (`past-remote-simple`)*: Elided long `-a-` concords (`nga-`, `wa-`, `sa-`, `ba-`, `kwa-`) for events days, months, or years ago. Pitfall warning against confusing remote *nga-* with present *ngiya-*.
     - *Rule 4: Remote Past Continuous / Habitual (`past-remote-continuous`)*: Remote continuous concords (`ngangi-`, `wawu-`, `waye-`, `sasi-`, `babe-`, `kwaku-`) for chronic history, childhood habits, and occupational exposures (e.g. *wawubhema*).
     - *Rule 5: Past Negation Systems (`past-negation-systems`)*: Dual negation architecture: completed past negation with suffix `-anga` (*a-ngi-phuz-anga* = *angiphuzanga*) versus ongoing continuous negation with mid-verb participial particle `-nga-...-i` (*bengi-nga-z-i* = *bengingazi*).
     - *Compound Past Concord Matrix Table*: Responsive quick-reference grid comparing 7 core person and noun classes (`Mina`, `Wena`, `Yena`, `Thina`, `Nina`, `Bona`, `Khona`) across Recent Completed Long (`-ile`), Recent Completed Short (`-e`), Immediate Continuous (`bengi-`), Remote Simple (`nga-`), and Remote Continuous (`ngangi-`).
     - *Interactive Checkpoint History-Taking Self-Check*: 3 clinical challenges (morning pill ingestion with short form -e *Ngiphuze amaphilisi ami ekuseni kakhulu ekhaya.*, smoking history with *wawubhema*, skipped medication yesterday with *angiwaphuzanga*) with toggleable answer reveals, linguistic keys, and 1-tap `[ Flag for Drills ]` bookmarking.
  2. **The Stative Aspect (`stative` - Comprehensive 5-Rule Curriculum)**:
     - *Rule 1: Process vs. Present Resulting State (`stative-core-concept`)*: Root verbs of process where past suffix `-ile` / `-e` denotes present bodily/mental reality (*-vuvukile*, *-khathele*, *-lambile*, *-lele*, *-mile*).
     - *Rule 2: The Contraction Rule (`stative-contraction-rule`)*: Drop from full `-ile` to contracted `-e` when directly followed by an adverb, complement, or locative (*Ngilambe kakhulu* vs *Ngilambile*).
     - *Rule 3: Irregular Stative Mutations (`stative-irregular-stems`)*: Roots ending in `-ala` $\to$ `-ele` (*-khathala*, *-limala*, *-zala*), `-ama` $\to$ `-eme` (*-phapama*), and special stems (*-lala* $\to$ *ulele*, *-sutha* $\to$ *usuthi*, *-hlala* $\to$ *uhlezi*).
     - *Rule 4: Stative Negation Trap (`stative-negation-trap`)*: Statives retain their `-ile` / `-ele` suffix in the negative without shifting to `-i` (*angilambile*, *akalele*, *azivuvukile*).
     - *Rule 5: Essential Clinical Stative Inventory (`stative-clinical-lexicon`)*: Core diagnostic vocabulary for dehydration (*womile*), effusion (*kugcwele*), loss of consciousness (*uqulekile*), alertness (*uphapheme*), and airway congestion (*sivalekile*).
  3. **Conjunctions & Clause Governance (`conjunctions` - Comprehensive 5-Rule Curriculum)**:
     - *Rule 1: Subjunctive-Triggering Conjunctions (`conj-subjunctive-triggers`)*: Purposive and obligative conjunctions (*ukuze*, *kufanele*, *kumele*, *ake*) strictly demanding final vowel `-a` $\to$ `-e` and negative infix `-nga-...-i` (*ukuze wehlise umfutho*, *kufanele uhlale phansi*, *ukuze ungaguli*).
     - *Rule 2: Participial-Triggering Conjunctions (`conj-participial-triggers`)*: Conditionals and temporal particles (*uma*, *ngenkathi*, *ngoba*, *selokhu*) forcing 3rd-person Class 1 singular `u-` $\to$ `e-` and Class 2 `ba-` $\to$ `be-`, with mandatory negative infix `-nga-...-i` (*uma isifuba siqhubeka*, *uma engaphuzi mithi*).
     - *Rule 3: Independent Coordinating Conjunctions (`conj-coordinating-linkers`)*: Neutral clause bridges (*kodwa*, *futhi*, *noma*, *kanti*) connecting independent indicative statements without mood, concord, or vowel ending alterations.
     - *Rule 4: Prepositional Conjunctions (`conj-compound-prepositional`)*: Inflected nouns of time constructing chronological sequences: *ngaphambi kokuba* (before, triggering subjunctive `-e`) versus *emva kokuba* (after, triggering participial/stative aspect).
     - *Rule 5: Clinical Advisory & Action-Plan Formulations (`conj-clinical-advisories`)*: The 3-tier compound sentence architecture for patient discharge safety-netting: `[Condition: uma...] + [Escalation: kumele...] + [Purpose: ukuze...]`, alongside adherence warnings using *noma* ("even if").
  4. **Time-Flow Aspectual Infixes (`aspect-infixes` - Comprehensive 5-Rule Curriculum & Trajectory Matrix)**:
     - *Rule 1: Progressive Infix `-sa-` ("Still" & "No Longer", `aspect-progressive-sa`)*: Mid-verb continuity marker (`SC + -sa- + Root + -a`). Negation shifts to "no longer" via prefix `a-` and final `-i` (`a- + SC + -sa- + Root + -i`, e.g. *Usabuzwa ubuhlungu?* vs. *Angisabhemi*, *Izinyawo azisavuvukile*).
     - *Rule 2: Exclusive Aspect `se-` / `-se-` ("Now" & "Already", `aspect-exclusive-se`)*: Marks newly initiated states, completed onset, or threshold timing (*sengi-*, *ususe-* / *use-*, *sebe-*, *sekuyi-*). Contrasts simple stative (*ngilambile*) with exclusive stative (*sengilambile* = "I am now hungry / I have become hungry").
     - *Rule 3: Negative Incomplete Infix `-ka-` ("Not Yet", `aspect-incomplete-ka`)*: Strictly negative incomplete construction (`a- + SC + -ka- + Root + -i / -e`) tracking pending lab turnaround, unfulfilled appointments, and pending doses (*Angikaqedi*, *Imiphumela yegazi ayikafiki evela elabhorethri*).
     - *Rule 4: Occasional / Frequentative Infix `-ke-` ("Ever / Once / Sometimes", `aspect-occasional-ke`)*: Review of systems, prior allergic history, and episodic symptom elicitation (`SC + -ke- + Root + -e / -a`, e.g. *Wake waba nalokhu ngaphambili?*, *Uke uzwe isiyezi?*, *Wake waba nokungezwani nephinisilini?*). Contrasted with hortative prefix *Ake...* ("please").
     - *Rule 5: Clinical Symptom Trajectory & Longitudinal Monitoring (`aspect-clinical-trajectory`)*: Multi-encounter formulation architecture chaining temporal infixes across baseline (*Kuthe uqala ukugula...*), episodic recurrence (*Kuke kubuye lokhu kuhlaba?*), persistence (*Kusesebuhlungu yini noma sekungcono?*), and resolution (*Ubuhlungu abusekho, sekusele ukukhathala nje*).
  5. **Verbal Extensions & Sound Mutations (`verbal-extensions` - Comprehensive 5-Rule Curriculum & Mutation Grid)**:
     - *Rule 1: Applicative `-ela` ("For / On behalf of / Towards", `ext-applicative-ela`)*: Directs action toward a recipient or location (`Verb Root + -ela + Final Vowel`, e.g. *sebenzela*, *lindela*, *lungiselela*). Requires applicative suffix with interrogative *ngani* (*Uhlalelani phansi?*).
     - *Rule 2: Causative `-isa` ("Cause to / Help to / Intensify", `ext-causative-isa`)*: Signifies causation, assistance, or intensification (`Verb Root + -isa + Final Vowel`). Key clinical idiom: *ukuhambisa isisu* ("to cause the stomach to run" = diarrhea).
     - *Rule 3: Passive `-wa` & Labial Palatalization (`ext-passive-palatalization`)*: Prevents bilabial clash before passive *-w-* by mutating labial consonants to prepalatals: $b \to tsh$, $p \to tsh$, $ph \to sh$ (*elapha* $\to$ *elashwa*), $m \to ny$ (*luma* $\to$ *lunywa*), $mb \to nj$ (*bamba* $\to$ *banjwa*).
     - *Rule 4: Neuter-Stative `-eka` / `-akala` ("Feasibility & Resulting State", `ext-neuter-stative`)*: Expresses that an action is doable or in a completed state without human agent specification (*kuzwakele* = understood/heard, *bonakala* = apparent, *dingeka* = needed, *tholakala* = obtainable).
     - *Rule 5: Reciprocal `-ana` ("Mutual Interaction / Each Other", `ext-reciprocal-ana`)*: Expresses mutual, reciprocal action between plural actors (*sizana* = help each other, *bonana* = see each other).
  6. **Copulatives, Locatives & Sound Shifts (`copulatives-locatives` - Comprehensive 5-Rule Curriculum & Mutation Grid)**:
     - *Rule 1: Identification Copulatives ("It is / They are", `cop-identification-prefixes`)*: Non-verbal predicative copulative formatives prefixed to nouns: $u-, o-, a- \to ngu-$ (*ngudokotela*, *ngumkhuhlane*), $i- \to y-$ (*yisifo*, *yigazi*), $ili-/olu- \to l-/lu-$.
     - *Rule 2: Negative Identification Copulatives ("It is NOT", `cop-negative-identification`)*: Negative identification utilizing `aku-` / `asi-` pronouns: Class 1 *akuyena*, Class 7 *akusona*, Class 9 *akuyona* (*Lokhu akuyona ingozi ephuthumayo*).
     - *Rule 3: Locative Copulatives & Presence (*khona*, *akakho*, *ngise-*, `cop-locative-presence`)*: Affirmative presence with *khona*, absence with *a- + SC + -kho* (Class 1 *akakho*, impersonal *akukho*), location prefix *SC + -se- + Locative* (*usesibhedlela*, *ngisesibhedlela*).
     - *Rule 4: Locative Sound Mutations (`e-...-ini` & Internal Palatalization, `loc-mutations-palatalization`)*: Initial vowel $\to$ `e-` + suffix `-ini` with internal labial palatalization shifts (*umlomo* $\to$ *emlonyeni*, *isifuba* $\to$ *esifubeni*).
     - *Rule 5: Possessive Concord Coalescence ($a + i = e, a + u = o, a + a = a$, `loc-possessive-coalescence`)*: Vowel merging across possessive concord `-a-` and noun prefix: $wa- + umntwana \to womntwana$, $wa- + inhliziyo \to wenhliziyo$, $za- + amazinyo \to zamazinyo$.
  7. **Deficient / Auxiliary Verbs (deficient-verbs - Comprehensive 5-Rule Curriculum & Mood Chaining Grid)**:
     - *Rule 1: Casual Occurrence & Immediacy (-vele, def-vele-casual)*: Signifies spontaneous action or casual permission ([Ake + SC + -vele] -> Following Verb in Subjunctive -e, e.g. *Ake uvele ulale embhedeni*, *Ak'uvele uphumule*, *Uvele athule*).
     - *Rule 2: Near-Misses & Imminent Events (-cishe, def-cishe-almost)*: Elicits near-falls, near-syncope, and narrow escapes in trauma/geriatrics (SC + -cishe + Following Verb in Past -a- / Infinitive, e.g. *Ugogo ucishe wawa*, *Ucishe waquleka*).
     - *Rule 3: Recurrence & Adherence Warnings (-phinde, def-phinde-again)*: Schedules follow-ups in the positive (*ngizophinde ngikubone*) and constructs strict negative prohibitions with progressive *-sa-* (*ungabe usaphinda uph      - *Rule 4: Inevitable Choice & Resignation (-sale, def-sale-might-as-well)*: Expresses that doing something is the only sensible remaining clinical option or admission decision (*kungcono usale ungeniswa esibhedlela*, *asisale sesithatha igazi*).
      - *Rule 5: Elapsed Time & Chronicity (-kade, def-kade-duration)*: Establishes symptom chronicity and elapsed duration before triage presentation (SC + -kade + Participial Concord + Verb Stem, e.g. *Kade waqala ukuzwa lobu buhlungu?*, *Ubekade ekhononda*).
   8. **Object Concords — Izivumelwano Zikabagcwalisi (`object-concords` - Comprehensive 5-Rule Curriculum & Pronoun Infix Grid)**:
      - *Rule 1: The Object Infix Slot & Pronoun Substitution (`obj-infix-slot`)*: Inserting the object concord immediately before the verb root (`SC + [Tense Marker] + OC + Verb Root + Final Vowel`) to replace known direct object nouns (*udokotela uzokuhlola*, *ngiyawaphuza njalo*).
      - *Rule 2: Definiteness & The Dual-Mention Rule (`obj-definiteness-dual`)*: Co-occurrence of object concord and noun marking grammatical definiteness ("the / those specific") versus indefinite general mention (*ngifuna amaphilisi* = I want pills vs *ngiyawafuna amaphilisi* = I want THE pills).
      - *Rule 3: Class 1/1a Irregularity (-m- vs -mu-) & 2nd Person -ku- (`obj-class1-m-mu`)*: Standard Class 1 `-m-` shifting to `-mu-` before monosyllabic verb stems (*ake umuphe amaphilisi*), contrasted with 2nd person singular `-ku-` (*ngizokusiza*).
      - *Rule 4: High-Yield Anatomical & Pharmacological Concords (`obj-clinical-concords`)*: Direct mapping of medical nouns to concords: *amaphilisi* $\to$ `-wa-`, *iphilisi/iphaphu* $\to$ `-li-`, *ubuhlungu* $\to$ `-bu-`, *izinyawo* $\to$ `-zi-`, *isifuba* $\to$ `-si-`.
      - *Rule 5: The Invariable Reflexive Prefix -zi- ("Self / Oneself", `obj-reflexive-zi`)*: Universal reflexive marker occupying the OC slot across all classes and persons for subjective wellness (*uzizwa kanjani?*), self-care (*ukuzisiza*), and self-injury (*ukuzilimaza*).
   9. **The Qualificative System: True Adjectives & Relatives (`qualificatives` - Comprehensive 5-Rule Curriculum & Dual Matrix Grid)**:
      - *Rule 1: True Adjectives & The Double Concord System (`qual-true-adjectives`)*: The closed class of ~12 lexical roots taking demonstrative formative + basic noun class prefix (*omdala*, *amakhulu*, *enkulu* with nasal permutations $n + kh \to nk$).
      - *Rule 2: The Relative System (Open Descriptive Class & Colors, `qual-relative-system`)*: Open class of colors (*-bomvu*, *-mhlophe*), sensations (*-buhlungu*), and physical states (*-manzi*, *-qatha*) taking a single relative concord (*o-*, *aba-*, *eli-*, *esi-*, *obu-*).
      - *Rule 3: Verbal Relatives & The Suffix -yo (`qual-verbal-relatives`)*: Converting verbs into relative clauses with obligatory suffix *-yo* when clause-final or intransitive (*abaphilayo*, *okhwehlelayo*), dropping *-yo* when an explicit noun object follows (*esikhwehlela igazi*).
      - *Rule 4: Attributive vs. Predicative Transformation (`qual-attributive-vs-predicative`)*: Transforming noun modifiers into clinical diagnostic statements by dropping initial demonstrative vowel for true adjectives (*elikhulu* $\to$ *likhulu*) or using Subject Concords for relatives (*esithambile* $\to$ *sithambile*, *obukhali* $\to$ *bukhali*).
      - *Rule 5: Essential Clinical Qualificative Inventory (`qual-clinical-descriptors`)*: Standard terminology for acuity (*-khali*, *-dambile*), color/exudate (*-bomvu*, *-mhlophe*, *-mnyama*), consistency (*-thambile*, *-qatha*, *-manzi*), and status (*-ngcono*).
   10. **Absolute & Quantitative Pronouns (`pronouns` - Comprehensive 5-Rule Curriculum & Prepositional Contraction Grid)**:
      - *Rule 1: Absolute Pronoun Stems & Contrastive Emphasis (`pron-absolute-contrast`)*: Independent pronoun roots (*mina*, *wena*, *yena*, *thina*, *nina*, *bona*, *sona*, *zona*) used for contrastive topic shifts and subject focus.
      - *Rule 2: Prepositional Contractions (na-, nga-, ku-, `pron-preposition-contractions`)*: Dropping final *-na* to bind prepositions (*nami*, *naye*, *ngaye*, *kuso*), enabling indirect relative clauses (*isimo akuso sinzima*).
      - *Rule 3: The Quantitative Stem -onke ("All / Whole", `pron-quantitative-onke`)*: Full body regions (*wonke umzimba*) and complete pharmacological course adherence (*wonke amaphilisi*, *lonke isonto*).
      - *Rule 4: The Exclusive Stem -edwa / -odwa ("Alone / Only", `pron-quantitative-edwa`)*: Vowel alternation (-e- for 1st/2nd/Class 1: *yedwa*, *ngedwa*; -o- for others: *bodwa*, *odwa*) for ADL independence and monotherapy.
      - *Rule 5: Essential Clinical Social & Adherence Formulations (`pron-clinical-adherence`)*: Living arrangement screening (*ubani ohlala naye?*), chaperone verification, and antibiotic completion.
   11. **Demonstratives & Spatial Deixis (`demonstratives` - Comprehensive 5-Rule Curriculum & Deictic Position Grid)**:
      - *Rule 1: Position 1 Demonstrative ("This / These Near Me", `dem-position-1-near`)*: Bedside examination deixis (*lo dokotela*, *lesi sifuba*, *leli philisi*, *la maphilisi*, *lezi zilonda*).
      - *Rule 2: Position 2 Demonstrative ("That Near You / Referenced", `dem-position-2-referenced`)*: Characteristic terminal *-o* shift (*lowo*, *lelo*, *leso*, *leyo*, *lezo*) for referencing patient-reported symptoms.
      - *Rule 3: Position 3 Demonstrative ("That Over There Visible", `dem-position-3-remote`)*: Terminal suffix *-ya* (*lowaya*, *leliya*, *lesiya*, *leyaya*, *leziya*) for hospital wayfinding and ward routing.
      - *Rule 4: The Obligatory Initial-Vowel Elision Rule (`dem-vowel-elision`)*: Demonstrative + noun forces initial augment vowel stripping (*lo muntu*, *lesi sifuba*, *kulo mlenze*).
      - *Rule 5: Copulative Demonstratives ("Here is / There is" — Nangu, Nasi, `dem-copulative-presenters`)*: Bedside presenters for test results, sick notes, and medication handover (*nasi isitifiketi*, *nanka amaphilisi*, *nayi imiphumela*).
    12. **The Potential Mood ("Can / May" — Isimo Sokwenzeka, `potential-mood` - Comprehensive 5-Rule Curriculum & Capability Grid)**:
       - *Rule 1: Positive Potential with -nga- ("Can / May / Might", `pot-positive-nga`)*: `Subject Concord + -nga- + Verb Root + -a`. Capability, clinical permission, or potential side-effect onset (*ungangena*, *angavuka*).
       - *Rule 2: Negative Potential with -nge-...-e ("Cannot / May Not", `pot-negative-nge`)*: `Subject Concord + -nge- + Verb Root + -e`. Temporary inability, physical incapacity, or clinical contraindication (*angengene*, *ngingesize*).
       - *Rule 3: Absolute Categorical Negative with angeke ("Will Never / Cannot Ever", `pot-absolute-angeke`)*: `angeke + Subject Concord + Subjunctive (-e)`. Standard clinical formulation for ruling out fatal outcomes or stating non-negotiable impossibility (*angeke afe*, *angeke akwazi ukuhamba*).
       - *Rule 4: Potential Infix with Object Concords & Statives (`pot-with-oc-stative`)*: Slot mechanics pairing potential `-nga-` with object concords (`SC + -nga- + OC + Root + -a`: *ngingakusiza*, *singawahlola*) and stative roots (*angakhathala*).
       - *Rule 5: Functional Mobility & Independence Evaluation (`pot-clinical-mobility`)*: Bedside ADL evaluation formulas (*Ungakwazi ukusukuma?*, *Uyakwazi ukusukuma eyedwa?*), post-stroke limb capacity, and occupational clearance (*angabuyela emsebenzini*).
    13. **Imperatives, Prohibitions & Obligative -bo- ("Imiyalo Nezivimbelo", `imperatives-prohibitions` - Comprehensive 5-Rule Curriculum & Directive Grid)**:
       - *Rule 1: Standard Direct Imperatives & Monosyllabic Verbs (`imp-direct-monosyllabic`)*: Plain stem for polysyllabic verbs (*Vula umlomo!*), prepending `yi-` for monosyllabic stems (*Yidla!*, *Yizwa!*), and `y-` for vowel verbs (*Yenza lokhu!*).
       - *Rule 2: Plural Patient / Caregiver Commands with -ni (`imp-plural-ni`)*: Suffixing `-ni` to address multiple people or show polite communal instruction (*Hlalani phansi!*, *Musani ukukhathazeka!*).
       - *Rule 3: Prohibitions & Safety Advisories with Musa / Musani (`imp-prohibitions-musa`)*: `Musa + Infinitive (uku-)` for singular, `Musani + Infinitive` for plural. Bedside procedural safety during physical examination, cannulation, and imaging (*Musa ukunyakaza!*).
       - *Rule 4: Mandatory / Obligative Future Infix -bo- ("Must Always / Must Never", `imp-obligative-bo`)*: `Subject Concord + -bo- + Verb Root + -a`. Binding chronic treatment mandates (*Ubophuza lamaphilisi njalo*). Negative: `SC + -nga- + -bo- + Root + -a` (*Ungabophuza utshwala*).
       - *Rule 5: Bedside Procedural Commands & Examination Etiquette (`imp-clinical-procedural`)*: Physical exam command formulas (*Phefumula kakhulu*, *Khipha umoya*, *Gwinya amathe*) and polite hortative softening with *Ake...*.
    14. **Associative, Instrumental & Comparative Formatives (`formatives` - Comprehensive 5-Rule Curriculum & Case Formative Grid)**:
       - *Rule 1: Associative na- ("With / And / Have") & Clinical Possession (`form-associative-na`)*: Communicates clinical symptoms and comorbidities (*unomkhuhlane*, *unomfutho wegazi*, *unesifo sikashukela*) and accompaniment (*ufike nomntwana*).
       - *Rule 2: Instrumental nga- ("By Means Of / With / About / On", `form-instrumental-nga`)*: Expresses mechanism of injury (*washayiswa ngemoto*, *ngommese*), route of administration (*ngomlomo*, *ngomjovo*), and scheduling (*ngolwesibili*).
       - *Rule 3: Comparative njenga- ("Like / As") for Pain Quality (`form-comparative-njenga`)*: Essential for patient symptom similes (*kushisa njengomlilo*, *kuhlaba njengezinaliti*, *sicindezela njengedwala*).
       - *Rule 4: Equative nganga- ("As Big As / The Size Of", `form-equative-nganga`)*: Palpation and surgical sizing of masses, effusions, hematomas, and lymphadenopathy (*ngangengqindi*, *ngangeqanda*).
       - *Rule 5: Formative Vowel Coalescence Mechanics & Class 1a Exceptions (`form-coalescence-rules`)*: Universal coalescence: a + i = e, a + u = o, a + a = a. Class 1a takes no-, ngo-, njengo-, ngango- (*nodokotela*, *ngonesi*, *nomama*).
    15. **Interrogatives & Question Enclitics (`interrogatives` - Comprehensive 5-Rule Curriculum & Question Strategy Grid)**:
       - *Rule 1: The Verbal Enclitic -ni? ("What? / What For?", `int-enclitic-ni`)*: Chief complaint elicitation and rapid triage inquiry (*Uzwani?*, *Ufunani?*, *Kwenzekani?*, *Uphuzani?*).
       - *Rule 2: The Locative Enclitic -phi? & kuphi? ("Where?", `int-enclitic-phi`)*: Verbal enclitic -phi (*Uhlalaphi?*) and independent locative kuphi? for pain radiation and primary lesion sites (*Ubuhlungu buhamba buye kuphi?*).
       - *Rule 3: Stems of Timeline, Manner & Caregiver Identity (`int-stems-timeline-manner`)*: Chronological onset (*Kuqale nini?*), sensation and review of systems (*Uzizwa kanjani?*), and caregiver screening (*Ubani ophethe imithi?*).
       - *Rule 4: Causal Inquiries: kungani? vs. The Applicative Root -elani? (`int-causal-etiology`)*: Exploring adherence obstacles with *Kungani...?* (+ participial negative) vs verbal applicative *-elani?* (*Ubuyelani lapha?*).
       - *Rule 5: Polite Conversational Openers & Question Tags (`int-clinical-polite-openers`)*: Preserving *inhlonipho* through polite modal particles *Ingabe...* / *Ngabe...* and terminal tags *...yini?* / *...na?* (*Ingabe unayo le nkinga yini?*).
    16. **The Complete Negation Systems (`negation` - Comprehensive 5-Rule Curriculum & Master Negation Architecture)**:
       - *Rule 1: Present Indicative Negation & The Class 1 aka- Shift (`neg-present-indicative`)*: Main clause bracket formula `a- + SC + Root + -i`. Class 1/1a shifts to `aka-` (*akaguli*, *akaphuzi*). Monosyllabic verbs retain stem vowel (*akadli*).
       - *Rule 2: The Mandatory Negative Object Preprefix Vowel Drop (`neg-vowel-drop-objects`)*: Any direct object of a negated verb drops initial augment vowel to convey complete categorical absence (*Angizwa buhlungu*, *Angifuni muthi*, *Akanamali*).
       - *Rule 3: Main Clause vs. Subordinate Medial Negation (-nga-...-i) (`neg-main-vs-subordinate`)*: Dependent markers (*uma*, *ukuze*, *ngoba*, relatives) strictly forbid external `a-` and require medial `-nga-...-i` (*uma engaphuzi*, *ukuze ungafi*).
       - *Rule 4: Future Tense Negation Systems (-zu- / -zuku-) (`neg-future-systems`)*: Negating future intent and adverse prognosis: `a- + SC + -zu(ku)- + Root + -a`. Reassuring against procedural pain (*awuzukudala buhlungu*). Strictly retains final `-a`.
       - *Rule 5: Class 15 Infinitive Negation (ukunga-) & Procedural Fasting (`neg-infinitive-ukunga`)*: Gerund negation `uku- + -nga- + Root + -i` for pre-operative fasting / nil per os (*ukungadli ukudla*), substance cessation (*ukungaphuzi utshwala*), and adherence analysis.



    17. **Ideophones & Defective -thi (`ideophones` - Comprehensive 5-Rule Curriculum & Sensory Primitives)**:
       - *Rule 1: Acute Sensory Ideophones & Visual Transitions (`ideo-acute-sensory-primitives`)*: Vivid sensory primitives (*dwe*, *tebhu*, *cwaka*, *bha*, *ngci*, *phaqa*, *qhu*, *ntwesi*) describing sudden physiological changes.
       - *Rule 2: Tense Inflections of the Defective Verb -thi (`ideo-defective-thi-inflections`)*: *kwathi* (it happened that), *kuthe* (recent past), *kuzothi* (it will be).
       - *Rule 3: Cardiovascular & Neurological Ideophones (`ideo-cardio-neuro-symptoms`)*: Sudden syncope (*kwathi dwe*), rapid pulse (*ngqungqu*).
       - *Rule 4: Hemorrhage & Trauma Presentation (`ideo-trauma-hemorrhage`)*: Profuse bleeding (*kwathi tebhu*), fractures (*kwathi qhu*).
       - *Rule 5: Clinical Triage Speed & Rapid Elicitation (`ideo-clinical-triage-speed`)*: Utilizing ideophones for concise emergency presentations.
    18. **Diminutives, Augmentatives & Noun Palatalization (`diminutives-augmentatives` - Comprehensive 5-Rule Curriculum)**:
       - *Rule 1: Alveolar & Labial Sound Shifts (`dim-sound-shifts`)*: $b \to tsh$, $m \to ny$, $mb \to nj$, $l \to dl$ with suffix `-ana`.
       - *Rule 2: Pediatric & Anatomical Diminutives (`dim-pediatric-anatomy`)*: *ithambo* $\to$ *ithanjana*, *umlenze* $\to$ *umlenzana*.
       - *Rule 3: Clinical Attenuation & Downplaying (`dim-symptom-attenuation`)*: *umkhuhlwana* (mild cold/fever), *kancane*.
       - *Rule 4: Augmentative Suffix -kazi (`dim-augmentative-kazi`)*: Intensifying severity: *ingozikazi* (catastrophic accident).
       - *Rule 5: Bedside Empathy & Patient Rapport (`dim-clinical-rapport`)*: Softening diagnosis and calming distress.
    19. **Compound Tenses & Multi-Tier Aspect Chaining (`compound-tenses` - Comprehensive 5-Rule Curriculum)**:
       - *Rule 1: Past Continuous with -lokhu (`comp-past-frequentative-lokhu`)*: Unbroken habitual action (*bengilokhu ngiphalaza*).
       - *Rule 2: Prior State Transitions with se- (`comp-prior-state-se`)*: Prior state onset (*wayeselele*, *sasesiqulekile*).
       - *Rule 3: Future Continuous & Perfect Horizons (`comp-future-continuous-perfect`)*: Anticipated future state (*ngobe sengiwaphuzile*).
       - *Rule 4: Unfulfilled Intent with -sa- (`comp-unfulfilled-intent`)*: Interrupted plan (*ngangisazoya*).
       - *Rule 5: Clinical Longitudinal Timeline Untangling (`comp-clinical-longitudinal-timeline`)*: Multi-encounter history mapping.
    20. **Narrative Sequencing & Irregular Verbs (`narrative-irregular` - Comprehensive 5-Rule Curriculum)**:
       - *Rule 1: Sequential Subjunctive with bese (`narr-sequential-subjunctive-bese`)*: Procedural step chaining (*bese ugcoba*).
       - *Rule 2: Prerequisite Actions with anduba (`narr-prerequisite-anduba`)*: Condition precedence (*anduba uphuze*).
       - *Rule 3: Narrative Past Chaining with wa- (`narr-past-chaining`)*: Incident chronology (*wawa phansi, wabe esequleka*).
       - *Rule 4: Irregular Verb -azi (`narr-irregular-azi`)*: Knowledge and ability (*ngiyazi*, *angazi*).
       - *Rule 5: Defective Stems -sho and -thi (`narr-defective-sho-thi`)*: Quoting and clarifying (*usho ukuthini?*, *wathi*).
    21. **The Present Indicative Tense (`present-indicative` - Comprehensive 5-Rule Curriculum & Clinical Verbs Matrix)**:
       - *Rule 1: Present Long Form with -ya- (`pres-long-form-ya`)*: `SC + -ya- + Verb Root + -a`. Affirmative terminal emphasis or intransitive state (*Ngiyagula* = I am sick; *Udokotela uyeza* = The doctor is coming).
       - *Rule 2: Obligatory -ya- Drop Before Objects & Adverbials (`pres-short-drop-ya`)*: When followed by an object or adverb, `-ya-` is strictly excluded (*Ngifuna umuthi*, never * *Ngiyafuna umuthi*; *Ngigula kakhulu*, never * *Ngiyagula kakhulu*).
       - *Rule 3: Habitual Present Aspect with -vame uku- / njalo (`pres-habitual-aspect`)*: Chronic baseline behaviors and symptom recurrence: `SC + -vame + Infinitive` (*Ngivame ukuba nekhanda* = I tend to have headaches; *Uphuza njalo* = He drinks regularly).
       - *Rule 4: Object Concords in the Present Tense & Focus Shifts (`pres-object-concords`)*: Pairing present tense with object concords (*Ngiyawaphuza amaphilisi* vs *Ngiwaphuzela ukusinda*).
       - *Rule 5: Present Review of Systems (ROS) & Physical Complaints (`pres-clinical-ros`)*: Active bedside symptom elicitation (*Ngizwa ubuhlungu*, *Ngiphefumula kanzima*, *Inhliziyo igxuma ngamandla*).
    22. **The Primary Future Tenses (`future-tenses` - Comprehensive 5-Rule Curriculum & Prognosis Matrix)**:
       - *Rule 1: Near Future Tense with -zo- (`fut-near-zo`)*: `SC + -zo- + Verb Root + -a`. Imminent clinical plans today, tonight, tomorrow (*Ngizobona udokotela kusasa*).
       - *Rule 2: Obligatory Retention of -zoku- / -yoku- with Monosyllabic & Vowel Verbs (`fut-monosyllabic-retention`)*: Monosyllabic stems (*-dla*, *-za*, *-zwa*) and vowel verbs (*-enza*, *-oma*) obligatorily retain `ku-`: *uzokudla*, *ngizokwenza*, *kuzokuma*.
       - *Rule 3: Remote Future Tense with -yo- / -yoku- (`fut-remote-yo`)*: Long-term prognosis months or years ahead (*Uyobuyela emtholampilo ngonyaka ozayo*).
       - *Rule 4: Object Concord Slot Insertion in Future Tenses (`fut-object-concord-slot`)*: Object concord slots between `-zo-`/`-yo-` and stem, displacing dummy `-ku-` for monosyllabic verbs (*ngizokunika*, *ngizowadla*).
       - *Rule 5: Clinical Prognosis & Therapeutic Expectation Setting (`fut-clinical-prognosis`)*: Bedside reassurance formulas (*Uzophola*, *Lo muthi uzodambisa ubuhlungu*, *Inxeba lizoma*).
    23. **Class 15 Infinitives & Prepositional Governance (`infinitives` - Comprehensive 5-Rule Curriculum & Timing Grid)**:
       - *Rule 1: Class 15 Nominalization & Grammatical Agreement (`inf-nominalization-agreement`)*: `uku- + Verb Root + -a`. Every verb stem nominalizes into Class 15, taking subject concord `ku-` and possessive concord `kwa-` (*Ukuhlinzwa kuyadingeka* = Surgery is necessary).
       - *Rule 2: Temporal Prepositions: ngaphambi ko- ("Before / Pre-prandial", `inf-temporal-ngaphambi`)*: Governs nominal infinitives (`ngaphambi kokudla` = before eating) or subjunctive clauses (`ngaphambi kokuba ulale`).
       - *Rule 3: Temporal Prepositions: emva ko- ("After / Post-prandial", `inf-temporal-emva`)*: `emva / ngemuva + ko- + Infinitive` (*emva kokudla* = after eating) for gastric protection against NSAIDs and steroids.
       - *Rule 4: Exclusionary & Conditional: ngaphandle ko- ("Without / Except", `inf-exclusion-ngaphandle`)*: Mandatory procedural stillness commands (*ngaphandle kokunyakaza*) and regimen continuity.
       - *Rule 5: Embedding Object Concords within Infinitives (`inf-object-concord-embedding`)*: `uku- + OC + Root + -a`. Object concords slot directly between `uku-` and root: *ukukusiza*, *ukuwahlola*, *ukuyihlanza*.
    24. **Clinical Inhlonipho, Vocatives & Respectful Registers (`inhlonipho-registers` - Comprehensive 5-Rule Curriculum)**:
       - *Rule 1: The Vocative Initial-Vowel Drop Rule (`inh-vocative-vowel-drop`)*: Initial augment vowel is obligatorily dropped in direct address (*Dokotela!*, *Mhlengikazi!*, *Mama!*, *Gogo!*).
       - *Rule 2: Clan Names & Praises (Isibongo & Izithakazelo, `inh-clan-izithakazelo`)*: Addressing patients by clan name (*Sawubona Sibiya!*, *Yebo Nongombili!*, *Ndlovu!*, *Mthethwa!*) builds immediate bedside rapport and cultural safety.
       - *Rule 3: Obstetric & Reproductive Inhlonipho (`inh-obstetric-euphemism`)*: Modesty terms in maternal health: *ukhulelwe* or *uzithwele* (carrying life) vs crude *unesisu* or animalistic *umithi*.
       - *Rule 4: Palliative Care, Oncology & Bereavement Registers (`inh-bereavement-palliative`)*: Compassionate euphemisms for death: *udlule emhlabeni*, *ushonile*, *ugodukile* rather than crude *ukufa*.
       - *Rule 5: Respectful Physical Examination Elicitation (Ake..., `inh-clinical-consent-etiquette`)*: Softening commands with hortative *Ake...* + subjunctive (*Ake uhlale phansi*, *Ake ngikuhlole*) to foster collaborative consent.

- **Interactive Grammar Diagnostic Checkpoints & Matrix Tables**:
  - **Class 15 Infinitives & Prepositional Governance Reference Matrix Table**: 8 prepositional patterns comparing pre-prandial timing (*ngaphambi ko-*), post-prandial dosing (*emva ko-*), procedural stillness (*ngaphandle ko-*), and embedded object concords (*ukukusiza*, *ukuyihlola*).
  - **Infinitives & Prepositional Governance Self-Check**: 3 clinical challenges (pre-meal scheduling with *ngaphambi kokudla*, procedural immobility during cannulation with *ngaphandle kokunyakazisa*, and embedded OC with *ukusihlola* / *nokukusiza*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Clinical Inhlonipho & Respectful Registers Matrix Table**: 8 communication registers comparing respectful isiZulu forms vs crude pitfalls across vocative address, clan salutations (*izithakazelo*), maternal modesty, palliative bereavement, and gentle physical exam commands (*Ake...*).
  - **Clinical Inhlonipho & Bedside Etiquette Self-Check**: 3 clinical challenges (vocative initial-vowel drop with *Sawubona Sibiya, Nongombili!*, obstetric modesty with *uzithwele*, and compassionate bereavement with *udlule emhlabeni*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Present Indicative Clinical Verbs Reference Matrix Table**: 8 common clinical verbs (*-gula*, *-phuza*, *-funa*, *-zwa*, *-hlola*, *-buhlungu*, *-khwehlela*, *-phefumula*) compared across Long Form (-ya-), Short Form (Complement), With Object Concord, and Clinical Syntax Rule.
  - **Present Indicative & -ya- Drop Self-Check**: 3 clinical challenges (mandatory -ya- drop before direct object with *Ngiphuza amaphilisi omfutho wegazi njalo ekuseni.*, long form -ya- for intransitive affirmation with *Yebo dokotela, ngiyagula futhi ngiyaqhaqhazela.*, and review of systems with *Ngiphefumula kanzima kakhulu lapho ngilala phansi embhedeni.*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Future Tenses & Prognosis Reference Matrix Table**: 8 noun class / person rows comparing Near Future Contracted (-zo-), Monosyllabic Retention (-zoku-), Remote Future (-yo-), With Object Concord, and Clinical Prognostic Utility.
  - **Future Tenses & Prognosis Self-Check**: 3 clinical challenges (near future with object concord insertion *Ngizokunika amaphilisi aqinile obuhlungu ozowaphuza ekhaya.*, monosyllabic stem retention of -zoku- *Uzokudla ukudla okuthambile ngaphambi kokuba uphuze lo muthi kusasa.*, and remote future prognosis with -yo- *Uyohlolwa futhi esibhedlela esikhulu ngonyaka ozayo mayelana nenhliziyo yakho.*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Compound Tenses & Multi-Tier Aspect Chaining Matrix Table**: 8 compound patterns comparing past frequentative continuous (*-lokhu*), prior transition state (*wayese-*), future completed perfect (*ngobe sengiwaphuzile*), unfulfilled intent (*ngangisazoya*), and longitudinal disease chronologies.
  - **Compound Tenses & Multi-Tier Timeline Self-Check**: 3 clinical challenges (unbroken vomiting with *bengilokhu ngiphalaza*, pre-admission unconsciousness with *sasesiqulekile*, and completed antibiotic clearance with *ngobe sengiwacedile*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Narrative Step Sequencing & Irregular Verbs Matrix Table**: 8 narrative sequencing and irregular verb mechanics comparing sequential subjunctive (*bese*), prerequisite timing (*anduba*), narrative past chaining (*wa-... wa-...*), temporal pivot (*kwathi lapho*), and irregular verbs (*-azi*, *-sho*, *-thi*).
  - **Narrative Sequencing & Irregular Verbs Self-Check**: 3 clinical challenges (multi-step wound dressing with *bese ugcoba*, symptom clarification with *usho ukuthini?*, and trauma history chaining with *wabe esequleka*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Acute Sensory Ideophones Reference Matrix Table**: 8 acute sensory ideophones (*dwe*, *tebhu*, *cwaka*, *bha*, *ngci*, *phaqa*, *qhu*, *ntwesi*) paired with defective *-thi* inflections, triage scenarios, and clinical significance.
  - **Acute Sensory Ideophones Self-Check**: 3 clinical challenges (syncopal blackout with *kwathi dwe*, spurting hemorrhage with *kwathi tebhu*, and high fever with *kushisa bha*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Noun Diminutives, Sound Shifts & Augmentatives Matrix Table**: 8 comparison entries detailing bilabial and alveolar sound shifts ($b \to tsh$, $m \to ny$, $mb \to nj$, $l \to dl$), symptom downplaying, pediatric anatomy, and augmentative `-kazi`.
  - **Diminutive Shifts & Attenuation Self-Check**: 3 clinical challenges (symptom attenuation with *umkhuhlwana*, pediatric hairline fissure on *ithanjana*, and multi-vehicle catastrophe with *ingozikazi*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **The Complete Negation Systems Reference Matrix Table**: Master comparative grid displaying 8 tense/mood systems across positive formulas, negative formulas, bedside examples, vowel shift rules, and clinical diagnostic utilities.
  - **Negation Architecture & Fasting Self-Check**: 3 clinical challenges (mandatory object vowel drop with *Angizwa buhlungu*, pre-operative fasting with *ukungadli*, and subordinate conditional negation with *uma singawaphuzi*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.

  - **Formatives & Case-Relation Reference Matrix Table**: Responsive comparison table displaying 8 core noun classes comparing associative (*na-*), instrumental (*nga-*), comparative (*njenga-*), and equative (*nganga-*) formatives across clinical scenarios.
  - **Formatives & Case-Relation Self-Check**: 3 clinical challenges (MVA mechanism of injury with *washayiswa ngemoto*, burning pain simile with *njengomlilo*, and mass sizing with *ngangengqindi*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Clinical Interrogatives & Question Enclitics Matrix Table**: Responsive reference grid comparing 8 question strategies across morphemes, clinical formulas, bedside question examples, and diagnostic utilities.
  - **Clinical Interrogatives & History-Taking Self-Check**: 3 clinical challenges (pain localization with *kuphi?*, onset timeline with *nini?*, and adherence exploration with *kungani?* + participial negative) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.

  - **Potential Mood & Capability Reference Matrix Table**: Responsive comparison table displaying 8 core noun classes / persons across positive potential (*-nga-*), negative potential (*-nge-...-e*), absolute negative (*angeke*), and clinical applications.
  - **Potential Mood & Mobility Self-Check**: 3 clinical challenges (mobility assessment with *singehambe* / *angeke sihambe*, triage consent with *ungangena*, and treatment feasibility with *singasipholisa*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Imperatives, Prohibitions & Obligative -bo- Reference Matrix Table**: Responsive comparison table displaying 8 verb types across singular commands, plural commands (*-ni*), negative safety prohibitions (*musa*), and mandatory adherence (*-bo-*).
  - **Procedural Commands & Adherence Self-Check**: 3 clinical challenges (procedural stillness with *Musa ukunyakazisa*, chronic medication adherence with *Ubophuza*, and group instructions with *Hlalani*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.

  - **Absolute & Quantitative Pronoun Reference Matrix Table**: Responsive comparison table displaying 8 core noun classes / persons across absolute, associative (*na-*), instrumental (*nga-*), locative (*ku-*), and quantitative (*-onke*, *-edwa/-odwa*) forms.
  - **Pronoun Contraction & Social History Self-Check**: 3 clinical challenges (indirect relative with *kuso*, geriatric independence with *yedwa*, and complete antibiotic course with *wonke*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Demonstratives & Spatial Deixis Reference Matrix Table**: Responsive comparison table displaying 8 core noun classes across Position 1 ("this"), Position 2 ("that referenced"), Position 3 ("that yonder"), and elided clinical examples.
  - **Demonstrative Deixis & Examination Self-Check**: 3 clinical challenges (anatomical localization with *lobu buhlungu* / *kulo mlenze*, referencing prior complaints with *leyo nkinga*, and handover with *nayi* / *nazi*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **The Qualificative System: Adjectives & Relatives Matrix Table**: Responsive comparison table displaying 8 core noun classes comparing True Adjectives (attributive vs predicative), Relatives (attributive vs predicative), and clinical examination applications.
  - **Qualificative & Clinical Description Self-Check**: 3 clinical challenges (True Adj vs Relative distinction, verbal relative with clause-final *-yo*, and physical exam predicative shift) with answer reveals, concord gloss chips, and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Object Concord & Pronoun Infix Matrix Table**: Responsive comparison table displaying 11 core noun classes / persons with Subject Concords, Object Concords, Noun Triggers, Formula Placements, Clinical Bedside Examples, and Grammatical Functions.
  - **Object Concord & Pronoun Infix Self-Check**: 3 clinical challenges (medication adherence with `-wa-`, doctor examination with `-ku-`, and subjective wellness with `-zi-`) with answer reveals, concord gloss chips, and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Auxiliary Verbs & Mood Chaining Matrix Table**: Responsive comparison table displaying 6 core defective auxiliary stems (-vele, -cishe, -phinde, -sale, -kade, -simze) with governed moods, formulas, clinical applications, and bedside examples.
  - **Deficient Verbs Self-Check**: 3 clinical challenges (near-fall with *-cishe*, casual hortative instruction with *-vele*, and strict adherence warning with *-phinde*) with answer reveals, concord gloss chips, and 1-tap [ Flag for Drills ] bookmarking.
  - **Verbal Extensions Matrix Table**: Responsive comparison table displaying 5 core extensions (`Applicative (-ela)`, `Causative (-isa)`, `Passive (-wa)`, `Neuter (-eka/-akala)`, `Reciprocal (-ana)`) with formulas, sound shifts, and clinical examples.
  - **Verbal Extensions Self-Check**: 3 clinical challenges (passive palatalization with *selashwa*, causative side-effects with *ayahambisa isisu*, and applicative clinic preparation with *ungilungiselela*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Noun Class Copulative & Locative Matrix Table**: Direct reference grid comparing 6 noun classes across noun examples, identification copulatives, negative copulatives, and locative mutations.
  - **Copulatives & Locatives Self-Check**: 3 clinical challenges (diabetes non-contagious diagnosis with *yisifo* / *akusona*, oral sores via *emlonyeni*, and clinic absence with *akakho* / *usesibhedlela*) with answer reveals and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Clause Governance Matrix**: Responsive reference grid comparing 8 key conjunctions (*ukuze*, *kufanele*, *ake*, *uma*, *ngenkathi*, *ngoba*, *kodwa*, *ngaphambi kokuba*), grammatical roles, induced moods, verb mutations, and negative formations.
  - **Clause Governance Self-Check**: 3 clinical challenges (dehydration prevention with *ukuze* + *ungomi*, medication non-adherence with *uma* + *engaphuzi*, and medication timing sequence with *emva kokuba* + *kodwa* + *ngaphambi kokuba*) with instant answer reveal and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Past Concord Matrix**: Responsive reference grid comparing immediate continuous, remote simple, and remote continuous across 7 subject persons/classes with clinical examples and usage notes.
  - **History-Taking Self-Check**: 3 bedside scenarios with instant answer reveal and 1-tap `[ Flag for Drills ]` bookmarking into `localStorage` (`kuzwakele_flagged_drills`).
  - **High-Yield Stative Mutation Reference Grid**: Dedicated responsive table comparing 10 high-yield roots, process meanings, present positive statives, present negative statives, and clinical applications.
  - **Interactive Checkpoints Bedside Self-Test**: 3 clinical self-check scenarios (tired gogo, alert baby, unswollen feet) with toggleable answer reveal, concord breakdowns, linguistic rule tips, and 1-tap `[ Flag for Drills ]` bookmarking.
  - **Symptom Trajectory & Aspect Infix Matrix Table**: Responsive comparison table displaying 4 core temporal infixes (`-sa-`, `se- / -se-`, `-ka-`, `-ke-`) across positive/negative morphology and bedside diagnostic functions.
  - **Symptom Trajectory & Aspect Infix Self-Check**: 3 clinical challenges (symptom persistence vs cessation, pending lab turnaround, and prior allergic history) with answer reveals, linguistic keys, morpheme gloss chips, and 1-tap `[ Flag for Drills ]` bookmarking.
- **Modular Data Architecture (frontend/src/data/grammar/)**:
  - pastTenses.js: Section metadata, 5 rules, PAST_CONCORD_MATRIX, and PAST_PRACTICE_CHECKPOINTS.
  - stative.js: Section metadata, 5 rules, STATIVE_IRREGULAR_TABLE, and STATIVE_PRACTICE_CHECKPOINTS.
  - conjunctions.js: Section metadata, 5 rules, CONJUNCTION_GOVERNANCE_TABLE, and CONJUNCTION_PRACTICE_CHECKPOINTS.
  - aspectInfixes.js: Section metadata, 5 rules, ASPECT_INFIX_MATRIX, and ASPECT_INFIX_CHECKPOINTS.
  - verbalExtensions.js: Section metadata, 5 rules, VERBAL_EXTENSIONS_TABLE, and VERBAL_EXTENSIONS_CHECKPOINTS.
  - copulativesLocatives.js: Section metadata, 5 rules, COPULATIVE_LOCATIVE_TABLE, and COPULATIVE_LOCATIVE_CHECKPOINTS.
  - deficientVerbs.js: Section metadata, 5 rules, DEFICIENT_VERBS_TABLE, and DEFICIENT_VERBS_CHECKPOINTS.
  - objectConcords.js: Section metadata, 5 rules, OBJECT_CONCORD_MATRIX, and OBJECT_CONCORD_CHECKPOINTS.
  - qualificatives.js: Section metadata, 5 rules, QUALIFICATIVE_MATRIX, and QUALIFICATIVE_CHECKPOINTS.
  - pronouns.js: Section metadata, 5 rules, PRONOUNS_MATRIX, and PRONOUNS_CHECKPOINTS.
  - demonstratives.js: Section metadata, 5 rules, DEMONSTRATIVES_MATRIX, and DEMONSTRATIVES_CHECKPOINTS.
  - potentialMood.js: Section metadata, 5 rules, POTENTIAL_MOOD_MATRIX, and POTENTIAL_MOOD_CHECKPOINTS.
  - imperatives.js: Section metadata, 5 rules, IMPERATIVES_MATRIX, and IMPERATIVES_CHECKPOINTS.
  - formatives.js: Section metadata, 5 rules, FORMATIVES_MATRIX, and FORMATIVES_CHECKPOINTS.
  - interrogatives.js: Section metadata, 5 rules, INTERROGATIVES_MATRIX, and INTERROGATIVES_CHECKPOINTS.
  - negation.js: Section metadata, 5 rules, NEGATION_MATRIX, and NEGATION_CHECKPOINTS.
  - ideophones.js: Section metadata, 5 rules, IDEOPHONES_MATRIX, and IDEOPHONES_CHECKPOINTS.
  - diminutives.js: Section metadata, 5 rules, DIMINUTIVES_MATRIX, and DIMINUTIVES_CHECKPOINTS.
  - compoundTenses.js: Section metadata, 5 rules, COMPOUND_TENSES_MATRIX, and COMPOUND_TENSES_CHECKPOINTS.
  - narrativeSequence.js: Section metadata, 5 rules, NARRATIVE_SEQUENCE_MATRIX, and NARRATIVE_SEQUENCE_CHECKPOINTS.
  - grammarData.js: Clean aggregating barrel exporter assembling 20 GRAMMAR_SECTIONS, 100 GRAMMAR_RULES, and re-exporting all tables and practice arrays with 100% backward compatibility.
- **Core User Features**:
  - **Prominent Formula Banners**: Monospace badges showing grammatical morphology with one-click copy buttons.
  - **Pitfall Warnings**: High-visibility warning boxes highlighting frequent English-speaker traps (e.g. translating stative as English past tense).
  - **Contextual Clinical vs Community Cards**: Distinguishes clinical consultation phrases from everyday community dialogue.
  - **Expandable Morpheme Token Breakdowns**: Detailed breakdown tokens identifying prefix, root, suffix, and grammatical gloss.
  - **1-Tap Drill Gym Integration**: Instant flagging into `drillsStorage` (`kuzwakele_flagged_drills`) with cross-tab reactive event sync (`drills-updated`), populating directly into the Drills Gym Review Deck.



