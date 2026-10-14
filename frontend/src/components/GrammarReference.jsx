import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Filter,
  Bookmark,
  BookmarkCheck,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Users,
  Microscope,
  HelpCircle,
  Copy,
  Check,
  CheckCircle2,
  Layers,
  Info
} from 'lucide-react';
import { GRAMMAR_CATEGORIES, GRAMMAR_RULES } from '../data/grammarData';
import { toggleDrillFlag, isDrillFlagged } from '../utils/drillsStorage';

export default function GrammarReference() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [flaggedIds, setFlaggedIds] = useState(new Set());
  const [expandedBreakdowns, setExpandedBreakdowns] = useState({});
  const [copiedId, setCopiedId] = useState(null);

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

  const toggleBreakdown = (exampleId) => {
    setExpandedBreakdowns((prev) => ({
      ...prev,
      [exampleId]: !prev[exampleId]
    }));
  };

  const handleCopyText = (text, id) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter rules based on category and search query
  const filteredRules = GRAMMAR_RULES.filter((rule) => {
    const matchesCategory =
      selectedCategory === 'all' || rule.category === selectedCategory;

    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

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

  const getCategoryTheme = (category) => {
    switch (category) {
      case 'past-tenses':
        return {
          badge: 'bg-indigo-950/80 text-indigo-300 border-indigo-800/80',
          border: 'border-indigo-900/40',
          formulaBg: 'bg-indigo-950/60 border-indigo-800/50 text-indigo-200',
          dot: 'bg-indigo-400'
        };
      case 'stative':
        return {
          badge: 'bg-teal-950/80 text-teal-300 border-teal-800/80',
          border: 'border-teal-900/40',
          formulaBg: 'bg-teal-950/60 border-teal-800/50 text-teal-200',
          dot: 'bg-teal-400'
        };
      case 'conjunctions':
        return {
          badge: 'bg-amber-950/80 text-amber-300 border-amber-800/80',
          border: 'border-amber-900/40',
          formulaBg: 'bg-amber-950/60 border-amber-800/50 text-amber-200',
          dot: 'bg-amber-400'
        };
      case 'aspect-infixes':
        return {
          badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80',
          border: 'border-emerald-900/40',
          formulaBg: 'bg-emerald-950/60 border-emerald-800/50 text-emerald-200',
          dot: 'bg-emerald-400'
        };
      default:
        return {
          badge: 'bg-slate-900 text-slate-300 border-slate-700',
          border: 'border-slate-800',
          formulaBg: 'bg-slate-950 border-slate-800 text-slate-200',
          dot: 'bg-slate-400'
        };
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-950/80 border border-indigo-800/80 rounded-2xl text-indigo-400 shadow-md">
              <BookOpen className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-slate-100 tracking-tight">
                  isiZulu Clinical Grammar Reference
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60 hidden sm:inline-block">
                  4 Core Modules
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Linguistic structural formulas, clause governance, aspectual infixes, and clinical bedside examples.
              </p>
            </div>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>
              {filteredRules.length} of {GRAMMAR_RULES.length} Rules Shown
            </span>
          </div>
        </div>

        {/* Quick Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rules by title, formula, isiZulu word, or clinical concept (e.g. 'stative', 'uma', 'khathele', 'ukuze')..."
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

        {/* Horizontal Category Pill Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 pt-0.5 scrollbar-thin">
          {GRAMMAR_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count =
              cat.id === 'all'
                ? GRAMMAR_RULES.length
                : GRAMMAR_RULES.filter((r) => r.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-950/50'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isSelected
                      ? 'bg-indigo-800/80 text-indigo-100'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Rules Feed */}
      {filteredRules.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-200">No Matching Grammar Rules Found</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Try adjusting your search terms or switch back to the "All Rules" category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredRules.map((rule) => {
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
          })}
        </div>
      )}
    </div>
  );
}
