import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  MessageSquareQuote,
  Languages,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  AlertCircle,
  HelpCircle,
  Loader2,
  Stethoscope,
  Lightbulb,
  ArrowRight,
  ClipboardCopy,
  Info,
  Send,
  Compass,
  History,
  ChevronDown,
  ChevronUp,
  User,
  Activity
} from 'lucide-react';

const PRESET_EXAMPLES = [
  {
    label: 'TB Screen',
    mode: 'questions',
    text: '45yo male, cough 3 weeks, lives in homestead with extended family. Screen for night sweats, weight loss, and household contacts.'
  },
  {
    label: 'Diarrhoea (Child)',
    mode: 'questions',
    text: '2yo child presenting with acute watery diarrhea for 2 days, lethargic. Check rehydration status, breastfeeding, and traditional enemas.'
  },
  {
    label: 'Hypertension (Gogo)',
    mode: 'questions',
    text: '62yo gogo with BP 168/104. Inquire politely about pill adherence, traditional herbal mixtures (intelezi), and dizziness.'
  },
  {
    label: 'Meds Instructions',
    mode: 'translate',
    text: 'Take 2 white tablets every morning with clean water after eating porridge. Do not chew them.'
  },
  {
    label: 'Hospital Referral',
    mode: 'translate',
    text: 'We must refer you to the district hospital in town tomorrow for a chest X-ray and further investigation.'
  },
  {
    label: 'Economic Empathy',
    mode: 'translate',
    text: 'We understand transport and money are difficult right now; all tests and medications here at the clinic are free.'
  }
];

const STEERING_HINTS = [
  'Ask about wet nappies / urine output',
  'Check for sunken eyes or lethargy',
  'Inquire about traditional medicine (intelezi/imbiza)',
  'Check household contacts with chronic cough',
  'Ask about fever duration and chills'
];

function tryParseStructuredQuestions(result) {
  if (!result) return null;
  if (typeof result === 'object' && Array.isArray(result.questions) && result.questions.length > 0) {
    return result;
  }
  if (typeof result === 'string') {
    try {
      const parsed = JSON.parse(result);
      if (typeof parsed === 'object' && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
        return parsed;
      }
    } catch {
      // Not raw JSON string
    }
  }
  return null;
}

