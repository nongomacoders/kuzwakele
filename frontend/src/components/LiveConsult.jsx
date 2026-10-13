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
  Info
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
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [copiedId, setCopiedId] = useState(null); // 'all' or index

  const structuredData = response ? tryParseStructuredQuestions(response.result) : null;

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResponse(null);
    setCopiedId(null);

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
        throw new Error(errorData.detail || `Server returned error status ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message || 'Failed to generate response. Ensure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyAll = () => {
    if (!response) return;
    let fullText = '';
    if (structuredData) {
      fullText = (structuredData.summary ? `${structuredData.summary}\n\n` : '') +
        structuredData.questions
          .map((q, i) => `Question #${i + 1}\nisiZulu: ${q.isizulu}\nEnglish: ${q.english}\nCultural Note: ${q.cultural_note}`)
          .join('\n\n');
    } else if (typeof response.result === 'object') {
      fullText = response.result.raw_text || JSON.stringify(response.result, null, 2);
    } else {
      fullText = String(response.result);
    }
    copyToClipboard(fullText, 'all');
  };

  const handleClear = () => {
    setInputText('');
    setResponse(null);
    setError(null);
  };

  const handlePresetClick = (preset) => {
    setMode(preset.mode);
    setInputText(preset.text);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
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
          <span>Clinical Questions</span>
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

      {/* Prominent KZN Preset Chips */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-3.5 backdrop-blur-sm space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" /> Rural KZN Clinical Presets
          </span>
          <span className="text-[11px] text-slate-500 hidden sm:inline">Click to pre-fill prompt</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {PRESET_EXAMPLES.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all ${
                preset.mode === mode
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-emerald-500 hover:text-emerald-400 shadow-sm'
                  : 'bg-slate-950/70 border-slate-800/90 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${preset.mode === 'questions' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form Area */}
      <form onSubmit={handleSubmit} className="bg-slate-900/90 border-2 border-slate-800 focus-within:border-emerald-500/80 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md space-y-4 transition-all">
        <div className="flex items-center justify-between">
          <label htmlFor="clinical-input" className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            {mode === 'questions' ? 'Patient Intake / Clinical Summary:' : 'English Medical Instruction / Phrase:'}
          </label>
          {inputText && (
            <button
              type="button"
              onClick={handleClear}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800"
            >
              <RotateCcw className="w-3 h-3" /> Clear
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
              ? 'e.g. 45yo male, cough 3 weeks, lives in homestead with extended family. Screen for night sweats, weight loss, and household contacts...'
              : 'e.g. Take 2 of these white tablets every morning with clean water after eating porridge...'
          }
          className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl p-4 text-slate-100 placeholder-slate-600 text-base leading-relaxed resize-y outline-none transition-all"
        />

        <div className="flex items-center justify-between pt-1">
          <p className="text-xs text-slate-400 hidden sm:block">
            {mode === 'questions'
              ? 'Generates structured Clinical Question Cards with cultural rationales.'
              : 'Translates to natural spoken isiZulu with concord and idiom explanations.'}
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
                <span>Consulting Co-Pilot...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate {mode === 'questions' ? 'Questions' : 'Translation'}</span>
              </>
            )}
          </button>
        </div>
      </form>

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

      {/* Output Display Area */}
      {response && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Header Bar */}
          <div className="flex items-center justify-between bg-slate-900 border border-slate-800 px-5 py-3 rounded-2xl shadow-xl flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="text-xs uppercase tracking-wider font-extrabold text-slate-300">
                Co-Pilot Output
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
                  <span>Copy All</span>
                </>
              )}
            </button>
          </div>

          {/* Structured Clinical Question Cards View */}
          {structuredData ? (
            <div className="space-y-4">
              {structuredData.summary && (
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex items-start gap-3 text-slate-300 text-sm">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-200">Clinical Framing: </span>
                    <span>{structuredData.summary}</span>
                  </div>
                </div>
              )}

              <div className="grid gap-4">
                {structuredData.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 border-2 border-slate-800/90 hover:border-emerald-500/60 rounded-2xl p-5 shadow-2xl transition-all space-y-3.5"
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                      <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                        Question #{idx + 1}
                      </span>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(q.isizulu, idx)}
                        className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                          copiedId === idx
                            ? 'bg-emerald-950 border-emerald-700 text-emerald-300'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        {copiedId === idx ? (
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
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">isiZulu Phrase (Ask Patient):</p>
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
                          <span className="font-bold text-amber-300">Cultural & Clinical Rationale: </span>
                          <span>{q.cultural_note}</span>
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
    </div>
  );
}
