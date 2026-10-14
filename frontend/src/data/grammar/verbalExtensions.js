/**
 * Kuzwakele Grammar Reference - verbalExtensions.js
 */

export const VERBAL_EXTENSIONS_SECTION = {
  id: 'verbal-extensions',
  title: 'Verbal Extensions & Mutations',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Derivational verbal suffixes modifying direction, causation, reciprocity, and passive labial palatalization.',
  previewHook: '-ela, -isa, -wa (palatalization), -eka',
  description: 'Master the 5 core verbal extensions: applicative (-ela), causative (-isa), passive labial palatalization (-wa), neuter feasibility (-eka/-akala), and reciprocal interaction (-ana).'
};

export const VERBAL_EXTENSIONS_TABLE = [
  {
    extension: 'Applicative',
    morpheme: '-ela',
    meaning: 'For / On behalf of / Towards',
    soundShift: 'Regular suffixation (-a -> -ela)',
    clinicalUtility: 'Preparing therapy for patient, asking reason/purpose (-elani)',
    example: 'ungilungiselela imithi / uhlalelani phansi?'
  },
  {
    extension: 'Causative',
    morpheme: '-isa',
    meaning: 'Cause to / Help to / Intensify',
    soundShift: 'Final -ka -> -sa, -la -> -za (e.g. sula -> suza)',
    clinicalUtility: 'Medication side effects (ukuhambisa isisu), assisted ambulation',
    example: 'lamaphilisi ayahambisa isisu'
  },
  {
    extension: 'Passive & Palatalization',
    morpheme: '-wa',
    meaning: 'Be acted upon (Patient focus)',
    soundShift: 'b->tsh, p->tsh, ph->sh, m->ny, mb->nj',
    clinicalUtility: 'Describing treatment received (welashwa), symptoms experienced (ulunywa)',
    example: 'isiguli selashwa ngemithi emisha'
  },
  {
    extension: 'Neuter-Stative',
    morpheme: '-eka / -akala',
    meaning: 'Feasible / Observable state',
    soundShift: 'Regular suffixation (-eka / -akala)',
    clinicalUtility: 'Consultation comprehension (kuzwakele), clinical needs (kuyadingeka)',
    example: 'kuzwakele gogo, imithi iyadingeka'
  },
  {
    extension: 'Reciprocal',
    morpheme: '-ana',
    meaning: 'Mutual interaction (Each other)',
    soundShift: 'Requires plural subject concord (si-, ni-, ba-)',
    clinicalUtility: 'Family caregiver mutual support (sisizane), review follow-ups (sizobonana)',
    example: 'kumele sisizane emndenini'
  }
];


