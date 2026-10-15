/**
 * Kuzwakele Grammar Reference - futureTenses.js
 * Comprehensive guide to the Primary Future Tenses (Inkathi Ezayo) in clinical isiZulu,
 * covering near future -zo- / -zoku- for immediate/tomorrow actions, remote future -yo- / -yoku-
 * for long-term prognosis and annual review, monosyllabic verb retention, and object concord placement.
 */

export const FUTURE_TENSES_SECTION = {
  id: 'future-tenses',
  title: 'The Primary Future Tenses (Near -zo- & Remote -yo-)',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Near future -zo- / -zoku- for immediate/tomorrow actions, remote future -yo- / -yoku- for long-term prognosis and annual review, monosyllabic verb retention, and object concord placement.',
  previewHook: 'ngizokunika (near with OC), uzokudla (monosyllabic), uyohlolwa ngonyaka ozayo (remote)',
  description: 'Master the 5 core future tense rules: near future -zo- for imminent clinical interventions, retention of -zoku- with monosyllabic and vowel verbs, remote future -yo- for long-term prognosis, object concord slot insertion, and clinical prognostic counseling formulations.'
};

export const FUTURE_TENSES_MATRIX = [
  {
    nounClass: 'Mina [1st Sing]',
    nearFutureContracted: 'ngizolulama',
    nearFutureMonosyllabic: 'ngizokudla',
    remoteFuture: 'ngiyophila',
    withObjectConcord: 'ngizokunika',
    clinicalPrognosticUtility: 'Reassurance & direct therapeutic promises'
  },
  {
    nounClass: 'Wena [2nd Sing]',
    nearFutureContracted: 'uzophuza',
    nearFutureMonosyllabic: 'uzokuza',
    remoteFuture: 'uyobuyela',
    withObjectConcord: 'uzowaphuza',
    clinicalPrognosticUtility: 'Medication instructions & follow-up bookings'
  },
  {
    nounClass: 'Umntwana [Class 1]',
    nearFutureContracted: 'uzovuka',
    nearFutureMonosyllabic: 'uzokuzwa',
    remoteFuture: 'uyokhula',
    withObjectConcord: 'uzomusiza',
    clinicalPrognosticUtility: 'Pediatric recovery forecast & parent counseling'
  },
  {
    nounClass: 'Abantu [Class 2]',
    nearFutureContracted: 'bazofika',
    nearFutureMonosyllabic: 'bazokudla',
    remoteFuture: 'bayosizakala',
    withObjectConcord: 'bazowathatha',
    clinicalPrognosticUtility: 'Caregiver arrival & family support coordination'
  },
  {
    nounClass: 'Iphilisi [Class 5]',
    nearFutureContracted: 'lizosiza',
    nearFutureMonosyllabic: 'lizokuba',
    remoteFuture: 'liyophela',
    withObjectConcord: 'ngizolihlola',
    clinicalPrognosticUtility: 'Drug efficacy explanation & onset of relief'
  },
  {
    nounClass: 'Isilonda [Class 7]',
    nearFutureContracted: 'sizophola',
    nearFutureMonosyllabic: 'sizokudla',
    remoteFuture: 'siyolulama',
    withObjectConcord: 'sizosihlanza',
    clinicalPrognosticUtility: 'Wound healing trajectory & infection control'
  },
  {
    nounClass: 'Inhliziyo [Class 9]',
    nearFutureContracted: 'izoshaya',
    nearFutureMonosyllabic: 'izokuma',
    remoteFuture: 'iyozinza',
    withObjectConcord: 'sizoyihlola',
    clinicalPrognosticUtility: 'Cardiac rhythm stabilization & chronic care'
  },
  {
    nounClass: 'Imiphumela [Class 4/6]',
    nearFutureContracted: 'izobuya / azobuya',
    nearFutureMonosyllabic: 'azokuza',
    remoteFuture: 'ayobonakala',
    withObjectConcord: 'ngizowacaza',
    clinicalPrognosticUtility: 'Laboratory turnaround times & diagnostic review'
  }
];

