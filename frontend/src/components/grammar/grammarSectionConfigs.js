import { Clock, Activity, GitFork, FastForward, Table, Repeat, MapPin, Zap, Target, Sparkles, UserCheck, Navigation, AlertCircle, Scale, HelpCircle, ShieldAlert } from 'lucide-react';
import {
  PAST_PRACTICE_CHECKPOINTS,
  STATIVE_PRACTICE_CHECKPOINTS,
  CONJUNCTION_PRACTICE_CHECKPOINTS,
  ASPECT_INFIX_CHECKPOINTS,
  VERBAL_EXTENSIONS_CHECKPOINTS,
  COPULATIVE_LOCATIVE_CHECKPOINTS,
  DEFICIENT_VERBS_CHECKPOINTS,
  OBJECT_CONCORD_CHECKPOINTS,
  QUALIFICATIVE_CHECKPOINTS,
  PRONOUNS_CHECKPOINTS,
  DEMONSTRATIVES_CHECKPOINTS,
  POTENTIAL_MOOD_CHECKPOINTS,
  IMPERATIVES_CHECKPOINTS,
  FORMATIVES_CHECKPOINTS,
  INTERROGATIVES_CHECKPOINTS,
  NEGATION_CHECKPOINTS
} from '../../data/grammarData';
import {
  PastConcordTable,
  StativeMutationTable,
  ConjunctionGovernanceTable,
  AspectInfixTable,
  VerbalExtensionsTable,
  CopulativesLocativesTable,
  DeficientVerbsTable,
  ObjectConcordsTable,
  QualificativesTable,
  PronounsTable,
  DemonstrativesTable,
  PotentialMoodTable,
  ImperativesTable,
  FormativesTable,
  InterrogativesTable,
  NegationTable
} from './GrammarSectionTables';



