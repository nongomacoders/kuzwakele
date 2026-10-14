/**
 * Kuzwakele Grammar Reference - deficientVerbs.js
 */

export const DEFICIENT_VERBS_SECTION = {
  id: 'deficient-verbs',
  title: 'Deficient / Auxiliary Verbs',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Special verb stems (-vele, -cishe, -phinde, -sale, -kade) modifying manner, time, and inevitability while chaining subsequent verb moods.',
  previewHook: '-vele (just/simply), -cishe (almost), -phinde (again), -sale (might as well)',
  description: 'Master the 5 core deficient / auxiliary verb stems: casual immediacy (-vele), near-misses and falls (-cishe), recurrence and adherence (-phinde), resignation and admission (-sale), and chronicity (-kade).'
};

export const DEFICIENT_VERBS_TABLE = [
  {
    stem: '-vele',
    meaning: 'Just / Simply / Go ahead',
    governedMood: 'Subjunctive (-e) or Participial',
    formula: '[Ake + SC + -vele] -> Following Verb in -e',
    clinicalUtility: 'Prompting hesitant patients, bedside instructions, casual permission',
    example: 'Ake uvele ulale embhedeni / uvele athule'
  },
  {
    stem: '-cishe',
    meaning: 'Almost / Nearly',
    governedMood: 'Remote Past (-a-) or Infinitive (uku-)',
    formula: 'SC + -cishe + [wa- / ya- + Root + -a]',
    clinicalUtility: 'Geriatric near-fall history, near-syncope, acute trauma assessment',
    example: 'ugogo ucishe wawa / ucishe waquleka'
  },
  {
    stem: '-phinde',
    meaning: 'Again / Once more (Pos) | Never again (Neg)',
    governedMood: 'Subjunctive (-e)',
    formula: 'Pos: SC + -phinde + Verb in -e | Neg: ungabe usaphinda + Verb in -e',
    clinicalUtility: 'Scheduling follow-ups, medication warnings, toxicity avoidance',
    example: 'ngizophinde ngikuhlole / ungaphinde uphuze ungadlile'
  },
  {
    stem: '-sale',
    meaning: 'Might as well / Better to just',
    governedMood: 'Participial or Subjunctive (frequently with se-)',
    formula: 'SC + -sale + [se- + SC + Root + -a / -e]',
    clinicalUtility: 'Emergency admission recommendations, default care pathways',
    example: 'kungcono usale ungeniswa esibhedlela'
  },
  {
    stem: '-kade',
    meaning: 'Have long been / Long since',
    governedMood: 'Participial Concord + Verb Stem / Stative',
    formula: 'SC + -kade + [e- / be- + Verb Stem]',
    clinicalUtility: 'Symptom chronicity, elapsed duration before triage, delayed presentation',
    example: 'kade wagula? / ubekade ekhononda ngesifuba'
  },
  {
    stem: '-simze',
    meaning: 'Merely / Simply / Do nothing but',
    governedMood: 'Subjunctive (-e) or Infinitive',
    formula: 'SC + -simze + Verb in -e',
    clinicalUtility: 'Eliciting sudden unprovoked collapse, unexplained non-responsiveness',
    example: 'usimze wawa nje engakhonondanga'
  }
];


