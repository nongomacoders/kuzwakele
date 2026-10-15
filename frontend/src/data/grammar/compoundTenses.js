/**
 * Kuzwakele Grammar Reference - compoundTenses.js
 * Comprehensive guide to Compound Tenses & Multi-Tier Aspect Chaining (Izinkathi Ezimbaxambaxa),
 * covering multi-tier auxiliary structures combining continuous markers (bengi-, wawu-, waye-)
 * or future auxiliaries (ngobe, uzobe) with secondary participials and aspect infixes
 * (-lokhu, se-, -sa-) to untangle complex clinical timelines.
 */

export const COMPOUND_TENSES_SECTION = {
  id: 'compound-tenses',
  title: 'Compound Tenses & Aspect Chaining',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Multi-tier auxiliary structures combining continuous markers (bengi-, wawu-, waye-) or future auxiliaries (ngobe, uzobe) with secondary participials and aspect infixes (-lokhu, se-, -sa-) to untangle complex clinical timelines.',
  previewHook: 'bengilokhu ngiphuza (persistent adherence), wayesegula efika (pre-admission state), ngobe sengiqedile',
  description: 'Master the 5 core compound tense rules: persistent past actions with auxiliary -lokhu, state transitions prior to historical events (wayese-), future continuous and future perfect projections (uzobe ehlolwa, ngobe sengiqedile), past unfulfilled intent (ngangisazoba), and longitudinal disease chronologies.'
};

export const COMPOUND_TENSES_MATRIX = [
  {
    compoundPattern: 'Past Frequentative Continuous',
    formula: 'bengi- / waye- + -lokhu + Part',
    clinicalBedsideExample: 'Bengilokhu ngiphuza amaphilisi njalo (I have been continuously taking the pills regularly)',
    temporalAspect: 'Unbroken therapeutic adherence / persistent vomiting',
    diagnosticValue: 'Treatment failure vs non-adherence distinction'
  },
  {
    compoundPattern: 'Prior Transition State',
    formula: 'wayese- / sasesi- + Stative',
    clinicalBedsideExample: 'Wayesequlekile ngenkathi efika esibhedlela (He was already unconscious when arriving at hospital)',
    temporalAspect: 'State established before admission',
    diagnosticValue: 'Baseline acuity on triage arrival'
  },
  {
    compoundPattern: 'Future Completed Perfect',
    formula: 'ngobe / uzobe + se- + SC + Verb',
    clinicalBedsideExample: 'Kusasa ngalesi sikhathi ngobe sengiwaphuzile wonke amaphilisi (Tomorrow by this time I will have finished all the pills)',
    temporalAspect: 'Anticipated course completion',
    diagnosticValue: 'Antibiotic course clearance timeline'
  },
  {
    compoundPattern: 'Past Progressive Continuity',
    formula: 'waye- + -sa- + Root / Stative',
    clinicalBedsideExample: 'Wayesaphila ngenkathi kufika i-ambulensi (He was still alive when the ambulance arrived)',
    temporalAspect: 'Vital signs present during transit',
    diagnosticValue: 'Resuscitation window timing'
  },
  {
    compoundPattern: 'Future In-Progress Continuous',
    formula: 'uzobe + Participial Concord + Root',
    clinicalBedsideExample: 'Kusasa uzobe ehlolwa ngudokotela oyingcweti (Tomorrow he will be being examined by a specialist doctor)',
    temporalAspect: 'Scheduled procedural intervention',
    diagnosticValue: 'Patient expectation setting'
  },
  {
    compoundPattern: 'Remote Past Unfulfilled Intent',
    formula: 'ngangi- + -sa- + -zo- + Root',
    clinicalBedsideExample: 'Ngangisazoya emtholampilo kodwa ngawa phansi (I was just about to go to the clinic, but I collapsed)',
    temporalAspect: 'Interrupted healthcare-seeking intent',
    diagnosticValue: 'Fall etiology history'
  },
  {
    compoundPattern: 'Past Incomplete Pending',
    formula: 'waye- + -nga- + -ka- + Root + -i',
    clinicalBedsideExample: 'Wayengakayi esibhedlela ngenkathi eqhaqhazela (He had not yet gone to hospital when shivering)',
    temporalAspect: 'Diagnostic delay / barrier',
    diagnosticValue: 'Triage risk escalation'
  },
  {
    compoundPattern: 'Frequentative Symptom Recurrence',
    formula: 'bengilokhu + SC + Stative / Infix',
    clinicalBedsideExample: 'Bengilokhu ngineziyezi ubusuku bonke (I have been having dizziness continuously all night)',
    temporalAspect: 'Intermittent nocturnal symptom recurrence',
    diagnosticValue: 'Paroxysmal symptom tracking'
  }
];

