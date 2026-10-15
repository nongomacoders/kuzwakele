/**
 * Kuzwakele Grammar Reference - presentIndicative.js
 * Comprehensive guide to the Present Indicative Tense (Inkathi Yamanje) in clinical isiZulu,
 * covering the affirmative long form -ya- (ngiyagula), obligatory -ya- drop before objects or adverbs
 * (ngiphuza umuthi), habitual frequency (-vame uku-), and review of systems present syntax.
 */

export const PRESENT_INDICATIVE_SECTION = {
  id: 'present-indicative',
  title: 'The Present Indicative Tense',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'The affirmative present long form -ya- (ngiyagula), obligatory -ya- drop before objects or adverbs (ngiphuza umuthi), habitual frequency (-vame uku-), and review of systems present syntax.',
  previewHook: 'ngiyaphuza vs ngiphuza amaphilisi, ngiyagula vs ngigula kakhulu',
  description: 'Master the 5 core present tense rules: the affirmative long form -ya- for clause-final emphasis, the obligatory -ya- drop before objects and locatives, continuous vs habitual present markers, inserting object concords in the present tense, and clinical review of systems formulations.'
};

export const PRESENT_INDICATIVE_MATRIX = [
  {
    verbStemMeaning: '-gula [Be sick]',
    longFormYa: 'ngiyagula',
    shortFormComplement: 'ngigula kakhulu',
    withObjectConcord: 'ngiyamgula (N/A)',
    clinicalSyntaxRule: 'Terminal affirmative emphasis'
  },
  {
    verbStemMeaning: '-phuza [Drink/Take]',
    longFormYa: 'ngiyaphuza',
    shortFormComplement: 'ngiphuza amaphilisi',
    withObjectConcord: 'ngiyawaphuza / ngiwaphuza manje',
    clinicalSyntaxRule: 'Mandatory drop before direct object'
  },
  {
    verbStemMeaning: '-funa [Seek/Need]',
    longFormYa: 'ngiyafuna',
    shortFormComplement: 'ngifuna udokotela',
    withObjectConcord: 'ngiyamfuna',
    clinicalSyntaxRule: 'Object complement syntax'
  },
  {
    verbStemMeaning: '-zwa [Feel/Sense]',
    longFormYa: 'ngiyazwa',
    shortFormComplement: 'ngizwa ubuhlungu',
    withObjectConcord: 'ngiyabuzwa',
    clinicalSyntaxRule: 'Sensory symptom reporting'
  },
  {
    verbStemMeaning: '-hlola [Examine]',
    longFormYa: 'siyahlola',
    shortFormComplement: 'sihlola isifuba',
    withObjectConcord: 'ngiyasihlola / sisihlola kahle',
    clinicalSyntaxRule: 'Bedside organ examination'
  },
  {
    verbStemMeaning: '-buhlungu [Hurt/Pain - copulative]',
    longFormYa: 'kuyabuhlungu',
    shortFormComplement: 'kubuhlungu lapha',
    withObjectConcord: 'kuyasizwisa',
    clinicalSyntaxRule: 'Localized pain description'
  },
  {
    verbStemMeaning: '-khwehlela [Cough]',
    longFormYa: 'uyakhwehlela',
    shortFormComplement: 'ukhwehlela igazi',
    withObjectConcord: 'ngiyakukhwehlela',
    clinicalSyntaxRule: 'Hemoptysis symptom elicitation'
  },
  {
    verbStemMeaning: '-phefumula [Breathe]',
    longFormYa: 'ngiyaphefumula',
    shortFormComplement: 'ngiphefumula kanzima',
    withObjectConcord: 'ngiyawuphefumula',
    clinicalSyntaxRule: 'Dyspnea description'
  }
];

