/**
 * Kuzwakele Grammar Reference - pronouns.js
 * Comprehensive guide to isiZulu Absolute & Quantitative Pronouns (Izabizwana Zoqobo Nezenani),
 * covering independent pronoun stems (mina, yena, sona), prepositional binding and contractions
 * (nami, ngaye, kuso), quantitative quantifiers (-onke "all/whole", -edwa/-odwa "alone/only"),
 * and clinical independence and adherence assessments.
 */

export const PRONOUNS_SECTION = {
  id: 'pronouns',
  title: 'Absolute & Quantitative Pronouns',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Independent pronoun roots (mina, yena, sona), prepositional binding and contractions (nami, ngaye, kuso), and quantifiers (-onke "all/whole", -edwa/-odwa "alone/only").',
  previewHook: 'sona -> kuso (akuso sinzima), wonke umzimba, uhlala yedwa',
  description: 'Master the 5 core pronoun rules: absolute pronoun stems and contrastive emphasis, prepositional contraction with na-/nga-/ku- (kuso, ngaye), quantitative -onke ("all/whole"), exclusive -edwa/-odwa ("alone/only"), and clinical independence and adherence assessments.'
};

export const PRONOUNS_MATRIX = [
  {
    nounClass: '1st Person Sing [Mina]',
    absolutePronoun: 'mina (me / myself)',
    associativeNa: 'nami (with me)',
    instrumentalNga: 'ngami (about me / through me)',
    locativeKu: 'kimi (to me / on me)',
    quantitativeAll: 'mina wonke (all of me / whole self)',
    quantitativeAlone: 'ngedwa (by myself / alone)',
    clinicalApplication: 'Patient subjective report, self-care ability, isolation'
  },
  {
    nounClass: '2nd Person Sing [Wena]',
    absolutePronoun: 'wena (you / patient)',
    associativeNa: 'nawe (with you)',
    instrumentalNga: 'ngawe (about you)',
    locativeKu: 'kuwe (to you / on your body)',
    quantitativeAll: 'wena wonke (your whole body)',
    quantitativeAlone: 'wedwa (by yourself / alone)',
    clinicalApplication: 'Direct clinical instruction, independent mobility, consent'
  },
  {
    nounClass: 'Class 1/1a [umu- / u-]',
    absolutePronoun: 'yena (he / she / patient)',
    associativeNa: 'naye (with him/her)',
    instrumentalNga: 'ngaye (about him/her)',
    locativeKu: 'kuye (to him/her / on him/her)',
    quantitativeAll: 'wonke (whole person)',
    quantitativeAlone: 'yedwa (alone / unattended)',
    clinicalApplication: 'Collateral history, caregiver presence, geriatric solitary living'
  },
  {
    nounClass: 'Class 2 [aba- / o-]',
    absolutePronoun: 'bona (they / patients / family)',
    associativeNa: 'nabo (with them)',
    instrumentalNga: 'ngabo (about them)',
    locativeKu: 'kubo (to them / at their home)',
    quantitativeAll: 'bonke (all people / all patients)',
    quantitativeAlone: 'bodwa (they alone / unaccompanied)',
    clinicalApplication: 'Family counseling, ward cohorting, community contacts'
  },
  {
    nounClass: 'Class 6 [ama-]',
    absolutePronoun: 'wona (they / pills / results)',
    associativeNa: 'nawo (with them / pills)',
    instrumentalNga: 'ngawo (by means of them)',
    locativeKu: 'kuwo (in them / to them)',
    quantitativeAll: 'wonke (all pills / whole course)',
    quantitativeAlone: 'odwa (pills only / monotherapy)',
    clinicalApplication: 'Complete antibiotic course, medication adherence, diet vs pills'
  },
  {
    nounClass: 'Class 7 [isi-]',
    absolutePronoun: 'sona (it / chest / condition)',
    associativeNa: 'naso (with it)',
    instrumentalNga: 'ngaso (concerning it)',
    locativeKu: 'kuso (in it / to it)',
    quantitativeAll: 'sonke (the whole chest / all condition)',
    quantitativeAlone: 'sodwa (it alone / localized)',
    clinicalApplication: 'Indirect relative (isimo akuso), localized vs radiating pain'
  },
  {
    nounClass: 'Class 9 [in- / im-]',
    absolutePronoun: 'yona (it / heart / trauma / wound)',
    associativeNa: 'nayo (with it)',
    instrumentalNga: 'ngayo (regarding it)',
    locativeKu: 'kuyo (in it / to it)',
    quantitativeAll: 'yonke (the whole heart / entire wound)',
    quantitativeAlone: 'yodwa (it alone / solitary lesion)',
    clinicalApplication: 'Organ-specific pathology, cardiac failure, isolated trauma'
  },
  {
    nounClass: 'Class 10 [izin- / izi-]',
    absolutePronoun: 'zona (they / feet / ulcers / limbs)',
    associativeNa: 'nazo (with them)',
    instrumentalNga: 'ngazo (about them)',
    locativeKu: 'kuzo (in them / on them)',
    quantitativeAll: 'zonke (all feet / all ulcers)',
    quantitativeAlone: 'zodwa (only sores / sores alone)',
    clinicalApplication: 'Bilateral peripheral neuropathy, diabetic foot, full skin survey'
  }
];

