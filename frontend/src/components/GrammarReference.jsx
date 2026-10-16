import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft, X } from 'lucide-react';
import {
  GRAMMAR_SECTIONS,
  GRAMMAR_RULES,
  ALL_CHECKPOINTS
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
  const [sectionFilter, setSectionFilter] = useState('');

  const refreshFlaggedState = () => {
    const allItems = [...GRAMMAR_RULES.flatMap((r) => r.examples), ...ALL_CHECKPOINTS];
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

  const toggleBreakdown = (id) => setExpandedBreakdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleCheckpointReveal = (id) => setRevealedCheckpoints((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleToggleDrill = (rule, example) => {
    const isNowFlagged = toggleDrillFlag({
      id: example.id, scenarioId: `grammar-${rule.category}`, scenarioTitle: `Grammar: ${rule.title}`,
      turnNumber: 1, speaker: example.type === 'clinical' ? 'doctor' : 'patient', isizuluText: example.isizulu,
      englishText: example.english, phoneticCue: rule.formula,
      grammarBreakdown: Array.isArray(example.breakdown)
        ? example.breakdown.map((b) => ({ chunk: b.chunk, analysis: b.gloss, rule: rule.title }))
        : [{ chunk: example.isizulu, analysis: String(example.breakdown || rule.formula), rule: rule.title }]
    });
    setFlaggedIds((prev) => {
      const next = new Set(prev);
      isNowFlagged ? next.add(example.id) : next.delete(example.id);
      return next;
    });
  };

  const handleTogglePracticeDrill = (chk, scenarioCategory, scenarioTitle) => {
    const isNowFlagged = toggleDrillFlag({
      id: chk.id, scenarioId: `grammar-${scenarioCategory}-practice`, scenarioTitle: `${scenarioTitle}: #${chk.challengeNumber}`,
      turnNumber: chk.challengeNumber, speaker: 'doctor', isizuluText: chk.primaryAnswer,
      englishText: chk.prompt, phoneticCue: chk.targetConcept,
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

  const displayedSectionRules = sectionFilter.trim()
    ? activeCategoryRules.filter((r) => {
        const q = sectionFilter.toLowerCase();
        return (
          r.title?.toLowerCase().includes(q) || r.subtitle?.toLowerCase().includes(q) ||
          r.formula?.toLowerCase().includes(q) || r.explanation?.toLowerCase().includes(q) ||
          r.rules?.some((b) => b.toLowerCase().includes(q)) ||
          r.examples?.some((ex) => ex.isizulu?.toLowerCase().includes(q) || ex.english?.toLowerCase().includes(q))
        );
      })
    : activeCategoryRules;

  const renderSectionSpecialContent = () => {
    const config = SECTION_CONFIGS[selectedCategory];
    if (!config) return null;
    const { TableComponent } = config;

    return (
      <div className="space-y-6">
        <GrammarMatrixTable
          title={config.tableTitle} subtitle={config.tableSubtitle}
          badgeText={config.tableBadge} icon={config.tableIcon} theme={config.theme}
        >
          <TableComponent />
        </GrammarMatrixTable>
        <GrammarPracticeDrawer
          title={config.practiceTitle} subtitle={config.practiceSubtitle}
          badgeText="3 Clinical Scenarios" theme={config.theme} checkpoints={config.checkpoints}
          flaggedIds={flaggedIds} revealedCheckpoints={revealedCheckpoints} copiedId={copiedId}
          onToggleReveal={toggleCheckpointReveal}
          onToggleDrill={(chk) => handleTogglePracticeDrill(chk, config.drillCategory, config.drillTitle)}
          onCopyText={handleCopyText}
        />
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {selectedCategory === null ? (
        <GrammarDirectoryView
          sections={GRAMMAR_SECTIONS}
          totalRules={GRAMMAR_RULES.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            setSectionFilter('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          flaggedIds={flaggedIds}
          expandedBreakdowns={expandedBreakdowns}
          copiedId={copiedId}
          onToggleDrill={handleToggleDrill}
          onToggleBreakdown={toggleBreakdown}
          onCopyText={handleCopyText}
        />
      ) : (
        <div className="space-y-6 animate-fadeIn">
          {/* Detail View Header with Back Button */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <button
                type="button"
                onClick={() => { setSelectedCategory(null); setSectionFilter(''); }}
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

            {/* In-Section Search / Filter Input */}
            <div className="pt-2">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  id="grammar-section-filter-input"
                  type="text"
                  value={sectionFilter}
                  onChange={(e) => setSectionFilter(e.target.value)}
                  placeholder={`Filter rules in this section (or search across all 24)...`}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-32 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all shadow-inner"
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  {sectionFilter && (
                    <button
                      type="button"
                      onClick={() => setSectionFilter('')}
                      className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                      title="Clear filter"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {sectionFilter && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery(sectionFilter);
                        setSelectedCategory(null);
                        setSectionFilter('');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[10px] font-bold text-indigo-300 hover:text-white bg-indigo-950 border border-indigo-800/80 hover:bg-indigo-900 px-2 py-0.5 rounded-md transition-colors whitespace-nowrap shadow-sm"
                    >
                      Search all 24
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Tables & Self-Test Checkpoints */}
          {renderSectionSpecialContent()}

          {/* Section Rule Cards */}
          <div className="space-y-6">
            {displayedSectionRules.length > 0 ? (
              displayedSectionRules.map((rule) => (
                <GrammarRuleCard key={rule.id} rule={rule} theme={getCategoryTheme(rule.category)} flaggedIds={flaggedIds} expandedBreakdowns={expandedBreakdowns} copiedId={copiedId} onToggleDrill={handleToggleDrill} onToggleBreakdown={toggleBreakdown} onCopyText={handleCopyText} />
              ))
            ) : (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center space-y-2">
                <p className="text-sm font-bold text-slate-300">No rules in this section match "{sectionFilter}"</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(sectionFilter); setSelectedCategory(null); setSectionFilter(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 underline"
                >
                  Search across all 24 sections for "{sectionFilter}" →
                </button>
              </div>
            )}
          </div>

          {/* Bottom Back Button */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => { setSelectedCategory(null); setSectionFilter(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
