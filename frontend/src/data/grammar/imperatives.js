/**
 * Kuzwakele Grammar Reference - imperatives.js
 * Comprehensive guide to isiZulu Imperatives, Prohibitions & Obligative -bo- (Imiyalo Nezivimbelo),
 * covering standard and monosyllabic imperatives (yi-), plural group commands with -ni,
 * safety prohibitions with musa / musani, the mandatory future command infix -bo-,
 * and clinical bedside procedural instructions.
 */

export const IMPERATIVES_SECTION = {
  id: 'imperatives-prohibitions',
  title: 'Imperatives, Prohibitions & Obligative -bo-',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Direct commands (Hlala!, Yidla!), plural listener commands with -ni (Hlalani!), emergency prohibitions (Musa ukunyakaza!), and strict chronic adherence directives with the -bo- infix (Ubophuza njalo).',
  previewHook: 'Hlala phansi!, Musa ukunyakaza!, Ubophuza amaphilisi njalo',
  description: 'Master the 5 core command and prohibition rules: standard and monosyllabic imperatives (yi-), plural group commands with -ni, safety prohibitions with musa / musani, the mandatory future command infix -bo-, and clinical bedside procedural instructions.'
};

export const IMPERATIVES_MATRIX = [
  {
    verbType: 'Regular Polysyllabic Verb',
    baseVerb: '-hlala (sit) / -lala (lie down)',
    singularCommand: 'Hlala phansi! / Lala lapha!',
    pluralCommand: 'Hlalani phansi! / Lalani lapha!',
    clinicalApplication: 'Bedside positioning, consultation seating, waiting room flow'
  },
  {
    verbType: 'Monosyllabic Food Stem (-dla)',
    baseVerb: '-dla (eat / feed)',
    singularCommand: 'Yidla ukudla! (Eat food!)',
    pluralCommand: 'Yidlani ukudla! (Eat, everyone!)',
    clinicalApplication: 'Pediatric nutritional counseling, post-op oral intake resumption'
  },
  {
    verbType: 'Monosyllabic Sensation Stem (-zwa / -za)',
    baseVerb: '-zwa (listen/hear) / -za (come)',
    singularCommand: 'Yizwa kahle! / Yiza lapha!',
    pluralCommand: 'Yizwani kahle! / Yizani lapha!',
    clinicalApplication: 'Auscultation instructions, summoning patient into consult room'
  },
  {
    verbType: 'Vowel-Initial Verb Stem',
    baseVerb: '-enza (do/make) / -oma (stand/dry)',
    singularCommand: 'Yenza lokhu! (Do this!)',
    pluralCommand: 'Yenzani lokhu! (Do this, all!)',
    clinicalApplication: 'Physiotherapy demonstration, respiratory spirometry maneuvers'
  },
  {
    verbType: 'Communal Group Caregiver Command',
    baseVerb: '-bheka (look / watch) / -linda (wait)',
    singularCommand: 'Bheka umntwana! / Linda lapha!',
    pluralCommand: 'Bhekani umntwana! / Lindani lapha!',
    clinicalApplication: 'Family monitoring of febrile child, outpatient waiting etiquette'
  },
  {
    verbType: 'Emergency Singular Prohibition (Musa)',
    baseVerb: '-nyakaza (move / shift)',
    singularCommand: 'Musa ukunyakaza! (Do not move!)',
    pluralCommand: 'Musani ukunyakaza! (Do not move!)',
    clinicalApplication: 'Venipuncture, suturing, spinal tap, lumbar puncture, X-ray'
  },
  {
    verbType: 'Reassurance Prohibition (Musa ukwesaba)',
    baseVerb: '-khathazeka (worry) / -saba (fear)',
    singularCommand: 'Musa ukukhathazeka! / Musa ukwesaba!',
    pluralCommand: 'Musani ukukhathazeka! / Musani ukwesaba!',
    clinicalApplication: 'Anxiety de-escalation, maternal reassurance during active labor'
  },
  {
    verbType: 'Binding Future Adherence (-bo-)',
    baseVerb: '-phuza (drink) / -bhema (smoke)',
    singularCommand: 'Ubophuza njalo! / Ungabobhema!',
    pluralCommand: 'Nibophuza njalo! / Ningabobhema!',
    clinicalApplication: 'Chronic ARV/TB adherence mandate, strict smoking cessation directive'
  }
];

