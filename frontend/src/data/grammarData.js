/**
 * Kuzwakele Grammar Reference Data
 * Deep reference rules for targeted clinical isiZulu grammatical modules:
 * 1. Past Continuous & Remote Past (past-tenses)
 * 2. Stative Aspect (stative)
 * 3. Conjunctions & Clause Governance (conjunctions)
 * 4. Time-Flow Aspectual Infixes (aspect-infixes)
 */

export const GRAMMAR_CATEGORIES = [
  { id: 'all', label: 'All Rules' },
  { id: 'past-tenses', label: 'Past Continuous & Remote' },
  { id: 'stative', label: 'Stative Aspect' },
  { id: 'conjunctions', label: 'Conjunctions & Clauses' },
  { id: 'aspect-infixes', label: 'Time Infixes (-sa-, se-, -ka-)' },
  { id: 'verbal-extensions', label: 'Verbal Extensions (-ela, -isa, -wa)' },
  { id: 'copulatives-locatives', label: 'Copulatives & Locatives (ngu-, y-, e-...-ini)' }
];

export const GRAMMAR_SECTIONS = [
  {
    id: 'past-tenses',
    title: 'Past Continuous & Remote Past',
    badge: '5 Rules',
    ruleCount: 5,
    keyConcept: 'Imperfect be-, deep past -a-, remote continuous ngangi-, and past negation.',
    previewHook: 'bengihamba vs. ngahamba',
    description: 'Master the 5 core past tense rules: immediate continuous (be-), deep past (-a-), remote continuous (ngangi-), negation (-anga), and history-taking onset formulas.'
  },
  {
    id: 'stative',
    title: 'The Stative Aspect',
    badge: '5 Rules',
    ruleCount: 5,
    keyConcept: 'Bodily & mental states using past endings for present conditions.',
    previewHook: '-vuvukile, -khathele, -lambile',
    description: 'Master the 5 core stative rules: process vs. state, contraction (-e), irregular stems, negation traps, and clinical inventory.'
  },
  {
    id: 'conjunctions',
    title: 'Conjunctions & Clause Governance',
    badge: '5 Rules',
    ruleCount: 5,
    keyConcept: 'Subjunctive triggers (ukuze), participial shifts (uma), coordinating linkers (kodwa), before/after sequences, and advisory action plans.',
    previewHook: 'ukuze uphole vs. uma egula',
    description: 'Master the 5 core conjunction rules: subjunctive purpose triggers (ukuze), participial condition mutations (uma), coordinating linkers (kodwa), compound temporal sequences (ngaphambi kokuba), and clinical discharge action plans.'
  },
  {
    id: 'aspect-infixes',
    title: 'Time-Flow Aspectual Infixes',
    badge: '5 Rules',
    ruleCount: 5,
    keyConcept: 'Temporal modifiers for continuity (-sa-), state transitions (se-), pending action (-ka-), and episodic history (-ke-).',
    previewHook: '-sa- (still), se- (now), -ka- (not yet), -ke- (ever)',
    description: 'Master the 5 core aspectual infix rules: progressive continuity (-sa-), exclusive transition (se-), negative incomplete (-ka-), occasional history (-ke-), and longitudinal symptom trajectory monitoring.'
  },
  {
    id: 'verbal-extensions',
    title: 'Verbal Extensions & Mutations',
    badge: '5 Rules',
    ruleCount: 5,
    keyConcept: 'Derivational verbal suffixes modifying direction, causation, reciprocity, and passive labial palatalization.',
    previewHook: '-ela, -isa, -wa (palatalization), -eka',
    description: 'Master the 5 core verbal extensions: applicative (-ela), causative (-isa), passive labial palatalization (-wa), neuter feasibility (-eka/-akala), and reciprocal interaction (-ana).'
  },
  {
    id: 'copulatives-locatives',
    title: 'Copulatives & Locative Shifts',
    badge: '5 Rules',
    ruleCount: 5,
    keyConcept: 'Non-verbal predicatives ("it is / is not"), physical presence (khona / akakho), locative e-...-ini palatalization, and possessive vowel coalescence.',
    previewHook: 'ngu-, y-, e-...-ini, akakho, womntwana',
    description: 'Master the 5 core non-verbal predicative and locative systems: positive identification copulatives, negative copulatives, locative presence and absence, locative palatalization, and possessive concord vowel coalescence.'
  }
];

export const PAST_CONCORD_MATRIX = [
  { person: 'Mina [1st Sing]', immediateCont: 'bengi-', remoteSimple: 'nga-', remoteCont: 'ngangi-', example: 'bengisebenza / ngasebenza / ngangisebenza', note: 'Recent vs. deep vs. habitual' },
  { person: 'Wena [2nd Sing]', immediateCont: 'ubu-', remoteSimple: 'wa-', remoteCont: 'wawu-', example: 'ubugula / wagula / wawugula', note: 'Essential for onset elicitation' },
  { person: 'Yena [Class 1/1a]', immediateCont: 'ube-', remoteSimple: 'wa-', remoteCont: 'waye-', example: 'ubekhuluma / wakhuluma / wayekhuluma', note: 'Note irregular remote waye-' },
  { person: 'Thina [1st Plur]', immediateCont: 'sibe-', remoteSimple: 'sa-', remoteCont: 'sasi-', example: 'sibehamba / sahamba / sasihamba', note: 'Household/family history' },
  { person: 'Nina [2nd Plur]', immediateCont: 'nibe-', remoteSimple: 'na-', remoteCont: 'nani-', example: 'nibebona / nabona / nanibona', note: 'Caregiver group addressing' },
  { person: 'Bona [Class 2]', immediateCont: 'bebe-', remoteSimple: 'ba-', remoteCont: 'babe-', example: 'bebelindile / balinda / babelindile', note: 'Community/relatives' },
  { person: 'Khona [Class 15/17]', immediateCont: 'beku-', remoteSimple: 'kwa-', remoteCont: 'kwaku-', example: 'bekubuhlungu / kwenzeka / kwakubuhlungu', note: 'Impersonal / timeline onset' }
];

export const PAST_PRACTICE_CHECKPOINTS = [
  {
    id: 'past-check-1',
    challengeNumber: 1,
    prompt: 'I was walking to the clinic when the chest pain started.',
    targetConcept: 'Immediate Continuous (bengi-) + Past Onset (buqala)',
    primaryAnswer: 'Bengihamba ngiya emtholampilo ngesikhathi ubuhlungu besifuba buqala.',
    breakdown: [
      { chunk: 'Bengi-hamb-a', gloss: 'bengi- (1st person recent past continuous) + -hamba (walk / travel: "I was walking")' },
      { chunk: 'ngiya emtholampilo', gloss: 'ngiya (heading towards) + emtholampilo (locative: to the clinic)' },
      { chunk: 'ngesikhathi', gloss: 'temporal conjunction ("at the time when")' },
      { chunk: 'ubuhlungu besifuba', gloss: 'ubuhlungu (Class 14 pain) + besifuba (of the chest)' },
      { chunk: 'bu-qal-a', gloss: 'bu- (Class 14 SC) + -qala (start / begin: past event in participial clause)' }
    ],
    ruleTip: 'Use bengi- for the ongoing background activity (unfolding recently/yesterday), and buqala for the punctiliar onset.'
  },
  {
    id: 'past-check-2',
    challengeNumber: 2,
    prompt: 'Did you use to smoke cigarettes long ago?',
    targetConcept: 'Remote Continuous (wawu-) for Chronic Habits',
    primaryAnswer: 'Ingabe wawubhema ugwayi ngaphambili eminyakeni edlule?',
    breakdown: [
      { chunk: 'Ingabe', gloss: 'polite interrogative opener ("Is it that... / Did you...?")' },
      { chunk: 'wawu-bhem-a', gloss: 'wawu- (2nd person remote continuous concord) + -bhema (smoke: "did you use to smoke?")' },
      { chunk: 'ugwayi', gloss: 'Class 1a noun (cigarettes / tobacco)' },
      { chunk: 'ngaphambili', gloss: 'adverb of past time ("in the past / previously")' },
      { chunk: 'eminyakeni edlule', gloss: 'locative ("in years that passed / years ago")' }
    ],
    ruleTip: 'Do NOT use recent past continuous *ubu- for years-old or childhood habits. Use remote continuous wawu-.'
  },
  {
    id: 'past-check-3',
    challengeNumber: 3,
    prompt: 'I did not take the pills yesterday.',
    targetConcept: 'Simple Past Negation (-anga)',
    primaryAnswer: 'Angiwaphuzanga amaphilisi izolo.',
    breakdown: [
      { chunk: 'A-ngi-wa-phuz-anga', gloss: 'a- (neg prefix) + ngi- (1st person SC) + -wa- (Class 6 object concord for amaphilisi) + -phuza (drink/take) + -anga (past negative ending: "I did not take")' },
      { chunk: 'amaphilisi', gloss: 'Class 6 plural noun (tablets / pills)' },
      { chunk: 'izolo', gloss: 'adverb of time ("yesterday")' }
    ],
    ruleTip: 'Completed past actions are negated with suffix -anga (angiphuzanga). Never use present negative -i (*angiphuzi izolo).'
  }
];

export const STATIVE_IRREGULAR_TABLE = [
  { root: '-khathala', meaning: 'tire / get weary', positive: 'ukhathele', negative: 'akakhathele', pattern: '-ala -> -ele', clinicalUse: 'Exhaustion, lethargy' },
  { root: '-lala', meaning: 'sleep / lie down', positive: 'ulele', negative: 'akalele', pattern: 'monosyllabic -ele', clinicalUse: 'Sleep, unconsciousness' },
  { root: '-limala', meaning: 'get injured / hurt', positive: 'ulimele', negative: 'akalimele', pattern: '-ala -> -ele', clinicalUse: 'Trauma, physical injury' },
  { root: '-phapama', meaning: 'wake up / become alert', positive: 'uphapheme', negative: 'akaphapheme', pattern: '-ama -> -eme', clinicalUse: 'GCS / Neurological responsiveness' },
  { root: '-zala', meaning: 'give birth / be full', positive: 'uzele', negative: 'akazele', pattern: '-ala -> -ele', clinicalUse: 'Obstetrics / parity status' },
  { root: '-sutha', meaning: 'become full / sated', positive: 'usuthi', negative: 'akasuthi', pattern: '-a -> -i mutation', clinicalUse: 'Dietary intake / paediatric feeds' },
  { root: '-vuvuka', meaning: 'swell / inflamed', positive: 'zivuvukile', negative: 'azivuvukile', pattern: 'regular -ile retention', clinicalUse: 'Peripheral edema, infection' },
  { root: '-quleka', meaning: 'faint / collapse', positive: 'uqulekile', negative: 'akaqulekile', pattern: 'regular -ile retention', clinicalUse: 'Syncope, loss of consciousness' },
  { root: '-oma', meaning: 'dry up / dehydrate', positive: 'womile', negative: 'akomile', pattern: 'vowel root (w- concord)', clinicalUse: 'Dehydration, dry mucosa' },
  { root: '-gcwala', meaning: 'fill up / effusion', positive: 'kugcwele', negative: 'akugcwele', pattern: '-ala -> -ele', clinicalUse: 'Pleural effusion, ascites' }
];

export const STATIVE_PRACTICE_CHECKPOINTS = [
  {
    id: 'stative-check-1',
    challengeNumber: 1,
    prompt: 'Are you feeling very tired today, Gogo?',
    targetConcept: 'Contracted Stative before Adverb (kakhulu)',
    primaryAnswer: 'Ukhathele kakhulu yini namuhla, gogo?',
    breakdown: [
      { chunk: 'u-khathel-e', gloss: 'u- (2nd person SC) + -khathala (tire) + -e (contracted stative before adverb: "are you tired")' },
      { chunk: 'kakhulu', gloss: 'adverb of degree ("very / severely")' },
      { chunk: 'yini', gloss: 'interrogative question particle' },
      { chunk: 'gogo', gloss: 'respectful kinship address ("Grandmother")' }
    ],
    ruleTip: 'Drop from full -ile to contracted -e because the adverb "kakhulu" immediately follows in the same clause.'
  },
  {
    id: 'stative-check-2',
    challengeNumber: 2,
    prompt: 'The child is not asleep; he is awake and alert.',
    targetConcept: 'Irregular Stative Negation (-lele) & Alertness (-phapheme)',
    primaryAnswer: 'Umntwana akalele; uphapheme kahle.',
    breakdown: [
      { chunk: 'umntwana', gloss: 'Class 1 noun (child)' },
      { chunk: 'a-ka-lel-e', gloss: 'a- (neg prefix) + ka- (Class 1 neg SC) + -lele (retains irregular stative -ele: "is not asleep")' },
      { chunk: 'u-phaphem-e', gloss: 'u- (SC) + -phapama (wake/alert) + -eme (-ama verb stative: "is alert / awake")' },
      { chunk: 'kahle', gloss: 'adverb ("well / clearly")' }
    ],
    ruleTip: 'Never use standard -i negation (*akali). Stative verbs retain their irregular -ele suffix in the negative.'
  },
  {
    id: 'stative-check-3',
    challengeNumber: 3,
    prompt: 'The feet are not swollen today.',
    targetConcept: 'Regular Stative Negation (-ile retention)',
    primaryAnswer: 'Izinyawo azivuvukile namuhla.',
    breakdown: [
      { chunk: 'Izinyawo', gloss: 'Class 10 noun (feet)' },
      { chunk: 'a-zi-vuvuk-ile', gloss: 'a- (neg prefix) + zi- (SC 10) + -vuvuka (swell) + -ile (retains stative -ile: "are not swollen")' },
      { chunk: 'namuhla', gloss: 'adverb of time ("today")' }
    ],
    ruleTip: 'Do NOT say *azivuvuki (which means "they never swell"). Retaining -ile communicates the present physical state: "they are not currently swollen".'
  }
];

export const CONJUNCTION_GOVERNANCE_TABLE = [
  {
    conjunction: 'ukuze',
    meaning: 'so that / in order that (purposive)',
    triggeredMood: 'Subjunctive',
    mutationRule: '-a -> -e final vowel shift',
    negativeFormation: '-nga-...-i infix (ukuze ungaguli)',
    clinicalExample: 'ukuze wehlise umfutho wegazi'
  },
  {
    conjunction: 'kufanele / kumele',
    meaning: 'must / should / it is necessary (obligative)',
    triggeredMood: 'Subjunctive',
    mutationRule: '-a -> -e final vowel shift',
    negativeFormation: 'kumele unga- + Root + -i',
    clinicalExample: 'kufanele uhlale phansi unyakaze kancane'
  },
  {
    conjunction: 'ake',
    meaning: 'please / kindly / let (polite hortative)',
    triggeredMood: 'Subjunctive',
    mutationRule: '-a -> -e final vowel shift',
    negativeFormation: 'ake unga- + Root + -i',
    clinicalExample: 'ake uvule umlomo ngibheke umphimbo'
  },
  {
    conjunction: 'uma',
    meaning: 'if / when (conditional / temporal)',
    triggeredMood: 'Participial',
    mutationRule: 'Class 1 u- -> e-, Class 2 ba- -> be-',
    negativeFormation: '-nga-...-i infix (uma engaphuzi)',
    clinicalExample: 'uma isifuba siqhubeka nokubuhlungu'
  },
  {
    conjunction: 'ngenkathi',
    meaning: 'while / during the time that (situational)',
    triggeredMood: 'Participial',
    mutationRule: 'Class 1 u- -> e-, Class 2 ba- -> be-',
    negativeFormation: '-nga-...-i infix (ngenkathi engadli)',
    clinicalExample: 'ngenkathi elinde udokotela emtholampilo'
  },
  {
    conjunction: 'ngoba',
    meaning: 'because / since (causal)',
    triggeredMood: 'Participial',
    mutationRule: 'Class 1 u- -> e-, Class 2 ba- -> be-',
    negativeFormation: '-nga-...-i infix (ngoba engazi)',
    clinicalExample: 'uphuza amaphilisi ngoba enomfutho'
  },
  {
    conjunction: 'kodwa',
    meaning: 'but / however (adversative / contrastive)',
    triggeredMood: 'Indicative',
    mutationRule: 'No mutation (neutral coordinator)',
    negativeFormation: 'Standard indicative a-...-i',
    clinicalExample: 'izinyawo zivuvukile, kodwa asibuhlungu'
  },
  {
    conjunction: 'ngaphambi kokuba',
    meaning: 'before (doing something) (temporal sequence)',
    triggeredMood: 'Subjunctive',
    mutationRule: '-a -> -e final vowel shift',
    negativeFormation: 'ngaphambi kokuba unga-...-i',
    clinicalExample: 'phuza lo muthi ngaphambi kokuba ulale'
  }
];

