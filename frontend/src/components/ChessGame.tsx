import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useStockfish } from '../hooks/useStockfish';

// ─── Types ────────────────────────────────────────────────────────────────────
type GameMode = 'vsEngine' | 'twoPlayer' | 'analysis' | 'editor';
type PlayerColor = 'white' | 'black';
type TimeControl = { label: string; seconds: number } | null;
type GameResult = { winner: 'white' | 'black' | 'draw'; reason: string } | null;
interface TimerState { white: number; black: number; running: boolean; }
interface Arrow { from: string; to: string; color: string; }

export interface ChessGameProps {
  initialFen?: string;
  initialMode?: GameMode;
  onOpenGMLibrary?: () => void;
  onOpenOpenings?: () => void;
  onOpenTraps?: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const DIFFICULTY = [
  { name: 'Beginner',    depth: 2,  elo: '~400',  color: '#4ade80' },
  { name: 'Easy',        depth: 4,  elo: '~800',  color: '#86efac' },
  { name: 'Medium',      depth: 6,  elo: '~1200', color: '#60a5fa' },
  { name: 'Advanced',    depth: 9,  elo: '~1600', color: '#a78bfa' },
  { name: 'Expert',      depth: 12, elo: '~1900', color: '#f59e0b' },
  { name: 'Master',      depth: 15, elo: '~2200', color: '#f97316' },
  { name: 'Grandmaster', depth: 18, elo: '~2600', color: '#ef4444' },
];

const TIME_CONTROLS: TimeControl[] = [
  null,
  { label: '1 min',  seconds: 60 },
  { label: '3 min',  seconds: 180 },
  { label: '5 min',  seconds: 300 },
  { label: '10 min', seconds: 600 },
  { label: '15 min', seconds: 900 },
  { label: '30 min', seconds: 1800 },
];

const PIECE_UNICODE: Record<string, string> = {
  wp: '♙', wb: '♗', wn: '♘', wr: '♖', wq: '♕', wk: '♔',
  bp: '♟', bb: '♝', bn: '♞', br: '♜', bq: '♛', bk: '♚',
};
const PIECE_VALUES: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9 };

// Editor palette pieces
const EDITOR_PIECES = [
  { id: 'wP', label: '♙', name: 'White Pawn' },
  { id: 'wN', label: '♘', name: 'White Knight' },
  { id: 'wB', label: '♗', name: 'White Bishop' },
  { id: 'wR', label: '♖', name: 'White Rook' },
  { id: 'wQ', label: '♕', name: 'White Queen' },
  { id: 'wK', label: '♔', name: 'White King' },
  { id: 'bP', label: '♟', name: 'Black Pawn' },
  { id: 'bN', label: '♞', name: 'Black Knight' },
  { id: 'bB', label: '♝', name: 'Black Bishop' },
  { id: 'bR', label: '♜', name: 'Black Rook' },
  { id: 'bQ', label: '♛', name: 'Black Queen' },
  { id: 'bK', label: '♚', name: 'Black King' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function getCapturedAndMaterial(game: Chess) {
  const board = game.board();
  const counts: Record<string, number> = { P:0,N:0,B:0,R:0,Q:0,p:0,n:0,b:0,r:0,q:0 };
  const init: Record<string, number>   = { P:8,N:2,B:2,R:2,Q:1,p:8,n:2,b:2,r:2,q:1 };
  board.flat().forEach(sq => {
    if (!sq) return;
    const key = sq.color === 'w' ? sq.type.toUpperCase() : sq.type;
    counts[key] = (counts[key] || 0) + 1;
  });
  const wCap: string[] = [], bCap: string[] = [];
  let wMat = 0, bMat = 0;
  Object.entries(init).forEach(([piece, initCount]) => {
    const captured = initCount - (counts[piece] || 0);
    const isWhite = piece === piece.toUpperCase();
    const t = piece.toLowerCase();
    for (let i = 0; i < captured; i++) {
      if (isWhite) { bCap.push(PIECE_UNICODE['w' + t] || piece); bMat += PIECE_VALUES[t] || 0; }
      else         { wCap.push(PIECE_UNICODE['b' + t] || piece); wMat += PIECE_VALUES[t] || 0; }
    }
  });
  return { whiteCaptured: wCap, blackCaptured: bCap, materialAdv: wMat - bMat };
}

function squareToCoords(sq: string, orientation: 'white' | 'black') {
  const file = sq.charCodeAt(0) - 97;
  const rank = parseInt(sq[1]) - 1;
  const x = orientation === 'white' ? file : 7 - file;
  const y = orientation === 'white' ? 7 - rank : rank;
  return { x, y };
}

// ─── SVG Arrow Overlay ────────────────────────────────────────────────────────
function ArrowOverlay({
  arrows, boardSize, orientation,
}: { arrows: Arrow[]; boardSize: number; orientation: 'white' | 'black' }) {
  if (!arrows.length) return null;
  const sq = boardSize / 8;
  const cx = (x: number) => sq * x + sq / 2;
  const cy = (y: number) => sq * y + sq / 2;

  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: boardSize, height: boardSize, pointerEvents: 'none', zIndex: 10 }}
      viewBox={`0 0 ${boardSize} ${boardSize}`}
    >
      <defs>
        {arrows.map((a, i) => (
          <marker
            key={`marker-${i}`}
            id={`arrowhead-${i}`}
            markerWidth="4" markerHeight="4"
            refX="2.5" refY="2"
            orient="auto"
          >
            <polygon points="0 0, 4 2, 0 4" fill={a.color} opacity="0.88" />
          </marker>
        ))}
      </defs>
      {arrows.map((arrow, i) => {
        const from = squareToCoords(arrow.from, orientation);
        const to   = squareToCoords(arrow.to, orientation);
        const x1 = cx(from.x), y1 = cy(from.y);
        const x2 = cx(to.x),   y2 = cy(to.y);
        const dx = x2 - x1, dy = y2 - y1;
        const len = Math.sqrt(dx * dx + dy * dy);
        if (len === 0) return null;
        const ux = dx / len, uy = dy / len;
        const ex = x2 - ux * sq * 0.38;
        const ey = y2 - uy * sq * 0.38;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={ex} y2={ey}
            stroke={arrow.color}
            strokeWidth={sq * 0.22}
            strokeLinecap="round"
            opacity="0.84"
            markerEnd={`url(#arrowhead-${i})`}
          />
        );
      })}
    </svg>
  );
}

// ─── Eval Bar ─────────────────────────────────────────────────────────────────
function EvalBar({ cp, mate }: { cp: number | null; mate: number | null }) {
  let pct = 50, label = '0.0';
  if (mate !== null) {
    pct = mate > 0 ? 97 : 3;
    label = mate > 0 ? `M${mate}` : `-M${Math.abs(mate)}`;
  } else if (cp !== null) {
    pct = 50 + (Math.max(-1200, Math.min(1200, cp)) / 1200) * 47;
    const s = cp / 100;
    label = s > 0 ? `+${s.toFixed(1)}` : s.toFixed(1);
  }
  return (
    <div className="flex flex-col items-center h-full select-none">
      <div className="w-3.5 sm:w-4 flex-1 rounded-lg overflow-hidden border border-white/10 shadow-inner relative bg-[#181714]">
        <div className="w-full bg-[#2a2723] transition-all duration-700 ease-out" style={{ height: `${100 - pct}%` }} />
        <div className="w-full bg-[#f3efe9] transition-all duration-700 ease-out" style={{ height: `${pct}%` }} />
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/20" />
      </div>
      <div className="mt-1 text-[8px] sm:text-[9px] font-black font-mono text-gray-400">{label}</div>
    </div>
  );
}

