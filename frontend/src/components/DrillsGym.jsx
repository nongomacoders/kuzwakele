import React, { useState, useEffect } from 'react';
import {
  Dumbbell,
  Bookmark,
  Languages,
  Microscope,
  Trash2,
  Volume2,
  User,
  Stethoscope,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers
} from 'lucide-react';
import {
  getFlaggedDrills,
  removeDrill,
  clearAllDrills
} from '../utils/drillsStorage';

export default function DrillsGym() {
  const [activeTab, setActiveTab] = useState('marked'); // 'marked' | 'curated'
  const [flaggedDrills, setFlaggedDrills] = useState([]);
  const [showAllEnglish, setShowAllEnglish] = useState(true);
  const [revealedEnglishMap, setRevealedEnglishMap] = useState({});
  const [speakerFilter, setSpeakerFilter] = useState('all'); // 'all' | 'patient' | 'doctor'

  const refreshDrills = () => {
    setFlaggedDrills(getFlaggedDrills());
  };

  useEffect(() => {
    refreshDrills();
    const handleUpdate = () => refreshDrills();
    window.addEventListener('drills-updated', handleUpdate);
    return () => window.removeEventListener('drills-updated', handleUpdate);
  }, []);

  const toggleSingleEnglish = (id) => {
    setRevealedEnglishMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredDrills = flaggedDrills.filter((drill) => {
    if (speakerFilter === 'patient') return drill.speaker === 'patient';
    if (speakerFilter === 'doctor') return drill.speaker === 'doctor';
    return true;
  });

  const CURATED_DRILLS = [
    {
      title: 'Polite Inquiry Openers',
      focus: 'Concords & Respectful Address',
      count: '10 Cards',
      description: 'Mastering "Ingabe...", "Ngicela ukubuza...", and kinship honorifics (Mkhulu, Gogo, Baba).'
    },
    {
      title: 'Symptom Euphemisms',
      focus: 'Colloquial Clinical Terms',
      count: '15 Cards',
      description: 'Translating delicate medical terms naturally: ukushintsha isisu, isilumo, ukukhipha.'
    },
    {
      title: 'Consent & Examination Phrasing',
      focus: 'Patient Dignity',
      count: '12 Cards',
      description: 'Polite instructions for physical exams, chest auscultation, and blood draws.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-950/80 border border-amber-800/80 rounded-2xl text-amber-400 shadow-md">
              <Dumbbell className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-100 tracking-tight">isiZulu Clinical Drills Gym</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Spaced repetition & targeted review of flagged scenario phrases and grammatical patterns.
              </p>
            </div>
          </div>

          {/* Tab Filter Switch */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('marked')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'marked'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Review List ({flaggedDrills.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('curated')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'curated'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Curated Drills</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* SECTION 1: MARKED FROM SCENARIOS (Review List)                 */}
      {/* ============================================================== */}
      {activeTab === 'marked' && (
        <div className="space-y-4 animate-fadeIn">
          {/* Controls Bar when items exist */}
          {flaggedDrills.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 rounded-2xl px-4 py-2.5 text-xs">
              {/* Speaker Filters */}
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider mr-1">
                  Filter:
                </span>
                <button
                  type="button"
                  onClick={() => setSpeakerFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    speakerFilter === 'all'
                      ? 'bg-slate-800 text-amber-300 border border-amber-900/60'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  All ({flaggedDrills.length})
                </button>
                <button
                  type="button"
                  onClick={() => setSpeakerFilter('patient')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    speakerFilter === 'patient'
                      ? 'bg-purple-950 text-purple-300 border border-purple-800'
                      : 'text-slate-400 hover:text-purple-300'
                  }`}
                >
                  Patient ({flaggedDrills.filter((d) => d.speaker === 'patient').length})
                </button>
                <button
                  type="button"
                  onClick={() => setSpeakerFilter('doctor')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    speakerFilter === 'doctor'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      : 'text-slate-400 hover:text-emerald-300'
                  }`}
                >
                  Doctor ({flaggedDrills.filter((d) => d.speaker === 'doctor').length})
                </button>
              </div>

              {/* Global English Toggle */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowAllEnglish(!showAllEnglish)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                    showAllEnglish
                      ? 'bg-slate-950 text-amber-300 border-amber-800/80'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span>{showAllEnglish ? 'Hide English' : 'Show English'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredDrills.length === 0 ? (
            <div className="bg-slate-900/60 border-2 border-dashed border-slate-800 rounded-3xl p-10 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-slate-800/80 flex items-center justify-center text-amber-400 shadow-inner">
                <Bookmark className="w-7 h-7" />
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="text-base font-bold text-slate-200">No sentences marked yet</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tap <span className="text-amber-400 font-semibold">[ Flag for Drills ]</span> during any scenario to collect difficult sentence patterns and grammar here for focused practice.
                </p>
              </div>
            </div>
          ) : (
            /* Flagged Drill Cards Grid */
            <div className="grid gap-4">
              {filteredDrills.map((drill) => {
                const isEnglishVisible = showAllEnglish || !!revealedEnglishMap[drill.id];
                const isPatient = drill.speaker === 'patient';

                return (
                  <div
                    key={drill.id}
                    className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3.5 transition-all animate-fadeIn"
                  >
                    {/* Header: Source Scenario, Turn Badge, Speaker Tag, and Remove Button */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Speaker Tag */}
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-lg flex items-center gap-1 border ${
                            isPatient
                              ? 'bg-purple-950/80 text-purple-300 border-purple-800/60'
                              : 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60'
                          }`}
                        >
                          {isPatient ? <User className="w-3 h-3" /> : <Stethoscope className="w-3 h-3" />}
                          <span>{isPatient ? 'Patient' : 'Doctor Choice'}</span>
                        </span>

                        {/* Scenario & Turn Pill */}
                        <span className="text-[11px] font-bold text-slate-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-md">
                          {drill.scenarioTitle.split('—')[0].trim()} • Turn {drill.turnNumber}
                        </span>
                      </div>

                      {/* Remove from Drills Button */}
                      <button
                        type="button"
                        onClick={() => removeDrill(drill.id)}
                        className="text-xs text-slate-500 hover:text-red-400 flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-950 transition-colors"
                        title="Remove from Drills"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>

                    {/* Primary isiZulu Sentence */}
                    <div className="space-y-1">
                      <p className="text-base sm:text-lg font-bold text-slate-100 leading-relaxed">
                        "{drill.isizuluText}"
                      </p>

                      {/* English Meaning (with toggle option) */}
                      {isEnglishVisible ? (
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 border-t border-slate-800/60">
                          <span className="text-slate-500 font-semibold mr-1.5">English:</span>
                          <span>{drill.englishText}</span>
                        </p>
                      ) : (
                        <button
                          type="button"
                          onClick={() => toggleSingleEnglish(drill.id)}
                          className="text-xs text-amber-400 hover:text-amber-300 font-semibold pt-1 flex items-center gap-1 transition-colors"
                        >
                          <Languages className="w-3 h-3" />
                          <span>Tap to reveal English translation</span>
                        </button>
                      )}
                    </div>

                    {/* Phonetic Cue / Nuance if available */}
                    {drill.phoneticCue && (
                      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-300 flex items-start gap-2">
                        <Volume2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-amber-400">Listening / Nuance Cue: </span>
                          <span className="text-slate-300 leading-relaxed">{drill.phoneticCue}</span>
                        </div>
                      </div>
                    )}

                    {/* Morphological Grammar Breakdown Panel */}
                    {drill.grammarBreakdown && drill.grammarBreakdown.length > 0 && (
                      <div className="pt-2 border-t border-slate-800/60 space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-300 uppercase tracking-wider">
                          <Microscope className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Grammatical Breakdown:</span>
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                          {drill.grammarBreakdown.map((g, gIdx) => (
                            <div
                              key={gIdx}
                              className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 space-y-1 text-xs"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-mono font-bold text-[11px] text-indigo-300 bg-indigo-950 px-1.5 py-0.5 rounded border border-indigo-900/60">
                                  {g.chunk}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-300 font-medium leading-snug">
                                {g.analysis || g.gloss}
                              </p>
                              {g.rule && (
                                <p className="text-[10px] text-slate-500 italic pt-1 border-t border-slate-900">
                                  {g.rule}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* SECTION 2: CURATED PRACTICE DRILLS                             */}
      {/* ============================================================== */}
      {activeTab === 'curated' && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
          {CURATED_DRILLS.map((drill, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-700/60 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-mono text-[11px]">
                    {drill.focus}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Target className="w-3 h-3 text-amber-400" /> {drill.count}
                  </span>
                </div>
                <h3 className="font-bold text-slate-100 text-base mb-1.5">{drill.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{drill.description}</p>
              </div>

              <button
                type="button"
                disabled
                className="mt-5 w-full py-2.5 px-3 bg-slate-800/80 text-slate-500 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-not-allowed"
              >
                <span>Coming in Next Module</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
