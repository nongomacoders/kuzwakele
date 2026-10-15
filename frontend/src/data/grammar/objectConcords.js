/**
 * Kuzwakele Grammar Reference - objectConcords.js
 * Comprehensive guide to isiZulu Object Concords (Izivumelwano Zikabagcwalisi),
 * definiteness marking, class-specific infixes, and the invariable reflexive formative -zi-.
 */

export const OBJECT_CONCORDS_SECTION = {
  id: 'object-concords',
  title: 'Object Concords (Object Infixes)',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Infix pronoun markers (-m-, -wa-, -li-, -ku-, -zi-) inserted before the verb root to denote specific direct objects, definite references, and reflexive actions.',
  previewHook: '-m- (him/her), -wa- (them/pills), -ku- (you), -zi- (self/reflexive)',
  description: 'Master the 5 core object concord rules: infix slot mechanics, definiteness and dual mention, Class 1 -m- vs monosyllabic -mu-, high-yield pharmacological and anatomical concords (-wa-, -li-, -bu-), and the invariable reflexive prefix -zi-.'
};

export const OBJECT_CONCORD_MATRIX = [
  {
    personClass: '1st Person Sing [Mina]',
    subjectConcord: 'ngi-',
    objectConcord: '-ngi-',
    nounTrigger: 'mina (me / myself)',
    placementFormula: 'SC + [Tense] + -ngi- + Root + -a',
    clinicalExample: 'udokotela ungisizile',
    functionDesc: 'Patient self-report to clinician ("the doctor helped me")'
  },
  {
    personClass: '2nd Person Sing [Wena]',
    subjectConcord: 'u-',
    objectConcord: '-ku-',
    nounTrigger: 'wena (you / patient)',
    placementFormula: 'SC + [Tense] + -ku- + Root + -a',
    clinicalExample: 'ngizokusiza / ngiyakubona',
    functionDesc: 'Addressing patient directly during exam ("I will help you")'
  },
  {
    personClass: 'Class 1/1a [u- / umu-]',
    subjectConcord: 'u-',
    objectConcord: '-m- (-mu- before monosyllable)',
    nounTrigger: 'udokotela / umntwana / umama',
    placementFormula: 'SC + [Tense] + -m- + Root + -a',
    clinicalExample: 'ngiyamazi udokotela / umuphe amanzi',
    functionDesc: 'Referring to third-party patient or clinician ("I know him/her")'
  },
  {
    personClass: 'Class 2/2a [aba- / o-]',
    subjectConcord: 'ba-',
    objectConcord: '-ba-',
    nounTrigger: 'abagulayo / abantwana / ogogo',
    placementFormula: 'SC + [Tense] + -ba- + Root + -a',
    clinicalExample: 'udokotela uyabasiza abagulayo',
    functionDesc: 'Plural human recipients or ward cohorts ("helps the sick")'
  },
  {
    personClass: 'Class 3 [um- / umu-]',
    subjectConcord: 'u-',
    objectConcord: '-wu-',
    nounTrigger: 'umuthi (medicine) / umzimba (body)',
    placementFormula: 'SC + [Tense] + -wu- + Root + -a',
    clinicalExample: 'ake uwuphuze umuthi',
    functionDesc: 'Liquid medicines, body systems ("please drink the medicine")'
  },
  {
    personClass: 'Class 5 [ili- / i-]',
    subjectConcord: 'li-',
    objectConcord: '-li-',
    nounTrigger: 'iphilisi (tablet) / iphaphu (lung)',
    placementFormula: 'SC + [Tense] + -li- + Root + -a',
    clinicalExample: 'udokotela uzolihlola iphaphu',
    functionDesc: 'Single pill, visceral organs ("will examine the lung")'
  },
  {
    personClass: 'Class 6 [ama-]',
    subjectConcord: 'a-',
    objectConcord: '-wa-',
    nounTrigger: 'amaphilisi (pills) / amaphaphu (lungs)',
    placementFormula: 'SC + [Tense] + -wa- + Root + -a',
    clinicalExample: 'uyawaphuza amaphilisi njalo?',
    functionDesc: 'High-frequency pharmacology, dual lungs ("do you take the pills?")'
  },
  {
    personClass: 'Class 7 [isi-]',
    subjectConcord: 'si-',
    objectConcord: '-si-',
    nounTrigger: 'isifuba (chest) / isifo (disease)',
    placementFormula: 'SC + [Tense] + -si- + Root + -a',
    clinicalExample: 'ake usibheke isifuba sakho',
    functionDesc: 'Thoracic exam, named pathology ("let us check the chest")'
  },
  {
    personClass: 'Class 10 [izi- / izin-]',
    subjectConcord: 'zi-',
    objectConcord: '-zi-',
    nounTrigger: 'izinyawo (feet) / izilonda (sores)',
    placementFormula: 'SC + [Tense] + -zi- + Root + -a',
    clinicalExample: 'udokotela uzozihlola izinyawo',
    functionDesc: 'Bilateral limb exam, ulcers, peripheral edema ("will check feet")'
  },
  {
    personClass: 'Class 14 [ubu-]',
    subjectConcord: 'bu-',
    objectConcord: '-bu-',
    nounTrigger: 'ubuhlungu (pain) / ubuthongo (sleep)',
    placementFormula: 'SC + [Tense] + -bu- + Root + -a',
    clinicalExample: 'usabuzwa ubuhlungu esifubeni?',
    functionDesc: 'Pain severity tracking ("do you still feel the pain?")'
  },
  {
    personClass: 'Reflexive [Universal -zi-]',
    subjectConcord: 'Any SC',
    objectConcord: '-zi-',
    nounTrigger: 'All classes (oneself / self)',
    placementFormula: 'SC + [Tense] + -zi- + Root + -a',
    clinicalExample: 'uzizwa kanjani? / ukuzisiza ekhaya',
    functionDesc: 'Subjective wellness, functional independence, self-harm'
  }
];