// ─── Player Card ─────────────────────────────────────────────────────────────
function PlayerCard({ name, color, isEngine, isActive, isThinking, timer, captured, materialAdv, showAdv, difficultyName }: {
  name: string; color: 'white' | 'black'; isEngine: boolean; isActive: boolean; isThinking: boolean;
  timer: number | null; captured: string[]; materialAdv: number; showAdv: boolean; difficultyName: string;
}) {
  return (
    <div className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border transition-all duration-300 backdrop-blur-md ${
      isActive 
        ? 'bg-[#22201b]/95 border-[#81b64c]/70 shadow-[0_0_20px_rgba(129,182,76,0.15)] ring-1 ring-[#81b64c]/30' 
        : 'bg-[#181714]/90 border-white/[0.07] hover:border-white/10'
    }`}>
      <div className="flex items-center gap-2.5 min-w-0">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm shadow-md transition-transform ${
          color === 'white' 
            ? 'bg-gradient-to-br from-gray-100 to-gray-300 text-black border border-white/80' 
            : 'bg-gradient-to-br from-[#262420] to-[#141311] text-white border border-white/10'
        } ${isActive ? 'scale-105' : ''}`}>
          {isEngine ? '🤖' : color === 'white' ? '♚' : '♚'}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-heading font-bold text-xs sm:text-sm text-white truncate max-w-[130px] sm:max-w-[190px]">{name}</span>
            {isEngine && (
              <span className="text-[8px] sm:text-[9px] font-mono font-bold bg-amber-500/15 text-amber-300 px-1.5 py-0.2 rounded-md border border-amber-500/30 shrink-0">
                {difficultyName}
              </span>
            )}
            {isActive && !isThinking && (
              <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            )}
            {isThinking && <span className="text-[9px] text-[#81b64c] font-mono animate-pulse">Thinking…</span>}
          </div>
          <div className="flex items-center gap-1 mt-0.5 flex-wrap">
            {captured.slice(0, 10).map((p, i) => (
              <span key={i} className="text-xs text-gray-400 leading-none">{p}</span>
            ))}
            {captured.length > 10 && <span className="text-[9px] text-gray-500 font-mono">+{captured.length - 10}</span>}
            {showAdv && Math.abs(materialAdv) > 0 && (
              <span className="text-[9px] text-[#81b64c] font-bold font-mono ml-1 px-1 py-0.2 rounded bg-[#81b64c]/10 border border-[#81b64c]/20">
                +{Math.abs(materialAdv)}
              </span>
            )}
          </div>
        </div>
      </div>
      {timer !== null && (
        <div className={`font-black font-mono text-sm sm:text-base px-3 py-1 rounded-xl border shrink-0 transition-all ${
          isActive
            ? timer < 30 
              ? 'bg-red-950/80 text-red-400 border-red-500/50 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.3)]' 
              : 'bg-[#81b64c]/15 text-[#81b64c] border-[#81b64c]/50 shadow-[0_0_10px_rgba(129,182,76,0.2)]'
            : 'bg-[#201e1a] text-gray-500 border-white/5'
        }`}>{formatTime(timer)}</div>
      )}
    </div>
  );
}

