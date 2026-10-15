/**
 * Kuzwakele Grammar Reference - narrativeSequence.js
 * Comprehensive guide to Narrative Sequencing & Irregular Verbs (Ukuxhumanisa Izenzo Nezinto Ezixakile),
 * covering procedural discharge instructions with the sequential subjunctive (bese u-, anduba u-),
 * narrative past event chaining (wa-... wa-...), and irregular/defective verb mechanics
 * (-azi "know", -sho "say/mean", -thi "think/say").
 */

export const NARRATIVE_SEQUENCE_SECTION = {
  id: 'narrative-irregular',
  title: 'Narrative Sequencing & Irregular Verbs',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Procedural discharge instructions with the sequential subjunctive (bese u-, anduba u-), narrative past event chaining (wa-... wa-...), and irregular/defective verb mechanics (-azi "know", -sho "say/mean", -thi "think/say").',
  previewHook: 'bese ugeza isilonda, usho ukuthini?, angazi ukuthi kwenzekeni, wawa wayesequleka',
  description: 'Master the 5 core narrative and irregular verb rules: sequential subjunctive multi-step care plans (bese), prior prerequisite actions (anduba), narrative past event chaining, the irregular verb -azi (know), and defective communicative verbs (-sho, -thi) for patient history clarification.'
};

export const NARRATIVE_SEQUENCE_MATRIX = [
  {
    mechanicType: 'Sequential Subjunctive bese',
    formula: 'Imperative / Subjunctive + bese + SC + Verb-e',
    bedsideClinicalExample: 'Hlanza isilonda bese ugcoba umuthi (Clean the wound and then apply medication)',
    communicativeFunction: 'Sequential medication application',
    clinicalPitfallToAvoid: 'Dropping subjunctive -e after bese'
  },
  {
    mechanicType: 'Prerequisite Action anduba',
    formula: 'Action A + anduba + SC + Verb-e',
    bedsideClinicalExample: 'Phuza amanzi anduba ugwinye iphilisi (Drink water before swallowing the pill)',
    communicativeFunction: 'Safe swallowing protocol',
    clinicalPitfallToAvoid: 'Using indicative after anduba'
  },
  {
    mechanicType: 'Narrative Past Chaining wa-... wa-',
    formula: 'Past Concord A + Past Concord B + Past Concord C',
    bedsideClinicalExample: 'Washelela, washayeka ekhanda, waquleka (He slipped, hit his head, and fainted)',
    communicativeFunction: 'Acute trauma chronological reporting',
    clinicalPitfallToAvoid: 'Disjointed timeline descriptions'
  },
  {
    mechanicType: 'Impersonal Temporal Pivot kwathi lapho',
    formula: 'kwathi lapho + Participial + Main Past Clause',
    bedsideClinicalExample: 'Kwathi lapho evuka wezwa ubuhlungu obunamandla (It came to pass when waking he felt severe pain)',
    communicativeFunction: 'Event timeline demarcation',
    clinicalPitfallToAvoid: 'Confusing kwathi with present kuthi'
  },
  {
    mechanicType: 'Irregular Verb -azi [Know]',
    formula: 'Positive: -azi / Neg: a-...-azi / Rel: owaziyo',
    bedsideClinicalExample: 'Angazi ukuthi ngangenwa yini le nkinga (I do not know what caused this problem)',
    communicativeFunction: 'Patient history gap acknowledgment',
    clinicalPitfallToAvoid: 'Saying *angazanga for present ignorance'
  },
  {
    mechanicType: 'Defective Verb -sho [Say/Mean]',
    formula: 'Present: -sho / Neg: a-...-sho / Past: -tsho / -shilo',
    bedsideClinicalExample: 'Usho ukuthini lapho uthi isifuba siyavaleka? (What do you mean when you say the chest is closing?)',
    communicativeFunction: 'Symptom clarification & SBAR probe',
    clinicalPitfallToAvoid: 'Confusing -sho with -tshela [tell]'
  },
  {
    mechanicType: 'Defective Verb -thi [Think/Report]',
    formula: 'SC + -thi + Complement Clause',
    bedsideClinicalExample: 'Udokotela uthi kumele uhlale esibhedlela (The doctor states that you must stay in hospital)',
    communicativeFunction: 'Medical plan reporting',
    clinicalPitfallToAvoid: 'Treating -thi as regular vowel verb'
  },
  {
    mechanicType: 'Consecutive Patient Care Regimen',
    formula: 'Qala + Verb-e, bese + Verb-e, anduba + Verb-e',
    bedsideClinicalExample: 'Qala uhlale phansi, bese uphuza lo muthi, anduba ulale (First sit down, then drink this medicine, before sleeping)',
    communicativeFunction: 'Multi-stage discharge safety-netting',
    clinicalPitfallToAvoid: 'Omitting chronological linkers in discharge advice'
  }
];

