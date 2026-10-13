import React from 'react';
import { Dumbbell, Target, Zap, ArrowRight } from 'lucide-react';

export default function DrillsView() {
  const mockDrills = [
    {
      title: 'Polite Inquiry Openers',
      focus: 'Concords & Respectful Address',
      count: '10 Cards',
      description: 'Mastering "Ingabe...", "Ngicela ukubuza...", and honorifics (Mkhulu, Gogo, Baba).'
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
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-950/80 border border-amber-800/60 rounded-xl text-amber-400">
            <Dumbbell className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">isiZulu Clinical Drills Gym</h2>
            <p className="text-sm text-slate-400">Rapid-fire interactive flashcard drills to build conversational fluency.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockDrills.map((drill, idx) => (
          <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300">{drill.focus}</span>
                <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {drill.count}</span>
              </div>
              <h3 className="font-bold text-slate-100 text-base mb-2">{drill.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{drill.description}</p>
            </div>
            <button
              type="button"
              disabled
              className="mt-5 w-full py-2 px-3 bg-slate-800 text-slate-500 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-not-allowed"
            >
              <span>Coming in Next Module</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