export const CONJUNCTION_PRACTICE_CHECKPOINTS = [
  {
    id: 'conj-check-1',
    challengeNumber: 1,
    prompt: "Drink this water so that you don't become dehydrated.",
    targetConcept: 'Subjunctive Negative (-nga-...-i) after ukuze',
    primaryAnswer: 'Phuza la manzi ukuze ungomisi umzimba.',
    breakdown: [
      { chunk: 'Phuz-a', gloss: 'imperative verb ("drink")' },
      { chunk: 'la manzi', gloss: 'la (demonstrative: "this") + amanzi (Class 6: "water")' },
      { chunk: 'ukuze', gloss: 'purposive conjunction ("so that / in order that")' },
      { chunk: 'u-nga-om-is-i', gloss: 'u- (2nd person SC) + -nga- (subjunctive negative infix) + -oma (dry up) + -isa (causative) + -i (negative ending: "you do not cause to dry up")' },
      { chunk: 'umzimba', gloss: 'Class 3 noun ("the body")' }
    ],
    ruleTip: 'Ukuze strictly triggers the subjunctive mood. In negative clauses, do not use standard a-...-i; insert the mid-verb negative particle -nga- and change the final vowel to -i (ukuze ungomi / ungomisi).'
  },
  {
    id: 'conj-check-2',
    challengeNumber: 2,
    prompt: 'If the patient does not drink the medication, call us.',
    targetConcept: 'Class 1 Participial Negative (engaphuzi) after uma',
    primaryAnswer: 'Uma isiguli singawuphuzi umuthi, sishayele ucingo.',
    breakdown: [
      { chunk: 'Uma', gloss: 'conditional conjunction ("if / when")' },
      { chunk: 'isiguli', gloss: 'Class 7 noun ("the patient")' },
      { chunk: 'si-nga-wu-phuz-i', gloss: 'si- (Class 7 participial SC) + -nga- (participial negative) + -wu- (Class 3 object concord for umuthi) + -phuza + -i ("is not taking / drinking")' },
      { chunk: 'umuthi', gloss: 'Class 3 noun ("medication / medicine")' },
      { chunk: 'si-shayel-e ucingo', gloss: 'si- (1st person plural object: "us") + -shayela (call) + -e (imperative/subjunctive: "call us") + ucingo ("telephone")' }
    ],
    ruleTip: 'Subordinating conjunctions like uma put the verb into the participial mood. 3rd person singular Class 1 changes from u- to e- (uma engaphuzi), and negative clauses mandatorily use the -nga-...-i pattern.'
  },
  {
    id: 'conj-check-3',
    challengeNumber: 3,
    prompt: 'Take the pill after eating food, but before sleeping.',
    targetConcept: 'Compound Sequence: emva kokuba + kodwa + ngaphambi kokuba',
    primaryAnswer: 'Phuza iphilisi emva kokuba udlile ukudla, kodwa ngaphambi kokuba ulale.',
    breakdown: [
      { chunk: 'Phuz-a iphilisi', gloss: 'imperative ("take the tablet/pill")' },
      { chunk: 'emva kokuba', gloss: 'compound prepositional conjunction ("after that...")' },
      { chunk: 'u-dl-ile ukudla', gloss: 'u- (SC) + -dla (eat) + -ile (completed participial/stative action) + ukudla (food)' },
      { chunk: 'kodwa', gloss: 'coordinating conjunction ("but / however" - neutral, no mutation)' },
      { chunk: 'ngaphambi kokuba', gloss: 'compound prepositional conjunction ("before that...")' },
      { chunk: 'u-lal-e', gloss: 'u- (2nd person SC) + -lala (sleep) + -e (subjunctive ending triggered by ngaphambi kokuba)' }
    ],
    ruleTip: 'Emva kokuba triggers the participial/stative aspect (udlile), kodwa is a neutral coordinating conjunction that leaves the next clause unaffected, and ngaphambi kokuba triggers the subjunctive mood (-e: ulale).'
  }
];

export const ASPECT_INFIX_MATRIX = [
  {
    infix: '-sa-',
    temporalConcept: 'Still / Ongoing (Pos) | No longer (Neg)',
    positiveFormula: 'SC + -sa- + Root + -a (usabuzwa)',
    negativeFormula: 'a- + SC + -sa- + Root + -i (angisabhemi)',
    clinicalFunction: 'Tracks symptom persistence vs habit cessation',
    clinicalExample: 'usabuzwa ubuhlungu esifubeni yini?'
  },
  {
    infix: 'se- / -se-',
    temporalConcept: 'Now / Already (State transition)',
    positiveFormula: 'se- + SC (sengi-, sewu-, use-, sebe-)',
    negativeFormula: 'a- + SC + -ka- + Root + -i ("not yet")',
    clinicalFunction: 'Marks completed onset, drug efficacy, discharge timing',
    clinicalExample: 'umuthi sewuqalile ukusebenza kahle'
  },
  {
    infix: '-ka-',
    temporalConcept: 'Not yet (Pending completion)',
    positiveFormula: 'N/A (strictly negative morpheme)',
    negativeFormula: 'a- + SC + -ka- + Root + -i (akakafiki)',
    clinicalFunction: 'Inquires after pending lab tests, missed doses, unpassed urine',
    clinicalExample: 'imiphumela yegazi ayikafiki evela elabhorethri'
  },
  {
    infix: '-ke-',
    temporalConcept: 'Ever / Once / Sometimes (Episodic / Past)',
    positiveFormula: 'SC + -ke- + Root + -e / -a (uke uzwe)',
    negativeFormula: 'a- + SC + -zange + Subjunctive ("never")',
    clinicalFunction: 'Systematic ROS, episodic flare elicitation, allergic history',
    clinicalExample: 'wake waba nokungezwani nephinisilini?'
  }
];

export const ASPECT_INFIX_CHECKPOINTS = [
  {
    id: 'aspect-check-1',
    challengeNumber: 1,
    prompt: 'Do you still feel the chest pain, or is it no longer hurting?',
    targetConcept: 'Progressive Persistence (-sa-) vs Cessation (a-...-sa-...-i)',
    primaryAnswer: 'Usabuzwa ubuhlungu besifuba, noma abusebuhlungu?',
    breakdown: [
      { chunk: 'U-sa-bu-zw-a', gloss: 'u- (2nd person SC) + -sa- (progressive: "still") + -bu- (Class 14 object concord) + -zwa (feel) + -a ("do you still feel")' },
      { chunk: 'ubuhlungu besifuba', gloss: 'ubuhlungu (pain) + besifuba (of the chest)' },
      { chunk: 'noma', gloss: 'coordinating conjunction ("or")' },
      { chunk: 'a-bu-se-buhlungu', gloss: 'a- (negative prefix) + bu- (Class 14 SC) + -se- (negative variant of -sa-: "no longer") + -buhlungu ("it is no longer painful")' }
    ],
    ruleTip: 'Use positive -sa- (u-sa-bu-zwa) for ongoing continuity, and negative a-...-sa-...-i / a-...-se-... (abusebuhlungu / akusabuhlungu) for cessation.'
  },
  {
    id: 'aspect-check-2',
    challengeNumber: 2,
    prompt: 'The blood test results have not yet arrived from the laboratory.',
    targetConcept: 'Incomplete Negative Aspect (-ka-) for Diagnostics',
    primaryAnswer: 'Imiphumela yegazi ayikafiki evela elabhorethri.',
    breakdown: [
      { chunk: 'Imiphumela yegazi', gloss: 'imiphumela (Class 4 plural: "results") + yegazi ("of blood")' },
      { chunk: 'a-yi-ka-fik-i', gloss: 'a- (negative prefix) + yi- (Class 4 negative SC) + -ka- (not yet infix) + -fika (arrive) + -i (negative ending: "have not yet arrived")' },
      { chunk: 'evela elabhorethri', gloss: 'evela (which comes from) + elabhorethri (locative: "at/from the laboratory")' }
    ],
    ruleTip: 'The aspectual infix -ka- is exclusively negative: prefix a- + concord yi- (Class 4) + -ka- + fika + -i (ayikafiki). Never use -ka- in affirmative sentences.'
  },
  {
    id: 'aspect-check-3',
    challengeNumber: 3,
    prompt: 'Have you ever had an allergic reaction to penicillin or any medication?',
    targetConcept: 'Occasional Infix (-ke-) in Remote Past for Allergic History',
    primaryAnswer: 'Wake waba nokungezwani nephinisilini noma nanoma yimuphi umuthi?',
    breakdown: [
      { chunk: 'Wa-ke wa-b-a', gloss: 'wa- (2nd person remote past concord) + -ke- (occasional/ever infix) + waba (did you have: "have you ever had")' },
      { chunk: 'nokungezwani', gloss: 'na- (with) + ukungezwani (allergy / discordance / intolerance: "an allergic reaction")' },
      { chunk: 'nephinisilini', gloss: 'na- (with) + iphinisilini ("penicillin")' },
      { chunk: 'noma nanoma yimuphi umuthi', gloss: 'noma (or) + nanoma yimuphi (with any whatever) + umuthi (medicine)' }
    ],
    ruleTip: 'Wake (u- + -a- + -ke-) fuses remote past with frequentative -ke- to ask "have you ever...". Ukungezwani nomuthi is the standard clinical term for drug allergy or intolerance.'
  }
];

export const VERBAL_EXTENSIONS_TABLE = [
  {
    extension: 'Applicative',
    morpheme: '-ela',
    meaning: 'For / On behalf of / Towards',
    soundShift: 'Regular suffixation (-a -> -ela)',
    clinicalUtility: 'Preparing therapy for patient, asking reason/purpose (-elani)',
    example: 'ungilungiselela imithi / uhlalelani phansi?'
  },
  {
    extension: 'Causative',
    morpheme: '-isa',
    meaning: 'Cause to / Help to / Intensify',
    soundShift: 'Final -ka -> -sa, -la -> -za (e.g. sula -> suza)',
    clinicalUtility: 'Medication side effects (ukuhambisa isisu), assisted ambulation',
    example: 'lamaphilisi ayahambisa isisu'
  },
  {
    extension: 'Passive & Palatalization',
    morpheme: '-wa',
    meaning: 'Be acted upon (Patient focus)',
    soundShift: 'b->tsh, p->tsh, ph->sh, m->ny, mb->nj',
    clinicalUtility: 'Describing treatment received (welashwa), symptoms experienced (ulunywa)',
    example: 'isiguli selashwa ngemithi emisha'
  },
  {
    extension: 'Neuter-Stative',
    morpheme: '-eka / -akala',
    meaning: 'Feasible / Observable state',
    soundShift: 'Regular suffixation (-eka / -akala)',
    clinicalUtility: 'Consultation comprehension (kuzwakele), clinical needs (kuyadingeka)',
    example: 'kuzwakele gogo, imithi iyadingeka'
  },
  {
    extension: 'Reciprocal',
    morpheme: '-ana',
    meaning: 'Mutual interaction (Each other)',
    soundShift: 'Requires plural subject concord (si-, ni-, ba-)',
    clinicalUtility: 'Family caregiver mutual support (sisizane), review follow-ups (sizobonana)',
    example: 'kumele sisizane emndenini'
  }
];

export const VERBAL_EXTENSIONS_CHECKPOINTS = [
  {
    id: 'ext-check-1',
    challengeNumber: 1,
    prompt: 'The patient is being treated with new medication.',
    targetConcept: 'Passive Palatalization (ph -> sh: -elapha -> -elashwa)',
    primaryAnswer: 'Isiguli selashwa ngemithi emisha.',
    breakdown: [
      { chunk: 'Isiguli', gloss: 'Class 7 noun ("the patient")' },
      { chunk: 's-elashw-a', gloss: 'si- (Class 7 SC) + elashwa (-elapha with ph -> sh palatalization before -wa: "is being treated")' },
      { chunk: 'ngemithi', gloss: 'nga- (instrumental: by means of / with) + imithi (Class 4: "medication")' },
      { chunk: 'emisha', gloss: 'Class 4 adjective concord + -sha ("new")' }
    ],
    ruleTip: "When -elapha takes the passive suffix -wa, the labial consonant 'ph' cannot stand directly before 'w'. It obligatorily palatalizes to prepalatal 'sh': selashwa, NEVER *selaphwa."
  },
  {
    id: 'ext-check-2',
    challengeNumber: 2,
    prompt: 'This medicine causes diarrhea if taken on an empty stomach.',
    targetConcept: 'Causative Extension (-isa: ukuhambisa isisu)',
    primaryAnswer: 'Lo muthi uyahambisa isisu uma uphuzwa ngaphandle kokudla.',
    breakdown: [
      { chunk: 'Lo muthi', gloss: 'demonstrative lo ("this") + Class 3 umuthi ("medicine")' },
      { chunk: 'u-ya-hamb-is-a isisu', gloss: 'u- (Class 3 SC) + -ya- (continuous) + -hamba (run) + -isa (causative) + isisu (stomach: "causes the stomach to run -> diarrhea")' },
      { chunk: 'uma', gloss: 'conditional conjunction ("if / when")' },
      { chunk: 'u-phuz-w-a', gloss: 'u- (Class 3 participial SC) + -phuza (drink) + -wa (passive: "if it is taken/drunk")' },
      { chunk: 'ngaphandle kokudla', gloss: 'compound preposition ("without food / on an empty stomach")' }
    ],
    ruleTip: "In clinical isiZulu, 'ukuhambisa isisu' is the standard causative formulation for diarrhea (literally: 'causing the stomach to run'). Notice that uphuzwa also demonstrates the passive -wa."
  },
  {
    id: 'ext-check-3',
    challengeNumber: 3,
    prompt: 'The nurse is preparing the injection for the grandmother.',
    targetConcept: 'Applicative Suffix (-ela: acting for / on behalf of)',
    primaryAnswer: 'Umhlengikazi ulungiselela ugogo umjovo.',
    breakdown: [
      { chunk: 'Umhlengikazi', gloss: 'Class 1 noun ("the nurse")' },
      { chunk: 'u-lungis-el-el-a', gloss: 'u- (Class 1 SC) + -lungisa (prepare) + -ela (applicative suffix: "prepares for / on behalf of")' },
      { chunk: 'ugogo', gloss: 'Class 1a indirect object ("for grandmother")' },
      { chunk: 'umjovo', gloss: 'Class 3 direct object ("the injection")' }
    ],
    ruleTip: "The applicative extension -ela directs the action towards a beneficiary: -lungiselela means 'to prepare for someone'. In word order, the human beneficiary (ugogo) immediately follows the verb."
  }
];

export const COPULATIVE_LOCATIVE_TABLE = [
  {
    nounClass: 'Class 1/1a (u- / umu-)',
    nounExample: 'udokotela / umntwana',
    positiveCopulative: 'ngudokotela / ngumntwana',
    negativeCopulative: 'akuyena udokotela',
    locativeForm: 'kudokotela / kumntwana (ku- with people)',
    clinicalUtility: 'Clinician identity, caregiver role, personal referents'
  },
  {
    nounClass: 'Class 2/2a (ba- / o-)',
    nounExample: 'abahlengikazi / ogogo',
    positiveCopulative: 'ngabahlengikazi / ngogogo',
    negativeCopulative: 'akubona abahlengikazi',
    locativeForm: 'kubahlengikazi / kogogo',
    clinicalUtility: 'Nursing cadre, family guardians'
  },
  {
    nounClass: 'Class 3/4 (um- / imi-)',
    nounExample: 'umkhuhlane / imithi',
    positiveCopulative: 'ngumkhuhlane / yimithi',
    negativeCopulative: 'akuwona umkhuhlane / akayona imithi',
    locativeForm: 'emkhuhlaneni / emithini',
    clinicalUtility: 'Etiology identification, pharmacotherapy'
  },
  {
    nounClass: 'Class 5/6 (i- / ili- / ama-)',
    nounExample: 'igazi / amaphilisi',
    positiveCopulative: 'yigazi / ngamaphilisi',
    negativeCopulative: 'akulona igazi / akuwona amaphilisi',
    locativeForm: 'egazini / emaphilisini',
    clinicalUtility: 'Blood diagnostics, medication delivery'
  },
  {
    nounClass: 'Class 7/8 (isi- / izi-)',
    nounExample: 'isifo / izilonda',
    positiveCopulative: 'yisifo / yizilonda',
    negativeCopulative: 'akusona isifo / akuzona izilonda',
    locativeForm: 'esifweni / ezilondeni',
    clinicalUtility: 'Pathology classification (yisifo sikashukela), ulcers'
  },
  {
    nounClass: 'Class 9/10 (in- / izin-)',
    nounExample: 'ingozi / izinyawo',
    positiveCopulative: 'yingozi / yizinyawo',
    negativeCopulative: 'akuyona ingozi / akuzona izinyawo',
    locativeForm: 'engozini / ezinyaweni',
    clinicalUtility: 'Triage emergency status (akuyona ingozi), anatomical examination'
  }
];