export const IMPERATIVES_CHECKPOINTS = [
  {
    id: 'imp-check-1',
    challengeNumber: 1,
    prompt: 'Do not move your arm while I insert the needle.',
    targetConcept: 'Emergency Procedural Prohibition (Musa ukunyakazisa)',
    primaryAnswer: 'Musa ukunyakazisa ingalo ngenkathi ngifaka inaliti.',
    breakdown: [
      { chunk: 'Musa', gloss: 'negative imperative auxiliary command ("do not / cease")' },
      { chunk: 'ukunyakazisa', gloss: 'infinitive causative of -nyakaza ("to move / cause to move")' },
      { chunk: 'ingalo', gloss: 'Class 9 noun ("the arm")' },
      { chunk: 'ngenkathi', gloss: 'temporal conjunction ("while / during the time that")' },
      { chunk: 'ngifaka inaliti', gloss: 'I insert the needle (inaliti = needle)' }
    ],
    ruleTip: "Direct procedural safety prohibitions use Musa + Infinitive (uku-). The causative form ukunyakazisa means 'to move your arm' (causing the arm to move)."
  },
  {
    id: 'imp-check-2',
    challengeNumber: 2,
    prompt: 'You must always drink this medicine every day without stopping.',
    targetConcept: 'Mandatory Future Obligative Infix (-bo-)',
    primaryAnswer: 'Ubophuza lo muthi nsuku zonke ngaphandle kokuyeka.',
    breakdown: [
      { chunk: 'U-bo-phuz-a', gloss: 'u- (2nd person SC) + -bo- (mandatory future command infix: "must always / without fail") + -phuza (drink) + -a ("you must take")' },
      { chunk: 'lo muthi', gloss: 'this medicine (Class 3 Position 1)' },
      { chunk: 'nsuku zonke', gloss: 'every day / daily' },
      { chunk: 'ngaphandle kokuyeka', gloss: 'without stopping / non-stop' }
    ],
    ruleTip: "The infix -bo- (u-bo-phuza) carries far greater moral and medical urgency than the subjunctive (-e). It issues a binding chronic prescription mandate ('you must take it without fail')."
  },
  {
    id: 'imp-check-3',
    challengeNumber: 3,
    prompt: 'Please sit down on the chairs and wait for the doctor, all of you.',
    targetConcept: 'Plural Communal Imperative with Suffix -ni',
    primaryAnswer: 'Hlalani phansi ezihlalweni nilinde udokotela.',
    breakdown: [
      { chunk: 'Hlal-a-ni phansi', gloss: '-hlala (sit) + -ni (plural listener suffix: "sit down, all of you") + phansi (down)' },
      { chunk: 'ezihlalweni', gloss: 'locative of izihlalo ("on the chairs")' },
      { chunk: 'ni-lind-e', gloss: 'ni- (2nd person pl SC) + -linda (wait) + -e (subjunctive consecutive: "and wait")' },
      { chunk: 'udokotela', gloss: 'the doctor' }
    ],
    ruleTip: "When addressing multiple family members or waiting room cohorts, imperatives suffix -ni (Hlala -> Hlalani). Subsequent chained actions take the plural subjunctive: nilinde ('and wait')."
  }
];

