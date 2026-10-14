import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Table } from 'lucide-react';

const TABLE_THEMES = {
  indigo: {
    containerBorder: 'border-indigo-900/50',
    iconBox: 'bg-indigo-950/80 border border-indigo-800/80 text-indigo-400',
    badge: 'bg-indigo-950 text-indigo-300 border border-indigo-800/60'
  },
  teal: {
    containerBorder: 'border-teal-900/50',
    iconBox: 'bg-teal-950/80 border border-teal-800/80 text-teal-400',
    badge: 'bg-teal-950 text-teal-300 border border-teal-800/60'
  },
  amber: {
    containerBorder: 'border-amber-900/50',
    iconBox: 'bg-amber-950/80 border border-amber-800/80 text-amber-400',
    badge: 'bg-amber-950 text-amber-300 border border-amber-800/60'
  },
  emerald: {
    containerBorder: 'border-emerald-900/50',
    iconBox: 'bg-emerald-950/80 border border-emerald-800/80 text-emerald-400',
    badge: 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
  }
};

export default function GrammarMatrixTable({
  title,
  subtitle,
  badgeText,
  icon: IconComponent = Table,
  theme = 'indigo',
  children
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Resolve theme object
  const resolvedTheme = typeof theme === 'string'
    ? (TABLE_THEMES[theme] || TABLE_THEMES.indigo)
    : { ...TABLE_THEMES.indigo, ...theme };

  return (
    <div className={`bg-slate-900/90 border ${resolvedTheme.containerBorder} rounded-2xl p-4 sm:p-6 shadow-xl space-y-4`}>
      {/* Table Header */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-xl shadow-inner ${resolvedTheme.iconBox}`}>
            <IconComponent className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-100 tracking-tight flex items-center gap-2">
              <span>{title}</span>
              {badgeText && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold hidden sm:inline-block ${resolvedTheme.badge}`}>
                  {badgeText}
                </span>
              )}
            </h3>
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
          className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 py-1 px-2.5 bg-slate-950 border border-slate-800 rounded-lg transition-colors"
        >
          <span>{isOpen ? 'Collapse' : 'Expand'}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Responsive Table Content */}
      {isOpen && (
        <div className="overflow-x-auto scrollbar-thin animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}
