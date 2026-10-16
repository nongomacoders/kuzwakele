import React, { useMemo } from 'react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { GRAMMAR_RULES } from '../../data/grammarData';
import { CATEGORY_THEMES, DEFAULT_CATEGORY_THEME } from './grammarSectionConfigs';
import GrammarRuleCard from './GrammarRuleCard';

export default function GrammarSearchResultsView({
  searchQuery = '',
  onClearSearch,
  flaggedIds,
  expandedBreakdowns,
  copiedId,
  onToggleDrill,
  onToggleBreakdown,
  onCopyText,
  onSelectCategory
}) {
  const query = searchQuery.trim().toLowerCase();

  const filteredRules = useMemo(() => {
    if (!query) return [];
    return GRAMMAR_RULES.filter((rule) => {
      // 1. rule.title
      if (rule.title?.toLowerCase().includes(query)) return true;
      // 2. rule.subtitle
      if (rule.subtitle?.toLowerCase().includes(query)) return true;
      // 3. rule.formula
      if (rule.formula?.toLowerCase().includes(query)) return true;
      // 4. rule.explanation
      if (rule.explanation?.toLowerCase().includes(query)) return true;
      // 5. rule.commonPitfall
      if (rule.commonPitfall?.toLowerCase().includes(query)) return true;
      // 6. rule.rules
      if (rule.rules?.some((r) => r.toLowerCase().includes(query))) return true;
      // 7. rule.examples & breakdowns
      if (
        rule.examples?.some((ex) => {
          if (ex.isizulu?.toLowerCase().includes(query) || ex.english?.toLowerCase().includes(query)) {
            return true;
          }
          if (typeof ex.breakdown === 'string') {
            return ex.breakdown.toLowerCase().includes(query);
          }
          if (Array.isArray(ex.breakdown)) {
            return ex.breakdown.some(
              (b) => b.chunk?.toLowerCase().includes(query) || b.gloss?.toLowerCase().includes(query)
            );
          }
          return false;
        })
      ) {
        return true;
      }
      // 8. rule.category
      if (rule.category?.toLowerCase().includes(query)) return true;
      return false;
    });
  }, [query]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Search Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-indigo-950 border border-indigo-800/80 rounded-xl text-indigo-400">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-200">
              Found {filteredRules.length} rule{filteredRules.length === 1 ? '' : 's'} matching "{searchQuery}"
            </h3>
            <p className="text-xs text-slate-400">
              Searching across all 24 sections, formulas, and morphemes
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClearSearch}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 rounded-xl text-xs font-bold transition-all shadow-sm"
        >
          <X className="w-3.5 h-3.5 text-slate-400" />
          <span>Clear Search</span>
        </button>
      </div>

      {/* Results List or Empty State */}
      {filteredRules.length === 0 ? (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center text-slate-400 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
          <p className="text-lg font-medium text-slate-300">
            No matching rules or clinical examples found
          </p>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Try searching for a concord (e.g., "bengi-", "-zo-"), concept ("stative", "negation"), or symptom ("cough", "ubuhlungu").
          </p>
          <button
            type="button"
            onClick={onClearSearch}
            className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 text-xs font-bold transition-colors inline-block"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredRules.map((rule) => {
            const theme = CATEGORY_THEMES[rule.category] || DEFAULT_CATEGORY_THEME;

            return (
              <div key={rule.id} className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <button
                    type="button"
                    onClick={() => {
                      onClearSearch?.();
                      onSelectCategory?.(rule.category);
                    }}
                    className="text-xs font-bold text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
                    title={`Go to full ${rule.category.replace(/-/g, ' ')} section`}
                  >
                    <span>
                      Section:{' '}
                      <span className="text-slate-300 group-hover:text-indigo-300 capitalize">
                        {rule.category.replace(/-/g, ' ')}
                      </span>
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-indigo-400" />
                  </button>
                </div>

                <GrammarRuleCard
                  rule={rule}
                  theme={theme}
                  flaggedIds={flaggedIds}
                  expandedBreakdowns={expandedBreakdowns}
                  copiedId={copiedId}
                  onToggleDrill={onToggleDrill}
                  onToggleBreakdown={onToggleBreakdown}
                  onCopyText={onCopyText}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
