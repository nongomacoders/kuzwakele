// ==============================================================================
// SECTION 23: CLASS 15 INFINITIVES & PREPOSITIONAL GOVERNANCE
// Izakhi Zesenzo Sokwenza (Class 15 Infinitives, Prepositions & Consent)
// ==============================================================================

export const INFINITIVES_SECTION = {
  id: 'infinitives',
  title: 'Class 15 Infinitives & Prepositional Governance',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Temporal and conditional prepositions (ngaphambi kokudla, emva kokugwinya, ngaphandle kokunyakaza), Class 15 noun concords (ku-), embedding object concords inside infinitives (ukukusiza, ukuwahlola), and surgical consent terminology.',
  previewHook: 'ngaphambi kokudla, emva kokugwinya, ngaphandle kokunyakaza, ukukusiza',
  description: 'Master the 5 core infinitive rules: Class 15 nominalization and subject concords, pre-prandial timing with ngaphambi ko-, post-prandial timing with emva ko-, procedural stillness and exclusions with ngaphandle ko-, and embedding object concords directly within verbal nouns.'
};

export const INFINITIVES_MATRIX = [
  {
    prepositionalType: 'Pre-prandial Timing (ngaphambi ko-)',
    formula: 'ngaphambi + ko- + Class 15 Noun',
    clinicalExample: 'ngaphambi kokudla',
    timingProceduralRole: 'Pre-meal medication window',
    diagnosticApplication: 'Empty stomach vs full stomach pharmacokinetics'
  },
  {
    prepositionalType: 'Post-prandial Administration (emva ko-)',
    formula: 'emva / ngemuva + ko- + Class 15 Noun',
    clinicalExample: 'emva kokugwinya amaphilisi',
    timingProceduralRole: 'Post-prandial dosing to prevent gastric erosion',
    diagnosticApplication: 'Gastric protection against NSAIDs'
  },
  {
    prepositionalType: 'Procedural Stillness (ngaphandle ko-)',
    formula: 'ngaphandle + ko- + Class 15 Noun',
    clinicalExample: 'ngaphandle kokunyakaza',
    timingProceduralRole: 'Mandatory stillness during lumbar puncture / cannulation / X-ray',
    diagnosticApplication: 'Motion artifact prevention and lumbar safety'
  },
  {
    prepositionalType: 'Clause Timing Prerequisite (ngaphambi kokuba)',
    formula: 'ngaphambi kokuba + Subjunctive Clause',
    clinicalExample: 'ngaphambi kokuba ulale embhedeni',
    timingProceduralRole: 'Bedtime routine synchronization',
    diagnosticApplication: 'Nocturnal sedation instructions'
  },
  {
    prepositionalType: 'Class 15 Noun Agreement (ukuhlinzwa ku-)',
    formula: 'Class 15 Subject + ku- + Verb',
    clinicalExample: 'ukuhlinzwa kuyadingeka namuhla',
    timingProceduralRole: 'Surgical consent and risk explanation',
    diagnosticApplication: 'Formal operative decision documentation'
  },
  {
    prepositionalType: 'Embedded Patient Object Concord (ukukusiza)',
    formula: 'uku- + OC (ku-) + Root + -a',
    clinicalExample: 'ngifuna ukukusiza manje',
    timingProceduralRole: 'Therapeutic alliance and consent',
    diagnosticApplication: 'Patient-centered counseling'
  },
  {
    prepositionalType: 'Embedded Organ Object Concord (ukuyihlola)',
    formula: 'uku- + OC (yi-) + Root + -a',
    clinicalExample: 'kumele ngiqale ngokuyihlola inhliziyo',
    timingProceduralRole: 'Stepwise clinical examination sequence',
    diagnosticApplication: 'Systematic review of systems'
  },
  {
    prepositionalType: 'Substance Abstinence (ngaphandle kokuphuza)',
    formula: 'ngaphandle + ko- + Infinitive + Noun [no vowel]',
    clinicalExample: 'ngaphandle kokuphuza utshwala',
    timingProceduralRole: 'Pharmacological contraindication instruction',
    diagnosticApplication: 'Liver pathology prevention'
  }
];

