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
  // CATEGORY 2: THE STATIVE ASPECT
  // ==========================================
  {
    id: 'stative-physical-states',
    category: 'stative',
    title: 'The Stative Mechanism (Bodily & Mental States)',
    subtitle: 'Using past suffixes (-ile / -e) to describe current ongoing conditions',
    formula: 'Subject Concord + Verb Root + -ile / -e',
    explanation:
      'Verbs of state in isiZulu describe entering a condition in the past whose resulting state is active right now. While they use the past suffix (-ile / -e), they represent present physical, bodily, or emotional reality. Do NOT translate as English past tense.',
    commonPitfall:
      'Translating "ngikhathele" as "I got tired" instead of "I am tired", or "izinyawo zivuvukile" as "feet became swollen" instead of "feet are swollen".',
    rules: [
      'Process verb -> Ongoing state: -khathala (get tired) -> ngikhathele ("I am tired")',
      'Swelling / inflammation: -vuvuka (swell) -> zivuvukile ("they are swollen")',
      'Sleeping / posture: -lala (lie down) -> ulele ("he/she is asleep / lying down")',
      'Hunger / thirst: -lamba (become hungry) -> ngilambile ("I am hungry")',
      'Standing: -ma (stand up) -> umile ("he/she is standing")'
    ],
    examples: [
      {
        id: 'stative-ex-1',
        type: 'clinical',
        isizulu: 'Izinyawo zivuvukile kakhulu ngenxa yokuhamba ibanga elide.',
        english: 'The feet are very swollen because of walking a long distance.',
        breakdown: [
          { chunk: 'Izinyawo', gloss: 'Class 10 noun (feet)' },
          { chunk: 'zi-vuvuk-ile', gloss: 'zi- (SC 10) + -vuvuka (swell) + -ile (full stative suffix: "are currently swollen")' },
          { chunk: 'kakhulu', gloss: 'adverb of degree (very / severely)' },
          { chunk: 'ngenxa yokuhamba', gloss: 'ngenxa (because of) + yokuhamba (possessive infinitive: "of walking")' },
          { chunk: 'ibanga elide', gloss: 'ibanga (Class 5 noun: distance) + elide (adjective: long)' }
        ]
      },
      {
        id: 'stative-ex-2',
        type: 'clinical',
        isizulu: 'Gogo, ukhathele yini? Ake uhlale phansi uphumule kancane.',
        english: 'Gogo, are you tired? Please sit down and rest a little.',
        breakdown: [
          { chunk: 'u-khathel-e', gloss: 'u- (2nd person singular SC) + -khathala (tire) + -e (contracted stative ending before question particle: "are you tired?")' },
          { chunk: 'yini?', gloss: 'interrogative particle (or what? / question marker)' },
          { chunk: 'Ake', gloss: 'polite hortative conjunction (please / let)' },
          { chunk: 'u-hlal-e phansi', gloss: 'u- (SC) + -hlala (sit) + -e (subjunctive ending) + phansi (down)' },
          { chunk: 'u-phumul-e kancane', gloss: 'u- (SC) + -phumula (rest) + -e (subjunctive ending) + kancane (a little)' }
        ]
      }
    ]
  },
  {
    id: 'stative-contracted-rule',
    category: 'stative',
    title: 'Contracted Stative Rule (-ile vs -e)',
    subtitle: 'Dropping from -ile to -e when immediately followed by a complement or adverb',
    formula: 'Sentence-final/Pause: [Verb + -ile] | Followed by word: [Verb + -e + Compl/Adv]',
    explanation:
      'In isiZulu phonology and syntax, the stative suffix -ile contracts to -e whenever additional informational words (adverbs, prepositional locatives, nouns) directly follow the verb in the same clause.',
    commonPitfall:
      'Retaining -ile before an adverb: Saying *Ngilambile kakhulu instead of the grammatical Ngilambe kakhulu. Whenever a complement follows, use -e.',
    rules: [
      'Sentence Final: "Ngilambile." (I am hungry. Full form -ile)',
      'With Adverb: "Ngilambe kakhulu." (I am very hungry. Contracted form -e)',
      'Sentence Final: "Umntwana ulele." (The child is asleep. Irregular stative -lele)',
      'With Locative: "Umntwana ulele embhedeni." (The child is asleep on the bed)',
      'Clinical: "Isifuba sivalekile." (The chest is congested.) vs "Sivaleke kabi." (It is severely congested.)'
    ],
    examples: [
      {
        id: 'stative-cont-ex-1',
        type: 'clinical',
        isizulu: 'Isifuba sivaleke kabi namuhla, ngicela ungilalele ngesithuluzi.',
        english: 'My chest is severely congested today, please listen to me with the stethoscope.',
        breakdown: [
          { chunk: 'Isifuba', gloss: 'Class 7 noun (chest)' },
          { chunk: 'si-valek-e', gloss: 'si- (SC 7) + -valeka (become blocked/congested) + -e (contracted stative ending before adverb kabi: "is congested")' },
          { chunk: 'kabi namuhla', gloss: 'kabi (badly/severely) + namuhla (today)' },
          { chunk: 'ngicela ungilalele', gloss: 'ngicela (I request) + u- (SC) + -ngi- (me) + -lalele (listen to: subjunctive)' },
          { chunk: 'ngesithuluzi', gloss: 'nge- (with) + isithuluzi (tool/instrument/stethoscope)' }
        ]
      },
      {
        id: 'stative-cont-ex-2',
        type: 'community',
        isizulu: 'Siphelelwe yimali yokugibela itekisi eya edolobheni.',
        english: 'We have run out of money to ride the taxi to town.',
        breakdown: [
          { chunk: 'Si-phelelw-e', gloss: 'si- (1st person plural SC) + -phelelwa (run out of / be depleted of) + -e (contracted stative suffix before agentive yimali)' },
          { chunk: 'yimali', gloss: 'yi- (copulative agentive prefix) + imali (Class 9 noun: "by money")' },
          { chunk: 'yokugibela', gloss: 'ya- (possessive concord) + ukugibela (to ride/board)' },
          { chunk: 'itekisi', gloss: 'Class 9 noun (minibus taxi)' },
          { chunk: 'eya edolobheni', gloss: 'eya (relative verb: which goes) + edolobheni (locative: to town)' }
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