export const PRONOUNS_CHECKPOINTS = [
  {
    id: 'pron-check-1',
    challengeNumber: 1,
    prompt: 'The situation he is currently in is very difficult.',
    targetConcept: 'Indirect Relative with Locative Contraction (kuso from sona)',
    primaryAnswer: 'Isimo akuso sinzima kakhulu.',
    breakdown: [
      { chunk: 'Isimo', gloss: 'Class 7 noun ("the situation / medical condition")' },
      { chunk: 'a-k-u-so', gloss: 'a- (relative concord) + ku- (locative prefix) + -so (contracted absolute pronoun of Class 7 sona) -> akuso ("which he is in")' },
      { chunk: 'sinzima', gloss: 'si- (Class 7 Subject Concord) + -nzima (relative stem: "is difficult/grave")' },
      { chunk: 'kakhulu', gloss: 'intensifier adverb ("very / acutely")' }
    ],
    ruleTip: "When constructing indirect locative relatives ('the state in which he is'), prepositions bind to the contracted absolute pronoun (ku- + sona -> kuso). The relative clause becomes 'isimo akuso'."
  },
  {
    id: 'pron-check-2',
    challengeNumber: 2,
    prompt: 'Does the grandmother live alone at home, or does someone assist her?',
    targetConcept: 'Exclusive Quantitative Pronoun (-edwa / yedwa) for Geriatric Independence',
    primaryAnswer: 'Ugogo uhlala yedwa ekhaya, noma kukhona omusizayo?',
    breakdown: [
      { chunk: 'Ugogo', gloss: 'Class 1a noun ("grandmother / elderly patient")' },
      { chunk: 'u-hlal-a', gloss: 'u- (Class 1 SC) + -hlala (live/stay) + -a' },
      { chunk: 'yedwa', gloss: 'Class 1 exclusive quantitative pronoun: y- + -edwa ("alone / by herself")' },
      { chunk: 'ekhaya', gloss: 'locative ("at home")' },
      { chunk: 'noma kukhona', gloss: 'or is there someone present' },
      { chunk: 'omusizayo', gloss: 'o- (rel concord) + -m- (OC: her) + -siza (help) + -yo ("who helps her")' }
    ],
    ruleTip: "The exclusive stem -edwa/-odwa expresses 'alone' or 'only'. For Class 1 human singular, it takes the concord y- to become 'yedwa' (Class 2: bodwa, 1st person: ngedwa, 2nd person: wedwa)."
  },
  {
    id: 'pron-check-3',
    challengeNumber: 3,
    prompt: 'You must swallow all the pills with water throughout the whole week.',
    targetConcept: 'Quantitative Pronoun (-onke) for Complete Medication Dosing',
    primaryAnswer: 'Kumele uwagwinye wonke amaphilisi ngamanzi kulo lonke isonto.',
    breakdown: [
      { chunk: 'Kumele', gloss: 'obligation trigger ("you must / it is necessary")' },
      { chunk: 'u-wa-gwiny-e', gloss: 'u- (SC) + -wa- (Class 6 OC: "them/pills") + -gwinya (swallow) + -e (subjunctive ending)' },
      { chunk: 'wonke amaphilisi', gloss: 'w- + -onke (Class 6 quantitative: "all") + amaphilisi ("all the pills")' },
      { chunk: 'ngamanzi', gloss: 'instrumental nga- + amanzi ("with water")' },
      { chunk: 'kulo lonke isonto', gloss: 'locative demonstrative kulo + l- + -onke (Class 5 quantitative: "the whole") + isonto ("throughout the whole week")' }
    ],
    ruleTip: "The quantitative root -onke agrees in noun class with the noun it quantifies: Class 6 amaphilisi -> wonke amaphilisi ('all the pills'); Class 5 isonto -> lonke isonto ('the whole week')."
  }
];