export const DEFICIENT_VERBS_CHECKPOINTS = [
  {
    id: 'def-check-1',
    challengeNumber: 1,
    prompt: 'The grandmother almost fell when standing up from the chair.',
    targetConcept: 'Near-Fall Auxiliary (-cishe) + Past Concord (wawa)',
    primaryAnswer: 'Ugogo ucishe wawa lapho esukuma esihlalweni.',
    breakdown: [
      { chunk: 'Ugogo', gloss: 'Class 1a noun ("the grandmother")' },
      { chunk: 'u-cishe wa-w-a', gloss: 'u- (Class 1 SC) + -cishe (auxiliary: "almost") + wawa (past: "she fell -> almost fell")' },
      { chunk: 'lapho', gloss: 'temporal adverbial conjunction ("when / where")' },
      { chunk: 'e-sukum-a', gloss: 'e- (participial Class 1 concord) + -sukuma (stand up: "while standing up")' },
      { chunk: 'esihlalweni', gloss: 'locative noun on isihlalo (chair: "from the chair")' }
    ],
    ruleTip: "-cishe governs the following verb in the past tense with concord wa- (wawa). It is indispensable in geriatric history-taking to distinguish near-falls from true syncopal drops."
  },
  {
    id: 'def-check-2',
    challengeNumber: 2,
    prompt: "Why don't you just lie down on the bed?",
    targetConcept: 'Hortative (Ake) + Auxiliary (-vele) + Subjunctive Chaining (-e)',
    primaryAnswer: 'Ake uvele ulale embhedeni.',
    breakdown: [
      { chunk: 'Ake', gloss: 'polite hortative particle ("please / why don\'t you")' },
      { chunk: 'u-vele', gloss: 'u- (2nd person SC) + -vele (auxiliary stem: "just / simply")' },
      { chunk: 'u-lal-e', gloss: 'u- (2nd person SC) + -lala (lie down / sleep) + -e (subjunctive ending: "that you lie down")' },
      { chunk: 'embhedeni', gloss: 'locative on umbhede ("on the bed")' }
    ],
    ruleTip: "The hortative Ake triggers both the auxiliary verb -vele and the main lexical verb into the subjunctive mood ending in -e: Ake uvele ulale (or contracted Ak'uvele ulale)."
  },
  {
    id: 'def-check-3',
    challengeNumber: 3,
    prompt: 'Do not ever drink this medicine on an empty stomach again.',
    targetConcept: 'Negative Adherence Infix (-sa-) + Auxiliary (-phinda) + Subjunctive (-e)',
    primaryAnswer: 'Ungabe usaphinda uphuze lo muthi ungalambile.',
    breakdown: [
      { chunk: 'Ungabe', gloss: 'negative potential auxiliary ("do not be / do not dare")' },
      { chunk: 'u-sa-phind-a', gloss: 'u- (2nd person SC) + -sa- (continuity) + -phinda (repeat auxiliary: "ever again")' },
      { chunk: 'u-phuz-e', gloss: 'u- (2nd person SC) + -phuza (drink) + -e (subjunctive ending governed by -phinda)' },
      { chunk: 'lo muthi', gloss: 'demonstrative lo + Class 3 umuthi ("this medicine")' },
      { chunk: 'ungalambile', gloss: 'participial negative of hunger/empty stomach ("on an empty stomach / without eating")' }
    ],
    ruleTip: "To express 'never again' in clinical instructions, pair negative concord ungabe with -sa- + -phinda, which obligatorily chains the following verb into the subjunctive mood (-e: uphuze)."
  }
];

