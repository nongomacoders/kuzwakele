import React, { useState, useEffect } from 'react';
import { Activity, Radio, BookOpen, Dumbbell, Stethoscope, RefreshCw } from 'lucide-react';
import LiveConsult from './components/LiveConsult';
import ScenariosView from './components/ScenariosView';
import DrillsGym from './components/DrillsGym';

export default function App() {
  const [activeTab, setActiveTab] = useState('live'); // 'live' | 'scenarios' | 'drills'
  const [backendStatus, setBackendStatus] = useState('checking'); // 'online' | 'offline' | 'checking'
  const [activeProvider, setActiveProvider] = useState(null);

  const checkHealth = async () => {
    try {
      setBackendStatus('checking');
      const res = await fetch('/api/health');
      if (!res.ok) throw new Error('Health check failed');
      const data = await res.json();
      setBackendStatus('online');
      setActiveProvider(data.provider || 'active');
    } catch {
      setBackendStatus('offline');
      setActiveProvider(null);
    }
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Header with Title, Tabs Menu, and Backend Status on Same Level */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between gap-3">
          {/* Logo & Title Heading */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-950/50">
              <Stethoscope className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-white m-0">
                  Kuzwakele
                </h1>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80 uppercase tracking-wider">
                  KZN Clinical
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium -mt-0.5 hidden sm:block">
                Clinical isiZulu Assistant
              </p>
            </div>
          </div>

          {/* Navigation Tab Menu - Same Level as Title Heading */}
          <nav className="order-3 lg:order-2 w-full lg:w-auto flex items-center justify-center gap-1 sm:gap-1.5 bg-slate-900/90 border border-slate-800 p-1 rounded-2xl shadow-inner overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('live')}
              className={`flex items-center gap-2 py-1.5 px-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === 'live'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Radio className="w-4 h-4" />
              <span>Live Co-Pilot</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('scenarios')}
              className={`flex items-center gap-2 py-1.5 px-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === 'scenarios'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-950/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Scenarios</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('drills')}
              className={`flex items-center gap-2 py-1.5 px-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === 'drills'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>Drills Gym</span>
            </button>
          </nav>

          {/* Backend Status Indicator */}
          <div className="order-2 lg:order-3 flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={checkHealth}
              title="Click to recheck backend status"
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-xs font-medium transition-all group"
            >
              <span className="relative flex h-2.5 w-2.5">
                {backendStatus === 'online' && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    backendStatus === 'online'
                      ? 'bg-emerald-400'
                      : backendStatus === 'offline'
                      ? 'bg-red-500'
                      : 'bg-amber-400'
                  }`}
                />
              </span>
              <span className="hidden md:inline text-slate-300">
                {backendStatus === 'online'
                  ? `API Online (${activeProvider || 'ready'})`
                  : backendStatus === 'offline'
                  ? 'API Offline'
                  : 'Checking...'}
              </span>
              <RefreshCw className="w-3 h-3 text-slate-500 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 pb-20">
        {activeTab === 'live' && <LiveConsult />}
        {activeTab === 'scenarios' && <ScenariosView />}
        {activeTab === 'drills' && <DrillsGym />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-4 px-4 text-center text-xs text-slate-500">
        <p>Kuzwakele • Culturally Respectful Clinical isiZulu Assistant for Rural Healthcare Providers</p>
      </footer>
    </div>
  );
}
