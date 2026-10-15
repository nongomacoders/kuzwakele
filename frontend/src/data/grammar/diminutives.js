/**
 * Kuzwakele Grammar Reference - diminutives.js
 * Comprehensive guide to isiZulu Diminutives, Augmentatives & Noun Palatalization (Izinciphiso Nezenkiso),
 * covering prepalatal consonant mutations before -ana (m->ny, mb->nj, b->tsh, l->dl),
 * clinical symptom attenuation and patient minimization (umkhuhlwana, ubuhlungwana),
 * pediatric anatomical descriptions (ithanjana), and augmentative -kazi for major catastrophes.
 */

export const DIMINUTIVES_SECTION = {
  id: 'diminutives-palatalization',
  title: 'Diminutives & Noun Palatalization',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Suffixing -ana to nouns triggering mandatory prepalatal consonant shifts (b->tsh, m->ny, mb->nj, l->dl), symptom attenuation (umkhuhlwana, ubuhlungwana), and augmentative -kazi for major catastrophes.',
  previewHook: 'umlomo -> umlonyana, ithambo -> ithanjana, umkhuhlwana, ingozikazi',
  description: 'Master the 5 core diminutive and augmentative rules: noun labial palatalization before -ana, alveolar sound shifts (l->dl, t->tsh, nd->nj), clinical symptom downplaying and attenuation, pediatric anatomical diminutives, and the augmentative suffix -kazi for medical emergencies and high-energy trauma.'
};

export const DIMINUTIVES_MATRIX = [
  {
    baseNoun: 'umlomo',
    nounClassMeaning: 'Class 3 Mouth',
    diminutiveForm: 'umlonyana',
    soundShift: 'm -> ny (bilabial nasal palatalization)',
    clinicalApplication: 'Pediatric oral candidiasis fissure, microstomia',
    patientSymptomInterpretation: 'Localized oral thrush, pediatric mouth lesion'
  },
  {
    baseNoun: 'ithambo',
    nounClassMeaning: 'Class 5 Bone',
    diminutiveForm: 'ithanjana',
    soundShift: 'mb -> nj (prenasalized labial shift)',
    clinicalApplication: 'Hairline fracture / infant digit / carpal bone',
    patientSymptomInterpretation: 'Subtle pediatric fracture without major displacement'
  },
  {
    baseNoun: 'umkhuhlane',
    nounClassMeaning: 'Class 3 Flu / Fever',
    diminutiveForm: 'umkhuhlwana',
    soundShift: 'Vowel elision + -ana (-ane -> -wana)',
    clinicalApplication: 'Attenuated viral cold, mild upper respiratory infection',
    patientSymptomInterpretation: 'Patient minimizing viral malaise; may mask early sepsis'
  },
  {
    baseNoun: 'ubuhlungu',
    nounClassMeaning: 'Class 14 Pain',
    diminutiveForm: 'ubuhlungwana',
    soundShift: 'u -> wa (terminal vowel glide)',
    clinicalApplication: 'Dull mild ache, residual discomfort',
    patientSymptomInterpretation: 'Patient downplaying insidious pain due to stoicism'
  },
  {
    baseNoun: 'isilonda',
    nounClassMeaning: 'Class 7 Ulcer / Wound',
    diminutiveForm: 'isilondana',
    soundShift: 'Suffixation + -ana (direct attachment)',
    clinicalApplication: 'Superficial scratch, aphthous ulcer, insect bite',
    patientSymptomInterpretation: 'Minor skin breakdown; verify if secondary infection present'
  },
  {
    baseNoun: 'ingalo',
    nounClassMeaning: 'Class 9 Arm',
    diminutiveForm: 'ingalwana',
    soundShift: 'o -> wa (terminal vowel glide)',
    clinicalApplication: 'Pediatric limb examination, forearm sprain',
    patientSymptomInterpretation: 'Pediatric fracture assessment, greenstick injury site'
  },
  {
    baseNoun: 'iphimbo',
    nounClassMeaning: 'Class 5 Voice / Throat',
    diminutiveForm: 'iphinjana',
    soundShift: 'mb -> nj (palatalization)',
    clinicalApplication: 'Vocal cord hoarseness, pediatric stridor',
    patientSymptomInterpretation: 'Mild pharyngeal irritation or early croup hoarseness'
  },
  {
    baseNoun: 'ingozi',
    nounClassMeaning: 'Class 9 Accident / Danger',
    diminutiveForm: 'ingozikazi [Augmentative]',
    soundShift: 'Augmentative suffix -kazi (extreme scale)',
    clinicalApplication: 'Catastrophic multi-trauma MVA, mass casualty incident',
    patientSymptomInterpretation: 'Triage red-flagging for catastrophic collision'
  }
];

