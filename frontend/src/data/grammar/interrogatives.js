/**
 * Kuzwakele Grammar Reference - interrogatives.js
 * Comprehensive guide to isiZulu Interrogatives & Question Enclitics (Izakhi Zokubuza),
 * covering verbal enclitics (-ni?, -phi?), interrogative stems (nini?, kanjani?, ubani?),
 * causal inquiry (kungani? vs applicative -elani?), and polite conversational openers (ingabe, ngabe, yini).
 */

export const INTERROGATIVES_SECTION = {
  id: 'interrogatives',
  title: 'Interrogatives & Question Enclitics',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Verbal enclitics (-ni? "what", -phi? "where"), interrogative stems (nini?, kanjani?, kungani?, ubani?), and polite question openers (ingabe, ngabe) for structured clinical history-taking.',
  previewHook: 'Uhlalaphi? (Where do you live?), Uzizwa kanjani?, Ufunani?, Kuqale nini?',
  description: 'Master the 5 core interrogative rules: the verbal enclitic -ni? ("what / why"), the locative enclitic -phi? ("where"), chronological stems (nini?, kanjani?, ubani?), causal inquiry (kungani? vs applicative -elani?), and polite conversational openers (ingabe, ngabe) for respectful history-taking.'
};

export const INTERROGATIVES_MATRIX = [
  {
    questionType: 'Enclitic What [-ni?]',
    morpheme: '-ni?',
    clinicalFormula: 'Verb Root + -ni?',
    clinicalExample: 'Uzwani? (What do you feel?) / Ufunani?',
    diagnosticUtility: 'Chief complaint elicitation, symptom identification, current medications'
  },
  {
    questionType: 'Enclitic Where [-phi? / kuphi?]',
    morpheme: '-phi? / kuphi?',
    clinicalFormula: 'Verb + -phi? / Verb + kuphi?',
    clinicalExample: 'Uhlalaphi? (Where do you live?) / Kuhlaba kuphi?',
    diagnosticUtility: 'Anatomical pain localization, radiation vector, address / catchment zone'
  },
  {
    questionType: 'Chronological When [nini?]',
    morpheme: 'nini?',
    clinicalFormula: 'SC + Verb + nini? / Kuqale nini?',
    clinicalExample: 'Kuqale nini lokhu? (When did this start?)',
    diagnosticUtility: 'Symptom onset timeline, duration, acute vs chronic differentiation'
  },
  {
    questionType: 'Manner & Quality [kanjani?]',
    morpheme: 'kanjani?',
    clinicalFormula: 'SC + -zizwa + kanjani? / Kwenzeke kanjani?',
    clinicalExample: 'Uzizwa kanjani namuhla? (How do you feel today?)',
    diagnosticUtility: 'Subjective wellness assessment, review of systems, trauma mechanism inquiry'
  },
  {
    questionType: 'Identity & Caregiver [ubani?]',
    morpheme: 'ubani?',
    clinicalFormula: 'Ubani + Relative Verb? / nobani?',
    clinicalExample: 'Ubani ophethe imithi yakho? (Who manages your meds?)',
    diagnosticUtility: 'Caregiver identification, proxy historian, domestic support screening'
  },
  {
    questionType: 'Frequency & Quantity [kangaki? / -ngaki?]',
    morpheme: 'kangaki? / -ngaki?',
    clinicalFormula: 'Kukangaki + Participial? / amaphilisi amangaki?',
    clinicalExample: 'Kukangaki uphalaza ngosuku? (How many times do you vomit daily?)',
    diagnosticUtility: 'Episode quantification, pediatric dehydration grading, pill count'
  },
  {
    questionType: 'Causal Etiology [kungani? / -elani?]',
    morpheme: 'kungani? / -elani?',
    clinicalFormula: 'Kungani + Participial Negative? / Verb + -elani?',
    clinicalExample: 'Kungani ungowaphuzanga amaphilisi? (Why didn\'t you take pills?)',
    diagnosticUtility: 'Adherence barriers exploration, defaulted treatment inquiry, root cause analysis'
  },
  {
    questionType: 'Polite Conversational Tag [ingabe ... yini?]',
    morpheme: 'ingabe ... yini?',
    clinicalFormula: 'Ingabe + Statement + yini?',
    clinicalExample: 'Ingabe uke wahlinzwa ngaphambili yini? (Have you ever had surgery before?)',
    diagnosticUtility: 'Culturally respectful screening (inhlonipho), past surgical history, sensitive triage'
  }
];