export const PRESENT_INDICATIVE_CHECKPOINTS = [
  {
    id: 'chk-pres-1',
    challengeNumber: 1,
    category: 'present-indicative',
    targetConcept: 'Mandatory -ya- Drop Before Object',
    prompt: 'I take high blood pressure tablets every morning.',
    primaryAnswer: 'Ngiphuza amaphilisi omfutho wegazi njalo ekuseni.',
    ruleTip: 'When a direct object (amaphilisi) or time adverb follows the verb, the affirmative present tense infix -ya- must be dropped. Saying *Ngiyaphuza amaphilisi is a severe grammatical error in isiZulu.',
    breakdown: [
      { chunk: 'Ngi-phuz-a', gloss: 'ngi- (1st pers SC) + -phuza (drink/take: short present form without -ya-)' },
      { chunk: 'amaphilisi', gloss: 'Class 6 plural noun ("tablets / pills")' },
      { chunk: 'omfutho wegazi', gloss: 'possessive phrase ("of high blood pressure")' },
      { chunk: 'njalo ekuseni', gloss: 'adverbial frequency ("every morning")' }
    ]
  },
  {
    id: 'chk-pres-2',
    challengeNumber: 2,
    category: 'present-indicative',
    targetConcept: 'Long Form -ya- for Intransitive / Emphatic Presentation',
    prompt: 'Yes doctor, I am truly sick and I am shivering.',
    primaryAnswer: 'Yebo dokotela, ngiyagula futhi ngiyaqhaqhazela.',
    ruleTip: 'When present verbs have no following object complement, or carry emphatic confirmation, the long form with infix -ya- (ngiyagula, ngiyaqhaqhazela) is mandatory.',
    breakdown: [
      { chunk: 'Yebo dokotela', gloss: 'affirmative vocative ("Yes doctor")' },
      { chunk: 'ngi-ya-gul-a', gloss: 'ngi- (1st pers SC) + -ya- (long present infix) + -gula (be sick)' },
      { chunk: 'futhi', gloss: 'conjunction ("and / furthermore")' },
      { chunk: 'ngi-ya-qhaqhazel-a', gloss: 'ngi- (1st pers SC) + -ya- (long present infix) + -qhaqhazela (shiver / tremble)' }
    ]
  },
  {
    id: 'chk-pres-3',
    challengeNumber: 3,
    category: 'present-indicative',
    targetConcept: 'Present Review of Systems with Adverbial Qualifier',
    prompt: 'I breathe with great difficulty when I lie down on the bed.',
    primaryAnswer: 'Ngiphefumula kanzima kakhulu lapho ngilala phansi embhedeni.',
    ruleTip: 'Follow-on adverbial qualifiers (kanzima kakhulu) force the drop of -ya- (ngiphefumula, not *ngiyaphefumula kanzima).',
    breakdown: [
      { chunk: 'Ngi-phefumul-a', gloss: 'ngi- (1st pers SC) + -phefumula (breathe: short form before adverb)' },
      { chunk: 'kanzima kakhulu', gloss: 'adverbial phrase ("with great difficulty / heavily")' },
      { chunk: 'lapho ngilala phansi', gloss: 'temporal relator lapho ("when") + ngilala phansi ("I lie down")' },
      { chunk: 'embhedeni', gloss: 'locative noun ("on the bed")' }
    ]
  }
];

