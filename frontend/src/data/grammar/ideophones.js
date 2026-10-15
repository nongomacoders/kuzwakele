/**
 * Kuzwakele Grammar Reference - ideophones.js
 * Comprehensive guide to isiZulu Ideophones (Izifanekisombhalo) & the Defective Verb -thi,
 * covering sensory primitives, coupling with -thi across tenses, acute neurological syncopal
 * presentations (dwe, cwaka), trauma hemorrhage & mechanical fracture acoustic signs (tebhu, qhu),
 * and thermal or obstructive gastrointestinal/urological emergencies (bha, ngci).
 */

export const IDEOPHONES_SECTION = {
  id: 'ideophones',
  title: 'Ideophones & Defective -thi',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Vivid sensory primitives, acute visual/auditory transitions (dwe, cwaka, tebhu, bha, ngci), and tense inflections of the defective verb -thi (kwathi, kuthe, kuzothi) in emergency triage presentations.',
  previewHook: 'kwathi dwe (blackout), kwathi tebhu (spurting blood), kushisa bha (fever), kumi ngci',
  description: 'Master the 5 core ideophone rules: non-inflecting sensory primitives, coupling with the defective verb -thi across past and continuous tenses, acute neurological syncopal descriptors, hemorrhage and trauma acoustic signs, and thermal or obstructive somatic presentations.'
};

export const IDEOPHONES_MATRIX = [
  {
    ideophone: 'dwe / dwa',
    sensoryQuality: 'Complete sudden blackout / visual extinction',
    associatedVerbThi: 'kwathi dwe',
    clinicalScenario: 'Vasovagal syncope & transient visual loss',
    bedsideExample: 'Kwathi dwe emehlweni ngokushesha (Everything went black before my eyes)',
    diagnosticSignificance: 'Cerebral hypoperfusion, orthostatic hypotension, transient ischemic attack (TIA)'
  },
  {
    ideophone: 'tebhu',
    sensoryQuality: 'Sudden arterial gush / pulsatile spurting',
    associatedVerbThi: 'kwathi tebhu',
    clinicalScenario: 'Arterial laceration & hemorrhage',
    bedsideExample: 'Igazi laphuma lathi tebhu engalweni (Blood spurting out from the arm)',
    diagnosticSignificance: 'High-pressure vascular injury, hypovolemic shock risk, urgent tourniquet need'
  },
  {
    ideophone: 'cwaka / du',
    sensoryQuality: 'Dead silence / complete unresponsiveness',
    associatedVerbThi: 'kuthe cwaka',
    clinicalScenario: 'Coma / post-ictal state / respiratory arrest',
    bedsideExample: 'Isiguli siphelelwe ngamandla kwathi cwaka (Patient became lifeless and completely silent)',
    diagnosticSignificance: 'GCS depression, post-convulsive encephalopathy, cardiac arrest triage'
  },
  {
    ideophone: 'bha',
    sensoryQuality: 'Scorching radiating heat / intense burning',
    associatedVerbThi: 'kushisa bha',
    clinicalScenario: 'Hyperpyrexia & septic spike',
    bedsideExample: 'Umzimba womntwana ushisa bha (Child’s body is burning scorching hot)',
    diagnosticSignificance: 'Bacteremia, meningitis, febrile convulsion risk in pediatric triage'
  },
  {
    ideophone: 'ngci',
    sensoryQuality: 'Total closure / impenetrable obstruction',
    associatedVerbThi: 'kumi ngci',
    clinicalScenario: 'Complete bowel obstruction & acute urinary retention',
    bedsideExample: 'Isisu simi ngci asiphumeli ngaphandle (Bowels are completely shut, no stool or flatus)',
    diagnosticSignificance: 'Mechanical ileus, sigmoid volvulus, prostatic retention, acute abdomen'
  },
  {
    ideophone: 'phaqa',
    sensoryQuality: 'Flat sudden drop / collapse',
    associatedVerbThi: 'wawa wathi phaqa',
    clinicalScenario: 'Sudden unprovoked mechanical fall',
    bedsideExample: 'Ugogo wawa phansi wathi phaqa (Grandmother fell flat down without bracing)',
    diagnosticSignificance: 'Arrhythmia-induced syncope, loss of postural tone, fragility hip fracture'
  },
  {
    ideophone: 'qhu',
    sensoryQuality: 'Audible snapping / structural rupture',
    associatedVerbThi: 'kwezwakala kwathi qhu',
    clinicalScenario: 'Tendon rupture / acute fracture crepitus',
    bedsideExample: 'Kuthe lapho egijima kwezwakala kwathi qhu ethangeni (While running, a snap was heard in the thigh)',
    diagnosticSignificance: 'Achilles tendon rupture, patellar tendon avulsion, displaced bone fracture'
  },
  {
    ideophone: 'ntwesi',
    sensoryQuality: 'Sharp piercing flash / lancinating stab',
    associatedVerbThi: 'kuthi ntwesi',
    clinicalScenario: 'Lancinating pleuritic or anginal chest pain',
    bedsideExample: 'Ubuhlungu buthi ntwesi lapho ngiphefumula (Pain flashes sharply upon inhalation)',
    diagnosticSignificance: 'Pleurisy, pulmonary embolism, acute pericarditis, intercostal neuralgia'
  }
];

