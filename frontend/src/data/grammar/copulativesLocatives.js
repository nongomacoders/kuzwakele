/**
 * Kuzwakele Grammar Reference - copulativesLocatives.js
 */

export const COPULATIVES_LOCATIVES_SECTION = {
  id: 'copulatives-locatives',
  title: 'Copulatives & Locative Shifts',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Non-verbal predicatives ("it is / is not"), physical presence (khona / akakho), locative e-...-ini palatalization, and possessive vowel coalescence.',
  previewHook: 'ngu-, y-, e-...-ini, akakho, womntwana',
  description: 'Master the 5 core non-verbal predicative and locative systems: positive identification copulatives, negative copulatives, locative presence and absence, locative palatalization, and possessive concord vowel coalescence.'
};

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

export const COPULATIVES_LOCATIVES_RULES = [
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
