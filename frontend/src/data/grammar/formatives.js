/**
 * Kuzwakele Grammar Reference - formatives.js
 * Comprehensive guide to isiZulu Associative, Instrumental & Comparative Formatives (Izakhi Zokuhlobanisa),
 * covering vowel coalescence (na-, nga-, njenga-, nganga-), clinical possession of symptoms,
 * mechanisms of injury (MVAs, burns), route of administration, pain character similes, and organ sizing.
 */

export const FORMATIVES_SECTION = {
  id: 'formatives',
  title: 'Associative, Instrumental & Comparative Formatives',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Vowel-coalescing prefixes na- ("with / and / have"), nga- ("by means of / about"), njenga- ("like / as"), and nganga- ("the size of") for mechanism of injury, possession, and anatomical comparisons.',
  previewHook: 'ngemoto (by car), unomkhuhlane (has flu), njengomlilo (like fire), ngangengqindi (fist-sized)',
  description: 'Master the 5 core formative rules: associative na- for clinical possession and accompanied presentation, instrumental nga- for mechanisms of injury and route of administration, comparative njenga- for patient pain similes, equative nganga- for organ sizing, and vowel coalescence mechanics (a+i=e, a+u=o, a+a=a).'
};

export const FORMATIVES_MATRIX = [
  {
    nounClass: 'Class 1/1a [Umntwana / Udokotela]',
    associativeNa: 'nomntwana (with child) / nodokotela',
    instrumentalNga: 'ngomntwana / ngodokotela (by doctor)',
    comparativeNjenga: 'njengomntwana (like a child) / njengodokotela',
    equativeNganga: 'ngangomntwana (the size of a child)',
    clinicalApplication: 'Pediatric accompaniment, caregiver history, clinical authority, child milestone sizing'
  },
  {
    nounClass: 'Class 2 [Abantu / Odokotela]',
    associativeNa: 'nabantu (with people) / nodokotela',
    instrumentalNga: 'ngabantu / ngodokotela (by doctors)',
    comparativeNjenga: 'njengabantu abadala (like adults)',
    equativeNganga: 'ngangabantu (as numerous/large as people)',
    clinicalApplication: 'Community transmission, multi-clinician review, geriatric comparison'
  },
  {
    nounClass: 'Class 3 [Umlilo / Umuthi]',
    associativeNa: 'nomlilo (with fire) / nomuthi (with med)',
    instrumentalNga: 'ngomlilo (by fire) / ngomuthi (by medicine)',
    comparativeNjenga: 'njengomlilo (burning like fire)',
    equativeNganga: 'ngangomuthi (as large as a tree/bottle)',
    clinicalApplication: 'Burn injury mechanism, pharmacological route, burning neuropathic pain'
  },
  {
    nounClass: 'Class 5 [Igazi / Ihlule / Iqanda]',
    associativeNa: 'negazi (with blood) / nehlule (with clot)',
    instrumentalNga: 'ngegazi (via blood) / ngehlule',
    comparativeNjenga: 'njengegazi (like blood) / njengeqanda',
    equativeNganga: 'ngangelihlule / ngangeqanda (egg-sized)',
    clinicalApplication: 'Hematological spread, clot expulsion, hematoma / lymph node palpation sizing'
  },
  {
    nounClass: 'Class 6 [Amaphilisi / Amanzi]',
    associativeNa: 'namaphilisi (with pills) / namanzi',
    instrumentalNga: 'ngamaphilisi (via pills) / ngamanzi',
    comparativeNjenga: 'njengamaphilisi (like pills)',
    equativeNganga: 'ngangamaphilisi (small as pills)',
    clinicalApplication: 'Oral medication hydration, fluid intake, micro-nodule / petechiae sizing'
  },
  {
    nounClass: 'Class 7 [Isifuba / Isinye / Isiguli]',
    associativeNa: 'nesifuba (with chest) / nesinye (with bladder)',
    instrumentalNga: 'ngesifuba (in the chest) / ngesisindo',
    comparativeNjenga: 'njengesisindo (like a heavy weight)',
    equativeNganga: 'ngangesifuba (chest-sized mass)',
    clinicalApplication: 'Chest pathology, weight-bearing oppression (angina simile), bladder distension'
  },
  {
    nounClass: 'Class 9 [Imoto / Inhliziyo / Inaliti]',
    associativeNa: 'nemoto (with car) / nenhliziyo',
    instrumentalNga: 'ngemoto (by car [MVA]) / ngenaliti',
    comparativeNjenga: 'njengemoto / njengenaliti (like a needle)',
    equativeNganga: 'ngangengqindi (fist-sized heart / organ)',
    clinicalApplication: 'MVA mechanism of trauma, injection route, sharp stabbing pain, cardiac sizing'
  },
  {
    nounClass: 'Class 10 / 14 [Izinyawo / Ubuhlungu]',
    associativeNa: 'nezinyawo (with feet) / nobuhlungu',
    instrumentalNga: 'ngezinyawo (on foot) / ngobuhlungu',
    comparativeNjenga: 'njengezinaliti (like prickling needles)',
    equativeNganga: 'ngangobuhlungu obudlule (same severity)',
    clinicalApplication: 'Ambulatory capacity, peripheral neuropathy paresthesia, pain severity equivalence'
  }
];

