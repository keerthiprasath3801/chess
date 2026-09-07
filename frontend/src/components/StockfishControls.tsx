import React from 'react';
import { Cpu, Activity, Lightbulb, Gauge, Zap } from 'lucide-react';
import { StockfishEval } from '../hooks/useStockfish';

interface StockfishControlsProps {
  evaluation: StockfishEval;
  depth: number;
  setDepth: (depth: number) => void;
  isEngineReady: boolean;
  onGetHint?: () => void;
  showingHint?: boolean;
}

export const StockfishControls: React.FC<StockfishControlsProps> = ({
  evaluation,
  depth,
  setDepth,
  isEngineReady,
  onGetHint,
  showingHint,
}) => {
  const getEvalText = () => {
    if (evaluation.mate !== null) {
      return `#${evaluation.mate > 0 ? '+' : ''}${evaluation.mate}`;
    }
    if (evaluation.cp !== null) {
      const score = (evaluation.cp / 100).toFixed(2);
      return evaluation.cp > 0 ? `+${score}` : `${score}`;
    }
    return '0.00';
  };

  const evalColor =
    evaluation.mate !== null
      ? evaluation.mate > 0
        ? 'text-emerald-400'
        : 'text-red-400'
      : evaluation.cp !== null
      ? evaluation.cp > 30
        ? 'text-emerald-400'
        : evaluation.cp < -30
        ? 'text-red-400'
        : 'text-gray-100'
      : 'text-gray-100';

  const depthPresets = [
    { label: 'Fast',    value: 5 },
    { label: 'Normal',  value: 10 },
    { label: 'Deep',    value: 15 },
    { label: 'Master',  value: 18 },
    { label: 'Legend',  value: 20 },
  ];

  const depthProgress = Math.round((depth / 25) * 100);

  return (
    <div className="bg-[#181714]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#81b64c]/30 to-[#4d7c0f]/20 border border-[#81b64c]/40 flex items-center justify-center shrink-0 shadow-sm">
            <Cpu className="w-4 h-4 text-[#81b64c]" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-white text-xs sm:text-sm tracking-tight leading-tight">
              Stockfish 16 <span className="text-[#81b64c]">NNUE</span>
            </h3>
            <p className="text-[9px] sm:text-[10px] text-gray-400 font-mono leading-tight">Neural Network Evaluation</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {evaluation.isAnalyzing && (
            <span className="text-[9px] text-[#81b64c] font-mono animate-pulse hidden sm:inline">analyzing…</span>
          )}
          <div className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
            isEngineReady
              ? 'bg-emerald-950/60 border-emerald-700/40 text-emerald-400'
              : 'bg-amber-950/60 border-amber-700/40 text-amber-400'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isEngineReady ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-amber-400 animate-pulse'}`} />
            <span className="font-mono text-[10px] font-bold">
              {isEngineReady ? 'Ready' : 'Loading…'}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 py-3.5 space-y-3.5">
        {/* Eval + Depth Row */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#22201b] p-3 rounded-2xl border border-white/5 shadow-inner">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Evaluation</span>
              <Zap className="w-3 h-3 text-[#81b64c]" />
            </div>
            <div className={`text-2xl font-black font-mono leading-none ${evalColor}`}>
              {getEvalText()}
            </div>
          </div>

          <div className="bg-[#22201b] p-3 rounded-2xl border border-white/5 shadow-inner">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Depth</span>
              {evaluation.isAnalyzing ? (
                <Activity className="w-3 h-3 text-[#81b64c] animate-spin" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              )}
            </div>
            <div className="text-2xl font-black font-mono text-white leading-none">
              {evaluation.depth}
              <span className="text-[10px] text-gray-500 font-normal ml-1">/ {depth}</span>
            </div>
          </div>
        </div>

        {/* Depth Presets */}
        <div>
          <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1.5">
            <span className="flex items-center gap-1">
              <Gauge className="w-3 h-3 text-[#81b64c]" />
              Depth Preset
            </span>
            <span className="font-mono text-gray-300 font-bold">{depth} plies</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5 mb-2">
            {depthPresets.map((preset) => (
              <button
                key={preset.value}
                onClick={() => setDepth(preset.value)}
                className={`py-1.5 rounded-xl text-[10px] font-bold transition-all border btn-press ${
                  depth === preset.value
                    ? 'bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] text-black border-[#81b64c] shadow-md shadow-[#81b64c]/20 font-black'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="relative pt-1">
            <input
              type="range"
              min="4"
              max="25"
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="w-full h-1.5 bg-[#262420] rounded-lg appearance-none cursor-pointer accent-[#81b64c]"
            />
            <div
              className="absolute top-1 left-0 h-1.5 bg-gradient-to-r from-[#81b64c] to-[#9fd168] rounded-lg pointer-events-none transition-all"
              style={{ width: `${depthProgress}%` }}
            />
          </div>
        </div>

        {/* Hint Button */}
        {onGetHint && (
          <button
            onClick={onGetHint}
            className={`w-full py-2.5 px-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 border btn-press ${
              showingHint
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md shadow-amber-500/15'
                : 'bg-white/5 hover:bg-white/10 text-amber-400 border-white/10 hover:border-amber-500/30'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            {showingHint ? 'Hide Engine Hint' : 'Show Engine Recommendation Hint'}
          </button>
        )}

        {/* Best Move */}
        {evaluation.bestMove && (
          <div className="bg-[#22201b] px-3.5 py-2.5 rounded-2xl border border-white/5 flex items-center justify-between">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Best Move</span>
            <span className="font-mono font-black text-black text-sm bg-[#81b64c] px-3 py-1 rounded-xl shadow-md shadow-[#81b64c]/20">
              {evaluation.bestMove}
              {evaluation.ponder && (
                <span className="text-black/70 ml-1.5 font-normal text-xs">({evaluation.ponder})</span>
              )}
            </span>
          </div>
        )}

        {/* PV Line */}
        {evaluation.pv && evaluation.pv !== evaluation.bestMove && (
          <div className="bg-[#22201b] px-3.5 py-2.5 rounded-2xl border border-white/5">
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Principal Variation</div>
            <div className="font-mono text-[10px] text-gray-300 truncate tracking-wide">
              {evaluation.pv}
            </div>
          </div>
        )}

        {/* Stats Row */}
        {evaluation.nodes > 0 && (
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 px-1 pt-1 border-t border-white/[0.04]">
            <span>{(evaluation.nodes / 1000).toFixed(0)}k nodes</span>
            <span>{evaluation.nps > 0 ? `${(evaluation.nps / 1000).toFixed(0)}k nps` : ''}</span>
            <span>{evaluation.time > 0 ? `${(evaluation.time / 1000).toFixed(1)}s` : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
};