export const COMPOUND_TENSES_CHECKPOINTS = [
  {
    id: 'chk-comp-1',
    challengeNumber: 1,
    category: 'compound-tenses',
    targetConcept: 'Persistent Symptom Continuity (-lokhu)',
    prompt: 'I have been continuously vomiting and feeling dizzy since yesterday morning.',
    primaryAnswer: 'Bengilokhu ngiphalaza futhi ngizizwa nginesiyezi kusukela izolo ekuseni.',
    ruleTip: 'Auxiliary -lokhu chains with participial verb forms (ngiphalaza, ngizizwa) following recent past auxiliary bengi- to denote continuous, unbroken pathological events.',
    breakdown: [
      { chunk: 'Bengilokhu', gloss: '1st pers sing recent past aux + frequentative -lokhu ("I was continuously")' },
      { chunk: 'ngiphalaza', gloss: 'Part SC ngi- + root -phalaza ("vomiting")' },
      { chunk: 'futhi', gloss: 'Conjunction ("and / furthermore")' },
      { chunk: 'ngizizwa', gloss: 'Part SC ngi- + reflexive zi- + root -zwa ("feeling myself")' },
      { chunk: 'nginesiyezi', gloss: 'Associative copulative na- + isiyezi ("having dizziness")' },
      { chunk: 'kusukela izolo ekuseni', gloss: 'Temporal prepositional phrase ("starting from yesterday morning")' }
    ]
  },
  {
    id: 'chk-comp-2',
    challengeNumber: 2,
    category: 'compound-tenses',
    targetConcept: 'Pre-Admission Clinical State (wayese- / sasesi-)',
    prompt: 'The patient was already unconscious when the ambulance arrived at home.',
    primaryAnswer: 'Isiguli sasesiqulekile ngenkathi i-ambulensi ifika ekhaya.',
    ruleTip: 'Compound concord sasesi- (Class 7 isiguli) fuses remote auxiliary with exclusive se- and stative -qulekile to establish that the coma preceded the transit milestone.',
    breakdown: [
      { chunk: 'Isiguli', gloss: 'Class 7 noun ("patient / injured individual")' },
      { chunk: 'sasesiqulekile', gloss: 'Class 7 past concord sa- + se- + stative stem -qulekile ("it was already in a fainted state")' },
      { chunk: 'ngenkathi', gloss: 'Temporal conjunction ("at the time when / while")' },
      { chunk: 'i-ambulensi', gloss: 'Class 9 loan noun ("ambulance / emergency vehicle")' },
      { chunk: 'ifika', gloss: 'Class 9 participial concord i- + root -fika ("arriving")' },
      { chunk: 'ekhaya', gloss: 'Locative noun ("at the home / residence")' }
    ]
  },
  {
    id: 'chk-comp-3',
    challengeNumber: 3,
    category: 'compound-tenses',
    targetConcept: 'Future Perfect Anticipated Clearance (ngobe sengi-)',
    prompt: 'By next Tuesday I will have already finished all these antibiotic pills.',
    primaryAnswer: 'NgoLwesibili oluzayo ngobe sengiwacedile wonke la maphilisi e-antibiotic.',
    ruleTip: 'Contracted future auxiliary ngobe (from ngizobe) chains with exclusive sengi- and past completed verb stem -cedile / -qedile to describe a completed future event.',
    breakdown: [
      { chunk: 'NgoLwesibili oluzayo', gloss: 'Instrumental temporal phrase ("on next Tuesday")' },
      { chunk: 'ngobe', gloss: 'Contracted future auxiliary ngizobe ("I will be")' },
      { chunk: 'sengiwacedile', gloss: 'Exclusive sengi- + OC -wa- + stem -cedile / -qedile ("already having finished them [Class 6 pills]")' },
      { chunk: 'wonke la maphilisi', gloss: 'Quantitative wonke + Class 6 demonstrative la + amaphilisi ("all these pills")' },
      { chunk: 'e-antibiotic', gloss: 'Possessive qualifying noun ("of antibiotic medication")' }
    ]
  }
];

