/**
 * Kuzwakele Grammar Reference - demonstratives.js
 * Comprehensive guide to isiZulu Demonstratives & Spatial Deixis (Izabizwana Zokukhomba),
 * covering the three spatial and referential positions (Position 1 "this", Position 2 "that near you/mentioned",
 * Position 3 "that far away"), obligatory initial-vowel stripping on following nouns, and
 * locative copulative demonstratives (nangu, naba, nasi, nazi).
 */

export const DEMONSTRATIVES_SECTION = {
  id: 'demonstratives',
  title: 'Demonstratives & Spatial Deixis',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'The 3 spatial and referential positions (Position 1 "this", Position 2 "that near you/mentioned", Position 3 "that far away"), obligatory noun initial vowel elision, and copulative demonstratives (nangu, nasi).',
  previewHook: 'lo muntu, leyo ndawo, lesiya sibhedlela, nasi isifo',
  description: 'Master the 5 core demonstrative rules: Position 1 near speaker, Position 2 near listener or referenced topic, Position 3 remote visible, the noun initial-vowel stripping rule, and locative copulative demonstratives (nangu, naba, nasi, nazi).'
};

export const DEMONSTRATIVES_MATRIX = [
  {
    nounClass: 'Class 1/1a [umu- / u-]',
    pos1This: 'lo (this person/patient)',
    pos2ThatReferenced: 'lowo (that patient mentioned)',
    pos3ThatFar: 'lowaya (that person over there)',
    nounExampleElided: 'lo muntu / lo dokotela',
    clinicalApplication: 'Direct bedside reference, handover of individual patient'
  },
  {
    nounClass: 'Class 2 [aba- / o-]',
    pos1This: 'laba (these children/people)',
    pos2ThatReferenced: 'labo (those children mentioned)',
    pos3ThatFar: 'labaya (those people over there)',
    nounExampleElided: 'laba bantwana / laba bogogo',
    clinicalApplication: 'Cohort identification, paediatric ward rounds'
  },
  {
    nounClass: 'Class 3 [um- / umu-]',
    pos1This: 'lo (this leg/medicine)',
    pos2ThatReferenced: 'lowo (that leg mentioned)',
    pos3ThatFar: 'lowaya (that limb over there)',
    nounExampleElided: 'lo mlenze / lo muthi',
    clinicalApplication: 'Limb localization, deep vein thrombosis, prescribed bottle'
  },
  {
    nounClass: 'Class 5 [ili- / i-]',
    pos1This: 'leli (this tablet/lung)',
    pos2ThatReferenced: 'lelo (that tablet mentioned)',
    pos3ThatFar: 'leliya (that tablet over there)',
    nounExampleElided: 'leli philisi / leli phaphu',
    clinicalApplication: 'Auscultation site, specific blister pack identification'
  },
  {
    nounClass: 'Class 6 [ama-]',
    pos1This: 'la / lawa (these pills/clots)',
    pos2ThatReferenced: 'lawo (those pills mentioned)',
    pos3ThatFar: 'lawaya (those pills over there)',
    nounExampleElided: 'la maphilisi / la mahlule',
    clinicalApplication: 'Sputum tray inspection, current prescription verification'
  },
  {
    nounClass: 'Class 7 [isi-]',
    pos1This: 'lesi (this chest/wound)',
    pos2ThatReferenced: 'leso (that chest pain mentioned)',
    pos3ThatFar: 'lesiya (that clinic over there)',
    nounExampleElided: 'lesi sifuba / lesi silonda',
    clinicalApplication: 'Precise anatomical chest pain localization, wound inspection'
  },
  {
    nounClass: 'Class 9 [in- / im-]',
    pos1This: 'le (this trauma/wound/heart)',
    pos2ThatReferenced: 'leyo (that injury mentioned)',
    pos3ThatFar: 'leyaya (that ward over there)',
    nounExampleElided: 'le ngozi / leyo ndawo',
    clinicalApplication: 'Emergency triage tagging, previously reported pain area'
  },
  {
    nounClass: 'Class 10 [izin- / izi-]',
    pos1This: 'lezi (these sores/feet)',
    pos2ThatReferenced: 'lezo (those ulcers mentioned)',
    pos3ThatFar: 'leziya (those sores over there)',
    nounExampleElided: 'lezi zilonda / lezi zinyawo',
    clinicalApplication: 'Bilateral diabetic foot assessment, multiple ulcers'
  }
];

