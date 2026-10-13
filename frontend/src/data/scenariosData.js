/**
 * Pre-filled Offline Community Scenarios Data
 * Text-only clinical and homestead dialogue practice with phonetic cues and detailed grammar breakdowns.
 */

export const SCENARIOS_DATA = [
  {
    id: 'gogo-mamthethwa',
    title: 'Gogo MaMthethwa — Ukubonisana (Life Counseling)',
    subtitle: 'Washed-out gravel roads, swollen feet, youth unemployment, unhurried elder pacing',
    difficulty: 'Flagship Community Core',
    duration: '4 Steps • ~8 min',
    persona: 'Gogo MaMthethwa (62yo homestead matriarch, rural KZN)',
    clinicalContext: 'Routine hypertension follow-up. Blood pressure recorded at 150/92 mmHg. Refill scripted. Moving beyond the prescription into holistic elder well-being.',
    conversationalObjective: 'Engage in "ukubonisana" (mutual life counseling). Validate the physical and emotional burden of elder caregiving, assess medication tolerability without blame, and nurture deep trust.',
    turns: [
      {
        turn: 1,
        patientText: 'Yebo dokotela mntanami, ngiyabonga kakhulu. Ekhaya kukhona okuhambayo, kodwa umgwaqo ubunzima kabi ngenxa yemvula, kanti futhi nezinyawo zami zivuvukile.',
        patientEnglish: 'Yes doctor my child, thank you very much. At home we get by, but the road was terribly difficult because of the rain, and furthermore my feet are swollen.',
        phoneticTextCue: 'Contracted vowels in "kukhon\'okuhambayo". Lengthened penultimate syllable on "yemvula" with a gentle downward pitch. Notice softer "v" in "zivuvukile".',
        grammarBreakdown: [
          {
            chunk: 'zi-vuvuk-ile',
            analysis: 'zi- (Class 10 concord for izinyawo) + -vuvuk- (root "swell") + -ile (stative perfect suffix)',
            rule: 'Stative suffix -ile expresses an ongoing state of physical swelling rather than a finished past action.'
          },
          {
            chunk: 'ng-enxa y-emvula',
            analysis: 'ng- (adverbial formative) + enxa ("reason/cause") + y- (Class 9 possessive concord) + e- (coalescence a + i from imvula)',
            rule: 'Vowel coalescence rule: ya- + imvula merges into "yemvula" (a + i → e).'
          },
          {
            chunk: 'm-ntanami',
            analysis: 'um- (Class 1 prefix) + ntwana ("child") + -ami (1st person possessive suffix)',
            rule: 'Kinship honorific contraction of "umntwana wami" used affectionately and respectfully by elders towards clinicians.'
          }
        ],
        doctorOptions: [
          {
            id: 'gogo-t1-opt1',
            text: 'Ake ungitshele gogo, imvula yonakalise imigwaqo kakhulu lapha ngakini?',
            english: 'Please tell me gogo, did the rain damage the roads badly over by your place?',
            nuance: 'Using the hortative "Ake" creates an unhurried, polite opening that validates the physical trial of traveling to the clinic.',
            grammarBreakdown: [
              {
                chunk: 'Ake',
                analysis: 'Hortative / polite optative particle',
                rule: 'Polite speech softener preceding subjunctive verb forms, translated as "kindly" or "please let".'
              },
              {
                chunk: 'u-ngi-tshel-e',
                analysis: 'u- (2nd person subject) + -ngi- (1st person object) + tshel- (root "tell") + -e (subjunctive final vowel)',
                rule: 'Subjunctive terminal -e required after hortative "ake" for polite requesting.'
              }
            ]
          },
          {
            id: 'gogo-t1-opt2',
            text: 'Ngiyaxolisa kabi gogo. Izinyawo ziqale nini ukukuvuvukela?',
            english: 'I am truly sorry gogo. When did your feet first start swelling up on you?',
            nuance: 'Combines empathetic bedside sympathy with an applicative inquiry into the onset and chronicity of peripheral oedema.',
            grammarBreakdown: [
              {
                chunk: 'u-ku-ku-vuvuk-el-a',
                analysis: 'uku- (infinitive) + -ku- (2nd person object) + -vuvuk- (root "swell") + -el- (applicative suffix) + -a',
                rule: 'Applicative extension -el- denotes an action directly affecting the patient ("swelling up upon you").'
              }
            ]
          }
        ]
      },
      {
        turn: 2,
        patientText: 'Aqale ngesonto eledlule mntanami. Umfana wami omncane usehlala nje engasebenzi, kanti futhi usengena kule mikhuba yama-whoonga, inhliziyo yami ibuhlungu.',
        patientEnglish: 'They started last week my child. My youngest boy just sits at home without work, and furthermore he is getting into these whoonga habits, my heart is in deep pain.',
        phoneticTextCue: 'Aspirated "ph" in "umfana". Notice elided final vowel in "usehlal\'nje" and stressed palatal click "nc" in "omncane". Tone drops solemnly on "ibuhlungu".',
        grammarBreakdown: [
          {
            chunk: 'a-qal-e',
            analysis: 'a- (Class 6 concord for amasonto / amadolo) + -qal- (root "start") + -e (recent perfect suffix)',
            rule: 'Short past perfect -e denotes an event completed within the immediate recent past.'
          },
          {
            chunk: 'e-nga-sebenz-i',
            analysis: 'e- (Class 1 participial concord) + -nga- (negative formative) + -sebenz- (root "work") + -i (negative final vowel)',
            rule: 'Participial negative employs infix -nga- and mutates stem vowel -a to -i ("while he is not working").'
          },
          {
            chunk: 'i-buhlungu',
            analysis: 'i- (Class 9 concord for inhliziyo) + buhlungu (copulative/adjective base "pain/grief")',
            rule: 'Somatic-emotional idiom: "inhliziyo ibuhlungu" signifies profound grief, anxiety, and caregiver distress.'
          }
        ],
        doctorOptions: [
          {
            id: 'gogo-t2-opt1',
            text: 'Kunzima kakhulu lokho gogo. Akulula ukuthwala umthwalo onzima kangaka wedwa.',
            english: 'That is exceedingly difficult gogo. It is not easy to carry such a heavy burden alone.',
            nuance: 'Validates caregiver loneliness and social stress before providing medical counsel, establishing safety.',
            grammarBreakdown: [
              {
                chunk: 'ku-nzima',
                analysis: 'ku- (Class 17 locative/impersonal concord) + -nzima (adjective stem "heavy/difficult")',
                rule: 'Impersonal Class 17 "ku-" functions as English "it is..." to express general states.'
              },
              {
                chunk: 'u-ku-thwal-a',
                analysis: 'uku- (infinitive nominal prefix) + -thwal- (root "bear/carry") + -a',
                rule: 'Infinitive verbal noun denoting the physical/emotional act of bearing weight.'
              }
            ]
          },
          {
            id: 'gogo-t2-opt2',
            text: 'Ngiyabuzwa ubuhlungu bakho. Ukhona yini omunye ekhaya okusizayo ngomntwana?',
            english: 'I feel your pain deeply. Is there anyone else at home who helps you with the boy?',
            nuance: 'Explores family support structures gently without judgment, assessing household resilience.',
            grammarBreakdown: [
              {
                chunk: 'ngi-ya-bu-zw-a',
                analysis: 'ngi- (1st person subject) + -ya- (continuous marker) + -bu- (Class 14 object for ubuhlungu) + -zw- (root "feel/hear")',
                rule: 'Explicit object concord -bu- with -ya- intensifies emotional empathy ("I genuinely feel that specific pain").'
              }
            ]
          }
        ]
      },
      {
        turn: 3,
        patientText: 'Lutho mntanami, ngisale ngedwa nobabakazi osekhulile. Kodwa dokotela, lawa maphilisi omfutho wegazi engiwaphuzayo, ngizwa engathi angicibilikisa amathumbu.',
        patientEnglish: 'Nothing my child, I am left alone with an elderly aunt. But doctor, these blood pressure pills that I drink, I feel as if they are melting my stomach.',
        phoneticTextCue: 'Aspirated "th" in "lutho" and voiced click "gc" in "engathi". The phrase "ngizwa engathi" flows seamlessly without pause.',
        grammarBreakdown: [
          {
            chunk: 'ngi-sal-e nge-dwa',
            analysis: 'ngi- (1st person subject) + -sal- (root "remain") + -e (stative perfect) + nge-dwa (adverbial "alone")',
            rule: 'Formative base -dwa combined with instrumental formative nge- produces solitary status ("by myself").'
          },
          {
            chunk: 'e-ngi-wa-phuz-a-yo',
            analysis: 'e- (relative concord Class 6) + -ngi- (1st person subject) + -wa- (Class 6 object for amaphilisi) + -phuz- (root "drink") + -a-yo (relative suffix)',
            rule: 'Full relative clause suffix -yo attaches to end of relative clause lacking following complement.'
          },
          {
            chunk: 'a-ngi-cibilikis-a',
            analysis: 'a- (Class 6 subject concord) + -ngi- (1st person object) + -cibilikis- (causative "cause to melt") + -a',
            rule: 'Causative extension -is- turns intransitive "cibilika" (melt) into transitive "cibilikisa" (dissolve/melt away).'
          }
        ],
        doctorOptions: [
          {
            id: 'gogo-t3-opt1',
            text: 'Amaphilisi akufanele akuphathe kabi esiswini gogo. Uwaphuza ngaphambi kokudla noma ngemva kokudla?',
            english: 'The pills should not distress your stomach gogo. Do you take them before meals or after eating?',
            nuance: 'Investigates medication timing and gastrointestinal side-effects without sounding critical.',
            grammarBreakdown: [
              {
                chunk: 'a-ku-fanel-e',
                analysis: 'a- (negative prefix) + ku- (impersonal concord) + -fanel- (stative "ought") + -e (negative final vowel)',
                rule: 'Modal negative construction translating to "it ought not to / it should not".'
              }
            ]
          },
          {
            id: 'gogo-t3-opt2',
            text: 'Kulungile gogo, sizowabheka lawo maphilisi. Singawabeka phansi kancane sidle kuqala.',
            english: 'Alright gogo, we will look into those pills. We can arrange that you eat first before taking them.',
            nuance: 'Offers immediate reassurance and practical bedside problem-solving.',
            grammarBreakdown: [
              {
                chunk: 'si-zo-wa-bhek-a',
                analysis: 'si- (1st person plural "we") + -zo- (future tense formative) + -wa- (Class 6 object) + -bhek- (root "examine") + -a',
                rule: 'Near definite future tense formative -zo- conveys direct clinician agency.'
              }
            ]
          }
        ]
      },
      {
        turn: 4,
        patientText: 'Ngiwaphuza ngingadlanga ngoba ekuseni ukudla kusuke kungekho. Kodwa ngiyabonga mntanami ngokungilalela. Angijwayele ukuthi odokotela bangilalele kangaka.',
        patientEnglish: 'I take them without eating because in the morning food is often not there. But thank you my child for listening to me. I am not accustomed to doctors listening to me like this.',
        phoneticTextCue: 'Penultimate vowel elongation on "ngokungilalela". Soft glide on "kungizwayo". Gentle exhalation on "angijwayele".',
        grammarBreakdown: [
          {
            chunk: 'ngi-nga-dla-nga',
            analysis: 'ngi- (1st person subject) + -nga- (negative participial) + -dla- (verb root "eat") + -nga (negative past suffix)',
            rule: 'Participial negative construction meaning "without having eaten / on an empty stomach".'
          },
          {
            chunk: 'ngo-ku-ngi-lalel-a',
            analysis: 'nga- (instrumental "for/by") + uku- (infinitive) + -ngi- (1st person object) + -lalel- (root "listen") + -a',
            rule: 'Prepositional coalescence: nga- + uku- combines to form "ngo-ku-" ("for listening to me").'
          },
          {
            chunk: 'a-ngi-jwayel-e',
            analysis: 'a- (negative prefix) + -ngi- (1st person subject) + -jwayel- (root "be accustomed") + -ile/-e (stative perfect)',
            rule: 'Negative stative verb meaning "I am not used to / not accustomed to".'
          }
        ],
        doctorOptions: [
          {
            id: 'gogo-t4-opt1',
            text: 'Impilo yakho ibalulekile kithi gogo. Sifuna uhambe lapha unakekile ngokugcwele.',
            english: 'Your life is valuable to us gogo. We want you to leave here feeling completely cared for.',
            nuance: 'Validates human dignity and builds reciprocal therapeutic trust for long-term health management.',
            grammarBreakdown: [
              {
                chunk: 'i-balulek-ile',
                analysis: 'i- (Class 9 concord) + -balulek- (neuter-passive "be of value") + -ile (stative suffix)',
                rule: 'Neuter extension -ek- conveys inherent quality or status of importance.'
              }
            ]
          },
          {
            id: 'gogo-t4-opt2',
            text: 'Kuhle kakhulu ukuthi sikhulume ngokukhululeka gogo. Sizokunika nalawo amaphilisi anomusa esiswini.',
            english: 'It is wonderful that we can speak freely gogo. We will also give you pills that are gentle on the stomach.',
            nuance: 'Affirms that patient transparency directly produces gentle, individualized medical care.',
            grammarBreakdown: [
              {
                chunk: 'a-no-musa',
                analysis: 'a- (Class 6 relative concord) + na- (associative "with") + umusa (Class 3 noun "grace/kindness")',
                rule: 'Associative relative formation na- + umusa → "anomusa" meaning "gentle / gracious".'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'roadside-greeting',
    title: 'The Roadside Greeting — Ukubingelela & News',
    subtitle: 'Respectful homestead approach, inquiring after household welfare, weather & kinship honorifics',
    difficulty: 'Community Outreach Foundation',
    duration: '4 Steps • ~6 min',
    persona: 'Baba Mthembu (Elder homestead head encountered on outreach trail)',
    clinicalContext: 'Mobile clinic outreach team walking between homesteads in northern KwaZulu-Natal hills. Encountering a resident outside a family homestead kraal.',
    conversationalObjective: 'Master respectful Nguni greeting protocols. Honor elder status with plural concord ("Sanibona"), inquire after homestead welfare before health screening, and discuss drought/water realities.',
    turns: [
      {
        turn: 1,
        patientText: 'Sanibona dokotela. Niphume ngezinyawo namhlanje emakhaya? Ilanga lishisa kabi kuleli gquma.',
        patientEnglish: 'Greetings doctor. Have you set out on foot today in the village? The sun is burning terribly on this hill.',
        phoneticTextCue: 'Respectful plural greeting "Sanibona" acknowledges the ancestral presence. Voiced click "gq" in "egquma". Penultimate vowel lengthening on "namhlanje".',
        grammarBreakdown: [
          {
            chunk: 'Sa-ni-bona',
            analysis: 'sa- (past continuous formative) + -ni- (2nd person plural concord "you all") + -bona (verb "see")',
            rule: 'Cultural imperative: addressing a single elder or professional with plural "ni-" honors lineage and shows deep respect.'
          },
          {
            chunk: 'ni-phum-e nge-zinyawo',
            analysis: 'ni- (2nd person plural concord) + -phum- (root "exit/go out") + -e (recent perfect) + nga- (instrumental) + izinyawo ("feet")',
            rule: 'Instrumental prefix "nge-" with Class 10 noun "izinyawo" forms the colloquial idiom "on foot / walking".'
          },
          {
            chunk: 'li-shis-a ka-bi',
            analysis: 'li- (Class 5 concord for ilanga) + -shis- (root "burn/be hot") + -a + ka- (adverbial prefix) + -bi (adjective stem "bad")',
            rule: 'Adverbial formative ka- converts stem -bi into intensifier adverb "kabi" ("terribly / intensely").'
          }
        ],
        doctorOptions: [
          {
            id: 'road-t1-opt1',
            text: 'Yebo baba, sibona nina. Sakubona! Sinqume ukuhamba ngezinyawo sizobona umphakathi.',
            english: 'Yes father, we see you too. Greetings! We decided to walk on foot to come see the community.',
            nuance: 'Classic Nguni reciprocal greeting ("sibona nina" - we see you) honoring the elder\'s welcome.',
            grammarBreakdown: [
              {
                chunk: 'si-bon-a nin-a',
                analysis: 'si- (1st person plural "we") + -bon- (root "see") + -a + nina (2nd person plural absolute pronoun)',
                rule: 'Standard polite Nguni response reciprocating collective mutual recognition.'
              }
            ]
          },
          {
            id: 'road-t1-opt2',
            text: 'Yebo mkhulu, ilanga lishisa impela! Ake silale phansi komthunzi kancane.',
            english: 'Yes elder, the sun is fierce indeed! Let us step into the shade for a moment.',
            nuance: 'Acknowledges the physical climate immediately, expressing concern for elder physical comfort.',
            grammarBreakdown: [
              {
                chunk: 'Ake si-lal-e',
                analysis: 'Ake (hortative particle) + si- (1st person plural) + -lal- (root "rest/lie") + -e (subjunctive final vowel)',
                rule: 'Cohortative polite proposal: "let us take respite".'
              }
            ]
          }
        ]
      },
      {
        turn: 2,
        patientText: 'Kuhle lokho dokotela. Abantu balapha bajabule kakhulu uma bezwa ukuthi umtholampilo ufikile eduze. Baphila kanjani kodwa abasebenzi bonke?',
        patientEnglish: 'That is wonderful doctor. The people here are very glad when they hear the mobile clinic has arrived nearby. But how are all the staff members doing?',
        phoneticTextCue: 'Gentle glide "w" in "bajabule". Rapid vowel contraction in "ukuth\'umtholampilo". High melodic tone on "bonke".',
        grammarBreakdown: [
          {
            chunk: 'ba-jabul-e ka-khulu',
            analysis: 'ba- (Class 2 concord for abantu) + -jabul- (verb "rejoice") + -e (stative perfect) + kakhulu (adverb "greatly")',
            rule: 'Stative suffix -e expresses a sustained state of communal gratitude.'
          },
          {
            chunk: 'u-mtholampilo u-fik-ile',
            analysis: 'um- (Class 3 prefix) + thola ("find") + impilo ("health/life") + u- (Class 3 concord) + -fik- (arrive) + -ile',
            rule: 'Compound medical noun: "um-thola-mpilo" literally translates as "the sanctuary where life/health is obtained".'
          },
          {
            chunk: 'ba-phil-a kanjani',
            analysis: 'ba- (Class 2 concord for abasebenzi) + -phil- (verb "live/be healthy") + -a + kanjani (interrogative adverb "how")',
            rule: 'Traditional etiquette: inquiring after the health and families of visitors before talking business.'
          }
        ],
        doctorOptions: [
          {
            id: 'road-t2-opt1',
            text: 'Siphila kahle kakhulu baba, sithokozile ukuba lapha. Baphila kanjani bona abasekhaya kini?',
            english: 'We are very well father, we are glad to be here. How are those at home with you doing?',
            nuance: 'Completes the reciprocal social cycle before transitioning into health screening.',
            grammarBreakdown: [
              {
                chunk: 'si-thokoz-ile',
                analysis: 'si- (1st person plural) + -thokoz- (root "be glad") + -ile (stative suffix)',
                rule: 'Reflects present state of contentment and satisfaction.'
              },
              {
                chunk: 'aba-s-e-khaya',
                analysis: 'aba- (Class 2 concord) + -s- (euphonic bridge) + e- (locative prefix) + khaya ("home")',
                rule: 'Locative relative noun referring collectively to homestead members ("those of the home").'
              }
            ]
          },
          {
            id: 'road-t2-opt2',
            text: 'Bonke baphilile baba, siyabonga. Nathi sizimisele ukuletha usizo lwezempilo emndenini.',
            english: 'All are well father, we give thanks. We too are dedicated to bringing healthcare assistance to the family.',
            nuance: 'Highlights clinical service as a humble partnership with community leadership.',
            grammarBreakdown: [
              {
                chunk: 'si-zimisel-e',
                analysis: 'si- (1st person plural) + -zimisel- (reflexive stative root "be resolved/dedicated") + -e',
                rule: 'Stative verb expressing proactive dedication.'
              }
            ]
          }
        ]
      },
      {
        turn: 3,
        patientText: 'Ekhaya bakhona baba, kodwa amanzi ayinkinga ngoba umthombo useduze kwebhuloho womile. Sidinga ukuhamba ibanga elide ukukha emfuleni.',
        patientEnglish: 'At home they are there father, but water is a crisis because the spring near the bridge has dried up. We have to walk a long distance to fetch from the river.',
        phoneticTextCue: 'Alveolar click "nq" in "inkinga". Soft "f" in "emfuleni". Notice contracted vowel in "useduz\'kwebhuloho".',
        grammarBreakdown: [
          {
            chunk: 'a-manzi a-y-in-kinga',
            analysis: 'a- (Class 6 prefix) + manzi + a- (Class 6 concord) + -y- (euphonic glide) + inkinga (Class 9 noun "problem")',
            rule: 'Copulative construction with noun predicate: "water is indeed a crisis".'
          },
          {
            chunk: 'u-m-thombo w-om-ile',
            analysis: 'um- (Class 3 prefix) + thombo ("spring") + w- (Class 3 concord) + -om- (root "dry up") + -ile (stative perfect)',
            rule: 'Stative form describes the dry physical state of the natural spring.'
          },
          {
            chunk: 'u-ku-kh-a e-m-fuleni',
            analysis: 'uku- (infinitive) + -kh- (monosyllabic root "dip/draw water") + -a + e-...-eni (locative affixes with umfula)',
            rule: 'Locative nominal inflection: umfula (river) takes e- and -eni → "emfuleni" (at the river).'
          }
        ],
        doctorOptions: [
          {
            id: 'road-t3-opt1',
            text: 'Kunzima kakhulu lokho baba. Ukuphuza amanzi angahlanzekile kungenza abantwana bashintshe isisu.',
            english: 'That is very hard father. Drinking untreated water can cause children to have diarrhoea.',
            nuance: 'Validates drought adversity while politely introducing clean water safety using culturally respectful euphemisms.',
            grammarBreakdown: [
              {
                chunk: 'a-nga-hlanzek-ile',
                analysis: 'a- (Class 6 relative concord) + -nga- (negative formative) + -hlanzek- (root "be clean") + -ile',
                rule: 'Negative relative construction: "which is not clean / unpurified".'
              },
              {
                chunk: 'ba-shintsh-e isisu',
                analysis: 'ba- (Class 2 concord) + -shintsh- (root "change") + -e (subjunctive) + isisu ("stomach")',
                rule: 'Respectful clinical euphemism for acute watery diarrhoea ("changing the stomach").'
              }
            ]
          },
          {
            id: 'road-t3-opt2',
            text: 'Ngiyayizwa leyo nkinga yomthombo. Ngabe niyawabilisa yini amanzi ngaphambi kokuwaphuza?',
            english: 'I understand that struggle with the spring. Do you happen to boil the water before drinking it?',
            nuance: 'Politely screens for household water purification methods in a non-judgmental conversational tone.',
            grammarBreakdown: [
              {
                chunk: 'Ngabe ni-ya-wa-bilis-a',
                analysis: 'Ngabe (polite interrogative particle) + ni- (2nd person plural) + -ya- (continuous) + -wa- (Class 6 object) + -bilis- (causative "boil") + -a',
                rule: 'Interrogative particle "Ngabe" softens direct inquiries into polite curiosities.'
              }
            ]
          }
        ]
      },
      {
        turn: 4,
        patientText: 'Siyawabilisa lapho kukhona izinkuni, kodwa kwesinye isikhathi izinkuni ziyashoda ngenxa yemvula. Siyabonga ngokusixwayisa dokotela.',
        patientEnglish: 'We boil it when there is firewood, but sometimes firewood runs short because of the rain. Thank you for cautioning us doctor.',
        phoneticTextCue: 'Notice sharp lateral click "x" in "ngokusixwayisa". Melodic cadence on "izinkuni ziyashoda".',
        grammarBreakdown: [
          {
            chunk: 'zi-ya-shod-a',
            analysis: 'zi- (Class 10 concord for izinkuni) + -ya- (present tense) + -shod- (loan root from English "short") + -a',
            rule: 'Colloquial adaptation of "short" inflected with standard Nguni concordial agreement.'
          },
          {
            chunk: 'ngo-ku-si-xwayis-a',
            analysis: 'nga- (instrumental) + uku- (infinitive) + -si- (1st person plural object "us") + -xwayis- (causative root "warn/caution") + -a',
            rule: 'Causative verb "xwayisa" denotes cautionary awareness or preventive clinical advice.'
          }
        ],
        doctorOptions: [
          {
            id: 'road-t4-opt1',
            text: 'Kuhle kakhulu baba. Sizoletha namaphilisi e-Jik emtholampilo azosiza ekuhlanzeni amanzi.',
            english: 'Very good father. We will also bring water purification tablets to the mobile clinic that will help purify water.',
            nuance: 'Provides direct, feasible preventative public health solutions suitable for rural homestead realities.',
            grammarBreakdown: [
              {
                chunk: 'a-zo-siz-a',
                analysis: 'a- (Class 6 relative concord) + -zo- (future tense marker) + -siz- (root "help") + -a',
                rule: 'Relative future construction meaning "which will assist".'
              }
            ]
          },
          {
            id: 'road-t4-opt2',
            text: 'Hambani kahle baba, nibe nosuku oluhle nomndeni wonke ekhaya.',
            english: 'Go well father, and have a blessed day with the whole family at home.',
            nuance: 'Classic Nguni farewell blessing closing the roadside encounter with full mutual respect.',
            grammarBreakdown: [
              {
                chunk: 'Hamba-ni kahle',
                analysis: 'hamba (root "go") + -ni (plural imperative suffix) + kahle (adverb "well")',
                rule: 'Polite plural imperative farewell addressed to an elder ("go ye well").'
              }
            ]
          }
        ]
      }
    ]
  }
];

export function getScenarioById(id) {
  return SCENARIOS_DATA.find((s) => s.id === id) || SCENARIOS_DATA[0];
}
