/**
 * Kuzwakele Grammar Reference - qualificatives.js
 * Comprehensive guide to isiZulu Qualificatives (Iziphawulo Nezibaluli),
 * covering the closed class of True Adjectives (double concord), the open class of
 * Relatives (single concord), verbal relative clauses with suffix -yo, the attributive
 * to predicative transformation, and bedside physical examination descriptors.
 */

export const QUALIFICATIVES_SECTION = {
  id: 'qualificatives',
  title: 'The Qualificative System (Adjectives & Relatives)',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Double concord True Adjectives (omdala, enkulu) vs single concord Relatives (obomvu, esibuhlungu), verbal relatives with -yo, and predicative descriptive shifts.',
  previewHook: 'omkhulu (adj) vs. obomvu (rel), -yo clause rule, isisu sithambile (pred)',
  description: 'Master the 5 core qualificative rules: the closed class of True Adjectives, the open class of Relatives, verbal relative clauses with suffix -yo, the attributive to predicative transformation, and high-yield clinical descriptors for color, acuity, and physical examination.'
};

export const QUALIFICATIVE_MATRIX = [
  {
    nounClass: 'Class 1/1a [umu- / u-]',
    nounExample: 'umuntu (patient) / udokotela',
    trueAdjAttributive: 'omdala (elderly patient)',
    trueAdjPredicative: 'mdala (is elderly)',
    relativeAttributive: 'obandayo (cold patient)',
    relativePredicative: 'ubandayo (is cold)',
    clinicalApplication: 'Geriatric triage, hypothermia, elder care history'
  },
  {
    nounClass: 'Class 2/2a [aba- / o-]',
    nounExample: 'abantwana (children) / abagulayo',
    trueAdjAttributive: 'abadala (older children)',
    trueAdjPredicative: 'badala (are older)',
    relativeAttributive: 'ababomvu (flushed children)',
    relativePredicative: 'babomvu (are flushed)',
    clinicalApplication: 'Paediatric triage, febrile rash, cohorting'
  },
  {
    nounClass: 'Class 5 [ili- / i-]',
    nounExample: 'iphilisi (tablet) / iphaphu (lung)',
    trueAdjAttributive: 'elikhulu (large tablet)',
    trueAdjPredicative: 'likhulu (is large)',
    relativeAttributive: 'elibomvu (red tablet)',
    relativePredicative: 'libomvu (is red)',
    clinicalApplication: 'Pharmacological dosing, dysphagia, pill size'
  },
  {
    nounClass: 'Class 6 [ama-]',
    nounExample: 'amaphilisi (pills) / amahlule (clots)',
    trueAdjAttributive: 'amakhulu (large pills)',
    trueAdjPredicative: 'makhulu (are large)',
    relativeAttributive: 'amhlophe (white pills / patches)',
    relativePredicative: 'amhlophe (are white)',
    clinicalApplication: 'Oral thrush inspection, sputum assessment, clot sizing'
  },
  {
    nounClass: 'Class 7 [isi-]',
    nounExample: 'isifuba (chest) / isilonda (ulcer)',
    trueAdjAttributive: 'esincane (minor lesion / small chest)',
    trueAdjPredicative: 'sincane (is small)',
    relativeAttributive: 'esibuhlungu (painful chest / ulcer)',
    relativePredicative: 'sibuhlungu (is painful / tender)',
    clinicalApplication: 'Cardiorespiratory exam, localized chest tenderness'
  },
  {
    nounClass: 'Class 9 [in- / im-]',
    nounExample: 'ingozi (trauma / wound) / inhliziyo',
    trueAdjAttributive: 'enkulu (major emergency)',
    trueAdjPredicative: 'inkulu (is major / severe)',
    relativeAttributive: 'ebomvu (erythematous wound)',
    relativePredicative: 'ibomvu (is red / inflamed)',
    clinicalApplication: 'Triage red-flagging, cardiac hypertrophy, wound sepsis'
  },
  {
    nounClass: 'Class 10 [izin- / izi-]',
    nounExample: 'izilonda (ulcers) / izinyawo (feet)',
    trueAdjAttributive: 'ezinkulu (extensive ulcers)',
    trueAdjPredicative: 'zinkulu (are large)',
    relativeAttributive: 'ezimanzi (weeping / exudative sores)',
    relativePredicative: 'zimanzi (are wet / weeping)',
    clinicalApplication: 'Diabetic foot ulcer grading, weeping edema, cellulitis'
  },
  {
    nounClass: 'Class 14 [ubu-]',
    nounExample: 'ubuhlungu (pain) / ubovu (pus)',
    trueAdjAttributive: 'obukhulu (immense pain)',
    trueAdjPredicative: 'bukhulu (is severe / immense)',
    relativeAttributive: 'obukhali (sharp / stabbing pain)',
    relativePredicative: 'bukhali (is sharp / stabbing)',
    clinicalApplication: 'Visual analog scale, acute abdomen, pleuritic pain'
  }
];

