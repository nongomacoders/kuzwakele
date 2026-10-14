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
  { id: 'aspect-infixes', label: 'Time Infixes (-sa-, se-, -ka-)' }
];

export const GRAMMAR_SECTIONS = [
  {
    id: 'past-tenses',
    title: 'Past Continuous & Remote Past',
    badge: '3 Rules',
    ruleCount: 3,
    keyConcept: 'Imperfect be-, deep past -a-, and remote continuous ngangi-.',
    previewHook: 'bengihamba vs. ngahamba',
    description: 'Master immediate imperfect actions, historical events, and distant past habitual conditions.'
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
    badge: '3 Rules',
    ruleCount: 3,
    keyConcept: 'Subjunctive triggers (ukuze), participial shifts (uma), coordinating linkers (kodwa).',
    previewHook: 'ukuze uphole vs. uma egula',
    description: 'Learn how linking particles govern verbs into subjunctive or participial moods and negative concords.'
  },
  {
    id: 'aspect-infixes',
    title: 'Time-Flow Aspectual Infixes',
    badge: '3 Rules',
    ruleCount: 3,
    keyConcept: 'Infix modifiers for continuity, state transitions, and incomplete action.',
    previewHook: '-sa- (still), se- (now/already), -ka- (not yet)',
    description: 'Navigate temporal nuances embedded directly into the verb root (-sa-, se-, -ka-).'
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

export const GRAMMAR_RULES = [
  // ==========================================
  // CATEGORY 1: PAST CONTINUOUS & REMOTE PAST
  // ==========================================
  {
    id: 'past-immediate-continuous',
    category: 'past-tenses',
    title: 'Immediate Past Continuous (Imperfect Tense)',
    subtitle: 'Using be- + concord to express actions ongoing earlier today or yesterday',
    formula: 'be- + Subject Concord (bengi-, ubu-, ube-, bebe-) + Verb Root + -a / complement',
    explanation:
      'The Immediate Past Continuous describes an action that was unfolding recently (typically earlier today or yesterday) when another event occurred or during an ongoing window. Formed with the prefix be- fused with the subject concord.',
    commonPitfall:
      'Confusing bengi- (recent/yesterday past continuous: "I was...") with ngangi- (distant/months ago past continuous). Using ngangi- for yesterday sounds unnaturally distant to isiZulu speakers.',
    rules: [
      '1st Person Sing: bengi- (bengi- + phuza -> bengiphuza: "I was drinking / taking")',
      '2nd Person Sing: ubu- (ubu- + thini -> ubuthini: "what were you saying?")',
      'Class 1 (3rd Person): ube- (ube- + gula -> ubegula: "he/she was sick")',
      'Class 2 (Plural): bebe- (bebe- + sebenza -> bebesebenza: "they were working")',
      'Contracted when followed by object/adverb or in rapid colloquial KZN clinical speech'
    ],
    examples: [
      {
        id: 'past-imm-ex-1',
        type: 'clinical',
        isizulu: 'Bengiphethwe yikhanda izolo ebusuku, kodwa namuhla sekungcono.',
        english: 'I was suffering from a headache last night, but today it is somewhat better.',
        breakdown: [
          { chunk: 'Bengi-phethw-e', gloss: 'bengi- (1st person recent past continuous) + -phatha (hold/afflict) + -we (passive suffix) + -e (past/stative ending: "I was afflicted")' },
          { chunk: 'yikhanda', gloss: 'yi- (copulative agentive prefix) + ikhanda (Class 5 noun: "by the head")' },
          { chunk: 'izolo ebusuku', gloss: 'izolo (yesterday) + ebusuku (at night)' },
          { chunk: 'kodwa namuhla', gloss: 'kodwa (coordinating conjunction: "but") + namuhla (today)' },
          { chunk: 'sekungcono', gloss: 'se- (exclusive prefix "now") + ku- (indefinite concord) + ngcono (adverb: "better")' }
        ]
      },
      {
        id: 'past-imm-ex-2',
        type: 'community',
        isizulu: 'Ubuthini ngesikhathi umakhelwane efika ekhaya?',
        english: 'What were you saying when the neighbour arrived at home?',
        breakdown: [
          { chunk: 'Ubu-thini', gloss: 'ubu- (2nd person singular recent past continuous concord: "you were") + -thini (interrogative verb: "saying what?")' },
          { chunk: 'ngesikhathi', gloss: 'nge- (instrumental/prepositional "at") + isikhathi (Class 7 noun: "the time / when")' },
          { chunk: 'umakhelwane', gloss: 'Class 1/1a noun (neighbour)' },
          { chunk: 'e-fik-a', gloss: 'e- (Class 1 participial concord triggered by ngesikhathi) + -fika (arrive)' },
          { chunk: 'ekhaya', gloss: 'locative of ikhaya ("at home")' }
        ]
      }
    ]
  },
  {
    id: 'past-remote-simple',
    category: 'past-tenses',
    title: 'Remote Past Simple (Deep Past Tense)',
    subtitle: 'Elided long -a- concords for events completed weeks, months, or years ago',
    formula: 'Subject Concord + -a- (nga-, wa-, ya-, sa-, ba-, kwa-) + Verb Root + -a',
    explanation:
      'The Remote Past Simple indicates completed actions that took place in the distant past (before yesterday—often weeks, months, or childhood years ago). The subject concord fuses with the past tense infix -a-, forming long distinctive prefixes.',
    commonPitfall:
      'Using the recent past (-ile) for events that happened years ago, or using remote past for this morning. Remote past is strictly for the established, closed past.',
    rules: [
      '1st Person Sing: nga- (ngi- + -a- -> nga- : "ngafika" = "I arrived long ago")',
      '2nd Person Sing & Class 1: wa- (u- + -a- -> wa- : "wazalwa" = "he/she was born")',
      'Class 2 (Plural): ba- (ba- + -a- -> ba- : "bahamba" = "they left")',
      'Class 7: sa- (si- + -a- -> sa-), Class 9: ya- (i- + -a- -> ya-)',
      'Indefinite/Class 15/17: kwa- (ku- + -a- -> kwa- : "kwenzeka" = "it happened")'
    ],
    examples: [
      {
        id: 'past-rem-ex-1',
        type: 'clinical',
        isizulu: 'Ngaqala ukuzwa lobu buhlungu esifubeni ngonyaka odlule.',
        english: 'I started feeling this pain in the chest last year.',
        breakdown: [
          { chunk: 'Nga-qal-a', gloss: 'nga- (1st person remote past concord: "I ... long ago") + -qala (start/begin)' },
          { chunk: 'ukuzwa', gloss: 'uku- (infinitive prefix) + -zwa (hear/feel/perceive)' },
          { chunk: 'lobu buhlungu', gloss: 'lobu (Class 14 demonstrative: "this") + ubuhlungu (Class 14 noun: "pain")' },
          { chunk: 'esifubeni', gloss: 'locative of isifuba (Class 7 noun: "in the chest")' },
          { chunk: 'ngonyaka odlule', gloss: 'ngonyaka (in the year) + odlule (relative clause: "which passed / last")' }
        ]
      },
      {
        id: 'past-rem-ex-2',
        type: 'community',
        isizulu: 'Sasihlala eNongoma ngaphambi kokuba sithuthele lapha eThekwini.',
        english: 'We lived in Nongoma before we moved here to Durban.',
        breakdown: [
          { chunk: 'Sa-si-hlal-a', gloss: 'sa- (1st person plural remote) + -si- (continuous aspect) + -hlala (live/stay: "we used to live")' },
          { chunk: 'eNongoma', gloss: 'locative noun (at Nongoma)' },
          { chunk: 'ngaphambi kokuba', gloss: 'compound prepositional conjunction ("before that...")' },
          { chunk: 'si-thuthel-e', gloss: 'si- (1st person plural concord) + -thuthela (relocate to) + -e (subjunctive ending)' },
          { chunk: 'lapha eThekwini', gloss: 'lapha (here) + eThekwini (locative of iTheku: "in Durban")' }
        ]
      }
    ]
  },
  {
    id: 'past-remote-continuous',
    category: 'past-tenses',
    title: 'Remote Past Continuous (Habitual Distant Past)',
    subtitle: 'Compound remote continuous prefixes (ngangi-, wawu-, waye-, babe-)',
    formula: 'Remote Concord + Participial Concord (ngangi-, wawu-, waye-, sasi-, babe-) + Verb Root + -a',
    explanation:
      'Used to portray ongoing conditions, habits, or chronic statuses that were persistent in the distant past (e.g., chronic medications taken years ago, long-term employment, childhood ailments).',
    commonPitfall:
      'Failing to use the Class 1 irregular form waye- (combining wa- and participial e-). Saying *wawu- for Class 3rd person is incorrect; Class 1 human singular must be waye-.',
    rules: [
      '1st Person Sing: ngangi- (ngangi- + phuza -> ngangiphuza: "I used to take / was taking")',
      '2nd Person Sing: wawu- (wawu- + hlala -> wawuhlala: "you used to live")',
      'Class 1 (3rd Person): waye- (waye- + gula -> wayegula: "he/she was sick back then")',
      'Class 2 (Plural): babe- (babe- + khala -> babekhala: "they were crying / complaining")',
      '1st Person Plural: sasi- (sasi- + bona -> sasibona: "we used to see")'
    ],
    examples: [
      {
        id: 'past-remcont-ex-1',
        type: 'clinical',
        isizulu: 'Ngangiphuza amaphilisi omfutho wegazi iminyaka emibili ngaphambi kokuba ngiyeke.',
        english: 'I was taking high blood pressure pills for two years before I stopped.',
        breakdown: [
          { chunk: 'Ngangi-phuz-a', gloss: 'ngangi- (1st person remote continuous concord: "I was continuously taking") + -phuza (drink/take medication)' },
          { chunk: 'amaphilisi', gloss: 'Class 6 plural noun (tablets / pills)' },
          { chunk: 'omfutho wegazi', gloss: 'omfutho (of pressure) + wegazi (of blood: "hypertension")' },
          { chunk: 'iminyaka emibili', gloss: 'iminyaka (Class 4 noun: "years") + emibili (numeral adjective: "two")' },
          { chunk: 'ngaphambi kokuba ngiyeke', gloss: 'before that + ngi- (SC) + -yeka (stop/cease) + -e (subjunctive)' }
        ]
      },
      {
        id: 'past-remcont-ex-2',
        type: 'community',
        isizulu: 'Babehlala bemvakashela esibhedlela njalo ngempelasonto lapho egula kakhulu.',
        english: 'They used to visit him at the hospital every weekend when he was critically ill.',
        breakdown: [
          { chunk: 'Babe-hlal-a', gloss: 'babe- (Class 2 remote continuous: "they were") + -hlala (frequentative auxiliary: "regularly / always")' },
          { chunk: 'be-m-vakashel-a', gloss: 'be- (participial SC) + -m- (object concord him/her) + -vakashela (visit)' },
          { chunk: 'esibhedlela', gloss: 'locative of isibhedlela ("at the hospital")' },
          { chunk: 'njalo ngempelasonto', gloss: 'njalo (always/every) + ngempelasonto (on the weekend)' },
          { chunk: 'lapho e-gul-a khona', gloss: 'lapho ... khona (participial conjunction: "where/when") + e- (participial SC) + -gula (sick)' }
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
    id: 'conjunctions-subjunctive',
    category: 'conjunctions',
    title: 'Subjunctive-Triggering Conjunctions',
    subtitle: 'ukuze (so that), kumele/kufanele (must/should), ake (polite hortative)',
    formula: 'Trigger Word + Subject Concord + Verb Root + -e (Subjunctive Mood)',
    explanation:
      'Certain conjunctions and auxiliary verbs introduce purpose, obligation, or polite requests. They strictly govern the subordinate verb, forcing its final vowel from default -a to the subjunctive vowel -e.',
    commonPitfall:
      'Leaving the verb in default -a after ukuze or kumele: Saying *Kumele uphuza amaphilisi instead of Kumele uphuze amaphilisi.',
    rules: [
      'ukuze (so that / in order that): ukuze + a-phile -> ukuze aphile ("so that he/she recovers")',
      'kumele / kufanele (it is necessary / must): kumele + u-buy-e -> kumele ubuye ("you must return")',
      'ake (polite hortative / please): ake + u-hlol-e -> ake uhlole ("please inspect / check")',
      'Negative Subjunctive: -nga-...-i (ukuze ungangeni: "so that you do not enter")'
    ],
    examples: [
      {
        id: 'conj-subj-ex-1',
        type: 'clinical',
        isizulu: 'Kumele uphuze la maphilisi kabili ngosuku ukuze wehlise umkhuhlane.',
        english: 'You must take these pills twice daily so that you reduce the fever.',
        breakdown: [
          { chunk: 'Kumele', gloss: 'impersonal obligative auxiliary verb ("it is necessary / must")' },
          { chunk: 'u-phuz-e', gloss: 'u- (2nd person SC) + -phuza (drink) + -e (subjunctive ending triggered by kumele)' },
          { chunk: 'la maphilisi', gloss: 'la (Class 6 demonstrative: "these") + amaphilisi (tablets)' },
          { chunk: 'kabili ngosuku', gloss: 'kabili (twice) + ngosuku (per day)' },
          { chunk: 'ukuze', gloss: 'purposive conjunction ("in order that / so that")' },
          { chunk: 'w-ehlis-e', gloss: 'u- (2nd person SC) + -ehlisa (lower/bring down) + -e (subjunctive ending triggered by ukuze)' },
          { chunk: 'umkhuhlane', gloss: 'Class 3 noun (fever / flu / respiratory illness)' }
        ]
      },
      {
        id: 'conj-subj-ex-2',
        type: 'clinical',
        isizulu: 'Ake uvule umlomo ubambe umoya ngibheke umphimbo wakho kahle.',
        english: 'Please open your mouth and hold your breath so I can examine your throat properly.',
        breakdown: [
          { chunk: 'Ake', gloss: 'polite hortative particle (please / kindly / let)' },
          { chunk: 'u-vul-e', gloss: 'u- (SC) + -vula (open) + -e (subjunctive ending triggered by ake)' },
          { chunk: 'umlomo', gloss: 'Class 3 noun (mouth)' },
          { chunk: 'u-bamb-e umoya', gloss: 'u-bambe (hold: subjunctive) + umoya (breath / air)' },
          { chunk: 'ngi-bhek-e', gloss: 'ngi- (1st person SC: "so that I") + -bheka (look at/examine) + -e (subjunctive ending)' },
          { chunk: 'umphimbo wakho', gloss: 'umphimbo (throat) + wakho (possessive: your)' }
        ]
      }
    ]
  },
  {
    id: 'conjunctions-participial',
    category: 'conjunctions',
    title: 'Participial-Triggering Conjunctions',
    subtitle: 'uma (if/when), ngenkathi (while), ngoba (because), lapho... khona (where)',
    formula: 'Conjunction + Participial Concord (u- becomes e-) + Verb Root + -a / negation (-nga-...-i)',
    explanation:
      'Subordinating conjunctions of time, condition, and cause govern the Participial Mood (Isimo Esincikile). Crucially, the 3rd person singular subject concord Class 1 shifts from u- to e-, and verbs are negated with the infix -nga-...-i instead of the main clause a-...-i.',
    commonPitfall:
      'Failing to change u- to e-: Saying *Uma umama uyafika instead of Uma umama efika. Also using standard negation *uma engathandi instead of *uma engathandi (correct participial negation uses -nga-).',
    rules: [
      'Concord Shift: Class 1 (he/she) changes from u- to e- (uma egula: "if he/she is sick")',
      'Class 2 (they) changes from ba- to be- (uma begula: "if they are sick")',
      'Participial Negation: Concord + -nga- + Root + -i (uma engaphuzi: "if he/she does not drink")',
      'Key Triggers: uma (if/when), ngenkathi / ngenxa yokuthi (while/because), lapho... khona (where/when)'
    ],
    examples: [
      {
        id: 'conj-part-ex-1',
        type: 'clinical',
        isizulu: 'Uma umntwana engaphuzi amanzi noma ehlanzelana, kumele umlethe emtholampilo ngokushesha.',
        english: 'If the child is not drinking fluids or vomiting repeatedly, you must bring him to the clinic immediately.',
        breakdown: [
          { chunk: 'Uma', gloss: 'conditional conjunction ("if / when")' },
          { chunk: 'umntwana', gloss: 'Class 1 noun (child)' },
          { chunk: 'e-nga-phuz-i', gloss: 'e- (Class 1 participial SC) + -nga- (participial negative infix) + -phuza (drink) + -i (negative ending: "is not drinking")' },
          { chunk: 'amanzi', gloss: 'Class 6 noun (water / fluids)' },
          { chunk: 'noma e-hlanzelan-a', gloss: 'noma (or) + e- (participial SC) + -hlanzelana (vomit repeatedly)' },
          { chunk: 'kumele umlethe', gloss: 'kumele (must) + u-m-lethe (you bring him/her: subjunctive)' },
          { chunk: 'emtholampilo ngokushesha', gloss: 'emtholampilo (locative: to the clinic) + ngokushesha (promptly / urgently)' }
        ]
      },
      {
        id: 'conj-part-ex-2',
        type: 'community',
        isizulu: 'Ngenkathi umama elinde udokotela, ubexoxa nomhlengikazi ngemiphumela.',
        english: 'While mother was waiting for the doctor, she was speaking with the nurse about the results.',
        breakdown: [
          { chunk: 'Ngenkathi', gloss: 'temporal conjunction ("while / during the time that")' },
          { chunk: 'umama', gloss: 'Class 1a noun (mother)' },
          { chunk: 'e-lind-e', gloss: 'e- (Class 1 participial concord) + -linda (wait) + -e (stative/participial: "waiting")' },
          { chunk: 'udokotela', gloss: 'Class 1a noun (doctor)' },
          { chunk: 'u-be-xox-a', gloss: 'ube- (recent past continuous: she was) + -xoxa (conversing / discussing)' },
          { chunk: 'nomhlengikazi', gloss: 'na- (with) + umhlengikazi (Class 1 nurse: "with the nurse")' },
          { chunk: 'ngemiphumela', gloss: 'nga- (about) + imiphumela (Class 4 noun: "about the results")' }
        ]
      }
    ]
  },
  {
    id: 'conjunctions-coordinating',
    category: 'conjunctions',
    title: 'Independent Coordinating Conjunctions',
    subtitle: 'kodwa (but), futhi (and/furthermore), noma (or), kanti (whereas)',
    formula: 'Clause 1 + [kodwa / futhi / noma / kanti] + Clause 2 (Indicative Mood unchanged)',
    explanation:
      'Coordinating conjunctions connect two equal, independent clauses. Unlike subjunctive or participial conjunctions, they trigger NO mood shifts, concord alterations, or vowel mutations on the following verb.',
    commonPitfall:
      'Mistakenly altering the subject concord or changing the verb ending to -e after kodwa or futhi. The clause following them remains normal indicative.',
    rules: [
      'kodwa (but / however): Conjoins contrasting independent statements without mood change',
      'futhi (and / furthermore / again): Adds parallel facts or symptoms',
      'noma (or / whether): Expresses clinical or lifestyle alternatives',
      'kanti (whereas / and yet / surprisingly): Highlights unexpected medical discrepancies'
    ],
    examples: [
      {
        id: 'conj-coord-ex-1',
        type: 'clinical',
        isizulu: 'Isisu sibuhlungu kodwa angihlanzi futhi angishintshi isisu namuhla.',
        english: 'The stomach is painful but I am not vomiting and I do not have diarrhea today.',
        breakdown: [
          { chunk: 'Isisu', gloss: 'Class 7 noun (stomach / abdomen)' },
          { chunk: 'si-buhlungu', gloss: 'si- (SC 7) + ubuhlungu (copulative noun base: "is painful")' },
          { chunk: 'kodwa', gloss: 'coordinating contrastive conjunction ("but")' },
          { chunk: 'a-ngi-hlanz-i', gloss: 'a- (negative prefix) + ngi- (1st person SC) + -hlanza (vomit) + -i (negative present ending: "I am not vomiting")' },
          { chunk: 'futhi', gloss: 'coordinating additive conjunction ("furthermore / and")' },
          { chunk: 'angishintshi isisu', gloss: 'angishintshi (I do not alter/change) + isisu (stomach: euphemism for diarrhea)' }
        ]
      },
      {
        id: 'conj-coord-ex-2',
        type: 'community',
        isizulu: 'Ungaphuza itiye elifudumele noma amanzi amaningi, kanti utshwala kufanele ubuyeke nya.',
        english: 'You may drink warm tea or lots of water, whereas alcohol you must abandon completely.',
        breakdown: [
          { chunk: 'U-nga-phuz-a', gloss: 'u- (2nd person SC) + -nga- (potential infix: "you may / can") + -phuza (drink)' },
          { chunk: 'itiye elifudumele', gloss: 'itiye (tea) + elifudumele (relative: warm/lukewarm)' },
          { chunk: 'noma amanzi amaningi', gloss: 'noma (or) + amanzi (water) + amaningi (adjective: lots of)' },
          { chunk: 'kanti', gloss: 'adversative coordinating conjunction ("whereas / on the contrary")' },
          { chunk: 'utshwala kufanele ubuyeke nya', gloss: 'utshwala (alcohol) + kufanele (must) + u-bu-yeke (you leave it: subjunctive) + nya (ideophone: completely)' }
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
    title: 'The Progressive Infix -sa- ("Still" / Ongoing)',
    subtitle: 'Signifying continuation of an active state or symptom over time',
    formula: 'Subject Concord + -sa- + Verb Root + -a / Adjective / Stative Base',
    explanation:
      'The morpheme -sa- is inserted immediately after the subject concord to denote that an action or condition that started previously is still ongoing right now ("still", "yet"). In negative sentences, it translates to "no longer" (a-...-sa-...-i).',
    commonPitfall:
      'Using the English loan "stil" or trying to use adverbs like manje instead of the built-in morpheme -sa-. In isiZulu, "still" is almost always expressed morphologically.',
    rules: [
      'Affirmative ("still"): SC + -sa- + Verb (u-sa-phila -> usaphila: "he/she is still alive/well")',
      'Stative with -sa-: SC + -sa- + Stative (u-sa-lele -> usalele: "he/she is still asleep")',
      'Negative ("no longer"): Neg + SC + -sa- + Root + -i (a-ngi-sa-zwa ubuhlungu: "I no longer feel pain")',
      'Adjectival: SC + -se- / -sa- (u-sa-semsebenzini: "he/she is still at work")'
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
        isizulu: 'Gogo, angisaboni kahle emehlweni, sekufiphele kakhulu.',
        english: 'Gogo, I no longer see clearly in my eyes, everything has become very blurry.',
        breakdown: [
          { chunk: 'A-ngi-sa-bon-i', gloss: 'a- (negative prefix) + ngi- (1st person SC) + -sa- (progressive in negative: "no longer") + -bona (see) + -i (negative present ending: "I no longer see")' },
          { chunk: 'kahle emehlweni', gloss: 'kahle (well/clearly) + emehlweni (locative of amehlo: in the eyes)' },
          { chunk: 'se-ku-fiphel-e', gloss: 'se- (exclusive prefix: now) + ku- (impersonal SC) + -fiphela (dim/blur) + -e (stative: has become dim)' },
          { chunk: 'kakhulu', gloss: 'adverb (severely / very)' }
        ]
      }
    ]
  },
  {
    id: 'aspect-exclusive-se',
    category: 'aspect-infixes',
    title: 'The Exclusive Prefix / Infix se- / -se- ("Now" / "Already")',
    subtitle: 'Signifying a new transition or milestone reached ("now", "already", "by this time")',
    formula: 'se- + Subject Concord (sengi-, sewu-, seye-, sesi-, sebe-) + Verb Root',
    explanation:
      'The exclusive morpheme se- (often called the "already" or "now" aspect) signals that an event has occurred or a threshold has been reached that was not true before. It replaces or prefixes the subject concord.',
    commonPitfall:
      'Confusing se- ("now/already") with manje ("right this moment"). Manje is a temporal adverb; se- is a grammatical aspect marking a permanent state transition ("I have now taken it").',
    rules: [
      '1st Person Sing: sengi- (sengi- + phuzile -> sengiphuzile: "I have now taken / already drunk")',
      '2nd Person Sing: sewu- (sewu- + bonile -> sewubonile: "you have now seen")',
      'Class 1 (3rd Person): seye- or u-se- (seye- + fikile -> seyefikile or usefikile: "he/she has already arrived")',
      'Class 2 (Plural): sebe- (sebe- + hambile -> sebehambile: "they have now left")',
      'Impersonal / Time: seku- (sekuyisikhathi: "it is now time")'
    ],
    examples: [
      {
        id: 'aspect-se-ex-1',
        type: 'clinical',
        isizulu: 'Sengiwaphuzile wonke amaphilisi omfutho wegazi owanginika wona ngenyanga edlule.',
        english: 'I have already finished all the hypertension pills that you gave me last month.',
        breakdown: [
          { chunk: 'Sengi-wa-phuz-ile', gloss: 'sengi- (1st person exclusive: "I have now/already") + -wa- (Class 6 object concord for amaphilisi) + -phuza (take) + -ile (full perfect ending)' },
          { chunk: 'wonke amaphilisi', gloss: 'wonke (all of) + amaphilisi (Class 6 tablets)' },
          { chunk: 'omfutho wegazi', gloss: 'of high blood pressure' },
          { chunk: 'owanginika wona', gloss: 'o- (relative) + wa- (remote SC) + -ngi- (me) + -nika (give) + wona (pronoun: them)' },
          { chunk: 'ngenyanga edlule', gloss: 'ngenyanga (in the month) + edlule (which passed / last)' }
        ]
      },
      {
        id: 'aspect-se-ex-2',
        type: 'community',
        isizulu: 'Sekuyisikhathi sokuba silungiselele ugogo isidlo sakusihlwa.',
        english: 'It is now time for us to prepare evening dinner for grandmother.',
        breakdown: [
          { chunk: 'Se-ku-yisikhathi', gloss: 'se- (exclusive marker: "now / already") + ku- (impersonal SC) + yisikhathi (copulative of isikhathi: "it is the time")' },
          { chunk: 'sokuba', gloss: 'possessive conjunction ("of that / for...")' },
          { chunk: 'si-lungiselel-e', gloss: 'si- (1st person plural SC) + -lungiselela (prepare for) + -e (subjunctive ending)' },
          { chunk: 'ugogo', gloss: 'Class 1a noun (grandmother)' },
          { chunk: 'isidlo sakusihlwa', gloss: 'isidlo (meal) + sakusihlwa (of the evening / dinner)' }
        ]
      }
    ]
  },
  {
    id: 'aspect-negative-ka',
    category: 'aspect-infixes',
    title: 'The Negative Incomplete Infix -ka- ("Not Yet")',
    subtitle: 'Signifying an anticipated action that has not yet materialized',
    formula: 'Negative Prefix a- + Subject Concord + -ka- + Verb Root + -i / complement',
    explanation:
      'The infix -ka- is exclusively used in negative constructions to translate "not yet". The action has not taken place up to the present moment, but there is an implicit expectation that it will occur.',
    commonPitfall:
      'Using an extra word for "not yet" instead of -ka-. The morpheme -ka- directly embeds between the subject concord and the verb stem, with the verb ending mutating to -i in present constructions.',
    rules: [
      '1st Person Sing: a-ngi-ka- + Root + -i (angikaboni: "I have not yet seen / found out")',
      'Class 1 (3rd Person): a-ka-ka- + Root + -i (akakadli: "he/she has not yet eaten")',
      'Class 2 (Plural): a-ba-ka- + Root + -i (abakafiki: "they have not yet arrived")',
      'With Passive: angikatshelwa ("I have not yet been told" - passive retains -wa)',
      'Clinical context: Vital for triage (e.g. "Child has not yet passed urine / eaten")'
    ],
    examples: [
      {
        id: 'aspect-ka-ex-1',
        type: 'clinical',
        isizulu: 'Angikawatholi imiphumela yegazi evela elabhu, ngicela ubuye kusasa ekuseni.',
        english: 'I have not yet received the blood results from the laboratory; please return tomorrow morning.',
        breakdown: [
          { chunk: 'A-ngi-ka-wa-thol-i', gloss: 'a- (negative prefix) + ngi- (1st person SC) + -ka- (not yet aspect) + -wa- (Class 6 object concord for imiphumela) + -thola (find/receive) + -i (negative ending: "I have not yet received")' },
          { chunk: 'imiphumela yegazi', gloss: 'imiphumela (Class 4 results) + yegazi (of blood)' },
          { chunk: 'evela elabhu', gloss: 'evela (relative: coming from) + elabhu (locative: at the laboratory)' },
          { chunk: 'ngicela ubuye', gloss: 'ngicela (I request) + u-buy-e (you return: subjunctive)' },
          { chunk: 'kusasa ekuseni', gloss: 'kusasa (tomorrow) + ekuseni (in the morning)' }
        ]
      },
      {
        id: 'aspect-ka-ex-2',
        type: 'clinical',
        isizulu: 'Umntwana akakadli lutho kusukela ekuseni ngoba umphimbo ubuhlungu kakhulu.',
        english: 'The child has not eaten anything yet since morning because the throat is very sore.',
        breakdown: [
          { chunk: 'A-ka-ka-dl-i', gloss: 'a- (negative prefix) + ka- (Class 1 negative concord) + -ka- (not yet aspect) + -dla (eat) + -i (negative ending: "he/she has not yet eaten")' },
          { chunk: 'lutho', gloss: 'negative indefinite pronoun ("anything / nothing")' },
          { chunk: 'kusukela ekuseni', gloss: 'kusukela (starting from / since) + ekuseni (in the morning)' },
          { chunk: 'ngoba umphimbo', gloss: 'ngoba (causal conjunction: because) + umphimbo (Class 3 noun: throat)' },
          { chunk: 'ubuhlungu kakhulu', gloss: 'ubuhlungu (is painful) + kakhulu (severely / very)' }
        ]
      }
    ]
  }
];
