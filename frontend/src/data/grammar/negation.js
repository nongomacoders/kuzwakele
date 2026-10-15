/**
 * Kuzwakele Grammar Reference - negation.js
 * Comprehensive guide to the Complete Negation Systems of isiZulu (Izindlela Zokuphika),
 * covering present indicative negation (a-...-i) with Class 1 aka-, the mandatory negative
 * object preprefix vowel drop, main clause vs subordinate medial negation (-nga-...-i),
 * future negation (-zu-/-zuku-), and Class 15 infinitive negation (ukunga-) for pre-op fasting.
 */

export const NEGATION_SECTION = {
  id: 'negation',
  title: 'The Complete Negation Systems',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Main clause initial a-...-i vs subordinate medial -nga-...-i, the mandatory negative object preprefix vowel drop (angizwa buhlungu), future negation (-zu-/-zuku-), and infinitive fasting (ukungadli).',
  previewHook: 'angiphuzi (present), angizwa buhlungu (vowel drop), ukungadli (NPO), akazukugula',
  description: 'Master the 5 core negation rules: standard present indicative negation with Class 1 aka-, the mandatory negative object preprefix vowel drop, main clause vs subordinate medial negation (-nga-...-i), future tense negation (-zu-/-zuku-), and Class 15 infinitive negation (ukunga-) for pre-operative fasting and lifestyle counseling.'
};

export const NEGATION_MATRIX = [
  {
    tenseMood: 'Present Indicative (Main Clause)',
    positiveFormula: 'SC + Root + -a',
    negativeFormula: 'a- + SC + Root + -i',
    negativeExample: 'angiphuzi (I do not drink) / akaguli (he is not sick)',
    vowelShift: '-a -> -i (final vowel)',
    clinicalUtility: 'Active symptom denial, medication refusal, baseline status verification'
  },
  {
    tenseMood: 'Dependent / Subordinate (Uma / Ukuze)',
    positiveFormula: 'SC + Root + -a / -e',
    negativeFormula: 'SC + -nga- + Root + -i',
    negativeExample: 'uma engaphuzi (if he does not drink) / ukuze ungafi',
    vowelShift: '-a/-e -> -i (medial -nga-)',
    clinicalUtility: 'Conditional risk counseling, treatment adherence contingency warnings'
  },
  {
    tenseMood: 'Immediate Past Continuous (Recent)',
    positiveFormula: 'bengi- + Root + -a',
    negativeFormula: 'bengi- + -nga- + Root + -i',
    negativeExample: 'bengingezwa buhlungu (I was not feeling pain)',
    vowelShift: '-a -> -i (medial -nge-/-nga-)',
    clinicalUtility: 'Prior symptom absence, evolution of acute episodes before arrival'
  },
  {
    tenseMood: 'Remote Simple / Completed Past',
    positiveFormula: 'SC + -a- + Root + -a',
    negativeFormula: 'a- + SC + Root + -anga',
    negativeExample: 'angiwaphuzanga amaphilisi (I did not take the pills)',
    vowelShift: '-a -> -anga',
    clinicalUtility: 'Past non-compliance investigation, trauma history denial, previous admissions'
  },
  {
    tenseMood: 'Near Future (Intention / Adverse Prognosis)',
    positiveFormula: 'SC + -zo- + Root + -a',
    negativeFormula: 'a- + SC + -zu(ku)- + Root + -a',
    negativeExample: 'awuzukudala buhlungu (it will not cause pain)',
    vowelShift: 'Retains final -a (-zo- -> -zu-/-zuku-)',
    clinicalUtility: 'Procedural pain reassurance, calming anxiety over anticipated side-effects'
  },
  {
    tenseMood: 'Stative Aspect (Present State)',
    positiveFormula: 'SC + Root + -ile / -ele',
    negativeFormula: 'a- + SC + Root + -ile / -ele',
    negativeExample: 'azivuvukile (they are not swollen) / akalele (he is not asleep)',
    vowelShift: 'Retains stative suffix (no -i shift)',
    clinicalUtility: 'Objective negative physical findings (edema, consciousness level)'
  },
  {
    tenseMood: 'Class 15 Infinitive (Verbal Noun / Gerund)',
    positiveFormula: 'uku- + Root + -a',
    negativeFormula: 'uku- + -nga- + Root + -i',
    negativeExample: 'ukungadli (fasting / NPO) / ukungaphuzi utshwala (abstinence)',
    vowelShift: '-a -> -i (medial -nga-)',
    clinicalUtility: 'Pre-operative fasting orders (nil per os), substance cessation counseling'
  },
  {
    tenseMood: 'Associative Copulative ("To have")',
    positiveFormula: 'SC + na- + Noun (coalesced)',
    negativeFormula: 'a- + SC + na- + Noun [no initial vowel]',
    negativeExample: 'anginamali / akanamaphilisi (he has no pills left)',
    vowelShift: 'Drops initial noun vowel (no coalescence)',
    clinicalUtility: 'Comorbidity denial, resource barriers, prescription stock-out discovery'
  }
];