export const COPULATIVE_LOCATIVE_CHECKPOINTS = [
  {
    id: 'cop-check-1',
    challengeNumber: 1,
    prompt: 'This condition is diabetes, it is not a contagious disease.',
    targetConcept: 'Identification Copulative (yisifo) vs Negative Copulative (akusona)',
    primaryAnswer: 'Lesi simo yisifo sikashukela, akusona isifo esithathelanayo.',
    breakdown: [
      { chunk: 'Lesi simo', gloss: 'demonstrative lesi ("this") + Class 7 simo ("condition / state")' },
      { chunk: 'y-isifo sikashukela', gloss: 'y- (Class 7 copulative formative: "it is") + isifo (disease) + sikashukela (of sugar: "diabetes")' },
      { chunk: 'akusona isifo', gloss: 'akusona (negative copulative for Class 7: "it is not") + isifo ("a disease")' },
      { chunk: 'esithathelanayo', gloss: 'relative clause (-thathelana: contagious / transmissible)' }
    ],
    ruleTip: "Form the positive copulative on isifo by prefixing y- (yisifo = 'it is a disease'). Form the negative using the pronominal negative copulative akusona ('it is not'). Never use English verbs like 'is'."
  },
  {
    id: 'cop-check-2',
    challengeNumber: 2,
    prompt: 'Does the child have white sores inside the mouth?',
    targetConcept: 'Locative Palatalization (umlomo -> emlonyeni, m -> ny)',
    primaryAnswer: 'Ingabe umntwana unezilonda ezimhlophe ngaphakathi emlonyeni?',
    breakdown: [
      { chunk: 'Ingabe', gloss: 'polite interrogative question marker' },
      { chunk: 'umntwana', gloss: 'Class 1 noun ("the child")' },
      { chunk: 'u-ne-zilonda', gloss: 'u- (SC 1) + na- (associative copulative "has") + izilonda (Class 8: sores / ulcers)' },
      { chunk: 'ezimhlophe', gloss: 'adjective ("white / candidiasis")' },
      { chunk: 'ngaphakathi', gloss: 'locative adverb ("inside")' },
      { chunk: 'e-mlony-eni', gloss: 'e-...-ini locative wrapper on umlomo (mouth) with m -> ny palatalization ("in the mouth")' }
    ],
    ruleTip: "When turning umlomo into a locative with e-...-ini, the labial 'm' before the final vowel palatalizes to 'ny': emlonyeni. Saying *emlomweni is a major phonological error."
  },
  {
    id: 'cop-check-3',
    challengeNumber: 3,
    prompt: 'The doctor is not at the clinic; he is at the hospital today.',
    targetConcept: 'Absence (akakho) + Locative Copulative (usesibhedlela)',
    primaryAnswer: 'Udokotela akakho emtholampilo; usesibhedlela namhlanje.',
    breakdown: [
      { chunk: 'Udokotela', gloss: 'Class 1a noun ("the doctor")' },
      { chunk: 'a-ka-kho', gloss: 'a- (negative prefix) + ka- (Class 1 negative concord) + -kho (presence enclitic: "is not present / absent")' },
      { chunk: 'emtholampilo', gloss: 'locative ("at the clinic")' },
      { chunk: 'u-se-sibhedlela', gloss: 'u- (Class 1 SC) + -se- (locative copulative infix: "is at") + isibhedlela (hospital)' },
      { chunk: 'namhlanje', gloss: 'adverb of time ("today")' }
    ],
    ruleTip: "For human absence, use akakho (Class 1). To state where someone currently is, insert the locative copulative infix -se- between the subject concord and locative noun: usesibhedlela ('he is at the hospital')."
  }
];