export const IDEOPHONES_CHECKPOINTS = [
  {
    id: 'ideo-check-1',
    challengeNumber: 1,
    prompt: 'Everything suddenly went completely black before my eyes, and then I fell down.',
    targetConcept: 'Neurological Syncopal Ideophone dwe with Remote Past kwathi',
    primaryAnswer: 'Kwathi dwe emehlweni ami ngokushesha, ngase ngiwa phansi.',
    breakdown: [
      { chunk: 'Kwathi', gloss: 'kwa- (Class 17 remote past impersonal SC) + -thi (defective verb: "it occurred / it happened")' },
      { chunk: 'dwe', gloss: 'sensory ideophone ("complete sudden visual darkness / blackout")' },
      { chunk: 'emehlweni ami', gloss: 'locative noun ("before / in my eyes")' },
      { chunk: 'ngokushesha', gloss: 'adverb ("suddenly / quickly")' },
      { chunk: 'ngase ngiwa phansi', gloss: 'consecutive clause ("and then I fell to the ground")' }
    ],
    ruleTip: 'Ideophones cannot take concords on their own; they are activated in narrative past tenses by the defective verb -thi: kwathi dwe ("it suddenly went completely pitch-black").'
  },
  {
    id: 'ideo-check-2',
    challengeNumber: 2,
    prompt: 'Blood suddenly gushed out spurting when the glass cut the arm.',
    targetConcept: 'Hemorrhagic Ideophone tebhu for Arterial Gush with Narrative kwathi',
    primaryAnswer: 'Kwathi tebhu igazi lapho ingilazi isika ingalo.',
    breakdown: [
      { chunk: 'Kwathi tebhu', gloss: 'kwathi (impersonal past of -thi) + tebhu (ideophone: "sudden pulsatile arterial gushing")' },
      { chunk: 'igazi', gloss: 'Class 5 noun ("blood")' },
      { chunk: 'lapho', gloss: 'temporal conjunction ("when / at the point that")' },
      { chunk: 'ingilazi', gloss: 'Class 9 noun ("glass")' },
      { chunk: 'isika ingalo', gloss: 'cut the arm (Class 9)' }
    ],
    ruleTip: 'Emergency triage patients use tebhu specifically for high-pressure pulsatile or torrential bleeding, alerting the clinician to arterial involvement rather than simple venous oozing.'
  },
  {
    id: 'ideo-check-3',
    challengeNumber: 3,
    prompt: "The child's body was scorching hot with fever all night.",
    targetConcept: 'Thermal Ideophone bha Intensifying the Verb -shisa',
    primaryAnswer: 'Umzimba womntwana wawushisa bha umkhuhlane ubusuku bonke.',
    breakdown: [
      { chunk: 'Umzimba womntwana', gloss: 'the child’s body (Class 3)' },
      { chunk: 'wawushisa', gloss: 'wa- + -wu- + -shisa (Class 3 remote past continuous: "was burning")' },
      { chunk: 'bha', gloss: 'thermal ideophone ("intensely / scorching white-hot")' },
      { chunk: 'umkhuhlane', gloss: 'fever / infection (Class 3)' },
      { chunk: 'ubusuku bonke', gloss: 'quantitative phrase ("all night long")' }
    ],
    ruleTip: 'Some ideophones can directly follow standard descriptive verbs as superlative intensifiers: ukushisa bha ("to burn scorching hot / hyperpyrexia").'
  }
];