export const CATEGORY_THEMES = {
  'past-tenses': {
    badge: 'bg-indigo-950/80 text-indigo-300 border-indigo-800/80',
    border: 'border-indigo-900/50 hover:border-indigo-600/70',
    cardBg: 'from-indigo-950/30 to-slate-900/90',
    formulaBg: 'bg-indigo-950/60 border-indigo-800/50 text-indigo-200',
    iconBg: 'bg-indigo-950/80 border-indigo-800/80 text-indigo-400',
    codeBadge: 'bg-indigo-950 text-indigo-300 border-indigo-800/60'
  },
  'stative': {
    badge: 'bg-teal-950/80 text-teal-300 border-teal-800/80',
    border: 'border-teal-900/50 hover:border-teal-600/70',
    cardBg: 'from-teal-950/30 to-slate-900/90',
    formulaBg: 'bg-teal-950/60 border-teal-800/50 text-teal-200',
    iconBg: 'bg-teal-950/80 border-teal-800/80 text-teal-400',
    codeBadge: 'bg-teal-950 text-teal-300 border-teal-800/60'
  },
  'conjunctions': {
    badge: 'bg-amber-950/80 text-amber-300 border-amber-800/80',
    border: 'border-amber-900/50 hover:border-amber-600/70',
    cardBg: 'from-amber-950/30 to-slate-900/90',
    formulaBg: 'bg-amber-950/60 border-amber-800/50 text-amber-200',
    iconBg: 'bg-amber-950/80 border-amber-800/80 text-amber-400',
    codeBadge: 'bg-amber-950 text-amber-300 border-amber-800/60'
  },
  'aspect-infixes': {
    badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80',
    border: 'border-emerald-900/50 hover:border-emerald-600/70',
    cardBg: 'from-emerald-950/30 to-slate-900/90',
    formulaBg: 'bg-emerald-950/60 border-emerald-800/50 text-emerald-200',
    iconBg: 'bg-emerald-950/80 border-emerald-800/80 text-emerald-400',
    codeBadge: 'bg-emerald-950 text-emerald-300 border-emerald-800/60'
  },
  'verbal-extensions': {
    badge: 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-800/80',
    border: 'border-fuchsia-900/50 hover:border-fuchsia-600/70',
    cardBg: 'from-fuchsia-950/30 to-slate-900/90',
    formulaBg: 'bg-fuchsia-950/60 border-fuchsia-800/50 text-fuchsia-200',
    iconBg: 'bg-fuchsia-950/80 border-fuchsia-800/80 text-fuchsia-400',
    codeBadge: 'bg-fuchsia-950 text-fuchsia-300 border-fuchsia-800/60'
  },
  'copulatives-locatives': {
    badge: 'bg-rose-950/80 text-rose-300 border-rose-800/80',
    border: 'border-rose-900/50 hover:border-rose-600/70',
    cardBg: 'from-rose-950/30 to-slate-900/90',
    formulaBg: 'bg-rose-950/60 border-rose-800/50 text-rose-200',
    iconBg: 'bg-rose-950/80 border-rose-800/80 text-rose-400',
    codeBadge: 'bg-rose-950 text-rose-300 border-rose-800/60'
  },
  'deficient-verbs': {
    badge: 'bg-sky-950/80 text-sky-300 border-sky-800/80',
    border: 'border-sky-900/50 hover:border-sky-600/70',
    cardBg: 'from-sky-950/30 to-slate-900/90',
    formulaBg: 'bg-sky-950/60 border-sky-800/50 text-sky-200',
    iconBg: 'bg-sky-950/80 border-sky-800/80 text-sky-400',
    codeBadge: 'bg-sky-950 text-sky-300 border-sky-800/60'
  },
  'object-concords': {
    badge: 'bg-blue-950/80 text-blue-300 border-blue-800/80',
    border: 'border-blue-900/50 hover:border-blue-600/70',
    cardBg: 'from-blue-950/30 to-slate-900/90',
    formulaBg: 'bg-blue-950/60 border-blue-800/50 text-blue-200',
    iconBg: 'bg-blue-950/80 border-blue-800/80 text-blue-400',
    codeBadge: 'bg-blue-950 text-blue-300 border-blue-800/60'
  },
  'qualificatives': {
    badge: 'bg-orange-950/80 text-orange-300 border-orange-800/80',
    border: 'border-orange-900/50 hover:border-orange-600/70',
    cardBg: 'from-orange-950/30 to-slate-900/90',
    formulaBg: 'bg-orange-950/60 border-orange-800/50 text-orange-200',
    iconBg: 'bg-orange-950/80 border-orange-800/80 text-orange-400',
    codeBadge: 'bg-orange-950 text-orange-300 border-orange-800/60'
  },
  'pronouns': {
    badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/80',
    border: 'border-cyan-900/50 hover:border-cyan-600/70',
    cardBg: 'from-cyan-950/30 to-slate-900/90',
    formulaBg: 'bg-cyan-950/60 border-cyan-800/50 text-cyan-200',
    iconBg: 'bg-cyan-950/80 border-cyan-800/80 text-cyan-400',
    codeBadge: 'bg-cyan-950 text-cyan-300 border-cyan-800/60'
  },
  'demonstratives': {
    badge: 'bg-amber-950/80 text-amber-300 border-amber-800/80',
    border: 'border-amber-900/50 hover:border-amber-600/70',
    cardBg: 'from-amber-950/30 to-slate-900/90',
    formulaBg: 'bg-amber-950/60 border-amber-800/50 text-amber-200',
    iconBg: 'bg-amber-950/80 border-amber-800/80 text-amber-400',
    codeBadge: 'bg-amber-950 text-amber-300 border-amber-800/60'
  },
  'potential-mood': {
    badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80',
    border: 'border-emerald-900/50 hover:border-emerald-600/70',
    cardBg: 'from-emerald-950/30 to-slate-900/90',
    formulaBg: 'bg-emerald-950/60 border-emerald-800/50 text-emerald-200',
    iconBg: 'bg-emerald-950/80 border-emerald-800/80 text-emerald-400',
    codeBadge: 'bg-emerald-950 text-emerald-300 border-emerald-800/60'
  },
  'imperatives-prohibitions': {
    badge: 'bg-red-950/80 text-red-300 border-red-800/80',
    border: 'border-red-900/50 hover:border-red-600/70',
    cardBg: 'from-red-950/30 to-slate-900/90',
    formulaBg: 'bg-red-950/60 border-red-800/50 text-red-200',
    iconBg: 'bg-red-950/80 border-red-800/80 text-red-400',
    codeBadge: 'bg-red-950 text-red-300 border-red-800/60'
  },
  'formatives': {
    badge: 'bg-teal-950/80 text-teal-300 border-teal-800/80',
    border: 'border-teal-900/50 hover:border-teal-600/70',
    cardBg: 'from-teal-950/30 to-slate-900/90',
    formulaBg: 'bg-teal-950/60 border-teal-800/50 text-teal-200',
    iconBg: 'bg-teal-950/80 border-teal-800/80 text-teal-400',
    codeBadge: 'bg-teal-950 text-teal-300 border-teal-800/60'
  },
  'interrogatives': {
    badge: 'bg-indigo-950/80 text-indigo-300 border-indigo-800/80',
    border: 'border-indigo-900/50 hover:border-indigo-600/70',
    cardBg: 'from-indigo-950/30 to-slate-900/90',
    formulaBg: 'bg-indigo-950/60 border-indigo-800/50 text-indigo-200',
    iconBg: 'bg-indigo-950/80 border-indigo-800/80 text-indigo-400',
    codeBadge: 'bg-indigo-950 text-indigo-300 border-indigo-800/60'
  },
  'negation': {
    badge: 'bg-purple-950/80 text-purple-300 border-purple-800/80',
    border: 'border-purple-900/50 hover:border-purple-600/70',
    cardBg: 'from-purple-950/30 to-slate-900/90',
    formulaBg: 'bg-purple-950/60 border-purple-800/50 text-purple-200',
    iconBg: 'bg-purple-950/80 border-purple-800/80 text-purple-400',
    codeBadge: 'bg-purple-950 text-purple-300 border-purple-800/60'
  }
};