export const FUTURE_TENSES_CHECKPOINTS = [
  {
    id: 'chk-fut-1',
    challengeNumber: 1,
    category: 'future-tenses',
    targetConcept: 'Near Future with Object Concord Insertion',
    prompt: 'I will give you strong pain tablets to drink at home.',
    primaryAnswer: 'Ngizokunika amaphilisi aqinile obuhlungu ozowaphuza ekhaya.',
    ruleTip: 'The object concord (-ku- for "you") slots directly between future marker -zo- and verb root -nika (ngizokunika). Notice that the monosyllabic stem drops infinitive ku- when an OC is present.',
    breakdown: [
      { chunk: 'Ngi-zo-ku-nik-a', gloss: 'ngi- (1st pers SC) + -zo- (near future) + -ku- (2nd pers Object Concord) + -nika (give)' },
      { chunk: 'amaphilisi aqinile', gloss: 'amaphilisi (pills) + aqinile (relative: strong/potent)' },
      { chunk: 'obuhlungu', gloss: 'possessive noun ("of pain")' },
      { chunk: 'ozo-wa-phuz-a', gloss: 'Class 6 relative future concord ozo- + -wa- (OC for pills) + -phuza (drink)' },
      { chunk: 'ekhaya', gloss: 'locative ("at home")' }
    ]
  },
  {
    id: 'chk-fut-2',
    challengeNumber: 2,
    category: 'future-tenses',
    targetConcept: 'Monosyllabic Stem Retention of -zoku-',
    prompt: 'You will eat a soft meal before you take this medicine tomorrow.',
    primaryAnswer: 'Uzokudla ukudla okuthambile ngaphambi kokuba uphuze lo muthi kusasa.',
    ruleTip: 'Monosyllabic verbs like -dla (eat), -za (come), and -zwa (feel) obligatorily retain the infinitive ku- in near future tenses: uzokudla, never *uzodla.',
    breakdown: [
      { chunk: 'U-zoku-dl-a', gloss: 'u- (2nd pers SC) + -zoku- (near future retaining ku- before monosyllabic root) + -dla (eat)' },
      { chunk: 'ukudla okuthambile', gloss: 'food + okuthambile (relative: soft)' },
      { chunk: 'ngaphambi kokuba', gloss: 'conjunction ("before that")' },
      { chunk: 'u-phuz-e lo muthi', gloss: 'u- + -phuze (subjunctive) + this medicine' },
      { chunk: 'kusasa', gloss: 'adverb of future time ("tomorrow")' }
    ]
  },
  {
    id: 'chk-fut-3',
    challengeNumber: 3,
    category: 'future-tenses',
    targetConcept: 'Remote Future Prognosis & Annual Follow-up with -yo-',
    prompt: 'You will be re-examined at the main hospital next year for your heart.',
    primaryAnswer: 'Uyohlolwa futhi esibhedlela esikhulu ngonyaka ozayo mayelana nenhliziyo yakho.',
    ruleTip: 'Remote future marker -yo- (from ukuyokwenza) designates clinical events and reviews situated in distant calendar timeframes (next year = ngonyaka ozayo).',
    breakdown: [
      { chunk: 'U-yo-hlolw-a', gloss: 'u- (2nd pers SC) + -yo- (remote future infix) + -hlolwa (passive: be examined)' },
      { chunk: 'futhi', gloss: 'adverb ("again / furthermore")' },
      { chunk: 'esibhedlela esikhulu', gloss: 'at the large / tertiary hospital' },
      { chunk: 'ngonyaka ozayo', gloss: 'instrumental temporal phrase ("in the year coming / next year")' },
      { chunk: 'mayelana nenhliziyo yakho', gloss: 'regarding your heart' }
    ]
  }
];

