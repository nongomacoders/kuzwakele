/**
 * Kuzwakele Grammar Reference - conjunctions.js
 */

export const CONJUNCTIONS_SECTION = {
  id: 'conjunctions',
  title: 'Conjunctions & Clause Governance',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Subjunctive triggers (ukuze), participial shifts (uma), coordinating linkers (kodwa), before/after sequences, and advisory action plans.',
  previewHook: 'ukuze uphole vs. uma egula',
  description: 'Master the 5 core conjunction rules: subjunctive purpose triggers (ukuze), participial condition mutations (uma), coordinating linkers (kodwa), compound temporal sequences (ngaphambi kokuba), and clinical discharge action plans.'
};

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

export const CONJUNCTIONS_RULES = [
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
  }
];