export const DEFAULT_CATEGORY_THEME = {
  badge: 'bg-slate-900 text-slate-300 border-slate-700',
  border: 'border-slate-800 hover:border-slate-700',
  cardBg: 'from-slate-900 to-slate-950',
  formulaBg: 'bg-slate-950 border-slate-800 text-slate-200',
  iconBg: 'bg-slate-900 border-slate-800 text-slate-400',
  codeBadge: 'bg-slate-900 text-slate-400 border-slate-800'
};

export const SECTION_CONFIGS = {
  'past-tenses': {
    theme: 'indigo',
    tableIcon: Clock,
    tableTitle: 'Past Concord & Auxiliary Reference Matrix',
    tableSubtitle: 'Direct comparison across Immediate Continuous (be-), Remote Simple (-a-), and Remote Continuous (ngangi-).',
    tableBadge: '7 Core Forms',
    TableComponent: PastConcordTable,
    practiceTitle: 'Interactive Checkpoint: History-Taking Clinical Self-Check',
    practiceSubtitle: 'Practice distinguishing recent background events, remote chronic habits, and past negation.',
    checkpoints: PAST_PRACTICE_CHECKPOINTS,
    drillCategory: 'past',
    drillTitle: 'Past History'
  },
  'stative': {
    theme: 'teal',
    tableIcon: Table,
    tableTitle: 'High-Yield Stative Mutation Reference Grid',
    tableSubtitle: 'Direct comparison of process root, present positive, and present negative.',
    tableBadge: '10 Core Stems',
    TableComponent: StativeMutationTable,
    practiceTitle: 'Interactive Checkpoint: Bedside Self-Test',
    practiceSubtitle: 'Practice applying the contraction rule, irregular mutations, and negative retention.',
    checkpoints: STATIVE_PRACTICE_CHECKPOINTS,
    drillCategory: 'stative',
    drillTitle: 'Stative Practice'
  },
  'conjunctions': {
    theme: 'amber',
    tableIcon: GitFork,
    tableTitle: 'Clause Governance & Conjunction Matrix',
    tableSubtitle: 'Direct reference comparing conjunction particle, induced mood, verb vowel mutation, and negative formation.',
    tableBadge: '8 Key Conjunctions',
    TableComponent: ConjunctionGovernanceTable,
    practiceTitle: 'Interactive Checkpoint: Clause Governance Clinical Self-Check',
    practiceSubtitle: 'Practice applying subjunctive purpose triggers (-e), participial shifts (e-), and multi-clause discharge warnings.',
    checkpoints: CONJUNCTION_PRACTICE_CHECKPOINTS,
    drillCategory: 'conjunctions',
    drillTitle: 'Clause Governance'
  },
  'aspect-infixes': {
    theme: 'emerald',
    tableIcon: FastForward,
    tableTitle: 'Symptom Trajectory & Aspect Infix Matrix',
    tableSubtitle: 'Direct comparison across progressive continuity (-sa-), transition (se-), pending completion (-ka-), and episodic history (-ke-).',
    tableBadge: '4 Temporal Infixes',
    TableComponent: AspectInfixTable,
    practiceTitle: 'Interactive Checkpoint: Symptom Trajectory & Aspect Infix Self-Check',
    practiceSubtitle: 'Practice assessing symptom persistence (-sa-), pending diagnostic turnaround (-ka-), and episodic allergic history (-ke-).',
    checkpoints: ASPECT_INFIX_CHECKPOINTS,
    drillCategory: 'aspect',
    drillTitle: 'Symptom Trajectory'
  },
  'verbal-extensions': {
    theme: 'fuchsia',
    tableIcon: Repeat,
    tableTitle: 'Verbal Extensions & Sound Mutation Matrix',
    tableSubtitle: 'Direct comparison across derivational suffixes, meaning alterations, labial shifts, and clinical applications.',
    tableBadge: '5 Core Extensions',
    TableComponent: VerbalExtensionsTable,
    practiceTitle: 'Interactive Checkpoint: Verbal Extension & Mutation Self-Check',
    practiceSubtitle: 'Practice applying passive palatalization, causative medication effects, and applicative preparation.',
    checkpoints: VERBAL_EXTENSIONS_CHECKPOINTS,
    drillCategory: 'extensions',
    drillTitle: 'Verbal Extensions'
  },
  'copulatives-locatives': {
    theme: 'rose',
    tableIcon: MapPin,
    tableTitle: 'Noun Class Copulative & Locative Matrix',
    tableSubtitle: 'Direct reference comparing noun class, identification copulative, negative copulative, and locative palatalization.',
    tableBadge: '6 Noun Classes',
    TableComponent: CopulativesLocativesTable,
    practiceTitle: 'Interactive Checkpoint: Copulatives & Locatives Clinical Self-Check',
    practiceSubtitle: 'Practice identifying chronic diseases, detecting oral sores via palatalized locatives, and confirming clinic presence.',
    checkpoints: COPULATIVE_LOCATIVE_CHECKPOINTS,
    drillCategory: 'copulatives',
    drillTitle: 'Copulatives & Locatives'
  },
  'deficient-verbs': {
    theme: 'sky',
    tableIcon: Zap,
    tableTitle: 'Auxiliary Verbs & Mood Chaining Matrix',
    tableSubtitle: 'Direct reference comparing defective auxiliary stems, core meanings, governed moods, and clinical syntax.',
    tableBadge: '6 Core Stems',
    TableComponent: DeficientVerbsTable,
    practiceTitle: 'Interactive Checkpoint: Clinical Auxiliary & Mood Chaining Self-Check',
    practiceSubtitle: 'Practice near-fall elicitation (-cishe), adherence warnings (-phinde), and hortative prompting (-vele).',
    checkpoints: DEFICIENT_VERBS_CHECKPOINTS,
    drillCategory: 'deficient-verbs',
    drillTitle: 'Deficient Verbs Practice'
  },
  'object-concords': {
    theme: 'blue',
    tableIcon: Target,
    tableTitle: 'Object Concord & Reflexive Reference Matrix',
    tableSubtitle: 'Direct comparison across noun class concords, pre-radical placement, definite dual-mention, and the reflexive prefix -zi-.',
    tableBadge: '11 Core Classes',
    TableComponent: ObjectConcordsTable,
    practiceTitle: 'Interactive Checkpoint: Object Concord & Pronoun Infix Self-Check',
    practiceSubtitle: 'Practice medication adherence (-wa-), clinical instructions (-ku-), and reflexive well-being (-zi-).',
    checkpoints: OBJECT_CONCORD_CHECKPOINTS,
    drillCategory: 'object-concords',
    drillTitle: 'Object Concords Practice'
  },
  'qualificatives': {
    theme: 'orange',
    tableIcon: Sparkles,
    tableTitle: 'The Qualificative System: Adjectives & Relatives Matrix',
    tableSubtitle: 'Direct comparison across noun classes: double concord True Adjectives, single concord Relatives, and attributive vs predicative shifts.',
    tableBadge: '8 Core Classes',
    TableComponent: QualificativesTable,
    practiceTitle: 'Interactive Checkpoint: Qualificative & Clinical Description Self-Check',
    practiceSubtitle: 'Practice distinguishing double vs single concords, verbal relative -yo rules, and physical examination predication.',
    checkpoints: QUALIFICATIVE_CHECKPOINTS,
    drillCategory: 'qualificatives',
    drillTitle: 'Qualificatives Practice'
  },
  'pronouns': {
    theme: 'cyan',
    tableIcon: UserCheck,
    tableTitle: 'Absolute & Quantitative Pronoun Reference Matrix',
    tableSubtitle: 'Direct comparison across noun classes: absolute stems, prepositional contractions (na-, nga-, ku-), and quantifiers (-onke, -edwa).',
    tableBadge: '8 Core Classes',
    TableComponent: PronounsTable,
    practiceTitle: 'Interactive Checkpoint: Pronoun Contraction & Social History Self-Check',
    practiceSubtitle: 'Practice applying locative pronoun contractions (kuso), evaluating living alone (yedwa), and complete dosing (wonke).',
    checkpoints: PRONOUNS_CHECKPOINTS,
    drillCategory: 'pronouns',
    drillTitle: 'Pronouns Practice'
  },
  'demonstratives': {
    theme: 'amber',
    tableIcon: Navigation,
    tableTitle: 'Demonstratives & Spatial Deixis Reference Matrix',
    tableSubtitle: 'Direct reference comparing Position 1 (this), Position 2 (that mentioned), Position 3 (that yonder), and obligatory noun initial-vowel stripping.',
    tableBadge: '8 Noun Classes',
    TableComponent: DemonstrativesTable,
    practiceTitle: 'Interactive Checkpoint: Demonstrative Deixis & Examination Self-Check',
    practiceSubtitle: 'Practice pinpointing anatomical sites (kulo mlenze), referencing prior complaints (leyo nkinga), and presenting discharge results (nayi/nazi).',
    checkpoints: DEMONSTRATIVES_CHECKPOINTS,
    drillCategory: 'demonstratives',
    drillTitle: 'Demonstratives Practice'
  },
  'potential-mood': {
    theme: 'emerald',
    tableIcon: Activity,
    tableTitle: 'Potential Mood & Capability Reference Matrix',
    tableSubtitle: 'Direct comparison across noun classes: positive potential (-nga-), negative potential (-nge-...-e), and absolute negative (angeke).',
    tableBadge: '8 Core Classes',
    TableComponent: PotentialMoodTable,
    practiceTitle: 'Interactive Checkpoint: Potential Mood & Mobility Self-Check',
    practiceSubtitle: 'Practice assessing functional mobility, triage consent, and treatment feasibility.',
    checkpoints: POTENTIAL_MOOD_CHECKPOINTS,
    drillCategory: 'potential-mood',
    drillTitle: 'Potential Mood Practice'
  },
  'imperatives-prohibitions': {
    theme: 'red',
    tableIcon: AlertCircle,
    tableTitle: 'Imperatives, Prohibitions & Obligative -bo- Reference Matrix',
    tableSubtitle: 'Direct comparison across verb types: singular imperatives (yi-), plural commands (-ni), negative safety prohibitions (musa), and mandatory adherence (-bo-).',
    tableBadge: '8 Verb Types',
    TableComponent: ImperativesTable,
    practiceTitle: 'Interactive Checkpoint: Procedural Commands & Adherence Self-Check',
    practiceSubtitle: 'Practice procedural stillness warnings (musa ukunyakaza), strict chronic adherence (ubophuza njalo), and caregiver group directives (-ni).',
    checkpoints: IMPERATIVES_CHECKPOINTS,
    drillCategory: 'imperatives-prohibitions',
    drillTitle: 'Imperatives & Prohibitions'
  },
  'formatives': {
    theme: 'teal',
    tableIcon: Scale,
    tableTitle: 'Formatives & Case-Relation Reference Matrix',
    tableSubtitle: 'Direct comparison of associative (na-), instrumental (nga-), comparative (njenga-), and equative (nganga-) prefixes.',
    tableBadge: '8 Core Classes',
    TableComponent: FormativesTable,
    practiceTitle: 'Interactive Checkpoint: Formatives & Case-Relation Self-Check',
    practiceSubtitle: 'Practice assessing mechanism of injury, pain character similes, and organ sizing.',
    checkpoints: FORMATIVES_CHECKPOINTS,
    drillCategory: 'formatives',
    drillTitle: 'Formatives Practice'
  },
  'interrogatives': {
    theme: 'indigo',
    tableIcon: HelpCircle,
    tableTitle: 'Clinical Interrogatives & Question Enclitics Matrix',
    tableSubtitle: 'Direct reference comparing question strategies, morphemes, clinical formulas, and diagnostic utilities.',
    tableBadge: '8 Question Types',
    TableComponent: InterrogativesTable,
    practiceTitle: 'Interactive Checkpoint: Clinical Interrogatives & History-Taking Self-Check',
    practiceSubtitle: 'Practice anatomical pain localization (kuphi?), chronological onset (nini?), and causal exploration (kungani?).',
    checkpoints: INTERROGATIVES_CHECKPOINTS,
    drillCategory: 'interrogatives',
    drillTitle: 'Interrogatives Practice'
  },
  'negation': {
    theme: 'purple',
    tableIcon: ShieldAlert,
    tableTitle: 'The Complete Negation Systems Reference Matrix',
    tableSubtitle: 'Master comparison across tenses and moods: positive formulas, negative formulas, vowel shifts, and clinical utilities.',
    tableBadge: '8 Tense/Mood Systems',
    TableComponent: NegationTable,
    practiceTitle: 'Interactive Checkpoint: Negation Architecture & Fasting Self-Check',
    practiceSubtitle: 'Practice mandatory object vowel drop (buhlungu), pre-op fasting gerunds (ukungadli), and subordinate condition negation (uma singaphuzi).',
    checkpoints: NEGATION_CHECKPOINTS,
    drillCategory: 'negation',
    drillTitle: 'Negation Systems Practice'
  }
};