export const VERBAL_EXTENSIONS_CHECKPOINTS = [
  {
    id: 'ext-check-1',
    challengeNumber: 1,
    prompt: 'The patient is being treated with new medication.',
    targetConcept: 'Passive Palatalization (ph -> sh: -elapha -> -elashwa)',
    primaryAnswer: 'Isiguli selashwa ngemithi emisha.',
    breakdown: [
      { chunk: 'Isiguli', gloss: 'Class 7 noun ("the patient")' },
      { chunk: 's-elashw-a', gloss: 'si- (Class 7 SC) + elashwa (-elapha with ph -> sh palatalization before -wa: "is being treated")' },
      { chunk: 'ngemithi', gloss: 'nga- (instrumental: by means of / with) + imithi (Class 4: "medication")' },
      { chunk: 'emisha', gloss: 'Class 4 adjective concord + -sha ("new")' }
    ],
    ruleTip: "When -elapha takes the passive suffix -wa, the labial consonant 'ph' cannot stand directly before 'w'. It obligatorily palatalizes to prepalatal 'sh': selashwa, NEVER *selaphwa."
  },
  {
    id: 'ext-check-2',
    challengeNumber: 2,
    prompt: 'This medicine causes diarrhea if taken on an empty stomach.',
    targetConcept: 'Causative Extension (-isa: ukuhambisa isisu)',
    primaryAnswer: 'Lo muthi uyahambisa isisu uma uphuzwa ngaphandle kokudla.',
    breakdown: [
      { chunk: 'Lo muthi', gloss: 'demonstrative lo ("this") + Class 3 umuthi ("medicine")' },
      { chunk: 'u-ya-hamb-is-a isisu', gloss: 'u- (Class 3 SC) + -ya- (continuous) + -hamba (run) + -isa (causative) + isisu (stomach: "causes the stomach to run -> diarrhea")' },
      { chunk: 'uma', gloss: 'conditional conjunction ("if / when")' },
      { chunk: 'u-phuz-w-a', gloss: 'u- (Class 3 participial SC) + -phuza (drink) + -wa (passive: "if it is taken/drunk")' },
      { chunk: 'ngaphandle kokudla', gloss: 'compound preposition ("without food / on an empty stomach")' }
    ],
    ruleTip: "In clinical isiZulu, 'ukuhambisa isisu' is the standard causative formulation for diarrhea (literally: 'causing the stomach to run'). Notice that uphuzwa also demonstrates the passive -wa."
  },
  {
    id: 'ext-check-3',
    challengeNumber: 3,
    prompt: 'The nurse is preparing the injection for the grandmother.',
    targetConcept: 'Applicative Suffix (-ela: acting for / on behalf of)',
    primaryAnswer: 'Umhlengikazi ulungiselela ugogo umjovo.',
    breakdown: [
      { chunk: 'Umhlengikazi', gloss: 'Class 1 noun ("the nurse")' },
      { chunk: 'u-lungis-el-el-a', gloss: 'u- (Class 1 SC) + -lungisa (prepare) + -ela (applicative suffix: "prepares for / on behalf of")' },
      { chunk: 'ugogo', gloss: 'Class 1a indirect object ("for grandmother")' },
      { chunk: 'umjovo', gloss: 'Class 3 direct object ("the injection")' }
    ],
    ruleTip: "The applicative extension -ela directs the action towards a beneficiary: -lungiselela means 'to prepare for someone'. In word order, the human beneficiary (ugogo) immediately follows the verb."
  }
];