export const IDEOPHONES_RULES = [
  // ==========================================
  // CATEGORY 17: IDEOPHONES & DEFECTIVE -THI
  // ==========================================
  {
    id: 'ideo-syntax-invariance',
    category: 'ideophones',
    title: 'The Invariant Sensory Ideophone Syntax',
    subtitle: 'Vivid sensory primitives, grammatical indeclinability, and tone preservation',
    formula: 'Defective Verb (-thi)  +  Invariant Sensory Ideophone',
    explanation:
      'Ideophones (izifanekisombhalo) are a distinct, foundational word class in isiZulu. Unlike verbs, nouns, or adjectives, ideophones are grammatically invariant: they take NO subject concords, NO tense infixes, and NO negative or passive suffixes. Instead, they represent direct onomatopoeic, visual, acoustic, or kinesthetic sensory snapshots. To interface with the tense and person system of a clinical sentence, they are coupled with inflections of the defective auxiliary verb -thi ("to say / do / occur").',
    commonPitfall:
      'Attempting to conjugate an ideophone as a regular verb (e.g. saying *"ngadweba"* instead of *kwathi dwe* to describe fainting). Ideophones never take verbal prefixes or suffixes; they stand pristine and unmodified.',
    rules: [
      'Ideophones are strictly indeclinable: no concords, no infixes, no terminal vowel mutations.',
      'Primary engine of coupling is the defective verb -thi (kwathi dwe = it went pitch-black).',
      'They carry expressive stress and high acoustic tone that conveys urgency and vividness.',
      'Can also act as superlative adverbs directly following regular verbs: ushisa bha (scorching hot).'
    ],
    examples: [
      {
        id: 'ideo-syn-ex-1',
        type: 'syncope',
        isizulu: 'Ngisukume masinyane embhedeni, kwathi dwe emehlweni, ngadindiliza.',
        english: 'I stood up quickly from bed, everything went black before my eyes, and I collapsed.',
        breakdown: [
          { chunk: 'Ngisukume masinyane', gloss: 'I stood up quickly' },
          { chunk: 'embhedeni', gloss: 'from bed (locative)' },
          { chunk: 'kwathi dwe', gloss: 'kwathi (-thi past) + dwe (ideophone: "sudden total blackout")' },
          { chunk: 'emehlweni', gloss: 'in the eyes (locative)' },
          { chunk: 'ngadindiliza', gloss: 'I collapsed flat' }
        ]
      },
      {
        id: 'ideo-syn-ex-2',
        type: 'temperature',
        isizulu: 'Lapho ngithinta ikhanda lakhe, lalishisa bha umkhuhlane.',
        english: 'When I touched his head, it was burning scorching hot with fever.',
        breakdown: [
          { chunk: 'Lapho ngithinta', gloss: 'when I touched' },
          { chunk: 'ikhanda lakhe', gloss: 'his head (Class 5)' },
          { chunk: 'lalishisa bha', gloss: 'was burning (past continuous) + bha (ideophone: "scorching hot")' },
          { chunk: 'umkhuhlane', gloss: 'fever / infection' }
        ]
      }
    ]
  },
  {
    id: 'ideo-thi-conjugation',
    category: 'ideophones',
    title: 'Inflections of the Defective Verb -thi with Ideophones',
    subtitle: 'Navigating past narrative, recent states, habitual recurrence, and future outcomes',
    formula: 'kwathi [remote past]  |  kuthe [recent past]  |  kuthi [habitual]  |  kuzothi [future]',
    explanation:
      'Because the ideophone itself cannot communicate grammatical tense or aspect, the defective verb -thi acts as its temporal engine. In clinical consultations, five inflections predominate: (1) kwathi + ideophone (narrative remote past: "it suddenly happened that..."); (2) kuthe + ideophone (recent past / stative state: "it has become..."); (3) kuthi + ideophone (present habitual: "it repeatedly happens that..."); (4) kuke kuthi + ideophone (episodic paroxysm: "it occasionally occurs that..."); and (5) kuzothi + ideophone (future warning: "it will suddenly become...").',
    commonPitfall:
      'Using the full standard verb *ukukhuluma* ("to speak") instead of the defective verb *-thi*. *-thi* in this context does not mean "to speak words"; it means "to undergo a sudden sensory state or action".',
    rules: [
      'Remote past narrative: kwathi dwe (it suddenly went black); kwathi tebhu (it gushed).',
      'Recent / stative state: kuthe cwaka (it is completely quiet / still).',
      'Present habitual recurrence: kuthi ntwesi lapho ngiphefumula (it stabs sharply whenever I inhale).',
      'Episodic onset: kuke kuthi nzo emehlweni (dizziness occasionally darkens my vision).'
    ],
    examples: [
      {
        id: 'ideo-thi-ex-1',
        type: 'paroxysm',
        isizulu: 'Kuke kuthi ntwesi esifubeni uma ngihamba amabanga amade.',
        english: 'A sharp piercing pain flashes in my chest occasionally whenever I walk long distances.',
        breakdown: [
          { chunk: 'Kuke kuthi', gloss: 'it occasionally happens (auxiliary kuke + -thi)' },
          { chunk: 'ntwesi', gloss: 'ideophone ("sharp piercing flash of pain")' },
          { chunk: 'esifubeni', gloss: 'in the chest (locative)' },
          { chunk: 'uma ngihamba amabanga amade', gloss: 'if / when I walk long distances' }
        ]
      },
      {
        id: 'ideo-thi-ex-2',
        type: 'recent-state',
        isizulu: 'Kuthe lapho efika emtholampilo, umzimba wakhe wawuthe cwaka.',
        english: 'When he arrived at the clinic, his body was completely motionless and unresponsive.',
        breakdown: [
          { chunk: 'Kuthe lapho efika', gloss: 'when he arrived' },
          { chunk: 'emtholampilo', gloss: 'at the clinic (locative)' },
          { chunk: 'umzimba wakhe', gloss: 'his body (Class 3)' },
          { chunk: 'wawuthe cwaka', gloss: 'was in a state of (-thi past) + cwaka (ideophone: "absolute stillness / silence")' }
        ]
      }
    ]
  },
  {
    id: 'ideo-neuro-syncope',
    category: 'ideophones',
    title: 'Acute Neurological & Syncopal Descriptors (dwe, cwaka, phaqa)',
    subtitle: 'Deciphering patient reports of blackouts, unresponsiveness, and unbraced falls',
    formula: 'kwathi dwe (blackout)  |  kuthe cwaka (unresponsive)  |  wathi phaqa (flat collapse)',
    explanation:
      'In neurology and emergency triage, patients and families rarely use clinical terms like "syncope", "post-ictal state", or "atonic drop". Instead, they rely on three classic ideophones: (1) dwe or dwa: communicates sudden total extinction of vision or consciousness ("everything went pitch-black"); (2) cwaka or du: describes the profound, lifeless silence of a patient in coma, deep syncope, or cardiac arrest; and (3) phaqa: describes falling flat to the floor without bracing or protective reflexes, distinguishing true cardiogenic/neurological collapse from mechanical trips.',
    commonPitfall:
      'Dismissing *kwathi dwe* as mere tiredness. It is the definitive idiomatic marker of cerebral hypoperfusion, orthostatic hypotension, or transient retinal ischemia.',
    rules: [
      'Visual extinction / presyncope: kwathi dwe emehlweni (pitch-black before the eyes).',
      'Profound unresponsiveness: kwathi cwaka / kwathi du (dead silence / unresponsiveness).',
      'Unbraced fall without defensive reflexes: wathi phaqa phansi (dropped flat like a board).',
      'Sudden vertigo / rotational dizziness: kanti kwathi zunguzungu (suddenly the world spun).'
    ],
    examples: [
      {
        id: 'ideo-neuro-ex-1',
        type: 'triage-fall',
        isizulu: 'Ugogo wayemi esitofini, kwathi dwe, wawa phansi wathi phaqa.',
        english: 'Grandmother was standing by the stove, everything went black, and she collapsed flat to the floor.',
        breakdown: [
          { chunk: 'Ugogo wayemi esitofini', gloss: 'grandmother was standing at the stove' },
          { chunk: 'kwathi dwe', gloss: 'everything went pitch-black (ideophone dwe)' },
          { chunk: 'wawa phansi', gloss: 'she fell down' },
          { chunk: 'wathi phaqa', gloss: 'dropped flat without bracing (ideophone phaqa)' }
        ]
      },
      {
        id: 'ideo-neuro-ex-2',
        type: 'seizure-recovery',
        isizulu: 'Ngemuva kokuxhwalala, ingane yathi cwaka ubuthongo obukhulu.',
        english: 'After the convulsion, the child fell into a deep, motionless and silent sleep.',
        breakdown: [
          { chunk: 'Ngemuva kokuxhwalala', gloss: 'after convulsing / seizure' },
          { chunk: 'ingane yathi cwaka', gloss: 'the child became completely still and silent (cwaka)' },
          { chunk: 'ubuthongo obukhulu', gloss: 'a deep sleep (post-ictal state)' }
        ]
      }
    ]
  },
  {
    id: 'ideo-trauma-hemorrhage',
    category: 'ideophones',
    title: 'Hemorrhage, Trauma & Mechanical Signs (tebhu, qhu)',
    subtitle: 'Identifying high-pressure arterial lacerations and acute structural skeletal disruptions',
    formula: 'igazi lathi tebhu (pulsatile spurting)  |  kwezwakala kwathi qhu (audible snap)',
    explanation:
      'Trauma history taking relies heavily on sensory ideophones to evaluate force and tissue destruction: (1) tebhu: conveys sudden, copious, pulsatile spurting of blood, signaling arterial laceration rather than slow capillary or venous ooze; (2) qhu: describes an audible, palpable, sudden snap or explosive rupture of dense connective tissue, characteristic of complete Achilles tendon rupture, quadriceps tendon avulsion, or acute bone fracture.',
    commonPitfall:
      'Treating *igazi lathi tebhu* as simple bleeding. *Tebhu* conveys high-pressure arterial spurting that demands immediate direct pressure, tourniquet application, and rapid fluid resuscitation.',
    rules: [
      'Arterial spurting: Igazi lathi tebhu (Blood spurted out forcefully).',
      'Structural snap / tendon rupture: Kwezwakala kwathi qhu (An audible snap was heard).',
      'Violent blunt impact: Kwathi bhamu / kwathi ngqimphu (Loud heavy blunt collision).',
      'Lacerating slice: Kwathi nqu (Sudden clean severed cut).'
    ],
    examples: [
      {
        id: 'ideo-trauma-ex-1',
        type: 'vascular',
        isizulu: 'Ummese unqume umthambo esihlakaleni, igazi lathi tebhu odongeni.',
        english: 'The knife severed an artery at the wrist; blood spurted against the wall.',
        breakdown: [
          { chunk: 'Ummese unqume umthambo', gloss: 'the knife severed an artery/vessel' },
          { chunk: 'esihlakaleni', gloss: 'at the wrist (locative)' },
          { chunk: 'igazi lathi tebhu', gloss: 'blood gushed in spurts (ideophone tebhu)' },
          { chunk: 'odongeni', gloss: 'against the wall (locative)' }
        ]
      },
      {
        id: 'ideo-trauma-ex-2',
        type: 'orthopedic',
        isizulu: 'Ngigxume ebhasini, ngezwa kwathi qhu eqakaleni, ngabona ukuthi ngiphukile.',
        english: 'I jumped off the bus, heard a snap in my ankle, and realized I was fractured.',
        breakdown: [
          { chunk: 'Ngigxume ebhasini', gloss: 'I jumped from the bus' },
          { chunk: 'ngezwa kwathi qhu', gloss: 'I heard/felt a snap (ideophone qhu)' },
          { chunk: 'eqakaleni', gloss: 'in the ankle (locative)' },
          { chunk: 'ngabona ukuthi ngiphukile', gloss: 'I saw that I was broken/fractured' }
        ]
      }
    ]
  },
  {
    id: 'ideo-thermal-obstruction',
    category: 'ideophones',
    title: 'Thermal & Obstructive Somatic Ideophones (bha, ngci)',
    subtitle: 'Evaluating high-grade hyperpyrexia, complete obstipation, and acute urinary retention',
    formula: 'kushisa bha (fever hyperpyrexia)  |  kumi ngci (total mechanical obstruction)',
    explanation:
      'Internal medicine and pediatric admissions frequently present with acute thermal or obstructive somatic complaints captured by ideophones: (1) bha: conveys intense, radiating, scorching heat (kushisa bha = hyperpyrexia $\\ge 39.5^\\circ\\text{C}$); (2) ngci: denotes total, hermetic, unyielding closure or cessation, indicating complete mechanical bowel obstruction (isisu simi ngci = no stool or flatus passed for days) or acute urinary retention (umchamo umi ngci).',
    commonPitfall:
      'Assuming *isisu simi ngci* means simple constipation. In Zulu clinical parlance, *ngci* implies absolute obstipation with no flatus, warranting urgent abdominal radiography for volvulus or bowel obstruction.',
    rules: [
      'Extreme febrile heat: ushisa bha (scorching hot to the touch).',
      'Absolute luminal obstruction: kumi ngci (completely shut / blocked tight).',
      'Bone-dry dehydration: komile qha / komile tshe (completely desiccated).',
      'Choking / airway tightness: kubambelele ngci emqaleni (tightly jammed in the throat).'
    ],
    examples: [
      {
        id: 'ideo-somatic-ex-1',
        type: 'pediatric-fever',
        isizulu: 'Ingane yayishisa bha umzimba wonke, yase iqala ukuxhwalala.',
        english: 'The child was burning scorching hot all over the body, and then started convulsing.',
        breakdown: [
          { chunk: 'Ingane yayishisa bha', gloss: 'the child was burning scorching hot (bha)' },
          { chunk: 'umzimba wonke', gloss: 'the entire body' },
          { chunk: 'yase iqala ukuxhwalala', gloss: 'and then began having a febrile convulsion' }
        ]
      },
      {
        id: 'ideo-somatic-ex-2',
        type: 'acute-abdomen',
        isizulu: 'Sekuphele izinsuku ezintathu isisu simi ngci, ngiyalalelwa futhi ngiyaphalaza.',
        english: 'It has been three days with bowels completely shut tight; I am in pain and vomiting.',
        breakdown: [
          { chunk: 'Sekuphele izinsuku ezintathu', gloss: 'three days have already passed' },
          { chunk: 'isisu simi ngci', gloss: 'the stomach/bowel is completely stopped tight (ngci)' },
          { chunk: 'ngiyalalelwa', gloss: 'I am in severe pain' },
          { chunk: 'futhi ngiyaphalaza', gloss: 'and I am vomiting' }
        ]
      }
    ]
  }
];