export const QUALIFICATIVE_CHECKPOINTS = [
  {
    id: 'qual-check-1',
    challengeNumber: 1,
    prompt: 'The elderly patient has sharp, severe pain in the chest.',
    targetConcept: 'True Adjective Double Concord (omdala/esidala) + Relative Concord (obukhali)',
    primaryAnswer: 'Isiguli esidala sinobuhlungu obukhali esifubeni.',
    breakdown: [
      { chunk: 'Isiguli esidala', gloss: 'isiguli (Class 7 noun: "patient") + e-si-dala (True Adjective double concord: "the old / elderly")' },
      { chunk: 'si-n-obuhlungu', gloss: 'si- (Class 7 SC) + na- (associative copulative: "has") + ubuhlungu ("pain") -> sinobuhlungu' },
      { chunk: 'obukhali', gloss: 'o- (Class 14 relative concord) + -khali (relative stem: "sharp/acute") -> "sharp pain"' },
      { chunk: 'esifubeni', gloss: 'locative of isifuba (Class 7: "in the chest")' }
    ],
    ruleTip: "-dala is a True Adjective taking a double concord (e-si-dala), whereas -khali (sharp) belongs to the open Relative system taking a single concord (o-bukhali)."
  },
  {
    id: 'qual-check-2',
    challengeNumber: 2,
    prompt: 'We need to examine the child who is coughing immediately.',
    targetConcept: 'Verbal Relative Clause with Clause-Final Suffix -yo',
    primaryAnswer: 'Kumele sihlole umntwana okhwehlelayo ngokushesha.',
    breakdown: [
      { chunk: 'Kumele sihlole', gloss: 'kumele (obligation trigger) + si-hlol-e (subjunctive: "we must examine")' },
      { chunk: 'umntwana', gloss: 'Class 1 noun ("the child / infant")' },
      { chunk: 'o-khwehlela-yo', gloss: 'o- (Class 1 relative concord) + -khwehlela (cough) + -yo (obligatory clause-final verbal relative suffix) -> "who is coughing"' },
      { chunk: 'ngokushesha', gloss: 'adverb of manner ("urgently / immediately")' }
    ],
    ruleTip: "When a verbal relative is intransitive or clause-final (not followed by a direct noun object), it obligatorily takes the suffix -yo. If an object were stated (e.g. coughing blood), -yo would drop: 'okhwehlela igazi'."
  },
  {
    id: 'qual-check-3',
    challengeNumber: 3,
    prompt: 'The abdomen is not soft; it is hard and very painful.',
    targetConcept: 'Predicative Shift of Relative Stems during Physical Examination',
    primaryAnswer: 'Isisu asithambile; siqatha futhi sibuhlungu kakhulu.',
    breakdown: [
      { chunk: 'Isisu', gloss: 'Class 7 noun ("the abdomen / belly")' },
      { chunk: 'a-si-thamb-ile', gloss: 'a-si-...-ile (negative stative: "it is not soft / relaxed")' },
      { chunk: 'si-qatha', gloss: 'si- (Class 7 Subject Concord) + -qatha (relative stem: "firm / rigid / solid") -> predicative: "it is rigid/hard"' },
      { chunk: 'futhi', gloss: 'conjunction ("and / furthermore")' },
      { chunk: 'si-buhlungu', gloss: 'si- (Class 7 SC) + -buhlungu (relative stem: "painful / tender") -> predicative: "it is painful"' },
      { chunk: 'kakhulu', gloss: 'intensifier adverb ("very / severely")' }
    ],
    ruleTip: "In clinical physical exam reporting, adjectives and relatives are shifted to predicative statements ('the abdomen IS hard') by using the Subject Concord (si-qatha, sibuhlungu) rather than the attributive relative concord (esiqatha, esibuhlungu)."
  }
];