export const VERBAL_EXTENSIONS_RULES = [
// ==========================================
  // CATEGORY 5: VERBAL EXTENSIONS & SOUND MUTATIONS
  // ==========================================
  {
    id: 'ext-applicative-ela',
    category: 'verbal-extensions',
    title: 'Applicative Extension -ela ("For / On behalf of / Towards")',
    subtitle: 'Directing actions toward beneficiaries, locations, and inquiring reasons (-elani)',
    formula: 'Verb Root + -ela + Final Vowel',
    explanation:
      'Indicates that an action is performed for, on behalf of, or toward someone or a specific location (-sebenzela = work for, -lindela = wait for, -lungiselela = prepare for). In interrogative history-taking, affixing -elani to a verb asks "why / for what reason" an action or symptom occurs.',
    commonPitfall:
      'Forgetting that question words like "ngani" (why) grammatically require the applicative suffix on the verb: say "Uhlalelani phansi?" ("Why are you sitting down?"), not *"Uhlelani phansi ngani?".',
    rules: [
      'Beneficiary Suffixation: -lungisa (prepare) -> -lungiselela (prepare for someone)',
      'Direction / Destination: -baleka (flee) -> -balekela esibhedlela (run to the hospital)',
      'Interrogative Reason: Root + -elani asks "why/what for" (Ukhwehlelelani? = Why are you coughing?)',
      'Negative Beneficiary: a- + SC + Root + -eli (angimsebenzeli = I am not working for him)'
    ],
    examples: [
      {
        id: 'ext-app-ex-1',
        type: 'clinical',
        isizulu: 'Udokotela ungilungiselela imithi emtholampilo manje.',
        english: 'The doctor is preparing medication for me at the clinic right now.',
        breakdown: [
          { chunk: 'Udokotela', gloss: 'Class 1a noun ("the doctor")' },
          { chunk: 'u-ngi-lungis-el-el-a', gloss: 'u- (SC 1) + -ngi- (1st person object: "me") + -lungisa + -ela (applicative: "prepares for me")' },
          { chunk: 'imithi', gloss: 'Class 4 noun ("medication")' },
          { chunk: 'emtholampilo manje', gloss: 'locative clinic + now' }
        ]
      },
      {
        id: 'ext-app-ex-2',
        type: 'clinical',
        isizulu: 'Ngilindele imiphumela yegazi egumbini lokuhlola.',
        english: 'I am waiting for the blood results in the consultation room.',
        breakdown: [
          { chunk: 'Ngi-lind-el-e', gloss: 'ngi- (SC 1st) + -linda (wait) + -ela (applicative) + -e (contracted/stative: "I am waiting for")' },
          { chunk: 'imiphumela yegazi', gloss: 'imiphumela (Class 4 results) + yegazi (of blood)' },
          { chunk: 'egumbini lokuhlola', gloss: 'in the examination room' }
        ]
      }
    ]
  },
  {
    id: 'ext-causative-isa',
    category: 'verbal-extensions',
    title: 'Causative Extension -isa ("Cause to / Help to / Intensify")',
    subtitle: 'Eliciting drug side effects, assisted ambulation, and symptom intensification',
    formula: 'Verb Root + -isa + Final Vowel',
    explanation:
      'Signifies causing an action to happen, assisting someone to perform an action, or intensifying effort (-hambisa = cause to walk &rarr; diarrhea; -sebenzisa = cause to work &rarr; use; -khulumisa = engage someone in conversation; -phuzisa = help/cause to drink). In pharmacology, causative formulations explain medication mechanisms and adverse effects.',
    commonPitfall:
      'In clinical isiZulu, "ukuhambisa isisu" is the indispensable medical idiom for diarrhea (literally: "to cause the stomach to run"). Saying *isisu siyagijima is not idiomatic medical Zulu.',
    rules: [
      'Causation: -hamba (walk/run) -> -hambisa isisu (cause diarrhea)',
      'Assistance: -phuza (drink) -> -phuzisa umntwana amanzi (assist the baby to drink water)',
      'Intensification: -bheka (look) -> -bhekisisa (examine very carefully)',
      'Irregular mutations: Verbs ending in -ka often mutate to -sa (-suka -> -susa: remove); -la mutates to -za (-khumbula -> -khumbuza: remind)'
    ],
    examples: [
      {
        id: 'ext-caus-ex-1',
        type: 'clinical',
        isizulu: 'Lamaphilisi ayahambisa isisu uma ungadlile kahle ngaphambi kokuwaphuza.',
        english: 'These pills cause diarrhea if you have not eaten well before taking them.',
        breakdown: [
          { chunk: 'Lamaphilisi', gloss: 'these pills (Class 6)' },
          { chunk: 'a-ya-hamb-is-a isisu', gloss: 'a- (SC 6) + -ya- + -hamba + -isa (causative) + isisu (stomach: "causes diarrhea")' },
          { chunk: 'uma ungadlile kahle', gloss: 'if you haven\'t eaten well (participial negative)' },
          { chunk: 'ngaphambi kokuwaphuza', gloss: 'before drinking/taking them' }
        ]
      },
      {
        id: 'ext-caus-ex-2',
        type: 'clinical',
        isizulu: 'Ake ungisize ungisebenzise lo mshini wokuphefumula.',
        english: 'Please help me use this breathing machine.',
        breakdown: [
          { chunk: 'Ake ungisize', gloss: 'please help me (subjunctive)' },
          { chunk: 'u-ngi-sebenz-is-e', gloss: 'u- (SC 2nd) + -ngi- (object "me") + -sebenza (work) + -isa (causative: "help me use") + -e (subjunctive)' },
          { chunk: 'lo mshini wokuphefumula', gloss: 'this breathing machine (nebulizer / CPAP)' }
        ]
      }
    ]
  },
  {
    id: 'ext-passive-palatalization',
    category: 'verbal-extensions',
    title: 'Passive Extension -wa & Labial Palatalization',
    subtitle: 'Shifting focus to the patient and mandatory prepalatal consonant sound shifts',
    formula: 'Labial Consonant (b, p, ph, m, mb) + -wa -> Prepalatal Shift (tsh, sh, ny, nj)',
    explanation:
      'When verbs form the passive with -wa ("to be acted upon"), any bilabial consonant in the verb stem undergoes mandatory palatalization to avoid acoustic clash with the bilabial glide -w-. The shifts are universal: b -> tsh, p -> tsh, ph -> sh, m -> ny, mb -> nj. Clinically, passive verbs focus squarely on what is being done to the patient or experienced by a bodily organ.',
    commonPitfall:
      'Trying to avoid palatalization by saying *"uyelaphwa"* instead of the strictly required prepalatal shift *"uyelashwa"*, or *"ulunywa"* for *"ulumwa"*.',
    rules: [
      'b -> tsh: -bopha (bind/arrest) -> -boshwa (be bound/plastered)',
      'ph -> sh: -elapha (treat/cure) -> -elashwa (be treated/medicated)',
      'm -> ny: -luma (bite/sting) -> -lunywa (be bitten / experience itching)',
      'mb -> nj: -bamba (hold/catch) -> -banjwa (be held/caught)',
      'Monosyllabic & vowel verbs insert -iw-: -dla -> -dliwa (be eaten), -zwa -> -zwiwa (be felt)'
    ],
    examples: [
      {
        id: 'ext-pass-ex-1',
        type: 'clinical',
        isizulu: 'Isiguli selashwa ngemithi enamandla egumbini labagula kakhulu.',
        english: 'The patient is being treated with strong medication in the intensive care unit.',
        breakdown: [
          { chunk: 'Isiguli', gloss: 'Class 7 noun ("the patient")' },
          { chunk: 's-elashw-a', gloss: 'si- (SC 7) + -elashwa (passive of -elapha with ph -> sh palatalization: "is treated")' },
          { chunk: 'ngemithi enamandla', gloss: 'with strong medication' },
          { chunk: 'egumbini labagula kakhulu', gloss: 'in the ICU / room of those very sick' }
        ]
      },
      {
        id: 'ext-pass-ex-2',
        type: 'clinical',
        isizulu: 'Umlenze wesokudla ulunywa kakhulu yilezi zilonda.',
        english: 'The right leg is itching severely from these sores.',
        breakdown: [
          { chunk: 'Umlenze wesokudla', gloss: 'the right leg' },
          { chunk: 'u-luny-w-a', gloss: 'u- (Class 3 SC) + -luma (bite/itch) + m -> ny palatalization + -wa (passive: "is being bitten/itching")' },
          { chunk: 'kakhulu', gloss: 'severely / very much' },
          { chunk: 'yilezi zilonda', gloss: 'by these sores' }
        ]
      }
    ]
  },
  {
    id: 'ext-neuter-stative',
    category: 'verbal-extensions',
    title: 'Neuter-Stative Extension -eka / -akala ("Feasibility & Potentiality")',
    subtitle: 'Communicating clinical comprehensibility, feasibility, and observable reality',
    formula: 'Verb Root + -eka / -akala + Final Vowel',
    explanation:
      'The neuter extension indicates that an action is doable, feasible, comprehensible, or has entered an observable state without reference to an active human agent. In clinical communication, it underpins the core concept of mutual understanding (kuzwakele = it is clearly heard and understood), requirement (kuyadingeka = it is needed), and visibility (kuyabonakala = it is apparent/visible).',
    commonPitfall:
      'Confusing the passive with the neuter: kuzwiwa ngudokotela ("it is heard by the doctor" - passive with agent) versus kuzwakele ("it makes sense / it is clearly understood" - neuter state).',
    rules: [
      '-zwa (hear/feel) -> -zwakala (be audible / make sense / be understood)',
      '-bona (see) -> -bonakala (be visible / noticeable / evident)',
      '-dinga (need) -> -dingeka (be necessary / required)',
      '-thola (find) -> -tholakala (be available / obtainable)',
      '-qonda (understand) -> -qondeka (be straightforward / comprehensible)'
    ],
    examples: [
      {
        id: 'ext-neut-ex-1',
        type: 'clinical',
        isizulu: 'Imithi eyengeziwe iyadingeka kulesi simo ukuvikela ukutheleleka.',
        english: 'Additional medication is required in this condition to prevent infection.',
        breakdown: [
          { chunk: 'Imithi eyengeziwe', gloss: 'additional medication' },
          { chunk: 'i-ya-ding-ek-a', gloss: 'i- (SC 4) + -ya- + -dinga (need) + -eka (neuter: "is needed / required")' },
          { chunk: 'kulesi simo', gloss: 'in this condition' },
          { chunk: 'ukuvikela ukutheleleka', gloss: 'to prevent infection' }
        ]
      },
      {
        id: 'ext-neut-ex-2',
        type: 'clinical',
        isizulu: 'Kuzwakele gogo, ungakhathazeki ngizokunikeza usizo olufanele.',
        english: 'It is clearly understood grandmother, do not worry I will give you appropriate care.',
        breakdown: [
          { chunk: 'Ku-zwak-el-e', gloss: 'ku- (impersonal SC) + -zwa (hear) + -akala (neuter) + -e (stative perfect: "it is clearly understood")' },
          { chunk: 'gogo', gloss: 'grandmother' },
          { chunk: 'ungakhathazeki', gloss: 'do not worry' },
          { chunk: 'ngizokunikeza usizo olufanele', gloss: 'I will give you appropriate help' }
        ]
      }
    ]
  },
  {
    id: 'ext-reciprocal-ana',
    category: 'verbal-extensions',
    title: 'Reciprocal Extension -ana ("Mutual Interaction & Support")',
    subtitle: 'Caregiver collaboration, family adherence support, and follow-up consultation',
    formula: 'Verb Root + -ana + Final Vowel',
    explanation:
      'Expresses reciprocal, mutual action between plural entities ("each other / one another"). In clinical care, it is central to counseling family members on collaborative home nursing (-sizana = help each other, -nakekelana = care for one another) and establishing follow-up agreements (-bonana = see each other again).',
    commonPitfall:
      'Trying to use -ana with a singular subject without the associative particle "na-". Say "Siyabonana" (plural: "We see each other") or "Ngibonana nomndeni" (singular + na-: "I meet with the family").',
    rules: [
      '-siza (help) -> -sizana (help one another)',
      '-bona (see) -> -bonana (see each other / meet)',
      '-nakekela (care) -> -nakekelana (care for one another)',
      '-thinta (contact) -> -thintana (keep in touch / follow up)',
      'With associative na-: SC + Root + -ana + na- + Noun (Udokotela ubambisana nomndeni = The doctor collaborates with the family)'
    ],
    examples: [
      {
        id: 'ext-recip-ex-1',
        type: 'clinical',
        isizulu: 'Kumele nibambisane ekhaya ukuze anakekelwe kahle umntwana.',
        english: 'You must collaborate together at home so that the child is well cared for.',
        breakdown: [
          { chunk: 'Kumele ni-bamb-is-an-e', gloss: 'kumele + ni- (2nd plur SC) + -bamba (hold) + -isa (causative) + -ana (reciprocal) + -e (subjunctive: "you all collaborate / work together")' },
          { chunk: 'ekhaya', gloss: 'at home' },
          { chunk: 'ukuze anakekelwe kahle', gloss: 'so that he is well cared for (passive)' },
          { chunk: 'umntwana', gloss: 'the child' }
        ]
      },
      {
        id: 'ext-recip-ex-2',
        type: 'clinical',
        isizulu: 'Sizobonana futhi emtholampilo ngenyanga ezayo ukuhlola umfutho.',
        english: 'We will see each other again at the clinic next month to check the blood pressure.',
        breakdown: [
          { chunk: 'Si-zo-bon-an-a', gloss: 'si- (1st plur SC) + -zo- (future) + -bona (see) + -ana (reciprocal: "we will see each other")' },
          { chunk: 'futhi emtholampilo', gloss: 'again at the clinic' },
          { chunk: 'ngenyanga ezayo', gloss: 'next month' },
          { chunk: 'ukuhlola umfutho', gloss: 'to check blood pressure' }
        ]
      }
    ]
  }
];
