import { Clock, Activity, GitFork, FastForward, Table, Repeat, MapPin, Zap } from 'lucide-react';
import {
  PAST_PRACTICE_CHECKPOINTS,
  STATIVE_PRACTICE_CHECKPOINTS,
  CONJUNCTION_PRACTICE_CHECKPOINTS,
  ASPECT_INFIX_CHECKPOINTS,
  VERBAL_EXTENSIONS_CHECKPOINTS,
  COPULATIVE_LOCATIVE_CHECKPOINTS,
  DEFICIENT_VERBS_CHECKPOINTS
} from '../../data/grammarData';
import {
  PastConcordTable,
  StativeMutationTable,
  ConjunctionGovernanceTable,
  AspectInfixTable,
  VerbalExtensionsTable,
  CopulativesLocativesTable,
  DeficientVerbsTable
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
  }
};
