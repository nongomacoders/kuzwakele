import React, { useState } from 'react';
import {
  Target,
  ChevronDown,
  ChevronUp,
  Bookmark,
  BookmarkCheck,
  Eye,
  EyeOff,
  Copy,
  Check,
  Lightbulb
} from 'lucide-react';

const DRAWER_THEMES = {
  indigo: {
    container: 'bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-slate-900 border border-indigo-800/60',
    headerBorder: 'border-indigo-900/40',
    iconBox: 'bg-indigo-900/60 border border-indigo-700/60 text-indigo-300',
    badge: 'bg-indigo-950 text-indigo-300 border border-indigo-800/80',
    toggleBtn: 'text-indigo-300 hover:text-white bg-indigo-950 border border-indigo-800',
    challengeBadge: 'text-indigo-400 bg-indigo-950/80 border border-indigo-900/60',
    revealBtn: 'bg-indigo-950 text-indigo-300 hover:bg-indigo-900 border border-indigo-800/80',
    solutionCard: 'border-indigo-900/50',
    solutionLabel: 'text-indigo-400',
    solutionText: 'text-indigo-200',
    tokenChip: 'text-indigo-300 bg-indigo-950/80 border border-indigo-900/60'
  },
  teal: {
    container: 'bg-gradient-to-br from-teal-950/40 via-slate-900/90 to-slate-900 border border-teal-800/60',
    headerBorder: 'border-teal-900/40',
    iconBox: 'bg-teal-900/60 border border-teal-700/60 text-teal-300',
    badge: 'bg-teal-950 text-teal-300 border border-teal-800/80',
    toggleBtn: 'text-teal-300 hover:text-white bg-teal-950 border border-teal-800',
    challengeBadge: 'text-teal-400 bg-teal-950/80 border border-teal-900/60',
    revealBtn: 'bg-teal-950 text-teal-300 hover:bg-teal-900 border border-teal-800/80',
    solutionCard: 'border-teal-900/50',
    solutionLabel: 'text-teal-400',
    solutionText: 'text-teal-200',
    tokenChip: 'text-teal-300 bg-teal-950/80 border border-teal-900/60'
  },
  amber: {
    container: 'bg-gradient-to-br from-amber-950/40 via-slate-900/90 to-slate-900 border border-amber-800/60',
    headerBorder: 'border-amber-900/40',
    iconBox: 'bg-amber-900/60 border border-amber-700/60 text-amber-300',
    badge: 'bg-amber-950 text-amber-300 border border-amber-800/80',
    toggleBtn: 'text-amber-300 hover:text-white bg-amber-950 border border-amber-800',
    challengeBadge: 'text-amber-400 bg-amber-950/80 border border-amber-900/60',
    revealBtn: 'bg-amber-950 text-amber-300 hover:bg-amber-900 border border-amber-800/80',
    solutionCard: 'border-amber-900/50',
    solutionLabel: 'text-amber-400',
    solutionText: 'text-amber-200',
    tokenChip: 'text-amber-300 bg-amber-950/80 border border-amber-900/60'
  },
  emerald: {
    container: 'bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-slate-900 border border-emerald-800/60',
    headerBorder: 'border-emerald-900/40',
    iconBox: 'bg-emerald-900/60 border border-emerald-700/60 text-emerald-300',
    badge: 'bg-emerald-950 text-emerald-300 border border-emerald-800/80',
    toggleBtn: 'text-emerald-300 hover:text-white bg-emerald-950 border border-emerald-800',
    challengeBadge: 'text-emerald-400 bg-emerald-950/80 border border-emerald-900/60',
    revealBtn: 'bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-800/80',
    solutionCard: 'border-emerald-900/50',
    solutionLabel: 'text-emerald-400',
    solutionText: 'text-emerald-200',
    tokenChip: 'text-emerald-300 bg-emerald-950/80 border border-emerald-900/60'
  },
  fuchsia: {
    container: 'bg-gradient-to-br from-fuchsia-950/40 via-slate-900/90 to-slate-900 border border-fuchsia-800/60',
    headerBorder: 'border-fuchsia-900/40',
    iconBox: 'bg-fuchsia-900/60 border border-fuchsia-700/60 text-fuchsia-300',
    badge: 'bg-fuchsia-950 text-fuchsia-300 border border-fuchsia-800/80',
    toggleBtn: 'text-fuchsia-300 hover:text-white bg-fuchsia-950 border border-fuchsia-800',
    challengeBadge: 'text-fuchsia-400 bg-fuchsia-950/80 border border-fuchsia-900/60',
    revealBtn: 'bg-fuchsia-950 text-fuchsia-300 hover:bg-fuchsia-900 border border-fuchsia-800/80',
    solutionCard: 'border-fuchsia-900/50',
    solutionLabel: 'text-fuchsia-400',
    solutionText: 'text-fuchsia-200',
    tokenChip: 'text-fuchsia-300 bg-fuchsia-950/80 border border-fuchsia-900/60'
  },
  rose: {
    container: 'bg-gradient-to-br from-rose-950/40 via-slate-900/90 to-slate-900 border border-rose-800/60',
    headerBorder: 'border-rose-900/40',
    iconBox: 'bg-rose-900/60 border border-rose-700/60 text-rose-300',
    badge: 'bg-rose-950 text-rose-300 border border-rose-800/80',
    toggleBtn: 'text-rose-300 hover:text-white bg-rose-950 border border-rose-800',
    challengeBadge: 'text-rose-400 bg-rose-950/80 border border-rose-900/60',
    revealBtn: 'bg-rose-950 text-rose-300 hover:bg-rose-900 border border-rose-800/80',
    solutionCard: 'border-rose-900/50',
    solutionLabel: 'text-rose-400',
    solutionText: 'text-rose-200',
    tokenChip: 'text-rose-300 bg-rose-950/80 border border-rose-900/60'
  },
  sky: {
    container: 'bg-gradient-to-br from-sky-950/40 via-slate-900/90 to-slate-900 border border-sky-800/60',
    headerBorder: 'border-sky-900/40',
    iconBox: 'bg-sky-900/60 border border-sky-700/60 text-sky-300',
    badge: 'bg-sky-950 text-sky-300 border border-sky-800/80',
    toggleBtn: 'text-sky-300 hover:text-white bg-sky-950 border border-sky-800',
    challengeBadge: 'text-sky-400 bg-sky-950/80 border border-sky-900/60',
    revealBtn: 'bg-sky-950 text-sky-300 hover:bg-sky-900 border border-sky-800/80',
    solutionCard: 'border-sky-900/50',
    solutionLabel: 'text-sky-400',
    solutionText: 'text-sky-200',
    tokenChip: 'text-sky-300 bg-sky-950/80 border border-sky-900/60'
  },
  blue: {
    container: 'bg-gradient-to-br from-blue-950/40 via-slate-900/90 to-slate-900 border border-blue-800/60',
    headerBorder: 'border-blue-900/40',
    iconBox: 'bg-blue-900/60 border border-blue-700/60 text-blue-300',
    badge: 'bg-blue-950 text-blue-300 border border-blue-800/80',
    toggleBtn: 'text-blue-300 hover:text-white bg-blue-950 border border-blue-800',
    challengeBadge: 'text-blue-400 bg-blue-950/80 border border-blue-900/60',
    revealBtn: 'bg-blue-950 text-blue-300 hover:bg-blue-900 border border-blue-800/80',
    solutionCard: 'border-blue-900/50',
    solutionLabel: 'text-blue-400',
    solutionText: 'text-blue-200',
    tokenChip: 'text-blue-300 bg-blue-950/80 border border-blue-900/60'
  },
  orange: {
    container: 'bg-gradient-to-br from-orange-950/40 via-slate-900/90 to-slate-900 border border-orange-800/60',
    headerBorder: 'border-orange-900/40',
    iconBox: 'bg-orange-900/60 border border-orange-700/60 text-orange-300',
    badge: 'bg-orange-950 text-orange-300 border border-orange-800/80',
    toggleBtn: 'text-orange-300 hover:text-white bg-orange-950 border border-orange-800',
    challengeBadge: 'text-orange-400 bg-orange-950/80 border border-orange-900/60',
    revealBtn: 'bg-orange-950 text-orange-300 hover:bg-orange-900 border border-orange-800/80',
    solutionCard: 'border-orange-900/50',
    solutionLabel: 'text-orange-400',
    solutionText: 'text-orange-200',
    tokenChip: 'text-orange-300 bg-orange-950/80 border border-orange-900/60'
  },
  cyan: {
    container: 'bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-slate-900 border border-cyan-800/60',
    headerBorder: 'border-cyan-900/40',
    iconBox: 'bg-cyan-900/60 border border-cyan-700/60 text-cyan-300',
    badge: 'bg-cyan-950 text-cyan-300 border border-cyan-800/80',
    toggleBtn: 'text-cyan-300 hover:text-white bg-cyan-950 border border-cyan-800',
    challengeBadge: 'text-cyan-400 bg-cyan-950/80 border border-cyan-900/60',
    revealBtn: 'bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-800/80',
    solutionCard: 'border-cyan-900/50',
    solutionLabel: 'text-cyan-400',
    solutionText: 'text-cyan-200',
    tokenChip: 'text-cyan-300 bg-cyan-950/80 border border-cyan-900/60'
  },
  yellow: {
    container: 'bg-gradient-to-br from-yellow-950/40 via-slate-900/90 to-slate-900 border border-yellow-800/60',
    headerBorder: 'border-yellow-900/40',
    iconBox: 'bg-yellow-900/60 border border-yellow-700/60 text-yellow-300',
    badge: 'bg-yellow-950 text-yellow-300 border border-yellow-800/80',
    toggleBtn: 'text-yellow-300 hover:text-white bg-yellow-950 border border-yellow-800',
    challengeBadge: 'text-yellow-400 bg-yellow-950/80 border border-yellow-900/60',
    revealBtn: 'bg-yellow-950 text-yellow-300 hover:bg-yellow-900 border border-yellow-800/80',
    solutionCard: 'border-yellow-900/50',
    solutionLabel: 'text-yellow-400',
    solutionText: 'text-yellow-200',
    tokenChip: 'text-yellow-300 bg-yellow-950/80 border border-yellow-900/60'
  },
  red: {
    container: 'bg-gradient-to-br from-red-950/40 via-slate-900/90 to-slate-900 border border-red-800/60',
    headerBorder: 'border-red-900/40',
    iconBox: 'bg-red-900/60 border border-red-700/60 text-red-300',
    badge: 'bg-red-950 text-red-300 border border-red-800/80',
    toggleBtn: 'text-red-300 hover:text-white bg-red-950 border border-red-800',
    challengeBadge: 'text-red-400 bg-red-950/80 border border-red-900/60',
    revealBtn: 'bg-red-950 text-red-300 hover:bg-red-900 border border-red-800/80',
    solutionCard: 'border-red-900/50',
    solutionLabel: 'text-red-400',
    solutionText: 'text-red-200',
    tokenChip: 'text-red-300 bg-red-950/80 border border-red-900/60'
  },
  purple: {
    container: 'bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-slate-900 border border-purple-800/60',
    headerBorder: 'border-purple-900/40',
    iconBox: 'bg-purple-900/60 border border-purple-700/60 text-purple-300',
    badge: 'bg-purple-950 text-purple-300 border border-purple-800/80',
    toggleBtn: 'text-purple-300 hover:text-white bg-purple-950 border border-purple-800',
    challengeBadge: 'text-purple-400 bg-purple-950/80 border border-purple-900/60',
    revealBtn: 'bg-purple-950 text-purple-300 hover:bg-purple-900 border border-purple-800/80',
    solutionCard: 'border-purple-900/50',
    solutionLabel: 'text-purple-400',
    solutionText: 'text-purple-200',
    tokenChip: 'text-purple-300 bg-purple-950/80 border border-purple-900/60'
  },
  pink: {
    container: 'bg-gradient-to-br from-pink-950/40 via-slate-900/90 to-slate-900 border border-pink-800/60',
    headerBorder: 'border-pink-900/40',
    iconBox: 'bg-pink-900/60 border border-pink-700/60 text-pink-300',
    badge: 'bg-pink-950 text-pink-300 border border-pink-800/80',
    toggleBtn: 'text-pink-300 hover:text-white bg-pink-950 border border-pink-800',
    challengeBadge: 'text-pink-400 bg-pink-950/80 border border-pink-900/60',
    revealBtn: 'bg-pink-950 text-pink-300 hover:bg-pink-900 border border-pink-800/80',
    solutionCard: 'border-pink-900/50',
    solutionLabel: 'text-pink-400',
    solutionText: 'text-pink-200',
    tokenChip: 'text-pink-300 bg-pink-950/80 border border-pink-900/60'
  },
  lime: {
    container: 'bg-gradient-to-br from-lime-950/40 via-slate-900/90 to-slate-900 border border-lime-800/60',
    headerBorder: 'border-lime-900/40',
    iconBox: 'bg-lime-900/60 border border-lime-700/60 text-lime-300',
    badge: 'bg-lime-950 text-lime-300 border border-lime-800/80',
    toggleBtn: 'text-lime-300 hover:text-white bg-lime-950 border border-lime-800',
    challengeBadge: 'text-lime-400 bg-lime-950/80 border border-lime-900/60',
    revealBtn: 'bg-lime-950 text-lime-300 hover:bg-lime-900 border border-lime-800/80',
    solutionCard: 'border-lime-900/50',
    solutionLabel: 'text-lime-400',
    solutionText: 'text-lime-200',
    tokenChip: 'text-lime-300 bg-lime-950/80 border border-lime-900/60'
  }
};

