// ==============================================================================
// SECTION 24: CLINICAL INHLONIPHO, VOCATIVES & RESPECTFUL REGISTERS
// Inhlonipho Nezokubingelela (Respectful Bedside Communication & Clan Salutations)
// ==============================================================================

export const INHLONIPHO_SECTION = {
  id: 'inhlonipho-registers',
  title: 'Clinical Inhlonipho, Vocatives & Respectful Registers',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'The Vocative Initial-Vowel Drop rule (Dokotela!, Mama!, Mhlengikazi!), clan praises (Izithakazelo: Sibiya, Ndlovu, Mthethwa), euphemistic registers in obstetrics, oncology, and bereavement, and respectful physical examination commands.',
  previewHook: 'Sawubona Sibiya!, Dokotela!, ukhulelwe vs unesisu, ukudlula emhlabeni',
  description: 'Master the 5 core inhlonipho rules: the vocative preprefix vowel drop when directly addressing patients or staff, honoring clan identities through izithakazelo (Sibiya, Ndlovu, Mthethwa), obstetric euphemisms (ukhulelwe, uzithwele), compassionate bereavement communication (ukushona, ukudlula emhlabeni), and polite physical examination elicitation with ake.'
};

export const INHLONIPHO_MATRIX = [
  {
    registerCategory: 'Direct Vocative Address',
    respectfulZuluForm: 'Dokotela! / Mhlengikazi!',
    crudeOrIncorrectPitfall: '*Sawubona uDokotela (retaining preprefix vowel)',
    culturalNuance: 'Dropping initial vowel signals direct address; retaining it marks 3rd-person reference',
    clinicalApplication: 'Direct inter-professional communication'
  },
  {
    registerCategory: 'Elder Kinship Address',
    respectfulZuluForm: 'Gogo! / Mkhulu!',
    crudeOrIncorrectPitfall: '*uGogo! / *uMkhulu! (retaining vowel)',
    culturalNuance: 'Elder respect requires dropping initial vowel in vocative address',
    clinicalApplication: 'Geriatric triage and history-taking'
  },
  {
    registerCategory: 'Clan Salutation & Alliance',
    respectfulZuluForm: 'Sawubona Sibiya! / Yebo Nongombili!',
    crudeOrIncorrectPitfall: 'Neglecting clan identity; using clinical file numbers',
    culturalNuance: 'Clan praise acknowledges ancestral lineage and establishes instant rapport',
    clinicalApplication: 'Patient rapport in rural KZN district hospitals'
  },
  {
    registerCategory: 'Pregnancy & Reproductive Health',
    respectfulZuluForm: 'Ukhulelwe / Uzithwele',
    crudeOrIncorrectPitfall: '*Unesisu / *Umithi (animalistic or crude)',
    culturalNuance: 'Utmost modesty around maternal health; avoid veterinary or physicalist terms',
    clinicalApplication: 'Antenatal care and obstetric admission'
  },
  {
    registerCategory: 'Bereavement & End-of-Life',
    respectfulZuluForm: 'Udlule emhlabeni / Ugodukile / Ushonile',
    crudeOrIncorrectPitfall: '*Ufile (harsh / blunt death applied to humans)',
    culturalNuance: 'Bladeless language around death softens grief and respects the spirit\'s journey',
    clinicalApplication: 'Breaking bad news in ICU or trauma unit'
  },
  {
    registerCategory: 'Critical Illness & Palliative Care',
    respectfulZuluForm: 'Isimo sesiguli asisihle neze',
    crudeOrIncorrectPitfall: '*Uzofa masinyane (fatalistic insensitivity)',
    culturalNuance: 'Dignified bedside honesty that maintains psychological comfort',
    clinicalApplication: 'Palliative counseling and family conferences'
  },
  {
    registerCategory: 'Procedural Physical Examination',
    respectfulZuluForm: 'Ake uhlale phansi, ngikuhlole',
    crudeOrIncorrectPitfall: '*Hlala phansi! (blunt / barking imperative order)',
    culturalNuance: 'The hortative marker ake transforms raw commands into gentle requests',
    clinicalApplication: 'Auscultation, palpation, and positioning'
  },
  {
    registerCategory: 'Communal Family Salutation',
    respectfulZuluForm: 'Ninjani ekhaya?',
    crudeOrIncorrectPitfall: 'Individualizing greeting; ignoring homestead well-being',
    culturalNuance: 'Acknowledging the patient\'s entire household honors communal solidarity',
    clinicalApplication: 'Outpatient consultation opening'
  }
];

