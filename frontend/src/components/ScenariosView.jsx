import React from 'react';
import { BookOpen, Users, Clock, ArrowRight } from 'lucide-react';

export default function ScenariosView() {
  const mockScenarios = [
    {
      title: 'TB Screening & Homestead Contact Tracing',
      difficulty: 'Intermediate',
      duration: '5 min',
      summary: 'Practice history taking with a migrant worker experiencing prolonged cough, navigating cultural perceptions of chest illnesses.'
    },
    {
      title: 'Paediatric Gastroenteritis & Traditional Remedies',
      difficulty: 'Beginner',
      duration: '4 min',
      summary: 'Consulting with a grandmother (gogo) about a dehydrated toddler, respectfully addressing traditional enemas (insemination/ibala).'
    },
    {
      title: 'Chronic Antiretroviral Adherence Consultation',
      difficulty: 'Advanced',
      duration: '7 min',
      summary: 'Navigating disclosure concerns and clinic appointments without stigma using collective framing.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-950/80 border border-purple-800/60 rounded-xl text-purple-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">Clinical Scenarios Simulator</h2>
            <p className="text-sm text-slate-400">Simulated clinical interactions for rural KZN hospital & clinic settings.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockScenarios.map((sc, idx) => (
          <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-purple-300">{sc.difficulty}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {sc.duration}</span>
              </div>
              <h3 className="font-bold text-slate-100 text-base mb-2">{sc.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{sc.summary}</p>
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
