/**
 * Kuzwakele Grammar Reference - pastTenses.js
 */

export const PAST_TENSES_SECTION = {
  id: 'past-tenses',
  title: 'Past Continuous & Remote Past',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Imperfect be-, deep past -a-, remote continuous ngangi-, and past negation.',
  previewHook: 'bengihamba vs. ngahamba',
  description: 'Master the 5 core past tense rules: immediate continuous (be-), deep past (-a-), remote continuous (ngangi-), negation (-anga), and history-taking onset formulas.'
};

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

export const PAST_TENSES_RULES = [
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
  }
];