export const NEGATION_CHECKPOINTS = [
  {
    id: 'neg-check-1',
    challengeNumber: 1,
    prompt: 'I do not feel any pain in the chest today.',
    targetConcept: 'Mandatory Negative Object Preprefix Vowel Drop (ubuhlungu -> buhlungu)',
    primaryAnswer: 'Angizwa buhlungu esifubeni namhlanje.',
    breakdown: [
      { chunk: 'Angizwa', gloss: 'a- (negative prefix) + ngi- (1st sing SC) + -zwa (feel) + -a -> -i (present negative: "I do not feel")' },
      { chunk: 'buhlungu', gloss: 'ubuhlungu (Class 14 pain) with initial preprefix u- dropped after negative verb ("any pain / no pain at all")' },
      { chunk: 'esifubeni', gloss: 'locative noun ("in the chest")' },
      { chunk: 'namhlanje', gloss: 'adverb ("today")' }
    ],
    ruleTip: 'Whenever a noun is the direct object of a negative verb, it obligatorily drops its initial preprefix vowel (u-buhlungu -> buhlungu, i-mali -> mali). Saying *Angizwa ubuhlungu* is grammatically incorrect in isiZulu.'
  },
  {
    id: 'neg-check-2',
    challengeNumber: 2,
    prompt: 'Fasting (not eating any food) is required before the surgical operation tomorrow.',
    targetConcept: 'Class 15 Infinitive Negation (ukunga-) for Pre-operative NPO Orders',
    primaryAnswer: 'Ukungadli ukudla kuyadingeka ngaphambi kokuhlinzwa kusasa.',
    breakdown: [
      { chunk: 'Ukungadli', gloss: 'uku- (Class 15 infinitive) + -nga- (negative infix) + -dla (eat) + -i (negative vowel: "not eating / fasting")' },
      { chunk: 'ukudla', gloss: 'Class 15 noun ("food")' },
      { chunk: 'kuyadingeka', gloss: 'ku- (Class 15 SC) + -ya- + -dingeka (stative neuter: "is required / necessary")' },
      { chunk: 'ngaphambi', gloss: 'adverbial formative ("before")' },
      { chunk: 'kokuhlinzwa', gloss: 'ka- + ukuhlinzwa (Class 15 passive: "of surgical operation")' },
      { chunk: 'kusasa', gloss: 'adverb ("tomorrow")' }
    ],
    ruleTip: 'Infinitive gerunds are negated with -nga-...-i inserted directly into the prefix: uku-dla -> uku-nga-dl-i ("fasting / not eating"). This is the gold-standard medical phrasing for nil per os (NPO) instructions.'
  },
  {
    id: 'neg-check-3',
    challengeNumber: 3,
    prompt: 'If the patient does not drink water, his body will dry up.',
    targetConcept: 'Subordinate Medial Negation (-nga-...-i) after Condition uma',
    primaryAnswer: 'Uma isiguli singawaphuzi amanzi, umzimba uzoma.',
    breakdown: [
      { chunk: 'Uma', gloss: 'conditional conjunction ("if")' },
      { chunk: 'isiguli', gloss: 'Class 7 noun ("the patient")' },
      { chunk: 'singawaphuzi', gloss: 'si- (Class 7 SC) + -nga- (subordinate negative infix) + -wa- (Class 6 OC for amanzi) + -phuza (drink) + -i (negative terminal vowel: "does not drink it")' },
      { chunk: 'amanzi', gloss: 'Class 6 noun ("water")' },
      { chunk: 'umzimba', gloss: 'Class 3 noun ("the body")' },
      { chunk: 'uzoma', gloss: 'u- (Class 3 SC) + -zo- + -oma (stative: "will dehydrate / dry up")' }
    ],
    ruleTip: 'After conditional conjunctions like *uma*, the verb shifts to the participial mood and CANNOT take the main clause negative prefix *a-*. Instead, it inserts medial *-nga-* and ends in *-i*: *singaphuzi*, *engaphuzi*.'
  }
];