export const INFINITIVES_CHECKPOINTS = [
  {
    id: 'chk-inf-1',
    challengeNumber: 1,
    category: 'infinitives',
    targetConcept: 'Pre-prandial Medication Scheduling (ngaphambi ko-)',
    prompt: 'Take this tablet thirty minutes before eating in the morning.',
    primaryAnswer: 'Phuza leli philisi ngemizuzu engamashumi amathathu ngaphambi kokudla ekuseni.',
    ruleTip: 'Before meals takes ngaphambi ko- + Class 15 infinitive ukudla (ngaphambi kokudla). Never drop the possessive ko-.',
    breakdown: [
      { chunk: 'Phuza leli philisi', gloss: 'Take / Swallow this tablet (Class 5)' },
      { chunk: 'ngemizuzu engamashumi amathathu', gloss: 'by thirty minutes (instrumental relative)' },
      { chunk: 'ngaphambi ko-kudla', gloss: 'before eating (pre-prandial window)' },
      { chunk: 'ekuseni', gloss: 'in the morning (locative time)' }
    ]
  },
  {
    id: 'chk-inf-2',
    challengeNumber: 2,
    category: 'infinitives',
    targetConcept: 'Procedural Stillness during Cannulation / Lumbar Puncture',
    prompt: 'You must lie completely still on your side without moving your back.',
    primaryAnswer: 'Kumele ulale uthule ngohlangothi ngaphandle kokunyakazisa umhlane.',
    ruleTip: 'Exclusionary / Motionless state is expressed by ngaphandle ko- + infinitive: ngaphandle kokunyakazisa umhlane.',
    breakdown: [
      { chunk: 'Kumele ulale uthule', gloss: 'It is necessary that you lie still (subjunctive + participial)' },
      { chunk: 'ngohlangothi', gloss: 'on your side (instrumental)' },
      { chunk: 'ngaphandle ko-kunyakazisa', gloss: 'without causing to move (exclusionary infinitive)' },
      { chunk: 'umhlane', gloss: 'the back / spine' }
    ]
  },
  {
    id: 'chk-inf-3',
    challengeNumber: 3,
    category: 'infinitives',
    targetConcept: 'Embedded Object Concord in Doctor\'s Offer',
    prompt: 'The doctor wants to examine your chest and help you immediately.',
    primaryAnswer: 'Udokotela ufuna ukusihlola isifuba sakho nokukusiza ngokushesha.',
    ruleTip: 'Object concords slot directly between prefix uku- and verb root: uku-si-hlola (examine chest), uku-ku-siza (help you).',
    breakdown: [
      { chunk: 'Udokotela ufuna', gloss: 'The doctor wants' },
      { chunk: 'uku-si-hlola isifuba sakho', gloss: 'to-it[chest]-examine your chest' },
      { chunk: 'no-ku-ku-siza', gloss: 'and to-you-help (na- + uku- + -ku- + -siza)' },
      { chunk: 'ngokushesha', gloss: 'immediately / promptly' }
    ]
  }
];

