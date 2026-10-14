import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Bookmark,
  BookmarkCheck,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Stethoscope,
  Users,
  Microscope,
  HelpCircle,
  Copy,
  Check,
  Layers,
  Clock,
  Activity,
  GitFork,
  FastForward,
  X,
  Target,
  Eye,
  EyeOff,
  Table,
  Lightbulb,
  GraduationCap,
  History
} from 'lucide-react';
import {
  GRAMMAR_SECTIONS,
  GRAMMAR_RULES,
  PAST_CONCORD_MATRIX,
  PAST_PRACTICE_CHECKPOINTS,
  STATIVE_IRREGULAR_TABLE,
  STATIVE_PRACTICE_CHECKPOINTS
} from '../data/grammarData';
import { toggleDrillFlag, isDrillFlagged } from '../utils/drillsStorage';

export default function GrammarReference() {
  const [selectedCategory, setSelectedCategory] = useState(null); // null = Level 1 (Directory Index), category.id = Level 2 (Detail View)
  const [searchQuery, setSearchQuery] = useState('');
  const [flaggedIds, setFlaggedIds] = useState(new Set());
  const [expandedBreakdowns, setExpandedBreakdowns] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // Stative specific interactive states
  const [revealedCheckpoints, setRevealedCheckpoints] = useState({});
  const [isPracticeOpen, setIsPracticeOpen] = useState(true);
  const [isStemTableOpen, setIsStemTableOpen] = useState(true);

  // Past Tenses specific interactive states
  const [revealedPastCheckpoints, setRevealedPastCheckpoints] = useState({});
  const [isPastPracticeOpen, setIsPastPracticeOpen] = useState(true);
  const [isPastMatrixOpen, setIsPastMatrixOpen] = useState(true);

  // Sync flagged state with localStorage and reactive drills-updated event
  const refreshFlaggedState = () => {
    const updated = new Set();
    GRAMMAR_RULES.forEach((rule) => {
      rule.examples.forEach((ex) => {
        if (isDrillFlagged(ex.id)) {
          updated.add(ex.id);
        }
      });
    });

    // Also sync practice checkpoints (stative + past tenses)
    STATIVE_PRACTICE_CHECKPOINTS.forEach((chk) => {
      if (isDrillFlagged(chk.id)) {
        updated.add(chk.id);
      }
    });

    PAST_PRACTICE_CHECKPOINTS.forEach((chk) => {
      if (isDrillFlagged(chk.id)) {
        updated.add(chk.id);
      }
    });

    setFlaggedIds(updated);
  };

  useEffect(() => {
    refreshFlaggedState();
    const handleUpdate = () => refreshFlaggedState();
    window.addEventListener('drills-updated', handleUpdate);
    return () => window.removeEventListener('drills-updated', handleUpdate);
  }, []);

  const handleToggleDrill = (rule, example) => {
    const isNowFlagged = toggleDrillFlag({
      id: example.id,
      scenarioId: `grammar-${rule.category}`,
      scenarioTitle: `Grammar: ${rule.title}`,
      turnNumber: 1,
      speaker: example.type === 'clinical' ? 'doctor' : 'patient',
      isizuluText: example.isizulu,
      englishText: example.english,
      phoneticCue: rule.formula,
      grammarBreakdown: example.breakdown.map((b) => ({
        chunk: b.chunk,
        analysis: b.gloss,
        rule: rule.title
      }))
    });

    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (isNowFlagged) {
        next.add(example.id);
      } else {
        next.delete(example.id);
      }
      return next;
    });
  };

  const handleTogglePracticeDrill = (chk) => {
    const isNowFlagged = toggleDrillFlag({
      id: chk.id,
      scenarioId: 'grammar-stative-practice',
      scenarioTitle: `Stative Practice: #${chk.challengeNumber}`,
      turnNumber: chk.challengeNumber,
      speaker: 'doctor',
      isizuluText: chk.primaryAnswer,
      englishText: chk.prompt,
      phoneticCue: chk.targetConcept,
      grammarBreakdown: chk.breakdown.map((b) => ({
        chunk: b.chunk,
        analysis: b.gloss,
        rule: chk.targetConcept
      }))
    });

    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (isNowFlagged) {
        next.add(chk.id);
      } else {
        next.delete(chk.id);
      }
      return next;
    });
  };

  const toggleBreakdown = (exampleId) => {
    setExpandedBreakdowns((prev) => ({
      ...prev,
      [exampleId]: !prev[exampleId]
    }));
  };

  const toggleCheckpointReveal = (chkId) => {
    setRevealedCheckpoints((prev) => ({
      ...prev,
      [chkId]: !prev[chkId]
    }));
  };

  const handleTogglePastPracticeDrill = (chk) => {
    const isNowFlagged = toggleDrillFlag({
      id: chk.id,
      scenarioId: 'grammar-past-practice',
      scenarioTitle: `Past Tenses: #${chk.challengeNumber}`,
      turnNumber: chk.challengeNumber,
      speaker: 'doctor',
      isizuluText: chk.primaryAnswer,
      englishText: chk.prompt,
      phoneticCue: chk.targetConcept,
      grammarBreakdown: chk.breakdown.map((b) => ({
        chunk: b.chunk,
        analysis: b.gloss,
        rule: chk.targetConcept
      }))
    });

    setFlaggedIds((prev) => {
      const next = new Set(prev);
      if (isNowFlagged) {
        next.add(chk.id);
      } else {
        next.delete(chk.id);
      }
      return next;
    });
  };

  const togglePastCheckpointReveal = (chkId) => {
    setRevealedPastCheckpoints((prev) => ({
      ...prev,
      [chkId]: !prev[chkId]
    }));
  };

  const handleCopyText = (text, id) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryTheme = (category) => {
    switch (category) {
      case 'past-tenses':
        return {
          badge: 'bg-indigo-950/80 text-indigo-300 border-indigo-800/80',
          border: 'border-indigo-900/50 hover:border-indigo-600/70',
          cardBg: 'from-indigo-950/30 to-slate-900/90',
          formulaBg: 'bg-indigo-950/60 border-indigo-800/50 text-indigo-200',
          accent: 'text-indigo-400',
          iconBg: 'bg-indigo-950/80 border-indigo-800/80 text-indigo-400',
          codeBadge: 'bg-indigo-950 text-indigo-300 border-indigo-800/60'
        };
      case 'stative':
        return {
          badge: 'bg-teal-950/80 text-teal-300 border-teal-800/80',
          border: 'border-teal-900/50 hover:border-teal-600/70',
          cardBg: 'from-teal-950/30 to-slate-900/90',
          formulaBg: 'bg-teal-950/60 border-teal-800/50 text-teal-200',
          accent: 'text-teal-400',
          iconBg: 'bg-teal-950/80 border-teal-800/80 text-teal-400',
          codeBadge: 'bg-teal-950 text-teal-300 border-teal-800/60'
        };
      case 'conjunctions':
        return {
          badge: 'bg-amber-950/80 text-amber-300 border-amber-800/80',
          border: 'border-amber-900/50 hover:border-amber-600/70',
          cardBg: 'from-amber-950/30 to-slate-900/90',
          formulaBg: 'bg-amber-950/60 border-amber-800/50 text-amber-200',
          accent: 'text-amber-400',
          iconBg: 'bg-amber-950/80 border-amber-800/80 text-amber-400',
          codeBadge: 'bg-amber-950 text-amber-300 border-amber-800/60'
        };
      case 'aspect-infixes':
        return {
          badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80',
          border: 'border-emerald-900/50 hover:border-emerald-600/70',
          cardBg: 'from-emerald-950/30 to-slate-900/90',
          formulaBg: 'bg-emerald-950/60 border-emerald-800/50 text-emerald-200',
          accent: 'text-emerald-400',
          iconBg: 'bg-emerald-950/80 border-emerald-800/80 text-emerald-400',
          codeBadge: 'bg-emerald-950 text-emerald-300 border-emerald-800/60'
        };
      default:
        return {
          badge: 'bg-slate-900 text-slate-300 border-slate-700',
          border: 'border-slate-800 hover:border-slate-700',
          cardBg: 'from-slate-900 to-slate-950',
          formulaBg: 'bg-slate-950 border-slate-800 text-slate-200',
          accent: 'text-slate-400',
          iconBg: 'bg-slate-900 border-slate-800 text-slate-400',
          codeBadge: 'bg-slate-900 text-slate-300 border-slate-700'
        };
    }
  };

  const getSectionIcon = (id) => {
    switch (id) {
      case 'past-tenses':
        return <Clock className="w-5 h-5" />;
      case 'stative':
        return <Activity className="w-5 h-5" />;
      case 'conjunctions':
        return <GitFork className="w-5 h-5" />;
      case 'aspect-infixes':
        return <FastForward className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const isSearchActive = searchQuery.trim().length > 0;

  // Search filter across ALL rules when searching
  const matchingRules = GRAMMAR_RULES.filter((rule) => {
    if (!isSearchActive) {
      return selectedCategory ? rule.category === selectedCategory : false;
    }

    const q = searchQuery.toLowerCase().trim();
    const inTitle = rule.title.toLowerCase().includes(q);
    const inSubtitle = rule.subtitle.toLowerCase().includes(q);
    const inFormula = rule.formula.toLowerCase().includes(q);
    const inExplanation = rule.explanation.toLowerCase().includes(q);
    const inPitfall = rule.commonPitfall.toLowerCase().includes(q);
    const inRules = rule.rules.some((r) => r.toLowerCase().includes(q));
    const inExamples = rule.examples.some(
      (ex) =>
        ex.isizulu.toLowerCase().includes(q) ||
        ex.english.toLowerCase().includes(q) ||
        ex.breakdown.some(
          (b) =>
            b.chunk.toLowerCase().includes(q) ||
            b.gloss.toLowerCase().includes(q)
        )
    );

    return (
      inTitle ||
      inSubtitle ||
      inFormula ||
      inExplanation ||
      inPitfall ||
      inRules ||
      inExamples
    );
  });

  const activeSectionMeta = GRAMMAR_SECTIONS.find(
    (s) => s.id === selectedCategory
  );

  const activeCategoryRules = selectedCategory
    ? GRAMMAR_RULES.filter((r) => r.category === selectedCategory)
    : [];

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      {/* Search Active View */}
      {isSearchActive ? (
        <div className="space-y-6">
          {/* Search Header Banner */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-950/80 border border-indigo-800/80 rounded-xl text-indigo-400">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-100 tracking-tight">
                    Search Results
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Found {matchingRules.length} matching rule{matchingRules.length !== 1 ? 's' : ''} for "{searchQuery}"
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-colors self-start sm:self-auto"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear Search</span>
              </button>
            </div>

            {/* Quick Search Bar */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rules, formulas, isiZulu words, or concepts..."
                className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 px-1.5 py-0.5 bg-slate-800 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Render Matching Rules */}
          {matchingRules.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
              <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
              <h3 className="text-base font-bold text-slate-200">No Matching Rules Found</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                No grammar rules matched "{searchQuery}". Try different keywords or return to all sections.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Return to Directory
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {matchingRules.map((rule) => renderRuleCard(rule))}
            </div>
          )}
        </div>
      ) : selectedCategory === null ? (
        /* LEVEL 1: SECTION HUB / DIRECTORY INDEX */
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-950/80 border border-indigo-800/80 rounded-2xl text-indigo-400 shadow-md">
                  <BookOpen className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-slate-100 tracking-tight">
                      isiZulu Grammar Reference
                    </h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60 hidden sm:inline-block">
                      Directory
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Choose a grammatical section to review rules, clinical formulas, and bedside examples.
                  </p>
                </div>
              </div>

              {/* Total Rules Pill */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>4 Sections • {GRAMMAR_RULES.length} Rules</span>
              </div>
            </div>

            {/* Quick Search Bar */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all sections (e.g. 'stative', 'uma', 'khathele', 'ukuze', '-sa-')..."
                className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Section Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {GRAMMAR_SECTIONS.map((section) => {
              const theme = getCategoryTheme(section.id);
              const icon = getSectionIcon(section.id);

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setSelectedCategory(section.id)}
                  className={`text-left bg-gradient-to-br ${theme.cardBg} border ${theme.border} rounded-2xl p-5 shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] group space-y-4 flex flex-col justify-between`}
                >
                  <div className="space-y-3 w-full">
                    {/* Top Row: Icon + Section Title + Rule Count Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${theme.iconBg} shadow-inner`}>
                          {icon}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-black text-slate-100 tracking-tight group-hover:text-white transition-colors">
                            {section.title}
                          </h3>
                          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border inline-block mt-0.5 ${theme.badge}`}>
                            {section.badge}
                          </span>
                        </div>
                      </div>

                      <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 group-hover:text-white group-hover:bg-slate-800 transition-all shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Key Concept Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {section.keyConcept}
                    </p>
                  </div>

                  {/* Bottom Preview Hook Banner */}
                  <div className="w-full pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                        Preview:
                      </span>
                      <code className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded border truncate ${theme.codeBadge}`}>
                        {section.previewHook}
                      </code>
                    </div>

                    <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-400 transition-colors flex items-center gap-1 shrink-0">
                      <span>View</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* LEVEL 2: SECTION DETAIL VIEW */
        <div className="space-y-6 animate-fadeIn">
          {/* Detail View Header with Back Button */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              {/* Back Button */}
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 rounded-xl text-xs sm:text-sm font-bold transition-all self-start shadow-sm group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-indigo-400" />
                <span>All Sections</span>
              </button>

              {/* Section Metadata Pill */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${
                    getCategoryTheme(selectedCategory).badge
                  }`}
                >
                  {activeSectionMeta?.badge || `${activeCategoryRules.length} Rules`}
                </span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                  Section Library
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight">
                {activeSectionMeta?.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {activeSectionMeta?.description || activeSectionMeta?.keyConcept}
              </p>
            </div>

            {/* Quick Search in Detail View */}
            <div className="relative pt-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search within ${activeSectionMeta?.title || 'this section'} or across library...`}
                className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all shadow-inner"
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* PAST TENSES SPECIAL ENHANCEMENT: CONCORD MATRIX & SELF-TEST */}
          {/* ========================================================= */}
          {selectedCategory === 'past-tenses' && (
            <div className="space-y-6">
              {/* 1. Quick-Reference Past Concord Matrix Table */}
              <div className="bg-slate-900/90 border border-indigo-900/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-indigo-950/80 border border-indigo-800/80 rounded-xl text-indigo-400">
                      <Table className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-100 tracking-tight flex items-center gap-2">
                        <span>Past Concord & Auxiliary Reference Matrix</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-bold hidden sm:inline-block">
                          7 Core Forms
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400">
                        Direct comparison across Immediate Continuous (be-), Remote Simple (-a-), and Remote Continuous (ngangi-).
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPastMatrixOpen(!isPastMatrixOpen)}
                    className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 py-1 px-2.5 bg-slate-950 border border-slate-800 rounded-lg transition-colors"
                  >
                    <span>{isPastMatrixOpen ? 'Collapse' : 'Expand'}</span>
                    {isPastMatrixOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {isPastMatrixOpen && (
                  <div className="overflow-x-auto scrollbar-thin">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                          <th className="py-2.5 px-3">Person / Class</th>
                          <th className="py-2.5 px-3 text-indigo-400">Immediate Cont (be-)</th>
                          <th className="py-2.5 px-3 text-purple-400">Remote Simple (-a-)</th>
                          <th className="py-2.5 px-3 text-cyan-400">Remote Cont (Habitual)</th>
                          <th className="py-2.5 px-3">Form Comparison</th>
                          <th className="py-2.5 px-3">Clinical Utility</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {PAST_CONCORD_MATRIX.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                            <td className="py-2.5 px-3 font-mono font-bold text-indigo-300 whitespace-nowrap">
                              {row.person}
                            </td>
                            <td className="py-2.5 px-3 whitespace-nowrap">
                              <span className="font-mono font-bold text-indigo-300 bg-indigo-950/80 border border-indigo-900/60 px-2 py-0.5 rounded">
                                {row.immediateCont}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 whitespace-nowrap">
                              <span className="font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-900/60 px-2 py-0.5 rounded">
                                {row.remoteSimple}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 whitespace-nowrap">
                              <span className="font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-900/60 px-2 py-0.5 rounded">
                                {row.remoteCont}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-300 whitespace-nowrap">
                              {row.example}
                            </td>
                            <td className="py-2.5 px-3 text-slate-400 whitespace-nowrap text-[11px]">
                              {row.note}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* 2. Interactive Checkpoint / Self-Test Drawer */}
              <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-slate-900 border border-indigo-800/60 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-indigo-900/40 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-indigo-900/60 border border-indigo-700/60 rounded-xl text-indigo-300 shadow-md">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-black text-slate-100 tracking-tight">
                          Interactive Checkpoint: History-Taking Clinical Self-Check
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/80 font-bold hidden sm:inline-block">
                          3 Clinical Scenarios
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Practice distinguishing recent background events, remote chronic habits, and past negation.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPastPracticeOpen(!isPastPracticeOpen)}
                    className="text-xs text-indigo-300 hover:text-white flex items-center gap-1 py-1 px-3 bg-indigo-950 border border-indigo-800 rounded-lg transition-colors font-bold"
                  >
                    <span>{isPastPracticeOpen ? 'Hide Checkpoints' : 'Start Practice'}</span>
                    {isPastPracticeOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {isPastPracticeOpen && (
                  <div className="space-y-4 pt-1 animate-fadeIn">
                    {PAST_PRACTICE_CHECKPOINTS.map((chk) => {
                      const isRevealed = !!revealedPastCheckpoints[chk.id];
                      const isFlagged = flaggedIds.has(chk.id);

                      return (
                        <div
                          key={chk.id}
                          className="bg-slate-950 border border-slate-800 hover:border-slate-700/80 rounded-xl p-4 space-y-3.5 shadow-md transition-all"
                        >
                          {/* Checkpoint Header */}
                          <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                                Challenge #{chk.challengeNumber}
                              </span>
                              <span className="text-xs font-bold text-slate-300">
                                {chk.targetConcept}
                              </span>
                            </div>

                            {/* 1-Tap Flag for Drills Button */}
                            <button
                              type="button"
                              onClick={() => handleTogglePastPracticeDrill(chk)}
                              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                                isFlagged
                                  ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/50'
                                  : 'bg-slate-900 text-slate-300 hover:text-amber-300 hover:bg-slate-850 border-slate-700'
                              }`}
                              title={isFlagged ? 'Remove from Drills Gym' : 'Save challenge to Drills Gym'}
                            >
                              {isFlagged ? (
                                <>
                                  <BookmarkCheck className="w-3.5 h-3.5 text-white" />
                                  <span>Flagged</span>
                                </>
                              ) : (
                                <>
                                  <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                                  <span>Flag for Drills</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Challenge Prompt */}
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                              Target English Meaning:
                            </span>
                            <p className="text-sm sm:text-base font-bold text-slate-100 mt-0.5">
                              "{chk.prompt}"
                            </p>
                          </div>

                          {/* Reveal Button */}
                          <div>
                            <button
                              type="button"
                              onClick={() => togglePastCheckpointReveal(chk.id)}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-950 text-indigo-300 hover:bg-indigo-900 border border-indigo-800/80 transition-colors"
                            >
                              {isRevealed ? (
                                <>
                                  <EyeOff className="w-3.5 h-3.5" />
                                  <span>Hide Answer</span>
                                </>
                              ) : (
                                <>
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Reveal isiZulu & Concord Breakdown</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Revealed Answer & Morpheme Breakdown */}
                          {isRevealed && (
                            <div className="pt-2 border-t border-slate-800/80 space-y-3 animate-fadeIn">
                              <div className="bg-slate-900/90 border border-indigo-900/50 rounded-xl p-3 flex items-start justify-between gap-2">
                                <div>
                                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block">
                                    Spoken isiZulu Solution:
                                  </span>
                                  <p className="text-base font-bold text-indigo-200 mt-0.5">
                                    "{chk.primaryAnswer}"
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleCopyText(chk.primaryAnswer, `chk-${chk.id}`)}
                                  className="text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                                  title="Copy isiZulu phrase"
                                >
                                  {copiedId === `chk-${chk.id}` ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>

                              {/* Linguistic Rule Tip Callout */}
                              <div className="bg-amber-950/20 border border-amber-800/40 rounded-xl p-3 text-xs text-amber-200/90 flex items-start gap-2.5">
                                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold text-amber-300 block text-[11px]">
                                    Linguistic Checkpoint Key:
                                  </span>
                                  <p className="text-xs text-amber-200/90 leading-relaxed mt-0.5">
                                    {chk.ruleTip}
                                  </p>
                                </div>
                              </div>

                              {/* Breakdown Grid Tokens */}
                              <div className="space-y-1.5">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                                  Morpheme & Gloss Analysis:
                                </span>
                                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                                  {chk.breakdown.map((item, bIdx) => (
                                    <div
                                      key={bIdx}
                                      className="bg-slate-900 border border-slate-800 rounded-lg p-2 space-y-1 text-xs"
                                    >
                                      <span className="font-mono font-bold text-[11px] text-indigo-300 bg-indigo-950/80 border border-indigo-900/60 px-1.5 py-0.5 rounded inline-block">
                                        {item.chunk}
                                      </span>
                                      <p className="text-[11px] text-slate-300 leading-snug">
                                        {item.gloss}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STATIVE SPECIAL ENHANCEMENT: QUICK-REFERENCE TABLE & QUIZ */}
          {/* ========================================================= */}
          {selectedCategory === 'stative' && (
            <div className="space-y-6">
              {/* 1. Quick-Reference Irregular Stem Table */}
              <div className="bg-slate-900/90 border border-teal-900/50 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-teal-950/80 border border-teal-800/80 rounded-xl text-teal-400">
                      <Table className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-100 tracking-tight flex items-center gap-2">
                        <span>High-Yield Stative Mutation Reference Grid</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800/60 font-bold hidden sm:inline-block">
                          10 Core Stems
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400">
                        Direct comparison of process root, present positive, and present negative.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsStemTableOpen(!isStemTableOpen)}
                    className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 py-1 px-2.5 bg-slate-950 border border-slate-800 rounded-lg transition-colors"
                  >
                    <span>{isStemTableOpen ? 'Collapse' : 'Expand'}</span>
                    {isStemTableOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {isStemTableOpen && (
                  <div className="overflow-x-auto scrollbar-thin">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-800 text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
                          <th className="py-2.5 px-3">Root Verb</th>
                          <th className="py-2.5 px-3">Process Meaning</th>
                          <th className="py-2.5 px-3 text-emerald-400">Present (+) Stative</th>
                          <th className="py-2.5 px-3 text-rose-400">Present (-) Stative</th>
                          <th className="py-2.5 px-3">Mutation Pattern</th>
                          <th className="py-2.5 px-3">Clinical Application</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        {STATIVE_IRREGULAR_TABLE.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                            <td className="py-2.5 px-3 font-mono font-bold text-teal-300 whitespace-nowrap">
                              {row.root}
                            </td>
                            <td className="py-2.5 px-3 text-slate-400 whitespace-nowrap">
                              {row.meaning}
                            </td>
                            <td className="py-2.5 px-3 whitespace-nowrap">
                              <span className="font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-900/60 px-2 py-0.5 rounded">
                                {row.positive}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 whitespace-nowrap">
                              <span className="font-mono font-bold text-rose-300 bg-rose-950/80 border border-rose-900/60 px-2 py-0.5 rounded">
                                {row.negative}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                              {row.pattern}
                            </td>
                            <td className="py-2.5 px-3 text-slate-300 whitespace-nowrap text-[11px]">
                              {row.clinicalUse}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* 2. Interactive Checkpoint / Self-Test Drawer */}
              <div className="bg-gradient-to-br from-teal-950/40 via-slate-900/90 to-slate-900 border border-teal-800/60 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-teal-900/40 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-teal-900/60 border border-teal-700/60 rounded-xl text-teal-300 shadow-md">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-black text-slate-100 tracking-tight">
                          Interactive Checkpoint: Bedside Self-Test
                        </h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800/80 font-bold hidden sm:inline-block">
                          3 Clinical Scenarios
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Practice applying the contraction rule, irregular mutations, and negative retention.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPracticeOpen(!isPracticeOpen)}
                    className="text-xs text-teal-300 hover:text-white flex items-center gap-1 py-1 px-3 bg-teal-950 border border-teal-800 rounded-lg transition-colors font-bold"
                  >
                    <span>{isPracticeOpen ? 'Hide Checkpoints' : 'Start Practice'}</span>
                    {isPracticeOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {isPracticeOpen && (
                  <div className="space-y-4 pt-1 animate-fadeIn">
                    {STATIVE_PRACTICE_CHECKPOINTS.map((chk) => {
                      const isRevealed = !!revealedCheckpoints[chk.id];
                      const isFlagged = flaggedIds.has(chk.id);

                      return (
                        <div
                          key={chk.id}
                          className="bg-slate-950 border border-slate-800 hover:border-slate-700/80 rounded-xl p-4 space-y-3.5 shadow-md transition-all"
                        >
                          {/* Checkpoint Header */}
                          <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/60">
                                Challenge #{chk.challengeNumber}
                              </span>
                              <span className="text-xs font-bold text-slate-300">
                                {chk.targetConcept}
                              </span>
                            </div>

                            {/* 1-Tap Flag for Drills Button */}
                            <button
                              type="button"
                              onClick={() => handleTogglePracticeDrill(chk)}
                              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                                isFlagged
                                  ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/50'
                                  : 'bg-slate-900 text-slate-300 hover:text-amber-300 hover:bg-slate-850 border-slate-700'
                              }`}
                              title={isFlagged ? 'Remove from Drills Gym' : 'Save challenge to Drills Gym'}
                            >
                              {isFlagged ? (
                                <>
                                  <BookmarkCheck className="w-3.5 h-3.5 text-white" />
                                  <span>Flagged</span>
                                </>
                              ) : (
                                <>
                                  <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                                  <span>Flag for Drills</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Challenge Prompt */}
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                              Target English Meaning:
                            </span>
                            <p className="text-sm sm:text-base font-bold text-slate-100 mt-0.5">
                              "{chk.prompt}"
                            </p>
                          </div>

                          {/* Reveal Button */}
                          <div>
                            <button
                              type="button"
                              onClick={() => toggleCheckpointReveal(chk.id)}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-950 text-teal-300 hover:bg-teal-900 border border-teal-800/80 transition-colors"
                            >
                              {isRevealed ? (
                                <>
                                  <EyeOff className="w-3.5 h-3.5" />
                                  <span>Hide Answer</span>
                                </>
                              ) : (
                                <>
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Reveal isiZulu & Concord Breakdown</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* Revealed Answer & Morpheme Breakdown */}
                          {isRevealed && (
                            <div className="pt-2 border-t border-slate-800/80 space-y-3 animate-fadeIn">
                              <div className="bg-slate-900/90 border border-teal-900/50 rounded-xl p-3 flex items-start justify-between gap-2">
                                <div>
                                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                                    Spoken isiZulu Solution:
                                  </span>
                                  <p className="text-base font-bold text-teal-200 mt-0.5">
                                    "{chk.primaryAnswer}"
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleCopyText(chk.primaryAnswer, `chk-${chk.id}`)}
                                  className="text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800 transition-colors shrink-0"
                                  title="Copy isiZulu phrase"
                                >
                                  {copiedId === `chk-${chk.id}` ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>

                              {/* Linguistic Rule Tip Callout */}
                              <div className="bg-amber-950/20 border border-amber-800/40 rounded-xl p-3 text-xs text-amber-200/90 flex items-start gap-2.5">
                                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold text-amber-300 block text-[11px]">
                                    Linguistic Checkpoint Key:
                                  </span>
                                  <p className="text-xs text-amber-200/90 leading-relaxed mt-0.5">
                                    {chk.ruleTip}
                                  </p>
                                </div>
                              </div>

                              {/* Breakdown Grid Tokens */}
                              <div className="space-y-1.5">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                                  Morpheme & Gloss Analysis:
                                </span>
                                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                                  {chk.breakdown.map((item, bIdx) => (
                                    <div
                                      key={bIdx}
                                      className="bg-slate-900 border border-slate-800 rounded-lg p-2 space-y-1 text-xs"
                                    >
                                      <span className="font-mono font-bold text-[11px] text-teal-300 bg-teal-950/80 border border-teal-900/60 px-1.5 py-0.5 rounded inline-block">
                                        {item.chunk}
                                      </span>
                                      <p className="text-[11px] text-slate-300 leading-snug">
                                        {item.gloss}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Section Rule Cards */}
          <div className="space-y-6">
            {activeCategoryRules.map((rule) => renderRuleCard(rule))}
          </div>

          {/* Bottom Back Button to prevent long scrolling */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-indigo-400" />
              <span>Back to All Sections</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  /* Helper function to render an individual rule card */
  function renderRuleCard(rule) {
    const theme = getCategoryTheme(rule.category);

    return (
      <article
        key={rule.id}
        className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-xl space-y-5 transition-all"
      >
        {/* Rule Card Header */}
        <div className="space-y-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-lg border ${theme.badge}`}
            >
              {rule.category.replace('-', ' ')}
            </span>
            <span className="text-[11px] font-medium text-slate-500">•</span>
            <span className="text-[11px] font-medium text-slate-400">
              {rule.examples.length} Verified Example{rule.examples.length > 1 ? 's' : ''}
            </span>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-100 tracking-tight">
              {rule.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {rule.subtitle}
            </p>
          </div>
        </div>

        {/* Formula Banner */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Grammar Construction Formula:</span>
            </span>
          </div>
          <div
            className={`font-mono text-xs sm:text-sm font-bold p-3 rounded-xl border leading-relaxed flex items-center justify-between gap-3 ${theme.formulaBg}`}
          >
            <span className="break-words">{rule.formula}</span>
            <button
              type="button"
              onClick={() => handleCopyText(rule.formula, `formula-${rule.id}`)}
              className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800/60 transition-colors shrink-0"
              title="Copy formula"
            >
              {copiedId === `formula-${rule.id}` ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Core Explanation & Rule Nuances */}
        <div className="space-y-3 bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-300">
          <p className="leading-relaxed text-slate-200">
            {rule.explanation}
          </p>

          {/* Bulleted Rules / Sub-points */}
          {rule.rules && rule.rules.length > 0 && (
            <div className="pt-2 border-t border-slate-800/60 space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Key Structural Rules:
              </span>
              <ul className="grid gap-1.5 sm:grid-cols-2 text-xs">
                {rule.rules.map((r, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2 text-slate-300">
                    <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                    <span className="leading-snug">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Common Pitfall Box */}
        {rule.commonPitfall && (
          <div className="bg-amber-950/30 border border-amber-800/50 rounded-xl p-3.5 text-xs text-amber-200/90 flex items-start gap-3 shadow-inner">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-amber-300 uppercase text-[10px] tracking-wider block">
                Common English-Speaker Pitfall / Isicupho
              </span>
              <p className="leading-relaxed text-amber-200/90 text-xs">
                {rule.commonPitfall}
              </p>
            </div>
          </div>
        )}

        {/* Interactive Example Cards */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Microscope className="w-3.5 h-3.5 text-indigo-400" />
              <span>Contextual Clinical & Community Examples:</span>
            </span>
            <span className="text-[10px] text-slate-500 italic hidden sm:inline">
              1-Tap "Flag for Drills" to save to your Drills Gym
            </span>
          </div>

          <div className="grid gap-3.5">
            {rule.examples.map((ex) => {
              const isFlagged = flaggedIds.has(ex.id);
              const isExpanded = !!expandedBreakdowns[ex.id];
              const isClinical = ex.type === 'clinical';

              return (
                <div
                  key={ex.id}
                  className="bg-slate-950 border border-slate-800/90 hover:border-slate-700/80 rounded-xl p-3.5 sm:p-4 space-y-3 transition-all shadow-md"
                >
                  {/* Example Header: Type Badge, Copy, Drill Flag Button */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800/60 pb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1 border ${
                          isClinical
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60'
                            : 'bg-purple-950/80 text-purple-300 border-purple-800/60'
                        }`}
                      >
                        {isClinical ? (
                          <Stethoscope className="w-3 h-3" />
                        ) : (
                          <Users className="w-3 h-3" />
                        )}
                        <span>{isClinical ? 'Clinical Context' : 'Community Context'}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Copy Button */}
                      <button
                        type="button"
                        onClick={() => handleCopyText(ex.isizulu, ex.id)}
                        className="text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-900 transition-colors"
                        title="Copy isiZulu phrase"
                      >
                        {copiedId === ex.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* 1-Tap Flag for Drills Button */}
                      <button
                        type="button"
                        onClick={() => handleToggleDrill(rule, ex)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                          isFlagged
                            ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/50'
                            : 'bg-slate-900 text-slate-300 hover:text-amber-300 hover:bg-slate-850 border-slate-700'
                        }`}
                        title={isFlagged ? 'Remove from Drills Gym' : 'Save to Drills Gym for repetition'}
                      >
                        {isFlagged ? (
                          <>
                            <BookmarkCheck className="w-3.5 h-3.5 text-white" />
                            <span>Flagged</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                            <span>Flag for Drills</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* isiZulu & English Sentences */}
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base font-bold text-slate-100 leading-relaxed">
                      "{ex.isizulu}"
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="text-slate-500 font-semibold mr-1.5">Meaning:</span>
                      <span>{ex.english}</span>
                    </p>
                  </div>

                  {/* Expandable Morpheme Breakdown Toggle */}
                  {ex.breakdown && ex.breakdown.length > 0 && (
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => toggleBreakdown(ex.id)}
                        className="flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <Microscope className="w-3 h-3" />
                        <span>
                          {isExpanded
                            ? 'Hide Morpheme Breakdown'
                            : 'Show Root & Concord Breakdown'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </button>

                      {/* Breakdown Grid Tokens */}
                      {isExpanded && (
                        <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
                          {ex.breakdown.map((item, idx) => (
                            <div
                              key={idx}
                              className="bg-slate-900 border border-slate-800/80 rounded-lg p-2 space-y-1 text-xs"
                            >
                              <span className="font-mono font-bold text-[11px] text-indigo-300 bg-indigo-950/80 border border-indigo-900/60 px-1.5 py-0.5 rounded inline-block">
                                {item.chunk}
                              </span>
                              <p className="text-[11px] text-slate-300 leading-snug">
                                {item.gloss}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </article>
    );
  }
}