// ─── Move History ─────────────────────────────────────────────────────────────
function MoveHistory({ history, currentPly, onSelectPly }: {
  history: string[]; currentPly: number; onSelectPly: (p: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, [history.length]);
  const pairs: [string, string?][] = [];
  for (let i = 0; i < history.length; i += 2) pairs.push([history[i], history[i + 1]]);

  return (
    <div ref={ref} className="h-full overflow-y-auto pr-1 space-y-1">
      {pairs.length === 0
        ? <p className="text-center text-gray-500 text-xs italic py-10">No moves played yet</p>
        : pairs.map(([w, b], idx) => (
            <div key={idx} className="grid grid-cols-[24px_1fr_1fr] gap-1 text-xs items-center">
              <span className="text-gray-500 font-mono text-right pr-1 text-[10px]">{idx + 1}.</span>
              <button 
                onClick={() => onSelectPly(idx * 2)} 
                className={`px-2 py-1 rounded-lg text-left font-mono font-semibold transition truncate text-xs ${
                  currentPly === idx * 2 
                    ? 'bg-[#81b64c]/20 text-[#81b64c] border border-[#81b64c]/40 font-black' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {w}
              </button>
              {b !== undefined && (
                <button 
                  onClick={() => onSelectPly(idx * 2 + 1)} 
                  className={`px-2 py-1 rounded-lg text-left font-mono font-semibold transition truncate text-xs ${
                    currentPly === idx * 2 + 1 
                      ? 'bg-[#81b64c]/20 text-[#81b64c] border border-[#81b64c]/40 font-black' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {b}
                </button>
              )}
            </div>
          ))
      }
    </div>
  );
}

// ─── Analysis Panel ───────────────────────────────────────────────────────────
function AnalysisPanel({
  evaluation, depth, onDepthChange, showArrows, onToggleArrows,
}: {
  evaluation: ReturnType<typeof useStockfish>['evaluation'];
  depth: number; onDepthChange: (d: number) => void;
  showArrows: boolean; onToggleArrows: () => void;
  gameMode?: GameMode;
}) {
  const scoreText = () => {
    if (evaluation.mate !== null) return evaluation.mate > 0 ? `Mate in ${evaluation.mate}` : `Mated in ${Math.abs(evaluation.mate)}`;
    if (evaluation.cp !== null) { const s = evaluation.cp / 100; return s > 0 ? `+${s.toFixed(2)}` : s.toFixed(2); }
    return '—';
  };
  const advantage = () => {
    if (evaluation.mate !== null) return evaluation.mate > 0 ? 'White' : 'Black';
    if (evaluation.cp !== null) { if (Math.abs(evaluation.cp) < 30) return 'Equal'; return evaluation.cp > 0 ? 'White' : 'Black'; }
    return '—';
  };
  const pvMoves = (evaluation.pv || '').split(' ').filter(Boolean).slice(0, 8);
  const scoreColor = evaluation.mate !== null
    ? (evaluation.mate > 0 ? 'text-emerald-400' : 'text-red-400')
    : (evaluation.cp ?? 0) > 30 ? 'text-emerald-400' : (evaluation.cp ?? 0) < -30 ? 'text-red-400' : 'text-gray-200';

  return (
    <div className="space-y-3">
      {/* Evaluation Card */}
      <div className="bg-[#1a1915]/95 rounded-2xl border border-white/[0.08] p-3.5 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Live Neural Evaluation</span>
          </div>
          <div className="flex items-center gap-2">
            {evaluation.isAnalyzing && (
              <span className="text-[9px] text-[#81b64c] font-mono animate-pulse">analyzing…</span>
            )}
            <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
              depth {evaluation.depth}/{depth}
            </span>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className={`text-3xl font-black font-mono leading-none ${scoreColor}`}>{scoreText()}</div>
            <div className="text-[11px] text-gray-400 mt-1 font-medium">{advantage()} position</div>
          </div>
          <div className="text-right space-y-0.5 text-[10px] font-mono text-gray-500">
            {evaluation.nps > 0 && <div>{(evaluation.nps/1000).toFixed(0)}k nps</div>}
            {evaluation.nodes > 0 && <div>{(evaluation.nodes/1000).toFixed(0)}k nodes</div>}
          </div>
        </div>
      </div>

      {/* Best move + arrow toggle */}
      {evaluation.bestMove && (
        <div className="bg-[#1a1915]/95 rounded-2xl border border-white/[0.08] p-3 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Engine Recommendation</span>
            <button
              onClick={onToggleArrows}
              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition btn-press ${
                showArrows 
                  ? 'bg-[#81b64c]/20 text-[#81b64c] border-[#81b64c]/50 shadow-sm shadow-[#81b64c]/20 font-black' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
              }`}
            >
              {showArrows ? '↗ Arrows ON' : '↗ Arrows OFF'}
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-black font-mono text-base text-black bg-[#81b64c] px-3 py-1 rounded-xl shadow-md shadow-[#81b64c]/25">
              {evaluation.bestMove}
            </span>
            {evaluation.ponder && (
              <div className="text-xs text-gray-400 font-mono">
                ponder: <span className="font-bold text-amber-400">{evaluation.ponder}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PV Line */}
      {pvMoves.length > 0 && (
        <div className="bg-[#1a1917] rounded-xl border border-[#363431] p-2.5">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Principal Variation</div>
          <div className="flex flex-wrap gap-1">
            {pvMoves.map((mv, i) => (
              <span key={i} className={`font-mono text-[10px] px-1.5 py-0.5 rounded border ${
                i === 0 ? 'bg-[#81b64c]/15 text-[#81b64c] border-[#81b64c]/30 font-bold'
                : i === 1 ? 'bg-amber-900/20 text-amber-300 border-amber-800/30 font-semibold'
                : 'bg-[#262421] text-gray-500 border-[#363431]'
              }`}>{mv}</span>
            ))}
          </div>
        </div>
      )}

      {/* Depth slider */}
      <div className="bg-[#1a1917] rounded-xl border border-[#363431] p-2.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Analysis Depth</span>
          <span className="text-[11px] font-black font-mono text-[#81b64c]">{depth} plies</span>
        </div>
        <input type="range" min={4} max={25} value={depth} onChange={e => onDepthChange(+e.target.value)} className="w-full accent-[#81b64c]" />
      </div>
    </div>
  );
}

// ─── Board Editor Panel ───────────────────────────────────────────────────────
function BoardEditorPanel({
  editorTool, onSelectTool, editTurn, onSetTurn,
  castling, onToggleCastling, onClear, onReset, onApply,
}: {
  editorTool: string; onSelectTool: (id: string) => void;
  editTurn: 'w' | 'b'; onSetTurn: (t: 'w' | 'b') => void;
  castling: Record<string, boolean>; onToggleCastling: (key: string) => void;
  onClear: () => void; onReset: () => void; onApply: () => void;
}) {
  return (
    <div className="space-y-2.5">
      <div className="bg-[#1a1917] rounded-xl border border-[#81b64c]/20 p-3">
        <div className="text-[10px] font-bold text-[#81b64c] uppercase tracking-widest mb-2.5">Board Editor Palette</div>

        {/* White Pieces */}
        <div className="mb-2">
          <div className="text-[9px] font-semibold text-gray-500 mb-1">White Pieces</div>
          <div className="grid grid-cols-6 gap-1">
            {EDITOR_PIECES.filter(p => p.id.startsWith('w')).map(p => (
              <button
                key={p.id}
                title={p.name}
                onClick={() => onSelectTool(p.id)}
                className={`h-8 sm:h-9 rounded-lg border text-lg sm:text-xl flex items-center justify-center transition ${
                  editorTool === p.id
                    ? 'bg-[#81b64c] border-[#81b64c] text-black shadow-md shadow-[#81b64c]/25'
                    : 'bg-[#f0ebe5]/10 border-[#363431] text-[#f0ebe5] hover:bg-[#f0ebe5]/20'
                }`}
              >{p.label}</button>
            ))}
          </div>
        </div>

        {/* Black Pieces */}
        <div className="mb-2">
          <div className="text-[9px] font-semibold text-gray-500 mb-1">Black Pieces</div>
          <div className="grid grid-cols-6 gap-1">
            {EDITOR_PIECES.filter(p => p.id.startsWith('b')).map(p => (
              <button
                key={p.id}
                title={p.name}
                onClick={() => onSelectTool(p.id)}
                className={`h-8 sm:h-9 rounded-lg border text-lg sm:text-xl flex items-center justify-center transition ${
                  editorTool === p.id
                    ? 'bg-[#81b64c] border-[#81b64c] text-black shadow-md shadow-[#81b64c]/25'
                    : 'bg-[#1a1917] border-[#363431] text-gray-300 hover:bg-[#2d2b27]'
                }`}
              >{p.label}</button>
            ))}
          </div>
        </div>

        {/* Eraser */}
        <button
          onClick={() => onSelectTool('eraser')}
          className={`w-full py-1.5 rounded-lg border text-xs font-bold transition mb-2.5 ${
            editorTool === 'eraser'
              ? 'bg-red-800/60 border-red-600 text-red-200'
              : 'bg-[#262421] border-[#363431] text-gray-400 hover:text-red-300'
          }`}
        >
          🗑 Eraser Tool
        </button>

        {/* Turn & Castling */}
        <div className="grid grid-cols-2 gap-2 mb-2.5">
          <div>
            <div className="text-[9px] font-semibold text-gray-500 mb-1">Turn</div>
            <div className="flex gap-1">
              {(['w', 'b'] as const).map(t => (
                <button key={t} onClick={() => onSetTurn(t)}
                  className={`flex-1 py-1 rounded border text-[11px] font-bold transition ${
                    editTurn === t ? 'bg-[#81b64c]/20 border-[#81b64c]/60 text-[#81b64c]' : 'bg-[#262421] border-[#363431] text-gray-400'
                  }`}>
                  {t === 'w' ? 'White' : 'Black'}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[9px] font-semibold text-gray-500 mb-1">Castling</div>
            <div className="grid grid-cols-2 gap-0.5">
              {[
                { key: 'K', label: 'W O-O' },
                { key: 'Q', label: 'W O-O-O' },
                { key: 'k', label: 'B O-O' },
                { key: 'q', label: 'B O-O-O' },
              ].map(({ key, label }) => (
                <button key={key} onClick={() => onToggleCastling(key)}
                  className={`py-0.5 rounded border text-[9px] font-semibold transition ${
                    castling[key] ? 'bg-blue-900/40 border-blue-700/50 text-blue-300' : 'bg-[#262421] border-[#363431] text-gray-600'
                  }`}>
                  {castling[key] ? '✓ ' : ''}{label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-1.5">
          <button onClick={onApply} className="w-full py-2 bg-[#81b64c] hover:bg-[#9fd168] text-black font-black rounded-xl text-xs transition shadow-md shadow-[#81b64c]/20">
            ✓ Analyze This Position
          </button>
          <div className="grid grid-cols-2 gap-1.5">
            <button onClick={onReset} className="py-1 bg-[#262421] hover:bg-[#2d2b27] border border-[#363431] text-gray-300 rounded-lg text-[11px] font-semibold transition">
              ↺ Start Pos
            </button>
            <button onClick={onClear} className="py-1 bg-red-950/40 hover:bg-red-950/70 border border-red-800/40 text-red-300 rounded-lg text-[11px] font-semibold transition">
              ✕ Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Game Result Overlay ──────────────────────────────────────────────────────
function GameResultOverlay({ result, onNewGame }: { result: GameResult; onNewGame: () => void }) {
  if (!result) return null;
  const emoji = result.winner === 'draw' ? '🤝' : result.winner === 'white' ? '♔' : '♚';
  const title = result.winner === 'draw' ? 'Draw!' : `${result.winner === 'white' ? 'White' : 'Black'} Wins!`;
  return (
    <div className="absolute inset-0 bg-black/75 backdrop-blur-sm rounded-xl z-30 flex items-center justify-center p-4">
      <div className="bg-[#1e1c18] border border-[#363431] rounded-2xl p-6 text-center max-w-xs shadow-2xl">
        <div className="text-4xl mb-2">{emoji}</div>
        <h2 className="text-xl font-black text-white mb-1">{title}</h2>
        <p className="text-gray-400 text-xs mb-4">{result.reason}</p>
        <button onClick={onNewGame} className="w-full py-2 bg-[#81b64c] text-black font-bold rounded-xl hover:bg-[#9fd168] transition text-xs">
          New Game
        </button>
      </div>
    </div>
  );
}

// ─── Main ChessGame Component ─────────────────────────────────────────────────
export const ChessGame: React.FC<ChessGameProps> = ({ initialFen, initialMode, onOpenGMLibrary, onOpenOpenings }) => {
  // Game State
  const [game, setGame]                   = useState(() => initialFen ? new Chess(initialFen) : new Chess());
  const [boardFen, setBoardFen]           = useState(() => initialFen || new Chess().fen());
  const [boardOrientation, setBoardOrientation] = useState<'white' | 'black'>('white');
  const [gameMode, setGameMode]           = useState<GameMode>(initialMode || (initialFen ? 'analysis' : 'vsEngine'));
  const [playerColor, setPlayerColor]     = useState<PlayerColor>('white');
  const [difficultyIdx, setDifficultyIdx] = useState(4);
  const [analysisDepth, setAnalysisDepth] = useState(15);
  const [timeControl, setTimeControl]     = useState<TimeControl>(null);
  const [gameResult, setGameResult]       = useState<GameResult>(null);
  const [showSetup, setShowSetup]         = useState(!initialFen);
  const [showArrows, setShowArrows]       = useState(true);
  const [lastMove, setLastMove]           = useState<{ from: string; to: string } | null>(null);

  // Mobile Bottom Tab (for screens < 1280px)
  const [mobileTab, setMobileTab] = useState<'analysis' | 'moves' | 'editor' | 'fen'>('analysis');

  // Sync if initialFen changes
  useEffect(() => {
    if (initialFen) {
      try {
        const g = new Chess(initialFen);
        setGame(g);
        setBoardFen(g.fen());
        setFenHistory([g.fen()]);
        setHistoryPly(0);
        setGameMode(initialMode || 'analysis');
        setShowSetup(false);
      } catch (e) {
        console.error('Invalid initial FEN', e);
      }
    }
  }, [initialFen, initialMode]);

  // History
  const [fenHistory, setFenHistory] = useState<string[]>([new Chess().fen()]);
  const [historyPly, setHistoryPly] = useState(0);

  // Timer
  const [timerState, setTimerState] = useState<TimerState>({ white: 0, black: 0, running: false });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Engine
  const engineDepth = gameMode === 'analysis' || gameMode === 'editor' ? analysisDepth : DIFFICULTY[difficultyIdx].depth;
  const { evaluation, isEngineReady, newGame: engineNewGame } = useStockfish(boardFen, engineDepth);
  const isEngineThinking = useRef(false);
  const engineMoveTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Board Editor state
  const [editorTool, setEditorTool]   = useState('wP');
  const [editTurn, setEditTurn]       = useState<'w' | 'b'>('w');
  const [editBoard, setEditBoard]     = useState<Record<string, string>>({});
  const [castling, setCastling]       = useState({ K: true, Q: true, k: true, q: true });

  // Board size for arrow overlay
  const [boardSize, setBoardSize] = useState(480);
  const boardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new ResizeObserver(entries => {
      const w = entries[0]?.contentRect.width;
      if (w) setBoardSize(w);
    });
    if (boardRef.current) obs.observe(boardRef.current);
    return () => obs.disconnect();
  }, []);

  // Arrows to show
  const arrows = useMemo<Arrow[]>(() => {
    if (!showArrows || !evaluation.bestMove) return [];
    const from = evaluation.bestMove.slice(0, 2);
    const to   = evaluation.bestMove.slice(2, 4);
    const result: Arrow[] = [{ from, to, color: '#81b64c' }];
    if (evaluation.ponder) {
      result.push({ from: to, to: evaluation.ponder.slice(2, 4), color: '#f59e0b' });
    }
    return result;
  }, [showArrows, evaluation.bestMove, evaluation.ponder]);

  // Derived
  const { whiteCaptured, blackCaptured, materialAdv } = getCapturedAndMaterial(game);
  const moveHistory = game.history();
  const isGameOver  = game.isGameOver() || gameResult !== null;
  const isPlayerTurn = () => {
    if (gameMode !== 'vsEngine') return true;
    return game.turn() === (playerColor === 'white' ? 'w' : 'b');
  };

  // Check highlight
  const checkSquareStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};
    if (game.inCheck()) {
      const board = game.board();
      const files = 'abcdefgh';
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const sq = board[r][c];
          if (sq && sq.type === 'k' && sq.color === game.turn()) {
            styles[files[c] + (8 - r)] = { backgroundColor: 'rgba(239,68,68,0.5)', borderRadius: '50%' };
          }
        }
      }
    }
    return styles;
  }, [boardFen]);

  const customSquareStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = { ...checkSquareStyles };
    if (lastMove) {
      styles[lastMove.from] = { ...styles[lastMove.from], backgroundColor: 'rgba(155,199,0,0.3)' };
      styles[lastMove.to]   = { ...styles[lastMove.to],   backgroundColor: 'rgba(155,199,0,0.45)' };
    }
    return styles;
  }, [lastMove, checkSquareStyles]);

  // Timer loop
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!timerState.running || isGameOver) return;
    timerRef.current = setInterval(() => {
      setTimerState(prev => {
        const who = game.turn() === 'w' ? 'white' : 'black';
        const t = prev[who] - 1;
        if (t <= 0) {
          clearInterval(timerRef.current!);
          const winner = who === 'white' ? 'black' : 'white';
          setGameResult({ winner, reason: `${who === 'white' ? 'White' : 'Black'} ran out of time` });
          return { ...prev, [who]: 0, running: false };
        }
        return { ...prev, [who]: t };
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [timerState.running, game.turn(), isGameOver]);

  // Engine auto-move
  useEffect(() => {
    if (gameMode !== 'vsEngine') return;
    if (isGameOver || isPlayerTurn() || !isEngineReady || !evaluation.bestMove || isEngineThinking.current) return;
    isEngineThinking.current = true;
    if (engineMoveTimer.current) clearTimeout(engineMoveTimer.current);
    engineMoveTimer.current = setTimeout(() => {
      const mv = evaluation.bestMove!;
      const from = mv.slice(0, 2), to = mv.slice(2, 4), promo = mv[4];
      const g = new Chess(game.fen());
      try {
        const r = g.move({ from, to, promotion: promo || 'q' });
        if (r) {
          setLastMove({ from, to });
          setGame(g);
          const fen = g.fen();
          setBoardFen(fen);
          setFenHistory(prev => [...prev.slice(0, historyPly + 1), fen]);
          setHistoryPly(p => p + 1);
          checkGameEnd(g);
        }
      } catch { /**/ }
      isEngineThinking.current = false;
    }, 350 + Math.random() * 350);
  }, [boardFen, evaluation.bestMove, isEngineReady, gameMode, isGameOver]);

  const checkGameEnd = (g: Chess) => {
    if (g.isCheckmate()) {
      const w = g.turn() === 'w' ? 'black' : 'white';
      setGameResult({ winner: w, reason: 'Checkmate' });
      setTimerState(p => ({ ...p, running: false }));
    } else if (g.isStalemate()) {
      setGameResult({ winner: 'draw', reason: 'Stalemate' });
      setTimerState(p => ({ ...p, running: false }));
    } else if (g.isThreefoldRepetition()) {
      setGameResult({ winner: 'draw', reason: 'Threefold repetition' });
      setTimerState(p => ({ ...p, running: false }));
    } else if (g.isInsufficientMaterial()) {
      setGameResult({ winner: 'draw', reason: 'Insufficient material' });
      setTimerState(p => ({ ...p, running: false }));
    } else if (g.isDraw()) {
      setGameResult({ winner: 'draw', reason: '50-move rule' });
      setTimerState(p => ({ ...p, running: false }));
    }
  };

  // Piece drop
  const onPieceDrop = useCallback((from: string, to: string, piece: string) => {
    if (gameMode === 'editor') return false;
    if (isGameOver) return false;
    if (gameMode === 'vsEngine' && !isPlayerTurn()) return false;
    const promo = piece[1]?.toLowerCase() === 'p' &&
      ((piece[0] === 'w' && to[1] === '8') || (piece[0] === 'b' && to[1] === '1')) ? 'q' : undefined;
    const g = new Chess(game.fen());
    try {
      const r = g.move({ from, to, promotion: promo || 'q' });
      if (!r) return false;
      setLastMove({ from, to });
      setGame(g);
      const fen = g.fen();
      setBoardFen(fen);
      const nh = [...fenHistory.slice(0, historyPly + 1), fen];
      setFenHistory(nh);
      setHistoryPly(nh.length - 1);
      isEngineThinking.current = false;
      if (timeControl && !timerState.running) setTimerState(p => ({ ...p, running: true }));
      checkGameEnd(g);
      return true;
    } catch { return false; }
  }, [game, isGameOver, gameMode, playerColor, historyPly, fenHistory, timeControl, timerState.running]);

  // Board Editor: square click
  const onSquareClick = useCallback((square: string) => {
    if (gameMode !== 'editor') return;
    setEditBoard(prev => {
      const next = { ...prev };
      if (editorTool === 'eraser') {
        delete next[square];
      } else {
        next[square] = editorTool;
      }
      return next;
    });
  }, [gameMode, editorTool]);

  const buildEditorFen = () => {
    const files = 'abcdefgh';
    const rows: string[] = [];
    for (let r = 8; r >= 1; r--) {
      let row = '', empty = 0;
      for (let c = 0; c < 8; c++) {
        const sq = files[c] + r;
        const piece = editBoard[sq];
        if (piece) {
          if (empty) { row += empty; empty = 0; }
          const letter = piece[1];
          row += piece[0] === 'w' ? letter.toUpperCase() : letter.toLowerCase();
        } else { empty++; }
      }
      if (empty) row += empty;
      rows.push(row);
    }
    const castleStr = (['K','Q','k','q'] as const).filter(k => castling[k]).join('') || '-';
    return `${rows.join('/')} ${editTurn} ${castleStr} - 0 1`;
  };

  const applyEditorPosition = () => {
    const fen = buildEditorFen();
    try {
      const g = new Chess(fen);
      setGame(g);
      setBoardFen(g.fen());
      setFenHistory([g.fen()]);
      setHistoryPly(0);
      setLastMove(null);
      setGameResult(null);
      setGameMode('analysis');
      setMobileTab('analysis');
    } catch { alert('Invalid position — please ensure each side has a king.'); }
  };

  const initEditor = () => {
    const board = game.board();
    const files = 'abcdefgh';
    const pieces: Record<string, string> = {};
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const sq = board[r][c];
        if (sq) {
          const sqName = files[c] + (8 - r);
          pieces[sqName] = (sq.color === 'w' ? 'w' : 'b') + sq.type.toUpperCase();
        }
      }
    }
    setEditBoard(pieces);
    setEditTurn(game.turn());
  };

  const editorFen = useMemo(() => {
    if (gameMode !== 'editor') return boardFen;
    try { return buildEditorFen(); } catch { return boardFen; }
  }, [gameMode, editBoard, editTurn, castling, boardFen]);

  const handleUndo = () => {
    if (isEngineThinking.current) return;
    const steps = gameMode === 'vsEngine' ? 2 : 1;
    const target = Math.max(0, historyPly - steps);
    const fen = fenHistory[target];
    if (!fen) return;
    const g = new Chess(fen);
    setGame(g); setBoardFen(fen); setHistoryPly(target);
    setLastMove(null); setGameResult(null); isEngineThinking.current = false;
    if (engineMoveTimer.current) clearTimeout(engineMoveTimer.current);
  };

  const handleSelectPly = (ply: number) => {
    const fen = fenHistory[ply];
    if (!fen) return;
    setGame(new Chess(fen)); setBoardFen(fen); setHistoryPly(ply); setLastMove(null);
  };

  const handleNewGame = () => {
    if (engineMoveTimer.current) clearTimeout(engineMoveTimer.current);
    isEngineThinking.current = false;
    const g = new Chess();
    setGame(g); setBoardFen(g.fen());
    setFenHistory([g.fen()]); setHistoryPly(0);
    setLastMove(null); setGameResult(null);
    if (timeControl) setTimerState({ white: timeControl.seconds, black: timeControl.seconds, running: false });
    else setTimerState({ white: 0, black: 0, running: false });
    setBoardOrientation(playerColor);
    engineNewGame();
  };

  const handleStartGame = () => {
    if (gameMode === 'editor') { initEditor(); setShowSetup(false); return; }
    if (timeControl) setTimerState({ white: timeControl.seconds, black: timeControl.seconds, running: false });
    setBoardOrientation(playerColor);
    handleNewGame();
    setShowSetup(false);
  };

  const diff = DIFFICULTY[difficultyIdx];
  const topColor: 'white' | 'black'    = boardOrientation === 'white' ? 'black' : 'white';
  const bottomColor: 'white' | 'black' = boardOrientation;
  const isTopEngine    = gameMode === 'vsEngine' && topColor !== playerColor;
  const isBottomEngine = gameMode === 'vsEngine' && bottomColor !== playerColor;
  const topActive    = game.turn() === (topColor === 'white' ? 'w' : 'b') && !isGameOver;
  const bottomActive = game.turn() === (bottomColor === 'white' ? 'w' : 'b') && !isGameOver;

  const activeModeLabel = { vsEngine: 'vs Engine', twoPlayer: '2 Players', analysis: 'Analysis', editor: 'Board Editor' }[gameMode];

  return (
    <div className="min-h-screen bg-[#12110e] text-gray-100 flex flex-col">
      {/* ── Sub Header ──────────────────────────────────────────────────────── */}
      <header className="bg-[#181613]/90 border-b border-white/[0.06] sticky top-0 z-30 backdrop-blur-xl shadow-lg shadow-black/30">
        <div className="max-w-[1500px] mx-auto px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#81b64c] to-[#4d7c0f] rounded-xl flex items-center justify-center shadow-md shadow-[#81b64c]/20 border border-[#9fd168]/30 text-xl sm:text-2xl text-black font-black">
              ♚
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-heading font-extrabold text-white leading-tight tracking-tight">Stockfish 16 NNUE</h1>
              <p className="text-[9px] sm:text-[10px] font-mono text-gray-400 flex items-center gap-1.5">
                {isEngineReady ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Engine Active
                  </span>
                ) : (
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Initializing…
                  </span>
                )}
                <span className="text-white/20">•</span>
                <span className="text-gray-300 font-sans">{activeModeLabel}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {onOpenGMLibrary && (
              <button
                onClick={onOpenGMLibrary}
                className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-[11px] sm:text-xs font-bold text-amber-300 transition-all flex items-center gap-1.5 btn-press shadow-sm"
              >
                <span>👑</span>
                <span className="hidden xs:inline">1,000 GM Games</span>
                <span className="xs:hidden">1K GMs</span>
              </button>
            )}
            {onOpenOpenings && (
              <button
                onClick={onOpenOpenings}
                className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/35 text-[11px] sm:text-xs font-bold text-teal-300 transition-all flex items-center gap-1.5 btn-press shadow-sm"
              >
                <span>📖</span>
                <span className="hidden xs:inline">Openings</span>
                <span className="xs:hidden">Book</span>
              </button>
            )}
            <button
              onClick={() => { initEditor(); setGameMode('editor'); setShowSetup(false); }}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl border text-[11px] sm:text-xs font-bold transition-all btn-press ${
                gameMode === 'editor' 
                  ? 'bg-[#81b64c]/20 border-[#81b64c]/50 text-[#81b64c] font-black' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              ✏ <span className="hidden xs:inline">Editor</span>
            </button>
            <button
              onClick={() => { setGameMode('analysis'); setShowSetup(false); }}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl border text-[11px] sm:text-xs font-bold transition-all btn-press ${
                gameMode === 'analysis' 
                  ? 'bg-[#81b64c]/20 border-[#81b64c]/50 text-[#81b64c] font-black' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              🔬 <span className="hidden xs:inline">Analysis</span>
            </button>
            <button
              onClick={() => setShowSetup(true)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] sm:text-xs font-bold text-gray-300 transition-all btn-press"
            >
              ⚙ <span className="hidden xs:inline">Setup</span>
            </button>
            <button
              onClick={handleNewGame}
              className="px-3 sm:px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] hover:from-[#9fd168] hover:to-[#81b64c] text-black font-black text-xs transition-all shadow-md shadow-[#81b64c]/25 btn-press"
            >
              ↺ New Game
            </button>
          </div>
        </div>
      </header>

      {/* ── Setup Modal ────────────────────────────────────────────────────── */}
      {showSetup && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in">
          <div className="bg-[#1a1815]/95 border border-white/10 rounded-3xl p-5 sm:p-6 w-full max-w-lg shadow-2xl space-y-4 my-auto max-h-[90vh] overflow-y-auto backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚙</span>
                <h2 className="text-lg sm:text-xl font-heading font-extrabold text-white tracking-tight">Game Setup</h2>
              </div>
              <button onClick={() => setShowSetup(false)} className="text-gray-400 hover:text-white text-lg w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition">✕</button>
            </div>

            {/* Mode */}
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Game Mode</label>
              <div className="grid grid-cols-2 gap-2">
                {([
                  { mode: 'vsEngine',   label: '🤖 vs Stockfish', desc: 'Play against AI engine' },
                  { mode: 'twoPlayer',  label: '👥 2 Players',     desc: 'Local multiplayer' },
                  { mode: 'analysis',   label: '🔬 Analysis',      desc: 'Analyze any position' },
                  { mode: 'editor',     label: '✏ Board Editor',   desc: 'Place pieces freely' },
                ] as const).map(({ mode, label, desc }) => (
                  <button key={mode} onClick={() => setGameMode(mode)}
                    className={`p-3 rounded-2xl border text-left transition-all btn-press ${
                      gameMode === mode 
                        ? 'bg-[#81b64c]/15 border-[#81b64c]/60 text-[#81b64c] shadow-sm shadow-[#81b64c]/10' 
                        : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10'
                    }`}>
                    <div className="font-heading font-bold text-xs sm:text-sm">{label}</div>
                    <div className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">{desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {gameMode === 'vsEngine' && (
              <>
                {/* Color */}
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Play As</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setPlayerColor('white')} 
                      className={`py-2.5 rounded-xl border font-bold text-xs sm:text-sm transition-all btn-press flex items-center justify-center gap-2 ${
                        playerColor === 'white' 
                          ? 'bg-gradient-to-r from-gray-100 to-gray-200 text-black border-white shadow-md' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      ⚪ White (1st move)
                    </button>
                    <button 
                      onClick={() => setPlayerColor('black')} 
                      className={`py-2.5 rounded-xl border font-bold text-xs sm:text-sm transition-all btn-press flex items-center justify-center gap-2 ${
                        playerColor === 'black' 
                          ? 'bg-gradient-to-r from-gray-900 to-black text-white border-white/30 shadow-md' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      ⚫ Black (2nd move)
                    </button>
                  </div>
                </div>
                {/* Difficulty */}
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Engine Difficulty</label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {DIFFICULTY.map((d, i) => (
                      <button key={i} onClick={() => setDifficultyIdx(i)}
                        className={`py-2 px-1 rounded-xl border text-center transition-all btn-press ${
                          difficultyIdx === i 
                            ? 'border-transparent text-black font-black text-[11px] shadow-md' 
                            : 'bg-white/5 border-white/5 text-gray-400 hover:text-white text-[11px] font-semibold'
                        }`}
                        style={difficultyIdx === i ? { backgroundColor: d.color } : {}}>
                        <div className="leading-tight font-heading font-bold">{d.name}</div>
                        <div className="text-[9px] opacity-80 font-mono mt-0.5">{d.elo}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Time control */}
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Time Control</label>
              <div className="grid grid-cols-4 gap-1.5">
                {TIME_CONTROLS.map((tc, i) => (
                  <button key={i} onClick={() => setTimeControl(tc)}
                    className={`py-2 rounded-xl border text-[11px] font-bold transition-all btn-press ${
                      timeControl === tc 
                        ? 'bg-[#81b64c]/20 border-[#81b64c]/60 text-[#81b64c] font-black' 
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                    }`}>
                    {tc === null ? '∞ Untimed' : tc.label}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleStartGame}
              className="w-full py-3 bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] hover:from-[#9fd168] hover:to-[#81b64c] text-black font-black rounded-2xl text-xs sm:text-sm transition-all shadow-lg shadow-[#81b64c]/25 btn-press">
              {gameMode === 'editor' ? 'Open Board Editor →' : 'Start Match →'}
            </button>
          </div>
        </div>
      )}

      {/* ── Main Layout ────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-[1500px] w-full mx-auto px-2.5 sm:px-4 py-3 sm:py-4">
        <div className="flex flex-col xl:flex-row gap-4 items-start justify-center">

          {/* ── Center/Board Column ─────────────────────────────────────────── */}
          <div className="space-y-2.5 w-full xl:max-w-[560px] mx-auto">

            {/* Top Player */}
            <PlayerCard
              name={isTopEngine ? `Stockfish ${diff.name}` : topColor === 'white' ? 'White' : 'Black'}
              color={topColor} isEngine={isTopEngine} isActive={topActive}
              isThinking={isTopEngine && isEngineThinking.current}
              timer={timeControl ? timerState[topColor] : null}
              captured={topColor === 'white' ? whiteCaptured : blackCaptured}
              materialAdv={materialAdv} showAdv={isTopEngine} difficultyName={diff.name}
            />

            {/* Board + Eval Bar */}
            <div className="flex gap-2 sm:gap-3 items-stretch justify-center">
              <div className="py-0.5 self-stretch flex">
                <EvalBar cp={evaluation.cp} mate={evaluation.mate} />
              </div>
              <div className="flex-1 relative max-w-[520px]" ref={boardRef}>
                <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-2 border-white/10 bg-[#161512]">
                  <Chessboard
                    position={gameMode === 'editor' ? editorFen : boardFen}
                    onPieceDrop={gameMode === 'editor' ? () => false : onPieceDrop}
                    onSquareClick={gameMode === 'editor' ? onSquareClick : undefined}
                    boardOrientation={boardOrientation}
                    customSquareStyles={gameMode !== 'editor' ? customSquareStyles : {}}
                    arePiecesDraggable={gameMode !== 'editor' && !isGameOver && (gameMode !== 'vsEngine' || isPlayerTurn())}
                    customBoardStyle={{ borderRadius: '12px' }}
                    customDarkSquareStyle={{ backgroundColor: '#739552' }}
                    customLightSquareStyle={{ backgroundColor: '#ebedd0' }}
                    animationDuration={160}
                  />
                </div>
                {/* Arrow overlay */}
                {gameMode !== 'editor' && (
                  <ArrowOverlay arrows={arrows} boardSize={boardSize} orientation={boardOrientation} />
                )}
                {/* Game over overlay */}
                {gameMode !== 'editor' && gameMode !== 'analysis' && (
                  <GameResultOverlay result={gameResult} onNewGame={handleNewGame} />
                )}
              </div>
            </div>

            {/* Bottom Player */}
            <PlayerCard
              name={isBottomEngine ? `Stockfish ${diff.name}` : bottomColor === 'white' ? 'White' : 'Black'}
              color={bottomColor} isEngine={isBottomEngine} isActive={bottomActive}
              isThinking={isBottomEngine && isEngineThinking.current}
              timer={timeControl ? timerState[bottomColor] : null}
              captured={bottomColor === 'white' ? whiteCaptured : blackCaptured}
              materialAdv={materialAdv} showAdv={!isBottomEngine} difficultyName={diff.name}
            />

            {/* Toolbar */}
            <div className="flex items-center gap-2 flex-wrap">
              <button 
                onClick={handleUndo} 
                disabled={historyPly < (gameMode === 'vsEngine' ? 2 : 1) || !!gameResult}
                className="px-3.5 py-2 rounded-xl bg-[#1c1a16] hover:bg-[#262420] border border-white/10 text-xs font-bold text-gray-200 disabled:opacity-30 transition-all btn-press shadow-sm flex items-center gap-1.5"
              >
                <span>↩</span> Undo
              </button>
              <button 
                onClick={() => setBoardOrientation(o => o === 'white' ? 'black' : 'white')}
                className="px-3.5 py-2 rounded-xl bg-[#1c1a16] hover:bg-[#262420] border border-white/10 text-xs font-bold text-gray-200 transition-all btn-press shadow-sm flex items-center gap-1.5"
              >
                <span>⇅</span> Flip
              </button>
              {gameMode !== 'editor' && (
                <button 
                  onClick={() => setShowArrows(v => !v)}
                  className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all btn-press shadow-sm flex items-center gap-1.5 ${
                    showArrows 
                      ? 'bg-[#81b64c]/20 border-[#81b64c]/50 text-[#81b64c] font-black' 
                      : 'bg-[#1c1a16] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span>↗</span> Arrows {showArrows ? 'ON' : 'OFF'}
                </button>
              )}
              {gameMode === 'editor' && (
                <button 
                  onClick={applyEditorPosition}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] text-black text-xs font-black transition-all btn-press shadow-md shadow-[#81b64c]/20"
                >
                  ✓ Analyze Pos
                </button>
              )}
              {gameMode !== 'editor' && gameMode !== 'analysis' && !gameResult && (
                <button 
                  onClick={() => {
                    const engineColor = playerColor === 'white' ? 'black' : 'white';
                    setGameResult({ winner: gameMode === 'vsEngine' ? engineColor : (game.turn() === 'w' ? 'black' : 'white'), reason: 'Resigned' });
                    setTimerState(p => ({ ...p, running: false }));
                  }} 
                  className="ml-auto px-3.5 py-2 rounded-xl bg-red-950/40 hover:bg-red-950/70 border border-red-800/40 text-xs font-bold text-red-300 transition-all btn-press"
                >
                  🏳 Resign
                </button>
              )}
            </div>

            {/* Mobile Bottom Tab Switcher (< 1280px) */}
            <div className="xl:hidden border-t border-white/10 pt-3">
              <div className="flex gap-1 bg-[#151411] p-1 rounded-2xl border border-white/10 mb-3 shadow-inner">
                <button
                  onClick={() => setMobileTab('analysis')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all btn-press ${
                    mobileTab === 'analysis' ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🔬 Analysis
                </button>
                <button
                  onClick={() => setMobileTab('moves')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all btn-press ${
                    mobileTab === 'moves' ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  📜 Moves ({moveHistory.length})
                </button>
                {gameMode === 'editor' && (
                  <button
                    onClick={() => setMobileTab('editor')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all btn-press ${
                      mobileTab === 'editor' ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    ✏ Palette
                  </button>
                )}
                <button
                  onClick={() => setMobileTab('fen')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all btn-press ${
                    mobileTab === 'fen' ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  📥 FEN
                </button>
              </div>

              {/* Mobile Active Section */}
              {mobileTab === 'analysis' && gameMode !== 'editor' && (
                <AnalysisPanel
                  evaluation={evaluation} depth={analysisDepth} onDepthChange={setAnalysisDepth}
                  showArrows={showArrows} onToggleArrows={() => setShowArrows(v => !v)}
                  gameMode={gameMode}
                />
              )}

              {mobileTab === 'moves' && (
                <div className="bg-[#181714]/95 border border-white/10 rounded-2xl p-3.5 shadow-xl" style={{ height: 270 }}>
                  <MoveHistory history={moveHistory} currentPly={historyPly - 1} onSelectPly={handleSelectPly} />
                </div>
              )}

              {mobileTab === 'editor' && gameMode === 'editor' && (
                <BoardEditorPanel
                  editorTool={editorTool} onSelectTool={setEditorTool}
                  editTurn={editTurn} onSetTurn={setEditTurn}
                  castling={castling} onToggleCastling={key => setCastling(p => ({ ...p, [key as keyof typeof p]: !p[key as keyof typeof p] }))}
                  onClear={() => setEditBoard({})}
                  onReset={() => {
                    initEditor();
                    setEditTurn('w');
                    setCastling({ K: true, Q: true, k: true, q: true });
                  }}
                  onApply={applyEditorPosition}
                />
              )}

              {mobileTab === 'fen' && (
                <div className="bg-[#181714]/95 border border-white/10 rounded-2xl p-4 shadow-xl">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Load Position (FEN)</label>
                  <div className="flex gap-2">
                    <input
                      id="fen-input-mobile"
                      type="text"
                      placeholder="Paste FEN and click Load…"
                      className="flex-1 bg-[#22201b] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#81b64c]/50"
                    />
                    <button
                      onClick={() => {
                        const el = document.getElementById('fen-input-mobile') as HTMLInputElement;
                        if (!el?.value) return;
                        try {
                          const g = new Chess(el.value.trim());
                          setGame(g); setBoardFen(g.fen());
                          setFenHistory([g.fen()]); setHistoryPly(0);
                          setLastMove(null); setGameResult(null);
                        } catch { alert('Invalid FEN'); }
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] text-black font-black text-xs rounded-xl shadow-md shadow-[#81b64c]/20 btn-press"
                    >
                      Load
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop FEN loader */}
            <div className="hidden xl:block bg-[#181714]/90 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Position (FEN)</label>
              <div className="flex gap-2">
                <input
                  id="fen-input"
                  type="text"
                  placeholder="Paste FEN and press Enter…"
                  onKeyDown={(e) => {
                    if (e.key !== 'Enter') return;
                    try {
                      const g = new Chess(e.currentTarget.value.trim());
                      setGame(g); setBoardFen(g.fen());
                      setFenHistory([g.fen()]); setHistoryPly(0);
                      setLastMove(null); setGameResult(null);
                      e.currentTarget.value = '';
                    } catch { alert('Invalid FEN string'); }
                  }}
                  className="flex-1 bg-[#22201b] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#81b64c]/50 transition-colors"
                />
              </div>
              <p className="text-[9px] font-mono text-gray-500 mt-2 truncate select-all bg-black/30 px-2 py-1 rounded-lg border border-white/5" title={boardFen}>{boardFen}</p>
            </div>
          </div>

          {/* ── Desktop Move History Column (xl: only) ───────────────────────── */}
          <div className="hidden xl:flex bg-[#181714]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex-col xl:w-56 shrink-0 backdrop-blur-md" style={{ height: 580 }}>
            <div className="px-4 py-3.5 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="text-xs">📜</span>
                <h3 className="font-heading font-extrabold text-sm text-white tracking-tight">Moves</h3>
              </div>
              <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                {moveHistory.length} ply
              </span>
            </div>
            <div className="flex-1 overflow-hidden px-3 py-2.5">
              <MoveHistory history={moveHistory} currentPly={historyPly - 1} onSelectPly={handleSelectPly} />
            </div>
          </div>

          {/* ── Desktop Right Panel: Analysis or Editor (xl: only) ───────────── */}
          <div className="hidden xl:block xl:w-[380px] shrink-0 space-y-3.5">
            <div className="bg-[#181714]/90 border border-white/10 rounded-3xl p-4 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-3 border-b border-white/[0.08] pb-2.5">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${isEngineReady ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-amber-400 animate-pulse'}`} />
                  <span className="font-heading font-extrabold text-white text-sm tracking-tight">Stockfish 16 NNUE</span>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                  isEngineReady 
                    ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/40' 
                    : 'bg-amber-950/60 text-amber-300 border-amber-700/40'
                }`}>
                  {isEngineReady ? 'Engine Active' : 'Initializing…'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] font-mono text-gray-400">
                <div>Mode: <span className="text-white font-semibold">{activeModeLabel}</span></div>
                <div>Depth: <span className="text-[#81b64c] font-bold">{evaluation.depth}/{engineDepth}</span></div>
                <div>Turn: <span className="text-white font-semibold">{game.turn() === 'w' ? 'White' : 'Black'}</span></div>
                {gameMode === 'vsEngine' && <div>Level: <span className="font-bold" style={{ color: diff.color }}>{diff.name}</span></div>}
              </div>
            </div>

            {gameMode !== 'editor' && (
              <AnalysisPanel
                evaluation={evaluation} depth={analysisDepth} onDepthChange={setAnalysisDepth}
                showArrows={showArrows} onToggleArrows={() => setShowArrows(v => !v)}
                gameMode={gameMode}
              />
            )}

            {gameMode === 'editor' && (
              <BoardEditorPanel
                editorTool={editorTool} onSelectTool={setEditorTool}
                editTurn={editTurn} onSetTurn={setEditTurn}
                castling={castling} onToggleCastling={key => setCastling(p => ({ ...p, [key as keyof typeof p]: !p[key as keyof typeof p] }))}
                onClear={() => setEditBoard({})}
                onReset={() => {
                  initEditor();
                  setEditTurn('w');
                  setCastling({ K: true, Q: true, k: true, q: true });
                }}
                onApply={applyEditorPosition}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChessGame;