export const DEFICIENT_VERBS_RULES = [
// ==========================================
  // CATEGORY 7: DEFICIENT / AUXILIARY VERBS
  // ==========================================
  {
    id: 'def-vele-casual',
    category: 'deficient-verbs',
    title: "The Auxiliary -vele ('Just / Simply / Go Ahead')",
    subtitle: 'Expressing spontaneous action, casual permission, or doing something straightaway',
    formula: '[Ake + SC + -vele] -> Following Verb in Subjunctive (-e)',
    explanation:
      "The stem -vele acts as an auxiliary meaning 'simply', 'just', or 'happen to'. When governed by the polite hortative Ake, both -vele and the main verb chain into the subjunctive mood ending in -e: Ake uvele ucule / contracted: Ak'uvele ucule ('Why don\\'t you just sing?' / 'Go ahead and sing'); Uvele athule ('He/she simply goes quiet / remains silent'); Wavela wangena ('He just entered without hesitation').",
    commonPitfall:
      'Treating vele as an invariable adverb. It is a true verb stem taking subject concords and mood mutations.',
    rules: [
      "-vele signifies doing something straightaway, spontaneously, or as a natural consequence ('simply / just').",
      "When preceded by hortative Ake, both -vele and the lexical verb end in subjunctive -e: Ake uvele ulale (or Ak'uvele ulale).",
      "In indicative clauses, -vele takes normal subject concords: uvele athule ('she just goes quiet'), ngivele ngisuke ('I simply leave').",
      "In negative imperatives, pairing with unga- warns against unprovoked silence: ungavele uthule ('do not just remain silent')."
    ],
    examples: [
      {
        id: 'def-vele-ex-1',
        type: 'clinical',
        isizulu: 'Ungavele uthule uma uzwa ubuhlungu obunamandla esifubeni.',
        english: 'Do not simply keep quiet if you feel severe pain in the chest.',
        breakdown: [
          { chunk: 'U-nga-vele', gloss: 'u- (2nd person SC) + -nga- (negative imperative) + -vele (auxiliary: "simply / just")' },
          { chunk: 'u-thul-e', gloss: 'u- (SC) + -thula (be quiet) + -e (subjunctive: "keep quiet")' },
          { chunk: 'uma uzwa ubuhlungu', gloss: 'if you feel pain' },
          { chunk: 'obunamandla esifubeni', gloss: 'which is severe in the chest' }
        ]
      },
      {
        id: 'def-vele-ex-2',
        type: 'bedside',
        isizulu: 'Ake uvele uphumule embhedeni ngenkathi silungisa imiphumela yakho.',
        english: "Why don't you just rest on the bed while we prepare your results.",
        breakdown: [
          { chunk: 'Ake', gloss: 'polite hortative particle ("please / why don\'t you")' },
          { chunk: 'u-vele', gloss: 'u- (2nd person SC) + -vele (auxiliary: "just")' },
          { chunk: 'u-phumul-e', gloss: 'u- (SC) + -phumula (rest) + -e (subjunctive)' },
          { chunk: 'embhedeni', gloss: 'locative on umbhede ("on the bed")' },
          { chunk: 'ngenkathi silungisa imiphumela yakho', gloss: 'while we prepare your results' }
        ]
      }
    ]
  },
  {
    id: 'def-cishe-almost',
    category: 'deficient-verbs',
    title: "The Auxiliary -cishe ('Almost / Nearly')",
    subtitle: 'Eliciting near-falls, near-syncope, and narrow escapes in trauma/geriatrics',
    formula: 'Subject Concord + -cishe + Following Verb in Remote Past (-a-) or Infinitive (uku-)',
    explanation:
      "Essential for clinical fall histories and consciousness checks. Typically governs the subsequent verb in the past tense with -a-: Ngicishe ngawa ('I almost fell'); Ucishe waquleka lapho esukuma ('He almost fainted when he stood up'); Ingane icishe yaminza ('The child nearly drowned').",
    commonPitfall:
      "Trying to translate 'almost' using an English-style modifier instead of conjugating -cishe as an inflected auxiliary verb.",
    rules: [
      "-cishe means 'almost' or 'nearly', expressing an action that came close to occurring but did not.",
      "Most frequently governs the subsequent verb in the past tense with concord wa- / nga- / sa-: ngicishe ngawa ('I nearly fell').",
      "Can also govern an infinitive: ngicishe ukuwa, though past tense chaining (ngicishe ngawa) is preferred in natural speech.",
      'Vital in geriatric history-taking to identify presyncope and transient loss of balance without impact injury.'
    ],
    examples: [
      {
        id: 'def-cishe-ex-1',
        type: 'clinical',
        isizulu: 'Isiguli sicishe sawa phansi lapho sizama ukusukuma esihlalweni.',
        english: 'The patient almost fell down when attempting to stand up from the chair.',
        breakdown: [
          { chunk: 'Isiguli', gloss: 'Class 7 noun ("the patient")' },
          { chunk: 'si-cishe', gloss: 'si- (Class 7 SC) + -cishe (auxiliary: "almost / nearly")' },
          { chunk: 'sa-w-a phansi', gloss: 'sa- (Class 7 past concord) + -wa (fall) + phansi (down: "fell down")' },
          { chunk: 'lapho sizama ukusukuma', gloss: 'when it attempted to stand up' },
          { chunk: 'esihlalweni', gloss: 'locative on isihlalo ("from the chair")' }
        ]
      },
      {
        id: 'def-cishe-ex-2',
        type: 'triage',
        isizulu: 'Ucishe washayiswa yimoto lapho ewelela ngaphesheya komgwaqo.',
        english: 'He was almost struck by a vehicle when crossing the road.',
        breakdown: [
          { chunk: 'U-cishe', gloss: 'u- (Class 1 SC) + -cishe ("almost")' },
          { chunk: 'wa-shayis-w-a', gloss: 'wa- (past concord) + -shayiswa (passive of -shayisa: "was struck")' },
          { chunk: 'yimoto', gloss: 'y- (copulative agent: "by a car")' },
          { chunk: 'lapho ewelela ngaphesheya komgwaqo', gloss: 'when crossing across the road' }
        ]
      }
    ]
  },
  {
    id: 'def-phinde-again',
    category: 'deficient-verbs',
    title: "The Auxiliary -phinde ('Again / Once More')",
    subtitle: 'Scheduling follow-ups and constructing strict negative prohibitions',
    formula: "Positive: SC + -phinde + Subjunctive (-e) | Negative: a- + SC + -sa- + -phinda + Subjunctive ('Never again')",
    explanation:
      "Used in positive clauses to mean 'repeat / do again' and in negative clauses with -sa- to mean 'never again / do not repeat': Ngizophinde ngikuhlole ngenyanga ezayo ('I will examine you again next month'); Ungabe usaphinda uphuze lamaphilisi ungadlile ('Do not ever drink these pills on an empty stomach again').",
    commonPitfall:
      'Using -phinde without putting the subsequent verb into the subjunctive -e (...usaphinda uphuze, not *...uphuza).',
    rules: [
      '-phinde functions as an auxiliary governing the following verb in the subjunctive mood ending in -e.',
      "In future follow-up scheduling: SC + -zo- + -phinde + SC + Verb-e (ngizophinde ngikubone = 'I will see you again').",
      "In negative prohibitions, pairing with negative concord and progressive -sa- forms 'never again': ungaphinde uqede imithi / ungabe usaphinda.",
      'Never omit the subject concord on the governed verb: ngizophinde NGIkuhlole (both verbs take subject concords).'
    ],
    examples: [
      {
        id: 'def-phinde-ex-1',
        type: 'clinical',
        isizulu: 'Ungaphinde uqede imithi ye-antibiotic ngaphambi kwesikhathi esimisiwe.',
        english: 'Do not prematurely stop antibiotic medication before the prescribed time again.',
        breakdown: [
          { chunk: 'U-nga-phind-e', gloss: 'u- (2nd person SC) + -nga- (negative) + -phinda (repeat) + -e (subjunctive)' },
          { chunk: 'u-qed-e imithi', gloss: 'u- (SC) + -qeda (finish) + -e (subjunctive: "finish the medicine")' },
          { chunk: 'ye-antibiotic', gloss: 'of antibiotics' },
          { chunk: 'ngaphambi kwesikhathi esimisiwe', gloss: 'before the prescribed time' }
        ]
      },
      {
        id: 'def-phinde-ex-2',
        type: 'discharge',
        isizulu: 'Sizophinde sibonane emtholampilo ngoLwesibili oluzayo ukuze sihlolisise umfutho wegazi.',
        english: 'We will see each other again at the clinic next Tuesday to recheck the blood pressure.',
        breakdown: [
          { chunk: 'Si-zo-phind-e', gloss: 'si- (1st person plural SC) + -zo- (future) + -phinda (repeat) + -e ("we will again")' },
          { chunk: 'si-bonan-e', gloss: 'si- (SC) + -bonana (see each other reciprocal) + -e (subjunctive: "see each other")' },
          { chunk: 'emtholampilo ngoLwesibili oluzayo', gloss: 'at the clinic next Tuesday' },
          { chunk: 'ukuze sihlolisise umfutho wegazi', gloss: 'so that we examine thoroughly the blood pressure' }
        ]
      }
    ]
  },
  {
    id: 'def-sale-might-as-well',
    category: 'deficient-verbs',
    title: "The Auxiliary -sale ('Might as Well / Just')",
    subtitle: 'Advising admission or choosing the safest course of action',
    formula: 'Subject Concord + -sale + Participial or Subjunctive (frequently paired with se-)',
    explanation:
      "Signifies that doing something is the only sensible remaining option, inevitability, or wise resignation: Ake sisale sesihamba ('We might as well leave now'); Kungcono asale elala esibhedlela namhlanje ('It is better that he just stay/sleep at the hospital today'); Kusale sekwenziwa lokhu ('This might as well be done now').",
    commonPitfall:
      "Confusing -sale (auxiliary 'might as well') with the lexical verb -sala ('remain / stay behind'), though they share etymological roots.",
    rules: [
      '-sale expresses resignation, inevitable choice, or opting for the safest clinical recommendation.',
      "Frequently paired with exclusive se- on the following verb: asisale sesithatha igazi ('we might as well take blood now').",
      "Used in advisory admissions: kungcono usale ungeniswa esibhedlela ('it is better that you just be admitted').",
      'Can be preceded by hortative Ake or conditional kungcono (\'it is preferable/better\').'
    ],
    examples: [
      {
        id: 'def-sale-ex-1',
        type: 'admission',
        isizulu: 'Kungcono usale ungeniswa esibhedlela ukuze uqaphelwe ubusuku bonke ngabahlengikazi.',
        english: 'It is better that you just be admitted to the hospital so you can be monitored overnight by nurses.',
        breakdown: [
          { chunk: 'Kungcono', gloss: 'it is better / advisable' },
          { chunk: 'u-sal-e', gloss: 'u- (2nd person SC) + -sale (auxiliary: "just / might as well") + -e' },
          { chunk: 'u-ngenis-w-e', gloss: 'u- (SC) + -ngeniswa (passive causative: "be admitted") + -e (subjunctive)' },
          { chunk: 'esibhedlela', gloss: 'locative ("at the hospital")' },
          { chunk: 'ukuze uqaphelwe ubusuku bonke', gloss: 'so that you are monitored all night' }
        ]
      },
      {
        id: 'def-sale-ex-2',
        type: 'bedside',
        isizulu: 'Asisale sesithatha igazi manje ngenkathi sisalinde udokotela oyingcweti.',
        english: 'We might as well take blood now while we are still waiting for the specialist doctor.',
        breakdown: [
          { chunk: 'A-si-sal-e', gloss: 'a- (hortative) + si- (1st plur SC) + -sale + -e ("let us might as well")' },
          { chunk: 'se-si-thath-a igazi', gloss: 'se- (now/already) + si- (SC) + -thatha (take) + igazi (blood: "take blood now")' },
          { chunk: 'manje', gloss: 'adverb of time ("now")' },
          { chunk: 'ngenkathi sisalinde udokotela oyingcweti', gloss: 'while we are still waiting for the specialist doctor' }
        ]
      }
    ]
  },
  {
    id: 'def-kade-duration',
    category: 'deficient-verbs',
    title: "The Auxiliary -kade ('Have Long Been / Already')",
    subtitle: 'Establishing symptom chronicity and elapsed time before presentation',
    formula: 'Subject Concord + -kade + Participial Concord + Verb Stem',
    explanation:
      "Used to emphasize that an action, habit, or symptom has been going on for a significant duration or happened a long time ago: Kade ngilindile ('I have been waiting for a long time'); Kade wagula? ('Have you been sick for a long time?'); Ubekade ekhononda ngesifuba ('He had long been complaining about his chest').",
    commonPitfall:
      "Confusing -kade (elapsed time / duration) with the frequentative infix -ke- (occasional 'ever / sometimes').",
    rules: [
      "-kade indicates that a state or activity has continued for a substantial period ('long since / have long been').",
      "When asking duration of symptoms: Kade waqala ukuzwa lobu buhlungu? ('Has it been long since you began feeling this pain?').",
      "Governs following verbs in the participial mood with prefix e- / be-: ubekade ekhononda ('he was long complaining').",
      "Fuses with statives to denote longstanding chronic conditions: kade ngilambile ('I have long been hungry'), kade egula ('he has long been ill')."
    ],
    examples: [
      {
        id: 'def-kade-ex-1',
        type: 'clinical',
        isizulu: 'Kade waqala ukuzwa lobu buhlungu obuhlabayo esiswini, noma buqale namhlanje?',
        english: 'Has it been long since you started feeling this sharp stomach pain, or did it start today?',
        breakdown: [
          { chunk: 'Kade', gloss: 'auxiliary expressing elapsed time ("has it been long")' },
          { chunk: 'wa-qal-a', gloss: 'wa- (2nd person past concord) + -qala (start: "you started")' },
          { chunk: 'ukuzwa lobu buhlungu obuhlabayo', gloss: 'to feel this sharp piercing pain' },
          { chunk: 'esiswini', gloss: 'in the stomach' },
          { chunk: 'noma buqale namhlanje', gloss: 'or did it start today' }
        ]
      },
      {
        id: 'def-kade-ex-2',
        type: 'followup',
        isizulu: 'Kade ngiwaphuzile la maphilisi kodwa ubuhlungu abudambanga nhlobo.',
        english: 'I took these pills a long while ago, but the pain has not subsided at all.',
        breakdown: [
          { chunk: 'Kade', gloss: 'temporal auxiliary ("long ago / a long while back")' },
          { chunk: 'ngi-wa-phuz-ile', gloss: 'ngi- (1st person SC) + -wa- (Class 6 object concord) + -phuza (drink) + -ile (completed past: "I took them")' },
          { chunk: 'la maphilisi', gloss: 'these pills' },
          { chunk: 'kodwa ubuhlungu abudambanga nhlobo', gloss: 'but the pain has not subsided at all' }
        ]
      }
    ]
  }
];