export const INTERROGATIVES_CHECKPOINTS = [
  {
    id: 'int-check-1',
    challengeNumber: 1,
    prompt: 'Where does the sharp pain stab you the most?',
    targetConcept: 'Locative Interrogative kuphi? with Verbal Relative for Pain Radiation',
    primaryAnswer: 'Ubuhlungu obuhlabayo buhlaba kuphi kakhulu?',
    breakdown: [
      { chunk: 'Ubuhlungu', gloss: 'Class 14 noun ("pain")' },
      { chunk: 'obuhlabayo', gloss: 'obu- (Class 14 relative concord) + -hlaba (stab) + -yo (relative clause-final suffix: "which is stabbing/sharp")' },
      { chunk: 'buhlaba', gloss: 'bu- (Class 14 SC) + -hlaba ("it stabs")' },
      { chunk: 'kuphi', gloss: 'locative interrogative ("where?")' },
      { chunk: 'kakhulu', gloss: 'adverb ("most / intensely")' }
    ],
    ruleTip: 'To ask "where?" in relation to a symptom, clinicians either suffix -phi to the verb (Buhlabaphi?) or place independent kuphi? directly after the verb (Buhlaba kuphi?).'
  },
  {
    id: 'int-check-2',
    challengeNumber: 2,
    prompt: 'When did you start coughing up blood like this?',
    targetConcept: 'Temporal Interrogative nini? with Infinitive Complement & Demonstrative',
    primaryAnswer: 'Waqala nini ukukhwehlela igazi elinjengaleli?',
    breakdown: [
      { chunk: 'Waqala', gloss: 'wa- (2nd person singular remote past SC) + -qala ("you started")' },
      { chunk: 'nini', gloss: 'temporal interrogative ("when?")' },
      { chunk: 'ukukhwehlela', gloss: 'infinitive ("to cough")' },
      { chunk: 'igazi', gloss: 'Class 5 noun ("blood")' },
      { chunk: 'elinjengaleli', gloss: 'eli- (Class 5 relative) + njenga- + leli (demonstrative: "which is like this")' }
    ],
    ruleTip: 'Interrogative nini? ("when?") always follows the finite verb: Waqala nini? ("When did you start?"). It never precedes the verb.'
  },
  {
    id: 'int-check-3',
    challengeNumber: 3,
    prompt: "Why didn't you take your blood pressure medication yesterday?",
    targetConcept: 'Causal kungani? with Participial Negative and Object Concord',
    primaryAnswer: 'Kungani ungawaphuzanga amaphilisi akho omfutho wegazi izolo?',
    breakdown: [
      { chunk: 'Kungani', gloss: 'interrogative ("why?")' },
      { chunk: 'unga-wa-phuz-anga', gloss: 'u- (2nd sing SC) + -nga-...-anga (participial past negative) + -wa- (Class 6 OC for amaphilisi) + -phuza ("you did not take them")' },
      { chunk: 'amaphilisi akho', gloss: 'your pills (Class 6)' },
      { chunk: 'omfutho wegazi', gloss: 'of pressure of blood (hypertension)' },
      { chunk: 'izolo', gloss: 'adverb ("yesterday")' }
    ],
    ruleTip: 'Kungani ("why?") forces the subsequent verb into the participial mood. For negative past tense, this demands the participial negative marker -nga-...-anga: ungawaphuzanga (not the indicative *awuwaphuzanga*).'
  }
];