export const INHLONIPHO_CHECKPOINTS = [
  {
    id: 'chk-inh-1',
    challengeNumber: 1,
    category: 'inhlonipho-registers',
    targetConcept: 'Direct Vocative Address & Clan Salutation',
    prompt: 'Good morning, Sibiya (Nongombili)! How are you feeling today, grandmother?',
    primaryAnswer: 'Sawubona Sibiya, Nongombili! Uzizwa kanjani namuhla, gogo?',
    ruleTip: 'Drop the initial vowel in vocatives (ugogo -> gogo, udokotela -> dokotela). Greet with clan surname and praise.',
    breakdown: [
      { chunk: 'Sawubona Sibiya, Nongombili!', gloss: 'Greetings Sibiya (clan name), Nongombili (praise name)!' },
      { chunk: 'Uzizwa kanjani', gloss: 'How do you feel? (reflexive -zi-)' },
      { chunk: 'namuhla', gloss: 'today' },
      { chunk: 'gogo?', gloss: 'grandmother (vocative vowel drop from ugogo)' }
    ]
  },
  {
    id: 'chk-inh-2',
    challengeNumber: 2,
    category: 'inhlonipho-registers',
    targetConcept: 'Respectful Obstetric History (uzithwele / ukhulelwe)',
    prompt: 'How many months have you been pregnant with this child, mama?',
    primaryAnswer: 'Unezinyanga ezingaki uzithwele lo mntwana, mama?',
    ruleTip: 'Use respectful uzithwele (carrying life) or ukhulelwe for pregnancy. Avoid crude unesisu or animalistic umithi.',
    breakdown: [
      { chunk: 'Unezinyanga ezingaki', gloss: 'You have how many months? (associative na- + relative ezingaki)' },
      { chunk: 'uzithwele', gloss: 'carrying yourself / life (respectful pregnancy term)' },
      { chunk: 'lo mntwana', gloss: 'this child (Class 1)' },
      { chunk: 'mama?', gloss: 'mother (respectful vocative: umama with u- dropped)' }
    ]
  },
  {
    id: 'chk-inh-3',
    challengeNumber: 3,
    category: 'inhlonipho-registers',
    targetConcept: 'Compassionate Palliative Communication (udlule emhlabeni)',
    prompt: 'I am deeply sorry to inform you that your father passed away peacefully this morning.',
    primaryAnswer: 'Ngidabuka kakhulu ukukutshela ukuthi ubaba wakho udlule emhlabeni ngokuthula ekuseni namhlanje.',
    ruleTip: 'Never use blunt ukufa for human bereavement. Use udlule emhlabeni (departed from this world) or ushonile.',
    breakdown: [
      { chunk: 'Ngidabuka kakhulu', gloss: 'I am deeply grieved / saddened' },
      { chunk: 'ukukutshela ukuthi', gloss: 'to tell you that' },
      { chunk: 'ubaba wakho', gloss: 'your father' },
      { chunk: 'udlule emhlabeni', gloss: 'passed away / departed from this world' },
      { chunk: 'ngokuthula', gloss: 'peacefully' },
      { chunk: 'ekuseni namhlanje', gloss: 'this morning' }
    ]
  }
];