export const FUTURE_TENSES_RULES = [
  {
    id: 'fut-near-zo',
    category: 'future-tenses',
    title: 'Near Future Tense with -zo- (Imminent Action & Clinical Plans)',
    badge: 'Near Future Horizon',
    subtitle: 'Expressing actions today, tonight, tomorrow, or in the near horizon',
    formula: 'Subject Concord + -zo- + Verb Root + -a',
    explanation:
      'The Near Future tense indicates actions scheduled to occur today, tonight, tomorrow, or in the near upcoming days. Derived historically from the motion verb ukuza ("to come") + infinitive (ngiza ukuhamba -> ngizohamba). In clinical Zulu, this is the primary workhorse tense for reassuring patients, outlining diagnostic investigations, explaining upcoming procedures, and scheduling immediate discharge medication regimens.',
    commonPitfall:
      'Using the remote future -yo- for tomorrow morning. Saying *ngiyokubona kusasa is awkward; imminent actions strictly take -zo- (ngizokubona kusasa).',
    rules: [
      'Horizon: Today, tonight, tomorrow, or within the current clinical admission',
      'Formula: SC + -zo- + Root + -a (Ngi-zo-bona udokotela)',
      'Clinical context: Blood draws, radiology scheduling, medication changes, discharge timing',
      'Negative form: Takes future negative -zu- / -zuku- (angizukuphuza)'
    ],
    examples: [
      {
        id: 'fut-near-ex-1',
        type: 'clinical',
        isizulu: 'Udokotela uzofika lapha ewadini ntambama ukuzokuhlola.',
        english: 'The doctor will come here to the ward this afternoon to examine you.',
        breakdown: [
          { chunk: 'u-zo-fik-a', gloss: 'u- (Class 1 SC) + -zo- (near future) + -fika (arrive)' },
          { chunk: 'ewadini ntambama', gloss: 'in the ward this afternoon' }
        ]
      },
      {
        id: 'fut-near-ex-2',
        type: 'clinical',
        isizulu: 'Imiphumela yegazi izophuma ngaphambi kokuba uhambe ekhaya.',
        english: 'The blood results will come out before you go home.',
        breakdown: [
          { chunk: 'i-zo-phum-a', gloss: 'i- (Class 4/9 SC) + -zo- (near future) + -phuma (come out)' }
        ]
      }
    ]
  },
  {
    id: 'fut-monosyllabic-retention',
    category: 'future-tenses',
    title: 'Obligatory Retention of -zoku- / -yoku- with Monosyllabic & Vowel Verbs',
    badge: 'Stem Phonological Rule',
    subtitle: 'Preserving the infinitive prefix ku- before single-syllable roots and vowel stems',
    formula: 'SC + -zoku- / -yoku- + Monosyllabic Root (-dla, -za, -zwa) / Vowel Stem (-enza, -oma)',
    explanation:
      'Regular polysyllabic verb roots drop the infinitive ku- (ngizo-hamba, uzo-phuza). However, monosyllabic stems (-dla "eat", -za "come", -zwa "feel/hear", -ba "become") and vowel verbs (-enza "do", -oma "thirst", -ala "refuse") obligatorily retain the -ku- syllable: ngizokudla ("I will eat"), uzokuza ("you will come"), sizokwenza ("we will do", with vowel coalescence ku- + -enza -> kwenza).',
    commonPitfall:
      'Dropping -ku- with monosyllabic stems (*ngizodla is incorrect; must be ngizokudla). Likewise saying *ngizoza instead of ngizokuza.',
    rules: [
      'Monosyllabic stems (-dla, -za, -zwa, -ba, -pha): Must retain -ku- (ngizokudla, uzokuzwa)',
      'Vowel verbs (-enza, -oma, -ona): Coalesce ku- to kw- (ngizokwenza, uzokwoma)',
      'Polysyllabic verbs: Drop -ku- completely (ngizohamba, ngizophuza)',
      'Object Concord Exception: If an Object Concord is inserted, -ku- drops (ngizowadla amaphilisi)'
    ],
    examples: [
      {
        id: 'fut-mono-ex-1',
        type: 'clinical',
        isizulu: 'Kuzomele uzokudla ukudla okuthambile ngaphambi kokugwinya amaphilisi.',
        english: 'It will be necessary that you eat soft food before swallowing the pills.',
        breakdown: [
          { chunk: 'u-zoku-dl-a', gloss: 'u- (SC) + -zoku- (near future with retained ku-) + -dla (eat)' }
        ]
      },
      {
        id: 'fut-mono-ex-2',
        type: 'clinical',
        isizulu: 'Uhlengikazi uzokwenza umjovo engalweni yakho ngokushesha.',
        english: 'The nurse will administer an injection into your arm promptly.',
        breakdown: [
          { chunk: 'u-zokw-enz-a', gloss: 'u- (Class 1 SC) + -zoku- + -enza (coalesced to -zokwenza) + umjovo (injection)' }
        ]
      }
    ]
  },
  {
    id: 'fut-remote-yo',
    category: 'future-tenses',
    title: 'Remote Future Tense with -yo- / -yoku- (Long-Term Prognosis)',
    badge: 'Remote Prognostic Horizon',
    subtitle: 'Events taking place months or years ahead, chronic disease progression, or annual reviews',
    formula: 'Subject Concord + -yo- + Verb Root + -a',
    explanation:
      'The Remote Future tense (contracted from ukuya "to go" + infinitive) is used when the action will unfold in a distant timeframe: next month, next year, or indefinitely in the future. In clinical communication, this tense is indispensable when providing long-term prognostic counseling, discussing chronic viral suppression, outlining annual cardiac or oncological reviews, or forecasting developmental milestones in pediatric neurology.',
    commonPitfall:
      'Confusing remote future -yo- with present relative suffix -yo (omthandayo). In remote future, -yo- is a pre-radical tense infix following the subject concord: ngi- + -yo- + phila -> ngiyophila ("I will live long into the future").',
    rules: [
      'Horizon: Distant future, indefinite horizons, annual reviews, chronic prognosis',
      'Formula: SC + -yo- + Root + -a (U-yo-buyela ngonyaka ozayo)',
      'Monosyllabic retention: SC + -yoku- + Root (Bayo-kudla)',
      'Clinical context: Prognostic counseling, lifestyle change expectations, annual follow-ups'
    ],
    examples: [
      {
        id: 'fut-rem-ex-1',
        type: 'clinical',
        isizulu: 'Uma uphuza le mithi ngokwethembeka, uyophila impilo ende nephilile.',
        english: 'If you take these medicines faithfully, you will live a long and healthy life.',
        breakdown: [
          { chunk: 'u-yo-phil-a', gloss: 'u- (2nd pers SC) + -yo- (remote future) + -phila (live/be well)' },
          { chunk: 'impilo ende', gloss: 'a long life' }
        ]
      },
      {
        id: 'fut-rem-ex-2',
        type: 'clinical',
        isizulu: 'Umntwana uyokhula kahle ngaphandle kwezinkinga zengqondo uma simelapha manje.',
        english: 'The child will grow well without neurological complications if we treat him now.',
        breakdown: [
          { chunk: 'u-yo-khul-a', gloss: 'u- (Class 1 SC) + -yo- (remote future) + -khula (grow)' },
          { chunk: 'ngaphandle kwezinkinga', gloss: 'without complications' }
        ]
      }
    ]
  },
  {
    id: 'fut-object-concord-slot',
    category: 'future-tenses',
    title: 'Object Concord Slot Insertion in Future Tenses',
    badge: 'OC Slot Ordering',
    subtitle: 'Positioning object infixes directly between the future marker and the verb stem',
    formula: 'Subject Concord + -zo- / -yo- + Object Concord + Verb Root + -a',
    explanation:
      'When an object concord is combined with future tenses, it always slots between the future tense infix (-zo- or -yo-) and the verb stem. A critical phonological consequence is that monosyllabic stems drop the infinitive -ku- because the object concord provides the necessary phonological weight: ngizowadla amaphilisi (NOT *ngizokuwadla); ngizokunika umuthi ("I will give you medicine").',
    commonPitfall:
      'Retaining -ku- when an object concord is already present (*ngizokuwanika is incorrect; must be ngizowanika or ngizokunika). The object concord completely displaces the dummy syllable -ku-.',
    rules: [
      'Slot order: SC + -zo- / -yo- + OC + Root + -a',
      'Displacement rule: Object concord replaces the monosyllabic dummy syllable -ku-',
      'Example with Class 6 pills: ngizowaphuza (I will take them)',
      'Example with Class 7 wound: sizosihlanza (we will clean it)'
    ],
    examples: [
      {
        id: 'fut-oc-ex-1',
        type: 'clinical',
        isizulu: 'Ungakhathazeki, ngizokunika umjovo ozodambisa ubuhlungu khona manje.',
        english: 'Do not worry, I will give you an injection that will ease the pain right now.',
        breakdown: [
          { chunk: 'ngi-zo-ku-nik-a', gloss: 'ngi- (SC) + -zo- (near future) + -ku- (2nd pers OC) + -nika (give)' }
        ]
      },
      {
        id: 'fut-oc-ex-2',
        type: 'clinical',
        isizulu: 'Lawa maphilisi uzowagwinya wonke ngesikhathi esisodwa kusihlwa.',
        english: 'These pills, you will swallow them all at once in the evening.',
        breakdown: [
          { chunk: 'u-zo-wa-gwiny-a', gloss: 'u- (2nd pers SC) + -zo- + -wa- (Class 6 OC for pills) + -gwinya (swallow)' }
        ]
      }
    ]
  },
  {
    id: 'fut-clinical-prognosis',
    category: 'future-tenses',
    title: 'Clinical Prognosis & Therapeutic Expectation Setting',
    badge: 'Prognostic Reassurance',
    subtitle: 'High-yield bedside reassurance formulas and therapeutic horizon communication',
    formula: 'Uzophola / Lizoma inxeba / Kuzolunga / Imithi izokusiza',
    explanation:
      'In clinical consultations, conveying prognosis requires balancing realistic clinical outcomes with comforting bedside empathy. KwaZulu-Natal patients listen attentively to future tense framing. Key communicative anchors include: Uzophola ("You will recover/heal"); Inxeba lizoma ("The wound will dry up"); Ubuhlungu buzodamba ("The pain will subside"); Kuzolunga ("Everything will be all right").',
    commonPitfall:
      'Overpromising or using ambiguous tenses. Clinicians should use -zo- for acute reversible symptom relief and -yo- for long-term chronic management expectations.',
    rules: [
      'Acute symptom relief: Ubuhlungu buzodamba maduze ("Pain will ease soon")',
      'Wound healing: Inxeba lizophola kahle ("The wound will heal well")',
      'General reassurance: Kuzolunga ("It will be okay / well")',
      'Therapeutic efficacy: Lo muthi uzokusiza kakhulu ("This medicine will help you greatly")'
    ],
    examples: [
      {
        id: 'fut-prog-ex-1',
        type: 'clinical',
        isizulu: 'Uma uhlala embhedeni uphumule, umzimba uzothola amandla okuzilwela.',
        english: 'If you stay in bed and rest, the body will regain strength to fight for itself.',
        breakdown: [
          { chunk: 'u-zo-thol-a amandla', gloss: 'u- (Class 3 SC umzimba) + -zo- (near future) + -thola (gain) + amandla (strength)' }
        ]
      },
      {
        id: 'fut-prog-ex-2',
        type: 'clinical',
        isizulu: 'Inxeba lizoma lingabe lisopha uma uligcina lihlanzekile njalo.',
        english: 'The wound will dry and no longer bleed if you keep it clean regularly.',
        breakdown: [
          { chunk: 'li-zo-m-a', gloss: 'li- (Class 5 SC inxeba) + -zo- (near future) + -ma (dry/stop)' }
        ]
      }
    ]
  }
];
