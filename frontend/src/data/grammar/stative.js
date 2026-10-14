/**
 * Kuzwakele Grammar Reference - stative.js
 */

export const STATIVE_SECTION = {
  id: 'stative',
  title: 'The Stative Aspect',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Bodily & mental states using past endings for present conditions.',
  previewHook: '-vuvukile, -khathele, -lambile',
  description: 'Master the 5 core stative rules: process vs. state, contraction (-e), irregular stems, negation traps, and clinical inventory.'
};

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

export const STATIVE_RULES = [
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
  }
];