export const DEMONSTRATIVES_CHECKPOINTS = [
  {
    id: 'dem-check-1',
    challengeNumber: 1,
    prompt: 'Does this chest pain radiate down into this left leg?',
    targetConcept: 'Anatomical Localization with Position 1 (lobu buhlungu, lo mlenze)',
    primaryAnswer: 'Ingabe lobu buhlungu besifuba buyehla buye kulo mlenze wesobunxele?',
    breakdown: [
      { chunk: 'Ingabe', gloss: 'interrogative question marker ("is it that / does")' },
      { chunk: 'lobu buhlungu', gloss: 'Position 1 demonstrative lobu (Class 14: "this") + ubuhlungu (with initial u- elided: "this pain")' },
      { chunk: 'besifuba', gloss: 'possessive: of the chest' },
      { chunk: 'buyehla buye', gloss: 'descends and goes (consecutive motion)' },
      { chunk: 'kulo mlenze', gloss: 'locative ku- + Position 1 lo (Class 3: "into this") + umlenze (initial u- elided: "this leg")' },
      { chunk: 'wesobunxele', gloss: 'of the left side ("left leg")' }
    ],
    ruleTip: "Position 1 demonstratives point to anatomical regions right in front of the clinician (lobu buhlungu, lo mlenze). When preceded by locative ku-, the demonstrative retains its form: ku- + lo -> kulo mlenze."
  },
  {
    id: 'dem-check-2',
    challengeNumber: 2,
    prompt: 'When did that problem you mentioned start to recur?',
    targetConcept: 'Referencing Prior Symptoms with Position 2 (-o suffix: leyo nkinga)',
    primaryAnswer: 'Iqale nini leyo nkinga oyishilo ukubuya futhi?',
    breakdown: [
      { chunk: 'Iqale nini', gloss: 'it started when (Class 9 past tense)' },
      { chunk: 'leyo nkinga', gloss: 'Position 2 demonstrative leyo (Class 9: "that mentioned") + inkinga (initial i- elided: "that problem")' },
      { chunk: 'oyishilo', gloss: 'which you mentioned (relative clause with object concord -yi-)' },
      { chunk: 'ukubuya futhi', gloss: 'to return again / to recur' }
    ],
    ruleTip: "Position 2 demonstratives end in -o (lowo, lelo, leso, leyo, lezo) and refer to symptoms or complaints previously introduced by the patient ('that issue you just described')."
  },
  {
    id: 'dem-check-3',
    challengeNumber: 3,
    prompt: 'Here are your blood test results and here is your prescription.',
    targetConcept: 'Copulative Demonstratives (Nayi, Nazi) for Bedside Delivery',
    primaryAnswer: 'Nayi imiphumela yakho yegazi futhi nazi izincwadi zemithi.',
    breakdown: [
      { chunk: 'Nayi imiphumela', gloss: 'nayi (Class 4 copulative demonstrative: "here are") + imiphumela ("results")' },
      { chunk: 'yakho yegazi', gloss: 'your (possessive) of blood ("blood test results")' },
      { chunk: 'futhi', gloss: 'conjunction ("and / furthermore")' },
      { chunk: 'nazi izincwadi', gloss: 'nazi (Class 10 copulative demonstrative: "here are") + izincwadi ("letters / scripts")' },
      { chunk: 'zemithi', gloss: 'of medications ("prescriptions")' }
    ],
    ruleTip: "Copulative demonstratives (nangu, naba, nali, nanka, nasi, nazi, nayi) mean 'here is / here are' and are used when handing physical items to the patient (folders, scripts, lab printouts)."
  }
];

