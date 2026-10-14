import React from 'react';
import {
  BookOpen,
  Search,
  ChevronRight,
  ArrowRight,
  Layers,
  Clock,
  Activity,
  GitFork,
  FastForward,
  Repeat,
  MapPin,
  Zap
} from 'lucide-react';
import { CATEGORY_THEMES, DEFAULT_CATEGORY_THEME } from './grammarSectionConfigs';

const getSectionIcon = (id) => {
  switch (id) {
    case 'past-tenses': return <Clock className="w-5 h-5 text-indigo-400" />;
    case 'stative': return <Activity className="w-5 h-5 text-teal-400" />;
    case 'conjunctions': return <GitFork className="w-5 h-5 text-amber-400" />;
    case 'aspect-infixes': return <FastForward className="w-5 h-5 text-emerald-400" />;
    case 'verbal-extensions': return <Repeat className="w-5 h-5 text-fuchsia-400" />;
    case 'copulatives-locatives': return <MapPin className="w-5 h-5 text-rose-400" />;
    case 'deficient-verbs': return <Zap className="w-5 h-5 text-sky-400" />;
    default: return <BookOpen className="w-5 h-5 text-slate-400" />;
  }
};

export default function GrammarDirectoryView({
  sections = [],
  totalRules = 0,
  searchQuery = '',
  onSearchChange,
  onSelectCategory
}) {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Directory Header & Quick Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>{sections.length} Sections • {totalRules} Rules</span>
          </div>
        </div>

        {/* Quick Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search across all sections (e.g. 'stative', 'uma', 'khathele', 'ukuze', '-sa-')..."
            className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Section Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => {
          const theme = CATEGORY_THEMES[section.id] || DEFAULT_CATEGORY_THEME;
          const icon = getSectionIcon(section.id);

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelectCategory?.(section.id)}
              className={`text-left bg-gradient-to-br ${theme.cardBg} border ${theme.border} rounded-2xl p-5 shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] group space-y-4 flex flex-col justify-between`}
            >
              <div className="space-y-3 w-full">
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

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {section.keyConcept}
                </p>
              </div>

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
  );
}
