import React, { useState } from 'react';
import ChessGame from './components/ChessGame';
import GMGames from './components/GMGames';
import OpeningsExplorer from './components/OpeningsExplorer';
import TrapsExplorer from './components/TrapsExplorer';
import CHESS_TRAPS from './data/trapsData';

type TabView = 'engine' | 'gm-games' | 'openings' | 'traps';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>('engine');
  const [engineInitialFen, setEngineInitialFen] = useState<string | undefined>(undefined);

  const handleAnalyzePosition = (fen: string) => {
    setEngineInitialFen(fen);
    setActiveTab('engine');
  };

  return (
    <div className="min-h-screen bg-[#12110e] text-gray-100 flex flex-col font-sans selection:bg-[#81b64c]/30 selection:text-white pb-16 sm:pb-0">
      {/* ── Top Navigation Bar (Desktop & Tablet) ───────────────────────────── */}
      <nav className="bg-[#171612]/95 border-b border-white/[0.07] px-3 sm:px-5 py-2.5 flex items-center justify-between text-xs sticky top-0 z-40 backdrop-blur-xl shadow-lg shadow-black/20">
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Logo & Brand */}
          <div
            className="flex items-center gap-2 select-none group cursor-pointer"
            onClick={() => setActiveTab('engine')}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#81b64c] to-[#4d7c0f] flex items-center justify-center shadow-md shadow-[#81b64c]/20 border border-[#9fd168]/30 group-hover:scale-105 transition-transform">
              <span className="text-base sm:text-lg text-black leading-none drop-shadow">♚</span>
            </div>
            <div>
              <span className="font-heading font-extrabold text-white tracking-tight text-xs sm:text-sm block leading-tight">
                Stockfish<span className="text-[#81b64c] font-black">16</span>
              </span>
              <span className="text-[9px] text-gray-400 font-mono tracking-wider uppercase block leading-none">
                NNUE Suite
              </span>
            </div>
          </div>

          <div className="h-5 w-px bg-white/10 hidden sm:block" />

          {/* Desktop & Tablet Navigation Pill Tabs */}
          <div className="hidden sm:flex items-center bg-[#100f0d] p-1 rounded-xl border border-white/[0.08] shadow-inner gap-1">
            <button
              onClick={() => setActiveTab('engine')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 text-xs btn-press ${
                activeTab === 'engine'
                  ? 'bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] text-black shadow-md shadow-[#81b64c]/25 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>⚡</span>
              <span>Engine & Board</span>
            </button>
            <button
              onClick={() => setActiveTab('gm-games')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 text-xs btn-press ${
                activeTab === 'gm-games'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/25 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>👑</span>
              <span>1,100 GM Legends</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                  activeTab === 'gm-games'
                    ? 'bg-black/30 text-black'
                    : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                }`}
              >
                1,100
              </span>
            </button>
            <button
              onClick={() => setActiveTab('openings')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 text-xs btn-press ${
                activeTab === 'openings'
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-black shadow-md shadow-teal-500/25 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>📖</span>
              <span>Openings Explorer</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                  activeTab === 'openings'
                    ? 'bg-black/30 text-black'
                    : 'bg-teal-500/15 text-teal-300 border border-teal-500/30'
                }`}
              >
                ECO
              </span>
            </button>
            <button
              onClick={() => setActiveTab('traps')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 text-xs btn-press ${
                activeTab === 'traps'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md shadow-rose-500/25 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🎯</span>
              <span>Opening Traps</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                  activeTab === 'traps'
                    ? 'bg-white/20 text-white'
                    : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                }`}
              >
                {CHESS_TRAPS.length}
              </span>
            </button>
          </div>
        </div>

        {/* Right Status Badge */}
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono">
          <div className="flex items-center gap-1.5 bg-[#1a1915] border border-white/[0.08] px-2.5 py-1 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-emerald-400 font-bold hidden sm:inline">Stockfish 16 NNUE</span>
            <span className="text-emerald-400 font-bold sm:hidden">NNUE 16</span>
          </div>
        </div>
      </nav>

      {/* ── Main View Container ─────────────────────────────────────────────── */}
      <div className="flex-1 overflow-x-hidden">
        {activeTab === 'engine' ? (
          <ChessGame
            initialFen={engineInitialFen}
            initialMode={engineInitialFen ? 'analysis' : undefined}
            onOpenGMLibrary={() => setActiveTab('gm-games')}
            onOpenOpenings={() => setActiveTab('openings')}
            onOpenTraps={() => setActiveTab('traps')}
          />
        ) : activeTab === 'gm-games' ? (
          <GMGames
            onAnalyzePosition={handleAnalyzePosition}
            onBackToGame={() => setActiveTab('engine')}
          />
        ) : activeTab === 'openings' ? (
          <OpeningsExplorer
            onAnalyzePosition={handleAnalyzePosition}
            onOpenTraps={() => setActiveTab('traps')}
          />
        ) : (
          <TrapsExplorer onAnalyzePosition={handleAnalyzePosition} />
        )}
      </div>

      {/* ── Mobile Bottom Navigation Bar (Screens < 640px) ─────────────────── */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#151410]/95 backdrop-blur-2xl border-t border-white/[0.1] px-2 py-1.5 shadow-[0_-8px_20px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('engine')}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
              activeTab === 'engine'
                ? 'bg-[#81b64c]/20 text-[#81b64c] font-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-base leading-none">⚡</span>
            <span className="text-[10px] mt-0.5 tracking-tight font-heading">Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('gm-games')}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all relative ${
              activeTab === 'gm-games'
                ? 'bg-amber-500/20 text-amber-400 font-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-base leading-none">👑</span>
            <span className="text-[10px] mt-0.5 tracking-tight font-heading">1.1K GMs</span>
          </button>

          <button
            onClick={() => setActiveTab('openings')}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
              activeTab === 'openings'
                ? 'bg-teal-500/20 text-teal-300 font-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-base leading-none">📖</span>
            <span className="text-[10px] mt-0.5 tracking-tight font-heading">Openings</span>
          </button>

          <button
            onClick={() => setActiveTab('traps')}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all relative ${
              activeTab === 'traps'
                ? 'bg-rose-500/20 text-rose-400 font-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-base leading-none">🎯</span>
            <span className="text-[10px] mt-0.5 tracking-tight font-heading">Traps</span>
            <span className="absolute top-1 right-2 text-[8px] bg-rose-500 text-white font-mono font-bold px-1 rounded-full leading-none">
              205
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