export const INFINITIVES_RULES = [
  {
    id: 'inf-nominalization-agreement',
    category: 'infinitives',
    title: 'Class 15 Nominalization & Grammatical Agreement',
    badge: 'Class 15 Gerund Agreement',
    subtitle: 'Every verb root converts into an abstract noun governing concord ku-',
    formula: 'uku- + Verb Root + -a (Subject Concord: ku- | Possessive: kwa-)',
    explanation:
      'Every isiZulu verb stem automatically converts into a verbal noun (gerund / infinitive) belonging to Class 15 by prefixing uku-. As a noun, it functions simultaneously as an active clinical intervention and an abstract concept, governing subject concord ku- and possessive concord kwa- (e.g. Ukuhlinzwa kuyadingeka = Surgery is necessary; Ukuhlola kwadokotela = The doctor\'s examination).',
    commonPitfall:
      'Do not use human Class 1 concord u- or impersonal i- for infinitives; Class 15 strictly governs ku- (*Ukuhlinzwa kudingeka namuhla*, never * *Ukuhlinzwa udingeka*).',
    rules: [
      'Nominalization: uku- + root + -a creates Class 15 verbal nouns',
      'Subject Concord: Class 15 takes ku- (kuyadingeka, kuthatha isikhathi)',
      'Possessive Concord: Class 15 takes kwa- (ukuhlola kwadokotela)',
      'Consent context: Used for operative decisions, biopsy approvals, and triage documentation'
    ],
    examples: [
      {
        id: 'inf-nom-ex-1',
        type: 'clinical',
        isizulu: 'Ukuthatha lokhu kuhlola kuyadingeka ukuze sazi imbangela yobuhlungu.',
        english: 'Undergoing this test is essential so that we know the root cause of the pain.',
        breakdown: [
          { chunk: 'Ukuthatha', gloss: 'Class 15 noun: taking / undergoing' },
          { chunk: 'lokhu kuhlola', gloss: 'this examination (demonstrative + Class 15)' },
          { chunk: 'ku-ya-dingeka', gloss: 'SC(ku-) + -ya- + needed (neuter-stative)' },
          { chunk: 'ukuze sazi', gloss: 'so that we know (subjunctive)' },
          { chunk: 'imbangela yobuhlungu', gloss: 'the etiology of the pain' }
        ]
      },
      {
        id: 'inf-nom-ex-2',
        type: 'community',
        isizulu: 'Ukuhlala wedwa ekhaya kuyingozi lapho unesiyezi.',
        english: 'Living alone at home is dangerous when you experience dizziness.',
        breakdown: [
          { chunk: 'Ukuhlala', gloss: 'Living / Staying (Class 15)' },
          { chunk: 'wedwa ekhaya', gloss: 'alone at home' },
          { chunk: 'ku-yingozi', gloss: 'it is a hazard / danger' },
          { chunk: 'lapho unesiyezi', gloss: 'when you have dizziness' }
        ]
      }
    ]
  },
  {
    id: 'inf-temporal-ngaphambi',
    category: 'infinitives',
    title: 'Temporal Prepositions: ngaphambi ko- ("Before / Pre-prandial")',
    badge: 'Pre-Meal Scheduling',
    subtitle: 'Scheduling medication and procedures before meals or actions',
    formula: 'ngaphambi + ko- + Class 15 Noun | ngaphambi kokuba + Subjunctive Clause',
    explanation:
      'To express timing before an event or meal, use the compound formative ngaphambi (literally "in front of time"). When preceding a noun or action, it takes the possessive marker ko- (kwa- + u- = ko-): ngaphambi kokudla (before eating). When governing a full personal sentence clause, it takes the conjunction ngaphambi kokuba followed obligatorily by the subjunctive ending in -e (ngaphambi kokuba ugwinye amaphilisi = before you swallow the tablets).',
    commonPitfall:
      'Never omit the possessive ko- before an infinitive; say *ngaphambi kokudla*, never * *ngaphambi ukudla*.',
    rules: [
      'Pre-prandial timing: ngaphambi kokudla (before eating / on an empty stomach)',
      'Contraction: kwa- + uku- coalesces into ko- (ko-kudla)',
      'Subjunctive clause: ngaphambi kokuba + Subjunctive (-e)',
      'Pharmacokinetics: Essential for thyroid, anti-tuberculosis, and gastric acid medication'
    ],
    examples: [
      {
        id: 'inf-pre-ex-1',
        type: 'clinical',
        isizulu: 'Phuza leli philisi ngaphambi kokudla ukuze livikele isisu sakho.',
        english: 'Take this pill before eating so that it protects your stomach.',
        breakdown: [
          { chunk: 'Phuza leli philisi', gloss: 'Take this pill (Class 5)' },
          { chunk: 'ngaphambi ko-kudla', gloss: 'before eating (pre-prandial)' },
          { chunk: 'ukuze livikele', gloss: 'so that it protects (subjunctive -e)' },
          { chunk: 'isisu sakho', gloss: 'your stomach' }
        ]
      },
      {
        id: 'inf-pre-ex-2',
        type: 'community',
        isizulu: 'Kumele ugeze izandla kahle ngaphambi kokuba upheke ukudla.',
        english: 'You must wash your hands thoroughly before you cook food.',
        breakdown: [
          { chunk: 'Kumele ugeze izandla', gloss: 'You must wash hands' },
          { chunk: 'kahle', gloss: 'well / thoroughly' },
          { chunk: 'ngaphambi kokuba upheke', gloss: 'before that you cook (subjunctive)' },
          { chunk: 'ukudla', gloss: 'food' }
        ]
      }
    ]
  },
  {
    id: 'inf-temporal-emva',
    category: 'infinitives',
    title: 'Temporal Prepositions: emva ko- ("After / Post-prandial")',
    badge: 'Post-Prandial Gastric Protection',
    subtitle: 'Timing oral NSAIDs, antibiotics, and steroids after meals',
    formula: 'emva / ngemuva + ko- + Class 15 Noun | emva kokuba + Participial Clause',
    explanation:
      'Post-prandial medication administration is governed by emva or ngemuva ("after / behind"). When paired with an action or meal, it contracts with Class 15 into emva kokudla (after eating) or emva kokugwinya amaphilisi (after swallowing the tablets). This instruction is clinically vital for NSAIDs, steroids, and oral antibiotics to prevent gastric irritation, peptic ulcers, and nausea.',
    commonPitfall:
      'Do not confuse pre-prandial ngaphambi ko- with post-prandial emva ko-; patients on NSAIDs risk severe gastritis if dosing timing is reversed.',
    rules: [
      'Post-prandial timing: emva kokudla / ngemuva kokudla (after eating)',
      'Full stomach requirement: Protects gastric mucosa from erosive pharmacology',
      'Follow-up timing: emva kokubona udokotela (after seeing the doctor)',
      'Subordinate clauses: emva kokuba + Participial'
    ],
    examples: [
      {
        id: 'inf-post-ex-1',
        type: 'clinical',
        isizulu: 'Lawa maphilisi obuhlungu kumele uwaphuze ngemuva kokudla kuphela.',
        english: 'These pain tablets must be taken strictly after eating only.',
        breakdown: [
          { chunk: 'Lawa maphilisi obuhlungu', gloss: 'These pain tablets (Class 6)' },
          { chunk: 'kumele u-wa-phuze', gloss: 'you must drink them (with OC -wa- in subjunctive)' },
          { chunk: 'ngemuva ko-kudla', gloss: 'after eating (post-prandial)' },
          { chunk: 'kuphela', gloss: 'only / strictly' }
        ]
      },
      {
        id: 'inf-post-ex-2',
        type: 'community',
        isizulu: 'Emva kokuthola imiphumela, uzobona udokotela futhi.',
        english: 'After obtaining the results, you will see the doctor again.',
        breakdown: [
          { chunk: 'Emva ko-kuthola', gloss: 'After obtaining/receiving' },
          { chunk: 'imiphumela', gloss: 'the results' },
          { chunk: 'uzobona udokotela futhi', gloss: 'you will see the doctor again' }
        ]
      }
    ]
  },
  {
    id: 'inf-exclusion-ngaphandle',
    category: 'infinitives',
    title: 'Exclusionary & Conditional: ngaphandle ko- ("Without / Except")',
    badge: 'Procedural Stillness',
    subtitle: 'Enforcing patient immobility during clinical procedures',
    formula: 'ngaphandle + ko- + Class 15 Noun',
    explanation:
      'The compound formative ngaphandle ko- expresses "without", "excluding", or "except". In procedural medicine, it is the universal command for motionless positioning: ngaphandle kokunyakaza (without moving), ngaphandle kokukhwehlela (without coughing), or ngaphandle kokwesaba (without fear). In chronic treatment plans, it establishes strict regimen adherence: ngaphandle kokweqa amaphilisi (without skipping pills).',
    commonPitfall:
      'Nouns following an exclusionary concept drop their initial augment vowel: *ngaphandle kokuphuza tshwala*, or retain the infinitive *ngaphandle kokunyakaza*.',
    rules: [
      'Procedural immobility: ngaphandle kokunyakaza (without moving)',
      'Radiology & lumbar puncture: Prevents needle displacement and motion artifacts',
      'Adherence continuity: ngaphandle kokweqa (without skipping a dose)',
      'Lifestyle exclusion: ngaphandle kokuphuza utshwala (without consuming alcohol)'
    ],
    examples: [
      {
        id: 'inf-excl-ex-1',
        type: 'clinical',
        isizulu: 'Kumele ulale uthule ngaphandle kokunyakazisa ikhanda ngesikhathi sihlola.',
        english: 'You must lie completely still without moving your head while we examine.',
        breakdown: [
          { chunk: 'Kumele ulale uthule', gloss: 'You must lie still / motionless' },
          { chunk: 'ngaphandle ko-kunyakazisa', gloss: 'without causing to move (causative infinitive)' },
          { chunk: 'ikhanda', gloss: 'the head' },
          { chunk: 'ngesikhathi sihlola', gloss: 'during the time we examine' }
        ]
      },
      {
        id: 'inf-excl-ex-2',
        type: 'community',
        isizulu: 'Ungaphuzi lo muthi ngaphandle kokuxoxa nomhlengikazi kuqala.',
        english: 'Do not drink this medicine without talking to the nurse first.',
        breakdown: [
          { chunk: 'Ungaphuzi lo muthi', gloss: 'Do not drink this medicine' },
          { chunk: 'ngaphandle ko-kuxoxa', gloss: 'without discussing / talking' },
          { chunk: 'nomhlengikazi kuqala', gloss: 'with the nurse first' }
        ]
      }
    ]
  },
  {
    id: 'inf-object-concord-embedding',
    category: 'infinitives',
    title: 'Embedding Object Concords within Infinitives',
    badge: 'Infinitive Pronoun Slot',
    subtitle: 'Directing the action of a verbal noun toward a specific person or organ',
    formula: 'uku- + Object Concord (OC) + Verb Root + -a',
    explanation:
      'When an infinitive acts directly upon a specific patient, limb, or organ, an object concord (OC) slots directly between the prefix uku- and the verb root. Notice that when an object concord is inserted, monosyllabic stems no longer need phonetic adjustments, and vowel elisions merge smoothly: ukukusiza (to help you), ukumbona (to see him/her), ukuwahlola amaphaphu (to examine the lungs), ukusihlola isifuba (to examine the chest).',
    commonPitfall:
      'Do not place the object concord in front of uku-; say *ngifuna ukukusiza* (I want to help you), never * *ngifuna kuku-siza* or * *ngikufuna ukusiza*.',
    rules: [
      'Slot mechanics: uku- + OC + Root + -a (uku-ku-siza = to help you)',
      'Organ reference: ukuyihlola inhliziyo (to examine the heart)',
      'Medication reference: ukuwaphuza amaphilisi (to swallow the pills)',
      'Reflexive action: ukuzisiza (to help oneself / ADL independence)'
    ],
    examples: [
      {
        id: 'inf-oc-ex-1',
        type: 'clinical',
        isizulu: 'Ngifisa ukukutshela iqiniso mayelana nokuhlanzeka kwegazi lakho.',
        english: 'I wish to tell you the truth regarding the clarity of your blood tests.',
        breakdown: [
          { chunk: 'Ngifisa', gloss: 'I wish / desire' },
          { chunk: 'uku-ku-tshela', gloss: 'to-you-tell (uku- + OC -ku- + -tshela)' },
          { chunk: 'iqiniso', gloss: 'the truth (Class 5)' },
          { chunk: 'mayelana nokuhlanzeka', gloss: 'regarding the cleanliness' },
          { chunk: 'kwegazi lakho', gloss: 'of your blood' }
        ]
      },
      {
        id: 'inf-oc-ex-2',
        type: 'community',
        isizulu: 'Uyakwazi yini ukuzondla nokuzisiza ekhaya eyedwa?',
        english: 'Is she able to feed herself and look after herself at home alone?',
        breakdown: [
          { chunk: 'Uyakwazi yini', gloss: 'Is she able? (question tag yini)' },
          { chunk: 'uku-zi-ondla', gloss: 'to-self-feed (reflexive OC -zi- + -ondla)' },
          { chunk: 'no-ku-zi-siza', gloss: 'and-to-self-help' },
          { chunk: 'ekhaya eyedwa', gloss: 'at home alone' }
        ]
      }
    ]
  }
];