export const OBJECT_CONCORD_CHECKPOINTS = [
  {
    id: 'obj-check-1',
    challengeNumber: 1,
    prompt: 'Are you taking the pills regularly every morning?',
    targetConcept: 'Object Concord (-wa-) for Definite Medication Regimen',
    primaryAnswer: 'Uyawaphuza amaphilisi njalo ekuseni?',
    breakdown: [
      { chunk: 'U-ya-wa-phuz-a', gloss: 'u- (2nd person SC) + -ya- (present tense) + -wa- (Class 6 object concord: "them / the pills") + -phuza (drink/take) + -a ("are you taking them")' },
      { chunk: 'amaphilisi', gloss: 'Class 6 noun ("pills / tablets")' },
      { chunk: 'njalo ekuseni', gloss: 'adverbial phrase ("regularly every morning")' }
    ],
    ruleTip: "Inserting the object concord -wa- alongside the noun amaphilisi creates the 'dual-mention rule' marking definiteness ('THE prescribed pills' rather than just pills in general)."
  },
  {
    id: 'obj-check-2',
    challengeNumber: 2,
    prompt: 'The doctor will examine you and then explain the results.',
    targetConcept: '2nd Person Singular Object Concord (-ku-) + Subjunctive Consequent',
    primaryAnswer: 'Udokotela uzokuhlola bese ekuchazela imiphumela.',
    breakdown: [
      { chunk: 'Udokotela', gloss: 'Class 1a noun ("the doctor")' },
      { chunk: 'u-zo-ku-hlol-a', gloss: 'u- (Class 1 SC) + -zo- (future) + -ku- (2nd person object concord: "you") + -hlola (examine) + -a ("will examine you")' },
      { chunk: 'bese', gloss: 'consecutive conjunction ("and then")' },
      { chunk: 'e-ku-chaz-el-a', gloss: 'e- (participial SC) + -ku- (you) + -chazela (explain to applicative) + -a ("explains to you")' },
      { chunk: 'imiphumela', gloss: 'Class 4 plural noun ("the results")' }
    ],
    ruleTip: "The 2nd person singular object concord is -ku- ('you'), placed immediately before the root: uzokuhlola ('he will examine you') and ekuchazela ('explaining to you'). Do not confuse with Class 1 human object concord -m-."
  },
  {
    id: 'obj-check-3',
    challengeNumber: 3,
    prompt: 'How are you feeling yourself today, grandmother?',
    targetConcept: 'Universal Reflexive Infix (-zi-) for Subjective Wellness',
    primaryAnswer: 'Uzizwa kanjani namuhla, gogo?',
    breakdown: [
      { chunk: 'U-zi-zw-a', gloss: 'u- (2nd person SC) + -zi- (universal reflexive infix: "oneself") + -zwa (feel) + -a ("how do you feel yourself")' },
      { chunk: 'kanjani', gloss: 'interrogative adverb ("how")' },
      { chunk: 'namuhla', gloss: 'adverb of time ("today")' },
      { chunk: 'gogo', gloss: 'vocative kinship honorific ("grandmother")' }
    ],
    ruleTip: "The reflexive marker -zi- attaches directly before -zwa ('feel') to yield -zizwa ('feel oneself / subjective clinical wellness'). It never varies regardless of noun class or grammatical person."
  }
];