export const DIMINUTIVES_CHECKPOINTS = [
  {
    id: 'dim-check-1',
    challengeNumber: 1,
    prompt: 'I only have a slight cold and a dull little headache, nothing alarming.',
    targetConcept: 'Clinical Symptom Attenuation with umkhuhlwana and ikhandana',
    primaryAnswer: 'Nginomkhuhlwana nje nekhandana elincane, akukho okusabisayo.',
    breakdown: [
      { chunk: 'Nginomkhuhlwana nje', gloss: 'I have just a slight cold (umkhuhlane + -ana -> umkhuhlwana)' },
      { chunk: 'nekhandana elincane', gloss: 'and a little headache (ikhanda + -ana -> ikhandana) + small' },
      { chunk: 'akukho', gloss: 'there is nothing (negative copulative)' },
      { chunk: 'okusabisayo', gloss: 'which is frightening / alarming (relative verb)' }
    ],
    ruleTip: 'Patients frequently attenuate symptoms using the diminutive suffix -ana: umkhuhlane -> umkhuhlwana, ikhanda -> ikhandana. Clinicians must recognize this cultural stoicism to avoid overlooking serious underlying pathology.'
  },
  {
    id: 'dim-check-2',
    challengeNumber: 2,
    prompt: "The small bone in the child's foot has a hairline crack.",
    targetConcept: 'Noun Labial Palatalization on ithambo -> ithanjana (mb -> nj)',
    primaryAnswer: 'Ithanjana elincane onyaweni lomntwana linomfantu omncane.',
    breakdown: [
      { chunk: 'Ithanjana elincane', gloss: 'ithambo (bone) + -ana -> ithanjana (small bone: mb shifts to nj) + small' },
      { chunk: 'onyaweni', gloss: 'on the foot (locative of unyawo)' },
      { chunk: 'lomntwana', gloss: 'of the child' },
      { chunk: 'linomfantu omncane', gloss: 'has a small crack / hairline fissure' }
    ],
    ruleTip: 'Suffixing -ana to nouns ending with bilabial consonants triggers obligatory palatalization: ithambo does NOT become *ithambana*; the mb shifts to nj -> ithanjana.'
  },
  {
    id: 'dim-check-3',
    challengeNumber: 3,
    prompt: 'There was a massive vehicle accident on the highway today.',
    targetConcept: 'Augmentative Suffix -kazi on ingozi -> ingozikazi for Major Catastrophes',
    primaryAnswer: 'Kube nengozikazi enkulu yemoto emgwaqeni omkhulu namuhla.',
    breakdown: [
      { chunk: 'Kube', gloss: 'there occurred / there was (remote past)' },
      { chunk: 'nengozikazi enkulu', gloss: 'na- + ingozikazi (ingozi + augmentative -kazi: "catastrophic accident") + large' },
      { chunk: 'yemoto', gloss: 'of a vehicle' },
      { chunk: 'emgwaqeni omkhulu', gloss: 'on the major road / highway' },
      { chunk: 'namuhla', gloss: 'today' }
    ],
    ruleTip: 'While -ana reduces size or severity, the augmentative suffix -kazi amplifies scale, danger, or catastrophic intensity: ingozi (accident) -> ingozikazi (horrific multi-vehicle disaster).'
  }
];