export const PRESENT_INDICATIVE_RULES = [
  {
    id: 'pres-long-form-ya',
    category: 'present-indicative',
    title: 'Present Long Form with -ya- (Affirmative & Clause-Final)',
    badge: 'Affirmative Long Form',
    subtitle: 'Using -ya- when no complement follows or for emphatic validation',
    formula: 'Subject Concord + -ya- + Verb Root + -a',
    explanation:
      'The long present tense with infix -ya- is used in two primary clinical contexts: (1) When the verb stands alone at the end of a clause with no following object, adverb, or complement (Ngiyagula = "I am sick"; Udokotela uyeza = "The doctor is coming"); and (2) To express emphatic truth or confirmation in response to doubts (Ngiyaphila = "I AM well / I do live"; Ngiyayiphuza imithi = "I DO take the medicines").',
    commonPitfall:
      'Retaining -ya- when an object follows (*Ngiyaphuza umuthi is ungrammatical; must be Ngiphuza umuthi). Only use -ya- with an object if you are emphatically inserting an object concord (*Ngiyawuphuza umuthi*).',
    rules: [
      'Clause-final position: Mandatory -ya- (Ngiyagula / Uyaphila / Siyahlola)',
      'No following adjunct or object: Mandatory -ya- (Umntwana uyakhala)',
      'Emphatic validation: Affirms patient compliance or symptom reality',
      'Monosyllabic verbs: ngiyadla (I eat), ngiyaza (I come), ngiyazwa (I feel)'
    ],
    examples: [
      {
        id: 'pres-long-ex-1',
        type: 'clinical',
        isizulu: 'Yebo dokotela, ngiyagula kakhulu namuhla.',
        english: 'Yes doctor, I am sick today (emphasis on current reality).',
        breakdown: [
          { chunk: 'ngi-ya-gul-a', gloss: 'ngi- (SC) + -ya- (long present infix) + -gula (sick)' }
        ]
      },
      {
        id: 'pres-long-ex-2',
        type: 'clinical',
        isizulu: 'Udokotela oyingcweti uyeza maduze ukuzokubona.',
        english: 'The specialist doctor is coming shortly to see you.',
        breakdown: [
          { chunk: 'u-ye-z-a', gloss: 'u- (Class 1 SC) + -ya- (contracts to -ye- before vowel verb -za) + -za (come)' }
        ]
      }
    ]
  },
  {
    id: 'pres-short-drop-ya',
    category: 'present-indicative',
    title: 'Obligatory -ya- Drop Before Objects & Adverbials',
    badge: 'Short Present Form',
    subtitle: 'Strictly omitting -ya- when complements, adverbs, or objects follow',
    formula: 'Subject Concord + Verb Root + -a + Object / Adverb / Locative',
    explanation:
      'Whenever the action transitions forward into a direct object, locative noun, descriptive adverb, or prepositional phrase, the infix -ya- MUST be dropped. The sentence focus shifts from the verb itself to the following complement. For example: Ngifuna udokotela ("I want a doctor", not *Ngiyafuna udokotela); Ngiphuza amanzi ("I drink water"); Ngilala esibhedlela ("I sleep at the hospital").',
    commonPitfall:
      'English speakers frequently translate "I am drinking water" literally with -ya- (*Ngiyaphuza amanzi). This is a hallmark grammatical mistake in clinical Zulu. Remember: Object follows = Drop -ya-.',
    rules: [
      'Direct object following: Drop -ya- (Ngiphuza amaphilisi)',
      'Adverb of manner following: Drop -ya- (Ngiphefumula kanzima)',
      'Locative phrase following: Drop -ya- (Ngihlala eThekwini)',
      'Time phrase following: Drop -ya- (Ngivuka ekuseni)'
    ],
    examples: [
      {
        id: 'pres-short-ex-1',
        type: 'clinical',
        isizulu: 'Ngifuna usizo lwezokwelapha ngokushesha ngoba isifuba sibuhlungu.',
        english: 'I seek medical help immediately because my chest is painful.',
        breakdown: [
          { chunk: 'Ngi-fun-a usizo', gloss: 'ngi- (SC) + -funa (seek: short form) + usizo (help)' },
          { chunk: 'lwezokwelapha', gloss: 'of medical care' }
        ]
      },
      {
        id: 'pres-short-ex-2',
        type: 'clinical',
        isizulu: 'Isiguli sizwa ubuhlungu obukhulu lapho sihamba.',
        english: 'The patient feels great pain when walking.',
        breakdown: [
          { chunk: 'si-zw-a ubuhlungu', gloss: 'si- (Class 7 SC) + -zwa (feel: short form) + ubuhlungu (pain)' }
        ]
      }
    ]
  },
  {
    id: 'pres-habitual-aspect',
    category: 'present-indicative',
    title: 'Habitual Present Aspect with -vame uku- / njalo',
    badge: 'Habitual & Recurrent',
    subtitle: 'Formulating ongoing baseline behaviors and frequent complaints',
    formula: 'SC + -vame + Infinitive (uku-) | SC + Root + -a + njalo / kaningi',
    explanation:
      'Clinical history-taking routinely explores habitual behaviors (alcohol, tobacco, diet, chronic pain). isiZulu uses the auxiliary stem -vame ("tend to / usually") followed by an infinitive, or appends frequency adverbs such as njalo ("always / regularly"), kaningi ("frequently"), or ngezikhathi ezithile ("at certain times").',
    commonPitfall:
      'Confusing acute present symptoms with chronic habitual tendencies. Using -vame uku- clarifies that the complaint is episodic or longstanding rather than a sudden first-time emergency.',
    rules: [
      'Tendency: SC + -vame + uku- + Root (Ngivame ukukhwehlela: "I tend to cough")',
      'Continuous regularity: Root + njalo (Ngiphuza amaphilisi njalo: "I take pills regularly")',
      'Intermittent: ngezikhathi ezithile (Kuba buhlungu ngezikhathi ezithile)',
      'Caregiver observations: Umntwana uvame ukushisa ebusuku ("The child tends to run fever at night")'
    ],
    examples: [
      {
        id: 'pres-hab-ex-1',
        type: 'clinical',
        isizulu: 'Ngivame ukuba nesiyezi esikhulu njalo ekuseni lapho ngivuka.',
        english: 'I tend to have severe dizziness every morning when I wake up.',
        breakdown: [
          { chunk: 'Ngi-vam-e ukuba', gloss: 'ngi- (SC) + -vame (tend to) + ukuba (to have/be)' },
          { chunk: 'nesiyezi esikhulu', gloss: 'with great dizziness' },
          { chunk: 'njalo ekuseni', gloss: 'every morning' }
        ]
      },
      {
        id: 'pres-hab-ex-2',
        type: 'clinical',
        isizulu: 'Ingabe umntwana uvame ukuhlanza ngemuva kokuncela ubisi?',
        english: 'Does the child usually vomit after nursing milk?',
        breakdown: [
          { chunk: 'u-vam-e ukuhlanza', gloss: 'u- (Class 1 SC) + -vame (usually) + ukuhlanza (to vomit)' },
          { chunk: 'ngemuva kokuncela', gloss: 'after suckling/nursing' }
        ]
      }
    ]
  },
  {
    id: 'pres-object-concords',
    category: 'present-indicative',
    title: 'Object Concords in the Present Tense & Focus Shifts',
    badge: 'Object Concord Placement',
    subtitle: 'Positioning object infixes directly before the verb stem in the present tense',
    formula: 'SC + (ya) + Object Concord + Verb Root + -a',
    explanation:
      'When referencing a specific, known object in the present tense, the Object Concord (OC) slots directly before the verb root. If the speaker wishes to emphasize the completion of the action, -ya- is retained: Ngiyawaphuza amaphilisi ("I DO take the pills!"). If focus is placed on a following qualifier, -ya- drops: Ngiwaphuzela ukusinda ("I take them in order to survive").',
    commonPitfall:
      'Placing the object concord before -ya- (*Ngi-wa-ya-phuza is impossible). The slot order is strictly: SC + (-ya-) + OC + Root + -a.',
    rules: [
      'Slot order: SC + (-ya-) + OC + Root + -a (Ngi-ya-m-bona udokotela)',
      'With emphatic -ya-: Retains -ya- when validating adherence (Ngiyawaphuza)',
      'Without -ya-: Short form when followed by purpose or time (Ngiwaphuzisa amanzi)',
      'Reflexive prefix -zi-: Treats -zi- identically to an object concord (Ngiyazizwa)'
    ],
    examples: [
      {
        id: 'pres-oc-ex-1',
        type: 'clinical',
        isizulu: 'Ngiyawaphuza amaphilisi ami nsuku zonke njengokusho kukadokotela.',
        english: 'I DO take my pills every day as instructed by the doctor.',
        breakdown: [
          { chunk: 'Ngi-ya-wa-phuz-a', gloss: 'ngi- (SC) + -ya- (emphatic) + -wa- (Class 6 OC) + -phuza (drink)' },
          { chunk: 'amaphilisi ami', gloss: 'my pills' }
        ]
      },
      {
        id: 'pres-oc-ex-2',
        type: 'clinical',
        isizulu: 'Udokotela uyamlalela umntwana ngesithesosikopu esifubeni.',
        english: 'The doctor is listening to the child with a stethoscope on the chest.',
        breakdown: [
          { chunk: 'u-ya-m-lalel-a', gloss: 'u- (Class 1 SC) + -ya- + -m- (Class 1 OC for umntwana) + -lalela (listen)' }
        ]
      }
    ]
  },
  {
    id: 'pres-clinical-ros',
    category: 'present-indicative',
    title: 'Present Review of Systems (ROS) & Physical Complaints',
    badge: 'Clinical Review of Systems',
    subtitle: 'Standard clinical present-tense formulas for head-to-toe inquiry',
    formula: 'Patient: Ngizwa / Ngiphethwe / Kukhona | Clinician: Ingabe unomkhuhlane / uyaquleka?',
    explanation:
      'In rural KwaZulu-Natal clinics, the review of systems is conducted using streamlined present indicative constructions. Clinicians must recognize how patients express somatic dysfunction: (1) Sensory: Ngizwa ubuhlungu ("I feel pain"); (2) Passive affliction: Ngiphethwe yikhanda ("I am held by a headache"); (3) Dynamic state: Inhliziyo iyagxuma ("The heart flutters/beats fast"); (4) Stative copulative: Amehlo abomvu ("The eyes are red").',
    commonPitfall:
      'Translating "My head hurts" as *Ikhanda lami libuhlungu. While understood, native isiZulu speakers virtually always say Ngiphethwe yikhanda (literally, "I am seized/held by a headache").',
    rules: [
      'Neurological/Headache: Ngiphethwe yikhanda / Nginesiyezi',
      'Cardiorespiratory: Ngiphefumula kanzima / Inhliziyo iyagxuma',
      'Gastrointestinal: Isisu sibuhlungu / Ngiyaphalaza',
      'Musculoskeletal: Amalunga ayaduma / Imisipha iqaqamba'
    ],
    examples: [
      {
        id: 'pres-ros-ex-1',
        type: 'clinical',
        isizulu: 'Ngizwa ukushisa okukhulu esifubeni lapho ngiqeda ukudla.',
        english: 'I feel a great burning in the chest when I finish eating (heartburn/GERD).',
        breakdown: [
          { chunk: 'Ngi-zw-a ukushisa', gloss: 'ngi- (SC) + -zwa (feel: short form) + ukushisa (heat/burning)' },
          { chunk: 'esifubeni', gloss: 'in the chest' }
        ]
      },
      {
        id: 'pres-ros-ex-2',
        type: 'clinical',
        isizulu: 'Ingabe uyakwazi ukugwinya ukudla okuqinile ngaphandle kobuhlungu?',
        english: 'Are you able to swallow solid food without pain?',
        breakdown: [
          { chunk: 'u-ya-kwaz-i ukugwinya', gloss: 'u- (2nd pers SC) + -ya- + -kwazi (able) + ukugwinya (to swallow)' },
          { chunk: 'ukudla okuqinile', gloss: 'solid food' },
          { chunk: 'ngaphandle kobuhlungu', gloss: 'without pain' }
        ]
      }
    ]
  }
];