export const GRAMMAR_RULES = [
  // ==========================================
  // CATEGORY 1: PAST CONTINUOUS & REMOTE PAST
  // ==========================================
  {
    id: 'past-immediate-continuous',
    category: 'past-tenses',
    title: 'Immediate Past Continuous (Imperfect Tense)',
    subtitle: 'Using be- + concord for actions unfolding earlier today or yesterday',
    formula: 'be- + Subject Concord (bengi-, ubu-, ube-, sibe-, bebe-) + Verb Root + -a / complement',
    explanation:
      'The Immediate Past Continuous describes an action that was unfolding recently (typically earlier today or yesterday) when another event occurred or during an ongoing window. Formed with the defective auxiliary verb be- fused with the subject concord: 1st Sing (ngi-) -> bengi- ("I was working"), 2nd Sing (u-) -> ubu- ("you were feeling unwell"), Class 1/1a (u-) -> ube- ("he/she was speaking"), 1st Plural (si-) -> sibe- ("we were traveling"), Class 2 (ba-) -> bebe- ("they were waiting").',
    commonPitfall:
      'Confusing Class 1 ube- with 2nd person ubu-. In history-taking: saying "Ubuhlungu buqale ngenkathi ubenzani?" ("What were you doing when the pain started?") vs "ubenzani yena" ("what was he/she doing").',
    rules: [
      '1st Person Sing: bengi- (bengi- + phuza -> bengiphuza: "I was drinking / taking")',
      '2nd Person Sing: ubu- (ubu- + thini -> ubuthini: "what were you saying?")',
      'Class 1 (3rd Person): ube- (ube- + gula -> ubegula: "he/she was sick earlier today/yesterday")',
      '1st Person Plural: sibe- (sibe- + hamba -> sibehamba: "we were walking/traveling")',
      'Class 2 (Plural): bebe- (bebe- + sebenza -> bebesebenza: "they were working")',
      'Clinical context: Essential for establishing the immediate background timeline prior to acute symptoms'
    ],
    examples: [
      {
        id: 'past-imm-ex-1',
        type: 'clinical',
        isizulu: 'Bengiphethwe yikhanda nesicanucanu izolo ebusuku, kodwa namuhla sekungcono.',
        english: 'I was suffering from a headache and nausea last night, but today it is somewhat better.',
        breakdown: [
          { chunk: 'Bengi-phethw-e', gloss: 'bengi- (1st person recent past continuous) + -phatha (hold/afflict) + -we (passive) + -e (stative/past: "I was afflicted")' },
          { chunk: 'yikhanda', gloss: 'yi- (copulative agentive prefix) + ikhanda ("by headache")' },
          { chunk: 'nesicanucanu', gloss: 'na- (and) + isicanucanu ("with nausea")' },
          { chunk: 'izolo ebusuku', gloss: 'izolo (yesterday) + ebusuku (at night)' },
          { chunk: 'kodwa namuhla', gloss: 'kodwa (but) + namuhla (today)' },
          { chunk: 'sekungcono', gloss: 'se- (now) + ku- (SC) + ngcono (better: "it is now better")' }
        ]
      },
      {
        id: 'past-imm-ex-2',
        type: 'clinical',
        isizulu: 'Isiguli besingakwazi ukuphefumula kahle ngesikhathi sifika emtholampilo.',
        english: 'The patient was unable to breathe properly at the time they arrived at the clinic.',
        breakdown: [
          { chunk: 'Isiguli', gloss: 'Class 7 noun (patient)' },
          { chunk: 'be-si-nga-kwaz-i', gloss: 'be- (past continuous) + si- (SC 7) + -nga- (participial neg) + -kwazi (be able) + -i (neg ending: "it was not able")' },
          { chunk: 'ukuphefumula kahle', gloss: 'to breathe + kahle (properly / well)' },
          { chunk: 'ngesikhathi si-fik-a', gloss: 'at the time + si- (SC 7) + -fika (arrived)' },
          { chunk: 'emtholampilo', gloss: 'locative (at the clinic)' }
        ]
      }
    ]
  },
  {
    id: 'past-remote-simple',
    category: 'past-tenses',
    title: 'Remote Past Simple (Deep Past Tense)',
    subtitle: 'The elided long -a- tense for events completed days, months, or years ago',
    formula: 'Subject Concord fused with -a- (nga-, wa-, sa-, ba-, kwa-) + Verb Root + -a',
    explanation:
      'Used for historical or completed events before yesterday. The subject concord fuses with the remote past tense marker -a-: ngi- + -a- -> nga- ("I did long ago"), u- + -a- -> wa- ("you/he/she did"), si- + -a- -> sa- ("we did"), ba- + -a- -> ba- ("they did"), ku- + -a- -> kwa- ("it occurred/happened").',
    commonPitfall:
      'Confusing remote past nga- with present ngiya-. "Ngahamba" means "I traveled long ago"; "Ngiyahamba" means "I am traveling right now". Also do not use remote past for events that took place this morning.',
    rules: [
      '1st Person Sing: nga- (ngi- + -a- -> nga- : "ngafika" = "I arrived years ago")',
      '2nd Person Sing & Class 1: wa- (u- + -a- -> wa- : "wazalwa" = "he/she was born")',
      'Class 2 (Plural): ba- (ba- + -a- -> ba- : "bahlala" = "they lived")',
      'Class 7: sa- (si- + -a- -> sa-), Class 9: ya- (i- + -a- -> ya-)',
      'Indefinite/Class 15/17: kwa- (ku- + -a- -> kwa- : "kwenzeka" = "it happened")'
    ],
    examples: [
      {
        id: 'past-rem-ex-1',
        type: 'clinical',
        isizulu: 'Ngahlinzwa esibhedlela eThekwini eminyakeni emibili edlule ngenxa yesinye.',
        english: 'I was operated on at the hospital in Durban two years ago because of the bladder.',
        breakdown: [
          { chunk: 'Nga-hlinzw-a', gloss: 'nga- (1st person remote past concord: "I ... long ago") + -hlinza (operate/surgery) + -wa (passive) + -a (remote simple ending: "I was operated on")' },
          { chunk: 'esibhedlela eThekwini', gloss: 'at the hospital + in Durban' },
          { chunk: 'eminyakeni emibili edlule', gloss: 'eminyakeni (years) + emibili (two) + edlule (which passed: "two years ago")' },
          { chunk: 'ngenxa yesinye', gloss: 'ngenxa (because of) + isinye (Class 7 noun: bladder)' }
        ]
      },
      {
        id: 'past-rem-ex-2',
        type: 'clinical',
        isizulu: 'Kwenzeka nini lokhu okokuqala empilweni yakho, mkhulu?',
        english: 'When did this happen for the first time in your life, grandfather?',
        breakdown: [
          { chunk: 'Kwa-enzek-a', gloss: 'ku- (impersonal SC) + -a- (remote past infix) + -enzeka (happen/occur: "it happened long ago")' },
          { chunk: 'nini lokhu', gloss: 'nini (when?) + lokhu (this thing)' },
          { chunk: 'okokuqala', gloss: 'for the first time' },
          { chunk: 'empilweni yakho', gloss: 'in your life' },
          { chunk: 'mkhulu', gloss: 'vocative kinship address (grandfather)' }
        ]
      }
    ]
  },
  {
    id: 'past-remote-continuous',
    category: 'past-tenses',
    title: 'Remote Past Continuous (Habitual / Chronic Past)',
    subtitle: 'Remote prefix + participial concord for chronic history and long-term habits',
    formula: 'Remote Concord (ngangi-, wawu-, waye-, sasi-, babe-) + Verb Root + -a / stative',
    explanation:
      'Combines the remote past marker with the participial continuous. Used for long-term health history, occupational exposures, and past habits (what a person "used to do" or conditions they lived with years ago): 1st Sing: ngangi- ("I used to smoke"), 2nd Sing: wawu- ("did you use to work in the mines?"), Class 1/1a: waye- ("he/she used to live in Durban"), Class 2: babe- ("they used to drink river water").',
    commonPitfall:
      'Failing to use the Class 1 irregular form waye- (combining wa- and participial e-). Saying *wawu- for Class 1 (3rd person) is grammatically incorrect; Class 1 human singular must be waye-.',
    rules: [
      '1st Person Sing: ngangi- (ngangi- + bhema -> ngangibhema: "I used to smoke")',
      '2nd Person Sing: wawu- (wawu- + sebenza -> wawusebenza: "you used to work")',
      'Class 1 (3rd Person): waye- (waye- + hlala -> wayehlala: "he/she used to live")',
      'Class 2 (Plural): babe- (babe- + phuza -> babephuza: "they used to drink")',
      'Indefinite: kwaku- (kwaku- + buhlungu -> kwakubuhlungu: "it used to be painful")'
    ],
    examples: [
      {
        id: 'past-remcont-ex-1',
        type: 'clinical',
        isizulu: 'Wawubhema ugwayi ngaphambili eminyakeni edlule ngaphambi kokuba uqale ukukhwehlela?',
        english: 'Did you use to smoke cigarettes previously in past years before you started coughing?',
        breakdown: [
          { chunk: 'Wawu-bhem-a', gloss: 'wawu- (2nd person remote continuous concord) + -bhema (smoke: "did you use to smoke?")' },
          { chunk: 'ugwayi ngaphambili', gloss: 'ugwayi (tobacco/cigarettes) + ngaphambili (previously / in the past)' },
          { chunk: 'eminyakeni edlule', gloss: 'in years that passed' },
          { chunk: 'ngaphambi kokuba', gloss: 'before that' },
          { chunk: 'u-qal-e ukukhwehlela', gloss: 'you begin + ukukhwehlela (to cough)' }
        ]
      },
      {
        id: 'past-remcont-ex-2',
        type: 'community',
        isizulu: 'Ngangihlala kude nomtholampilo ngakho kwakunzima ukuthola imithi njalo ngenyanga.',
        english: 'I used to live far from the clinic, so it used to be difficult to get medication every month.',
        breakdown: [
          { chunk: 'Ngangi-hlal-a', gloss: 'ngangi- (1st person remote continuous) + -hlala (live/stay: "I used to live")' },
          { chunk: 'kude nomtholampilo', gloss: 'kude (far) + na- (from) + umtholampilo (the clinic)' },
          { chunk: 'ngakho kwaku-nzima', gloss: 'ngakho (therefore) + kwaku- (impersonal remote continuous) + nzima (difficult)' },
          { chunk: 'ukuthola imithi', gloss: 'to obtain + imithi (medicines)' },
          { chunk: 'njalo ngenyanga', gloss: 'every month' }
        ]
      }
    ]
  },
  {
    id: 'past-negation-systems',
    category: 'past-tenses',
    title: 'Past Negation Systems (Simple vs. Continuous)',
    subtitle: 'How to negate completed past actions (-anga) versus ongoing past states (bengi-nga-...-i)',
    formula: 'Simple Past Neg: a- + SC + Root + -anga | Past Cont Neg: be- + SC + -nga- + Root + -i',
    explanation:
      'isiZulu uses two distinct systems for past negation depending on aspect: (1) Completed Past Negation: drop final vowel, prefix a- and suffix -anga (angihambanga = "I did not go", akaphuzanga = "he/she did not drink"). Or use the past auxiliary: angizange ngiphulwe ("I never broke a bone"). (2) Continuous Past Negation: uses the mid-verb participial negative infix -nga-...-i (bengingazi = "I was not aware", ubengezwa buhlungu = "he/she was not feeling pain").',
    commonPitfall:
      'Saying *"Angihambi izolo"* (present negative) instead of *"Angihambanga izolo"*. The suffix -anga is mandatory for completed past negative.',
    rules: [
      'Completed past negative: a- + SC + Root + -anga (a-ngi-phuz-anga -> angiphuzanga: "I did not drink")',
      'Continuous past negative: be- + SC + -nga- + Root + -i (bengi-nga-z-i -> bengingazi: "I was not knowing")',
      'Auxiliary past negative: a- + SC + -zange + Subjunctive (angizange ngibone: "I never saw / didn\'t ever see")',
      'Contracted speech: ubengezwa buhlungu (ube- + nga- + ezwa -> ubengezwa)'
    ],
    examples: [
      {
        id: 'past-neg-ex-1',
        type: 'clinical',
        isizulu: 'Angiwaphuzanga amaphilisi izolo ebusuku ngoba bengizizwa nginesicanucanu.',
        english: 'I did not take the pills yesterday night because I was feeling nauseous.',
        breakdown: [
          { chunk: 'A-ngi-wa-phuz-anga', gloss: 'a- (neg prefix) + ngi- (1st person SC) + -wa- (Class 6 object concord for amaphilisi) + -phuza (take) + -anga (completed past negative suffix: "I did not take")' },
          { chunk: 'amaphilisi izolo ebusuku', gloss: 'the pills + yesterday night' },
          { chunk: 'ngoba bengi-zizw-a', gloss: 'because + bengi- (recent past continuous) + -zizwa (feeling myself)' },
          { chunk: 'nginesicanucanu', gloss: 'with nausea' }
        ]
      },
      {
        id: 'past-neg-ex-2',
        type: 'clinical',
        isizulu: 'Bengingazi ukuthi kumele ngidle ngaphambi kokuba ngiphuze lo muthi.',
        english: 'I was not aware that I was supposed to eat before taking this medicine.',
        breakdown: [
          { chunk: 'Bengi-nga-z-i', gloss: 'bengi- (1st person recent past continuous) + -nga- (participial negative infix) + -za (know) + -i (negative ending: "I did not know / was not aware")' },
          { chunk: 'ukuthi kumele ngidle', gloss: 'that it is necessary that I eat (subjunctive)' },
          { chunk: 'ngaphambi kokuba', gloss: 'before that' },
          { chunk: 'ngiphuze lo muthi', gloss: 'I take + lo (this) + umuthi (medicine)' }
        ]
      }
    ]
  },
  {
    id: 'past-clinical-history-stems',
    category: 'past-tenses',
    title: 'Clinical History-Taking & Onset Formulas',
    subtitle: 'Essential past-tense structures for symptom timeline and onset elicitation',
    formula: 'Question Particle + Past Concord + Clinical Stem (Kuqale nini / Wenzani / Wawunayo)',
    explanation:
      'In clinical consultations across KwaZulu-Natal, establishing an accurate timeline of symptoms requires switching precisely between recent past, remote past, and background continuous forms.',
    commonPitfall:
      'Using present tense to ask onset questions. Saying *Kuqala nini?* (When does it usually start?) instead of *Kuqale nini?* (When did it start recently?) or *Kwenzeka nini lokhu okokuqala?* (When did this first happen?).',
    rules: [
      'Immediate symptom onset: Kuqale nini lokhu? ("When did this start?")',
      'Remote historical onset: Kwenzeka nini lokhu okokuqala? ("When did this first happen?")',
      'Precipitating activity: Ubuhlungu buqale ngenkathi wenzani? ("What were you doing when pain began?")',
      'Prior episodes: Wawunayo le nkinga ngaphambili? ("Did you have this problem previously?")',
      'Duration: Kuthathe isikhathi esingakanani? ("How long did it take / last?")'
    ],
    examples: [
      {
        id: 'past-hist-ex-1',
        type: 'clinical',
        isizulu: 'Ubuhlungu baqala ngokungazelelwe izolo ngenkathi ubelele embhedeni yini?',
        english: 'Did the pain start suddenly yesterday while you were lying on the bed?',
        breakdown: [
          { chunk: 'Ubuhlungu', gloss: 'Class 14 noun (pain)' },
          { chunk: 'ba-qal-a', gloss: 'ba- (Class 14 remote/narrative concord: bu- + -a-) + -qala (start: "started")' },
          { chunk: 'ngokungazelelwe', gloss: 'adverb ("suddenly / unexpectedly")' },
          { chunk: 'izolo ngenkathi', gloss: 'yesterday + while' },
          { chunk: 'u-be-lel-e', gloss: 'ube- (2nd person past continuous: ubu- contracted before stative) + -lele (lying/asleep)' },
          { chunk: 'embhedeni yini?', gloss: 'on the bed + question particle' }
        ]
      },
      {
        id: 'past-hist-ex-2',
        type: 'clinical',
        isizulu: 'Waqala nini ukuzizwa ngale ndlela, futhi wawunayo le nkinga ngaphambili?',
        english: 'When did you begin to feel this way, and did you have this problem previously?',
        breakdown: [
          { chunk: 'Wa-qal-a nini', gloss: 'wa- (2nd person past concord: u- + -a-) + -qala (begin/start) + nini (when?)' },
          { chunk: 'ukuzizwa ngale ndlela', gloss: 'to feel yourself + in this manner/way' },
          { chunk: 'futhi wawu-nayo', gloss: 'and + wawu- (2nd person remote continuous) + na- (with) + -yo (Class 9 pronoun for inkinga: "did you have it?")' },
          { chunk: 'le nkinga ngaphambili', gloss: 'this problem + previously / in the past' }
        ]
      }
    ]
  },

  // ==========================================
  // CATEGORY 2: THE STATIVE ASPECT (5 RULES)
  // ==========================================
  {
    id: 'stative-core-concept',
    category: 'stative',
    title: 'Process vs. Present Resulting State',
    subtitle: 'Why past morphology (-ile / -e) denotes ongoing present physical & mental reality',
    formula: 'Subject Concord + Verb Root + -ile / -e (Describes CURRENT State)',
    explanation:
      'Stative verbs represent actions where the process of entering the state took place in the past, but the resulting condition is actively true in the present moment. Contrast sharply with true past actions (ngisebenzile = "I worked" [completed activity] vs. ngilambile = "I am hungry" [resulting state active right now]). Never translate statives as simple English past tense.',
    commonPitfall:
      'Translating "ngikhathele" as "I became tired / I got tired" instead of "I am tired", or "izinyawo zivuvukile" as "feet got swollen" instead of "the feet are swollen right now".',
    rules: [
      'Entering state -> Present reality: -lamba (become hungry) -> ngilambile ("I am hungry")',
      'Fatigue & lethargy: -khathala (become weary) -> ngikhathele ("I am exhausted")',
      'Posture and position: -hlala (sit down) -> uhlezi ("he/she is seated / lives")',
      'Contrast with actions: ngidulile ("I ate" - past action) vs. ngisuthi ("I am full" - present state)',
      'Clinical context: Vital for baseline physical examinations and triage'
    ],
    examples: [
      {
        id: 'stative-core-ex-1',
        type: 'clinical',
        isizulu: 'Izinyawo zivuvukile kakhulu ngenxa yokuhamba ibanga elide.',
        english: 'The feet are very swollen because of walking a long distance.',
        breakdown: [
          { chunk: 'Izinyawo', gloss: 'Class 10 noun (feet)' },
          { chunk: 'zi-vuvuk-ile', gloss: 'zi- (SC 10) + -vuvuka (swell) + -ile (stative suffix: "are currently swollen")' },
          { chunk: 'kakhulu', gloss: 'adverb of degree (very / severely)' },
          { chunk: 'ngenxa yokuhamba', gloss: 'ngenxa (because of) + yokuhamba (possessive infinitive: "of walking")' },
          { chunk: 'ibanga elide', gloss: 'ibanga (Class 5 noun: distance) + elide (adjective: long)' }
        ]
      },
      {
        id: 'stative-core-ex-2',
        type: 'community',
        isizulu: 'Inja ilele phansi emthunzini ngoba kuyashisa kabi namuhla.',
        english: 'The dog is lying asleep on the ground in the shade because it is bitterly hot today.',
        breakdown: [
          { chunk: 'Inja', gloss: 'Class 9 noun (dog)' },
          { chunk: 'i-lel-e', gloss: 'i- (SC 9) + -lala (lie down) + -ele (irregular stative ending: "is lying asleep")' },
          { chunk: 'phansi emthunzini', gloss: 'phansi (on the ground) + emthunzini (locative of umthunzi: in the shade)' },
          { chunk: 'ngoba kuyashisa', gloss: 'ngoba (causal conjunction: because) + ku- (impersonal SC) + -shisa (hot)' },
          { chunk: 'kabi namuhla', gloss: 'kabi (severely / bitterly) + namuhla (today)' }
        ]
      }
    ]
  },
  {
    id: 'stative-contraction-rule',
    category: 'stative',
    title: 'The Contraction Rule (-ile vs. -e)',
    subtitle: 'Dropping to -e when directly followed by adverbs, questions, or locatives',
    formula: '[End of clause / Before pause] -> -ile | [Before adverb / object / complement] -> -e',
    explanation:
      'When the stative verb appears at the end of a clause or immediately before a grammatical pause, it takes the full suffix -ile. However, as soon as an adverb of degree (kakhulu, kabi), a complement, or a locative directly follows in the same clause, the suffix contracts by dropping -il- and taking final -e.',
    commonPitfall:
      'Saying *"Ngilambile kakhulu"* instead of the contracted *"Ngilambe kakhulu"*. Whenever an adverb or complement immediately follows, you MUST drop to -e.',
    rules: [
      'Sentence Final (Full form -ile): "Ngilambile." ("I am hungry.")',
      'Before Adverb (Contracted -e): "Ngilambe kakhulu." ("I am very hungry.")',
      'Before Locative Complement: "Izinyawo zivuvuke emalungwini." ("The feet are swollen at the joints.")',
      'Before Question Particle: "Ukhathele yini?" ("Are you tired?")',
      'Contrasting clause: "Izinyawo zivuvukile, kodwa zivuvuke kakhulu ngakwesokudla."'
    ],
    examples: [
      {
        id: 'stative-cont-ex-1',
        type: 'clinical',
        isizulu: 'Izinyawo zivuvukile, kodwa zivuvuke kakhulu emlenzeni wesokudla ngenxa yomgwaqo.',
        english: 'The feet are swollen, but they are swollen more severely on the right leg because of the road.',
        breakdown: [
          { chunk: 'zi-vuvuk-ile', gloss: 'full form -ile (sentence/clause pause)' },
          { chunk: 'kodwa', gloss: 'coordinating conjunction ("but")' },
          { chunk: 'zi-vuvuk-e', gloss: 'contracted form -e (immediately followed by adverb kakhulu)' },
          { chunk: 'kakhulu', gloss: 'adverb ("very / severely")' },
          { chunk: 'emlenzeni wesokudla', gloss: 'locative ("on the right leg")' }
        ]
      },
      {
        id: 'stative-cont-ex-2',
        type: 'community',
        isizulu: 'Ngilambe kakhulu mama; ngicela ungiphe ukudla uma sekuphekiwe.',
        english: 'I am very hungry mama; please give me food once it has been cooked.',
        breakdown: [
          { chunk: 'Ngi-lamb-e', gloss: 'ngi- (1st person SC) + -lamba (become hungry) + -e (contracted stative before adverb: "I am hungry")' },
          { chunk: 'kakhulu mama', gloss: 'kakhulu (very) + mama (vocative address: mother)' },
          { chunk: 'ngicela ungiphe', gloss: 'ngicela (I request) + u-ngi-phe (give me: subjunctive)' },
          { chunk: 'ukudla uma sekuphekiwe', gloss: 'ukudla (food) + uma (when) + se-ku-phekiwe (is already cooked)' }
        ]
      }
    ]
  },
  {
    id: 'stative-irregular-stems',
    category: 'stative',
    title: 'Irregular Stative Mutations',
    subtitle: 'Verbs ending in -ala, -ama, and special stems that do not take -ile',
    formula: '-ala -> -ele | -ama -> -eme | -sutha -> -suthi | -hlala -> -hlezi',
    explanation:
      'Certain high-frequency roots undergo morphological mutations rather than suffixing -ile. Verbs ending in -ala systematically shift to -ele; verbs ending in -ama shift to -eme; and monosyllabic or special stems take idiosyncratic endings (-lala -> -lele, -sutha -> -suthi).',
    commonPitfall:
      'Attempting to add -ile to irregular verbs (e.g., saying *ngikhathalile instead of ngikhathele, or *ngilalile instead of ngilele). Always memorize the core mutation patterns.',
    rules: [
      'Verbs in -ala -> -ele: -khathala -> ngikhathele, -limala -> ulimele ("injured"), -zala -> uzele ("given birth")',
      'Verbs in -ama -> -eme: -phapama -> uphapheme ("awake / alert"), -khothama -> ukhotheme ("bowed")',
      'Irregular -lala: -lala -> ulele ("asleep / lying down")',
      'Irregular -sutha: -sutha -> ngisuthi ("I am sated / full after eating")',
      'Irregular -hlala: -hlala -> uhlezi ("seated / living")'
    ],
    examples: [
      {
        id: 'stative-irreg-ex-1',
        type: 'clinical',
        isizulu: 'Isiguli siphapheme futhi siqondile, kodwa ulimele emlenzeni wesokudla.',
        english: 'The patient is alert and coherent, but he is injured in the right leg.',
        breakdown: [
          { chunk: 'Isiguli', gloss: 'Class 7 noun (patient)' },
          { chunk: 'si-phaphem-e', gloss: 'si- (SC 7) + -phapama (wake/alert) + -eme (irregular stative of -ama verb: "is alert/conscious")' },
          { chunk: 'futhi siqondile', gloss: 'futhi (and) + si-qondile (is coherent / upright)' },
          { chunk: 'kodwa u-limel-e', gloss: 'kodwa (but) + u- (SC 1) + -limala (injure) + -ele (irregular stative of -ala: "is injured")' },
          { chunk: 'emlenzeni wesokudla', gloss: 'locative ("on the right leg")' }
        ]
      },
      {
        id: 'stative-irreg-ex-2',
        type: 'clinical',
        isizulu: 'Umntwana usuthi kahle manje ngoba uncelisiwe ngumama wakhe.',
        english: 'The baby is nicely full now because he has been breastfed by his mother.',
        breakdown: [
          { chunk: 'Umntwana', gloss: 'Class 1 noun (infant / child)' },
          { chunk: 'u-suthi', gloss: 'u- (SC 1) + -sutha (sate) + -i (irregular stative ending: "is full/sated")' },
          { chunk: 'kahle manje', gloss: 'kahle (well) + manje (now)' },
          { chunk: 'ngoba uncelisiwe', gloss: 'ngoba (because) + u-ncelisiwe (has been nursed/breastfed)' },
          { chunk: 'ngumama wakhe', gloss: 'copulative agent ("by his mother")' }
        ]
      }
    ]
  },
  {
    id: 'stative-negation-trap',
    category: 'stative',
    title: 'Stative Negation (The -ile Retention Trap)',
    subtitle: 'Why statives DO NOT shift to final -i in the negative',
    formula: 'a- + Subject Concord + Verb Root + -ile / -ele (NO final -i shift)',
    explanation:
      'In standard present indicative verbs, negation requires dropping final -a for -i (angisebenzi). Crucially, stative verbs DO NOT undergo this shift. Because they describe a present state rather than a general present action, they RETAIN their stative suffix (-ile or irregular -ele / -eme). Only the initial negative prefix a- is attached.',
    commonPitfall:
      'Saying *"Angilambi"* (which means "I don\'t get hungry [habitually]") when you mean *"Angilambile"* ("I am not hungry right now"). Or saying *"akalele"* vs *"akali"* (incorrect).',
    rules: [
      'Retain full -ile in negative: ngilambile -> angilambile ("I am not hungry right now")',
      'Retain irregular -ele in negative: ulele -> akalele ("he/she is not asleep")',
      'Alertness check: uphapheme -> akaphapheme ("he/she is not alert / unarousable")',
      'Clinical swelling: zivuvukile -> azivuvukile ("the feet are not swollen today")',
      'Injury assessment: ulimele -> akalimele ("he/she is not injured")'
    ],
    examples: [
      {
        id: 'stative-neg-ex-1',
        type: 'clinical',
        isizulu: 'Izinyawo azivuvukile namuhla, futhi isifuba asivalekile njengayizolo.',
        english: 'The feet are not swollen today, and the chest is not congested like yesterday.',
        breakdown: [
          { chunk: 'Izinyawo', gloss: 'Class 10 noun (feet)' },
          { chunk: 'a-zi-vuvuk-ile', gloss: 'a- (neg prefix) + zi- (SC 10) + -vuvuka (swell) + -ile (retains stative -ile: "are not swollen")' },
          { chunk: 'namuhla', gloss: 'adverb ("today")' },
          { chunk: 'futhi a-si-valek-ile', gloss: 'futhi (and) + a- (neg) + si- (SC 7) + -valeka (congest) + -ile (retains -ile: "is not congested")' },
          { chunk: 'njengayizolo', gloss: 'conjunctional adverb ("like yesterday")' }
        ]
      },
      {
        id: 'stative-neg-ex-2',
        type: 'clinical',
        isizulu: 'Umntwana akalele kodwa akaphapheme kahle; kumele simhlole ukuthi akashisi yini.',
        english: 'The child is not asleep but is not alert properly; we must check whether he has a fever.',
        breakdown: [
          { chunk: 'Umntwana', gloss: 'Class 1 noun (child)' },
          { chunk: 'a-ka-lel-e', gloss: 'a- (neg prefix) + ka- (Class 1 neg SC) + -lele (retains irregular stative -ele: "is not asleep")' },
          { chunk: 'kodwa a-ka-phaphem-e', gloss: 'kodwa (but) + a-ka-phapheme (retains irregular -eme: "is not alert")' },
          { chunk: 'kahle', gloss: 'adverb ("well / properly")' },
          { chunk: 'kumele simhlole ukuthi akashisi yini', gloss: 'we must examine him whether he is not hot / febrile' }
        ]
      }
    ]
  },
  {
    id: 'stative-clinical-lexicon',
    category: 'stative',
    title: 'Essential Clinical Stative Inventory',
    subtitle: 'Core diagnostic vocabulary for symptoms, alertness, and physical findings',
    formula: 'Root -> Stative Form -> Diagnostic Function',
    explanation:
      'In rural KZN clinical consultations, patient history and triage rely heavily on stative aspect markers to communicate acute vs. chronic conditions, hydration, consciousness, and pain.',
    commonPitfall:
      'Translating clinical conditions (dehydration, fullness, swelling) with English adjectives without knowing their underlying isiZulu stative verb roots.',
    rules: [
      'Swelling / Effusion: -vuvuka -> zivuvukile (swollen); -gcwala -> kugcwele amanzi (fluid-filled / effused)',
      'Dehydration / Mucosa: -oma -> womile ("he/she is dehydrated / dry"); umlomo womile ("dry mouth")',
      'Consciousness / Neurological: -quleka -> uqulekile ("unconscious / fainted"); -phapama -> uphapheme ("alert / conscious")',
      'Fatigue / Lethargy: -khathala -> ukhathele ("exhausted / lethargic"); -dangalala -> udangele ("depressed / listless")',
      'Chest / Obstruction: -valeka -> sivalekile ("chest is congested / airway blocked")'
    ],
    examples: [
      {
        id: 'stative-lex-ex-1',
        type: 'clinical',
        isizulu: 'Umlomo womile kakhulu futhi amehlo ashonile; umntwana uphelelwe ngamanzi emzimbeni.',
        english: 'The mouth is very dry and the eyes are sunken; the child is dehydrated.',
        breakdown: [
          { chunk: 'Umlomo', gloss: 'Class 3 noun (mouth)' },
          { chunk: 'w-omil-e', gloss: 'u- (SC 3) + -oma (dry) + -e (contracted stative before adverb: "is dry")' },
          { chunk: 'kakhulu', gloss: 'adverb ("very / severely")' },
          { chunk: 'amehlo a-shon-ile', gloss: 'amehlo (eyes) + a-shonile (are sunken / hollow: stative of -shona)' },
          { chunk: 'uphelelwe ngamanzi emzimbeni', gloss: 'is depleted of fluid in the body (dehydration)' }
        ]
      },
      {
        id: 'stative-lex-ex-2',
        type: 'clinical',
        isizulu: 'Iphaphu langakwesokunxele ligcwele uketshezi, kanti isiguli siqulekile asiphenduli.',
        english: 'The left lung is full of fluid, and the patient is unconscious and unresponsive.',
        breakdown: [
          { chunk: 'Iphaphu langakwesokunxele', gloss: 'Class 5 noun (left lung)' },
          { chunk: 'li-gcwel-e', gloss: 'li- (SC 5) + -gcwala (fill) + -ele (irregular stative of -ala: "is full / effused")' },
          { chunk: 'uketshezi', gloss: 'Class 11 noun (fluid / effusion)' },
          { chunk: 'kanti isiguli', gloss: 'kanti (whereas) + isiguli (patient)' },
          { chunk: 'si-qulek-ile', gloss: 'si- (SC 7) + -quleka (faint/collapse) + -ile (stative: "is unconscious / fainted")' },
          { chunk: 'asiphenduli', gloss: 'negative indicative ("does not answer / unresponsive")' }
        ]
      }
    ]
  },

  // ==========================================
  // CATEGORY 3: CONJUNCTIONS & CLAUSE GOVERNANCE
  // ==========================================
  {
    id: 'conj-subjunctive-triggers',
    category: 'conjunctions',
    title: 'Subjunctive-Triggering Conjunctions (Purpose & Obligation)',
    subtitle: 'Why words like ukuze, kumele, and kufanele force verbs to end in -e',
    formula: '[ukuze / kumele / kufanele / ake] + Subject Concord + Verb Root + -e',
    explanation:
      'When expressing purpose ("in order that / so that") or necessity ("must / should / it is necessary"), isiZulu strictly demands the subjunctive mood. The final vowel of the verb shifts from default -a to -e (uphuza -> uphuze). In negative clauses, the subjunctive does not use standard a-...-i; instead, it inserts the mid-verb negative particle -nga-...-i (ukuze ungaguli = "so that you do not become sick").',
    commonPitfall:
      'Using the indicative ending -a after ukuze (e.g., saying *ukuze uyaphola* instead of *ukuze uphole*). The subjunctive -e shift is mandatory after purposive and obligative conjunctions.',
    rules: [
      'ukuze (so that / in order that): ukuze + u-phol-e -> ukuze uphole ("so that you heal")',
      'kufanele / kumele (must / should): kufanele + u-hlal-e phansi -> kufanele uhlale phansi ("you must sit down")',
      'ake (polite hortative / kindly): ake + u-vum-e -> ake uvume ("please allow / agree")',
      'Subjunctive Negation: -nga-...-i infix (ukuze ungaquleki: "so that you do not collapse")',
      'Clinical utility: Essential for medication dosage rationales and safe patient instructions'
    ],
    examples: [
      {
        id: 'conj-subj-ex-1',
        type: 'clinical',
        isizulu: 'Phuza la maphilisi kathathu ngosuku ukuze wehlise umfutho wegazi.',
        english: 'Take these pills three times a day so that you lower blood pressure.',
        breakdown: [
          { chunk: 'Phuza la maphilisi', gloss: 'imperative ("take these pills")' },
          { chunk: 'kathathu ngosuku', gloss: 'adverb ("three times a day")' },
          { chunk: 'ukuze', gloss: 'purposive conjunction ("so that / in order that")' },
          { chunk: 'w-ehlis-e', gloss: 'u- (2nd person SC) + -ehlisa (bring down) + -e (subjunctive ending triggered by ukuze)' },
          { chunk: 'umfutho wegazi', gloss: 'Class 3 noun ("blood pressure")' }
        ]
      },
      {
        id: 'conj-subj-ex-2',
        type: 'clinical',
        isizulu: 'Kufanele uhlale phansi uma uzizwa unesiyezi ukuze ungaquleki phansi.',
        english: 'You must sit down if you feel dizzy so that you do not faint on the floor.',
        breakdown: [
          { chunk: 'Kufanele', gloss: 'obligative auxiliary verb ("it is necessary / you must")' },
          { chunk: 'u-hlal-e phansi', gloss: 'u- (SC) + -hlala (sit) + -e (subjunctive ending) + phansi (down)' },
          { chunk: 'uma uzizwa unesiyezi', gloss: 'conditional clause ("if you feel dizzy")' },
          { chunk: 'ukuze', gloss: 'conjunction ("in order that / so that")' },
          { chunk: 'u-nga-qulek-i', gloss: 'u- (SC) + -nga- (subjunctive negative infix) + -quleka (faint) + -i (negative ending)' },
          { chunk: 'phansi', gloss: 'adverb ("on the floor / down")' }
        ]
      }
    ]
  },
  {
    id: 'conj-participial-triggers',
    category: 'conjunctions',
    title: 'Participial-Triggering Conjunctions (Conditions & Time)',
    subtitle: 'How "if", "when", "while", and "because" trigger 3rd-person concord mutations',
    formula: '[uma / ngenkathi / ngoba / selokhu] + Participial Concord (e-, be-) + Verb Root + -a',
    explanation:
      'Conditional ("if"), situational ("while"), and causal ("because") clauses put the following verb into the participial mood (Isimo Esincikile). Crucially, 3rd person singular Class 1/1a (u-) mutates to e- (Uma egula... = "If he/she is sick"; Ngoba engasebenzi... = "Because he/she doesn\'t work"). Class 2 (ba-) mutates to be- (Uma behlala lapha...). Negation mandatorily uses the mid-verb participial negative infix -nga-...-i (Uma engaphuzi mithi...).',
    commonPitfall:
      'Saying *Uma ugula* for a third person ("If he is sick"). In third person, u- must mutate to e-: *Uma egula*. Also never use main-clause negation *uma akaguli*; it must be *uma engaguli*.',
    rules: [
      'Class 1 (he/she) mutation: u- shifts to e- (uma egula: "if he/she is sick")',
      'Class 2 (they) mutation: ba- shifts to be- (uma behamba: "if they travel")',
      'Participial Negation: -nga-...-i infix (ngoba engaphuzi mithi: "because he does not take meds")',
      'Key Subordinating Conjunctions: uma (if/when), ngenkathi (while), ngoba (because), selokhu (since)'
    ],
    examples: [
      {
        id: 'conj-part-ex-1',
        type: 'clinical',
        isizulu: 'Uma isifuba siqhubeka nokubuhlungu, buya emtholampilo ngokushesha.',
        english: 'If the chest continues to hurt, return to the clinic immediately.',
        breakdown: [
          { chunk: 'Uma', gloss: 'conditional conjunction ("if / when")' },
          { chunk: 'isifuba si-qhubek-a', gloss: 'isifuba (Class 7: chest) + si- (SC 7) + -qhubeka (continue)' },
          { chunk: 'nokubuhlungu', gloss: 'na- (with) + ubuhlungu (pain: "being painful")' },
          { chunk: 'buya emtholampilo', gloss: 'imperative ("return to the clinic")' },
          { chunk: 'ngokushesha', gloss: 'adverb ("promptly / urgently / immediately")' }
        ]
      },
      {
        id: 'conj-part-ex-2',
        type: 'clinical',
        isizulu: 'Uphuza lamaphilisi njalo ngoba enomfutho ophakeme wenhliziyo.',
        english: 'He takes these pills regularly because he has high blood pressure of the heart.',
        breakdown: [
          { chunk: 'U-phuz-a lamaphilisi', gloss: 'u- (Class 1 SC) + -phuza (takes) + lamaphilisi (these pills)' },
          { chunk: 'njalo', gloss: 'adverb of frequency ("regularly / always")' },
          { chunk: 'ngoba', gloss: 'causal conjunction ("because / since")' },
          { chunk: 'e-no-mfutho', gloss: 'e- (Class 1 participial concord mutating from u-) + na- (with/has) + umfutho (pressure)' },
          { chunk: 'ophakeme wenhliziyo', gloss: 'ophakeme (high / elevated) + wenhliziyo (of the heart)' }
        ]
      }
    ]
  },
  {
    id: 'conj-coordinating-linkers',
    category: 'conjunctions',
    title: 'Independent Coordinating Conjunctions (No Verb Mutation)',
    subtitle: 'Connecting independent statements without altering mood or concords',
    formula: 'Clause A [Indicative] + [kodwa / futhi / noma / kanti] + Clause B [Indicative]',
    explanation:
      'These coordinating conjunctions act as neutral bridges connecting independent clauses. Unlike subjunctive or participial conjunctions, they do not require any mood shifts, vowel ending alterations (-e), or concord mutations: kodwa ("but / however"), futhi ("and / furthermore"), noma ("or / even if"), and kanti ("whereas / and yet / unexpectedly").',
    commonPitfall:
      'Mistakenly applying subjunctive -e after kodwa. Verbs after kodwa remain in their natural indicative tense (e.g. *kodwa uyagula*, not *kodwa agule*).',
    rules: [
      'kodwa (but / however): Conjoins contrasting independent statements without mood change',
      'futhi (and / furthermore / again): Adds parallel facts or symptoms neutrally',
      'noma (or / whether): Expresses clinical or lifestyle alternatives',
      'kanti (whereas / and yet / surprisingly): Highlights unexpected discrepancies or contradictory history'
    ],
    examples: [
      {
        id: 'conj-coord-ex-1',
        type: 'clinical',
        isizulu: 'Iphilisi liyabiza, kodwa liyasebenza kakhulu ukwehlisa ubuhlungu obusehlombe.',
        english: 'The pill is expensive, but it works very well to reduce the pain in the shoulder.',
        breakdown: [
          { chunk: 'Iphilisi li-ya-biz-a', gloss: 'iphilisi (Class 5) + liya- (long present) + -biza (cost / be expensive)' },
          { chunk: 'kodwa', gloss: 'coordinating contrastive conjunction ("but / however")' },
          { chunk: 'li-ya-sebenz-a kakhulu', gloss: 'li- (SC 5) + -sebenza (works) + kakhulu (very much / effectively)' },
          { chunk: 'ukwehlisa ubuhlungu', gloss: 'infinitive ("to lower") + ubuhlungu (pain)' },
          { chunk: 'obusehlombe', gloss: 'relative locative ("which is in the shoulder")' }
        ]
      },
      {
        id: 'conj-coord-ex-2',
        type: 'community',
        isizulu: 'Ngiyafuna ukuhamba edolobheni, kanti izinyawo azivumi ngenxa yokuvuvuka.',
        english: 'I want to walk to town, whereas my feet will not cooperate because of swelling.',
        breakdown: [
          { chunk: 'Ngi-ya-fun-a ukuhamba', gloss: 'ngiyafuna (I want) + ukuhamba (to walk)' },
          { chunk: 'edolobheni', gloss: 'locative ("in / to town")' },
          { chunk: 'kanti', gloss: 'adversative coordinating conjunction ("whereas / and yet")' },
          { chunk: 'izinyawo a-zi-vum-i', gloss: 'izinyawo (Class 10: feet) + azi- (neg SC) + -vuma (agree/cooperate) + -i (neg ending)' },
          { chunk: 'ngenxa yokuvuvuka', gloss: 'because of + ukuvuvuka (swelling / edema)' }
        ]
      }
    ]
  },
  {
    id: 'conj-compound-prepositional',
    category: 'conjunctions',
    title: 'Prepositional Conjunctions (Before & After Sequences)',
    subtitle: 'Constructing chronological medical instructions with inflected nouns of time',
    formula: 'ngaphambi kokuba + Subjunctive (-e) | emva kokuba + Participial',
    explanation:
      'Complex chronological sequencing is essential for medication timing and procedural explanations in clinical consultations. ngaphambi kokuba... ("before..."): triggers the subjunctive mood (-e: ngaphambi kokuba udle = "before you eat"). emva kokuba... / ngemva kokuba... ("after..."): triggers the participial mood (emva kokuba uphuzile amaphilisi = "after you have taken the pills"). Colloquial alternatives like anduba... / ngaphambi kokuthi... also govern the subjunctive.',
    commonPitfall:
      'Using default indicative verbs after ngaphambi kokuba (*ngaphambi kokuba uyadla*). You must use the subjunctive: *ngaphambi kokuba udle*.',
    rules: [
      'ngaphambi kokuba (before): Mandates the subjunctive mood (-e: ngaphambi kokuba ulale)',
      'emva kokuba / ngemva kokuba (after): Mandates participial/stative (emva kokuba uqedile)',
      'ngaphambi kokuthi: Modern colloquial equivalent also triggering subjunctive',
      'Medication timing: Phumuza umzimba ngaphambi kokuba uqale ukuzivocavoca'
    ],
    examples: [
      {
        id: 'conj-prep-ex-1',
        type: 'clinical',
        isizulu: 'Phuza lo muthi ngaphambi kokuba ulale ebusuku njalo ngaphambi kokudla.',
        english: 'Drink this medicine before you sleep at night, always before eating.',
        breakdown: [
          { chunk: 'Phuz-a lo muthi', gloss: 'drink (imperative) + lo muthi (this medicine)' },
          { chunk: 'ngaphambi kokuba', gloss: 'compound conjunction ("before that...")' },
          { chunk: 'u-lal-e ebusuku', gloss: 'u- (SC) + -lala (sleep) + -e (subjunctive ending) + ebusuku (at night)' },
          { chunk: 'njalo ngaphambi kokudla', gloss: 'always + before eating' }
        ]
      },
      {
        id: 'conj-prep-ex-2',
        type: 'clinical',
        isizulu: 'Buya emtholampilo emva kokuba uqedile la maphilisi emasontweni amabili.',
        english: 'Return to the clinic after you have finished these pills in two weeks.',
        breakdown: [
          { chunk: 'Buy-a emtholampilo', gloss: 'return (imperative) + emtholampilo (to the clinic)' },
          { chunk: 'emva kokuba', gloss: 'compound conjunction ("after that...")' },
          { chunk: 'u-qed-ile la maphilisi', gloss: 'u- (SC) + -qeda (finish) + -ile (completed participial aspect) + these pills' },
          { chunk: 'emasontweni amabili', gloss: 'in two weeks' }
        ]
      }
    ]
  },
  {
    id: 'conj-clinical-advisories',
    category: 'conjunctions',
    title: 'Clinical Advisory & Action-Plan Formulations',
    subtitle: 'Combining conjunctions to build safe discharge and emergency escalation instructions',
    formula: '[Condition: uma...] + [Escalation: kumele...] + [Purpose: ukuze...]',
    explanation:
      'Multi-clause compound sentences form the foundation of clinical discharge safety-netting and chronic disease counseling. Combining the 3 tiers: [Condition: uma...] + [Action: kumele...] + [Rationale: ukuze...] provides unambiguous guidance for patients. For adherence warnings, noma ("even if") is paired with negative advisories: Ungayeki ukuphuza lamaphilisi noma uzizwa ungcono ("Do not stop taking these pills even if you feel better").',
    commonPitfall:
      'Dropping connecting conjunctions in discharge instructions, leaving patients unclear on when to escalate care vs when to continue routine meds.',
    rules: [
      'The 3-Tier Clinical Compound: [Condition: uma] + [Action: kumele] + [Rationale: ukuze]',
      'Adherence Warning with noma: Ungayeki ukuphuza noma uzizwa ungcono ("even if you feel better")',
      'Emergency Escalation: Uma kukhona igazi, kumele uze ngokushesha esibhedlela',
      'Clear conditional boundaries prevent medication non-adherence and delayed presentations'
    ],
    examples: [
      {
        id: 'conj-adv-ex-1',
        type: 'clinical',
        isizulu: 'Uma ubuhlungu buqhubeka ngempelasonto, kumele uhambe ngokushesha esibhedlela ukuze odokotela bakuhlole.',
        english: 'If the pain continues over the weekend, you must go immediately to the hospital so that doctors can examine you.',
        breakdown: [
          { chunk: 'Uma ubuhlungu bu-qhubek-a', gloss: 'if the pain continues' },
          { chunk: 'ngempelasonto', gloss: 'over the weekend' },
          { chunk: 'kumele u-hamb-e', gloss: 'must (auxiliary) + you go (subjunctive)' },
          { chunk: 'ngokushesha esibhedlela', gloss: 'promptly to the hospital' },
          { chunk: 'ukuze odokotela ba-ku-hlol-e', gloss: 'so that + doctors + they examine you (subjunctive)' }
        ]
      },
      {
        id: 'conj-adv-ex-2',
        type: 'clinical',
        isizulu: 'Uphuze amaphilisi omfutho wegazi njalo ngesikhathi ukuze uvikele inhliziyo nesifo sohlangothi.',
        english: 'Take the blood pressure pills regularly on time so that you protect the heart and stroke.',
        breakdown: [
          { chunk: 'U-phuz-e amaphilisi', gloss: 'u- (SC) + -phuza + -e (polite hortative / subjunctive: "you should take")' },
          { chunk: 'omfutho wegazi', gloss: 'of blood pressure' },
          { chunk: 'njalo ngesikhathi', gloss: 'regularly on time' },
          { chunk: 'ukuze u-vikel-e', gloss: 'so that + you protect (subjunctive)' },
          { chunk: 'inhliziyo nesifo sohlangothi', gloss: 'the heart + and stroke disease' }
        ]
      }
    ]
  },

  // ==========================================
  // CATEGORY 4: TIME-FLOW ASPECTUAL INFIXES
  // ==========================================
  {
    id: 'aspect-progressive-sa',
    category: 'aspect-infixes',
    title: 'Progressive Infix -sa- (Continuity & "No Longer")',
    subtitle: 'Tracking ongoing symptoms versus conditions that have ceased',
    formula: 'Positive: SC + -sa- + Verb Root + -a | Negative: a- + SC + -sa- + Verb Root + -i ("no longer")',
    explanation:
      'Inserted directly between the subject concord and the verb stem to indicate continuity ("still"). In the negative with initial prefix a- and final vowel -i, it translates to "no longer": Positive: Usaphila? ("Are you still well / surviving?"), Usabuzwa ubuhlungu? ("Do you still feel the pain?"). Negative: Angisabhemi ugwayi ("I no longer smoke tobacco"), Izinyawo azisavuvukile ("The feet are no longer swollen").',
    commonPitfall:
      'Forgetting that the negative of "still" is "no longer" (a-...-sa-...-i), not a simple present negation. Also note statives in the negative shift -sa- to -se- before adjectives/statives (abusebuhlungu).',
    rules: [
      'Positive ("still"): SC + -sa- + Verb (u-sa-phila -> usaphila: "are you still surviving/well?")',
      'Stative with -sa-: SC + -sa- + Stative (u-sa-lele -> usalele: "he/she is still asleep")',
      'Negative ("no longer"): a- + SC + -sa- + Root + -i (a-ngi-sa-bhem-i: "I no longer smoke")',
      'Stative Negative: a- + SC + -se- + Stative (a-bu-se-buhlungu: "it is no longer painful")',
      'Clinical Trajectory: Critical for assessing symptom resolution vs therapeutic failure'
    ],
    examples: [
      {
        id: 'aspect-sa-ex-1',
        type: 'clinical',
        isizulu: 'Ingabe usabuzwa lobu buhlungu esifubeni sakho lapho uphefumula kakhulu?',
        english: 'Do you still feel this pain in your chest when you breathe deeply?',
        breakdown: [
          { chunk: 'Ingabe', gloss: 'interrogative opener ("Is it that... / Do you...?")' },
          { chunk: 'u-sa-bu-zw-a', gloss: 'u- (2nd person SC) + -sa- (progressive aspect: "still") + -bu- (Class 14 object concord for ubuhlungu) + -zwa (feel/perceive)' },
          { chunk: 'lobu buhlungu', gloss: 'lobu (Class 14 demonstrative: this) + ubuhlungu (pain)' },
          { chunk: 'esifubeni sakho', gloss: 'esifubeni (in your chest) + sakho (possessive)' },
          { chunk: 'lapho u-phefumul-a', gloss: 'lapho (when) + uphefumula (you breathe)' },
          { chunk: 'kakhulu', gloss: 'adverb (deeply / heavily / very)' }
        ]
      },
      {
        id: 'aspect-sa-ex-2',
        type: 'community',
        isizulu: 'Angisaphuzi utshwala futhi angisabhemi kusukela ngangeniswa esibhedlela ngonyaka odlule.',
        english: 'I no longer drink alcohol and I no longer smoke since I was admitted to hospital last year.',
        breakdown: [
          { chunk: 'A-ngi-sa-phuz-i utshwala', gloss: 'a- (neg prefix) + ngi- (SC) + -sa- (no longer) + -phuza + -i + utshwala (alcohol)' },
          { chunk: 'futhi a-ngi-sa-bhem-i', gloss: 'futhi (and) + angisabhemi (I no longer smoke)' },
          { chunk: 'kusukela', gloss: 'since / starting from' },
          { chunk: 'nga-ngenis-w-a esibhedlela', gloss: 'nga- (remote past) + -ngenisa (admit) + -wa (passive) + esibhedlela (to hospital)' },
          { chunk: 'ngonyaka odlule', gloss: 'in the past year' }
        ]
      }
    ]
  },
  {
    id: 'aspect-exclusive-se',
    category: 'aspect-infixes',
    title: 'Exclusive Aspect se- / -se- ("Now" & "Already")',
    subtitle: 'Marking state transitions, completed onset, and timing thresholds',
    formula: 'Prefix form: se- + SC (sengi-, ususe-, use-, sebe-) | Stative: se- + SC + Root + -ile',
    explanation:
      'Indicates a newly initiated state, an action that has already occurred, or an impending requirement ("it is now time"): 1st Person: sengi- (Sengiyabona = "I now understand"; Sengiphuzile = "I have already taken [medication]"). 2nd Person: ususe- / use- (Usubonile udokotela? = "Have you already seen the doctor?"). Class 1/1a: use- (Usefikile = "He/she has already arrived"). Impersonal Class 15/17: sekuyi- / sekuse- (Sekuyisikhathi sokuphuza umuthi = "It is now time to take the medicine").',
    commonPitfall:
      'Confusing stative alone (ngilambile = "I am hungry") with exclusive stative (sengilambile = "I am hungry now / I have become hungry"). se- marks a dynamic state change.',
    rules: [
      '1st Person Sing: sengi- (sengi- + qedile -> sengiqedile: "I have already finished")',
      '2nd Person Sing: sewu- / usu- (usu- + phuzile -> usuphuzile: "you have already taken")',
      'Class 1 (3rd Person): use- (use- + qalile -> useqalile: "he/she has already started")',
      'Class 2 (Plural): sebe- (sebe- + hambile -> sebehambile: "they have now left")',
      'Impersonal: seku- (seku- + ngcono -> sekungcono: "it is now better")'
    ],
    examples: [
      {
        id: 'aspect-se-ex-1',
        type: 'clinical',
        isizulu: 'Umuthi sewuqalile ukusebenza kahle ukwehlisa umfutho wegazi owawuphakeme?',
        english: 'Has the medicine already begun to work well to lower the blood pressure that was elevated?',
        breakdown: [
          { chunk: 'Umuthi', gloss: 'Class 3 noun (medicine)' },
          { chunk: 'se-wu-qal-ile', gloss: 'se- (exclusive: "already") + wu- (SC 3) + -qala (start) + -ile (completed action)' },
          { chunk: 'ukusebenza kahle', gloss: 'to work well' },
          { chunk: 'ukwehlisa umfutho wegazi', gloss: 'to lower blood pressure' },
          { chunk: 'owawuphakeme', gloss: 'relative past ("which was high / elevated")' }
        ]
      },
      {
        id: 'aspect-se-ex-2',
        type: 'clinical',
        isizulu: 'Sewungagoduka manje mkhulu, iziphumo zonke zibonisa ukuthi usesimeni esihle.',
        english: 'You may now go home grandfather, all results show that you are in good condition.',
        breakdown: [
          { chunk: 'Se-wu-nga-goduk-a', gloss: 'se- (now) + wu- (2nd person SC) + -nga- (permission/potential: "may") + -goduka (go home)' },
          { chunk: 'manje mkhulu', gloss: 'now + grandfather (vocative address)' },
          { chunk: 'iziphumo zonke', gloss: 'all the results / outcomes' },
          { chunk: 'zibonisa ukuthi', gloss: 'show that' },
          { chunk: 'usesimeni esihle', gloss: 'u- (you are) + esimeni (in a state) + esihle (good/stable)' }
        ]
      }
    ]
  },
  {
    id: 'aspect-incomplete-ka',
    category: 'aspect-infixes',
    title: 'Negative Incomplete Infix -ka- ("Not Yet")',
    subtitle: 'Inquiring after pending lab results, unfulfilled appointments, and pending doses',
    formula: 'a- + Subject Concord + -ka- + Verb Root + -i / -e (strictly negative)',
    explanation:
      'Used exclusively in negative constructions to express that an expected action has not yet occurred. The verb ends in -i (or -e for monosyllabic/special stems): Angikaqedi = "I have not yet finished". Akakafiki udokotela = "The doctor has not yet arrived". Imiphumela ayikabuyi = "The results have not yet returned". Angikawatholi amaphilisi ami = "I have not yet received my pills".',
    commonPitfall:
      'Trying to use -ka- in positive sentences. "Not yet" is fundamentally negative and requires the initial a- negative prefix.',
    rules: [
      '1st Person: a-ngi-ka- + Root + -i (angikaqedi: "I have not yet finished")',
      'Class 1 (Human 3rd Sing): a-ka-ka- + Root + -i (akakafiki: "he/she has not yet arrived")',
      'Class 4 (Plural Results): a-yi-ka- + Root + -i (ayikafiki: "they have not yet arrived")',
      'Monosyllabic stems take -e: a-ka-ka-dl-i / a-ka-kezi ("he/she has not yet come")',
      'Triage utility: Crucial for determining pending oral intake, micturition, and lab turnaround'
    ],
    examples: [
      {
        id: 'aspect-ka-ex-1',
        type: 'clinical',
        isizulu: 'Imiphumela yegazi ayikafiki evela elabhorethri, ngicela ubuye kusasa ekuseni.',
        english: 'The blood test results have not yet arrived from the laboratory; please return tomorrow morning.',
        breakdown: [
          { chunk: 'Imiphumela yegazi', gloss: 'imiphumela (Class 4 results) + yegazi (of blood)' },
          { chunk: 'a-yi-ka-fik-i', gloss: 'a- (neg prefix) + yi- (Class 4 neg SC) + -ka- (not yet aspect) + -fika (arrive) + -i (negative ending)' },
          { chunk: 'evela elabhorethri', gloss: 'evela (which comes from) + elabhorethri (locative: at the laboratory)' },
          { chunk: 'ngicela ubuye', gloss: 'ngicela (I request) + u-buy-e (you return: subjunctive)' },
          { chunk: 'kusasa ekuseni', gloss: 'tomorrow morning' }
        ]
      },
      {
        id: 'aspect-ka-ex-2',
        type: 'clinical',
        isizulu: 'Umntwana akakachami kusukela ekuseni ngenxa yokuhuda okunzima nesicanucanu.',
        english: 'The child has not yet passed urine since morning due to severe diarrhea and nausea.',
        breakdown: [
          { chunk: 'Umntwana', gloss: 'Class 1 noun (child)' },
          { chunk: 'a-ka-ka-cham-i', gloss: 'a- (neg prefix) + ka- (Class 1 neg SC) + -ka- (not yet) + -chama (pass urine) + -i (negative ending)' },
          { chunk: 'kusukela ekuseni', gloss: 'since morning' },
          { chunk: 'ngenxa yokuhuda okunzima', gloss: 'due to severe diarrhea' },
          { chunk: 'nesicanucanu', gloss: 'and nausea' }
        ]
      }
    ]
  },
  {
    id: 'aspect-occasional-ke',
    category: 'aspect-infixes',
    title: 'Occasional Infix -ke- ("Ever", "Once", "Sometimes")',
    subtitle: 'Review of systems, prior allergic history, and episodic symptom elicitation',
    formula: 'Subject Concord + -ke- + Verb Root + -e / -a',
    explanation:
      'Used in history-taking to ask whether a patient has ever experienced a symptom, or experiences it periodically: Wake waba nalokhu ngaphambili? = "Have you ever had this before?". Uke uzwe isiyezi lapho uvuka? = "Do you sometimes feel dizzy when you get up?". Uke wahlatshwa umjovo we-penicillin? = "Have you ever received a penicillin injection?". In positive past recollection: Ngake ngangeniswa esibhedlela = "I was once admitted to hospital".',
    commonPitfall:
      'Confusing the prefix polite hortative particle Ake... ("please") with the mid-verb infix -ke- ("ever/sometimes").',
    rules: [
      'Remote Past Habitual/Ever: SC + -a- + -ke- (wake waba: "did you ever have?")',
      'Present Habitual/Sometimes: SC + -ke- + Verb (uke uzwe: "do you sometimes feel?")',
      'Class 1 Form: wake waba ("did he/she ever have?")',
      'Past Affirmative Memoir: ngake ngahlinzwa ("I was once operated on")',
      'Clinical safety: Standard formula for allergy checks and past adverse reactions'
    ],
    examples: [
      {
        id: 'aspect-ke-ex-1',
        type: 'clinical',
        isizulu: 'Wake waba nokungezwani nephinisilini noma nanoma yimuphi umuthi ngaphambili?',
        english: 'Have you ever had an allergic reaction to penicillin or any medication in the past?',
        breakdown: [
          { chunk: 'Wa-ke wa-b-a', gloss: 'wa- (2nd person remote past SC) + -ke- (occasional/ever infix) + waba (did you have: "have you ever had")' },
          { chunk: 'nokungezwani', gloss: 'na- (with) + ukungezwani (allergy / discordance / intolerance: "an allergic reaction")' },
          { chunk: 'nephinisilini', gloss: 'na- (with) + iphinisilini ("penicillin")' },
          { chunk: 'noma nanoma yimuphi umuthi', gloss: 'noma (or) + nanoma yimuphi umuthi (with any medication whatsoever)' },
          { chunk: 'ngaphambili', gloss: 'previously / in the past' }
        ]
      },
      {
        id: 'aspect-ke-ex-2',
        type: 'clinical',
        isizulu: 'Uke ukhohlele igazi lapho ukhwehlela kakhulu ebusuku embhedeni?',
        english: 'Do you ever cough up blood when you cough heavily at night in bed?',
        breakdown: [
          { chunk: 'U-ke u-khohlel-e igazi', gloss: 'u- (2nd person SC) + -ke- (sometimes/ever) + ukhohlele (you cough) + igazi (blood: hemoptysis)' },
          { chunk: 'lapho u-khwehlela kakhulu', gloss: 'when you cough heavily' },
          { chunk: 'ebusuku embhedeni', gloss: 'at night on the bed' }
        ]
      }
    ]
  },
  {
    id: 'aspect-clinical-trajectory',
    category: 'aspect-infixes',
    title: 'Symptom Trajectory & Longitudinal Monitoring',
    subtitle: 'Synthesizing infixes to track disease evolution across consultation encounters',
    formula: '[Prior: wake...] -> [Transition: se-...] -> [Persistence: -sa-...] -> [Resolution: a-...-sa-...-i]',
    explanation:
      'Formulations enabling clinicians to systematically track disease course over time: Baseline: Kuthe lapho uqala ukugula, wawunjani? Episodic recurrence: Kuke kubuye lokhu kuhlaba? ("Does this sharp pain ever return?"). Current status: Kusesebuhlungu yini noma sekungcono? ("Is it still painful or already better?"). Resolution: Ubuhlungu abusekho, sekusele ukukhathala nje ("The pain is no longer there, now only fatigue remains").',
    commonPitfall:
      'Treating symptoms as static points rather than trajectories. In isiZulu, asking whether a symptom is "still" present (-sa-) vs "already" improving (se-) vs "no longer" felt (a-...-sa-...-i) is essential for accurate clinical monitoring.',
    rules: [
      'Phase 1 - Episodic Review: Kuke kubuye lokhu kuhlaba? ("Does this sharp pain ever return?")',
      'Phase 2 - Active Monitoring: Isifuba sisaqhweqhwa? ("Is the chest still wheezing?")',
      'Phase 3 - Transition Assessment: Sekungcono kakhulu ("It is now much better")',
      'Phase 4 - Resolution Confirmation: Akusabuhlungu njengayizolo ("It is no longer as painful as yesterday")'
    ],
    examples: [
      {
        id: 'aspect-traj-ex-1',
        type: 'clinical',
        isizulu: 'Isifuba sisaqhweqhwa lapho ulele phansi noma sesipholile kahle emva komjovo?',
        english: 'Is the chest still wheezing when you lie down or has it already healed well after the injection?',
        breakdown: [
          { chunk: 'Isifuba si-sa-qhweqhw-a', gloss: 'isifuba (Class 7 chest) + si- (SC 7) + -sa- (still) + -qhweqhwa (wheeze / rhonchi)' },
          { chunk: 'lapho u-lel-e phansi', gloss: 'when you lie down (stative)' },
          { chunk: 'noma se-si-phol-ile', gloss: 'or + se- (already) + si- (SC 7) + -phola (heal) + -ile (stative/perfect)' },
          { chunk: 'kahle emva komjovo', gloss: 'well + after the injection' }
        ]
      },
      {
        id: 'aspect-traj-ex-2',
        type: 'clinical',
        isizulu: 'Ubuhlungu abusekho manje, sekusele ukukhathala nje komzimba wonke.',
        english: 'The pain is no longer there now, now only generalized fatigue remains throughout the body.',
        breakdown: [
          { chunk: 'Ubuhlungu a-bu-se-kho', gloss: 'ubuhlungu (pain) + a- (neg) + bu- (SC 14) + -se- (no longer) + -kho (present/there)' },
          { chunk: 'manje', gloss: 'now' },
          { chunk: 'se-ku-sel-e', gloss: 'se- (now/already) + ku- (impersonal SC) + -sala (remain) + -e (stative: has remained)' },
          { chunk: 'ukukhathala nje', gloss: 'tiredness / fatigue only' },
          { chunk: 'komzimba wonke', gloss: 'of the whole body' }
        ]
      }
    ]
  },
  // ==========================================
  // CATEGORY 5: VERBAL EXTENSIONS & SOUND MUTATIONS
  // ==========================================
  {
    id: 'ext-applicative-ela',
    category: 'verbal-extensions',
    title: 'Applicative Extension -ela ("For / On behalf of / Towards")',
    subtitle: 'Directing actions toward beneficiaries, locations, and inquiring reasons (-elani)',
    formula: 'Verb Root + -ela + Final Vowel',
    explanation:
      'Indicates that an action is performed for, on behalf of, or toward someone or a specific location (-sebenzela = work for, -lindela = wait for, -lungiselela = prepare for). In interrogative history-taking, affixing -elani to a verb asks "why / for what reason" an action or symptom occurs.',
    commonPitfall:
      'Forgetting that question words like "ngani" (why) grammatically require the applicative suffix on the verb: say "Uhlalelani phansi?" ("Why are you sitting down?"), not *"Uhlelani phansi ngani?".',
    rules: [
      'Beneficiary Suffixation: -lungisa (prepare) -> -lungiselela (prepare for someone)',
      'Direction / Destination: -baleka (flee) -> -balekela esibhedlela (run to the hospital)',
      'Interrogative Reason: Root + -elani asks "why/what for" (Ukhwehlelelani? = Why are you coughing?)',
      'Negative Beneficiary: a- + SC + Root + -eli (angimsebenzeli = I am not working for him)'
    ],
    examples: [
      {
        id: 'ext-app-ex-1',
        type: 'clinical',
        isizulu: 'Udokotela ungilungiselela imithi emtholampilo manje.',
        english: 'The doctor is preparing medication for me at the clinic right now.',
        breakdown: [
          { chunk: 'Udokotela', gloss: 'Class 1a noun ("the doctor")' },
          { chunk: 'u-ngi-lungis-el-el-a', gloss: 'u- (SC 1) + -ngi- (1st person object: "me") + -lungisa + -ela (applicative: "prepares for me")' },
          { chunk: 'imithi', gloss: 'Class 4 noun ("medication")' },
          { chunk: 'emtholampilo manje', gloss: 'locative clinic + now' }
        ]
      },
      {
        id: 'ext-app-ex-2',
        type: 'clinical',
        isizulu: 'Ngilindele imiphumela yegazi egumbini lokuhlola.',
        english: 'I am waiting for the blood results in the consultation room.',
        breakdown: [
          { chunk: 'Ngi-lind-el-e', gloss: 'ngi- (SC 1st) + -linda (wait) + -ela (applicative) + -e (contracted/stative: "I am waiting for")' },
          { chunk: 'imiphumela yegazi', gloss: 'imiphumela (Class 4 results) + yegazi (of blood)' },
          { chunk: 'egumbini lokuhlola', gloss: 'in the examination room' }
        ]
      }
    ]
  },
  {
    id: 'ext-causative-isa',
    category: 'verbal-extensions',
    title: 'Causative Extension -isa ("Cause to / Help to / Intensify")',
    subtitle: 'Eliciting drug side effects, assisted ambulation, and symptom intensification',
    formula: 'Verb Root + -isa + Final Vowel',
    explanation:
      'Signifies causing an action to happen, assisting someone to perform an action, or intensifying effort (-hambisa = cause to walk &rarr; diarrhea; -sebenzisa = cause to work &rarr; use; -khulumisa = engage someone in conversation; -phuzisa = help/cause to drink). In pharmacology, causative formulations explain medication mechanisms and adverse effects.',
    commonPitfall:
      'In clinical isiZulu, "ukuhambisa isisu" is the indispensable medical idiom for diarrhea (literally: "to cause the stomach to run"). Saying *isisu siyagijima is not idiomatic medical Zulu.',
    rules: [
      'Causation: -hamba (walk/run) -> -hambisa isisu (cause diarrhea)',
      'Assistance: -phuza (drink) -> -phuzisa umntwana amanzi (assist the baby to drink water)',
      'Intensification: -bheka (look) -> -bhekisisa (examine very carefully)',
      'Irregular mutations: Verbs ending in -ka often mutate to -sa (-suka -> -susa: remove); -la mutates to -za (-khumbula -> -khumbuza: remind)'
    ],
    examples: [
      {
        id: 'ext-caus-ex-1',
        type: 'clinical',
        isizulu: 'Lamaphilisi ayahambisa isisu uma ungadlile kahle ngaphambi kokuwaphuza.',
        english: 'These pills cause diarrhea if you have not eaten well before taking them.',
        breakdown: [
          { chunk: 'Lamaphilisi', gloss: 'these pills (Class 6)' },
          { chunk: 'a-ya-hamb-is-a isisu', gloss: 'a- (SC 6) + -ya- + -hamba + -isa (causative) + isisu (stomach: "causes diarrhea")' },
          { chunk: 'uma ungadlile kahle', gloss: 'if you haven\'t eaten well (participial negative)' },
          { chunk: 'ngaphambi kokuwaphuza', gloss: 'before drinking/taking them' }
        ]
      },
      {
        id: 'ext-caus-ex-2',
        type: 'clinical',
        isizulu: 'Ake ungisize ungisebenzise lo mshini wokuphefumula.',
        english: 'Please help me use this breathing machine.',
        breakdown: [
          { chunk: 'Ake ungisize', gloss: 'please help me (subjunctive)' },
          { chunk: 'u-ngi-sebenz-is-e', gloss: 'u- (SC 2nd) + -ngi- (object "me") + -sebenza (work) + -isa (causative: "help me use") + -e (subjunctive)' },
          { chunk: 'lo mshini wokuphefumula', gloss: 'this breathing machine (nebulizer / CPAP)' }
        ]
      }
    ]
  },
  {
    id: 'ext-passive-palatalization',
    category: 'verbal-extensions',
    title: 'Passive Extension -wa & Labial Palatalization',
    subtitle: 'Shifting focus to the patient and mandatory prepalatal consonant sound shifts',
    formula: 'Labial Consonant (b, p, ph, m, mb) + -wa -> Prepalatal Shift (tsh, sh, ny, nj)',
    explanation:
      'When verbs form the passive with -wa ("to be acted upon"), any bilabial consonant in the verb stem undergoes mandatory palatalization to avoid acoustic clash with the bilabial glide -w-. The shifts are universal: b -> tsh, p -> tsh, ph -> sh, m -> ny, mb -> nj. Clinically, passive verbs focus squarely on what is being done to the patient or experienced by a bodily organ.',
    commonPitfall:
      'Trying to avoid palatalization by saying *"uyelaphwa"* instead of the strictly required prepalatal shift *"uyelashwa"*, or *"ulunywa"* for *"ulumwa"*.',
    rules: [
      'b -> tsh: -bopha (bind/arrest) -> -boshwa (be bound/plastered)',
      'ph -> sh: -elapha (treat/cure) -> -elashwa (be treated/medicated)',
      'm -> ny: -luma (bite/sting) -> -lunywa (be bitten / experience itching)',
      'mb -> nj: -bamba (hold/catch) -> -banjwa (be held/caught)',
      'Monosyllabic & vowel verbs insert -iw-: -dla -> -dliwa (be eaten), -zwa -> -zwiwa (be felt)'
    ],
    examples: [
      {
        id: 'ext-pass-ex-1',
        type: 'clinical',
        isizulu: 'Isiguli selashwa ngemithi enamandla egumbini labagula kakhulu.',
        english: 'The patient is being treated with strong medication in the intensive care unit.',
        breakdown: [
          { chunk: 'Isiguli', gloss: 'Class 7 noun ("the patient")' },
          { chunk: 's-elashw-a', gloss: 'si- (SC 7) + -elashwa (passive of -elapha with ph -> sh palatalization: "is treated")' },
          { chunk: 'ngemithi enamandla', gloss: 'with strong medication' },
          { chunk: 'egumbini labagula kakhulu', gloss: 'in the ICU / room of those very sick' }
        ]
      },
      {
        id: 'ext-pass-ex-2',
        type: 'clinical',
        isizulu: 'Umlenze wesokudla ulunywa kakhulu yilezi zilonda.',
        english: 'The right leg is itching severely from these sores.',
        breakdown: [
          { chunk: 'Umlenze wesokudla', gloss: 'the right leg' },
          { chunk: 'u-luny-w-a', gloss: 'u- (Class 3 SC) + -luma (bite/itch) + m -> ny palatalization + -wa (passive: "is being bitten/itching")' },
          { chunk: 'kakhulu', gloss: 'severely / very much' },
          { chunk: 'yilezi zilonda', gloss: 'by these sores' }
        ]
      }
    ]
  },
  {
    id: 'ext-neuter-stative',
    category: 'verbal-extensions',
    title: 'Neuter-Stative Extension -eka / -akala ("Feasibility & Potentiality")',
    subtitle: 'Communicating clinical comprehensibility, feasibility, and observable reality',
    formula: 'Verb Root + -eka / -akala + Final Vowel',
    explanation:
      'The neuter extension indicates that an action is doable, feasible, comprehensible, or has entered an observable state without reference to an active human agent. In clinical communication, it underpins the core concept of mutual understanding (kuzwakele = it is clearly heard and understood), requirement (kuyadingeka = it is needed), and visibility (kuyabonakala = it is apparent/visible).',
    commonPitfall:
      'Confusing the passive with the neuter: kuzwiwa ngudokotela ("it is heard by the doctor" - passive with agent) versus kuzwakele ("it makes sense / it is clearly understood" - neuter state).',
    rules: [
      '-zwa (hear/feel) -> -zwakala (be audible / make sense / be understood)',
      '-bona (see) -> -bonakala (be visible / noticeable / evident)',
      '-dinga (need) -> -dingeka (be necessary / required)',
      '-thola (find) -> -tholakala (be available / obtainable)',
      '-qonda (understand) -> -qondeka (be straightforward / comprehensible)'
    ],
    examples: [
      {
        id: 'ext-neut-ex-1',
        type: 'clinical',
        isizulu: 'Imithi eyengeziwe iyadingeka kulesi simo ukuvikela ukutheleleka.',
        english: 'Additional medication is required in this condition to prevent infection.',
        breakdown: [
          { chunk: 'Imithi eyengeziwe', gloss: 'additional medication' },
          { chunk: 'i-ya-ding-ek-a', gloss: 'i- (SC 4) + -ya- + -dinga (need) + -eka (neuter: "is needed / required")' },
          { chunk: 'kulesi simo', gloss: 'in this condition' },
          { chunk: 'ukuvikela ukutheleleka', gloss: 'to prevent infection' }
        ]
      },
      {
        id: 'ext-neut-ex-2',
        type: 'clinical',
        isizulu: 'Kuzwakele gogo, ungakhathazeki ngizokunikeza usizo olufanele.',
        english: 'It is clearly understood grandmother, do not worry I will give you appropriate care.',
        breakdown: [
          { chunk: 'Ku-zwak-el-e', gloss: 'ku- (impersonal SC) + -zwa (hear) + -akala (neuter) + -e (stative perfect: "it is clearly understood")' },
          { chunk: 'gogo', gloss: 'grandmother' },
          { chunk: 'ungakhathazeki', gloss: 'do not worry' },
          { chunk: 'ngizokunikeza usizo olufanele', gloss: 'I will give you appropriate help' }
        ]
      }
    ]
  },
  {
    id: 'ext-reciprocal-ana',
    category: 'verbal-extensions',
    title: 'Reciprocal Extension -ana ("Mutual Interaction & Support")',
    subtitle: 'Caregiver collaboration, family adherence support, and follow-up consultation',
    formula: 'Verb Root + -ana + Final Vowel',
    explanation:
      'Expresses reciprocal, mutual action between plural entities ("each other / one another"). In clinical care, it is central to counseling family members on collaborative home nursing (-sizana = help each other, -nakekelana = care for one another) and establishing follow-up agreements (-bonana = see each other again).',
    commonPitfall:
      'Trying to use -ana with a singular subject without the associative particle "na-". Say "Siyabonana" (plural: "We see each other") or "Ngibonana nomndeni" (singular + na-: "I meet with the family").',
    rules: [
      '-siza (help) -> -sizana (help one another)',
      '-bona (see) -> -bonana (see each other / meet)',
      '-nakekela (care) -> -nakekelana (care for one another)',
      '-thinta (contact) -> -thintana (keep in touch / follow up)',
      'With associative na-: SC + Root + -ana + na- + Noun (Udokotela ubambisana nomndeni = The doctor collaborates with the family)'
    ],
    examples: [
      {
        id: 'ext-recip-ex-1',
        type: 'clinical',
        isizulu: 'Kumele nibambisane ekhaya ukuze anakekelwe kahle umntwana.',
        english: 'You must collaborate together at home so that the child is well cared for.',
        breakdown: [
          { chunk: 'Kumele ni-bamb-is-an-e', gloss: 'kumele + ni- (2nd plur SC) + -bamba (hold) + -isa (causative) + -ana (reciprocal) + -e (subjunctive: "you all collaborate / work together")' },
          { chunk: 'ekhaya', gloss: 'at home' },
          { chunk: 'ukuze anakekelwe kahle', gloss: 'so that he is well cared for (passive)' },
          { chunk: 'umntwana', gloss: 'the child' }
        ]
      },
      {
        id: 'ext-recip-ex-2',
        type: 'clinical',
        isizulu: 'Sizobonana futhi emtholampilo ngenyanga ezayo ukuhlola umfutho.',
        english: 'We will see each other again at the clinic next month to check the blood pressure.',
        breakdown: [
          { chunk: 'Si-zo-bon-an-a', gloss: 'si- (1st plur SC) + -zo- (future) + -bona (see) + -ana (reciprocal: "we will see each other")' },
          { chunk: 'futhi emtholampilo', gloss: 'again at the clinic' },
          { chunk: 'ngenyanga ezayo', gloss: 'next month' },
          { chunk: 'ukuhlola umfutho', gloss: 'to check blood pressure' }
        ]
      }
    ]
  },

  // ==========================================
  // CATEGORY 6: COPULATIVES, LOCATIVES & SOUND SHIFTS
  // ==========================================
  {
    id: 'cop-identification-prefixes',
    category: 'copulatives-locatives',
    title: 'Identification Copulatives ("It is / They are")',
    subtitle: 'Non-verbal predication identifying diseases, clinicians, and medications',
    formula: 'u-, o-, a- nouns -> ngu- | i- nouns -> y- | ili-/olu- nouns -> l- / lu-',
    explanation:
      'isiZulu does not possess a standalone linking verb equivalent to English "is / are". Instead, identifying predication ("X is Y") is achieved by attaching copulative prefix formatives directly to nouns. Nouns starting with u-, o-, a- take ngu- (ngumkhuhlane = it is the flu, ngudokotela = it is the doctor); nouns with initial i- take y- (yisifo = it is a disease, yigazi = it is blood); nouns with ili- take l- (lithambo = it is a bone).',
    commonPitfall:
      'Inserting artificial verbs like *"ngi-is-dokotela"* or *"lesi simo siba yisifo"*. The copulative formative itself carries the full predicative weight of "is / are".',
    rules: [
      'Class 1/1a/2/2a/6 (u-, o-, a-): ngu- / nga- (ngudokotela, ngabantwana, ngamaphilisi)',
      'Class 3/4/9 (u-, i-, in-): ngu- (Class 3 umkhuhlane -> ngumkhuhlane), y- (Class 4/9 imithi -> yimithi, ingozi -> yingozi)',
      'Class 7/8 (isi-, izi-): y- (isifo -> yisifo, izilonda -> yizilonda)',
      'Class 5 (i- / ili-): y- (igazi -> yigazi) or l- (ithambo -> lithambo)'
    ],
    examples: [
      {
        id: 'cop-ident-ex-1',
        type: 'clinical',
        isizulu: 'Lesi simo yisifo sikashukela esidinga ukwelashwa njalo.',
        english: 'This condition is diabetes mellitus which requires continuous treatment.',
        breakdown: [
          { chunk: 'Lesi simo', gloss: 'this condition' },
          { chunk: 'y-isifo sikashukela', gloss: 'y- (copulative: "it is") + isifo (disease) + sikashukela (of sugar)' },
          { chunk: 'esidinga ukwelashwa njalo', gloss: 'which requires treatment continuously' }
        ]
      },
      {
        id: 'cop-ident-ex-2',
        type: 'clinical',
        isizulu: 'Lona ngumhlengikazi ozokusiza ngomjovo wamanzi.',
        english: 'This is the nurse who will assist you with the IV fluid infusion.',
        breakdown: [
          { chunk: 'Lona', gloss: 'demonstrative ("this person")' },
          { chunk: 'ngu-mhlengikazi', gloss: 'ngu- (copulative: "is a nurse") + umhlengikazi' },
          { chunk: 'ozokusiza', gloss: 'relative ("who will help you")' },
          { chunk: 'ngomjovo wamanzi', gloss: 'with the water injection / IV fluid' }
        ]
      }
    ]
  },
  {
    id: 'cop-negative-identification',
    category: 'copulatives-locatives',
    title: 'Negative Identification Copulatives ("It is NOT")',
    subtitle: 'Refuting diagnoses, de-escalating triage anxiety, and ruling out conditions',
    formula: 'aku- / asi- + Pronoun Formative (akuyona, akuyena, akusona, akubona, akulona)',
    explanation:
      'Negative identification denies that a subject belongs to a noun category ("it is not X"). Formed using the negative prefix aku- fused with the absolute pronoun root corresponding to the noun class: Class 1 akuyena (he/she is not), Class 7 akusona (it is not [isifo]), Class 9 akuyona (it is not [ingozi]), Class 6 akuwona (they are not [amaphilisi]). Crucial in triage for reassuring patients when acute pathology is ruled out.',
    commonPitfall:
      'Using generic Class 9 *akuyona* for every noun class, or attempting verbal negation with *-i* (*akisifoi). Match the negative copulative pronoun to the noun class of the negated entity.',
    rules: [
      'Class 1/1a: akuyena udokotela (he/she is not a doctor)',
      'Class 6: akuwona amaphilisi (they are not pills)',
      'Class 7: akusona isifo esithathelanayo (it is not a contagious disease)',
      'Class 9: akuyona ingozi ephuthumayo (it is not an acute emergency)',
      'Class 15: akukona ukugula okungelapheki (it is not an incurable illness)'
    ],
    examples: [
      {
        id: 'cop-neg-ex-1',
        type: 'clinical',
        isizulu: 'Lokhu kuhlaba akuyona ingozi yenhliziyo, yizicubu ezibuhlungu nje.',
        english: 'This sharp pain is not a heart emergency; it is only sore chest muscles.',
        breakdown: [
          { chunk: 'Lokhu kuhlaba', gloss: 'this sharp pain' },
          { chunk: 'akuyona ingozi', gloss: 'akuyona (neg copulative Class 9: "it is not") + ingozi (emergency/danger)' },
          { chunk: 'yenhliziyo', gloss: 'of the heart' },
          { chunk: 'yizicubu ezibuhlungu nje', gloss: 'y- (copulative: "it is") + izicubu (muscles) + sore only' }
        ]
      },
      {
        id: 'cop-neg-ex-2',
        type: 'clinical',
        isizulu: 'Lesi sifo akusona esokufa, singalapheka ngemithi efanele.',
        english: 'This illness is not fatal; it can be treated with appropriate medication.',
        breakdown: [
          { chunk: 'Lesi sifo', gloss: 'this disease' },
          { chunk: 'akusona esokufa', gloss: 'akusona (neg copulative Class 7: "it is not") + of death' },
          { chunk: 'singalapheka', gloss: 'it can be cured/treated' },
          { chunk: 'ngemithi efanele', gloss: 'with appropriate medication' }
        ]
      }
    ]
  },
  {
    id: 'cop-locative-presence',
    category: 'copulatives-locatives',
    title: 'Locative Copulatives & Physical Presence (khona, akakho, ngise-)',
    subtitle: 'Confirming staff availability, patient location in clinic/ward, and absence',
    formula: 'Presence: SC + khona | Absence: a- + SC + -kho | Location: SC + -se- + Locative',
    explanation:
      'Expresses whether a person or resource is physically available (ukhona = he/she is present; bakhona = they are available), absent (akakho = he/she is not here; abekho = they are not here; akukho = there is nothing), or positioned in a specific medical location (ngisesibhedlela = I am at the hospital; usesigulini = he is at the ward).',
    commonPitfall:
      'Confusing akakho (Class 1 person is absent) with akukho (Class 15/17 impersonal absence: "there is nothing / nowhere"). Saying *akukho udokotela is a frequent error; say Udokotela akakho.',
    rules: [
      'Positive Presence: SC + khona (Udokotela ukhona namuhla? = Is the doctor present today?)',
      'Negative Person Absence: a- + ka- + -kho -> akakho (akakho emtholampilo = he/she is not at the clinic)',
      'Impersonal Absence: a- + ku- + -kho -> akukho (akukho lutho olonakele = there is nothing damaged)',
      'Location Placement: SC + -se- + Locative (Usesibhedlela = He/she is at the hospital; Ngisemtholampilo = I am at the clinic)',
      'Past Location: Bengi- + -se- + Locative (Bengisesibhedlela izolo = I was at the hospital yesterday)'
    ],
    examples: [
      {
        id: 'cop-loc-ex-1',
        type: 'clinical',
        isizulu: 'Udokotela oyingcweti akakho emtholampilo namhlanje, usesibhedlela esikhulu.',
        english: 'The specialist doctor is not at the clinic today; he is at the tertiary hospital.',
        breakdown: [
          { chunk: 'Udokotela oyingcweti', gloss: 'specialist doctor' },
          { chunk: 'a-ka-kho', gloss: 'a- (neg) + ka- (SC 1 neg) + -kho (presence enclitic: "is not present")' },
          { chunk: 'emtholampilo namhlanje', gloss: 'at the clinic today' },
          { chunk: 'u-se-sibhedlela esikhulu', gloss: 'u- (SC 1) + -se- (locative copulative infix: "is at") + isibhedlela esikhulu (big hospital)' }
        ]
      },
      {
        id: 'cop-loc-ex-2',
        type: 'clinical',
        isizulu: 'Ingabe unina womntwana ukhona lapha ukuze asayine imvume?',
        english: 'Is the mother of the child present here so that she can sign the consent form?',
        breakdown: [
          { chunk: 'Ingabe unina womntwana', gloss: 'is the mother of the child' },
          { chunk: 'u-khona lapha', gloss: 'u- (SC 1) + khona (present) + lapha (here)' },
          { chunk: 'ukuze asayine imvume', gloss: 'so that she may sign consent' }
        ]
      }
    ]
  },
  {
    id: 'loc-mutations-palatalization',
    category: 'copulatives-locatives',
    title: 'Locative Sound Mutations (e-...-ini & Labial Palatalization)',
    subtitle: 'Prepositional "at / in / on" shifts with compulsory anatomical palatalization',
    formula: 'Initial Vowel -> e- / o- + Root + -ini (with labial shifts: b->tsh, p->tsh, ph->sh, m->ny)',
    explanation:
      'Locatives ("at, in, on, to") are formed by replacing the initial noun vowel with e- (or o- for Class 11 ulu-) and suffixing -ini. When the final syllable contains a bilabial consonant (b, p, ph, m), it undergoes mandatory palatalization before the suffix: umlomo (mouth) -> emlonyeni (m -> ny); isifuba (chest) -> esifubeni; umzimba (body) -> emzimbeni; ithambo (bone) -> ethanjeni (mb -> nj). Borrowed nouns drop final -ini: isibhedlela -> esibhedlela.',
    commonPitfall:
      'Saying *"emlomweni"* or *"esifubwini"*. Labial consonants never retain bilabial articulation directly before the locative suffix -ini; they must palatalize (emlonyeni, esifubeni).',
    rules: [
      'm -> ny: umlomo (mouth) -> emlonyeni (in the mouth)',
      'mb -> nj: umthambo (vein/artery) -> emthanjeni (in the vein); ithambo -> ethanjeni',
      'b -> tsh/w: isigubhu -> esigujini; isibhedlela -> esibhedlela (loanwords omit -ini)',
      'Personal Locatives: Nouns referring to people take ku- instead of e-...-ini (kudokotela = to/at the doctor, kumama = to mother)',
      'Anatomical Pairs: esifubeni (in the chest), emhlane (on the back), esiswini (in the abdomen)'
    ],
    examples: [
      {
        id: 'loc-mut-ex-1',
        type: 'clinical',
        isizulu: 'Umntwana unezilonda ezibuhlungu emlonyeni nasemphinjeni ezimvimbela ukugwinya.',
        english: 'The child has painful ulcers in the mouth and throat that prevent him from swallowing.',
        breakdown: [
          { chunk: 'Umntwana unezilonda ezibuhlungu', gloss: 'the child has painful ulcers' },
          { chunk: 'e-mlony-eni', gloss: 'e- + umlomo + m -> ny + -eni (in the mouth)' },
          { chunk: 'nasemphinjeni', gloss: 'na- + e- + umphimbo + -eni (and in the throat)' },
          { chunk: 'ezimvimbela ukugwinya', gloss: 'which prevent him from swallowing' }
        ]
      },
      {
        id: 'loc-mut-ex-2',
        type: 'clinical',
        isizulu: 'Ubuhlungu buqala esifubeni buye ehoxweni nasengalweni yesobunxele.',
        english: 'The pain begins in the chest and radiates to the armpit and left arm.',
        breakdown: [
          { chunk: 'Ubuhlungu buqala esifubeni', gloss: 'the pain begins in the chest (isifuba -> esifubeni)' },
          { chunk: 'buye ehoxweni', gloss: 'and goes to the armpit (ihoxo -> ehoxweni)' },
          { chunk: 'nasengalweni yesobunxele', gloss: 'and into the left arm (ingalo -> engalweni)' }
        ]
      }
    ]
  },
  {
    id: 'loc-possessive-coalescence',
    category: 'copulatives-locatives',
    title: 'Possessive Concord Coalescence (a + i = e, a + u = o, a + a = a)',
    subtitle: 'Vowel merging mechanics governing anatomy, symptoms, and clinical relationships',
    formula: 'Possessive Concord (wa-, ba-, ya-, za-) + Noun Initial Vowel -> Coalesced Vowel',
    explanation:
      'When possessive concords (wa-, ya-, za-, ba-, kwa-) attach to a noun to show ownership, etiology, or anatomical origin ("of the..."), the possessive vowel -a- merges obligatorily with the noun\'s initial vowel: a + i -> e (wa- + inhliziyo -> wenhliziyo: of the heart); a + u -> o (wa- + umntwana -> womntwana: of the child; za- + umuthi -> zomuthi: of the medicine); a + a -> a (wa- + amazinyo -> wamazinyo: of the teeth).',
    commonPitfall:
      'Writing separated uncoalesced words like *"izimpawu za ukugula"* or *"umzimba wa umntwana"*. isiZulu strictly forbids vowel hiatus; coalescence is orthographically mandatory: izimpawu zokugula, umzimba womntwana.',
    rules: [
      'a + u -> o: umzimba wa- + umntwana -> umzimba womntwana ("the child\'s body")',
      'a + i -> e: isifo sa- + inhliziyo -> isifo senhliziyo ("heart disease")',
      'a + a -> a: amaphilisi a- + amandla -> amaphilisi amandla ("strong pills")',
      'Class 1a nouns (uGogo, uDokotela): use possessive ka- without vowel coalescence (umuthi kadokotela = the doctor\'s medicine; iphilisi likagogo = grandmother\'s pill)',
      'Locative Possessive: kwa- for clinic/hospital sites (emtholampilo wakwa-Ceza = at Ceza clinic)'
    ],
    examples: [
      {
        id: 'loc-poss-ex-1',
        type: 'clinical',
        isizulu: 'Lezi zimpawu zokugula kwenhliziyo zidinga ukuthi ahlolwe ngokushesha.',
        english: 'These symptoms of heart disease require that he be evaluated immediately.',
        breakdown: [
          { chunk: 'Lezi zimpawu', gloss: 'these symptoms' },
          { chunk: 'z-o-kugula', gloss: 'za- + ukugula (a + u -> o: "of illness")' },
          { chunk: 'kw-e-nhliziyo', gloss: 'kwa- + inhliziyo (a + i -> e: "of the heart")' },
          { chunk: 'zidinga ukuthi ahlolwe ngokushesha', gloss: 'require that he be examined promptly' }
        ]
      },
      {
        id: 'loc-poss-ex-2',
        type: 'clinical',
        isizulu: 'Umsindo wamaphaphu womntwana ubonisa ukuthi unesifuba somoya.',
        english: 'The sound of the child\'s lungs indicates that he has asthma.',
        breakdown: [
          { chunk: 'Umsindo w-a-maphaphu', gloss: 'wa- + amaphaphu (a + a -> a: "sound of the lungs")' },
          { chunk: 'w-o-mntwana', gloss: 'wa- + umntwana (a + u -> o: "of the child")' },
          { chunk: 'ubonisa ukuthi', gloss: 'indicates that' },
          { chunk: 'unesifuba s-o-moya', gloss: 'sa- + umoya (a + u -> o: "chest of wind -> asthma")' }
        ]
      }
    ]
  }
];