export const INTERROGATIVES_RULES = [
  // ==========================================
  // CATEGORY 15: INTERROGATIVES
  // ==========================================
  {
    id: 'int-enclitic-ni',
    category: 'interrogatives',
    title: 'The Verbal Enclitic -ni? ("What? / What For?")',
    subtitle: 'Chief complaint elicitation and rapid triage inquiry',
    formula: 'Verb Stem + -ni? (Uzwani? = What do you feel?; Ufunani? = What do you need?)',
    explanation:
      'In isiZulu, the interrogative pronoun for "what?" is the enclitic morpheme -ni?. It attaches directly to the terminal vowel of the verb, taking the primary stress of the word. Clinically, it is the primary engine of triage and chief complaint elicitation: Uzwani? ("What do you feel / What is bothering you?"); Ufunani? ("What do you seek?"); Kwenzekani? ("What is happening?"). When affixed to a verb ending in -a, the -a is retained: phuza + -ni = Uphuzani? ("What are you drinking / taking?").',
    commonPitfall:
      'Treating *-ni?* as a separate standalone word (saying *"Uzwani"* as *"Uzwa ni"* or *"Yini ozwayo"* in casual triage). Attaching *-ni* directly to the verb stem maintains natural conversational rhythm and proper penult stress shift.',
    rules: [
      'Enclitic slot: Verb Root + -a + -ni? (Udlani? = What are you eating?; Uvelaphi? = Where do you come from?).',
      'Chief complaint elicitation: Uzwani namuhla? (What are you feeling today?); Kukhathaza ntoni/ni? (What is troubling you?).',
      'Medication intake check: Uphuzani ekhaya? (What medicines do you take at home?).',
      'Standalone interrogative pronoun: Yini le? (What is this?).'
    ],
    examples: [
      {
        id: 'int-ni-ex-1',
        type: 'triage',
        isizulu: 'Uzwani emzimbeni okwenze weza lapha esibhedlela namuhla?',
        english: 'What do you feel in your body that caused you to come here to the hospital today?',
        breakdown: [
          { chunk: 'Uzwani', gloss: 'u- (2nd sing SC) + -zwa (feel) + -ni ("what do you feel?")' },
          { chunk: 'emzimbeni', gloss: 'in the body (locative)' },
          { chunk: 'okwenze weza lapha', gloss: 'which caused you to come here' },
          { chunk: 'esibhedlela namuhla', gloss: 'to the hospital today' }
        ]
      },
      {
        id: 'int-ni-ex-2',
        type: 'pharmacy',
        isizulu: 'Uphuzani okwamanje ukudambisa lobu buhlungu obungaka?',
        english: 'What are you currently taking to soothe this severe pain?',
        breakdown: [
          { chunk: 'Uphuzani', gloss: 'u- + -phuza + -ni ("what are you drinking/taking?")' },
          { chunk: 'okwamanje', gloss: 'at the moment / currently' },
          { chunk: 'ukudambisa', gloss: 'to soothe / relieve (infinitive)' },
          { chunk: 'lobu buhlungu obungaka', gloss: 'this great pain (Class 14 demonstrative)' }
        ]
      }
    ]
  },
  {
    id: 'int-enclitic-phi',
    category: 'interrogatives',
    title: 'The Locative Enclitic -phi? & kuphi? ("Where?")',
    subtitle: 'Anatomical pain localization and symptom radiation pathways',
    formula: 'Verb + -phi?  OR  Verb + kuphi? (Uhlalaphi? = Where do you live?; Kuhlaba kuphi? = Where does it stab?)',
    explanation:
      'Locative inquiries take two forms in isiZulu: (1) the enclitic morpheme -phi? suffixed directly to a verb (Uhlalaphi? = "Where do you live?"; Uvelaphi? = "Where are you coming from?"), and (2) the independent locative interrogative kuphi?, which stands alone after a verb (Kuhlaba kuphi? = "Where does it hurt/stab?"; Buhamba buye kuphi ubuhlungu? = "Where does the pain radiate to?"). In clinical practice, kuphi? is preferred when localizing internal organ pain, dermatological lesions, and radiation vectors.',
    commonPitfall:
      'Confusing the interrogative *-phi?* ("where?") with the enumerative stem *-phi?* ("which one?"). *Uhlalaphi?* means "Where do you live?"; *Ufuna liphi philisi?* means "Which pill do you want?". Context and position clarify the meaning.',
    rules: [
      'Verbal enclitic: Verb + -phi? (Uhlalaphi? = Where do you reside?).',
      'Independent locative: Verb + kuphi? (Kukhona kuphi? = Where is it located?).',
      'Pain radiation vector: Ubuhlungu buhamba buye kuphi? (Where does the pain travel to?).',
      'Primary lesion localization: Isilonda siphume kuphi? (Where did the sore break out?).'
    ],
    examples: [
      {
        id: 'int-phi-ex-1',
        type: 'cardiology',
        isizulu: 'Uma isifuba siqala ukusinda, ubuhlungu buhamba buye kuphi?',
        english: 'When your chest starts feeling heavy, where does the pain radiate to?',
        breakdown: [
          { chunk: 'Uma isifuba siqala', gloss: 'when the chest starts' },
          { chunk: 'ukusinda', gloss: 'to become heavy' },
          { chunk: 'ubuhlungu buhamba', gloss: 'does the pain travel' },
          { chunk: 'buye kuphi', gloss: 'and go where? (locative interrogative kuphi)' }
        ]
      },
      {
        id: 'int-phi-ex-2',
        type: 'intake',
        isizulu: 'Uhlalaphi mama ukuze sazi ukuthi uzokwazi yini ukubuya ngomuso?',
        english: 'Where do you live, mother, so that we know if you will be able to return tomorrow?',
        breakdown: [
          { chunk: 'Uhlalaphi mama', gloss: 'where do you reside mother? (hlala + -phi)' },
          { chunk: 'ukuze sazi', gloss: 'in order that we know (subjunctive)' },
          { chunk: 'ukuthi uzokwazi yini', gloss: 'whether you will be able' },
          { chunk: 'ukubuya ngomuso', gloss: 'to return tomorrow' }
        ]
      }
    ]
  },
  {
    id: 'int-stems-timeline-manner',
    category: 'interrogatives',
    title: 'Stems of Timeline, Manner & Caregiver Identity (nini, kanjani, ubani)',
    subtitle: 'Structuring chronological onset, quality assessment, and social support',
    formula: 'Verb + nini?  |  Verb + kanjani?  |  Ubani + Relative Verb?',
    explanation:
      'Three fundamental interrogative stems structure clinical history-taking: (1) nini? ("when?"), which establishes symptom onset and chronicity (Kuqale nini? = "When did it start?"); (2) kanjani? ("how? / in what manner?"), which explores symptom quality, sensation, and accident mechanics (Uzizwa kanjani? = "How do you feel?"; Kwenzeke kanjani lokhu? = "How did this happen?"); and (3) ubani? ("who?"), which screens for caregivers, treatment supervisors, and social support (Ubani ohlala naye? = "Who do you live with?"; Ubani ophethe amaphilisi? = "Who is in charge of the pills?").',
    commonPitfall:
      'Placing *nini?* at the beginning of the question (*"Nini kuqale?"*). In natural isiZulu syntax, *nini* almost always follows the finite verb: *Kuqale nini?*.',
    rules: [
      'Onset chronicity: Kuqale nini lokhu kugula? (When did this illness start?).',
      'Manner / ROS: Uzizwa kanjani lapho ngicindezela khona? (How do you feel when I press here?).',
      'Caregiver screening: Ubani okusizayo ekhaya ngokupheka nokugeza? (Who assists you at home with cooking and bathing?).',
      'Plural inquiry: Obani abanye abagulayo ekhaya? (Who else is ill at home?).'
    ],
    examples: [
      {
        id: 'int-tm-ex-1',
        type: 'chronology',
        isizulu: 'Kuqale nini ukushintsha kombala wesikhumba somntwana?',
        english: 'When did the change in the color of the child’s skin start?',
        breakdown: [
          { chunk: 'Kuqale nini', gloss: 'when did it start? (kuqale + nini)' },
          { chunk: 'ukushintsha', gloss: 'the changing / change (infinitive noun)' },
          { chunk: 'kombala wesikhumba', gloss: 'of the color of the skin' },
          { chunk: 'somntwana', gloss: 'of the child' }
        ]
      },
      {
        id: 'int-tm-ex-2',
        type: 'social',
        isizulu: 'Ubani oqinisekisa ukuthi umkhulu uwaphuza ngesikhathi amaphilisi akhe?',
        english: 'Who ensures that grandfather takes his pills on time?',
        breakdown: [
          { chunk: 'Ubani', gloss: 'who? (Class 1a interrogative)' },
          { chunk: 'oqinisekisa', gloss: 'who verifies / ensures (relative verb)' },
          { chunk: 'ukuthi umkhulu', gloss: 'that grandfather' },
          { chunk: 'uwaphuza ngesikhathi', gloss: 'drinks them on time' },
          { chunk: 'amaphilisi akhe', gloss: 'his pills' }
        ]
      }
    ]
  },
  {
    id: 'int-causal-etiology',
    category: 'interrogatives',
    title: 'Causal Inquiries: kungani? vs. The Applicative Root -elani?',
    subtitle: 'Exploring adherence obstacles, health-seeking delays, and underlying reasons',
    formula: 'Kungani + Participial Verb?  OR  Verb Stem + -elani? (Kungani ungaphuzi? vs. Uphuzelani?)',
    explanation:
      'Inquiring "why?" or exploring patient motivation can be executed in two ways: (1) using the independent causal interrogative Kungani...? ("why?"), which obligatorily triggers the participial mood (Kungani ungayanga emtholampilo? = "Why did you not go to the clinic?"), and (2) suffixing the interrogative applicative morpheme -elani? directly to the verb stem (Ubuyelani lapha? = "Why are you returning here?"; Uhlalelani phansi? = "Why are you sitting down?"). Clinically, Kungani is gentler and more suited for sensitive exploration of adherence barriers.',
    commonPitfall:
      'Using the indicative mood after *kungani* (*"Kungani awuphuzi amaphilisi?"*). *Kungani* demands the participial mood: *Kungani ungawaphuzi amaphilisi?*. Notice the negative prefix *a-* shifts to *-nga-*.',
    rules: [
      'Kungani mood trigger: Kungani + Participial Mood (Kungani ungezi? = Why aren\'t you coming?).',
      'Negative participial shift: indicative awuphuzi -> participial ungaphuzi (Kungani ungaphuzi?).',
      'Applicative enclitic: Verb Root + -ela + -ni? (Ukhalelani? = Why are you crying?).',
      'Adherence exploration: Kungani ungowalanda amaphilisi? (Why didn\'t you collect your medication?).'
    ],
    examples: [
      {
        id: 'int-caus-ex-1',
        type: 'adherence',
        isizulu: 'Kungani ungaqhubekanga nokugwinya la maphilisi ngenyanga edlule?',
        english: 'Why did you not continue swallowing these pills last month?',
        breakdown: [
          { chunk: 'Kungani', gloss: 'why? (causal interrogative)' },
          { chunk: 'ungaqhubekanga', gloss: 'u- + -nga-...-anga (participial past negative of -qhubeka: "you did not continue")' },
          { chunk: 'nokugwinya la maphilisi', gloss: 'with swallowing these pills' },
          { chunk: 'ngenyanga edlule', gloss: 'last month' }
        ]
      },
      {
        id: 'int-caus-ex-2',
        type: 'bedside',
        isizulu: 'Ulelelelani ngohlangothi olulodwa nje kuphela, kukhona lapho okubuhlungu khona?',
        english: 'Why are you lying on only one side, is there a spot that is painful?',
        breakdown: [
          { chunk: 'Ulelelelani', gloss: 'u- + -lelela (stative applicative) + -ni ("why are you lying upon?")' },
          { chunk: 'ngohlangothi olulodwa', gloss: 'on one side only' },
          { chunk: 'nje kuphela', gloss: 'just exclusively' },
          { chunk: 'kukhona lapho okubuhlungu', gloss: 'is there a place that is painful' }
        ]
      }
    ]
  },
  {
    id: 'int-clinical-polite-openers',
    category: 'interrogatives',
    title: 'Polite Conversational Openers & Question Tags (ingabe, ngabe, yini)',
    subtitle: 'Preserving patient dignity (inhlonipho) and cultural rapport in clinical screening',
    formula: 'Ingabe / Ngabe + [Clinical Statement] + yini?  OR  Statement + na?',
    explanation:
      'Direct questioning in isiZulu can sound blunt or accusatory if delivered without conversational softening. To uphold inhlonipho (respectful clinical etiquette), clinicians introduce screening questions with polite modal particles: Ingabe... ("Is it perchance the case that...") or Ngabe... ("Could it be that..."). Sentences framed this way routinely conclude with the question tags ...yini? ("or what? / is that so?") or the gentle interrogative enclitic ...na?: Ingabe umntwana uyakwazi ukudla kahle yini? ("Is the child able to feed well?").',
    commonPitfall:
      'Omitting polite softeners during sensitive reviews of systems (e.g., asking abruptly *"Uyabhema?"* instead of *"Ingabe uyabhema yini ugwayi?"*). The latter demonstrates cultural competence and invites open dialogue.',
    rules: [
      'Polite opener: Ingabe... / Ngabe... placed sentence-initially.',
      'Terminal tag: ...yini? placed at clause end to turn statements into respectful inquiries.',
      'Gentle enclitic tag: ...na? softens direct queries (Unayo imfiva na? = Do you have a fever?).',
      'Sensitive history taking: Ingabe uke waba nalesi sifo ngaphambili yini? (Have you ever had this condition before?).'
    ],
    examples: [
      {
        id: 'int-pol-ex-1',
        type: 'screening',
        isizulu: 'Ingabe kukhona omunye emndenini onalesi sifo sesifuba yini?',
        english: 'Is it perchance the case that there is someone else in the family with this chest illness?',
        breakdown: [
          { chunk: 'Ingabe', gloss: 'polite interrogative particle ("is it the case that...")' },
          { chunk: 'kukhona omunye', gloss: 'there is someone else' },
          { chunk: 'emndenini', gloss: 'in the family (locative)' },
          { chunk: 'onalesi sifo sesifuba', gloss: 'who has this chest disease' },
          { chunk: 'yini', gloss: 'respectful terminal question tag' }
        ]
      },
      {
        id: 'int-pol-ex-2',
        type: 'allergy',
        isizulu: 'Ingabe unako ukungezwani nanoma yimuphi umuthi wamaphilisi yini?',
        english: 'Do you happen to have any allergies to any prescription pills?',
        breakdown: [
          { chunk: 'Ingabe', gloss: 'polite particle ("perchance / could it be")' },
          { chunk: 'unako ukungezwani', gloss: 'do you have an intolerance/allergy' },
          { chunk: 'nanoma yimuphi umuthi', gloss: 'with whichever medicine' },
          { chunk: 'wamaphilisi', gloss: 'of pills' },
          { chunk: 'yini', gloss: 'terminal question tag' }
        ]
      }
    ]
  }
];