export const FORMATIVES_CHECKPOINTS = [
  {
    id: 'form-check-1',
    challengeNumber: 1,
    prompt: 'He was struck by a car while crossing the road.',
    targetConcept: 'Instrumental nga- (Coalesced with Class 9 imoto -> ngemoto) for Trauma Mechanism',
    primaryAnswer: 'Washayiswa ngemoto ngenkathi ewela umgwaqo.',
    breakdown: [
      { chunk: 'Washayiswa', gloss: 'wa- (Class 1 remote past SC) + -shayis- (hit/strike) + -wa (passive: "was hit/struck")' },
      { chunk: 'ngemoto', gloss: 'nga- (instrumental formative) + imoto (Class 9 car) -> nga + i = ngemoto ("by a car")' },
      { chunk: 'ngenkathi', gloss: 'conjunction ("while / at the time that")' },
      { chunk: 'ewela', gloss: 'e- (Class 1 participial SC) + -wela ("crossing")' },
      { chunk: 'umgwaqo', gloss: 'Class 3 noun ("the road")' }
    ],
    ruleTip: 'Mechanism of injury in emergency triage takes the instrumental formative nga-. Because imoto begins with i-, vowel coalescence applies: a + i = e (ngemoto = "by means of a car / by a car").'
  },
  {
    id: 'form-check-2',
    challengeNumber: 2,
    prompt: 'The pain in my feet burns intensely like fire at night.',
    targetConcept: 'Comparative njenga- (njenga- + umlilo -> njengomlilo) for Neuropathic Pain Similes',
    primaryAnswer: 'Ubuhlungu obusezinyaweni bushisa kakhulu njengomlilo ebusuku.',
    breakdown: [
      { chunk: 'Ubuhlungu', gloss: 'Class 14 noun ("pain")' },
      { chunk: 'obusezinyaweni', gloss: 'obu- (Class 14 relative concord) + se- (locative bridge) + ezinyaweni (in the feet: "which is in the feet")' },
      { chunk: 'bushisa kakhulu', gloss: 'bu- (Class 14 SC) + -shisa ("burns") + kakhulu ("greatly / intensely")' },
      { chunk: 'njengomlilo', gloss: 'njenga- (comparative formative) + umlilo (Class 3 fire) -> njenga + u = njengomlilo ("like fire")' },
      { chunk: 'ebusuku', gloss: 'locative adverb ("at night")' }
    ],
    ruleTip: 'Patients frequently describe neuropathic or ischemic sensations with the comparative formative njenga- ("like / as"). With umlilo (Class 3, initial vowel u-), coalescence yields: a + u = o (njengomlilo).'
  },
  {
    id: 'form-check-3',
    challengeNumber: 3,
    prompt: 'The swelling in the groin is as large as a fist.',
    targetConcept: 'Equative nganga- (nganga- + ingqindi -> ngangengqindi) for Clinical Mass Sizing',
    primaryAnswer: 'Ukuvuvuka okusematsheni kungangengqindi.',
    breakdown: [
      { chunk: 'Ukuvuvuka', gloss: 'Class 15 verbal noun ("the swelling")' },
      { chunk: 'okusematsheni', gloss: 'oku- (Class 15 relative concord) + se- + ematsheni ("which is in the groin / testicles")' },
      { chunk: 'ku-ngangengqindi', gloss: 'ku- (Class 15 predicative copulative concord) + nganga- (equative formative) + ingqindi (Class 9 fist) -> ku + nganga + i = kungangengqindi ("is as large as a fist")' }
    ],
    ruleTip: 'Equative nganga- expresses physical dimensions ("the size of"). Bound predicatively with a subject concord, it becomes ku-ngangengqindi ("it is the size of a fist"), coalescing a + i into e.'
  }
];

