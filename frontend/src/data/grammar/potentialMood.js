/**
 * Kuzwakele Grammar Reference - potentialMood.js
 * Comprehensive guide to isiZulu Potential Mood (Isimo Sokwenzeka),
 * covering positive capability/permission with -nga- ("can / may"), negative potential
 * with -nge-...-e ("cannot / may not"), absolute categorical negative angeke ("cannot ever / will never"),
 * integration with object concords and statives, and functional mobility assessments.
 */

export const POTENTIAL_MOOD_SECTION = {
  id: 'potential-mood',
  title: 'The Potential Mood (Can / May)',
  badge: '5 Rules',
  ruleCount: 5,
  keyConcept: 'Infix -nga- ("can / may / might"), negative potential -nge-...-e ("cannot"), and absolute categorical negative angeke for assessing mobility, clinical consent, and treatment feasibility.',
  previewHook: 'ungangena (you may enter), angeke ahambe (he cannot walk), angasiza',
  description: 'Master the 5 core potential mood rules: positive capability/permission with -nga-, negative incapacity with -nge-...-e, absolute categorical negative angeke, potential infix with object concords and statives, and functional mobility / ADL clinical evaluations.'
};

export const POTENTIAL_MOOD_MATRIX = [
  {
    nounClass: 'Mina [1st Sing]',
    positivePotential: 'ngingasiza (I can help / I may assist)',
    negativePotential: 'ngingesize (I cannot help / unable to assist)',
    absoluteNegativeAngeke: 'angeke ngisize (I cannot ever help)',
    clinicalApplication: 'Clinician capacity, boundary setting, offer of clinical care'
  },
  {
    nounClass: 'Wena [2nd Sing]',
    positivePotential: 'ungangena (you may enter / come in)',
    negativePotential: 'ungengene (you may not enter)',
    absoluteNegativeAngeke: 'angeke ungene (you will never enter)',
    clinicalApplication: 'Consent to enter consult room, quarantine entry restrictions'
  },
  {
    nounClass: 'Yena / Umguli [Class 1]',
    positivePotential: 'angahamba (he/she can walk / may go)',
    negativePotential: 'angehambe (he/she cannot walk)',
    absoluteNegativeAngeke: 'angeke ahambe (he/she will never walk)',
    clinicalApplication: 'Ambulation assessment, discharge clearance, post-stroke mobility'
  },
  {
    nounClass: 'Abantu [Class 2]',
    positivePotential: 'bangaphila (they can recover / survive)',
    negativePotential: 'bangephile (they may not recover)',
    absoluteNegativeAngeke: 'angeke baphile (they cannot recover)',
    clinicalApplication: 'Cohort prognosis, pediatric epidemic recovery assessment'
  },
  {
    nounClass: 'Amaphilisi [Class 6]',
    positivePotential: 'angaphela (they might finish / run out)',
    negativePotential: 'angephele (they cannot run out)',
    absoluteNegativeAngeke: 'angeke aphele (they will not run out)',
    clinicalApplication: 'Medication stock continuity, adherence refill planning'
  },
  {
    nounClass: 'Isiguli / Isilonda [Class 7]',
    positivePotential: 'singalapheka (it can be cured / treated)',
    negativePotential: 'singelapheke (it cannot be cured)',
    absoluteNegativeAngeke: 'angeke selapheke (it cannot ever be cured)',
    clinicalApplication: 'Curative feasibility, chronic wound prognosis, palliative transition'
  },
  {
    nounClass: 'Inhliziyo / Ingozi [Class 9]',
    positivePotential: 'ingadamba (it can subside / calm)',
    negativePotential: 'ingedambe (it cannot subside)',
    absoluteNegativeAngeke: 'angeke idambe (it will not subside)',
    clinicalApplication: 'Pain relief trajectory, acute refractory tachycardia, wound pain'
  },
  {
    nounClass: 'Izinyawo [Class 10]',
    positivePotential: 'zingavuvuka (they might swell)',
    negativePotential: 'zingevuvuke (they cannot swell)',
    absoluteNegativeAngeke: 'angeke zivuvuke (they will not swell)',
    clinicalApplication: 'Bilateral peripheral edema, anticipated pharmaceutical side effects'
  }
];