export const COMPOUND_TENSES_RULES = [
  {
    id: 'comp-past-frequentative-lokhu',
    category: 'compound-tenses',
    title: 'The Persistent Habitual Auxiliary -lokhu with Continuous Tenses',
    badge: 'Unbroken Continuity',
    principle: 'Auxiliary -lokhu combines with continuous past concords (bengi-, waye-, sase-) to denote actions or symptoms that persisted without interruption across a clinical timeframe.',
    formula: 'Continuous Past Concord + -lokhu + Participial Subject Concord + Verb Root',
    warning: 'Always ensure the secondary verb takes participial subject concords (Class 1 e-, Class 2 be-, not indicative u-/ba-).',
    examples: [
      {
        id: 'comp-lokhu-cough',
        type: 'clinical',
        isizulu: 'Bengilokhu ngikhwehlela igazi ubusuku bonke ngingalali.',
        english: 'I have been continuously coughing blood all night without sleeping.',
        breakdown: 'bengilokhu (I was persistently) + ngikhwehlela (coughing [part]) + igazi (blood) + ubusuku bonke (all night)'
      },
      {
        id: 'comp-lokhu-vomit',
        type: 'clinical',
        isizulu: 'Umntwana ubelokhu ephalaza noma engadlanga lutho.',
        english: 'The child has been persistently vomiting even though he ate nothing.',
        breakdown: 'ubelokhu (he was persistently) + ephalaza (Class 1 part SC e- + vomit) + noma (even if)'
      }
    ]
  },
  {
    id: 'comp-prior-state-se',
    category: 'compound-tenses',
    title: 'State Transitions Prior to Historical Events (wayese- / sasesi-)',
    badge: 'Prior Established State',
    principle: 'Fusing continuous past concords with exclusive aspect prefix se- establishes baseline bodily states that had already occurred before emergency admission or intervention.',
    formula: 'Past Concord + -se- + (Subject Concord) + Stative / Completed Verb',
    warning: 'Do not confuse with plain past simple; wayesequlekile implies the coma had already begun before the reference point.',
    examples: [
      {
        id: 'comp-se-unconscious',
        type: 'clinical',
        isizulu: 'Wayesequlekile ngenkathi abatakuli bemfaka e-ambulensini.',
        english: 'He was already unconscious when the paramedics placed him in the ambulance.',
        breakdown: 'wayese- (he was already) + -qulekile (in fainted state) + ngenkathi (when)'
      },
      {
        id: 'comp-se-swollen',
        type: 'clinical',
        isizulu: 'Umlenze wawusuvuvukele kakhulu ngaphambi kokuba awe.',
        english: 'The leg was already severely swollen before he fell.',
        breakdown: 'wawusu- (Class 3 leg was already) + -vuvukele (swollen stative)'
      }
    ]
  },
  {
    id: 'comp-future-continuous-perfect',
    category: 'compound-tenses',
    title: 'Future Continuous & Future Perfect Chaining (uzobe e- / ngobe sengi-)',
    badge: 'Future Trajectory',
    principle: 'Projecting patient status into future clinical milestones requires chaining future auxiliaries (ngobe / ngizobe, uzobe) with ongoing participials or completed exclusive se- forms.',
    formula: 'Future Aux (ngobe / uzobe) + [se- + SC + Perf / Part SC + Verb]',
    warning: 'In rapid speech, ngizobe contracts to ngobe, and uzobe contracts to wobe or remains uzobe.',
    examples: [
      {
        id: 'comp-fut-surgery',
        type: 'clinical',
        isizulu: 'Kusasa ekuseni uzobe ehlinzwa ethiyetha ngudokotela omkhulu.',
        english: 'Tomorrow morning he will be undergoing surgery in theatre by the chief surgeon.',
        breakdown: 'uzobe (he will be) + ehlinzwa (Class 1 part passive: being operated on) + ethiyetha (in theatre)'
      },
      {
        id: 'comp-fut-perf-clear',
        type: 'clinical',
        isizulu: 'Ngeviki elizayo ngobe sengiwaphuzile wonke amaphilisi e-TB.',
        english: 'By next week I will have already taken all the TB pills.',
        breakdown: 'ngobe (I will be) + sengiwaphuzile (already having drank them) + amaphilisi (pills)'
      }
    ]
  },
  {
    id: 'comp-unfulfilled-intent',
    category: 'compound-tenses',
    title: 'Past Unfulfilled Intent & Imminent Interrupted Actions (ngangisazo-)',
    badge: 'Interrupted Intent',
    principle: 'Stacking the progressive aspect infix -sa- with near future -zo- under a past concord formulates actions that were about to occur before sudden illness or injury intervened.',
    formula: 'Remote / Recent Past Concord + -sa- + -zo- + Verb Root',
    warning: 'Signals interrupted healthcare-seeking or activities of daily living preceding acute trauma.',
    examples: [
      {
        id: 'comp-intent-clinic',
        type: 'clinical',
        isizulu: 'Ngangisazovuka ngiye emtholampilo lapho isifuba sami siqala ukungivalela.',
        english: 'I was just about to get up and go to the clinic when my chest began closing up on me.',
        breakdown: 'ngangisazovuka (I was just about to wake/rise) + ngiye (that I go [subj]) + lapho (when)'
      },
      {
        id: 'comp-intent-eat',
        type: 'clinical',
        isizulu: 'Wabesazodla ukudla kwakusihlwa lapho eqala ukuba nesiyezi.',
        english: 'He was about to eat dinner when he started becoming dizzy.',
        breakdown: 'wabesazodla (he was just about to eat) + ukudla (food) + lapho eqala (when he started)'
      }
    ]
  },
  {
    id: 'comp-clinical-longitudinal-timeline',
    category: 'compound-tenses',
    title: 'Longitudinal History-Taking & Patient Chronology Elicitation',
    badge: 'Timeline Disentanglement',
    principle: 'Disentangling complex multi-day or multi-week presentations requires combining past auxiliaries with aspect infixes (-ka-, -sa-, -lokhu) to separate chronic baselines from acute deteriorations.',
    formula: 'Past Aux + Infix (-sa- / -ka- / -lokhu) + Negative Participial / Stative',
    warning: 'Listen closely for -ngaka- (not yet) vs -ngasa- (no longer) embedded under past auxiliaries.',
    examples: [
      {
        id: 'comp-long-chronic-acute',
        type: 'clinical',
        isizulu: 'Kade agula kulo nyaka, kodwa wayengakaze ahlanze igazi ngaphambilini.',
        english: 'He has long been sick this year, but he had never before vomited blood.',
        breakdown: 'kade agula (he has long been sick) + wayengakaze (he had never yet) + ahlanze (vomited)'
      },
      {
        id: 'comp-long-med-compliance',
        type: 'clinical',
        isizulu: 'Ubesalokhu ewaphuzile amaphilisi ngenkathi lezi zilonda ziqala ukuvela.',
        english: 'He had still been taking the pills when these ulcers began to appear.',
        breakdown: 'ubesalokhu (he was still persistently) + ewaphuzile (having taken them) + lezi zilonda (these ulcers)'
      }
    ]
  }
];