export const DIMINUTIVES_RULES = [
  // ==========================================
  // CATEGORY 18: DIMINUTIVES & PALATALIZATION
  // ==========================================
  {
    id: 'dim-labial-palatalization',
    category: 'diminutives-palatalization',
    title: 'Noun Labial Palatalization before -ana',
    subtitle: 'The obligatory prepalatal shift of bilabials (b, p, ph, m, mb) in diminutive morphology',
    formula: 'b -> tsh  |  p -> tsh  |  ph -> sh  |  m -> ny  |  mb -> nj  (before -ana)',
    explanation:
      'When the diminutive suffix -ana is appended to an isiZulu noun whose final or penultimate syllable contains a bilabial consonant (b, p, ph, m, mb), that consonant obligatorily undergoes labial palatalization. The sound moves from the lips back to the prepalate: (1) m -> ny: umlomo ("mouth") -> umlonyana ("small mouth"); (2) mb -> nj: ithambo ("bone") -> ithanjana ("small bone"); (3) b -> tsh: imbobo ("hole") -> imbotshana ("tiny aperture / puncture"); (4) ph -> sh: impuphu ("mealie meal / powder") -> impushana ("fine powder / dust").',
    commonPitfall:
      'Directly appending *-ana* without mutating the bilabial consonant (*"umlomana"* or *"ithambana"*). In native isiZulu phonology, bilabials before *-ana* must palatalize: *umlonyana*, *ithanjana*.',
    rules: [
      'm shifts to ny: umlomo -> umlonyana; umzimba -> umzinjana.',
      'mb shifts to nj: ithambo -> ithanjana; iphimbo -> iphinjana.',
      'b shifts to tsh: ingubo -> ingutshana; isigubhu -> isigutshana.',
      'ph shifts to sh: iphaphu (lung) -> iphashana (small lung).',
      'Terminal vowel substitution: Final -o or -u becomes -wa- before non-labials: ingalo -> ingalwana.'
    ],
    examples: [
      {
        id: 'dim-lab-ex-1',
        type: 'pediatrics',
        isizulu: 'Umlonyana womntwana umhlophe ngenxa yezilonda zokhwekhwe.',
        english: 'The child’s little mouth is white due to oral thrush sores.',
        breakdown: [
          { chunk: 'Umlonyana', gloss: 'umlomo (mouth) + -ana -> umlonyana (m -> ny)' },
          { chunk: 'womntwana', gloss: 'of the child' },
          { chunk: 'umhlophe', gloss: 'is white (relative)' },
          { chunk: 'ngenxa yezilonda', gloss: 'due to sores / thrush' }
        ]
      },
      {
        id: 'dim-lab-ex-2',
        type: 'orthopedics',
        isizulu: 'Ithanjana lesandla liphukile kodwa alidingi ukuhlinzwa.',
        english: 'A small hand bone is fractured, but it does not require surgical intervention.',
        breakdown: [
          { chunk: 'Ithanjana', gloss: 'ithambo (bone) + -ana -> ithanjana (mb -> nj)' },
          { chunk: 'lesandla', gloss: 'of the hand' },
          { chunk: 'liphukile', gloss: 'is fractured (stative)' },
          { chunk: 'alidingi ukuhlinzwa', gloss: 'does not require surgery' }
        ]
      }
    ]
  },
  {
    id: 'dim-alveolar-shifts',
    category: 'diminutives-palatalization',
    title: 'Alveolar Sound Shifts before -ana (l -> dl, t -> tsh, nd -> nj)',
    subtitle: 'Coronal consonant mutations in anatomical and procedural nouns',
    formula: 'l -> dl  |  t -> tsh  |  nd -> nj  |  d -> j  (before -ana)',
    explanation:
      'In addition to bilabials, coronal and alveolar consonants also undergo prepalatal mutations when diminutive -ana is added: (1) lateral l -> dl: umfula ("stream / artery") -> umfudlana ("small stream / capillary"); (2) alveolar t -> tsh: ikati ("cat") -> ikatshana; (3) alveolar nasal cluster nd -> nj: isondo ("wheel") -> isonjana ("small wheel / caster"); (4) alveolar voiced d -> j: incwadi ("letter / patient file") -> incwajana ("brief note / clinic booklet").',
    commonPitfall:
      'Writing *"umfulana"* or *"incwadana"*. The alveolar sounds shift to prepalatals: *umfudlana*, *incwajana*.',
    rules: [
      'l shifts to dl: iphambili -> iphambidlana; umfula -> umfudlana.',
      'nd shifts to nj: isondo -> isonjana; umkhondo -> umkhonjana.',
      'd shifts to j: incwadi -> incwajana; indoda -> indojana.',
      't shifts to tsh: isikhati -> isikhatshana (a short duration of time).'
    ],
    examples: [
      {
        id: 'dim-alv-ex-1',
        type: 'administrative',
        isizulu: 'Funda le ncwajana yezempilo ngaphambi kokugwinya amaphilisi.',
        english: 'Read this small health booklet / leaflet before swallowing the pills.',
        breakdown: [
          { chunk: 'Funda', gloss: 'read! (imperative)' },
          { chunk: 'le ncwajana', gloss: 'incwadi (booklet) + -ana -> incwajana (d -> j)' },
          { chunk: 'yezempilo', gloss: 'of health' },
          { chunk: 'ngaphambi kokugwinya', gloss: 'before swallowing pills' }
        ]
      },
      {
        id: 'dim-alv-ex-2',
        type: 'temporal',
        isizulu: 'Hlala phansi isikhatshana esincane, udokotela uzokubiza masinyane.',
        english: 'Sit down for a brief little moment; the doctor will call you shortly.',
        breakdown: [
          { chunk: 'Hlala phansi', gloss: 'sit down!' },
          { chunk: 'isikhatshana', gloss: 'isikhathi (time) + -ana -> isikhatshana (t -> tsh)' },
          { chunk: 'esincane', gloss: 'brief / small' },
          { chunk: 'udokotela uzokubiza', gloss: 'the doctor will call you' }
        ]
      }
    ]
  },
  {
    id: 'dim-clinical-attenuation',
    category: 'diminutives-palatalization',
    title: 'Clinical Attenuation & Downplaying Severity',
    subtitle: 'Decoding patient minimization, cultural stoicism, and deceptive mildness',
    formula: 'Base Symptom Noun  +  -ana  ->  Attenuated Complaint (umkhuhlane -> umkhuhlwana)',
    explanation:
      'In KwaZulu-Natal clinical interactions, patients frequently utilize diminutive suffixation to downplay severe illness. Culturally driven by stoicism, fear of hospitalization, or modesty, patients may present with life-threatening conditions yet describe them as minor: umkhuhlwana ("just a slight cold" — while febrile at $39^\\circ\\text{C}$); ubuhlungwana ("a small little ache" — while suffering an acute coronary syndrome); isilondana ("just a small sore" — when presenting with an ulcerating diabetic foot). Clinicians must recognize that diminutives in history-taking often signal psychological minimization rather than low objective acuity.',
    commonPitfall:
      'Taking a patient’s diminutive literally (e.g. triaging *umkhuhlwana* as a simple common cold without checking vital signs). Always cross-reference diminished words with objective physiological findings.',
    rules: [
      'umkhuhlane -> umkhuhlwana: Patient downplaying severe fever or pneumonia.',
      'ubuhlungu -> ubuhlungwana: Stoic minimization of severe somatic or visceral pain.',
      'isisu -> isiswana: Describing acute diarrhea as a "mild tummy upset".',
      'ikhanda -> ikhandana: Downplaying an insidious severe headache or hypertensive crisis.'
    ],
    examples: [
      {
        id: 'dim-att-ex-1',
        type: 'triage-history',
        isizulu: 'Ugogo uthi unesiswana nje kuphela, kanti umzimba uphelelwe ngamanzi.',
        english: 'Grandmother says she just has a slight tummy bug, yet her body is severely dehydrated.',
        breakdown: [
          { chunk: 'Ugogo uthi', gloss: 'grandmother says' },
          { chunk: 'unesiswana', gloss: 'she has a slight tummy upset (isisu + -ana -> isiswana)' },
          { chunk: 'nje kuphela', gloss: 'just exclusively' },
          { chunk: 'kanti umzimba', gloss: 'yet the body' },
          { chunk: 'uphelelwe ngamanzi', gloss: 'is depleted of water (severe dehydration)' }
        ]
      },
      {
        id: 'dim-att-ex-2',
        type: 'cardiology-warning',
        isizulu: 'Musa ukudela lobu buhlungwana besifuba ngoba bungase bube yinhliziyo.',
        english: 'Do not ignore this "mild chest discomfort" because it could be your heart.',
        breakdown: [
          { chunk: 'Musa ukudela', gloss: 'do not neglect / ignore! (prohibition)' },
          { chunk: 'lobu buhlungwana', gloss: 'this minor ache (ubuhlungu + -ana -> buhlungwana)' },
          { chunk: 'besifuba', gloss: 'of the chest' },
          { chunk: 'bungase bube yinhliziyo', gloss: 'it might be the heart (copulative)' }
        ]
      }
    ]
  },
  {
    id: 'dim-pediatric-anatomy',
    category: 'diminutives-palatalization',
    title: 'Pediatric Anatomy & Subtle Lesions',
    subtitle: 'Accurately describing neonates, fine distal extremities, and localized dermatological abrasions',
    formula: 'Anatomical Noun  +  -ana  ->  Pediatric / Subtle Entity (unyawo -> unyawana)',
    explanation:
      'In pediatrics and dermatology, diminutives allow clinicians and caregivers to distinguish delicate infant anatomy and subtle lesions from mature adult structures: (1) neonates and infants: umntwana -> umntwanyana ("tiny newborn baby / premature neonate"); (2) fine distal extremities: unyawo ("foot") -> unyawana ("tiny baby foot"); izinzwane ("toes") -> izinzwanana ("infant toes"); (3) superficial skin breaks: isilonda ("ulcer / wound") -> isilondana ("tiny abrasion / scratch / papule"); imbobo ("puncture") -> imbotshana ("needle puncture mark").',
    commonPitfall:
      'Using the full adult noun when examining premature infants. Diminutives convey clinical precision and tenderness when interacting with pediatric caregivers.',
    rules: [
      'Infant categorization: umntwanyana (neonate / preemie / tiny infant).',
      'Distal infant digits: izinzwanana (tiny toes); iminwanyana (tiny fingers).',
      'Superficial skin breaks: izilondana ezincane (minor superficial abrasions).',
      'Vascular access sites: imbotshana yenaliti (minute IV cannulation puncture).'
    ],
    examples: [
      {
        id: 'dim-ped-ex-1',
        type: 'neonatal',
        isizulu: 'Umntwanyana ozelwe ngaphambi kwesikhathi udinga ukufudunyezwa ku-incubator.',
        english: 'The premature tiny infant needs to be kept warm in the incubator.',
        breakdown: [
          { chunk: 'Umntwanyana', gloss: 'umntwana + -ana -> umntwanyana (premature / tiny newborn)' },
          { chunk: 'ozelwe ngaphambi kwesikhathi', gloss: 'born before time (premature)' },
          { chunk: 'udinga ukufudunyezwa', gloss: 'needs to be warmed' },
          { chunk: 'ku-incubator', gloss: 'in the incubator' }
        ]
      },
      {
        id: 'dim-ped-ex-2',
        type: 'dermatology',
        isizulu: 'Bheka lezi zilondana ezincane ezisemhlane, zibonakala njengoshashaza.',
        english: 'Look at these tiny sores on the back; they look like chickenpox vesicles.',
        breakdown: [
          { chunk: 'Bheka', gloss: 'look! / examine!' },
          { chunk: 'lezi zilondana', gloss: 'isilonda + -ana -> izilondana (tiny vesicles / papules)' },
          { chunk: 'ezincane', gloss: 'which are small' },
          { chunk: 'ezisemhlane', gloss: 'which are on the back' },
          { chunk: 'zibonakala njengoshashaza', gloss: 'they appear like chickenpox' }
        ]
      }
    ]
  },
  {
    id: 'dim-augmentative-kazi',
    category: 'diminutives-palatalization',
    title: 'The Augmentative Suffix -kazi (Catastrophes & Massive Scale)',
    subtitle: 'Signaling mass casualties, high-energy polytrauma, and severe macroscopic pathology',
    formula: 'Noun Stem  +  -kazi  ->  Augmentative Entity (ingozi -> ingozikazi)',
    explanation:
      'While the diminutive suffix -ana reduces size or severity, the augmentative suffix -kazi operates in the opposite direction, amplifying scale, ferocity, massiveness, or catastrophic intensity. In medical emergency triage and disaster medicine, -kazi is attached to root nouns to denote high-energy polytrauma and natural disasters: ingozi ("accident") -> ingozikazi ("horrific multi-vehicle pileup / disaster"); isiphepho ("storm") -> isiphephokazi ("destructive tornado / cyclone disaster"); itshe ("gallstone / renal calculus") -> itshekazi ("massive staghorn calculus").',
    commonPitfall:
      'Confusing the augmentative *-kazi* with the feminine suffix *-kazi* (e.g. *inkosikazi* = woman / wife). When appended to inanimate nouns or trauma descriptors (*ingozikazi*), *-kazi* functions purely as an augmentative of scale and catastrophe.',
    rules: [
      'Disaster / mass casualty: ingozi + -kazi -> ingozikazi (catastrophic mass accident).',
      'Extreme weather emergency: isiphepho + -kazi -> isiphephokazi (severe hurricane/cyclone).',
      'Massive anatomical calculus: itshe + -kazi -> itshekazi (massive staghorn stone).',
      'No consonant mutation: Unlike -ana, the augmentative -kazi never triggers labial palatalization.'
    ],
    examples: [
      {
        id: 'dim-aug-ex-1',
        type: 'mass-casualty',
        isizulu: 'Kube nengozikazi yebhasi namaloli amathathu kudedelwe i-code red.',
        english: 'There was a catastrophic accident involving a bus and three trucks; code red was declared.',
        breakdown: [
          { chunk: 'Kube nengozikazi', gloss: 'there occurred a catastrophic accident (ingozi + -kazi)' },
          { chunk: 'yebhasi namaloli amathathu', gloss: 'of a bus and three trucks' },
          { chunk: 'kudedelwe', gloss: 'there was dispatched / released' },
          { chunk: 'i-code red', gloss: 'code red trauma disaster response' }
        ]
      },
      {
        id: 'dim-aug-ex-2',
        type: 'urology',
        isizulu: 'I-X-ray iveza itshekazi elikhulu kakhulu elimi esinyeni somguli.',
        english: 'The X-ray reveals a massive stone lodged inside the patient’s bladder.',
        breakdown: [
          { chunk: 'I-X-ray iveza', gloss: 'the X-ray reveals / shows' },
          { chunk: 'itshekazi elikhulu', gloss: 'a massive stone (itshe + -kazi) + large' },
          { chunk: 'kakhulu', gloss: 'very much / extremely' },
          { chunk: 'elimi esinyeni', gloss: 'which is lodged in the bladder' },
          { chunk: 'somguli', gloss: 'of the patient' }
        ]
      }
    ]
  }
];