export const OBJECT_CONCORDS_RULES = [
  // ==========================================
  // CATEGORY 8: OBJECT CONCORDS (OBJECT INFIXES)
  // ==========================================
  {
    id: 'obj-infix-slot',
    category: 'object-concords',
    title: 'The Object Infix Slot & Pronoun Substitution',
    subtitle: 'Inserting the object concord immediately before the verb root to replace nouns',
    formula: 'Subject Concord + [Tense Marker] + Object Concord + Verb Root + Final Vowel',
    explanation:
      'Unlike subject concords which begin the verbal word, object concords are infixes placed strictly immediately preceding the verb root (after tense prefixes like -ya-, -zo-, -sa-, or be-). When a direct object is already known in conversation, the noun is dropped and the object concord stands in as an accusative pronoun.',
    commonPitfall:
      'Placing the object concord before tense markers (e.g. saying *"ngi-wa-yaphuzi"* instead of *"ngiyawaphuza"*). The object concord must directly touch the verb root.',
    rules: [
      'The object concord slot is strictly pre-radical: it directly precedes the verb root, regardless of tense prefixes.',
      'When replacing an established noun, the noun is omitted from the clause and the infix functions as an accusative pronoun.',
      'Unlike subject concords, an object concord is optional unless definiteness, emphasis, or topicalization is intended.',
      'The object concord cannot be separated from the verb root by temporal infixes (-sa-, -ka-, -ke-); tense and aspect precede the OC.'
    ],
    examples: [
      {
        id: 'obj-slot-ex-1',
        type: 'clinical',
        isizulu: 'Udokotela uzokuhlola egumbini lokuhlola ngemva kwemizuzu embalwa.',
        english: 'The doctor will examine you in the examination room after a few minutes.',
        breakdown: [
          { chunk: 'Udokotela', gloss: 'the doctor' },
          { chunk: 'u-zo-ku-hlol-a', gloss: 'u- (SC) + -zo- (future) + -ku- (object concord: "you") + -hlola (examine) + -a' },
          { chunk: 'egumbini lokuhlola', gloss: 'in the consultation room' },
          { chunk: 'ngemva kwemizuzu embalwa', gloss: 'after a few minutes' }
        ]
      },
      {
        id: 'obj-slot-ex-2',
        type: 'bedside',
        isizulu: 'Amaphilisi akho? Yebo dokotela, ngiyawaphuza njalo ngemva kokudla.',
        english: 'Your pills? Yes doctor, I take them regularly after meals.',
        breakdown: [
          { chunk: 'Amaphilisi akho?', gloss: 'your pills?' },
          { chunk: 'Yebo dokotela', gloss: 'yes doctor' },
          { chunk: 'ngi-ya-wa-phuz-a', gloss: 'ngi- (SC) + -ya- (present) + -wa- (Class 6 OC: "them") + -phuza (drink) + -a' },
          { chunk: 'njalo ngemva kokudla', gloss: 'regularly after eating' }
        ]
      }
    ]
  },
  {
    id: 'obj-definiteness-dual',
    category: 'object-concords',
    title: 'Definiteness & The Dual-Mention Rule',
    subtitle: 'How inserting an object concord turns "a pill" into "the specific pill"',
    formula: 'Without OC: General/Indefinite ("a / any") | With OC + Noun: Definite/Specific ("the / those")',
    explanation:
      'When both the object concord AND the noun object are present in the same clause, it expresses grammatical definiteness (equivalent to the English definite article "the") or marks the object as the established topic. In clinical history-taking, using the OC confirms that the patient is taking the specific prescribed regimen rather than random medication.',
    commonPitfall:
      'Assuming the object concord is redundant when the noun is stated. Saying "Ngifuna amaphilisi" means "I want some pills", whereas "Ngiyawafuna amaphilisi" means "I want the specific pills".',
    rules: [
      'Dual mention (OC + Noun in the same clause) signals definiteness, familiarity, or topicalization ("the / those specific").',
      'Verb without OC + noun = indefinite/non-specific reference (ngiphuza umuthi = "I drink medicine / I am taking some syrup").',
      'Verb with OC + noun = definite reference (ngiyawuphuza umuthi = "I am taking THE specific medicine prescribed").',
      'In treatment adherence verification, clinicians must use the OC to inquire about the exact therapeutic regimen.'
    ],
    examples: [
      {
        id: 'obj-def-ex-1',
        type: 'clinical',
        isizulu: 'Uyawaphuza amaphilisi owawanikwa esibhedlela ngenyanga edlule?',
        english: 'Are you taking the pills you were given at the hospital last month?',
        breakdown: [
          { chunk: 'U-ya-wa-phuz-a', gloss: 'u- (SC) + -ya- + -wa- (Class 6 OC: definite "the pills") + -phuza (take) + -a' },
          { chunk: 'amaphilisi', gloss: 'the pills (Class 6 noun)' },
          { chunk: 'owawanikwa esibhedlela', gloss: 'which you were given at the hospital' },
          { chunk: 'ngenyanga edlule', gloss: 'last month' }
        ]
      },
      {
        id: 'obj-def-ex-2',
        type: 'triage',
        isizulu: 'Uyasizwa lesi sihlaba esibukhali lapho udonsa umoya?',
        english: 'Do you feel this specific sharp stabbing pain when you breathe in?',
        breakdown: [
          { chunk: 'U-ya-si-zw-a', gloss: 'u- (SC) + -ya- + -si- (Class 7 OC: definite "it") + -zwa (feel) + -a' },
          { chunk: 'lesi sihlaba esibukhali', gloss: 'this sharp stabbing pain (Class 7 noun)' },
          { chunk: 'lapho udonsa umoya', gloss: 'when you pull breath / inhale' }
        ]
      }
    ]
  },
  {
    id: 'obj-class1-m-mu',
    category: 'object-concords',
    title: 'Class 1 Object Concord (-m- vs. Monosyllabic -mu-)',
    subtitle: 'Phonological shifts when referencing patients, children, and clinicians',
    formula: 'Before polysyllabic root: -m- | Before monosyllabic root (-dla, -pha): -mu-',
    explanation:
      'Class 1/1a (singular human nouns: umntwana, udokotela, umama) uses -m- before standard verb roots: ngiyamcela ("I request him/her"), udokotela uyamhlola ("the doctor examines him/her"). However, before monosyllabic verb stems, the vowel is preserved as -mu-: Ake umuphe amaphilisi ("Please give him/her the pills", from -pha). 2nd person singular ("you") uses -ku-: Ngizokusiza ("I will help you").',
    commonPitfall:
      'Confusing 2nd person singular object concord -ku- with Class 1 human object concord -m-. Saying "Ngizokubona udokotela" means "I will see you, the doctor", whereas "Ngizombona udokotela" means "I will see him/her, the doctor".',
    rules: [
      'Class 1/1a uses -m- directly preceding polysyllabic roots: ngiyamthanda, uyamazi, siyambiza.',
      'Before monosyllabic roots (-pha = give, -dla = eat), Class 1 OC retains the vowel as -mu-: umuphe, ngizomudla.',
      '2nd person singular object concord is -ku- (ngiyakusiza = "I help you"), never to be confused with Class 1 -m-.',
      'When the vowel following Class 1 -m- is an initial vowel root (-elapha, -azi), -m- fuses directly: ngiyamazi ("I know him/her"), uyamelapha ("he treats him/her").'
    ],
    examples: [
      {
        id: 'obj-c1-ex-1',
        type: 'clinical',
        isizulu: 'Umhlengikazi uyamnakekela umntwana egumbini lezingane ezigulayo.',
        english: 'The nurse is caring for the child in the paediatric ward.',
        breakdown: [
          { chunk: 'Umhlengikazi', gloss: 'the nurse (Class 1)' },
          { chunk: 'u-ya-m-nakekel-a', gloss: 'u- (SC) + -ya- + -m- (Class 1 OC: "him/her") + -nakekela (care for) + -a' },
          { chunk: 'umntwana', gloss: 'the child (Class 1)' },
          { chunk: 'egumbini lezingane ezigulayo', gloss: 'in the ward of sick children' }
        ]
      },
      {
        id: 'obj-c1-ex-2',
        type: 'bedside',
        isizulu: 'Ake umuphe amaphilisi anamanzi ngokushesha ukuze wehlise umkhuhlane.',
        english: 'Please give him/her the pills with water immediately so as to reduce the fever.',
        breakdown: [
          { chunk: 'Ake', gloss: 'polite hortative' },
          { chunk: 'u-mu-ph-e', gloss: 'u- (SC) + -mu- (Class 1 OC before monosyllabic root -pha) + -e (subjunctive)' },
          { chunk: 'amaphilisi anamanzi', gloss: 'pills with water' },
          { chunk: 'ngokushesha', gloss: 'immediately' },
          { chunk: 'ukuze wehlise umkhuhlane', gloss: 'so that you lower the fever' }
        ]
      }
    ]
  },
  {
    id: 'obj-clinical-concords',
    category: 'object-concords',
    title: 'Essential Clinical Object Concords (-wa-, -li-, -bu-, -zi-)',
    subtitle: 'Rapid reference for medications, bodily organs, and localized pain',
    formula: 'amaphilisi -> -wa- | iphilisi/iphaphu -> -li- | ubuhlungu -> -bu- | izinyawo -> -zi-',
    explanation:
      'Direct mapping of high-frequency medical nouns to their object concords: Class 6 amaphilisi (tablets/pills) -> -wa- (Ake uwaphuze = Please take them); Class 5 iphilisi (single tablet) / iphaphu (lung) -> -li- (Sililalele iphaphu = We are listening to the lung); Class 14 ubuhlungu (pain) -> -bu- (Usabuzwa? = Do you still feel it?); Class 10 izinyawo (feet) / izilonda (sores) -> -zi- (Ngizozibheka = I will check them); Class 7 isifuba (chest) -> -si- (Udokotela uyasihlola = The doctor is examining it).',
    commonPitfall:
      'Defaulting to -li- or -wa- for all body parts. Always align the object concord with the specific noun class of the organ (e.g. isifuba -> -si-, not *-li-).',
    rules: [
      'Class 6 (amaphilisi, amaphaphu): -wa- (kumele uwaphuze = "you must take them").',
      'Class 5 (iphilisi, iphaphu, ithambo): -li- (ngililalele iphaphu = "I listened to the lung").',
      'Class 14 (ubuhlungu): -bu- (ngisabuzwa ubuhlungu = "I still feel the pain").',
      'Class 10 (izinyawo, izinso, izilonda): -zi- (szozihlola izinso = "we will examine the kidneys").',
      'Class 7 (isifuba, isibindi, isilonda): -si- (udokotela uyasihlola isibindi = "the doctor is examining the liver").'
    ],
    examples: [
      {
        id: 'obj-clin-ex-1',
        type: 'cardiology',
        isizulu: 'Ubuhlungu besifuba... ngisabuzwa kakhulu lapho ngihamba amabanga amade.',
        english: 'The chest pain... I still feel it very much when I walk long distances.',
        breakdown: [
          { chunk: 'Ubuhlungu besifuba', gloss: 'the chest pain (Class 14)' },
          { chunk: 'ngi-sa-bu-zw-a', gloss: 'ngi- (SC) + -sa- (still) + -bu- (Class 14 OC: "it") + -zwa (feel) + -a' },
          { chunk: 'kakhulu', gloss: 'severely / intensely' },
          { chunk: 'lapho ngihamba amabanga amade', gloss: 'when I walk long distances' }
        ]
      },
      {
        id: 'obj-clin-ex-2',
        type: 'pharmacology',
        isizulu: 'Amaphilisi womfutho wegazi kumele uwaphuze nsuku zonke ngaphandle kokweqa.',
        english: 'Blood pressure pills you must take every day without skipping.',
        breakdown: [
          { chunk: 'Amaphilisi womfutho wegazi', gloss: 'blood pressure pills (Class 6)' },
          { chunk: 'kumele u-wa-phuz-e', gloss: 'kumele (obligation) + u- (SC) + -wa- (Class 6 OC: "them") + -phuza + -e (subjunctive)' },
          { chunk: 'nsuku zonke', gloss: 'every day' },
          { chunk: 'ngaphandle kokweqa', gloss: 'without skipping' }
        ]
      }
    ]
  },
  {
    id: 'obj-reflexive-zi',
    category: 'object-concords',
    title: "The Invariable Reflexive Prefix -zi- ('Oneself / Self')",
    subtitle: 'Assessing subjective status, self-care ability, and accidental self-injury',
    formula: 'Subject Concord + [Tense Marker] + -zi- + Verb Root + Final Vowel',
    explanation:
      'The reflexive formative -zi- occupies the object concord slot for ALL noun classes and persons without variation. It indicates that the subject acts upon itself: -zwa (feel) -> -zizwa (feel oneself -> subjective wellness: Uzizwa kanjani? = "How are you feeling?"); -limaza (injure) -> -zilimaza (injure oneself / self-harm); -siza (help) -> -zisiza (help oneself / independence with ADLs); -vocavoca -> -zivocavoca (exercise oneself).',
    commonPitfall:
      'Confusing the reflexive prefix -zi- with the Class 8/10 plural object concord -zi- (izinyawo). The reflexive -zi- can be used with singular 1st person (ngiyazizwa = "I feel myself").',
    rules: [
      'The reflexive morpheme -zi- is invariable across all noun classes, singular, and plural.',
      'Occupies the exact same syntactic slot as an object concord, directly before the verb root.',
      '-zizwa is the primary medical idiom for subjective systemic well-being ("How do you feel?").',
      '-zisiza evaluates activities of daily living (ADLs) and functional independence in rehabilitation.',
      '-zilimaza is critical in psychiatry and trauma intake to assess accidental injury vs intentional self-harm.'
    ],
    examples: [
      {
        id: 'obj-refl-ex-1',
        type: 'clinical',
        isizulu: 'Uzizwa ungcono yini emva kokuthatha umuthi wokwehlisa umfutho wegazi?',
        english: 'Do you feel yourself better after taking the blood pressure medication?',
        breakdown: [
          { chunk: 'U-zi-zw-a', gloss: 'u- (2nd person SC) + -zi- (reflexive) + -zwa (feel: "feel yourself")' },
          { chunk: 'ungcono yini', gloss: 'are you better' },
          { chunk: 'emva kokuthatha umuthi', gloss: 'after taking the medicine' },
          { chunk: 'wokwehlisa umfutho wegazi', gloss: 'to lower blood pressure' }
        ]
      },
      {
        id: 'obj-refl-ex-2',
        type: 'functional',
        isizulu: 'Uyakwazi yini ukuzisiza ekhaya lapho ugeza noma udinga usizo lomndeni?',
        english: 'Are you able to help yourself at home when bathing, or do you need family assistance?',
        breakdown: [
          { chunk: 'Uyakwazi yini', gloss: 'are you able' },
          { chunk: 'uku-zi-siz-a', gloss: 'uku- (infinitive) + -zi- (reflexive) + -siza (help: "to help yourself")' },
          { chunk: 'ekhaya lapho ugeza', gloss: 'at home when you bathe' },
          { chunk: 'noma udinga usizo lomndeni', gloss: 'or do you need family help' }
        ]
      }
    ]
  }
];
