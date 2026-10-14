import React from 'react';
import {
  Sparkles,
  Copy,
  Check,
  AlertTriangle,
  Microscope,
  Stethoscope,
  Users,
  Bookmark,
  BookmarkCheck,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

export default function GrammarRuleCard({
  rule,
  theme,
  flaggedIds,
  expandedBreakdowns = {},
  copiedId = null,
  onToggleDrill,
  onToggleBreakdown,
  onCopyText
}) {
  const currentTheme = theme || {
    badge: 'bg-slate-900 text-slate-300 border-slate-700',
    formulaBg: 'bg-slate-950 border-slate-800 text-slate-200'
  };

  return (
    <article
      key={rule.id}
      className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-xl space-y-5 transition-all"
    >
      {/* Rule Card Header */}
      <div className="space-y-2 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-lg border ${currentTheme.badge}`}
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
          className={`font-mono text-xs sm:text-sm font-bold p-3 rounded-xl border leading-relaxed flex items-center justify-between gap-3 ${currentTheme.formulaBg}`}
        >
          <span className="break-words">{rule.formula}</span>
          <button
            type="button"
            onClick={() => onCopyText?.(rule.formula, `formula-${rule.id}`)}
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
            const isFlagged = flaggedIds?.has(ex.id);
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
                      onClick={() => onCopyText?.(ex.isizulu, ex.id)}
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
                      onClick={() => onToggleDrill?.(rule, ex)}
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
                      onClick={() => onToggleBreakdown?.(ex.id)}
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