export const INHLONIPHO_RULES = [
  {
    id: 'inh-vocative-vowel-drop',
    category: 'inhlonipho-registers',
    title: 'The Vocative Initial-Vowel Drop Rule',
    badge: 'Vocative Preprefix Drop',
    subtitle: 'Dropping initial vowels when directly addressing patients or clinicians',
    formula: 'Drop Initial Augment Vowel when directly addressing any person or title',
    explanation:
      'When calling someone, addressing a patient, or speaking directly to a colleague, the initial augment preprefix vowel of the noun is obligatorily dropped: uDokotela becomes Dokotela!, uMhlengikazi becomes Mhlengikazi!, uMama becomes Mama!, uGogo becomes Gogo!, and uBaba becomes Baba!. Retaining the initial vowel (*Sawubona uDokotela) is ungrammatical because the prefix vowel explicitly marks a 3rd-person reference to someone absent, rather than direct address to the person standing before you.',
    commonPitfall:
      'Never say *Sawubona uGogo or *Sawubona uDokotela; you must drop the initial u- to create respectful vocative direct address (*Sawubona gogo*, *Sawubona dokotela*).',
    rules: [
      'Direct address: Always drop the initial noun vowel (uDokotela -> Dokotela!)',
      'Grammatical function: The initial vowel marks an absent 3rd party',
      'Kinship titles: ugogo -> gogo!, umkhulu -> mkhulu!, umama -> mama!',
      'Bedside etiquette: Signals respectful clinician-patient engagement'
    ],
    examples: [
      {
        id: 'inh-voc-ex-1',
        type: 'clinical',
        isizulu: 'Ngena ngaphakathi, mhlengikazi, ngicela ungisize ngalo mshini.',
        english: 'Come inside, nurse, please help me with this machine.',
        breakdown: [
          { chunk: 'Ngena ngaphakathi', gloss: 'Enter inside (imperative)' },
          { chunk: 'mhlengikazi', gloss: 'nurse (vocative: umhlengikazi with u- dropped)' },
          { chunk: 'ngicela ungisize', gloss: 'please help me (subjunctive)' },
          { chunk: 'ngalo mshini', gloss: 'with this machine' }
        ]
      },
      {
        id: 'inh-voc-ex-2',
        type: 'community',
        isizulu: 'Sawubona gogo, hlala phansi lapha ukuze siphumule kancane.',
        english: 'Good morning grandmother, sit down here so that we may rest a little.',
        breakdown: [
          { chunk: 'Sawubona', gloss: 'Hello / Greetings' },
          { chunk: 'gogo', gloss: 'grandmother (vocative: ugogo with u- dropped)' },
          { chunk: 'hlala phansi lapha', gloss: 'sit down here' },
          { chunk: 'ukuze siphumule kancane', gloss: 'so that we rest a little' }
        ]
      }
    ]
  },
  {
    id: 'inh-clan-izithakazelo',
    category: 'inhlonipho-registers',
    title: 'Clan Names & Praises (Isibongo & Izithakazelo)',
    badge: 'Ancestral Lineage Honour',
    subtitle: 'Using isibongo and clan praises for instant cultural alliance and trust',
    formula: 'Sawubona + [Isibongo / Izithakazelo] (e.g. Sibiya, Ndlovu, Mthethwa, Nongombili)',
    explanation:
      'Addressing patients by their clan name (isibongo) or ancestral clan praises (izithakazelo) is the cornerstone of clinical safety and respect in KwaZulu-Natal. In rural district hospitals, addressing an elder as "Sibiya!", "Nongombili!", "Ndlovu!", "Gatsheni!", or "Mthethwa!" instantly establishes cultural rapport, validates ancestral dignity, and dissolves clinical vulnerability.',
    commonPitfall:
      'Do not rely solely on sterile file numbers or Western first names when addressing Zulu elders; invoking clan identity signals cultural literacy and profound clinical empathy.',
    rules: [
      'Clan salutation: Sawubona + Clan surname (Sawubona Sibiya!)',
      'Praise invocation: Yebo + Izithakazelo praise (Yebo Nongombili!)',
      'De-escalation: Dissolves institutional fear and hospital intimidation',
      'Community alliance: Connects clinician directly with homestead lineage'
    ],
    examples: [
      {
        id: 'inh-clan-ex-1',
        type: 'clinical',
        isizulu: 'Sawubona Ndlovu! Singakusiza ngani namuhla emtholampilo?',
        english: 'Good day Ndlovu (Gatsheni)! How may we assist you today at the clinic?',
        breakdown: [
          { chunk: 'Sawubona Ndlovu!', gloss: 'Greetings Ndlovu (Clan name)!' },
          { chunk: 'Singakusiza ngani', gloss: 'Can we help you with what? (potential)' },
          { chunk: 'namuhla emtholampilo?', gloss: 'today at the clinic?' }
        ]
      },
      {
        id: 'inh-clan-ex-2',
        type: 'community',
        isizulu: 'Yebo Mthethwa! Kunjani ekhaya kulezi zinsuku?',
        english: 'Yes Mthethwa! How is everything at the homestead these days?',
        breakdown: [
          { chunk: 'Yebo Mthethwa!', gloss: 'Yes Mthethwa (Clan surname)!' },
          { chunk: 'Kunjani ekhaya', gloss: 'How is it at home?' },
          { chunk: 'kulezi zinsuku', gloss: 'in these days' }
        ]
      }
    ]
  },
  {
    id: 'inh-obstetric-euphemism',
    category: 'inhlonipho-registers',
    title: 'Obstetric & Reproductive Inhlonipho',
    badge: 'Maternal Modesty',
    subtitle: 'Respectful terminology in antenatal care and delivery',
    formula: 'ukhulelwe (pregnant) | uzithwele (carrying life) | ukubeletha (giving birth)',
    explanation:
      'Maternal health and reproductive dialogue require strict linguistic modesty (inhlonipho). Respectful clinicians use ukhulelwe (literally "grown / matured") or uzithwele ("carrying oneself / life") to describe pregnancy. The blunt phrase unesisu ("has a belly") is colloquial, while umithi is strictly veterinary and applied only to animals. Similarly, the act of human delivery is ukubeletha (to birth/carry on back), never veterinary calving/foaling terms.',
    commonPitfall:
      'Never use *umithi* or blunt animalistic words for human pregnancy; it is a grave cultural offense that deeply insults the patient and her family.',
    rules: [
      'Respectful terms: ukhulelwe (pregnant), uzithwele (carrying life)',
      'Delivery term: ukubeletha (human childbirth)',
      'Crude terms to avoid: unesisu (has a belly), umithi (veterinary animal pregnancy)',
      'Bedside modesty: Maintain privacy and non-judgmental tone during obstetric triage'
    ],
    examples: [
      {
        id: 'inh-obs-ex-1',
        type: 'clinical',
        isizulu: 'Udokotela uzokuhlola ukuze aqinisekise ukuthi umntwana uzithwele kahle.',
        english: 'The doctor will examine you to confirm that the baby you are carrying is doing well.',
        breakdown: [
          { chunk: 'Udokotela uzokuhlola', gloss: 'The doctor will examine you' },
          { chunk: 'ukuze aqinisekise', gloss: 'in order that he confirms (subjunctive)' },
          { chunk: 'ukuthi umntwana', gloss: 'that the child' },
          { chunk: 'uzithwele kahle', gloss: 'is carried well (respectful maternal stative)' }
        ]
      },
      {
        id: 'inh-obs-ex-2',
        type: 'community',
        isizulu: 'Lo mntwana ubelethwe ngokuthula esibhedlela ngoLwesibili.',
        english: 'This child was born safely and peacefully at the hospital on Tuesday.',
        breakdown: [
          { chunk: 'Lo mntwana', gloss: 'This child' },
          { chunk: 'ubelethwe ngokuthula', gloss: 'was delivered peacefully (passive -wa-)' },
          { chunk: 'esibhedlela ngoLwesibili', gloss: 'at the hospital on Tuesday' }
        ]
      }
    ]
  },
  {
    id: 'inh-bereavement-palliative',
    category: 'inhlonipho-registers',
    title: 'Palliative Care, Oncology & Bereavement Registers',
    badge: 'Bladeless Bereavement Language',
    subtitle: 'Breaking bad news and announcing passing with dignified compassion',
    formula: 'ukudlula emhlabeni (pass from world) | ukushona (to set like sun) | ukugoduka (to go home)',
    explanation:
      'When breaking bad news, communicating critical decline, or announcing bereavement, isiZulu employs deeply respectful, non-violent euphemisms. The raw verb ukufa ("to die / to perish") is considered crude and traumatic when applied to human beings. Clinicians compassionate in bedside inhlonipho use udlule emhlabeni ("passed from this world"), ushonile ("has set, like the sun"), or ugodukile ("has gone home to the ancestors"). For grave prognosis, phrasing like isimo asisihle ("the situation is not good") is favored over fatalistic predictions.',
    commonPitfall:
      'Never tell a grieving family *ubaba ufile*; always say *ubaba ushonile* or *ubaba udlule emhlabeni*. The verb *ukufa* is reserved for animals or inanimate destruction.',
    rules: [
      'Euphemisms for passing: udlule emhlabeni, ushonile, ugodukile',
      'Grave prognosis: isimo asisihle (the situation is delicate / not favorable)',
      'Forbidden blunt verbs: ukufa / ufile (considered heartless and crude for humans)',
      'Compassionate framing: Softens trauma and honors the patient\'s spiritual transition'
    ],
    examples: [
      {
        id: 'inh-ber-ex-1',
        type: 'clinical',
        isizulu: 'Ngiyaxolisa kakhulu mndeni, kodwa umama useshiye ngokuthula, udlule emhlabeni.',
        english: 'I am so sorry family, but mama has left us peacefully, she has passed away.',
        breakdown: [
          { chunk: 'Ngiyaxolisa kakhulu', gloss: 'I am deeply sorry' },
          { chunk: 'mndeni', gloss: 'family (vocative with u- dropped)' },
          { chunk: 'kodwa umama useshiye', gloss: 'but mama has now left us' },
          { chunk: 'ngokuthula', gloss: 'peacefully' },
          { chunk: 'udlule emhlabeni', gloss: 'passed away (euphemistic bereavement)' }
        ]
      },
      {
        id: 'inh-ber-ex-2',
        type: 'community',
        isizulu: 'Isimo sakhe asisihle neze; sidinga ukuhlala ndawonye njengomndeni.',
        english: 'Her condition is not favorable at all; we need to gather together as a family.',
        breakdown: [
          { chunk: 'Isimo sakhe', gloss: 'Her clinical condition' },
          { chunk: 'asisihle neze', gloss: 'is not good at all' },
          { chunk: 'sidinga ukuhlala ndawonye', gloss: 'we need to stay together' },
          { chunk: 'njengomndeni', gloss: 'as a family' }
        ]
      }
    ]
  },
  {
    id: 'inh-clinical-consent-etiquette',
    category: 'inhlonipho-registers',
    title: 'Respectful Physical Examination Elicitation (Ake...)',
    badge: 'Examination Consent Etiquette',
    subtitle: 'Softening physical examination directives into polite subjunctive requests',
    formula: 'Ake + Subject Concord + Verb Root + -e (Subjunctive Request)',
    explanation:
      'Physical examination requires bodily touch, undressing, and positioning. Barking raw imperatives like *Khumula!* (Undress!), *Vula!* (Open!), or *Lala!* (Lie down!) sounds domineering and causes guarded muscular tension. Inhlonipho etiquette uses the gentle hortative formative Ake... ("Please / Allow me to request...") which governs the polite subjunctive ending in -e: *Ake uhlale phansi* (Please sit down), *Ake ngilalele isifuba sakho* (Please allow me to listen to your chest), *Ake uvele ukhululeke* (Please feel free to relax).',
    commonPitfall:
      'Avoid harsh isolated commands; pairing *Ake...* with the subjunctive conveys respectful professional warmth that relaxes the patient during physical examination.',
    rules: [
      'Hortative prefix: Ake... ("Please / Kindly")',
      'Subjunctive agreement: Governs verb ending in -e (Ake uhlale, Ake uvule)',
      'Consent culture: Transforms authoritarian commands into gentle partnership',
      'Diagnostic relaxation: Reduces guarded muscle splinting during abdominal and cardiac exam'
    ],
    examples: [
      {
        id: 'inh-con-ex-1',
        type: 'clinical',
        isizulu: 'Ake ungivumele ngithinte isisu sakho lapho kubuhlungu khona.',
        english: 'Please allow me to gently touch your abdomen where it is painful.',
        breakdown: [
          { chunk: 'Ake ungivumele', gloss: 'Please allow me (hortative + subjunctive)' },
          { chunk: 'ngithinte isisu sakho', gloss: 'that I touch your abdomen' },
          { chunk: 'lapho kubuhlungu khona', gloss: 'where it is painful (relative locative)' }
        ]
      },
      {
        id: 'inh-con-ex-2',
        type: 'community',
        isizulu: 'Ake siphumule imizuzu embalwa ngaphambi kokuba siqhubeke.',
        english: 'Please let us rest for a few minutes before we proceed.',
        breakdown: [
          { chunk: 'Ake siphumule', gloss: 'Please let us rest (hortative + subjunctive)' },
          { chunk: 'imizuzu embalwa', gloss: 'a few minutes' },
          { chunk: 'ngaphambi kokuba siqhubeke', gloss: 'before that we continue' }
        ]
      }
    ]
  }
];
