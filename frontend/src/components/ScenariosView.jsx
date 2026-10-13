import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  Users,
  Clock,
  ArrowRight,
  RotateCcw,
  Send,
  Lightbulb,
  Ear,
  Sparkles,
  MessageSquare,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  Languages,
  Loader2,
  Stethoscope,
  HeartPulse,
  Compass,
  AlertCircle
} from 'lucide-react';

// Foreign script sanitizer to protect against multilingual token bleeding
function cleanForeignScripts(str) {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/\u0986\u09ae\u09b0\u09be|আমরা/g, 'We')
    .replace(/\u0986\u09ae\u09bf|আমি/g, 'I')
    .replace(/\u09a4\u09be\u09b0\u09be|তারা/g, 'They')
    .replace(/[\u0900-\u0DFF\u0600-\u06FF\u0400-\u04FF\u4E00-\u9FFF]+/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const SCENARIOS = [
  {
    id: 'gogo-mamthethwa',
    title: 'Gogo MaMthethwa: Beyond the Prescription',
    subtitle: 'Mutual life counseling (ukubonisana), social realities & preventative health screening',
    difficulty: 'Flagship Core',
    duration: '8-10 min',
    persona: 'Gogo MaMthethwa (62yo elder, homestead matriarch)',
    clinicalContext: 'Routine hypertension follow-up. BP measured at 150/92 mmHg. Monthly Enalapril 10mg refill scripted. The physical consult is concluded.',
    socialContext: 'Rural homestead elder supporting grandchildren. Gravel roads washed out by summer rains, pension queue exhaustion, and grandson at risk of community whoonga addiction.',
    conversationalObjective: 'Move naturally beyond the prescription into "ukubonisana" (mutual life counseling). Validate elder resilience, acknowledge hardships without rushing, and gently introduce cervical cancer screening (Pap smear / ukuhlolwa kwesibeletho) with dignity.',
    initialDialogue: [
      {
        role: 'doctor',
        text: 'Gogo, amaphilisi akho omfutho wegazi siwabhale phansi. Kodwa ngaphambi kokuba uhambe, baphila kanjani ekhaya? (Gogo, your blood pressure pills are scripted. But before you leave, how is the family doing at home?)'
      },
      {
        role: 'patient',
        isizulu: 'Yebo dokotela mntanami, ngiyabonga kakhulu. Ekhaya kukhona okuhambayo, kodwa umgwaqo ubunzima kabi ngenxa yemvula, kanti futhi izingane ziqeda amandla.',
        english: 'Yes doctor my child, thank you very much. At home we get by, but the road was terribly difficult because of the rain, and besides, the children are exhausting my strength.',
        feedback: {
          natural_alternative: 'Ake ungitshele gogo, imvula yonakalise imigwaqo kakhulu lapha ngakini? (Tell me gogo, did the rain damage the roads badly over by your place?)',
          cultural_and_tone_notes: 'Starting with kinship acknowledgment ("gogo", "mntanami") dissolves the institutional clinic hierarchy. Validating the journey to the clinic honors the elder\'s physical effort and creates safety to share deeper burdens.',
          listening_cues: 'Notice rapid vowel contraction: "kukhona okuhambayo" blends into "kukhon\'okuhambayo". The penultimate syllable of "yemvula" lengthens melodically with soft trailing pitch.'
        },
        suggested_steer_chips: [
          'Imvula ibinamandla impela gogo. Umgwaqo wakhona usamile yini? (The rain was heavy indeed gogo. Is the road still passable?)',
          'Izingane zikukhathaza ngani gogo? (How are the children causing you stress gogo?)',
          'Kukhona okunye okukukhathazayo empilweni noma emoyeni? (Is there anything else weighing on your spirit?)'
        ]
      }
    ]
  },
  {
    id: 'baba-khumalo',
    title: 'Baba Khumalo: Migrant Worker & Cough',
    subtitle: 'Navigating prolonged cough, mining dust history & TB stigma',
    difficulty: 'Intermediate',
    duration: '6 min',
    persona: 'Baba Khumalo (48yo ex-mine laborer)',
    clinicalContext: 'Cough for 4 weeks with night chills. Reluctant to discuss sputum testing.',
    socialContext: 'Fears community gossip and loss of casual day labor.',
    conversationalObjective: 'De-stigmatize sputum testing using collective family protection framing.',
    isUpcoming: true
  },
  {
    id: 'mama-zondi',
    title: 'Mama Zondi: Traditional Medicine & Toddler',
    subtitle: 'Respectful dialogue on traditional enemas and paediatric hydration',
    difficulty: 'Advanced',
    duration: '7 min',
    persona: 'Mama Zondi (23yo first-time mother with dehydrated 18mo toddler)',
    clinicalContext: 'Acute gastroenteritis. Mother gave herbal infusion (imbiza) prior to arrival.',
    socialContext: 'Anxious about being scolded by clinic nursing staff.',
    conversationalObjective: 'Affirm maternal care while safely transitioning to oral rehydration solution.',
    isUpcoming: true
  }
];

export default function ScenariosView() {
  const [selectedScenarioId, setSelectedScenarioId] = useState('gogo-mamthethwa');
  const [showBrief, setShowBrief] = useState(true);
  const [showEnglishTranslations, setShowEnglishTranslations] = useState(true);
  const [history, setHistory] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const messagesEndRef = useRef(null);
  const activeScenario = SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];

  // Initialize or reset scenario dialogue
  useEffect(() => {
    if (activeScenario.initialDialogue) {
      setHistory(activeScenario.initialDialogue);
    } else {
      setHistory([]);
    }
    setInputText('');
    setError(null);
  }, [selectedScenarioId]);

  // Scroll to bottom on dialogue update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, loading]);

  const handleRestart = () => {
    if (activeScenario.initialDialogue) {
      setHistory(activeScenario.initialDialogue);
    } else {
      setHistory([]);
    }
    setInputText('');
    setError(null);
  };

  const handleCopyText = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(id);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSendTurn = async (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text || loading) return;

    setError(null);
    setInputText('');

    // Append doctor turn to dialogue history
    const doctorTurn = { role: 'doctor', text };
    const updatedHistory = [...history, doctorTurn];
    setHistory(updatedHistory);
    setLoading(true);

    try {
      // Format chat history for backend request
      const formattedHistory = updatedHistory.map((item) => ({
        role: item.role,
        text: item.role === 'doctor' ? item.text : item.isizulu || ''
      }));

      const res = await fetch('/api/scenario/turn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          scenario_id: selectedScenarioId,
          history: formattedHistory.slice(0, -1), // prior turns
          doctor_input: text
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.detail || `Server error: ${res.status}`);
      }

      const data = await res.json();

      const patientTurn = {
        role: 'patient',
        isizulu: cleanForeignScripts(data.patient_reply_isizulu),
        english: cleanForeignScripts(data.patient_reply_english),
        feedback: {
          natural_alternative: cleanForeignScripts(data.feedback?.natural_alternative || ''),
          cultural_and_tone_notes: cleanForeignScripts(data.feedback?.cultural_and_tone_notes || ''),
          listening_cues: cleanForeignScripts(data.feedback?.listening_cues || '')
        },
        suggested_steer_chips: (data.suggested_steer_chips || []).map(cleanForeignScripts)
      };

      setHistory([...updatedHistory, patientTurn]);
    } catch (err) {
      setError(err.message || 'Failed to simulate scenario turn.');
    } finally {
      setLoading(false);
    }
  };

  // Find the latest patient turn to extract suggested steer chips
  const latestPatientTurn = [...history].reverse().find((item) => item.role === 'patient');

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header & Scenario Selector Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-purple-950/80 border border-purple-800/70 rounded-xl text-purple-400 shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-100">Scenario Dialogue Simulator</h2>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/60">
                TASK-006
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Interactive clinical roleplay with bedside coaching and Widex hearing aid phonetic listening cues.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={() => setShowEnglishTranslations(!showEnglishTranslations)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
              showEnglishTranslations
                ? 'bg-slate-800 border-slate-700 text-slate-200'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle English translations"
          >
            <Languages className="w-3.5 h-3.5 text-purple-400" />
            <span>{showEnglishTranslations ? 'English Visible' : 'isiZulu Only'}</span>
          </button>

          <button
            type="button"
            onClick={handleRestart}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-all"
            title="Reset scenario to start"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Restart</span>
          </button>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {SCENARIOS.map((sc) => {
          const isSelected = sc.id === selectedScenarioId;
          return (
            <button
              key={sc.id}
              type="button"
              disabled={sc.isUpcoming}
              onClick={() => setSelectedScenarioId(sc.id)}
              className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-purple-950/40 border-purple-500/80 shadow-md shadow-purple-950/40'
                  : sc.isUpcoming
                  ? 'bg-slate-950/40 border-slate-800/60 opacity-60 cursor-not-allowed'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1">
                  <span
                    className={`px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-purple-900/80 text-purple-200'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {sc.difficulty}
                  </span>
                  <span className="text-slate-400">{sc.duration}</span>
                </div>
                <p className="text-xs font-bold text-slate-100 line-clamp-1">{sc.title}</p>
              </div>
              {sc.isUpcoming && (
                <span className="text-[10px] text-amber-400/90 font-medium mt-1.5">
                  Available in Next Module
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Collapsible Scenario Dossier / Brief */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <button
          type="button"
          onClick={() => setShowBrief(!showBrief)}
          className="w-full p-4 bg-slate-950/70 hover:bg-slate-950/90 transition-colors flex items-center justify-between text-left border-b border-slate-800"
        >
          <div className="flex items-center gap-2.5">
            <Stethoscope className="w-4 h-4 text-purple-400" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Scenario Dossier:
              </span>{' '}
              <span className="text-sm font-bold text-slate-100">{activeScenario.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <span>{showBrief ? 'Collapse Dossier' : 'View Dossier'}</span>
            {showBrief ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {showBrief && (
          <div className="p-5 space-y-4 text-xs sm:text-sm bg-slate-900/90">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1 bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
                <p className="font-bold uppercase tracking-wider text-[10px] text-purple-300">
                  Clinical Check Context
                </p>
                <p className="text-slate-300 leading-relaxed">{activeScenario.clinicalContext}</p>
              </div>
              <div className="space-y-1 bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
                <p className="font-bold uppercase tracking-wider text-[10px] text-amber-300">
                  Lived Realities ("Beyond the Prescription")
                </p>
                <p className="text-slate-300 leading-relaxed">{activeScenario.socialContext}</p>
              </div>
            </div>

            <div className="space-y-1 bg-purple-950/30 border border-purple-800/50 p-3 rounded-xl">
              <p className="font-bold uppercase tracking-wider text-[10px] text-purple-300 flex items-center gap-1">
                <HeartPulse className="w-3.5 h-3.5 text-purple-400" />
                Conversational Coaching Objective: "Ukubonisana"
              </p>
              <p className="text-slate-200 leading-relaxed">{activeScenario.conversationalObjective}</p>
            </div>
          </div>
        )}
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-4 bg-red-950/60 border border-red-800/80 rounded-2xl flex items-start gap-3 text-red-200 shadow-xl">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold text-red-300">Simulation Error</p>
            <p className="text-red-300/80 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Interactive Dialogue Thread */}
      <div className="space-y-6">
        {history.map((turn, tIdx) => {
          if (turn.role === 'doctor') {
            return (
              <div key={tIdx} className="flex justify-end">
                <div className="max-w-2xl bg-slate-800/90 border border-slate-700 rounded-2xl rounded-tr-sm p-4 text-slate-100 shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <span className="flex items-center gap-1">
                      <Stethoscope className="w-3 h-3 text-emerald-400" /> Clinician Turn
                    </span>
                    <span>Turn #{Math.floor(tIdx / 2) + 1}</span>
                  </div>
                  <p className="text-sm sm:text-base font-medium leading-relaxed">{turn.text}</p>
                </div>
              </div>
            );
          }

          // Patient turn
          return (
            <div key={tIdx} className="space-y-3">
              {/* Patient Speech Card */}
              <div className="max-w-3xl bg-slate-900 border-2 border-emerald-500/40 rounded-2xl rounded-tl-sm p-5 sm:p-6 shadow-2xl space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                      {activeScenario.persona}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Patient Response</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyText(turn.isizulu, `p-${tIdx}`)}
                    className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 transition-colors"
                  >
                    {copiedIndex === `p-${tIdx}` ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-300">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy isiZulu</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Spoken isiZulu text */}
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-300 leading-snug">
                  "{turn.isizulu}"
                </p>

                {/* English Translation */}
                {showEnglishTranslations && turn.english && (
                  <div className="pt-2 border-t border-slate-800/50 flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                      {turn.english}
                    </p>
                  </div>
                )}
              </div>

              {/* Conversational Coach Card (Widex listening aid tuning + Bedside nuance) */}
              {turn.feedback && (
                <div className="max-w-3xl ml-2 sm:ml-4 bg-slate-950/90 border border-purple-900/40 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 border-b border-purple-900/30 pb-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>Bedside Coach & Listening Tuning Card</span>
                  </div>

                  {/* 1. Natural Phrasing Alternative */}
                  {turn.feedback.natural_alternative && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                          Recommended Natural Framing (isiZulu):
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyText(turn.feedback.natural_alternative, `alt-${tIdx}`)}
                          className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1"
                        >
                          {copiedIndex === `alt-${tIdx}` ? (
                            <span className="text-emerald-400 font-semibold">Copied</span>
                          ) : (
                            <span>Copy Framing</span>
                          )}
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-emerald-200 bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl">
                        "{turn.feedback.natural_alternative}"
                      </p>
                    </div>
                  )}

                  {/* 2. Cultural & Tone Nuance */}
                  {turn.feedback.cultural_and_tone_notes && (
                    <div className="bg-amber-950/30 border border-amber-900/40 rounded-xl p-3 flex items-start gap-2.5 text-xs sm:text-sm">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-300">Cultural & Tone Nuance: </span>
                        <span className="text-amber-200/90 leading-relaxed">
                          {turn.feedback.cultural_and_tone_notes}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 3. Hearing Aid & Phonetic Listening Cue (Widex Tuning) */}
                  {turn.feedback.listening_cues && (
                    <div className="bg-purple-950/40 border border-purple-800/40 rounded-xl p-3 flex items-start gap-2.5 text-xs sm:text-sm">
                      <Ear className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-purple-300">
                          Acoustic & Phonetic Listening Cue (Hearing Aid Tuning):{' '}
                        </span>
                        <span className="text-purple-200/90 leading-relaxed">
                          {turn.feedback.listening_cues}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-md animate-pulse">
            <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
            <div>
              <p className="text-xs font-bold text-slate-200">Gogo MaMthethwa is speaking...</p>
              <p className="text-[10px] text-slate-400">Synthesizing rural KZN speech & listening cues</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Steer Chips (One-tap rapid response) */}
      {latestPatientTurn?.suggested_steer_chips && latestPatientTurn.suggested_steer_chips.length > 0 && (
        <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            Suggested Conversational Moves (Tap to send):
          </p>
          <div className="flex flex-wrap gap-2">
            {latestPatientTurn.suggested_steer_chips.map((chip, cIdx) => (
              <button
                key={cIdx}
                type="button"
                disabled={loading}
                onClick={() => handleSendTurn(chip)}
                className="text-left text-xs bg-slate-950 hover:bg-purple-950/60 border border-slate-800 hover:border-purple-600/70 text-slate-200 hover:text-purple-200 p-2.5 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Dialogue Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendTurn();
        }}
        className="sticky bottom-4 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-2xl flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={loading}
          placeholder="Speak to Gogo MaMthethwa (e.g. ask about her grandchildren, diet, or Pap smear)..."
          className="flex-1 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || loading}
          className={`px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
            !inputText.trim() || loading
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30 active:scale-95'
          }`}
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
