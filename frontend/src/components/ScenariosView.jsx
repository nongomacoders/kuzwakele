import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Languages,
  Microscope,
  Bookmark,
  BookmarkCheck,
  Check,
  User,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Volume2,
  Sparkles,
  Info
} from 'lucide-react';
import { SCENARIOS_DATA, getScenarioById } from '../data/scenariosData';
import {
  getFlaggedDrills,
  toggleDrillFlag,
  isDrillFlagged
} from '../utils/drillsStorage';

export default function ScenariosView() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(SCENARIOS_DATA[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showEnglish, setShowEnglish] = useState(true);
  const [showGrammar, setShowGrammar] = useState(false);
  const [showBrief, setShowBrief] = useState(false);
  const [selectedDoctorOptions, setSelectedDoctorOptions] = useState({});
  const [flaggedIds, setFlaggedIds] = useState(new Set());

  // Sync flagged items from localStorage & listen for updates
  const syncFlaggedDrills = () => {
    const list = getFlaggedDrills();
    setFlaggedIds(new Set(list.map((item) => item.id)));
  };

  useEffect(() => {
    syncFlaggedDrills();
    const handleUpdate = () => syncFlaggedDrills();
    window.addEventListener('drills-updated', handleUpdate);
    return () => window.removeEventListener('drills-updated', handleUpdate);
  }, []);

  const activeScenario = getScenarioById(selectedScenarioId);
  const turns = activeScenario.turns || [];
  const totalSteps = turns.length;
  const currentTurn = turns[currentStepIndex] || turns[0];

  const handleSelectScenario = (id) => {
    setSelectedScenarioId(id);
    setCurrentStepIndex(0);
    setSelectedDoctorOptions({});
  };

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setSelectedDoctorOptions({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Flag toggle for Patient phrase
  const patientSentenceId = `${activeScenario.id}-t${currentTurn.turn}-patient`;
  const isPatientFlagged = flaggedIds.has(patientSentenceId);

  const handleTogglePatientFlag = () => {
    toggleDrillFlag({
      id: patientSentenceId,
      scenarioId: activeScenario.id,
      scenarioTitle: activeScenario.title,
      turnNumber: currentTurn.turn,
      speaker: 'patient',
      isizuluText: currentTurn.patientText,
      englishText: currentTurn.patientEnglish,
      phoneticCue: currentTurn.phoneticTextCue,
      grammarBreakdown: currentTurn.grammarBreakdown
    });
  };

  // Flag toggle for Doctor option
  const handleToggleDoctorFlag = (opt) => {
    const docSentenceId = `${activeScenario.id}-t${currentTurn.turn}-doc-${opt.id}`;
    toggleDrillFlag({
      id: docSentenceId,
      scenarioId: activeScenario.id,
      scenarioTitle: activeScenario.title,
      turnNumber: currentTurn.turn,
      speaker: 'doctor',
      isizuluText: opt.text,
      englishText: opt.english,
      phoneticCue: opt.nuance,
      grammarBreakdown: opt.grammarBreakdown
    });
  };

  const progressPercent = totalSteps > 0 ? ((currentStepIndex + 1) / totalSteps) * 100 : 0;

  return (
    <div className="max-w-3xl mx-auto space-y-4 pb-28">
      {/* ============================================================== */}
      {/* TOP HEADER CONTROLS                                            */}
      {/* ============================================================== */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
        {/* Scenario Selection Tabs / Pill Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {SCENARIOS_DATA.map((sc) => {
            const isSelected = sc.id === activeScenario.id;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => handleSelectScenario(sc.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950/40 border border-purple-500/50'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {sc.title.split('—')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Title, Step Counter, and Drills Counter Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-800/80 pt-3">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-100 flex items-center gap-2">
              <span>{activeScenario.title}</span>
            </h2>
            <p className="text-xs text-slate-400 line-clamp-1">{activeScenario.subtitle}</p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            {/* Step Counter Pill */}
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-950 text-purple-300 border border-purple-900/50">
              Step {currentStepIndex + 1} of {totalSteps}
            </span>

            {/* Flagged Count Badge */}
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-all ${
                flaggedIds.size > 0
                  ? 'bg-amber-950/80 text-amber-300 border-amber-800/80 shadow-sm'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}
              title="Total sentences flagged for Drills Gym in localStorage"
            >
              <Bookmark className="w-3 h-3 text-amber-400" />
              <span>{flaggedIds.size} In Drills</span>
            </span>
          </div>
        </div>

        {/* Slim Progress Bar */}
        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-purple-500 to-indigo-400 h-1.5 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Dual Toggles Row: English & Detailed Grammar + Optional Scenario Brief Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/60 text-xs">
          <div className="flex items-center gap-2">
            {/* English Toggle Button */}
            <button
              type="button"
              onClick={() => setShowEnglish(!showEnglish)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                showEnglish
                  ? 'bg-purple-950/80 text-purple-300 border-purple-800/80'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>English {showEnglish ? 'On' : 'Off'}</span>
            </button>

            {/* Detailed Grammar Toggle Button */}
            <button
              type="button"
              onClick={() => setShowGrammar(!showGrammar)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                showGrammar
                  ? 'bg-indigo-950/90 text-indigo-300 border-indigo-700 shadow-sm'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Microscope className="w-3.5 h-3.5 text-indigo-400" />
              <span>Grammar {showGrammar ? 'Open' : 'Fold'}</span>
            </button>
          </div>

          {/* Scenario Brief Toggle */}
          <button
            type="button"
            onClick={() => setShowBrief(!showBrief)}
            className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium transition-colors"
          >
            <Info className="w-3 h-3 text-slate-400" />
            <span>{showBrief ? 'Hide Context' : 'Context Brief'}</span>
            {showBrief ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {/* Collapsible Context Brief */}
        {showBrief && (
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-xs space-y-2 animate-fadeIn text-slate-300">
            <div>
              <span className="font-bold text-purple-300">Clinical Focus: </span>
              <span className="text-slate-300">{activeScenario.clinicalContext}</span>
            </div>
            <div>
              <span className="font-bold text-indigo-300">Conversational Objective: </span>
              <span className="text-slate-400">{activeScenario.conversationalObjective}</span>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* STEP CARD: Patient Dialogue & Grammar Breakdown                */}
      {/* ============================================================== */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-4 animate-fadeIn">
        {/* Step Header Badge */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800/80">
              Turn #{currentTurn.turn}
            </span>
            <span className="text-xs font-semibold text-slate-400">
              {activeScenario.persona.split('(')[0].trim()}
            </span>
          </div>

          {/* Patient Sentence 1-Tap Bookmark Button */}
          <button
            type="button"
            onClick={handleTogglePatientFlag}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              isPatientFlagged
                ? 'bg-amber-950/90 text-amber-300 border border-amber-700 shadow-md shadow-amber-950/30'
                : 'bg-slate-950 hover:bg-amber-950/40 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-700/60'
            }`}
            title="Flag patient sentence for Drills Gym"
          >
            {isPatientFlagged ? (
              <>
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>In Drills</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                <span>Flag for Drills</span>
              </>
            )}
          </button>
        </div>

        {/* Patient Speech Bubble */}
        <div className="space-y-2 bg-slate-950/70 border border-slate-800/90 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Spoken isiZulu:</span>
          </div>

          {/* Crisp isiZulu Typography */}
          <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
            "{currentTurn.patientText}"
          </p>

          {/* Conditionally Visible English Translation */}
          {showEnglish && (
            <div className="pt-2 border-t border-slate-800/60 text-xs sm:text-sm text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-500 mr-1.5">English:</span>
              <span className="text-slate-300">{currentTurn.patientEnglish}</span>
            </div>
          )}

          {/* Phonetic Cue Box (Acoustic notes on contractions & cadence) */}
          {currentTurn.phoneticTextCue && (
            <div className="mt-3 bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-300">
              <Volume2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-purple-300">Phonetic & Cadence Cue: </span>
                <span className="text-slate-300 leading-relaxed">{currentTurn.phoneticTextCue}</span>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Grammar Breakdown Panel */}
        {showGrammar && currentTurn.grammarBreakdown && currentTurn.grammarBreakdown.length > 0 && (
          <div className="bg-indigo-950/20 border border-indigo-900/40 rounded-2xl p-4 space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wider">
              <Microscope className="w-4 h-4 text-indigo-400" />
              <span>Detailed Grammar & Morpheme Breakdown</span>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {currentTurn.grammarBreakdown.map((item, gIdx) => (
                <div
                  key={gIdx}
                  className="bg-slate-950/90 border border-slate-800/90 hover:border-indigo-800/80 rounded-xl p-3 space-y-1.5 shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-indigo-300 bg-indigo-950/90 px-2 py-0.5 rounded border border-indigo-800/60">
                      {item.chunk}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug font-medium">
                    {item.analysis}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-relaxed italic border-t border-slate-900 pt-1">
                    {item.rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* DOCTOR PHRASING CHOICES                                        */}
        {/* ============================================================== */}
        <div className="space-y-2.5 pt-2 border-t border-slate-800">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
            <span>Clinician Response Choices (Select best bedside phrasing):</span>
          </p>

          <div className="grid gap-2.5">
            {currentTurn.doctorOptions.map((opt) => {
              const isSelected = selectedDoctorOptions[currentTurn.turn] === opt.id;
              const docSentenceId = `${activeScenario.id}-t${currentTurn.turn}-doc-${opt.id}`;
              const isDocFlagged = flaggedIds.has(docSentenceId);

              return (
                <div
                  key={opt.id}
                  onClick={() =>
                    setSelectedDoctorOptions((prev) => ({ ...prev, [currentTurn.turn]: opt.id }))
                  }
                  className={`text-left rounded-xl p-3.5 border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-slate-950 border-emerald-500/90 shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-500/30'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      {/* Doctor isiZulu Text */}
                      <p className="text-sm sm:text-base font-semibold text-emerald-300 leading-snug">
                        "{opt.text}"
                      </p>

                      {/* English Meaning (conditionally visible) */}
                      {showEnglish && (
                        <p className="text-xs text-slate-300 leading-relaxed">
                          → {opt.english}
                        </p>
                      )}

                      {/* Bedside Rationale */}
                      {opt.nuance && (
                        <p className="text-[11px] text-amber-300/90 leading-relaxed bg-amber-950/30 border border-amber-900/30 rounded-lg p-2 mt-1.5">
                          <span className="font-bold text-amber-400">Bedside Nuance: </span>
                          <span>{opt.nuance}</span>
                        </p>
                      )}

                      {/* Doctor Option Grammar Pills if Grammar is active */}
                      {showGrammar && opt.grammarBreakdown && opt.grammarBreakdown.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {opt.grammarBreakdown.map((g, gi) => (
                            <span
                              key={gi}
                              className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-indigo-300 font-mono"
                              title={`${g.analysis} — ${g.rule}`}
                            >
                              {g.chunk}: {g.analysis.split('+')[0].trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      {/* Selection Checkmark Indicator */}
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                            : 'border-slate-700 bg-slate-900 text-transparent'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>

                      {/* 1-Tap Doctor Drill Bookmark Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleDoctorFlag(opt);
                        }}
                        className={`p-1.5 rounded-lg border transition-all ${
                          isDocFlagged
                            ? 'bg-amber-950 text-amber-300 border-amber-700'
                            : 'bg-slate-900 text-slate-400 hover:text-amber-300 border-slate-800 hover:border-amber-700/60'
                        }`}
                        title={isDocFlagged ? 'In Drills Gym' : 'Flag this doctor sentence for Drills'}
                      >
                        {isDocFlagged ? (
                          <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                        ) : (
                          <Bookmark className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* FIXED BOTTOM NAVIGATION BAR (Thumb-Accessible for Mobile)      */}
      {/* ============================================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800/90 backdrop-blur-xl px-4 py-3 shadow-2xl">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          {/* Back Button */}
          <button
            type="button"
            disabled={currentStepIndex === 0}
            onClick={handleBack}
            className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all ${
              currentStepIndex === 0
                ? 'bg-slate-900 border-slate-800 text-slate-600 cursor-not-allowed'
                : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200 active:scale-98'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {/* Turn Indicator in bottom bar */}
          <div className="hidden sm:flex flex-col items-center justify-center px-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Turn {currentStepIndex + 1} / {totalSteps}
            </span>
          </div>

          {/* Next / Restart Button */}
          {currentStepIndex < totalSteps - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-950/40 active:scale-98 transition-all"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleRestart}
              className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 active:scale-98 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restart Scenario</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