export const QUALIFICATIVES_RULES = [
  // ==========================================
  // CATEGORY 9: THE QUALIFICATIVE SYSTEM
  // ==========================================
  {
    id: 'qual-true-adjectives',
    category: 'qualificatives',
    title: 'True Adjectives & The Double Concord System',
    subtitle: 'The small closed class of ~12 stems taking demonstrative + noun class prefixes',
    formula: 'Demonstrative Formative (a-, o-, e-) + Basic Noun Class Prefix + Adjective Root',
    explanation:
      'isiZulu possesses only ~12 true adjective roots: -khulu (large), -ncane (small), -de (long/tall), -fuphi / -fushane (short), -dala (old), -sha (new/fresh), -hle (good/healthy), -bi (bad/ill), -ningi (many), and numbers 1–5 (-nye, -bili, -thathu, -ne, -hlanu). Unlike ordinary descriptive words, true adjectives demand a double prefix: the initial demonstrative vowel followed by the full noun class prefix (e.g. Class 1 o-mu-dala -> omdala; Class 6 a-ma-khulu -> amakhulu; Class 9 e-n-kulu -> enkulu). Nasal permutations occur in Classes 9 and 10 (n + kh -> nk, n + b -> mb).',
    commonPitfall:
      'Attempting to treat all descriptive words as true adjectives. Describing pain (-buhlungu), color (-bomvu), or cold (-bandayo) belongs strictly to the Relative system and never takes the adjective double prefix.',
    rules: [
      'True adjectives are a closed morphological class of ~12 lexical roots describing size, age, quality, and numerals 1–5.',
      'The attributive adjective concord is composed of two fused morphemes: the initial demonstrative formative plus the basic noun class prefix.',
      'Class 9 and 10 adjective stems undergo homorganic nasal permutations: -khulu becomes enkulu / ezinkulu, -bi becomes embi / ezimbi.',
      'True adjectives agree in noun class with the noun they qualify and usually directly follow that noun.'
    ],
    examples: [
      {
        id: 'qual-true-ex-1',
        type: 'clinical',
        isizulu: 'Umuntu omdala udinga amaphilisi amancane ukugwema ukuklinywa.',
        english: 'An elderly patient needs small pills to avoid choking.',
        breakdown: [
          { chunk: 'Umuntu', gloss: 'person / patient (Class 1)' },
          { chunk: 'omdala', gloss: 'o-mu-dala (True Adjective double concord: "elderly")' },
          { chunk: 'udinga', gloss: 'needs / requires' },
          { chunk: 'amaphilisi amancane', gloss: 'amaphilisi (Class 6) + a-ma-ncane (True Adj double concord: "small pills")' },
          { chunk: 'ukugwema ukuklinywa', gloss: 'to prevent choking / dysphagia' }
        ]
      },
      {
        id: 'qual-true-ex-2',
        type: 'diagnostics',
        isizulu: 'Isibindi esikhulu nesilonda esibi kudinga ukuhlolwa ngokushesha.',
        english: 'An enlarged liver and a severe ulcer require immediate examination.',
        breakdown: [
          { chunk: 'Isibindi esikhulu', gloss: 'liver (Class 7) + e-si-khulu (True Adj: "enlarged/large liver")' },
          { chunk: 'nesilonda esibi', gloss: 'na- (and) + isilonda (ulcer) + e-si-bi (True Adj: "bad/severe ulcer")' },
          { chunk: 'kudinga ukuhlolwa', gloss: 'requires examination' },
          { chunk: 'ngokushesha', gloss: 'urgently' }
        ]
      }
    ]
  },
  {
    id: 'qual-relative-system',
    category: 'qualificatives',
    title: 'The Relative System (Open Descriptive Class & Colors)',
    subtitle: 'Describing colors, physical states, consistency, and sensations with single concords',
    formula: 'Relative Concord (o-, aba-, eli-, ama-, esi-, ezi-, e-, obu-) + Relative Stem',
    explanation:
      'All other descriptive words in isiZulu belong to the open Relative system. This includes colors (-bomvu = red, -mhlophe = white, -mnyama = dark), physical conditions (-manzi = wet, -omile = dry, -qatha = firm/rigid, -thambile = soft), sensations (-buhlungu = painful, -mnandi = pleasant), and numerals above 5 (-yisithupha, -yisikhombisa). Relatives take a single relative concord (the initial relative vowel prefixed to the subject concord: a + u -> o-, a + ba -> aba-, a + li -> eli-, a + si -> esi-, a + zi -> ezi-, a + bu -> obu-).',
    commonPitfall:
      'Applying the adjective double prefix to relative stems (e.g. saying *"isifuba esisibuhlungu"* instead of the correct relative single prefix *"isifuba esibuhlungu"*).',
    rules: [
      'The relative system is an open class accommodating hundreds of clinical descriptors, sensations, and loan concepts.',
      'Relative concords are single prefixes formed by coalescing the relative formative a- with the subject concord.',
      'Relative stems include nominal relatives (nouns used descriptively like ubuhlungu -> -buhlungu) and primitive relative stems like -bomvu.',
      'When qualifying a noun attributively, the relative phrase immediately follows the noun.'
    ],
    examples: [
      {
        id: 'qual-rel-ex-1',
        type: 'clinical',
        isizulu: 'Unezilonda ezibomvu ezikhipha ubovu obumanzi emlenzeni.',
        english: 'He has red ulcers discharging watery pus on the lower leg.',
        breakdown: [
          { chunk: 'Unezilonda', gloss: 'he has ulcers (Class 10)' },
          { chunk: 'ezibomvu', gloss: 'ezi- (Class 10 relative concord) + -bomvu (red) -> "red ulcers"' },
          { chunk: 'ezikhipha ubovu', gloss: 'which discharge pus (Class 14)' },
          { chunk: 'obumanzi', gloss: 'obu- (Class 14 relative concord) + -manzi (wet/watery) -> "watery pus"' },
          { chunk: 'emlenzeni', gloss: 'locative: on the leg' }
        ]
      },
      {
        id: 'qual-rel-ex-2',
        type: 'triage',
        isizulu: 'Isimo sesiguli sibucayi kakhulu ngenxa yokuphelelwa igazi.',
        english: "The patient's condition is very critical due to blood loss.",
        breakdown: [
          { chunk: 'Isimo sesiguli', gloss: 'the condition of the patient' },
          { chunk: 'sibucayi', gloss: 'si- (Class 7 SC) + -bucayi (relative stem: "critical/fragile")' },
          { chunk: 'kakhulu', gloss: 'very / acutely' },
          { chunk: 'ngenxa yokuphelelwa igazi', gloss: 'on account of running out of blood' }
        ]
      }
    ]
  },
  {
    id: 'qual-verbal-relatives',
    category: 'qualificatives',
    title: 'Verbal Relative Clauses & The Clause-Final Suffix -yo',
    subtitle: 'Creating descriptive verbs ("who is coughing", "that heals") and the -yo drop rule',
    formula: 'Relative Concord + Verb Stem + [-yo if clause-final or intransitive]',
    explanation:
      'Any verb stem can be converted into a relative clause ("the patient who is coughing / the treatment that cures") by prefixing the relative concord. Crucially, isiZulu enforces the suffix -yo rule: when the verbal relative appears at the end of its clause or is not directly followed by an explicit noun object or adverbial modifier, it obligatorily suffixes -yo. When a direct complement follows, -yo is dropped. Negative verbal relatives take the participial negative prefix -nga-...-i and NEVER take -yo.',
    commonPitfall:
      'Retaining -yo when an object complement is present. Saying *"isiguli esikhwehlelayo igazi"* is grammatically incorrect; it must be *"isiguli esikhwehlela igazi"*.',
    rules: [
      'Verbal relatives are formed by prefixing the relative concord to the indicative or participial verb stem.',
      'The suffix -yo is obligatory when the verbal relative is clause-final or intransitive without an expressed object.',
      'If the verbal relative is followed by a direct object, locative, or adverbial complement, -yo is dropped.',
      'Negative verbal relatives take participial morphology (SC + -nga- + Root + -i) and never accept the suffix -yo.'
    ],
    examples: [
      {
        id: 'qual-vrel-ex-1',
        type: 'clinical',
        isizulu: 'Sibheka abantu abaphilayo kanye nalabo abagulayo emtholampilo.',
        english: 'We check people who are healthy as well as those who are sick in the clinic.',
        breakdown: [
          { chunk: 'Sibheka abantu', gloss: 'we examine people (Class 2)' },
          { chunk: 'abaphilayo', gloss: 'aba- (rel concord) + -phila (live/well) + -yo (intransitive relative suffix: "who are healthy")' },
          { chunk: 'kanye nalabo', gloss: 'together with those' },
          { chunk: 'abagulayo', gloss: 'aba- + -gula (be ill) + -yo ("who are sick")' },
          { chunk: 'emtholampilo', gloss: 'at the clinic' }
        ]
      },
      {
        id: 'qual-vrel-ex-2',
        type: 'history',
        isizulu: 'Isiguli esikhwehlela igazi kumele sithunyelwe egumbini lokuhlukanisa.',
        english: 'The patient who is coughing blood must be sent to the isolation room.',
        breakdown: [
          { chunk: 'Isiguli', gloss: 'the patient (Class 7)' },
          { chunk: 'esikhwehlela', gloss: 'esi- (rel concord) + -khwehlela (coughs) -> -yo dropped because object follows' },
          { chunk: 'igazi', gloss: 'direct object: blood' },
          { chunk: 'kumele sithunyelwe', gloss: 'must be sent (passive subjunctive)' },
          { chunk: 'egumbini lokuhlukanisa', gloss: 'to the isolation room' }
        ]
      }
    ]
  },
  {
    id: 'qual-attributive-vs-predicative',
    category: 'qualificatives',
    title: "Attributive vs. Predicative Shifts ('The Big Pill' vs. 'The Pill IS Big')",
    subtitle: 'Dropping initial vowels to transform noun modifiers into clinical statements',
    formula: 'Attributive: Relative/Adjective Concord | Predicative: Drop initial vowel or use Subject Concord',
    explanation:
      'In clinical communication, a vital distinction exists between qualifying a noun attributively ("the swollen leg / the big pill") and asserting a physical diagnostic finding predicatively ("the leg IS swollen / the pill IS big"). To shift a True Adjective to a predicative copulative statement, drop the initial demonstrative vowel: iphilisi elikhulu (the big pill) -> iphilisi likhulu (the pill is big); umntwana omncane (the small child) -> umntwana mncane (the child is small). To shift a Relative to a predicative statement, simply replace the relative concord with the standard Subject Concord: isisu esithambile (the soft abdomen) -> isisu sithambile (the abdomen is soft); ubuhlungu obukhali (the sharp pain) -> ubuhlungu bukhali (the pain is sharp).',
    commonPitfall:
      'Using the attributive form when reporting physical examination findings (e.g. saying *"isisu esibuhlungu"* instead of the full diagnostic finding *"isisu sibuhlungu"* = the abdomen is tender).',
    rules: [
      'Attributive qualificatives modify a noun directly within a noun phrase ("the swollen foot").',
      'Predicative qualificatives act as the verbal predicate making a clinical diagnostic assertion ("the foot is swollen").',
      'True adjectives become predicative by eliding the initial demonstrative vowel of the concord.',
      'Relatives become predicative by substituting the standard Subject Concord for the relative concord.'
    ],
    examples: [
      {
        id: 'qual-pred-ex-1',
        type: 'clinical',
        isizulu: 'Isisu sithambile, asibuhlungu lapho ngisicindezela ngobumnene.',
        english: 'The abdomen is soft, it is not tender when I palpate it gently.',
        breakdown: [
          { chunk: 'Isisu', gloss: 'abdomen (Class 7)' },
          { chunk: 'sithambile', gloss: 'si- (SC) + -thambile (stative predicate: "it is soft / non-tender")' },
          { chunk: 'asibuhlungu', gloss: 'a-si-buhlungu (negative relative predicate: "it is not painful")' },
          { chunk: 'lapho ngisicindezela', gloss: 'when I palpate/press it (with Class 7 OC -si-)' },
          { chunk: 'ngobumnene', gloss: 'gently / softly' }
        ]
      },
      {
        id: 'qual-pred-ex-2',
        type: 'vitals',
        isizulu: 'Umzimba womntwana ushisa kakhulu; amehlo akhe abomvu.',
        english: "The child's body is very hot; his eyes are red/inflamed.",
        breakdown: [
          { chunk: 'Umzimba womntwana', gloss: 'the body of the child (Class 3)' },
          { chunk: 'ushisa kakhulu', gloss: 'u- (Class 3 SC) + -shisa (is hot) + kakhulu (very)' },
          { chunk: 'amehlo akhe', gloss: 'his eyes (Class 6)' },
          { chunk: 'abomvu', gloss: 'a- (Class 6 SC) + -bomvu (predicative relative: "are red/erythematous")' }
        ]
      }
    ]
  },
  {
    id: 'qual-clinical-descriptors',
    category: 'qualificatives',
    title: 'Essential Clinical Qualificative Inventory',
    subtitle: 'Standard medical terminology for triage, wound inspection, and palpation',
    formula: 'Organ Noun + Specific Qualificative Stem',
    explanation:
      'isiZulu medical communication relies on a precise inventory of qualificative roots for physical examination and triage: Acuity & Pain (-khali = acute/sharp, -dambile = dull/subsiding, -nzima = grave/severe, -lula = mild); Color & Exudate (-bomvu = erythema/rash, -mhlophe = pallor/candida, -mnyama = dark/cyanotic/melena, -luhlaza = yellow-green bile/pus or ecchymosis); Consistency & Palpation (-thambile = soft/supple, -qatha = rigid/indurated mass, -manzi = weeping effusion, -omile = dehydrated/dry skin); General Status (-ngcono = improved/better, -buhlungu = tender/painful).',
    commonPitfall:
      'Assuming that English medical adjectives have direct 1:1 Latinate equivalents. In isiZulu, physical findings are conveyed through vivid descriptive roots grounded in everyday tactile and visual reality.',
    rules: [
      'Acuity: use -khali for stabbing/pleuritic pain, -dambile for subsiding symptoms, -nzima for critical distress.',
      'Dermatology & Wounds: use -bomvu for cellulitis/erythema, -manzi for weeping serous discharge, -qatha for induration.',
      'Hydration & Mucosa: use -omile for xerostomia/poor skin turgor, -thambile for relaxed abdominal wall.',
      'SBAR & Handovers: use -ngcono for clinical improvement, -buhlungu for localized palpation tenderness.'
    ],
    examples: [
      {
        id: 'qual-inv-ex-1',
        type: 'clinical',
        isizulu: 'Umchamo umnyama futhi unamahlule abomvu ngenxa yokopha.',
        english: 'The urine is dark and contains red blood clots due to bleeding.',
        breakdown: [
          { chunk: 'Umchamo', gloss: 'urine (Class 3)' },
          { chunk: 'umnyama', gloss: 'u- (SC) + -mnyama (predicative relative: "is dark/tea-colored")' },
          { chunk: 'futhi unamahlule', gloss: 'and has clots (Class 6)' },
          { chunk: 'abomvu', gloss: 'a- (rel concord) + -bomvu (red: "red clots")' },
          { chunk: 'ngenxa yokopha', gloss: 'due to hemorrhaging / bleeding' }
        ]
      },
      {
        id: 'qual-inv-ex-2',
        type: 'handover',
        isizulu: 'Isimo sesiguli singcono kakhulu namhlanje ekuseni emva kokumpontshelwa igazi.',
        english: 'The patient condition is much better this morning following blood transfusion.',
        breakdown: [
          { chunk: 'Isimo sesiguli', gloss: 'the condition of the patient (Class 7)' },
          { chunk: 'singcono kakhulu', gloss: 'si- (SC) + -ngcono (predicative: "is much improved/better")' },
          { chunk: 'namhlanje ekuseni', gloss: 'this morning' },
          { chunk: 'emva kokumpontshelwa igazi', gloss: 'after receiving a blood transfusion' }
        ]
      }
    ]
  }
];