export const POTENTIAL_MOOD_CHECKPOINTS = [
  {
    id: 'pot-check-1',
    challengeNumber: 1,
    prompt: 'The patient cannot walk because the right leg is very painful.',
    targetConcept: 'Negative Potential Mood (-nge-...-e) for Functional Impairment',
    primaryAnswer: 'Isiguli singehambe ngoba umlenze wesokudla ubuhlungu kakhulu.',
    breakdown: [
      { chunk: 'Isiguli', gloss: 'Class 7 noun ("the patient")' },
      { chunk: 'si-nge-hamb-e', gloss: 'si- (Class 7 SC) + -nge- (negative potential infix) + -hamba (walk) + -e (negative potential terminal vowel: "cannot walk")' },
      { chunk: 'ngoba', gloss: 'conjunction ("because")' },
      { chunk: 'umlenze wesokudla', gloss: 'the right leg (Class 3)' },
      { chunk: 'ubuhlungu kakhulu', gloss: 'is very painful / tender' }
    ],
    ruleTip: "The negative potential mood replaces -nga- with -nge- and shifts the terminal vowel from -a to -e (si-nge-hambe = 'cannot walk'). It describes functional inability without categorical finality."
  },
  {
    id: 'pot-check-2',
    challengeNumber: 2,
    prompt: 'You may come inside the consultation room now with your daughter.',
    targetConcept: 'Positive Potential Infix (-nga-) for Clinical Permission & Chaperone Access',
    primaryAnswer: 'Ungangena ngaphakathi egumbini lokuhlola nendodakazi yakho manje.',
    breakdown: [
      { chunk: 'U-nga-ngen-a', gloss: 'u- (2nd person SC) + -nga- (positive potential infix: "may / can") + -ngena (enter) + -a ("you may enter")' },
      { chunk: 'ngaphakathi', gloss: 'locative adverb ("inside")' },
      { chunk: 'egumbini lokuhlola', gloss: 'in the consultation / exam room' },
      { chunk: 'nendodakazi yakho', gloss: 'na- + indodakazi yakho ("with your daughter")' },
      { chunk: 'manje', gloss: 'adverb of time ("now")' }
    ],
    ruleTip: "The potential mood infix -nga- inserted before the verb root conveys clinical permission ('you may enter') or personal capacity ('you can enter')."
  },
  {
    id: 'pot-check-3',
    challengeNumber: 3,
    prompt: 'We can cure this infection if you take all the pills.',
    targetConcept: 'Potential Infix (-nga-) Combined with Object Concord (-si-)',
    primaryAnswer: 'Singasipholisa lesi sifo uma uwaphuzile wonke amaphilisi.',
    breakdown: [
      { chunk: 'Si-nga-si-pholis-a', gloss: 'si- (1st person pl SC) + -nga- (can) + -si- (Class 7 OC: "it") + -pholisa (heal/cure causative) + -a ("we can cure it")' },
      { chunk: 'lesi sifo', gloss: 'this disease / infection (Class 7)' },
      { chunk: 'uma uwaphuzile', gloss: 'if you have taken them (conditional uma + stative/recent past)' },
      { chunk: 'wonke amaphilisi', gloss: 'all the pills (Class 6 quantitative)' }
    ],
    ruleTip: "When combined with an object concord, the potential infix precedes the OC: SC + -nga- + OC + Root + -a (si-nga-si-pholisa = 'we can cure it'). The object concord always touches the verb root."
  }
];

