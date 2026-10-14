import { Clock, Activity, GitFork, FastForward, Table } from 'lucide-react';
import {
  PAST_PRACTICE_CHECKPOINTS,
  STATIVE_PRACTICE_CHECKPOINTS,
  CONJUNCTION_PRACTICE_CHECKPOINTS,
  ASPECT_INFIX_CHECKPOINTS
} from '../../data/grammarData';
import {
  PastConcordTable,
  StativeMutationTable,
  ConjunctionGovernanceTable,
  AspectInfixTable
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
  }
};