export const DEMONSTRATIVES_RULES = [
  // ==========================================
  // CATEGORY 11: DEMONSTRATIVES & SPATIAL DEIXIS
  // ==========================================
  {
    id: 'dem-position-1-near',
    category: 'demonstratives',
    title: 'Position 1 Demonstrative ("This / These Near Me")',
    subtitle: 'Physical examination deixis indicating lesions, organs, and medications close to the speaker',
    formula: 'Class Demonstrative Formative (lo, laba, lo, leli, la/lawa, lesi, le, lezi, lobu)',
    explanation:
      'Position 1 demonstratives point to entities in close physical proximity to the clinician or directly within the examination focus: lo muntu (this patient), leli philisi (this pill), lesi sifuba (this chest), la maphilisi (these pills), lezi zilonda (these sores), lobu buhlungu (this pain). They are formed by combining the demonstrative formative l- with the class relative vowel. During palpation and inspection, Position 1 demonstratives ground clinical dialogue in the immediate bedside reality.',
    commonPitfall:
      'Retaining the initial vowel of the following noun (e.g. saying *"lesi isifuba"* instead of the mandatory contracted form *lesi sifuba*). The demonstrative strips the initial vowel of any following noun.',
    rules: [
      'Position 1 signifies proximity to the speaker: "this" (singular) or "these" (plural).',
      'The noun following Position 1 obligatorily loses its initial vowel: lesi + isilonda -> lesi silonda.',
      'Demonstratives can precede the noun (lo muntu) or follow for emphasis (umuntu lo).',
      'Preceded by locative ku-, the demonstrative binds directly: kulo muntu (to this person), kulesi sifuba (in this chest).'
    ],
    examples: [
      {
        id: 'dem-pos1-ex-1',
        type: 'palpation',
        isizulu: 'Uzwa ubuhlungu lapho ngicindezela kule ndawo yesisu?',
        english: 'Do you feel pain when I press on this area of the abdomen?',
        breakdown: [
          { chunk: 'Uzwa ubuhlungu', gloss: 'do you feel pain' },
          { chunk: 'lapho ngicindezela', gloss: 'when I press / palpate' },
          { chunk: 'kule ndawo', gloss: 'ku- + le (Position 1: this) + indawo (initial i- elided: "on this area")' },
          { chunk: 'yesisu', gloss: 'of the abdomen' }
        ]
      },
      {
        id: 'dem-pos1-ex-2',
        type: 'pharmacology',
        isizulu: 'Phuza la maphilisi amhlophe kabili ngosuku ngemva kokudla.',
        english: 'Drink these white pills twice a day after meals.',
        breakdown: [
          { chunk: 'Phuza', gloss: 'drink / take' },
          { chunk: 'la maphilisi', gloss: 'Position 1 la (Class 6: these) + amaphilisi (initial a- elided: "these pills")' },
          { chunk: 'amhlophe', gloss: 'relative: white' },
          { chunk: 'kabili ngosuku', gloss: 'twice a day' },
          { chunk: 'ngemva kokudla', gloss: 'after eating' }
        ]
      }
    ]
  },
  {
    id: 'dem-position-2-referenced',
    category: 'demonstratives',
    title: 'Position 2 Demonstrative ("That Near You / Referenced")',
    subtitle: 'Referencing previously mentioned symptoms, patient complaints, and topics near the listener',
    formula: 'Position 1 Stem + Terminal -o Shift (lowo, labo, lowo, lelo, lawo, leso, leyo, lezo, lobo)',
    explanation:
      'Position 2 demonstratives end in the characteristic vowel -o: lowo (Class 1/3), labo (Class 2), lelo (Class 5), lawo (Class 6), leso (Class 7), leyo (Class 9), lezo (Class 10), lobo (Class 14). Spatially, they denote entities near the listener ("that near you"). In clinical consultations, however, their most frequent and powerful role is referential (anaphoric): pointing back to a symptom, medication, or clinic visit already described by the patient: leyo nkinga (that problem you spoke of), lelo philisi (that pill you mentioned), leso sifo (that disease we discussed).',
    commonPitfall:
      'Using Position 1 (lesi) when asking about a symptom the patient described minutes ago. Using Position 2 (leso) acknowledges the patient report: "leso sihlaba osizwile" (that sharp stitch you felt).',
    rules: [
      'Position 2 always terminates in the vowel -o across all noun classes.',
      'Spatial meaning: near the listener ("that near you").',
      'Referential / anaphoric meaning: referencing a topic or symptom previously mentioned in the conversation.',
      'Strips the initial vowel of the following noun: lezo + izinhlungu -> lezo zinhlungu (those pains).'
    ],
    examples: [
      {
        id: 'dem-pos2-ex-1',
        type: 'history',
        isizulu: 'Yaqala nini leyo mikhuhlane oyichazayo?',
        english: 'When did that fever/flu you are describing first start?',
        breakdown: [
          { chunk: 'Yaqala nini', gloss: 'it started when (Class 9 past)' },
          { chunk: 'leyo mikhuhlane', gloss: 'Position 2 leyo (Class 9: "that mentioned") + imikhuhlane (elided i-: "that fever")' },
          { chunk: 'oyichazayo', gloss: 'which you describe (verbal relative with -yo)' }
        ]
      },
      {
        id: 'dem-pos2-ex-2',
        type: 'medication',
        isizulu: 'Lelo philisi elibomvu owaliphuza izolo... libangele isicanucanu?',
        english: 'That red pill you took yesterday... did it cause nausea?',
        breakdown: [
          { chunk: 'Lelo philisi', gloss: 'Position 2 lelo (Class 5: "that mentioned") + iphilisi (elided i-: "that pill")' },
          { chunk: 'elibomvu', gloss: 'which is red' },
          { chunk: 'owaliphuza izolo', gloss: 'which you drank yesterday' },
          { chunk: 'libangele isicanucanu', gloss: 'did it cause nausea?' }
        ]
      }
    ]
  },
  {
    id: 'dem-position-3-remote',
    category: 'demonstratives',
    title: 'Position 3 Demonstrative ("That Over There Visible")',
    subtitle: 'Navigating clinic wayfinding, hospital corridors, and remote visible landmarks',
    formula: 'Position 1 Stem + Suffix -ya (lowaya, labaya, lowaya, leliya, lawaya, lesiya, leyaya, leziya, lobuya)',
    explanation:
      'Position 3 demonstratives indicate distance from both the speaker and the listener ("that over there, far away but visible"). They are constructed by suffixing -ya to the Position 1 form: lowaya (Class 1), labaya (Class 2), leliya (Class 5), lesiya (Class 7), leyaya (Class 9), leziya (Class 10). In healthcare facilities, Position 3 is ubiquitous for wayfinding and triage routing: directing patients to the pharmacy, radiology, the injection room, or the cashier (hamba kuleliya gumbi = go to that room over there).',
    commonPitfall:
      'Confusing Position 2 (-o) with Position 3 (-ya). Position 2 (lelo gumbi) refers to a room mentioned in discussion, whereas Position 3 (leliya gumbi) directs the patient visual attention to a physical room down the hall.',
    rules: [
      'Position 3 indicates distance from both speaker and listener: "that over there".',
      'Constructed by suffixing -ya to the Position 1 base form.',
      'Used for hospital wayfinding: egumbini leliya (in that room over there), kulesiya sibhedlela (at that hospital over there).',
      'Like all demonstratives, it causes initial-vowel elision when preceding the noun: lesiya + isibhedlela -> lesiya sibhedlela.'
    ],
    examples: [
      {
        id: 'dem-pos3-ex-1',
        type: 'wayfinding',
        isizulu: 'Hamba kuleliya gumbi elisekupheleni kwephaseji ukuze uthole umjovo.',
        english: 'Go to that room over there at the end of the passage to get the injection.',
        breakdown: [
          { chunk: 'Hamba', gloss: 'go / proceed' },
          { chunk: 'kuleliya gumbi', gloss: 'ku- + leliya (Position 3: that over there) + igumbi (elided i-: "to that room")' },
          { chunk: 'elisekupheleni kwephaseji', gloss: 'which is at the end of the hallway' },
          { chunk: 'ukuze uthole umjovo', gloss: 'so that you receive the injection' }
        ]
      },
      {
        id: 'dem-pos3-ex-2',
        type: 'routing',
        isizulu: 'Imithi yakho uzoyilanda kuleyaya khemisi engaphandle.',
        english: 'You will collect your medications at that pharmacy over there outside.',
        breakdown: [
          { chunk: 'Imithi yakho', gloss: 'your medications (Class 4)' },
          { chunk: 'uzoyilanda', gloss: 'you will collect it' },
          { chunk: 'kuleyaya khemisi', gloss: 'ku- + leyaya (Position 3 Class 9) + ikhemisi (elided i-: "at that pharmacy")' },
          { chunk: 'engaphandle', gloss: 'which is outside' }
        ]
      }
    ]
  },
  {
    id: 'dem-vowel-elision',
    category: 'demonstratives',
    title: 'The Obligatory Initial-Vowel Elision Rule',
    subtitle: 'Why placing a demonstrative before a noun strips the initial vowel without exception',
    formula: 'Demonstrative + Noun (Initial Vowel Dropped: u- -> 0, i- -> 0, a- -> 0)',
    explanation:
      'Whenever any demonstrative (Position 1, 2, or 3) is placed before a noun, the noun obligatorily drops its initial augment vowel: lo + umuntu -> lo muntu (NOT *lo umuntu*); leli + iphilisi -> leli philisi (NOT *leli iphilisi*); lesi + isifuba -> lesi sifuba; la + amaphilisi -> la maphilisi. Grammatically, the demonstrative contains the latent initial vowel and fully defines the noun, rendering the noun augment redundant. If the demonstrative is placed AFTER the noun, the noun retains its initial vowel: umuntu lo, iphilisi leli.',
    commonPitfall:
      'Retaining initial vowels when reading or writing medical directions (writing *"lo umntwana"* instead of *"lo mntwana"*). In spoken isiZulu, preserving the vowel creates an awkward glottal stop that disrupts clinical rapport.',
    rules: [
      'Pre-nominal demonstratives strip the following noun initial vowel in 100% of cases.',
      'Post-nominal demonstratives permit the noun to retain its initial vowel (umntwana lo).',
      'The elision applies identically across all three positions (lo muntu, lowo muntu, lowaya muntu).',
      'When prepositions (na-, nga-, ku-) precede the demonstrative, the elision remains in effect: nalo mntwana, ngale ndlela, kulelo gumbi.'
    ],
    examples: [
      {
        id: 'dem-elide-ex-1',
        type: 'clinical',
        isizulu: 'Nakekela lo mntwana ngokuqinisekisa ukuthi uphuza amanzi anele.',
        english: 'Care for this child by ensuring that he drinks sufficient water.',
        breakdown: [
          { chunk: 'Nakekela', gloss: 'care for / look after' },
          { chunk: 'lo mntwana', gloss: 'lo (Position 1) + umntwana (initial u- elided: "this child")' },
          { chunk: 'ngokuqinisekisa ukuthi', gloss: 'by making sure that' },
          { chunk: 'uphuza amanzi anele', gloss: 'he drinks enough water' }
        ]
      },
      {
        id: 'dem-elide-ex-2',
        type: 'triage',
        isizulu: 'Bheka lezi zilonda ezisezinyaweni zikagogo ngaphambi kokumvumela ahambe.',
        english: "Inspect these ulcers on grandmother's feet before allowing her to leave.",
        breakdown: [
          { chunk: 'Bheka', gloss: 'look at / inspect' },
          { chunk: 'lezi zilonda', gloss: 'lezi (Position 1 Class 10) + izilonda (initial i- elided: "these ulcers")' },
          { chunk: 'ezisezinyaweni zikagogo', gloss: 'which are on grandmother feet' },
          { chunk: 'ngaphambi kokumvumela ahambe', gloss: 'before permitting her to leave' }
        ]
      }
    ]
  },
  {
    id: 'dem-copulative-presenters',
    category: 'demonstratives',
    title: 'Copulative Demonstratives ("Here is / There is" — Nangu, Nasi)',
    subtitle: 'Presenting lab results, discharge scripts, and demonstrating anatomical features to patients',
    formula: 'Na- + Concord Stem -> nangu (Class 1), naba (Class 2), nali (Class 5), nanka (Class 6), nasi (Class 7), nazi (Class 10), nayi (Class 9)',
    explanation:
      'Copulative demonstratives (also termed demonstrative copulatives or presenters) translate to "here is / here are" (Position 1), "there is / there are near you" (Position 2: nango, naso), or "yonder is" (Position 3: nanguyaya, nasiya). Formed with the base na- fused with class markers, they are indispensable at the bedside when physically delivering items to patients: Nangu udokotela (Here is the doctor), Nasi isiphumo (Here is the result), Nanka amaphilisi akho (Here are your pills), Nazi izincwadi zokugoduka (Here are your discharge documents).',
    commonPitfall:
      'Confusing the associative preposition *na-* ("with/and") with the copulative demonstrative *nasi* ("here is"). Nasi is a complete predicative statement that requires no additional verb.',
    rules: [
      'Position 1 Presenters: nangu (Class 1), naba (Class 2), nali (Class 5), nanka (Class 6), nasi (Class 7), nayi (Class 9), nazi (Class 10).',
      'They function as full copulative predications: Nasi isifuba (Here is the chest / This is the chest).',
      'Commonly used when handing prescriptions, medication bottles, and discharge paperwork to the patient.',
      'Position 2 forms end in -o: nango (there he is), naso (there it is). Position 3 forms suffix -ya: nasiya (there it is yonder).'
    ],
    examples: [
      {
        id: 'dem-cop-ex-1',
        type: 'handover',
        isizulu: 'Nasi isitifiketi sakho sokugula kanye nencwadi eya kumqashi wakho.',
        english: 'Here is your sick certificate together with the letter to your employer.',
        breakdown: [
          { chunk: 'Nasi isitifiketi sakho', gloss: 'nasi (Class 7 presenter: "here is") + isitifiketi sakho ("your certificate")' },
          { chunk: 'sokugula', gloss: 'of illness ("sick note")' },
          { chunk: 'kanye nencwadi', gloss: 'together with the letter' },
          { chunk: 'eya kumqashi wakho', gloss: 'going to your employer' }
        ]
      },
      {
        id: 'dem-cop-ex-2',
        type: 'discharge',
        isizulu: 'Nanka amaphilisi akho womfutho; kumele uwaphuze njalo ekuseni.',
        english: 'Here are your blood pressure pills; you must take them every morning.',
        breakdown: [
          { chunk: 'Nanka amaphilisi akho', gloss: 'nanka (Class 6 presenter: "here are") + amaphilisi akho ("your pills")' },
          { chunk: 'womfutho', gloss: 'of pressure ("blood pressure")' },
          { chunk: 'kumele uwaphuze', gloss: 'you must take them' },
          { chunk: 'njalo ekuseni', gloss: 'every morning' }
        ]
      }
    ]
  }
];