export default function LiveConsult() {
  const [mode, setMode] = useState('questions'); // 'questions' | 'translate'
  const [inputText, setInputText] = useState('');
  const [caseSummary, setCaseSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSteering, setIsSteering] = useState(false);
  const [response, setResponse] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [consultSummary, setConsultSummary] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(true);
  const [steerInput, setSteerInput] = useState('');
  const [error, setError] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback
    }
  };

  // Initial consult submission
  const handleInitialSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResponse(null);
    setCurrentQuestions([]);
    setHistory([]);
    setCaseSummary(inputText.trim());

    try {
      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: inputText.trim(),
          mode
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.detail || `Server error: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);

      if (mode === 'questions') {
        const structured = tryParseStructuredQuestions(data.result);
        if (structured) {
          setCurrentQuestions(structured.questions || []);
          setConsultSummary(structured.summary || '');
        }
      }
    } catch (err) {
      setError(err.message || 'Failed to start consultation.');
    } finally {
      setLoading(false);
    }
  };

  // Steering step: trigger next turn based on patient reply or steering instruction
  const handleSteerLoop = async ({ doctorTurn, patientTurn, customInstruction }) => {
    if (isSteering) return;

    setIsSteering(true);
    setError(null);

    // Build updated history
    const updatedHistory = [...history];
    if (doctorTurn && patientTurn) {
      updatedHistory.push({
        id: Date.now(),
        doctorText: doctorTurn.isizulu,
        doctorSubtext: doctorTurn.english,
        patientText: patientTurn.isizulu,
        patientSubtext: patientTurn.english,
        clinicalMeaning: patientTurn.clinical_meaning,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setHistory(updatedHistory);
    } else if (customInstruction) {
      updatedHistory.push({
        id: Date.now(),
        doctorText: `[Steering Focus] ${customInstruction}`,
        doctorSubtext: 'Clinician directed consultation inquiry',
        patientText: 'Pending response',
        patientSubtext: '',
        clinicalMeaning: 'Doctor Steering Note',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setHistory(updatedHistory);
    }

    try {
      // Map history for backend payload
      const historyPayload = updatedHistory.map((turn) => [
        { role: 'doctor', text: turn.doctorText, subtext: turn.doctorSubtext },
        { role: 'patient', text: turn.patientText, subtext: `${turn.patientSubtext} (${turn.clinicalMeaning})` }
      ]).flat();

      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: caseSummary || inputText,
          mode: 'loop',
          history: historyPayload,
          steer_instruction: customInstruction || ''
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.detail || `Server error: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);

      const structured = tryParseStructuredQuestions(data.result);
      if (structured) {
        setCurrentQuestions(structured.questions || []);
        setConsultSummary(structured.summary || '');
      }
      setSteerInput('');
    } catch (err) {
      setError(err.message || 'Failed to steer consultation.');
    } finally {
      setIsSteering(false);
    }
  };

  const handleResetConsult = () => {
    setInputText('');
    setCaseSummary('');
    setResponse(null);
    setCurrentQuestions([]);
    setConsultSummary('');
    setHistory([]);
    setSteerInput('');
    setError(null);
  };

  const handlePresetClick = (preset) => {
    setMode(preset.mode);
    setInputText(preset.text);
    setError(null);
  };

  const handleCopyAll = () => {
    if (!response) return;
    let fullText = '';
    if (currentQuestions.length > 0) {
      fullText = (consultSummary ? `${consultSummary}\n\n` : '') +
        currentQuestions
          .map((q, i) => `Question #${i + 1}\nisiZulu: ${q.isizulu}\nEnglish: ${q.english}\nCultural Note: ${q.cultural_note}`)
          .join('\n\n');
    } else {
      fullText = typeof response.result === 'object'
        ? JSON.stringify(response.result, null, 2)
        : String(response.result);
    }
    copyToClipboard(fullText, 'all');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-40">
      {/* Mode Selector Toggle */}
      <div className="bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl flex gap-1.5 backdrop-blur-md shadow-xl">
        <button
          type="button"
          onClick={() => {
            setMode('questions');
            setError(null);
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-150 ${
            mode === 'questions'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <MessageSquareQuote className="w-4 h-4" />
          <span>Interactive Consultation Loop</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setMode('translate');
            setError(null);
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-150 ${
            mode === 'translate'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/60'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span>Express Translate</span>
        </button>
      </div>

      {/* Top Utility Bar & Presets */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 backdrop-blur-sm space-y-2.5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-400" /> Rural KZN Presets
            </span>
            {history.length > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono font-bold">
                {history.length} {history.length === 1 ? 'exchange' : 'exchanges'} logged
              </span>
            )}
          </div>

          {(caseSummary || history.length > 0) && (
            <button
              type="button"
              onClick={handleResetConsult}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <RotateCcw className="w-3 h-3 text-emerald-400" /> New Consult
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {PRESET_EXAMPLES.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all ${
                preset.mode === mode && inputText === preset.text
                  ? 'bg-slate-800 border-emerald-500 text-emerald-300 shadow-sm'
                  : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${preset.mode === 'questions' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Intake Input Area (Active when starting or modifying intake) */}
      {!caseSummary ? (
        <form onSubmit={handleInitialSubmit} className="bg-slate-900/90 border-2 border-slate-800 focus-within:border-emerald-500/80 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md space-y-4 transition-all">
          <div className="flex items-center justify-between">
            <label htmlFor="clinical-input" className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-emerald-400" />
              {mode === 'questions' ? 'Patient Intake / Clinical Summary:' : 'English Medical Instruction / Phrase:'}
            </label>
            {inputText && (
              <button
                type="button"
                onClick={() => setInputText('')}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <textarea
            id="clinical-input"
            rows={4}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              mode === 'questions'
                ? 'e.g. 3yo child presenting with acute diarrhoea and mild dehydration for 24 hours. Check hydration, breastfeeding, and traditional remedies...'
                : 'e.g. Take 2 of these white tablets every morning with clean water after eating porridge...'
            }
            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl p-4 text-slate-100 placeholder-slate-600 text-base leading-relaxed resize-y outline-none transition-all"
          />

          <div className="flex items-center justify-between pt-1">
            <p className="text-xs text-slate-400 hidden sm:block">
              {mode === 'questions'
                ? 'Generates culturally respectful questions with clickable patient responses.'
                : 'Translates to colloquial spoken isiZulu with concord and idiom notes.'}
            </p>

            <button
              type="submit"
              disabled={!inputText.trim() || loading}
              className={`w-full sm:w-auto ml-auto px-7 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                !inputText.trim() || loading
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 active:scale-95'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Initiating Consultation...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Start Consultation Loop</span>
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        /* Active Intake Banner */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-start justify-between gap-3 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-950/80 border border-emerald-800 rounded-xl text-emerald-400 mt-0.5">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Case Intake</p>
              <p className="text-sm text-slate-200 mt-0.5 font-medium">{caseSummary}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetConsult}
            className="text-xs text-slate-400 hover:text-slate-200 px-2.5 py-1 rounded-lg border border-slate-700 bg-slate-800/80 shrink-0 font-medium"
          >
            Edit Intake
          </button>
        </div>
      )}

      {/* Error Banner */}
      {error && (
        <div className="p-4 bg-red-950/60 border border-red-800/80 rounded-2xl flex items-start gap-3 text-red-200 shadow-xl">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold text-red-300">Consultation Error</p>
            <p className="text-red-300/80 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Consultation History Log */}
      {history.length > 0 && (
        <div className="bg-slate-900/95 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all">
          <button
            type="button"
            onClick={() => setShowHistory(!showHistory)}
            className="w-full flex items-center justify-between p-4 bg-slate-950/60 hover:bg-slate-950/90 transition-colors border-b border-slate-800 text-left"
          >
            <div className="flex items-center gap-2.5">
              <History className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-slate-200">
                Consultation History ({history.length} {history.length === 1 ? 'Turn' : 'Turns'})
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <span>{showHistory ? 'Collapse' : 'Expand'}</span>
              {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showHistory && (
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto divide-y divide-slate-800/50">
              {history.map((turn, idx) => (
                <div key={turn.id || idx} className="pt-3 first:pt-0 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-slate-400">Turn #{idx + 1}</span>
                    <span>{turn.timestamp}</span>
                  </div>

                  {/* Doctor asked */}
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm bg-slate-950/50 rounded-xl p-2.5 border border-slate-800/80">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold uppercase text-[10px] shrink-0 mt-0.5">
                      Doctor
                    </span>
                    <div>
                      <p className="font-semibold text-emerald-300">"{turn.doctorText}"</p>
                      {turn.doctorSubtext && (
                        <p className="text-slate-400 text-xs mt-0.5">→ {turn.doctorSubtext}</p>
                      )}
                    </div>
                  </div>

                  {/* Patient replied */}
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm bg-blue-950/20 rounded-xl p-2.5 border border-blue-900/30">
                    <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 font-bold uppercase text-[10px] shrink-0 mt-0.5">
                      Patient
                    </span>
                    <div className="space-y-1">
                      <p className="font-semibold text-blue-200">"{turn.patientText}"</p>
                      {turn.patientSubtext && (
                        <p className="text-slate-400 text-xs">→ {turn.patientSubtext}</p>
                      )}
                      {turn.clinicalMeaning && (
                        <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-800/50">
                          Clinical Sign: {turn.clinicalMeaning}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Output Display / Active Question Cards Area */}
      {response && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Header Bar */}
          <div className="flex items-center justify-between bg-slate-900 border border-slate-800 px-5 py-3 rounded-2xl shadow-xl flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="text-xs uppercase tracking-wider font-extrabold text-slate-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                Active Co-Pilot Recommendations
              </span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1.5 ${
                  response.provider_used === 'vertex'
                    ? 'bg-purple-950/80 text-purple-300 border border-purple-800/70'
                    : 'bg-amber-950/80 text-amber-300 border border-amber-800/70'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${response.provider_used === 'vertex' ? 'bg-purple-400' : 'bg-amber-400'}`} />
                {response.provider_used === 'vertex' ? 'Vertex AI' : 'OpenRouter'} ({response.model})
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyAll}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
                copiedId === 'all'
                  ? 'bg-emerald-950 border-emerald-700 text-emerald-300'
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
              }`}
            >
              {copiedId === 'all' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>All Copied</span>
                </>
              ) : (
                <>
                  <ClipboardCopy className="w-3.5 h-3.5" />
                  <span>Copy Questions</span>
                </>
              )}
            </button>
          </div>

          {/* Structured Clinical Question Cards View */}
          {currentQuestions.length > 0 ? (
            <div className="space-y-4">
              {consultSummary && (
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex items-start gap-3 text-slate-300 text-sm">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200">Clinical Focus: </span>
                    <span>{consultSummary}</span>
                  </div>
                </div>
              )}

              <div className="grid gap-5">
                {currentQuestions.map((q, qIdx) => (
                  <div
                    key={qIdx}
                    className="bg-slate-900 border-2 border-slate-800/90 hover:border-emerald-500/50 rounded-2xl p-5 shadow-2xl transition-all space-y-4"
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                      <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                        Option #{qIdx + 1}
                      </span>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(q.isizulu, qIdx)}
                        className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                          copiedId === qIdx
                            ? 'bg-emerald-950 border-emerald-700 text-emerald-300'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        {copiedId === qIdx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-slate-400" />
                            <span>Copy isiZulu</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* isiZulu Primary Question */}
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Ask Patient / Caregiver:
                      </p>
                      <p className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-300 leading-snug">
                        "{q.isizulu}"
                      </p>
                    </div>

                    {/* English Meaning */}
                    <div className="flex items-start gap-2 pt-1 border-t border-slate-800/50">
                      <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">English:</span>
                        <span className="text-sm sm:text-base text-slate-200 font-medium">{q.english}</span>
                      </div>
                    </div>

                    {/* Cultural & Linguistic Note */}
                    {q.cultural_note && (
                      <div className="bg-slate-950/70 border border-amber-900/30 rounded-xl p-3 flex items-start gap-2.5 text-amber-200/90 text-xs sm:text-sm">
                        <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-amber-300">Bedside Rationale: </span>
                          <span>{q.cultural_note}</span>
                        </div>
                      </div>
                    )}

                    {/* Anticipated Patient Responses (Interactive Steering Loop) */}
                    {q.anticipated_patient_replies && q.anticipated_patient_replies.length > 0 && (
                      <div className="pt-2 border-t border-slate-800/80 space-y-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-blue-400" />
                          Anticipated Patient / Caregiver Responses (Tap to advance turn):
                        </p>

                        <div className="grid gap-2 sm:grid-cols-2">
                          {q.anticipated_patient_replies.map((reply, rIdx) => (
                            <button
                              key={rIdx}
                              type="button"
                              disabled={isSteering}
                              onClick={() => handleSteerLoop({ doctorTurn: q, patientTurn: reply })}
                              className="text-left bg-slate-950/80 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-600/80 rounded-xl p-3 transition-all duration-150 flex flex-col justify-between group active:scale-[0.99] disabled:opacity-50 shadow-md"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 group-hover:bg-blue-900/60 text-slate-300 group-hover:text-blue-200 border border-slate-700/60 font-semibold truncate">
                                    {reply.clinical_meaning}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                                </div>
                                <p className="text-sm font-bold text-slate-100 group-hover:text-blue-200 leading-snug">
                                  "{reply.isizulu}"
                                </p>
                                <p className="text-xs text-slate-400 group-hover:text-slate-300">
                                  {reply.english}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Unstructured / Markdown Output View (Express Translate or Fallback) */
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="prose prose-invert max-w-none prose-emerald prose-headings:font-bold prose-headings:text-slate-100 prose-p:text-slate-200 prose-p:leading-relaxed prose-strong:text-emerald-300 prose-blockquote:border-emerald-500 prose-blockquote:bg-slate-950/60 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-xl prose-table:border-slate-800 prose-th:bg-slate-950 prose-th:text-slate-300 prose-td:border-slate-800">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {typeof response.result === 'object'
                    ? response.result.raw_text || JSON.stringify(response.result, null, 2)
                    : String(response.result)}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sticky Bottom Steering Bar (Visible during active consultation) */}
      {caseSummary && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800/90 backdrop-blur-xl px-4 py-3 shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-2">
            {/* Quick Steering Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Compass className="w-3 h-3 text-emerald-400" /> Steer:
              </span>
              {STEERING_HINTS.map((hint, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={isSteering}
                  onClick={() => setSteerInput(hint)}
                  className="shrink-0 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-emerald-300 rounded-lg font-medium transition-colors"
                >
                  {hint}
                </button>
              ))}
            </div>

            {/* Steering Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (steerInput.trim()) {
                  handleSteerLoop({ customInstruction: steerInput.trim() });
                }
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={steerInput}
                onChange={(e) => setSteerInput(e.target.value)}
                placeholder="Steer consultation (e.g. 'ask about wet nappies' or type what patient said)..."
                disabled={isSteering}
                className="flex-1 bg-slate-900 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 text-sm outline-none transition-all"
              />

              <button
                type="submit"
                disabled={!steerInput.trim() || isSteering}
                className={`px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                  !steerInput.trim() || isSteering
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 active:scale-95'
                }`}
              >
                {isSteering ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">Steer Loop</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
