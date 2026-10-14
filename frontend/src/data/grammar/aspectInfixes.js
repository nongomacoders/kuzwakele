/**
 * Kuzwakele Grammar Reference - aspectInfixes.js
 */

export const ASPECT_INFIXES_SECTION = {
  id: 'aspect-infixes',
  title: 'Time-Flow Aspectual Infixes',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Temporal modifiers for continuity (-sa-), state transitions (se-), pending action (-ka-), and episodic history (-ke-).',
  previewHook: '-sa- (still), se- (now), -ka- (not yet), -ke- (ever)',
  description: 'Master the 5 core aspectual infix rules: progressive continuity (-sa-), exclusive transition (se-), negative incomplete (-ka-), occasional history (-ke-), and longitudinal symptom trajectory monitoring.'
};

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

export const ASPECT_INFIXES_RULES = [
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
  }
];