export const NEGATION_RULES = [
  // ==========================================
  // CATEGORY 16: THE COMPLETE NEGATION SYSTEMS
  // ==========================================
  {
    id: 'neg-present-indicative',
    category: 'negation',
    title: 'Present Indicative Negation & The Class 1 aka- Shift',
    subtitle: 'Main clause symptom denial, medication refusal, and baseline negative findings',
    formula: 'a- + Subject Concord + Verb Root + -i  (Class 1: aka- + Root + -i)',
    explanation:
      'Standard main clause present negation operates with a bracket formula: the negative prefix a- is placed before the subject concord, and the final vowel of the verb root shifts from -a to -i. Crucially, the Class 1/1a subject concord u- shifts to ka-, producing the universal medical negative prefix aka-: akaguli ("he/she is not ill"); akaphuzi amaphilisi ("she is not taking pills"). Monosyllabic verbs retain their root vowel before -i: akadli ("he does not eat"); akezwa ("he does not feel/hear").',
    commonPitfall:
      'Saying *"awuguli"* when referring to a patient ("he is not sick"). *Awuguli* means "YOU are not sick". For a third person ("he/she"), the concord shifts to *ka-*: *akaguli*.',
    rules: [
      'Bracket formula: a- + SC + Verb Root + -i (angisebenzi = I do not work; asiboni = we do not see).',
      'Class 1/1a human singular shifts from u- to ka-: akaguli (he is not sick); akakhulumi (she does not speak).',
      'Class 2 plural: abaguli (they are not sick; a- + ba- -> aba-).',
      'Monosyllabic verbs drop the augment prefix in negative: akadli (not *akayidli* unless OC is present).'
    ],
    examples: [
      {
        id: 'neg-pres-ex-1',
        type: 'denial',
        isizulu: 'Isiguli asikhonondi ngokushisa kwesifuba namhlanje.',
        english: 'The patient does not complain of chest burning today.',
        breakdown: [
          { chunk: 'Isiguli', gloss: 'Class 7 noun ("the patient")' },
          { chunk: 'asikhonondi', gloss: 'a- + si- (Class 7 SC) + -khononda + -i ("does not complain")' },
          { chunk: 'ngokushisa kwesifuba', gloss: 'about burning of the chest' },
          { chunk: 'namhlanje', gloss: 'today' }
        ]
      },
      {
        id: 'neg-pres-ex-2',
        type: 'adherence',
        isizulu: 'Ugogo akawagwinyi amaphilisi omfutho wegazi ekuseni.',
        english: 'Grandmother does not swallow the blood pressure pills in the morning.',
        breakdown: [
          { chunk: 'Ugogo', gloss: 'Class 1a noun ("grandmother")' },
          { chunk: 'akawagwinyi', gloss: 'a- + ka- (Class 1 SC) + -wa- (Class 6 OC) + -gwinya + -i ("she does not swallow them")' },
          { chunk: 'amaphilisi omfutho', gloss: 'pills of blood pressure' },
          { chunk: 'ekuseni', gloss: 'in the morning (locative)' }
        ]
      }
    ]
  },
  {
    id: 'neg-vowel-drop-objects',
    category: 'negation',
    title: 'The Mandatory Negative Object Preprefix Vowel Drop',
    subtitle: 'Expressing absolute non-existence, complete absence, and categorical denial',
    formula: 'Negative Verb + Noun [without initial vowel] (Angizwa + ubuhlungu -> Angizwa buhlungu)',
    explanation:
      'One of the most characteristic phonological rules of isiZulu clinical grammar is the mandatory preprefix vowel drop. Whenever a noun serves as the direct object of a negated verb, its initial augment vowel (a-, i-, u-) is obligatorily dropped. This vowel stripping shifts the meaning from a specific object to categorical non-existence ("no / not any / at all"): Ngizwa ubuhlungu ("I feel pain") -> Angizwa buhlungu ("I do not feel ANY pain at all"); Unamaphilisi ("He has pills") -> Akanamaphilisi ("He has NO pills whatsoever"). Retaining the vowel after a negative verb is a telltale foreign error.',
    commonPitfall:
      'Retaining the initial noun vowel after a negated verb (*"Angizwa ubuhlungu"* or *"Angifuni umuthi"*). The initial vowel must drop: *Angizwa buhlungu* ("I feel no pain"); *Angifuni muthi* ("I want no medicine").',
    rules: [
      'Categorical rule: Negative Verb + Noun minus initial augment vowel.',
      'Class 14: ubuhlungu -> buhlungu (Angizwa buhlungu = I feel no pain).',
      'Class 9: inkinga -> nkinga (Anginankinga = I have no problem).',
      'Class 3: umuthi -> muthi (Angiboni muthi = I see no medication); umlilo -> mlilo.',
      'Class 6: amaphilisi -> maphilisi (Akanamaphilisi = He has no pills).'
    ],
    examples: [
      {
        id: 'neg-vd-ex-1',
        type: 'examination',
        isizulu: 'Angizwa buhlungu lapho ucindezela khona esiswini.',
        english: 'I do not feel any pain where you are pressing on the stomach.',
        breakdown: [
          { chunk: 'Angizwa', gloss: 'I do not feel (a- + ngi- + -zwa + -i)' },
          { chunk: 'buhlungu', gloss: 'any pain (ubuhlungu with initial u- dropped)' },
          { chunk: 'lapho ucindezela khona', gloss: 'where you press' },
          { chunk: 'esiswini', gloss: 'on the stomach (locative)' }
        ]
      },
      {
        id: 'neg-vd-ex-2',
        type: 'pharmacy',
        isizulu: 'Umama uthi akanamali yokugibela itekisi eya esibhedlela.',
        english: 'The mother says she has no money for taxi fare to go to the hospital.',
        breakdown: [
          { chunk: 'Umama uthi', gloss: 'the mother says' },
          { chunk: 'akanamali', gloss: 'a- + ka- + na- + imali (with i- dropped -> akanamali: "has no money")' },
          { chunk: 'yokugibela itekisi', gloss: 'to board a taxi' },
          { chunk: 'eya esibhedlela', gloss: 'heading to the hospital' }
        ]
      }
    ]
  },
  {
    id: 'neg-main-vs-subordinate',
    category: 'negation',
    title: 'Main Clause vs. Subordinate Medial Negation (-nga-...-i)',
    subtitle: 'Conjunctive triggers, conditional warnings (uma), and purpose clauses (ukuze)',
    formula: 'Subordinate: Subject Concord + -nga- + Verb Root + -i  (No initial a-)',
    explanation:
      'A fundamental structural divide in isiZulu syntax separates main clause negation from subordinate/dependent clause negation. Main statements use initial a-...-i (angiphuzi = "I do not drink"). Dependent clauses—triggered by conjunctions such as uma ("if / when"), ukuze ("so that"), ngoba ("because"), or participial circumstances—strictly forbid external a-. Instead, they insert the medial infix -nga- directly before the verb stem and terminate in -i: uma engaphuzi ("if he does not drink", not *uma akaphuzi*); ukuze ungafi ("so that you do not die", not *ukuze awufi*).',
    commonPitfall:
      'Using the main clause negative *a-* inside a subordinate clause (*"uma akaguli"* instead of *uma engaguli*). Conjunctions like *uma*, *ukuze*, and *ngoba* strictly require the medial *-nga-...-i* construction.',
    rules: [
      'Subordinate formula: SC + -nga- + Verb Root + -i.',
      'Initial a- is strictly banned in dependent/participial clauses.',
      'Class 1/1a subject concord shifts to e-: uma engaguli (if he is not ill).',
      'Purpose clause negation: ukuze ungatholi igciwane (in order that you do not contract the virus).'
    ],
    examples: [
      {
        id: 'neg-sub-ex-1',
        type: 'adherence',
        isizulu: 'Uma ungasiphuzi lesi sidakamizwa njalo, isifo sizobuya ngamandla.',
        english: 'If you do not take this medication regularly, the disease will return aggressively.',
        breakdown: [
          { chunk: 'Uma', gloss: 'if / whenever' },
          { chunk: 'ungasiphuzi', gloss: 'u- + -nga- + -si- (Class 7 OC) + -phuza + -i ("you do not take it")' },
          { chunk: 'lesi sidakamizwa', gloss: 'this medicine/drug (demonstrative)' },
          { chunk: 'njalo', gloss: 'regularly / always' },
          { chunk: 'isifo sizobuya ngamandla', gloss: 'the disease will return with strength' }
        ]
      },
      {
        id: 'neg-sub-ex-2',
        type: 'infection-control',
        isizulu: 'Geza izandla ngensipho ukuze ungangeni ezilondeni zegciwane.',
        english: 'Wash your hands with soap so that you do not introduce bacterial infection into the sores.',
        breakdown: [
          { chunk: 'Geza izandla', gloss: 'wash hands! (imperative)' },
          { chunk: 'ngensipho', gloss: 'with soap (nga- + insipho)' },
          { chunk: 'ukuze ungangeni', gloss: 'so that you do not enter (ukuze + u- + -nga- + -ngena + -i)' },
          { chunk: 'ezilondeni zegciwane', gloss: 'into sores of infection' }
        ]
      }
    ]
  },
  {
    id: 'neg-future-systems',
    category: 'negation',
    title: 'Future Tense Negation Systems (-zu- / -zuku-)',
    subtitle: 'Reassuring patients against procedural pain and severe drug side-effects',
    formula: 'a- + Subject Concord + -zu(ku)- + Verb Root + -a  (Retains terminal -a)',
    explanation:
      'To negate future actions, intentions, or prognoses ("will not / shall not"), isiZulu replaces the future infix -zo- with -zu- (or the full uncontracted form -zuku-), preceded by the negative prefix a-. Crucially, unlike the present negative which forces the final vowel to -i, the future negative strictly retains the final vowel -a: Lo jovo awuzukulimaza ("This injection will not injure / hurt"); Awuzukuzwa buhlungu ("You will not feel any pain"). For Class 1: akazukugula ("he will not fall ill").',
    commonPitfall:
      'Changing the final vowel to *-i* in the future negative (*"awuzukuzwi"*). Future negative verbs NEVER end in *-i*; they strictly retain the terminal *-a*: *awuzukuzwa*.',
    rules: [
      'Contracted future negative formula: a- + SC + -zu- + Verb Root + -a.',
      'Full future negative formula: a- + SC + -zuku- + Verb Root + -a.',
      'Strict terminal vowel preservation: Verbs retain final -a (no -i shift).',
      'Clinical reassurance: Inaliti ayizukuba buhlungu kakhulu (The needle will not be very painful).'
    ],
    examples: [
      {
        id: 'neg-fut-ex-1',
        type: 'reassurance',
        isizulu: 'Musa ukwesaba, lo msebenzi wokuhlola awuzukudala buhlungu.',
        english: 'Do not be afraid; this examination procedure will not cause any pain.',
        breakdown: [
          { chunk: 'Musa ukwesaba', gloss: 'do not fear! (prohibition)' },
          { chunk: 'lo msebenzi wokuhlola', gloss: 'this examination procedure (Class 3)' },
          { chunk: 'awuzukudala', gloss: 'a- + u- + -zuku- + -dala ("will not cause")' },
          { chunk: 'buhlungu', gloss: 'any pain (preprefix u- dropped)' }
        ]
      },
      {
        id: 'neg-fut-ex-2',
        type: 'prognosis',
        isizulu: 'Uma uphuza lo muthi, umkhuhlane awuzukubuyela emaphashaneni.',
        english: 'If you take this medicine, the infection will not return to the lungs.',
        breakdown: [
          { chunk: 'Uma uphuza lo muthi', gloss: 'if you take this medicine' },
          { chunk: 'umkhuhlane', gloss: 'the infection / fever (Class 3)' },
          { chunk: 'awuzukubuyela', gloss: 'a- + u- + -zuku- + -buyela ("will not return")' },
          { chunk: 'emaphashaneni', gloss: 'to the lungs (locative)' }
        ]
      }
    ]
  },
  {
    id: 'neg-infinitive-ukunga',
    category: 'negation',
    title: 'Class 15 Infinitive Negation (ukunga-) & Procedural Fasting',
    subtitle: 'Pre-operative nil per os (NPO) orders, substance cessation, and non-compliance counseling',
    formula: 'uku- + -nga- + Verb Root + -i  (ukudla -> ukungadli; ukuphuza -> ukungaphuzi)',
    explanation:
      'Class 15 infinitives (verbal nouns / gerunds) are negated by inserting the negative infix -nga- directly into the infinitive prefix and shifting the terminal vowel to -i: uku- + -nga- + Root + -i. In medical practice, this construction is essential for: (1) pre-operative fasting and nil per os (NPO) directives: ukungadli nokungaphuzi lutho kusukela phakathi kwamabili ("not eating and not drinking anything starting from midnight"); (2) lifestyle cessation counseling: ukungaphuzi utshwala ("not drinking alcohol"); and (3) analyzing therapeutic non-adherence: ukungawaphuzi amaphilisi ("the failure to take pills").',
    commonPitfall:
      'Using the imperative prohibition *musa* when a verbal noun subject or object is required. Saying *"Musa ukudla kuyadingeka"* is incorrect; the correct gerundive subject is *Ukungadli kuyadingeka* ("Not eating / Fasting is required").',
    rules: [
      'Infinitive negative formula: uku- + -nga- + Verb Root + -i.',
      'Pre-op NPO orders: Ukungadli nokungaphuzi kusukela ngo-12 ebusuku (Nil per os from midnight).',
      'Substance cessation: ukungabhemi ugwayi (not smoking tobacco); ukungaphuzi utshwala (not drinking alcohol).',
      'Adherence failure noun: Ukungaphuzi amaphilisi kuyingozi (Failure to take pills is dangerous).'
    ],
    examples: [
      {
        id: 'neg-inf-ex-1',
        type: 'pre-op',
        isizulu: 'Kudingeka ukungadli ukudla okuqinile amahora ayisithupha ngaphambi kokuhlinzwa.',
        english: 'It is required to not eat solid food for six hours before surgery.',
        breakdown: [
          { chunk: 'Kudingeka', gloss: 'it is required / necessary' },
          { chunk: 'ukungadli', gloss: 'uku- + -nga- + -dla + -i ("fasting / not eating")' },
          { chunk: 'ukudla okuqinile', gloss: 'solid food' },
          { chunk: 'amahora ayisithupha', gloss: 'six hours' },
          { chunk: 'ngaphambi kokuhlinzwa', gloss: 'before surgical operation' }
        ]
      },
      {
        id: 'neg-inf-ex-2',
        type: 'counseling',
        isizulu: 'Ukungaphuzi utshwala kuzosiza isibindi sakho ukuba silulame masinyane.',
        english: 'Abstaining from alcohol will assist your liver to recover rapidly.',
        breakdown: [
          { chunk: 'Ukungaphuzi utshwala', gloss: 'not drinking alcohol / abstinence' },
          { chunk: 'kuzosiza', gloss: 'will help / assist' },
          { chunk: 'isibindi sakho', gloss: 'your liver (Class 7)' },
          { chunk: 'ukuba silulame', gloss: 'so that it recovers' },
          { chunk: 'masinyane', gloss: 'promptly / rapidly' }
        ]
      }
    ]
  }
];