export const PRONOUNS_RULES = [
  // ==========================================
  // CATEGORY 10: ABSOLUTE & QUANTITATIVE PRONOUNS
  // ==========================================
  {
    id: 'pron-absolute-contrast',
    category: 'pronouns',
    title: 'Absolute Pronoun Stems & Contrastive Emphasis',
    subtitle: 'Using independent pronouns (mina, yena, sona) for emphasis, clarity, and topical contrast',
    formula: 'Pronoun Root + Formative Suffix -na (mina, wena, yena, thina, nina, bona, sona, wona, zona)',
    explanation:
      'Because isiZulu verbs already contain obligatory subject and object concords, absolute pronouns (mina, wena, yena, thina, nina, bona, sona, zona) are not required for basic syntax. Instead, they serve two primary clinical communicative functions: contrastive emphasis ("as for ME, I took it; HE did not") and standalone responses. When placed before or after the verb, the absolute pronoun highlights patient agency or distinguishes between multiple individuals in family history.',
    commonPitfall:
      'Using absolute pronouns as routine subject markers like English "I" or "he" (e.g. saying *"Mina ngiyagula"* in every sentence). This sounds overly emphatic or defensive; use the absolute pronoun only when establishing a contrast or topical shift.',
    rules: [
      'Absolute pronouns are independent lexical words ending in the suffix -na (except 1st/2nd plural: thina, nina).',
      'They agree with the noun class of the referent (Class 1 yena, Class 2 bona, Class 6 wona, Class 7 sona, Class 10 zona).',
      'Used clinically to emphasize contrast: Mina ngiphuza amaphilisi, kodwa yena akawaphuzi (I take pills, but as for him, he does not).',
      'They can stand alone as single-word answers to clinical questions (Ubani ozwayo? Mina = Who feels it? Me).'
    ],
    examples: [
      {
        id: 'pron-abs-ex-1',
        type: 'clinical',
        isizulu: 'Mina ngizolihlola iphaphu lakho, bese yena umhlengikazi ekuthatha igazi.',
        english: 'As for me, I will examine your lung, and then the nurse herself will draw your blood.',
        breakdown: [
          { chunk: 'Mina', gloss: 'absolute pronoun 1st sing ("as for me")' },
          { chunk: 'ngizo-li-hlol-a iphaphu', gloss: 'I will examine the lung (Class 5)' },
          { chunk: 'bese yena umhlengikazi', gloss: 'and then she, the nurse (contrastive)' },
          { chunk: 'ekuthatha igazi', gloss: 'drawing blood from you' }
        ]
      },
      {
        id: 'pron-abs-ex-2',
        type: 'history',
        isizulu: 'Yena umguli akakhulumi kahle namuhla ngenxa yesifo sohlangothi.',
        english: 'The patient himself is not speaking well today due to the stroke.',
        breakdown: [
          { chunk: 'Yena umguli', gloss: 'he, the patient himself (topical focus)' },
          { chunk: 'akakhulumi kahle', gloss: 'he does not speak well' },
          { chunk: 'namuhla', gloss: 'today' },
          { chunk: 'ngenxa yesifo sohlangothi', gloss: 'because of stroke / hemiplegia' }
        ]
      }
    ]
  },
  {
    id: 'pron-preposition-contractions',
    category: 'pronouns',
    title: 'Prepositional Contractions (na-, nga-, ku-)',
    subtitle: 'Dropping final -na to bind associative, instrumental, and locative prefixes',
    formula: 'Preposition (na- / nga- / ku-) + Contracted Pronoun (mi, we, ye, so, wo, zo) -> nami, ngaye, kuso',
    explanation:
      'When prepositions attach to absolute pronouns, the final syllable -na is obligatorily truncated: na- + mina -> nami (with me); na- + yena -> naye (with him/her); nga- + bona -> ngabo (about them); ku- + sona -> kuso (in it / to it). This contractive morphology is foundational in clinical communication for taking social support history (Uhlala nobani? Ngihlala naye = Who do you live with? I live with him/her) and constructing indirect relative clauses describing symptom environments (isimo akuso = the condition he is in).',
    commonPitfall:
      'Failing to drop -na when prefixing prepositions (e.g. saying *"nami-na"* or *"ku-yena"* instead of the proper contractions *nami* and *kuye*).',
    rules: [
      'Associative na- ("with / and"): nami (with me), nawe (with you), naye (with him/her), nabo (with them), naso (with it).',
      'Instrumental nga- ("about / by means of"): ngami (about me), ngaye (about him/her), ngaso (by means of it).',
      'Locative ku- ("to / from / in"): kimi (to me [irregular]), kuwe (to you), kuye (to him/her), kuso (in/to it).',
      'Indirect relative clauses combine the relative concord with prepositional pronouns: isikhathi akuso (the time in which he is).'
    ],
    examples: [
      {
        id: 'pron-prep-ex-1',
        type: 'social',
        isizulu: 'Ubani ohlala naye ekhaya ongakusiza lapho uphuza imithi?',
        english: 'Who lives with you at home that can assist you when taking medications?',
        breakdown: [
          { chunk: 'Ubani', gloss: 'who (interrogative)' },
          { chunk: 'o-hlala na-ye', gloss: 'who lives with him/her (na- + yena -> naye)' },
          { chunk: 'ekhaya', gloss: 'at home' },
          { chunk: 'ongakusiza', gloss: 'who can help you (potential relative)' },
          { chunk: 'lapho uphuza imithi', gloss: 'when you take medications' }
        ]
      },
      {
        id: 'pron-prep-ex-2',
        type: 'clinical',
        isizulu: 'Isimo sempilo akuso lesi siguli sidinga ukwelashwa esibhedlela.',
        english: 'The health state in which this patient is requires hospital admission.',
        breakdown: [
          { chunk: 'Isimo sempilo', gloss: 'condition of health (Class 7)' },
          { chunk: 'a-k-u-so', gloss: 'which he is in (ku- + sona -> kuso)' },
          { chunk: 'lesi siguli', gloss: 'this patient' },
          { chunk: 'sidinga ukwelashwa', gloss: 'requires treatment' },
          { chunk: 'esibhedlela', gloss: 'at the hospital' }
        ]
      }
    ]
  },
  {
    id: 'pron-quantitative-onke',
    category: 'pronouns',
    title: 'The Quantitative Stem -onke ("All / Whole / Entire")',
    subtitle: 'Quantifying complete anatomical zones, medication courses, and temporal durations',
    formula: 'Quantitative Concord + -onke -> wonke (Class 1/3/6), bonke (Class 2), lonke (Class 5), sonke (Class 7), zonke (Class 10)',
    explanation:
      'The quantitative root -onke translates to "all" (with plural nouns) or "the whole / entire" (with singular nouns). It takes a distinct set of quantitative concords that coalesce with initial -o-: Class 1 umuntu wonke ("the whole person"), Class 2 bonke abantu ("all people"), Class 5 lonke isonto ("the whole week"), Class 6 wonke amaphilisi ("all the pills"), Class 7 sonke isifuba ("the whole chest"), Class 9 yonke inhliziyo ("the entire heart"), Class 10 zonke izinyawo ("all feet"). In pharmacotherapy, it is the primary keyword for ensuring complete antibiotic or antiretroviral compliance.',
    commonPitfall:
      'Confusing the singular meaning ("whole") with the plural meaning ("all"). Umzimba wonke means "the whole body", whereas amaphilisi wonke means "all the pills".',
    rules: [
      'Singular nouns + -onke denote totality of an organ or duration: umzimba wonke (whole body), usuku lonke (all day).',
      'Plural nouns + -onke denote the entirety of items: wonke amaphilisi (all pills), zonke izilonda (all ulcers).',
      'Quantitative pronouns can precede or follow the qualified noun: wonke amaphilisi or amaphilisi wonke.',
      '1st and 2nd person plural forms express inclusive cohorts: thina sonke (all of us), nina nonke (all of you).'
    ],
    examples: [
      {
        id: 'pron-onke-ex-1',
        type: 'pharmacology',
        isizulu: 'Kumele uwaphuze wonke amaphilisi e-antibiotic ngisho noma uzizwa ungcono.',
        english: 'You must take all the antibiotic pills even if you feel better.',
        breakdown: [
          { chunk: 'Kumele uwaphuze', gloss: 'you must drink/take them' },
          { chunk: 'wonke amaphilisi', gloss: 'all the pills (Class 6: w- + -onke)' },
          { chunk: 'e-antibiotic', gloss: 'of antibiotic' },
          { chunk: 'ngisho noma uzizwa ungcono', gloss: 'even if you feel better' }
        ]
      },
      {
        id: 'pron-onke-ex-2',
        type: 'symptoms',
        isizulu: 'Ubuhlungu busakazeke kuwo wonke umzimba kusukela izolo.',
        english: 'The pain has spread across the entire body since yesterday.',
        breakdown: [
          { chunk: 'Ubuhlungu', gloss: 'the pain (Class 14)' },
          { chunk: 'busakazeke', gloss: 'has spread / disseminated' },
          { chunk: 'kuwo wonke umzimba', gloss: 'throughout the whole body (Class 3: w- + -onke)' },
          { chunk: 'kusukela izolo', gloss: 'starting yesterday' }
        ]
      }
    ]
  },
  {
    id: 'pron-quantitative-edwa',
    category: 'pronouns',
    title: 'The Exclusive Stem -edwa / -odwa ("Alone / Only")',
    subtitle: 'Assessing social isolation, unaccompanied mobility, and monotherapy regimens',
    formula: 'Subject Concord Variant + -edwa (1st/2nd/Class 1) or -odwa (all other classes) -> ngedwa, wedwa, yedwa, sodwa, bodwa, zodwa',
    explanation:
      'The exclusive quantitative root expresses "alone", "by oneself", or "only / exclusively". It exhibits a vowel alternation: 1st person (ngedwa = I alone), 2nd person (wedwa = you alone), and Class 1 human (yedwa = he/she alone) take the vowel -e-. All other persons and noun classes take the vowel -o-: Class 2 bodwa ("they alone"), Class 6 odwa ("pills only"), Class 7 sodwa ("chest only"), Class 10 zodwa ("sores only"). In clinical practice, -edwa/-odwa is crucial for evaluating whether a patient has support at home or can mobilize safely without falling.',
    commonPitfall:
      'Applying the -edwa form to non-human or plural classes (e.g. saying *"amaphilisi edwa"* instead of the correct form *amaphilisi odwa* = pills only).',
    rules: [
      '1st person (ngedwa), 2nd person (wedwa), and Class 1 singular human (yedwa) exclusively take the -e- vowel variant.',
      'All plural classes and non-human noun classes exclusively take the -o- vowel variant: bodwa, lodwa, odwa, sodwa, zodwa.',
      'Clinical independence: Ukwazi ukuhamba yedwa? (Can he walk by himself / unassisted?).',
      'Clinical exclusivity: Kufanele uphuze amaphilisi odwa ungathathi omunye umuthi (Take pills only, no traditional remedies).'
    ],
    examples: [
      {
        id: 'pron-edwa-ex-1',
        type: 'geriatrics',
        isizulu: 'Ugogo akakwazi ukuhlala yedwa ekhaya ngoba uvame ukucishe awe.',
        english: 'Grandmother cannot stay alone at home because she tends to almost fall.',
        breakdown: [
          { chunk: 'Ugogo akakwazi', gloss: 'grandmother is unable to' },
          { chunk: 'ukuhlala yedwa', gloss: 'to stay alone (Class 1: y- + -edwa)' },
          { chunk: 'ekhaya', gloss: 'at home' },
          { chunk: 'ngoba uvame', gloss: 'because she tends to' },
          { chunk: 'ukucishe awe', gloss: 'to almost fall (near-fall auxiliary)' }
        ]
      },
      {
        id: 'pron-edwa-ex-2',
        type: 'adherence',
        isizulu: 'Uphuza la maphilisi odwa, noma kukhona izimbiza oziphuzayo?',
        english: 'Do you take these pills alone, or are there traditional herbal mixtures you drink?',
        breakdown: [
          { chunk: 'Uphuza la maphilisi odwa', gloss: 'do you take these pills only (Class 6: -odwa)' },
          { chunk: 'noma kukhona izimbiza', gloss: 'or are there herbal mixtures' },
          { chunk: 'oziphuzayo', gloss: 'which you drink (verbal relative with -yo)' }
        ]
      }
    ]
  },
  {
    id: 'pron-clinical-adherence',
    category: 'pronouns',
    title: 'Essential Clinical Social & Adherence Formulations',
    subtitle: 'Interviewing for social determinants of health, home safety, and full prescription completion',
    formula: 'Pronoun Pattern + Social / Pharmacological Inquiry',
    explanation:
      'A patient recovery hinges upon their social determinants: who prepares meals, who supervises medications, and whether they have assistance if symptoms worsen. Formulating queries with prepositional and quantitative pronouns allows the clinician to sensitively unpack the domestic ecosystem: Uhlala nobani? (Who do you live with?), Kukhona ongakusiza? (Is there someone who can help you?), Uphuze wonke amaphilisi? (Did you finish all the pills?), and Ingabe unamandla okuzisiza eyedwa? (Does he have the strength to manage by himself?).',
    commonPitfall:
      'Overlooking living arrangements during discharge planning. Asking if a frail patient lives "yedwa" (alone) prevents dangerous discharges without home-based care support.',
    rules: [
      'Living arrangements: Uhlala naye (lives with him/her) vs uhlala yedwa (lives solitary).',
      'Caregiver delegation: Nika yena umama la maphilisi (Hand these pills to the mother herself).',
      'Regimen completion: Qeda wonke amaphilisi ezinsukwini eziyisikhombisa (Finish all pills in 7 days).',
      'Dietary separation: Ungaphuzi umuthi wodwa ungadlanga (Do not take medicine alone without having eaten).'
    ],
    examples: [
      {
        id: 'pron-clin-ex-1',
        type: 'discharge',
        isizulu: 'Ngaphambi kokuba ugogo agoduke, kumele sazi ukuthi ubani ozoba naye ekhaya.',
        english: 'Before grandmother goes home, we must know who will be with her at home.',
        breakdown: [
          { chunk: 'Ngaphambi kokuba ugogo agoduke', gloss: 'before grandmother discharges home' },
          { chunk: 'kumele sazi', gloss: 'we must know' },
          { chunk: 'ukuthi ubani ozoba naye', gloss: 'who will be with her (na- + yena -> naye)' },
          { chunk: 'ekhaya', gloss: 'at home' }
        ]
      },
      {
        id: 'pron-clin-ex-2',
        type: 'counseling',
        isizulu: 'Ungawashiyi amaphilisi phansi lapho uzizwa ungcono; kumele uwaqede wonke.',
        english: 'Do not discontinue the pills when you feel better; you must finish all of them.',
        breakdown: [
          { chunk: 'Ungawashiyi amaphilisi phansi', gloss: 'do not drop/abandon the pills' },
          { chunk: 'lapho uzizwa ungcono', gloss: 'when you feel yourself better' },
          { chunk: 'kumele uwaqede wonke', gloss: 'you must finish them all (Class 6: wonke)' }
        ]
      }
    ]
  }
];
