import React, { useState } from 'react';
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
  Stethoscope
} from 'lucide-react';

const PRESET_EXAMPLES = {
  questions: [
    {
      label: 'Adult TB screen',
      text: '45yo male, cough 3 weeks, lives in homestead with extended family. Need to screen for night sweats, weight loss, and household contacts.'
    },
    {
      label: 'Paediatric Diarrhoea',
      text: '2yo child presenting with watery diarrhea for 2 days, refusing feeds. Check rehydration status, breastfeeding, and traditional remedies used.'
    },
    {
      label: 'Hypertension Follow-up',
      text: '62yo gogo with BP 168/104. Inquire about adherence, salty foods/injera, traditional herbals (intelezi), and dizziness.'
    }
  ],
  translate: [
    {
      label: 'Medication Instructions',
      text: 'Take two white pills every morning after eating porridge, and drink plenty of clean boiled water.'
    },
    {
      label: 'Referral to District Hospital',
      text: 'We need you to go to the district hospital in town tomorrow morning for an X-ray of your chest.'
    },
    {
      label: 'Reassurance & Empathy',
      text: 'We understand money is tight right now; these clinic tests and medicines are completely free of charge.'
    }
  ]
};

export default function LiveConsult() {
  const [mode, setMode] = useState('questions'); // 'questions' | 'translate'
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResponse(null);
    setCopied(false);

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

  const handleCopy = async () => {
    if (!response?.result) return;
    try {
      await navigator.clipboard.writeText(response.result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleClear = () => {
    setInputText('');
    setResponse(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Mode Selector Toggle */}
      <div className="bg-slate-900/80 border border-slate-800 p-1.5 rounded-2xl flex gap-1.5 backdrop-blur-md shadow-xl">
        <button
          type="button"
          onClick={() => {
            setMode('questions');
            setError(null);
          }}
          className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-150 ${
            mode === 'questions'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50'
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
          className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-150 ${
            mode === 'translate'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/50'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span>Express Translate</span>
        </button>
      </div>

      {/* Preset Quick-Fill Chips */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
          <HelpCircle className="w-3.5 h-3.5 text-slate-500" /> KZN Presets:
        </span>
        {PRESET_EXAMPLES[mode].map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setInputText(preset.text)}
            className="text-xs font-medium px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-emerald-400 rounded-lg transition-colors"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="clinical-input" className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            {mode === 'questions' ? 'Patient Intake / Clinical Summary:' : 'English Medical Instruction / Phrase:'}
          </label>
          {inputText && (
            <button
              type="button"
              onClick={handleClear}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors"
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
              ? 'e.g. 45yo male, cough 3 weeks, lives in homestead, check for night sweats...'
              : 'e.g. Take this suspension 3 times a day after meals. Do not take it on an empty stomach...'
          }
          className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl p-3.5 text-slate-100 placeholder-slate-600 text-base leading-relaxed resize-y outline-none transition-all"
        />

        <div className="flex items-center justify-between pt-1">
          <p className="text-xs text-slate-500 hidden sm:block">
            {mode === 'questions'
              ? 'Returns 3–4 natural, culturally respectful isiZulu questions with rationales.'
              : 'Translates to colloquial, respectful spoken isiZulu with concord/idiom notes.'}
          </p>

          <button
            type="submit"
            disabled={!inputText.trim() || loading}
            className={`w-full sm:w-auto ml-auto px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
              !inputText.trim() || loading
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 active:scale-95'
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error Alert */}
      {error && (
        <div className="p-4 bg-red-950/50 border border-red-800/80 rounded-2xl flex items-start gap-3 text-red-200">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-red-300">Generation Failed</p>
            <p className="text-red-300/80 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Output Display Area */}
      {response && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in duration-200">
          {/* Header Bar with Provider Badge and Copy */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Co-Pilot Recommendation
              </span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium flex items-center gap-1.5 ${
                  response.provider_used === 'vertex'
                    ? 'bg-purple-950/80 text-purple-300 border border-purple-800/60'
                    : 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${response.provider_used === 'vertex' ? 'bg-purple-400' : 'bg-amber-400'}`} />
                {response.provider_used === 'vertex' ? 'Vertex AI' : 'OpenRouter'} ({response.model})
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                copied
                  ? 'bg-emerald-950 border-emerald-700 text-emerald-300'
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Formatted Markdown/Text Output */}
          <div className="text-slate-100 text-base leading-relaxed whitespace-pre-wrap font-sans font-normal selection:bg-emerald-500 selection:text-slate-950">
            {response.result}
          </div>
        </div>
      )}
    </div>
  );
}