export const NARRATIVE_SEQUENCE_CHECKPOINTS = [
  {
    id: 'chk-narr-1',
    challengeNumber: 1,
    category: 'narrative-irregular',
    targetConcept: 'Multi-Step Wound Dressing Protocol (bese)',
    prompt: 'First clean the wound with clean water, then apply the ointment, then wrap it with a clean bandage.',
    primaryAnswer: 'Qala uhlanze isilonda ngamanzi ahlanzekile, bese ugcoba umuthi, bese usibopha ngebhandishi elihlanzekile.',
    ruleTip: 'Sequential subjunctive connective bese requires all subsequent verb stems to end in -e (ugcobe, usibophe) maintaining imperative authority across instructions.',
    breakdown: [
      { chunk: 'Qala uhlanze', gloss: 'Imperative qala ("first / begin") + subjunctive uhlanze ("that you clean")' },
      { chunk: 'isilonda', gloss: 'Class 7 noun ("wound / ulcer")' },
      { chunk: 'ngamanzi ahlanzekile', gloss: 'Instrumental nga- + amanz\' ahlanzekile ("with clean water")' },
      { chunk: 'bese ugcoba umuthi', gloss: 'Sequential bese + subjunctive 2nd pers ugcobe / ugcoba ("then you apply medication")' },
      { chunk: 'bese usibopha', gloss: 'Sequential bese + SC u- + OC -si- (Class 7 wound) + -bophe ("then you bandage it")' },
      { chunk: 'ngebhandishi elihlanzekile', gloss: 'Instrumental nga- + ibhandishi + relative elihlanzekile ("with a clean bandage")' }
    ]
  },
  {
    id: 'chk-narr-2',
    challengeNumber: 2,
    category: 'narrative-irregular',
    targetConcept: 'Symptom Clarification (-sho)',
    prompt: 'What do you mean when you say your heart is fluttering rapidly?',
    primaryAnswer: 'Usho ukuthini lapho uthi inhliziyo yakho igxumagxuma ngokushesha?',
    ruleTip: 'Defective verb -sho pairs with interrogative enclitic -ni (ushoni? / usho ukuthini?) to probe vague somatic sensations without judgment.',
    breakdown: [
      { chunk: 'Usho ukuthini', gloss: '2nd pers SC u- + defective stem -sho ("you mean") + ukuthini ("what")' },
      { chunk: 'lapho uthi', gloss: 'Temporal relator lapho ("where/when") + SC u- + defective -thi ("you state")' },
      { chunk: 'inhliziyo yakho', gloss: 'Class 9 noun ("your heart")' },
      { chunk: 'igxumagxuma', gloss: 'Class 9 SC i- + reduplicated root -gxuma ("fluttering / jumping repeatedly")' },
      { chunk: 'ngokushesha', gloss: 'Adverbial formative nga- + ukushesha ("rapidly / quickly")' }
    ]
  },
  {
    id: 'chk-narr-3',
    challengeNumber: 3,
    category: 'narrative-irregular',
    targetConcept: 'Narrative Trauma History Chaining',
    prompt: 'He slipped on the wet floor, struck his head, and immediately lost consciousness.',
    primaryAnswer: 'Washelela phansi lapho kumanzi, washayeka ekhanda, wabe esequleka ngokushesha.',
    ruleTip: 'Consecutive past actions are linked with remote past prefixes (washelela, washayeka) before transitioning with wabe esequleka for immediate consequential collapse.',
    breakdown: [
      { chunk: 'Washelela phansi', gloss: 'Class 1 past SC wa- + -shelela ("he slipped") + phansi ("down")' },
      { chunk: 'lapho kumanzi', gloss: 'Locative relative ("where it is wet")' },
      { chunk: 'washayeka ekhanda', gloss: 'Past SC wa- + neuter stem -shayeka ("struck") + ekhanda ("on the head")' },
      { chunk: 'wabe esequleka', gloss: 'Past auxiliary wabe + exclusive participial esequleka ("and then immediately fainted")' },
      { chunk: 'ngokushesha', gloss: 'Adverbial phrase ("promptly / immediately")' }
    ]
  }
];