export const POTENTIAL_MOOD_RULES = [
  // ==========================================
  // CATEGORY 12: THE POTENTIAL MOOD
  // ==========================================
  {
    id: 'pot-positive-nga',
    category: 'potential-mood',
    title: 'Positive Potential with -nga- ("Can / May / Might")',
    subtitle: 'Expressing physical capability, clinical permission, and probable side-effects',
    formula: 'Subject Concord + -nga- + Verb Root + -a',
    explanation:
      'The potential mood expresses three clinical dimensions: (1) physical capability ("the patient can walk"), (2) clinical permission ("you may enter / you may get dressed"), and (3) probability or contingent onset ("the medication might cause dizziness"). It is formed by inserting the infix -nga- directly between the subject concord and the verb root. Note that Class 1/1a takes the special subject concord a- instead of u- in the potential mood: angangena ("he/she may enter"), angasuka ("he/she can stand").',
    commonPitfall:
      'Using the indicative Class 1 concord *u-* (saying *"ungangena"* to mean "he may enter"). *Ungangena* means "YOU may enter"; for "he/she may enter", the concord shifts to *a-*: *angangena*.',
    rules: [
      'Positive formula: SC + -nga- + Verb Root + -a.',
      'Class 1/1a subject concord obligatorily shifts from u- to a-: angahamba (he/she can walk).',
      'Clinical capability: Isiguli singakwazi ukuhlala (The patient is able to sit).',
      'Clinical permission: Ungagqoka izingubo zakho manje (You may put on your clothes now).'
    ],
    examples: [
      {
        id: 'pot-pos-ex-1',
        type: 'permission',
        isizulu: 'Ungangena egumbini lokuhlola bese ulala phansi embhedeni.',
        english: 'You may enter the examination room and then lie down on the bed.',
        breakdown: [
          { chunk: 'Ungangena', gloss: 'u- + -nga- + -ngena (you may enter)' },
          { chunk: 'egumbini lokuhlola', gloss: 'into the examination room' },
          { chunk: 'bese ulala phansi', gloss: 'and then lie down' },
          { chunk: 'embhedeni', gloss: 'on the bed' }
        ]
      },
      {
        id: 'pot-pos-ex-2',
        type: 'prognosis',
        isizulu: 'Lo muthi ungabangela isiyezi ngakho-ke ungashayeli imoto namhlanje.',
        english: 'This medicine might cause dizziness, therefore do not drive a vehicle today.',
        breakdown: [
          { chunk: 'Lo muthi', gloss: 'this medicine (Class 3)' },
          { chunk: 'ungabangela', gloss: 'u- + -nga- + -bangela (can/might cause)' },
          { chunk: 'isiyezi', gloss: 'dizziness (Class 7)' },
          { chunk: 'ngakho-ke', gloss: 'therefore / consequently' },
          { chunk: 'ungashayeli imoto', gloss: 'do not drive a car' }
        ]
      }
    ]
  },
  {
    id: 'pot-negative-nge',
    category: 'potential-mood',
    title: 'Negative Potential with -nge-...-e ("Cannot / May Not")',
    subtitle: 'Formulating temporary incapacity, physical inability, and clinical prohibitions',
    formula: 'Subject Concord + -nge- + Verb Root + -e',
    explanation:
      'To negate the potential mood ("cannot / may not / is unable to"), isiZulu changes the potential infix from -nga- to -nge- and shifts the terminal vowel from -a to -e. Crucially, the general negative prefix a- is NOT used. For Class 1 human singular, the concord remains a-: angehambe ("he/she cannot walk"). For 1st person singular: ngingesize ("I cannot assist"). This construction conveys temporary incapacity or condition-dependent limitations.',
    commonPitfall:
      'Prefixing the indicative negative *a-* (saying *"angingahambi"* instead of the proper negative potential *ngingehambe*). The negative potential never accepts the pre-concord a-.',
    rules: [
      'Negative formula: SC + -nge- + Verb Root + -e.',
      'Do not prefix the general negative a- (no *a-SC-nge-*).',
      'Class 1/1a uses the concord a-: angehambe (he cannot walk), angesize (he cannot help).',
      'Used clinically for transient functional disability: Singesebenze namhlanje (We cannot work today).'
    ],
    examples: [
      {
        id: 'pot-neg-ex-1',
        type: 'clinical',
        isizulu: 'Umguli angehambe ngaphandle kosizo lwezindondolo namuhla.',
        english: 'The patient cannot walk without the assistance of crutches today.',
        breakdown: [
          { chunk: 'Umguli', gloss: 'the patient (Class 1)' },
          { chunk: 'a-nge-hamb-e', gloss: 'a- (Class 1 SC) + -nge- (cannot) + -hamba + -e ("cannot walk")' },
          { chunk: 'ngaphandle kosizo', gloss: 'without the help' },
          { chunk: 'lwezindondolo', gloss: 'of crutches' },
          { chunk: 'namuhla', gloss: 'today' }
        ]
      },
      {
        id: 'pot-neg-ex-2',
        type: 'functional',
        isizulu: 'Ngingesize kule nkinga ngaphandle kwemvume kadokotela omkhulu.',
        english: 'I cannot assist in this problem without permission from the senior doctor.',
        breakdown: [
          { chunk: 'Ngingesize', gloss: 'ngi- + -nge- + -siza + -e ("I cannot assist")' },
          { chunk: 'kule nkinga', gloss: 'in this problem' },
          { chunk: 'ngaphandle kwemvume', gloss: 'without the permission' },
          { chunk: 'kadokotela omkhulu', gloss: 'of the senior doctor / consultant' }
        ]
      }
    ]
  },
  {
    id: 'pot-absolute-angeke',
    category: 'potential-mood',
    title: 'Absolute Categorical Negative with angeke ("Will Never / Cannot Ever")',
    subtitle: 'Reassuring terrified patients or stating definitive physiological impossibility',
    formula: 'angeke + Subject Concord + Subjunctive Verb (-e)',
    explanation:
      'While -nge-...-e expresses circumstantial incapacity ("cannot today"), the defective auxiliary verb angeke expresses absolute, non-negotiable impossibility ("will never / cannot ever / by no means"). It is followed obligatorily by the subjunctive mood (ending in -e): angeke afe ("he will not die / there is no chance he dies"), angeke ulahlekelwe umntwana ("you will definitely not lose the baby"). In emergency medicine, angeke is the clinician primary tool for firm reassurance against catastrophic panic.',
    commonPitfall:
      'Ending the following verb in -a (saying *"angeke uhamba"* instead of the correct subjunctive form *angeke uhambe*). Angeke strictly commands the subjunctive -e.',
    rules: [
      'Formula: angeke + Subject Concord + Verb Root + -e.',
      'Governs the subjunctive mood on the following verb.',
      'Expresses categorical impossibility, physiological certainty, or firm clinical reassurance.',
      'Class 1 uses the subjunctive concord a-: angeke ahambe (he will definitely not walk).'
    ],
    examples: [
      {
        id: 'pot-ang-ex-1',
        type: 'reassurance',
        isizulu: 'Ungesabi mama, lo muthi uphephe kakhulu; umntwana angeke afe.',
        english: 'Do not be afraid mother, this medicine is very safe; the child will definitely not die.',
        breakdown: [
          { chunk: 'Ungesabi mama', gloss: 'do not fear mother' },
          { chunk: 'lo muthi uphephe kakhulu', gloss: 'this medicine is very safe' },
          { chunk: 'umntwana angeke afe', gloss: 'the child will never die (angeke + a-f-e)' }
        ]
      },
      {
        id: 'pot-ang-ex-2',
        type: 'prognosis',
        isizulu: 'Uma ungalandeli imiyalelo yemithi, lesi silonda angeke siphole.',
        english: 'If you do not follow medication instructions, this ulcer will never heal.',
        breakdown: [
          { chunk: 'Uma ungalandeli imiyalelo', gloss: 'if you do not follow instructions' },
          { chunk: 'yemithi', gloss: 'of medications' },
          { chunk: 'lesi silonda', gloss: 'this ulcer (Class 7)' },
          { chunk: 'angeke siphole', gloss: 'will never heal (angeke + si-phol-e)' }
        ]
      }
    ]
  },
  {
    id: 'pot-with-oc-stative',
    category: 'potential-mood',
    title: 'Potential Infix with Object Concords & Statives',
    subtitle: 'Slot mechanics when combining -nga- with direct objects and resulting physical states',
    formula: 'SC + -nga- + Object Concord + Root + -a (Positive) | SC + -nga- + Stative (-ile/-e)',
    explanation:
      'The potential infix -nga- integrates smoothly into the verbal slot template: it sits immediately before the object concord (SC + -nga- + OC + Root + -a): ngingakusiza ("I can help you"), singawathatha amaphilisi ("we can take the pills"). When paired with stative verbs, -nga- denotes potential entry into a physiological state: angakhathala ("he might become fatigued"), ungasutha ("you can become satisfied/full"), singalamba ("we might become hungry").',
    commonPitfall:
      'Placing the object concord before the potential infix (saying *"ngikungasiza"* instead of the correct sequence *ngingakusiza*). The object concord must touch the root.',
    rules: [
      'Slot order: Subject Concord -> Potential Infix (-nga-) -> Object Concord -> Verb Root -> Final Vowel.',
      'The object concord cannot precede the potential marker: always -nga-OC-.',
      'With reflexive -zi-: ungangiziba (you can ignore me) vs ungazizwa (you can feel yourself).',
      'With passive verbs: singelapheka (we can be cured), singasizwa (we can be helped).'
    ],
    examples: [
      {
        id: 'pot-slot-ex-1',
        type: 'clinical',
        isizulu: 'Singawahlola amaphaphu akho ngomshini we-X-ray kusasa ekuseni.',
        english: 'We can examine your lungs with the X-ray machine tomorrow morning.',
        breakdown: [
          { chunk: 'Si-nga-wa-hlol-a', gloss: 'si- (SC) + -nga- (can) + -wa- (Class 6 OC: lungs) + -hlola + -a' },
          { chunk: 'amaphaphu akho', gloss: 'your lungs' },
          { chunk: 'ngomshini we-X-ray', gloss: 'with the X-ray machine' },
          { chunk: 'kusasa ekuseni', gloss: 'tomorrow morning' }
        ]
      },
      {
        id: 'pot-slot-ex-2',
        type: 'bedside',
        isizulu: 'Udokotela angakuchazela imiphumela yegazi lapho eseqedile.',
        english: 'The doctor can explain the blood results to you once he is finished.',
        breakdown: [
          { chunk: 'Udokotela', gloss: 'the doctor (Class 1a)' },
          { chunk: 'a-nga-ku-chaz-el-a', gloss: 'a- (Class 1 potential SC) + -nga- (can) + -ku- (you OC) + -chazela + -a' },
          { chunk: 'imiphumela yegazi', gloss: 'blood results' },
          { chunk: 'lapho eseqedile', gloss: 'when he has finished' }
        ]
      }
    ]
  },
  {
    id: 'pot-clinical-mobility',
    category: 'potential-mood',
    title: 'Functional Mobility & Independence Evaluation',
    subtitle: 'Clinical formulas for activities of daily living (ADLs), physiotherapy, and discharge fitness',
    formula: 'Potential Inquiry: Ungakwazi ukuhamba? / Angasukuma eyedwa?',
    explanation:
      'In rehabilitation, geriatrics, and trauma surgery, the potential mood is the primary syntactic mechanism for eliciting functional independence. Clinicians contrast actual current action (uyahamba = he is walking) with potential capability (angahamba = he can walk / has the physiological capacity). Key assessment phrases include: Ungakwazi ukugqoka wedwa? ("Can you dress yourself?"), Angasukuma embhedeni ngaphandle kosizo? ("Can he get up from the bed without help?"), and Ungabuyela emsebenzini ngeviki elizayo ("You may return to work next week").',
    commonPitfall:
      'Confusing capability with permission. Context determines whether *ungahamba* means "you have the ability to walk" or "you are cleared to go home". Pair with *ukwazi* (know/can) to strictly assess physical motor ability: *ungakwazi ukuhamba*.',
    rules: [
      'Motor ability: Combine potential mood with -kwazi: ungakwazi ukunyathela? (can you bear weight?).',
      'Discharge clearance: Ungagoduka namhlanje (You may go home today).',
      'Paresis / Stroke assessment: Angaphakamisa ingalo yesobunxele? (Can he lift the left arm?).',
      'Caregiver verification: Uyakwazi ukudla eyedwa? (Is he able to eat on his own?).'
    ],
    examples: [
      {
        id: 'pot-mob-ex-1',
        type: 'physiotherapy',
        isizulu: 'Ake ubone ukuthi ungakwazi yini ukunyathela kancane ngalo mlenze obuhlungu.',
        english: 'Let us see whether you can bear weight gently on this painful leg.',
        breakdown: [
          { chunk: 'Ake ubone ukuthi', gloss: 'let us see that / whether' },
          { chunk: 'u-nga-kwaz-i yini', gloss: 'can you (potential with -kwazi)' },
          { chunk: 'ukunyathela kancane', gloss: 'to step / bear weight gently' },
          { chunk: 'ngalo mlenze obuhlungu', gloss: 'on this painful leg' }
        ]
      },
      {
        id: 'pot-mob-ex-2',
        type: 'discharge',
        isizulu: 'Isiguli singagoduka manje ngoba sesiyakwazi ukudla nokuzisiza endlini encane.',
        english: 'The patient may discharge now because he is now able to eat and manage in the bathroom.',
        breakdown: [
          { chunk: 'Isiguli singagoduka', gloss: 'the patient may discharge/go home (Class 7 potential)' },
          { chunk: 'manje', gloss: 'now' },
          { chunk: 'ngoba sesiyakwazi ukudla', gloss: 'because he is now able to eat' },
          { chunk: 'nokuzisiza endlini encane', gloss: 'and help himself in the toilet/bathroom' }
        ]
      }
    ]
  }
];