export const FORMATIVES_RULES = [
  // ==========================================
  // CATEGORY 14: FORMATIVES
  // ==========================================
  {
    id: 'form-associative-na',
    category: 'formatives',
    title: 'Associative na- ("With / And / Have") & Clinical Possession',
    subtitle: 'Expressing patient symptoms, chronic comorbidities, and accompaniment',
    formula: 'Subject Concord + na- + Noun -> Coalesced Verb Form (u- + na- + umkhuhlane = unomkhuhlane)',
    explanation:
      'The associative formative na- translates as "with", "and", or "in the company of". In clinical isiZulu, its most profound application is expressing clinical symptoms and comorbidities through predicative possession ("to have a condition"). By prefixing the subject concord to na-, it forms the verb "to have": u- + na- + umkhuhlane = unomkhuhlane ("he/she has flu"); ngi- + na- + isifo sikashukela = nginesifo sikashukela ("I have diabetes"). In social history taking, it denotes accompaniment: ufike nomntwana ("she arrived with the child").',
    commonPitfall:
      'Forgetting vowel coalescence and writing *"una umkhuhlane"* or *"ngina isifo"*. The formative na- obligatorily coalesces with the noun’s initial vowel: na + u = no- (unomkhuhlane); na + i = ne- (unomfutho).',
    rules: [
      'Universal formula: SC + na- + Noun (with coalescence: a+i=e, a+u=o, a+a=a).',
      'Clinical possession of signs/symptoms: Unomkhuhlane (He has flu); Unomfutho wegazi ophakeme (She has hypertension).',
      'Pediatric presentation accompaniment: Umama ufike nomntwana (The mother arrived with the child).',
      'Negative possession drops initial vowel without coalescence: Akanamkhuhlane (He has no flu); Anginamali (I have no money).'
    ],
    examples: [
      {
        id: 'form-na-ex-1',
        type: 'clinical',
        isizulu: 'Isiguli sinomfutho wegazi ophakeme nesifo sikashukela.',
        english: 'The patient has hypertension and diabetes.',
        breakdown: [
          { chunk: 'Isiguli', gloss: 'Class 7 noun ("the patient")' },
          { chunk: 'sinomfutho wegazi', gloss: 'si- (Class 7 SC) + na- + umfutho (Class 3) -> sinomfutho ("has pressure") + wegazi ("of blood")' },
          { chunk: 'ophakeme', gloss: 'high / elevated' },
          { chunk: 'nesifo sikashukela', gloss: 'na- + isifo (Class 7) -> nesifo ("and the disease") + sikashukela ("of sugar")' }
        ]
      },
      {
        id: 'form-na-ex-2',
        type: 'accompaniment',
        isizulu: 'Ufike lapha emtholampilo nobani namuhla?',
        english: 'With whom did you arrive here at the clinic today?',
        breakdown: [
          { chunk: 'Ufike lapha', gloss: 'you arrived here' },
          { chunk: 'emtholampilo', gloss: 'at the clinic (locative)' },
          { chunk: 'nobani', gloss: 'na- + ubani (who) -> no- + bani ("with whom")' },
          { chunk: 'namuhla', gloss: 'today' }
        ]
      }
    ]
  },
  {
    id: 'form-instrumental-nga',
    category: 'formatives',
    title: 'Instrumental nga- ("By Means Of / With / About / On")',
    subtitle: 'Documenting mechanisms of injury, routes of administration, and schedules',
    formula: 'nga- + Noun -> Coalesced Form (nga- + imoto = ngemoto; nga- + umlomo = ngomlomo)',
    explanation:
      'The instrumental formative nga- denotes the instrument, agent, method, or route through which an action occurs. In clinical emergency medicine, it communicates the trauma mechanism (washayiswa ngemoto = struck by a car; walimala ngommese = wounded by a knife). In pharmacology, it defines the route of administration: phuza lo muthi ngomlomo ("take this medicine orally / by mouth"); faka lo muthi ngomjovo ("administer this medicine via injection"). In clinical appointment scheduling, it sets timeframes: ngolwesithathu ("on Wednesday"); ngo-8 ekuseni ("at 8 AM").',
    commonPitfall:
      'Confusing associative *na-* ("with / accompaniment") with instrumental *nga-* ("by means of / instrument"). Saying *"wahlatshwa nommese"* implies the knife accompanied him like a person; the correct trauma phrase is *wahlatshwa ngommese* ("he was stabbed by means of a knife").',
    rules: [
      'Mechanism of injury: nga- + trauma source (ngemoto = by car; ngomlilo = by fire; ngensimbi = by metal).',
      'Route of administration: ngomlomo (orally / by mouth); ngomjovo (by injection); nge-drip (intravenously).',
      'Locomotion and arrival: Wafika ngezinyawo (He arrived on foot); Bahamba ngetekisi (They traveled by taxi).',
      'Temporal appointments: ngomgqibelo (on Saturday); ngenyanga ezayo (next month).'
    ],
    examples: [
      {
        id: 'form-nga-ex-1',
        type: 'trauma',
        isizulu: 'Washa kabi ngamanzi abilayo esifubeni nasezingalweni.',
        english: 'He was badly burned by boiling water on his chest and arms.',
        breakdown: [
          { chunk: 'Washa kabi', gloss: 'he burned badly' },
          { chunk: 'ngamanzi abilayo', gloss: 'nga- + amanzi (Class 6 water) -> ngamanzi ("by means of water") + abilayo ("boiling")' },
          { chunk: 'esifubeni', gloss: 'on the chest (locative)' },
          { chunk: 'nasezingalweni', gloss: 'and on the arms (locative)' }
        ]
      },
      {
        id: 'form-nga-ex-2',
        type: 'pharmacy',
        isizulu: 'Gwinya lawa maphilisi ngomlomo namanzi amaningi.',
        english: 'Swallow these pills orally (by mouth) with plenty of water.',
        breakdown: [
          { chunk: 'Gwinya', gloss: 'swallow! (imperative)' },
          { chunk: 'lawa maphilisi', gloss: 'these pills (Class 6 demonstrative)' },
          { chunk: 'ngomlomo', gloss: 'nga- + umlomo (Class 3 mouth) -> ngomlomo ("orally / by mouth")' },
          { chunk: 'namanzi amaningi', gloss: 'with plenty of water (na- + amanzi -> namanzi)' }
        ]
      }
    ]
  },
  {
    id: 'form-comparative-njenga',
    category: 'formatives',
    title: 'Comparative njenga- ("Like / As") for Pain Quality',
    subtitle: 'Capturing subjective patient descriptions, sensory metaphors, and symptom similes',
    formula: 'njenga- + Noun -> Coalesced Simile Form (njenga- + umlilo = njengomlilo)',
    explanation:
      'The comparative formative njenga- ("like / just as / similar to") is an indispensable diagnostic bridge for capturing patient symptom descriptions. Patients in KwaZulu-Natal rarely describe pain in textbook clinical terms; instead, they employ rich sensory similes: kushisa njengomlilo ("it burns like fire" — classic neuropathic burning or severe reflux); kuhlaba njengezinaliti ("it stabs like needles" — peripheral paresthesia); kucindezela njengesisindo esikhulu ("it presses like a heavy stone" — ischemic chest oppression).',
    commonPitfall:
      'Omitting the initial vowel of the comparative base (*"njengamuntu"* instead of *njengomuntu* when the noun is *umuntu*). njenga- + u- obligatorily fuses to *njengo-*.',
    rules: [
      'Simile formula: njenga- + noun prefix with coalescence (a+i=e: njengezinaliti; a+u=o: njengomlilo).',
      'Neuropathic burning: bushisa njengomlilo (burns like fire).',
      'Paresthesia / shooting pain: kuhlaba njengezinaliti (stabs like needles).',
      'Anginal oppression: kucindezela njengesisindo (compresses like a heavy weight).'
    ],
    examples: [
      {
        id: 'form-njenga-ex-1',
        type: 'cardiology',
        isizulu: 'Isifuba sami siyasinda, sicindezela njengedwala elikhulu.',
        english: 'My chest feels heavy; it presses like a giant boulder.',
        breakdown: [
          { chunk: 'Isifuba sami', gloss: 'my chest (Class 7)' },
          { chunk: 'siyasinda', gloss: 'it is heavy / oppressive' },
          { chunk: 'sicindezela', gloss: 'it presses down' },
          { chunk: 'njengedwala elikhulu', gloss: 'njenga- + idwala (Class 5 rock) -> njengedwala ("like a boulder") + elikhulu ("large")' }
        ]
      },
      {
        id: 'form-njenga-ex-2',
        type: 'neurology',
        isizulu: 'Ebusuku ngizwa kuhlaba ezinyaweni njengezinaliti ezincane.',
        english: 'At night I feel stabbing sensations in my feet like small needles.',
        breakdown: [
          { chunk: 'Ebusuku', gloss: 'at night (locative)' },
          { chunk: 'ngizwa kuhlaba', gloss: 'I feel sharp stabbing' },
          { chunk: 'ezinyaweni', gloss: 'in the feet (locative)' },
          { chunk: 'njengezinaliti ezincane', gloss: 'njenga- + izinaliti (Class 10 needles) -> njengezinaliti ("like needles") + ezincane ("small")' }
        ]
      }
    ]
  },
  {
    id: 'form-equative-nganga',
    category: 'formatives',
    title: 'Equative nganga- ("As Big As / The Size Of")',
    subtitle: 'Clinical sizing of palpable masses, effusions, hematomas, and organs',
    formula: 'nganga- + Noun -> Coalesced Dimension Form (nganga- + ingqindi = ngangengqindi)',
    explanation:
      'The equative formative nganga- conveys equality of size, physical magnitude, or extent ("the size of / as big as"). In bedside physical examinations and surgical intake, clinicians and patients use nganga- to grade palpable lumps, masses, and effusions without calipers: Isilonda singangeqanda ("The wound/lump is the size of an egg"); Inhliziyo ingangengqindi yakho ("The heart is roughly the size of your fist"). It binds predicatively with subject concords to state dimensions directly.',
    commonPitfall:
      'Confusing comparative *njenga-* ("like / behavior / sensation") with equative *nganga-* ("physical volume / size"). *Umlingisi unjengoyise* means "he acts like his father", while *ungangoyise* means "he is physically as tall/big as his father". For physical organ and lump dimensions, always use *nganga-*.',
    rules: [
      'Dimensional formula: nganga- + Noun (a+i=e: ngangengqindi; a+u=o: ngangomntwana).',
      'Predicative dimension: SC + nganga- + Noun (Leli thumba lingangeqanda = This abscess is the size of an egg).',
      'Organ sizing: Inhliziyo ingangengqindi (The heart is fist-sized).',
      'Hematoma/effusion sizing: Ihlule belingangepuleti (The clot was the size of a saucer).'
    ],
    examples: [
      {
        id: 'form-nganga-ex-1',
        type: 'examination',
        isizulu: 'Unetebe elikhulu emqaleni elingangeqanda lenkukhu.',
        english: 'He has a large swelling on the neck that is the size of a chicken egg.',
        breakdown: [
          { chunk: 'Unetebe elikhulu', gloss: 'he has a large swelling / goiter (Class 5)' },
          { chunk: 'emqaleni', gloss: 'on the neck (locative)' },
          { chunk: 'elingangeqanda', gloss: 'eli- (Class 5 relative concord) + nganga- + iqanda -> elingangeqanda ("which is the size of an egg")' },
          { chunk: 'lenkukhu', gloss: 'of a chicken' }
        ]
      },
      {
        id: 'form-nganga-ex-2',
        type: 'surgery',
        isizulu: 'Ihlule legazi ebesilikhipha belingangengqindi yomntwana.',
        english: 'The blood clot we extracted was the size of a child’s fist.',
        breakdown: [
          { chunk: 'Ihlule legazi', gloss: 'blood clot (Class 5)' },
          { chunk: 'ebesilikhipha', gloss: 'which we were removing' },
          { chunk: 'belingangengqindi', gloss: 'beli- (past continuous) + nganga- + ingqindi -> belingangengqindi ("was the size of a fist")' },
          { chunk: 'yomntwana', gloss: 'of a child' }
        ]
      }
    ]
  },
  {
    id: 'form-coalescence-rules',
    category: 'formatives',
    title: 'Formative Vowel Coalescence Mechanics & Class 1a Exceptions',
    subtitle: 'The universal phonetic laws of isiZulu formative prefixing and kinship rules',
    formula: 'a + i = e  |  a + u = o  |  a + a = a  |  Class 1a: no-, ngo-, njengo-, ngango-',
    explanation:
      'All four formatives (na-, nga-, njenga-, nganga-) terminate in the vowel -a. When prefixed to standard isiZulu nouns, this terminal -a fuses phonologically with the noun’s initial augment vowel (a-, i-, u-). The rules are mathematically consistent: (1) a + i = e (na- + isifo = nesifo; nga- + inaliti = ngenaliti); (2) a + u = o (na- + umuthi = nomuthi; nga- + umoya = ngomoya); (3) a + a = a (na- + amaphilisi = namaphilisi). Exception: Class 1a nouns (proper names and kinship terms like uGogo, uDokotela, uSipho) do not possess a true augment vowel; instead of shifting, the formative vowel shifts directly to -o-: nodokotela ("with the doctor"), ngogogo ("by the grandmother").',
    commonPitfall:
      'Applying standard vowel shifting to Class 1a proper nouns or kinship terms (*"nedokotela"* instead of *nodokotela*). Class 1a nouns take *no-*, *ngo-*, *njengo-*, and *ngango-* regardless of following consonants.',
    rules: [
      'Universal Law 1: a + i = e (na- + ikhanda = nekhanda; nga- + isandla = ngesandla).',
      'Universal Law 2: a + u = o (na- + umlomo = nomlomo; nga- + umzimba = ngomzimba).',
      'Universal Law 3: a + a = a (na- + amehlo = namehlo; nga- + amandla = ngamandla).',
      'Class 1a Kinship/Title Exception: Always takes -o- (nodokotela, ngonesi, nomama, nogogo).'
    ],
    examples: [
      {
        id: 'form-coal-ex-1',
        type: 'kinship',
        isizulu: 'Khuluma nodokotela nesiqondiso sokwelashwa kwakho.',
        english: 'Speak with the doctor regarding the guidance of your treatment.',
        breakdown: [
          { chunk: 'Khuluma', gloss: 'speak! (imperative)' },
          { chunk: 'nodokotela', gloss: 'na- + udokotela (Class 1a) -> nodokotela ("with the doctor")' },
          { chunk: 'nesiqondiso', gloss: 'na- + isiqondiso (Class 7) -> nesiqondiso ("and the instruction/guidance")' },
          { chunk: 'sokwelashwa kwakho', gloss: 'of your medical treatment' }
        ]
      },
      {
        id: 'form-coal-ex-2',
        type: 'pharmacology',
        isizulu: 'Uphuza lo muthi ngamanzi abandayo noma ngobisi?',
        english: 'Do you take this medicine with cold water or with milk?',
        breakdown: [
          { chunk: 'Uphuza lo muthi', gloss: 'do you take this medicine' },
          { chunk: 'ngamanzi abandayo', gloss: 'nga- + amanzi -> ngamanzi ("with water") + abandayo ("cold")' },
          { chunk: 'noma ngobisi', gloss: 'or nga- + ubisi (Class 11 milk) -> ngobisi ("with milk")' }
        ]
      }
    ]
  }
];
