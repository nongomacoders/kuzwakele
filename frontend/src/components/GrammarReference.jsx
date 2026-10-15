import React, { useState, useEffect } from 'react';
import { BookOpen, Search, ArrowLeft, X } from 'lucide-react';
import {
  GRAMMAR_SECTIONS,
  GRAMMAR_RULES,
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
  DEMONSTRATIVES_CHECKPOINTS
} from '../data/grammarData';
import { toggleDrillFlag, isDrillFlagged } from '../utils/drillsStorage';
import GrammarRuleCard from './grammar/GrammarRuleCard';
import GrammarPracticeDrawer from './grammar/GrammarPracticeDrawer';
import GrammarMatrixTable from './grammar/GrammarMatrixTable';
import GrammarDirectoryView from './grammar/GrammarDirectoryView';
import {
  CATEGORY_THEMES,
  DEFAULT_CATEGORY_THEME,
  SECTION_CONFIGS
} from './grammar/grammarSectionConfigs';

export default function GrammarReference() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [flaggedIds, setFlaggedIds] = useState(new Set());
  const [expandedBreakdowns, setExpandedBreakdowns] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [revealedCheckpoints, setRevealedCheckpoints] = useState({});

  const refreshFlaggedState = () => {
    const allCheckpoints = [
      ...PAST_PRACTICE_CHECKPOINTS, ...STATIVE_PRACTICE_CHECKPOINTS,
      ...CONJUNCTION_PRACTICE_CHECKPOINTS, ...ASPECT_INFIX_CHECKPOINTS,
      ...VERBAL_EXTENSIONS_CHECKPOINTS, ...COPULATIVE_LOCATIVE_CHECKPOINTS,
      ...DEFICIENT_VERBS_CHECKPOINTS, ...OBJECT_CONCORD_CHECKPOINTS,
      ...QUALIFICATIVE_CHECKPOINTS, ...PRONOUNS_CHECKPOINTS, ...DEMONSTRATIVES_CHECKPOINTS
    ];
    const allItems = [...GRAMMAR_RULES.flatMap((r) => r.examples), ...allCheckpoints];
    setFlaggedIds(new Set(allItems.filter((item) => isDrillFlagged(item.id)).map((item) => item.id)));
  };


  useEffect(() => {
    refreshFlaggedState();
    const handleUpdate = () => refreshFlaggedState();
    window.addEventListener('drills-updated', handleUpdate);
    return () => window.removeEventListener('drills-updated', handleUpdate);
  }, []);

  const handleCopyText = (text, id) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleBreakdown = (exampleId) => {
    setExpandedBreakdowns((prev) => ({ ...prev, [exampleId]: !prev[exampleId] }));
  };

  const toggleCheckpointReveal = (chkId) => {
    setRevealedCheckpoints((prev) => ({ ...prev, [chkId]: !prev[chkId] }));
  };

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
      grammarBreakdown: example.breakdown.map((b) => ({ chunk: b.chunk, analysis: b.gloss, rule: rule.title }))
    });
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      isNowFlagged ? next.add(example.id) : next.delete(example.id);
      return next;
    });
  };

  const handleTogglePracticeDrill = (chk, scenarioCategory, scenarioTitle) => {
    const isNowFlagged = toggleDrillFlag({
      id: chk.id,
      scenarioId: `grammar-${scenarioCategory}-practice`,
      scenarioTitle: `${scenarioTitle}: #${chk.challengeNumber}`,
      turnNumber: chk.challengeNumber,
      speaker: 'doctor',
      isizuluText: chk.primaryAnswer,
      englishText: chk.prompt,
      phoneticCue: chk.targetConcept,
      grammarBreakdown: chk.breakdown.map((b) => ({ chunk: b.chunk, analysis: b.gloss, rule: chk.targetConcept }))
    });
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      isNowFlagged ? next.add(chk.id) : next.delete(chk.id);
      return next;
    });
  };

  const getCategoryTheme = (category) => CATEGORY_THEMES[category] || DEFAULT_CATEGORY_THEME;
  const activeSectionMeta = GRAMMAR_SECTIONS.find((s) => s.id === selectedCategory);
  const activeCategoryRules = GRAMMAR_RULES.filter((r) => r.category === selectedCategory);

  const searchResults = searchQuery.trim()
    ? GRAMMAR_RULES.filter((r) => {
        const q = searchQuery.toLowerCase();
        return (
          r.title.toLowerCase().includes(q) ||
          r.subtitle.toLowerCase().includes(q) ||
          r.formula.toLowerCase().includes(q) ||
          r.explanation.toLowerCase().includes(q) ||
          (r.commonPitfall && r.commonPitfall.toLowerCase().includes(q)) ||
          r.examples.some((ex) => ex.isizulu.toLowerCase().includes(q) || ex.english.toLowerCase().includes(q))
        );
      })
    : [];

  const renderSectionSpecialContent = () => {
    const config = SECTION_CONFIGS[selectedCategory];
    if (!config) return null;
    const { TableComponent } = config;

    return (
      <div className="space-y-6">
        <GrammarMatrixTable
          title={config.tableTitle}
          subtitle={config.tableSubtitle}
          badgeText={config.tableBadge}
          icon={config.tableIcon}
          theme={config.theme}
        >
          <TableComponent />
        </GrammarMatrixTable>
        <GrammarPracticeDrawer
          title={config.practiceTitle}
          subtitle={config.practiceSubtitle}
          badgeText="3 Clinical Scenarios"
          theme={config.theme}
          checkpoints={config.checkpoints}
          flaggedIds={flaggedIds}
          revealedCheckpoints={revealedCheckpoints}
          copiedId={copiedId}
          onToggleReveal={toggleCheckpointReveal}
          onToggleDrill={(chk) => handleTogglePracticeDrill(chk, config.drillCategory, config.drillTitle)}
          onCopyText={handleCopyText}
        />
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {searchQuery.trim() ? (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-indigo-400" />
                <h2 className="text-lg sm:text-xl font-black text-slate-100 tracking-tight">Search Results for "{searchQuery}"</h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Found {searchResults.length} matching rule{searchResults.length === 1 ? '' : 's'} across all sections.</p>
            </div>
            <button type="button" onClick={() => setSearchQuery('')} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-xl text-xs font-bold transition-all shadow-sm">
              <X className="w-3.5 h-3.5 text-slate-400" />
              <span>Clear Search</span>
            </button>
          </div>
          <div className="space-y-6">
            {searchResults.length > 0 ? (
              searchResults.map((rule) => (
                <GrammarRuleCard key={rule.id} rule={rule} theme={getCategoryTheme(rule.category)} flaggedIds={flaggedIds} expandedBreakdowns={expandedBreakdowns} copiedId={copiedId} onToggleDrill={handleToggleDrill} onToggleBreakdown={toggleBreakdown} onCopyText={handleCopyText} />
              ))
            ) : (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center space-y-2">
                <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
                <p className="text-sm font-bold text-slate-300">No matching grammar rules found.</p>
                <p className="text-xs text-slate-500">Try searching for terms like "stative", "remote past", "uma", "ukuze", or "-sa-".</p>
              </div>
            )}
          </div>
        </div>
      ) : selectedCategory === null ? (
        <GrammarDirectoryView sections={GRAMMAR_SECTIONS} totalRules={GRAMMAR_RULES.length} searchQuery={searchQuery} onSearchChange={setSearchQuery} onSelectCategory={setSelectedCategory} />
      ) : (
        <div className="space-y-6 animate-fadeIn">
          {/* Detail View Header with Back Button */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 rounded-xl text-xs sm:text-sm font-bold transition-all self-start shadow-sm group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-indigo-400" />
                <span>All Sections</span>
              </button>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${getCategoryTheme(selectedCategory).badge}`}>
                  {activeSectionMeta?.badge || `${activeCategoryRules.length} Rules`}
                </span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">Section Library</span>
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight">{activeSectionMeta?.title}</h2>
              <p className="text-xs sm:text-sm text-slate-400">{activeSectionMeta?.description || activeSectionMeta?.keyConcept}</p>
            </div>
          </div>

          {/* Specialized Tables & Self-Test Checkpoints */}
          {renderSectionSpecialContent()}

          {/* Section Rule Cards */}
          <div className="space-y-6">
            {activeCategoryRules.map((rule) => (
              <GrammarRuleCard key={rule.id} rule={rule} theme={getCategoryTheme(rule.category)} flaggedIds={flaggedIds} expandedBreakdowns={expandedBreakdowns} copiedId={copiedId} onToggleDrill={handleToggleDrill} onToggleBreakdown={toggleBreakdown} onCopyText={handleCopyText} />
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => { setSelectedCategory(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
}