export const IMPERATIVES_RULES = [
  // ==========================================
  // CATEGORY 13: IMPERATIVES, PROHIBITIONS & -BO-
  // ==========================================
  {
    id: 'imp-direct-monosyllabic',
    category: 'imperatives-prohibitions',
    title: 'Standard Direct Imperatives & Monosyllabic Verbs (yi- / y-)',
    subtitle: 'Issuing physical examination directions to individual patients',
    formula: 'Polysyllabic: Plain Root + -a | Monosyllabic: yi- + Root + -a | Vowel Verbs: y- + Root + -a',
    explanation:
      'To issue a direct singular command to a patient ("Sit!", "Open!", "Cough!"), regular polysyllabic verbs simply use the bare verb stem ending in -a without any subject concord: Hlala! (Sit!), Vula! (Open!), Khwehlela! (Cough!). However, isiZulu phonology requires a minimum of two syllables per phonological word. Therefore, monosyllabic verb stems prepend the stabilizer yi-: -dla -> Yidla! (Eat!), -zwa -> Yizwa! (Listen!), -misa -> Yima! (Stand/Wait!). Stems starting with a vowel prepend y-: -enza -> Yenza! (Do!), -osa -> Yosa! (Roast!).',
    commonPitfall:
      'Attempting to use bare monosyllabic stems as commands (saying *"Dla!"* or *"Zwa!"*). Without the stabilizing prefix *yi-* (*Yidla!*, *Yizwa!*), the utterance is phonologically ungrammatical.',
    rules: [
      'Polysyllabic verbs take the bare stem: Vula umlomo! (Open your mouth!), Lala phansi! (Lie down!).',
      'Monosyllabic verbs prepend yi-: Yidla! (Eat!), Yizwa! (Listen!), Yiza lapha! (Come here!).',
      'Vowel verbs prepend y-: Yenza lokhu! (Do this!), Yazi lokhu! (Know this!).',
      'Softened commands: Prefix ake or use the subjunctive for polite requests: Ake uvule umlomo (Please open your mouth).'
    ],
    examples: [
      {
        id: 'imp-dir-ex-1',
        type: 'exam',
        isizulu: 'Vula umlomo kakhulu bese ukhipha ulimi ngaphandle.',
        english: 'Open your mouth wide and then stick your tongue out.',
        breakdown: [
          { chunk: 'Vula umlomo', gloss: 'open the mouth (bare stem imperative)' },
          { chunk: 'kakhulu', gloss: 'wide / very' },
          { chunk: 'bese ukhipha ulimi', gloss: 'and then stick out the tongue' },
          { chunk: 'ngaphandle', gloss: 'outside' }
        ]
      },
      {
        id: 'imp-dir-ex-2',
        type: 'pediatric',
        isizulu: 'Yidla la maphilisi amnandi mntanami, azokusiza uphole.',
        english: 'Eat these sweet pills my child, they will help you heal.',
        breakdown: [
          { chunk: 'Yidla', gloss: 'yi- + -dla (monosyllabic imperative: "Eat!")' },
          { chunk: 'la maphilisi amnandi', gloss: 'these sweet pills' },
          { chunk: 'mntanami', gloss: 'vocative: my child' },
          { chunk: 'azokusiza uphole', gloss: 'they will help you recover' }
        ]
      }
    ]
  },
  {
    id: 'imp-plural-ni',
    category: 'imperatives-prohibitions',
    title: 'Plural Patient & Caregiver Commands with -ni',
    subtitle: 'Directing waiting room cohorts, families, and multiple attendants',
    formula: 'Singular Imperative + -ni -> Hlalani!, Vulanani!, Yidlwani / Yidlani!',
    explanation:
      'When addressing more than one person—such as parents with an infant, waiting room crowds, or multiple relatives in family conferences—the imperative suffixes -ni: Hlala! -> Hlalani! (Sit down, all of you!), Lindani! (Wait, everyone!), Yizwani! (Listen, all of you!), Yenzani! (Do this, all of you!). In polite rural KZN discourse, the plural command is also frequently employed as an honorific respectful imperative when addressing an elderly solitary patient.',
    commonPitfall:
      'Forgetting the plural marker when addressing both a mother and grandmother in paediatric triage. Using *hlalani* honors the collective family caregiving unit.',
    rules: [
      'Plural imperative formula: Verb Stem + -ni.',
      'Monosyllabic plural: Yidlani! (Eat, everyone!), Yizwani! (Listen, everyone!).',
      'Vowel verbs plural: Yenzani! (Do, everyone!).',
      'Chained subsequent verbs use the 2nd person plural subjunctive: Hlalani nilinde udokotela (Sit and wait for the doctor).'
    ],
    examples: [
      {
        id: 'imp-pl-ex-1',
        type: 'triage',
        isizulu: 'Ngenani phakathi nomntwana bese nihlala kulezi zihlalo.',
        english: 'Enter inside with the child and then sit on these chairs, all of you.',
        breakdown: [
          { chunk: 'Ngenani phakathi', gloss: 'enter inside, all of you (-ngena + -ni)' },
          { chunk: 'nomntwana', gloss: 'with the child' },
          { chunk: 'bese nihlala', gloss: 'and then sit (plural subjunctive)' },
          { chunk: 'kulezi zihlalo', gloss: 'on these chairs' }
        ]
      },
      {
        id: 'imp-pl-ex-2',
        type: 'discharge',
        isizulu: 'Lalelani ngokucophelela yonke imiyalelo yomuthi ngaphambi kokugoduka.',
        english: 'Listen carefully to all medication instructions before going home.',
        breakdown: [
          { chunk: 'Lalelani', gloss: '-lalela + -ni (Listen, all of you!)' },
          { chunk: 'ngokucophelela', gloss: 'carefully / with diligence' },
          { chunk: 'yonke imiyalelo yomuthi', gloss: 'all instructions of the medicine' },
          { chunk: 'ngaphambi kokugoduka', gloss: 'before discharging home' }
        ]
      }
    ]
  },
  {
    id: 'imp-prohibitions-musa',
    category: 'imperatives-prohibitions',
    title: 'Prohibitions & Safety Advisories with Musa / Musani',
    subtitle: 'Preventing dangerous patient movement during invasive procedures',
    formula: 'Singular: Musa + Infinitive (uku-) | Plural: Musani + Infinitive (uku-)',
    explanation:
      'During sterile invasive procedures (inserting IV lines, lumbar punctures, wound debridement, cervical screening, dental extraction), patient stillness is vital for safety. Negative commands ("Do not!") are formed using the defective auxiliary verb Musa (singular) or Musani (plural) followed by the infinitive: Musa ukunyakaza! ("Do not move!"), Musa ukwesaba! ("Do not fear!"), Musani ukubangela umsindo! ("Do not make noise!"). It acts as a clear, authoritative procedural stop signal.',
    commonPitfall:
      'Attempting to form negative commands by prefixing *a-* to the imperative (e.g. saying *"ahamba!"*). Negative imperatives cannot be formed this way; use *Musa ukuhamba!* or the negative subjunctive *Ungahambi!*.',
    rules: [
      'Singular prohibition: Musa + Infinitive (uku-): Musa ukusukuma! (Do not stand up!).',
      'Plural prohibition: Musani + Infinitive: Musani ukukhala! (Do not cry, everyone!).',
      'Alternative negative subjunctive: Unganyazi! (Do not move!), Ningangeni! (Do not enter!).',
      'Vowel verb fusion: Musa + ukwesaba -> Musa ukwesaba (Do not be afraid).'
    ],
    examples: [
      {
        id: 'imp-musa-ex-1',
        type: 'procedure',
        isizulu: 'Musa ukunyakaza nhlobo ngenkathi ngithunga lesi silonda ebusweni.',
        english: 'Do not move at all while I am suturing this laceration on your face.',
        breakdown: [
          { chunk: 'Musa ukunyakaza nhlobo', gloss: 'do not move at all (musa + infinitive)' },
          { chunk: 'ngenkathi ngithunga', gloss: 'while I am suturing' },
          { chunk: 'lesi silonda', gloss: 'this wound / laceration' },
          { chunk: 'ebusweni', gloss: 'on the face' }
        ]
      },
      {
        id: 'imp-musa-ex-2',
        type: 'safety',
        isizulu: 'Musa ukuthinta inaliti ngoba idinga ukuhlala ihlanzekile.',
        english: 'Do not touch the needle because it needs to remain sterile/clean.',
        breakdown: [
          { chunk: 'Musa ukuthinta inaliti', gloss: 'do not touch the needle' },
          { chunk: 'ngoba idinga', gloss: 'because it needs / requires' },
          { chunk: 'ukuhlala ihlanzekile', gloss: 'to stay sterile/clean' }
        ]
      }
    ]
  },
  {
    id: 'imp-obligative-bo',
    category: 'imperatives-prohibitions',
    title: 'The Mandatory / Obligative Future Infix -bo- ("Must Always / Must Never")',
    subtitle: 'Creating binding chronic treatment mandates and strict behavioral prohibitions',
    formula: 'Positive: SC + -bo- + Root + -a | Negative: SC + -nga- + -bo- + Root + -a',
    explanation:
      'The obligative formative -bo- represents the strongest command structure in isiZulu. Unlike the polite subjunctive (-e) or immediate imperative, -bo- issues a permanent, binding future directive ("you must always do this without fail / under no circumstances should you ever"). Formed with Subject Concord + -bo- + Verb Root + -a: Ubophuza amaphilisi njalo ekuseni ("You must take the pills every morning without fail"). In the negative, it forms absolute prohibitions: Ungabobhema ugwayi ("You must never smoke cigarettes under any circumstances").',
    commonPitfall:
      'Using -bo- for casual immediate tasks. -bo- is reserved for serious, enduring medical mandates (chronic antiretroviral therapy, insulin timing, post-op precautions).',
    rules: [
      'Positive formula: SC + -bo- + Verb Root + -a: Ubophumula (You must rest).',
      'Negative formula: SC + -nga- + -bo- + Verb Root + -a: Ungabophuza utshwala (You must never drink alcohol).',
      'Plural mandate: Nibophuza amaphilisi (All of you must take the pills without fail).',
      'Creates a non-negotiable medical mandate for chronic disease management.'
    ],
    examples: [
      {
        id: 'imp-bo-ex-1',
        type: 'adherence',
        isizulu: 'Ubophuza lo muthi we-TB nsuku zonke ngaphandle kokweqa ngisho nosuku olulodwa.',
        english: 'You must take this TB medicine every single day without skipping even one day.',
        breakdown: [
          { chunk: 'Ubophuza', gloss: 'u- (SC) + -bo- (mandatory future) + -phuza + -a' },
          { chunk: 'lo muthi we-TB', gloss: 'this TB medicine' },
          { chunk: 'nsuku zonke', gloss: 'every day' },
          { chunk: 'ngaphandle kokweqa', gloss: 'without skipping' },
          { chunk: 'ngisho nosuku olulodwa', gloss: 'even a single day' }
        ]
      },
      {
        id: 'imp-bo-ex-2',
        type: 'prohibition',
        isizulu: 'Ungaboyeka ukuphuza amaphilisi womfutho ngisho noma uzizwa uphilile.',
        english: 'You must never stop taking blood pressure pills even if you feel completely healthy.',
        breakdown: [
          { chunk: 'Ungaboyeka', gloss: 'u- + -nga- + -bo- + -yeka (you must never stop)' },
          { chunk: 'ukuphuza amaphilisi womfutho', gloss: 'taking blood pressure pills' },
          { chunk: 'ngisho noma uzizwa uphilile', gloss: 'even if you feel healthy' }
        ]
      }
    ]
  },
  {
    id: 'imp-clinical-procedural',
    category: 'imperatives-prohibitions',
    title: 'Bedside Procedural Commands & Examination Etiquette',
    subtitle: 'Balancing precise physical examination commands with polite hortative softeners',
    formula: 'Hortative Ake + Subjunctive (-e) vs Direct Procedural Verb (Bheka, Phefumula, Gwinya)',
    explanation:
      'During physical examination, clinicians constantly issue rapid instructions: Phefumula kakhulu! ("Breathe deeply!"), Khipha umoya! ("Exhale!"), Bamba umoya! ("Hold your breath!"), Gwinya amathe! ("Swallow saliva!"), Phakamisa ingalo! ("Raise your arm!"), Cindezela lapha! ("Press here!"). To maintain warm bedside rapport, experienced clinicians frequently preface these with the hortative particle Ake: Ake uphefumule kakhulu ("Please breathe deeply"), Ake ugwinye amathe ("Please swallow saliva").',
    commonPitfall:
      'Shouting bare imperatives repeatedly without polite softeners, which can intimidate nervous or elderly rural patients. Weave *Ake...* into sensitive exam moments.',
    rules: [
      'Cardiorespiratory exam: Phefumula ngomlomo (Breathe through the mouth), Bamba umoya (Hold breath).',
      'ENT & Neurological: Vula umlomo (Open mouth), Khipha ulimi (Stick out tongue), Bheka umunwe wami (Look at my finger).',
      'Abdominal & Palpation: Khulula isisu (Relax abdomen), Musa ukubamba isisu (Do not guard/tense the belly).',
      'Polite softener: Ake + SC + Verb + -e: Ake ukhulule umzimba (Please relax your body).'
    ],
    examples: [
      {
        id: 'imp-proc-ex-1',
        type: 'auscultation',
        isizulu: 'Phefumula ngomlomo kakhulu... khipha umoya... yima kancane.',
        english: 'Breathe deeply through your mouth... exhale... hold for a moment.',
        breakdown: [
          { chunk: 'Phefumula ngomlomo kakhulu', gloss: 'breathe through the mouth deeply' },
          { chunk: 'khipha umoya', gloss: 'exhale / release air' },
          { chunk: 'yima kancane', gloss: 'wait / pause a little (monosyllabic -ma -> yima)' }
        ]
      },
      {
        id: 'imp-proc-ex-2',
        type: 'palpation',
        isizulu: 'Ake ukhulule imisipha yesisu ukuze ngikwazi ukuhloba kahle isibindi.',
        english: 'Please relax the abdominal muscles so that I can properly examine the liver.',
        breakdown: [
          { chunk: 'Ake ukhulule', gloss: 'please relax (hortative + subjunctive)' },
          { chunk: 'imisipha yesisu', gloss: 'the muscles of the abdomen' },
          { chunk: 'ukuze ngikwazi', gloss: 'so that I am able' },
          { chunk: 'ukuhlola kahle isibindi', gloss: 'to properly examine the liver' }
        ]
      }
    ]
  }
];