export const NARRATIVE_SEQUENCE_RULES = [
  {
    id: 'narr-sequential-subjunctive-bese',
    category: 'narrative-irregular',
    title: 'Sequential Subjunctive Chaining with bese ("And Then / Next")',
    badge: 'Procedural Chaining',
    principle: 'In clinical directives and multi-step medication schedules, steps following the opening action are introduced by auxiliary connective bese governing the subjunctive verb ending -e.',
    formula: 'Step 1 (Imperative / Subjunctive) + bese + Subject Concord + Verb Root + -e',
    warning: 'Do not use indicative endings like -a after bese; say bese uphuza, not *bese uphuza amanzi.',
    examples: [
      {
        id: 'narr-bese-dress-wound',
        type: 'clinical',
        isizulu: 'Uzoqale ugeze izandla, bese uvula ibhandishi elidala, bese uthela umuthi.',
        english: 'You will first wash your hands, and then open the old bandage, and then pour the medicine.',
        breakdown: 'uzoqale ugeze (you will first wash [subj]) + bese uvula (and then open [subj]) + bese uthela (and then pour [subj])'
      },
      {
        id: 'narr-bese-inhaler',
        type: 'clinical',
        isizulu: 'Phefumulela ngaphandle, bese ufaka i-inhaler emlonyeni, bese uhogela kakhulu.',
        english: 'Breathe out, and then place the inhaler into your mouth, and then inhale deeply.',
        breakdown: 'phefumulela (breathe out) + bese ufaka (and then put) + bese uhogela (and then inhale)'
      }
    ]
  },
  {
    id: 'narr-prerequisite-anduba',
    category: 'narrative-irregular',
    title: 'Prerequisite Timing with anduba ("Before Doing / Prior To")',
    badge: 'Prerequisite Protocol',
    principle: 'The conjunction anduba (or andubani) introduces an indispensable prerequisite condition or prior procedural step, mandatorily governing the subjunctive mood.',
    formula: 'Action A + anduba + Subject Concord + Verb Root + -e',
    warning: 'Anduba specifically indicates chronological necessity ("before doing X, do Y"), whereas ngaphambi kokuba denotes general time intervals.',
    examples: [
      {
        id: 'narr-anduba-meals',
        type: 'clinical',
        isizulu: 'Kumele udle iphalishi anduba uphuze lawa maphilisi anamandla.',
        english: 'You must eat porridge before you take these strong pills.',
        breakdown: 'kumele udle (you must eat) + anduba uphuze (before you drink [subj]) + amaphilisi (pills)'
      },
      {
        id: 'narr-anduba-rinse',
        type: 'clinical',
        isizulu: 'Xubha amazinyo anduba ugcobe lo muthi ezinsinini.',
        english: 'Brush your teeth before you rub this medicine on your gums.',
        breakdown: 'xubha (brush) + anduba ugcobe (before you apply/rub [subj]) + ezinsinini (on gums)'
      }
    ]
  },
  {
    id: 'narr-past-chaining',
    category: 'narrative-irregular',
    title: 'Narrative Past Chaining & Temporal Pivots (kwathi lapho)',
    badge: 'Trauma Chronology',
    principle: 'Constructing clear trauma narratives involves chaining consecutive remote past concords (wa-... wa-... wa-...) anchored by the impersonal past pivot kwathi lapho ("it happened that when...").',
    formula: 'kwathi lapho + Participial Verb + Main Past Clause (wa- + Root)',
    warning: 'Maintain noun class concord agreement across each chained past verb in the sequence.',
    examples: [
      {
        id: 'narr-past-mva',
        type: 'clinical',
        isizulu: 'Kwathi lapho imoto iphuma emgwaqeni, yagingqika, yaphephuka, yashayeka esihlahleni.',
        english: 'When the car left the road, it rolled over, spun, and crashed into a tree.',
        breakdown: 'kwathi lapho (it happened when) + iphuma (it exited [part]) + yagingqika (it rolled) + yashayeka (it crashed)'
      },
      {
        id: 'narr-past-syncope-fall',
        type: 'clinical',
        isizulu: 'Waphakama embhedeni, wezwa isiyezi, wawa phansi, walimala engalweni.',
        english: 'He rose from the bed, felt dizzy, collapsed down, and injured his arm.',
        breakdown: 'waphakama (he stood) + wezwa (he felt) + wawa (he fell) + walimala (he got hurt)'
      }
    ]
  },
  {
    id: 'narr-irregular-azi',
    category: 'narrative-irregular',
    title: 'The Irregular Stative-Verb -azi ("To Know / Be Aware")',
    badge: 'Cognitive Awareness',
    principle: 'The irregular verb -azi inherently terminates in vowel -i. In both positive and negative present tenses, this final -i is permanently retained, never mutating to -a or dropping.',
    formula: 'Positive: SC + -azi (ngiyazi) | Negative: a- + SC + -azi (angazi)',
    warning: 'To express present ignorance, use angazi (I do not know), never *angazanga (which is past: I did not know).',
    examples: [
      {
        id: 'narr-azi-allergies',
        type: 'clinical',
        isizulu: 'Udokotela ubuzile ukuthi ingabe unaso yini isifo asaziyo noma igazi eliphakeme.',
        english: 'The doctor asked whether he has any illness that he knows of or high blood pressure.',
        breakdown: 'asaziyo (which he knows [rel]) + isifo (illness) + noma (or) + igazi eliphakeme (hypertension)'
      },
      {
        id: 'narr-azi-onset-uncertainty',
        type: 'clinical',
        isizulu: 'Angazi ngempela ukuthi lezi zinhlungu zaqala ngaluphi usuku.',
        english: 'I truly do not know on which exact day these pains began.',
        breakdown: 'angazi (I do not know [neg]) + ngempela (truly) + ukuthi (that) + zaqala (they began)'
      }
    ]
  },
  {
    id: 'narr-defective-sho-thi',
    category: 'narrative-irregular',
    title: 'Defective Verbs -sho ("Say / Mean") & -thi ("Think / State / Intend")',
    badge: 'Communicative Alignment',
    principle: 'The defective verbs -sho and -thi are pivotal in clarifying patient symptomatology. -sho takes object clitic -ni (ushoni?) and past -tsho, while -thi introduces reported speech and ideophones.',
    formula: 'SC + -sho (ukuthini) | SC + -thi + Direct Speech / Subordinate Clause',
    warning: 'Do not confuse -sho (mean / say something specific) with -khuluma (speak) or -tshela (tell someone).',
    examples: [
      {
        id: 'narr-sho-chest-tightness',
        type: 'clinical',
        isizulu: 'Lapho uthi isifuba siminyene, usho ukuthi awukwazi ukuphefumula noma kubuhlungu?',
        english: 'When you say your chest is tight, do you mean you cannot breathe or that it is painful?',
        breakdown: 'lapho uthi (when you say) + usho ukuthi (do you mean that) + awukwazi (you cannot) + ukuphefumula (to breathe)'
      },
      {
        id: 'narr-thi-patient-report',
        type: 'clinical',
        isizulu: 'Isiguli sithi asikaze siwathole amaphilisi anjengalawa emtholampilo wangakubo.',
        english: 'The patient states that they have never received pills like these at their local clinic.',
        breakdown: 'isiguli sithi (the patient says) + asikaze siwathole (they never yet received them)'
      }
    ]
  }
];