export default function GrammarPracticeDrawer({
  title,
  subtitle,
  badgeText = '3 Clinical Scenarios',
  checkpoints = [],
  theme = 'indigo',
  flaggedIds,
  revealedCheckpoints = {},
  copiedId = null,
  onToggleReveal,
  onToggleDrill,
  onCopyText
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Resolve theme object
  const resolvedTheme = typeof theme === 'string'
    ? (DRAWER_THEMES[theme] || DRAWER_THEMES.indigo)
    : { ...DRAWER_THEMES.indigo, ...theme };

  return (
    <div className={`${resolvedTheme.container} rounded-2xl p-4 sm:p-6 shadow-xl space-y-4`}>
      {/* Header */}
      <div className={`flex items-center justify-between gap-2 border-b ${resolvedTheme.headerBorder} pb-3`}>
        <div className="flex items-center gap-2.5">
          <div className={`p-2.5 rounded-xl shadow-md ${resolvedTheme.iconBox}`}>
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black text-slate-100 tracking-tight">
                {title}
              </h3>
              {badgeText && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold hidden sm:inline-block ${resolvedTheme.badge}`}>
                  {badgeText}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-slate-400 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`text-xs flex items-center gap-1 py-1 px-3 rounded-lg transition-colors font-bold ${resolvedTheme.toggleBtn}`}
        >
          <span>{isOpen ? 'Hide Checkpoints' : 'Start Practice'}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Checkpoints Body */}
      {isOpen && (
        <div className="space-y-4 pt-1 animate-fadeIn">
          {checkpoints.map((chk) => {
            const isRevealed = !!revealedCheckpoints[chk.id];
            const isFlagged = flaggedIds?.has(chk.id);

            return (
              <div
                key={chk.id}
                className="bg-slate-950 border border-slate-800 hover:border-slate-700/80 rounded-xl p-4 space-y-3.5 shadow-md transition-all"
              >
                {/* Challenge Header & Drill Bookmark */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-850 pb-2.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-mono text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${resolvedTheme.challengeBadge}`}>
                      Challenge #{chk.challengeNumber}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      • {chk.targetConcept}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleDrill?.(chk)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                      isFlagged
                        ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-950/50'
                        : 'bg-slate-900 text-slate-300 hover:text-amber-300 hover:bg-slate-850 border-slate-700'
                    }`}
                    title={isFlagged ? 'Remove from Drills Gym' : 'Save to Drills Gym for spaced repetition'}
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

                {/* Target Prompt */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
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
                    onClick={() => onToggleReveal?.(chk.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${resolvedTheme.revealBtn}`}
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
                    <div className={`bg-slate-900/90 border rounded-xl p-3 flex items-start justify-between gap-2 ${resolvedTheme.solutionCard}`}>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider block ${resolvedTheme.solutionLabel}`}>
                          Spoken isiZulu Solution:
                        </span>
                        <p className={`text-base font-bold mt-0.5 ${resolvedTheme.solutionText}`}>
                          "{chk.primaryAnswer}"
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onCopyText?.(chk.primaryAnswer, `chk-${chk.id}`)}
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
                    {chk.ruleTip && (
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
                    )}

                    {/* Breakdown Grid Tokens */}
                    {chk.breakdown && chk.breakdown.length > 0 && (
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
                              <span className={`font-mono font-bold text-[11px] px-1.5 py-0.5 rounded inline-block ${resolvedTheme.tokenChip}`}>
                                {item.chunk}
                              </span>
                              <p className="text-[11px] text-slate-300 leading-snug">
                                {item.gloss}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
