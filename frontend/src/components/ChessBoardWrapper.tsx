import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useStockfish } from '../hooks/useStockfish';
import { StockfishControls } from './StockfishControls';
import {
  RotateCcw,
  Undo2,
  Bot,
  User,
  Swords,
  Trophy,
  AlertCircle,
  Sparkles,
  RefreshCw,
  Gauge,
  ArrowRightLeft,
  Cpu
} from 'lucide-react';

interface ChessBoardWrapperProps {
  fen?: string;
  onFenChange?: (fen: string) => void;
}

type GameMode = 'vsEngine' | 'analysis';
type PlayerColor = 'white' | 'black';

interface CapturedPieces {
  p: number;
  n: number;
  b: number;
  r: number;
  q: number;
}

const PIECE_VALUES: Record<string, number> = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
};

const DIFFICULTY_LEVELS = [
  { name: 'Easy', depth: 4, badge: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50' },
  { name: 'Medium', depth: 8, badge: 'bg-blue-900/60 text-blue-300 border-blue-700/50' },
  { name: 'Hard', depth: 12, badge: 'bg-amber-900/60 text-amber-300 border-amber-700/50' },
  { name: 'Master', depth: 16, badge: 'bg-orange-900/60 text-orange-300 border-orange-700/50' },
  { name: 'Grandmaster', depth: 20, badge: 'bg-red-900/60 text-red-300 border-red-700/50' },
];

export const ChessBoardWrapper: React.FC<ChessBoardWrapperProps> = ({
  fen: externalFen,
  onFenChange,
}) => {
  const [game, setGame] = useState(() => new Chess(externalFen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'));
  const [boardFen, setBoardFen] = useState(game.fen());
  const [depth, setDepth] = useState(12);
  const [gameMode, setGameMode] = useState<GameMode>('vsEngine');
  const [playerColor, setPlayerColor] = useState<PlayerColor>('white');
  const [boardOrientation, setBoardOrientation] = useState<'white' | 'black'>('white');
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [showingHint, setShowingHint] = useState(false);
  const [isEngineThinking, setIsEngineThinking] = useState(false);
  const engineMoveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { evaluation, isEngineReady } = useStockfish(boardFen, depth);

  // Synchronize board orientation when player color changes in vsEngine mode
  useEffect(() => {
    if (gameMode === 'vsEngine') {
      setBoardOrientation(playerColor);
    }
  }, [playerColor, gameMode]);

  // Sync external FEN prop if provided
  useEffect(() => {
    if (externalFen && externalFen !== boardFen) {
      const newGame = new Chess(externalFen);
      setGame(newGame);
      setBoardFen(newGame.fen());
      setMoveHistory(newGame.history());
    }
  }, [externalFen]);

  // Execute a move on the game board
  const makeAMove = useCallback(
    (move: any) => {
      try {
        const gameCopy = new Chess(game.fen());
        const result = gameCopy.move(move);
        if (result) {
          setGame(gameCopy);
          const newFen = gameCopy.fen();
          setBoardFen(newFen);
          setMoveHistory(gameCopy.history());
          setShowingHint(false);
          if (onFenChange) {
            onFenChange(newFen);
          }
          return true;
        }
      } catch (e) {
        return false;
      }
      return false;
    },
    [game, onFenChange]
  );

  // Trigger engine move when playing vs Stockfish
  const triggerEngineMove = useCallback(() => {
    if (!isEngineReady || game.isGameOver()) return;
    if (gameMode !== 'vsEngine') return;

    const currentTurn = game.turn() === 'w' ? 'white' : 'black';
    if (currentTurn !== playerColor) {
      setIsEngineThinking(true);
      if (engineMoveTimeoutRef.current) clearTimeout(engineMoveTimeoutRef.current);

      engineMoveTimeoutRef.current = setTimeout(() => {
        if (evaluation.bestMove) {
          const fromSq = evaluation.bestMove.slice(0, 2);
          const toSq = evaluation.bestMove.slice(2, 4);
          const promo = evaluation.bestMove.slice(4, 5);

          const moved = makeAMove({
            from: fromSq,
            to: toSq,
            promotion: promo || 'q',
          });

          if (!moved) {
            // Fallback: pick any random legal move if bestmove fails parsing
            const moves = game.moves({ verbose: true });
            if (moves.length > 0) {
              const randomMove = moves[Math.floor(Math.random() * moves.length)];
              makeAMove(randomMove);
            }
          }
        }
        setIsEngineThinking(false);
      }, 400);
    }
  }, [isEngineReady, game, gameMode, playerColor, evaluation.bestMove, makeAMove]);

  // Auto trigger engine move when it's engine's turn
  useEffect(() => {
    const currentTurn = game.turn() === 'w' ? 'white' : 'black';
    if (gameMode === 'vsEngine' && currentTurn !== playerColor && !game.isGameOver()) {
      if (evaluation.bestMove && !isEngineThinking) {
        triggerEngineMove();
      }
    }
  }, [boardFen, gameMode, playerColor, evaluation.bestMove, game, isEngineThinking, triggerEngineMove]);

  // Handle drag and drop piece move
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    const currentTurn = game.turn() === 'w' ? 'white' : 'black';
    if (gameMode === 'vsEngine' && currentTurn !== playerColor) {
      return false;
    }
    if (game.isGameOver()) return false;

    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    return move;
  };

  // Reset Game
  const handleReset = () => {
    if (engineMoveTimeoutRef.current) clearTimeout(engineMoveTimeoutRef.current);
    const newGame = new Chess();
    setGame(newGame);
    setBoardFen(newGame.fen());
    setMoveHistory([]);
    setShowingHint(false);
    setIsEngineThinking(false);
    if (onFenChange) onFenChange(newGame.fen());
  };

  // Undo Move (undo 2 moves in AI mode, 1 move in analysis)
  const handleUndo = () => {
    if (engineMoveTimeoutRef.current) clearTimeout(engineMoveTimeoutRef.current);
    setIsEngineThinking(false);
    const gameCopy = new Chess(game.fen());
    
    if (gameMode === 'vsEngine') {
      // Undo opponent and player move if possible
      gameCopy.undo();
      if (gameCopy.turn() === (playerColor === 'white' ? 'b' : 'w')) {
        gameCopy.undo();
      }
    } else {
      gameCopy.undo();
    }

    setGame(gameCopy);
    setBoardFen(gameCopy.fen());
    setMoveHistory(gameCopy.history());
    setShowingHint(false);
    if (onFenChange) onFenChange(gameCopy.fen());
  };

  // Flip board orientation
  const handleFlip = () => {
    setBoardOrientation((prev) => (prev === 'white' ? 'black' : 'white'));
  };

  // Compute evaluation height percentage for visual bar
  const getWhiteEvalHeight = () => {
    if (evaluation.mate !== null) {
      return evaluation.mate > 0 ? 100 : 0;
    }
    if (evaluation.cp !== null) {
      const clamped = Math.max(-1000, Math.min(1000, evaluation.cp));
      return 50 + (clamped / 1000) * 45;
    }
    return 50;
  };

  const whiteHeight = getWhiteEvalHeight();

  // Compute captured pieces
  const getCapturedPieces = () => {
    const board = game.board();
    const currentCounts: Record<string, number> = { p: 0, n: 0, b: 0, r: 0, q: 0, P: 0, N: 0, B: 0, R: 0, Q: 0 };
    
    for (const row of board) {
      for (const piece of row) {
        if (piece) {
          const key = piece.color === 'w' ? piece.type.toUpperCase() : piece.type;
          currentCounts[key] = (currentCounts[key] || 0) + 1;
        }
      }
    }

    const initialCounts: Record<string, number> = { p: 8, n: 2, b: 2, r: 2, q: 1, P: 8, N: 2, B: 2, R: 2, Q: 1 };
    const whiteCaptured: CapturedPieces = {
      p: initialCounts.p - currentCounts.p,
      n: initialCounts.n - currentCounts.n,
      b: initialCounts.b - currentCounts.b,
      r: initialCounts.r - currentCounts.r,
      q: initialCounts.q - currentCounts.q,
    };
    const blackCaptured: CapturedPieces = {
      p: initialCounts.P - currentCounts.P,
      n: initialCounts.N - currentCounts.N,
      b: initialCounts.B - currentCounts.B,
      r: initialCounts.R - currentCounts.R,
      q: initialCounts.Q - currentCounts.Q,
    };

    let whiteScore = 0;
    let blackScore = 0;

    Object.entries(whiteCaptured).forEach(([type, count]) => {
      whiteScore += (PIECE_VALUES[type] || 0) * Math.max(0, count);
    });
    Object.entries(blackCaptured).forEach(([type, count]) => {
      blackScore += (PIECE_VALUES[type] || 0) * Math.max(0, count);
    });

    return {
      whiteCaptured,
      blackCaptured,
      materialDiff: whiteScore - blackScore,
    };
  };

  const { whiteCaptured, blackCaptured, materialDiff } = getCapturedPieces();

  // Highlight squares for best move hint
  const getCustomSquareStyles = () => {
    const styles: Record<string, React.CSSProperties> = {};
    if (showingHint && evaluation.bestMove) {
      const fromSq = evaluation.bestMove.slice(0, 2);
      const toSq = evaluation.bestMove.slice(2, 4);

      styles[fromSq] = { backgroundColor: 'rgba(234, 179, 8, 0.6)', borderRadius: '4px' };
      styles[toSq] = { backgroundColor: 'rgba(34, 197, 94, 0.7)', borderRadius: '4px' };
    }
    return styles;
  };

  // Render game result message
  const renderGameStatus = () => {
    if (game.isCheckmate()) {
      const winner = game.turn() === 'w' ? 'Black' : 'White';
      return (
        <div className="bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg animate-fade-in">
          <Trophy className="w-5 h-5 text-amber-400" />
          <span className="font-bold text-sm">Checkmate! {winner} Wins!</span>
        </div>
      );
    }
    if (game.isDraw()) {
      let reason = 'Draw';
      if (game.isStalemate()) reason = 'Stalemate';
      else if (game.isThreefoldRepetition()) reason = 'Threefold Repetition';
      else if (game.isInsufficientMaterial()) reason = 'Insufficient Material';
      return (
        <div className="bg-amber-950/80 border border-amber-600/50 text-amber-200 px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          <span className="font-bold text-sm">Game Over: {reason}</span>
        </div>
      );
    }
    if (game.inCheck()) {
      return (
        <div className="bg-red-950/80 border border-red-600/50 text-red-200 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold animate-pulse">
          <AlertCircle className="w-4 h-4 text-red-400" />
          <span>CHECK!</span>
        </div>
      );
    }
    return null;
  };

  const renderCapturedIcons = (captured: CapturedPieces, pieceStyle: 'white' | 'black') => {
    const symbolMap: Record<string, string> = {
      p: pieceStyle === 'white' ? 'â™Ÿ' : 'â™™',
      n: pieceStyle === 'white' ? 'â™ž' : 'â™˜',
      b: pieceStyle === 'white' ? 'â™' : 'â™—',
      r: pieceStyle === 'white' ? 'â™œ' : 'â™–',
      q: pieceStyle === 'white' ? 'â™›' : 'â™•',
    };

    const icons: string[] = [];
    (Object.keys(captured) as (keyof CapturedPieces)[]).forEach((type) => {
      const count = captured[type];
      for (let i = 0; i < count; i++) {
        icons.push(symbolMap[type]);
      }
    });

    return (
      <div className="flex items-center text-sm font-bold space-x-0.5 text-gray-300">
        {icons.map((icon, idx) => (
          <span key={idx}>{icon}</span>
        ))}
      </div>
    );
  };

  // Mobile panel state: 'engine' | 'history' | null (board is always shown)
  const [mobilePanel, setMobilePanel] = React.useState<'engine' | 'history' | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* ── Top control bar ─────────────────────────────────────────────────── */}
      <div className="bg-[#181714]/90 border border-white/10 rounded-2xl p-3 sm:p-3.5 shadow-xl mb-3 sm:mb-4 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Game mode toggle */}
          <div className="flex items-center bg-[#100f0d] p-1 rounded-xl border border-white/[0.08] shadow-inner">
            <button
              onClick={() => setGameMode('vsEngine')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 btn-press ${
                gameMode === 'vsEngine'
                  ? 'bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] text-black shadow-md shadow-[#81b64c]/20 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span className="hidden xs:inline font-heading">Vs Engine</span>
              <span className="xs:hidden">Engine</span>
            </button>
            <button
              onClick={() => setGameMode('analysis')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 btn-press ${
                gameMode === 'analysis'
                  ? 'bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] text-black shadow-md shadow-[#81b64c]/20 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Swords className="w-3.5 h-3.5" />
              <span className="font-heading">Analysis</span>
            </button>
          </div>

          {/* Player color (vsEngine only) */}
          {gameMode === 'vsEngine' && (
            <div className="flex items-center gap-1.5 bg-[#100f0d] px-2.5 py-1 rounded-xl border border-white/[0.08]">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mr-0.5">Play:</span>
              <button
                onClick={() => setPlayerColor('white')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all btn-press ${
                  playerColor === 'white'
                    ? 'bg-gradient-to-r from-gray-100 to-gray-200 text-black border-white shadow-sm'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                }`}
              >
                ⚪ W
              </button>
              <button
                onClick={() => setPlayerColor('black')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all btn-press ${
                  playerColor === 'black'
                    ? 'bg-gradient-to-r from-gray-900 to-black text-white border-white/20 shadow-sm'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                }`}
              >
                ⚫ B
              </button>
            </div>
          )}

          {/* Difficulty */}
          <div className="flex items-center gap-2 bg-[#100f0d] px-3 py-1 rounded-xl border border-white/[0.08] ml-auto">
            <Gauge className="w-3.5 h-3.5 text-[#81b64c]" />
            <select
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="bg-transparent text-xs font-bold text-gray-200 focus:outline-none font-heading cursor-pointer"
            >
              {DIFFICULTY_LEVELS.map((lvl) => (
                <option key={lvl.depth} value={lvl.depth} className="bg-[#181714]">
                  {lvl.name} (Depth {lvl.depth})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-start">

        {/* ── Left: board column ────────────────────────────────────────────── */}
        <div className="lg:col-span-7 flex flex-col items-center gap-2.5 sm:gap-3">

          {/* Opponent badge */}
          <div className="w-full max-w-[540px] bg-[#181714]/90 border border-white/10 rounded-2xl px-3.5 py-2.5 flex items-center justify-between shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-sm">
                {gameMode === 'vsEngine' && playerColor === 'white'
                  ? <Bot className="w-4 h-4 text-[#81b64c]" />
                  : <User className="w-4 h-4 text-gray-300" />}
              </div>
              <div>
                <div className="text-xs font-heading font-extrabold text-white flex items-center gap-2">
                  {gameMode === 'vsEngine'
                    ? playerColor === 'white' ? 'Stockfish 16 NNUE' : 'You (Black)'
                    : 'Black Player'}
                  {isEngineThinking && (
                    <span className="text-[9px] text-[#81b64c] animate-pulse flex items-center gap-1 font-mono">
                      <RefreshCw className="w-2.5 h-2.5 animate-spin" /> Thinking…
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-gray-400 font-mono">
                  {gameMode === 'vsEngine' && playerColor === 'white'
                    ? `${DIFFICULTY_LEVELS.find((d) => d.depth === depth)?.name || 'Custom'} · d${depth}`
                    : 'Human'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {renderCapturedIcons(
                playerColor === 'white' ? whiteCaptured : blackCaptured,
                playerColor === 'white' ? 'black' : 'white'
              )}
              {materialDiff !== 0 && (
                <span className="text-[10px] font-bold font-mono text-[#81b64c] bg-[#81b64c]/10 px-2 py-0.5 rounded-lg border border-[#81b64c]/20">
                  {playerColor === 'white'
                    ? materialDiff < 0
                      ? `+${Math.abs(materialDiff)}`
                      : ''
                    : materialDiff > 0
                    ? `+${materialDiff}`
                    : ''}
                </span>
              )}
            </div>
          </div>

          {/* Board + Eval bar */}
          <div className="flex items-stretch justify-center w-full max-w-[540px] gap-2.5">
            {/* Eval bar */}
            <div className="w-5 sm:w-6 bg-[#161512] border border-white/10 rounded-xl overflow-hidden flex flex-col relative shadow-inner">
              <div className="bg-[#24221d] transition-all duration-500 ease-out w-full" style={{ height: `${100 - whiteHeight}%` }} />
              <div className="bg-gray-100 transition-all duration-500 ease-out w-full" style={{ height: `${whiteHeight}%` }} />
              <div className="absolute inset-0 flex flex-col justify-between items-center py-2 text-[8px] sm:text-[9px] font-mono font-bold pointer-events-none mix-blend-difference text-white">
                <span>
                  {evaluation.mate !== null
                    ? `#${evaluation.mate}`
                    : evaluation.cp !== null
                    ? (evaluation.cp / 100).toFixed(1)
                    : ''}
                </span>
              </div>
            </div>

            {/* Chessboard */}
            <div className="flex-1 max-w-[510px] aspect-square rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-2 border-white/10 bg-[#161512] relative">
              <Chessboard
                position={boardFen}
                onPieceDrop={onDrop}
                boardOrientation={boardOrientation}
                customSquareStyles={getCustomSquareStyles()}
                customBoardStyle={{ borderRadius: '12px' }}
                customDarkSquareStyle={{ backgroundColor: '#739552' }}
                customLightSquareStyle={{ backgroundColor: '#ebedd0' }}
                arePiecesDraggable={!isEngineThinking && !game.isGameOver()}
                animationDuration={160}
              />
            </div>
          </div>

          {/* You badge */}
          <div className="w-full max-w-[540px] bg-[#181714]/90 border border-white/10 rounded-2xl px-3.5 py-2.5 flex items-center justify-between shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-sm">
                {gameMode === 'vsEngine' && playerColor === 'white'
                  ? <User className="w-4 h-4 text-[#81b64c]" />
                  : <Bot className="w-4 h-4 text-gray-300" />}
              </div>
              <div>
                <div className="text-xs font-heading font-extrabold text-white flex items-center gap-2">
                  {gameMode === 'vsEngine'
                    ? playerColor === 'white' ? 'You (White)' : 'Stockfish 16 NNUE'
                    : 'White Player'}
                  {game.turn() === (playerColor === 'white' ? 'w' : 'b') && !game.isGameOver() && (
                    <span className="text-[9px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-700/40">
                      Your Turn
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-gray-400 font-mono">
                  {gameMode === 'vsEngine' && playerColor === 'black'
                    ? `${DIFFICULTY_LEVELS.find((d) => d.depth === depth)?.name || 'Custom'} · d${depth}`
                    : 'Human'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {renderCapturedIcons(
                playerColor === 'white' ? blackCaptured : whiteCaptured,
                playerColor === 'white' ? 'white' : 'black'
              )}
              {materialDiff !== 0 && (
                <span className="text-[10px] font-bold font-mono text-[#81b64c] bg-[#81b64c]/10 px-2 py-0.5 rounded-lg border border-[#81b64c]/20">
                  {playerColor === 'white'
                    ? materialDiff > 0
                      ? `+${materialDiff}`
                      : ''
                    : materialDiff < 0
                    ? `+${Math.abs(materialDiff)}`
                    : ''}
                </span>
              )}
            </div>
          </div>

          {/* Action toolbar */}
          <div className="w-full max-w-[540px] flex items-center justify-between bg-[#181714]/90 border border-white/10 p-2.5 rounded-2xl shadow-lg backdrop-blur-md">
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 border border-white/10 btn-press"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#81b64c]" />
                <span>New</span>
              </button>
              <button
                onClick={handleUndo}
                disabled={moveHistory.length === 0}
                className="px-3.5 py-2 bg-white/5 hover:bg-white/10 disabled:opacity-30 text-gray-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 border border-white/10 btn-press"
              >
                <Undo2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Undo</span>
              </button>
              <button
                onClick={handleFlip}
                className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 border border-white/10 btn-press"
              >
                <ArrowRightLeft className="w-3.5 h-3.5 text-purple-400" />
                <span>Flip</span>
              </button>
            </div>
            {renderGameStatus()}
          </div>

          {/* ── Mobile: panel tab bar (only visible on < lg) ──────────────────── */}
          <div className="lg:hidden w-full max-w-[540px]">
            <div className="flex gap-1.5 bg-[#100f0d] p-1 rounded-2xl border border-white/[0.08] shadow-inner">
              <button
                onClick={() => setMobilePanel(mobilePanel === 'engine' ? null : 'engine')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 btn-press ${
                  mobilePanel === 'engine'
                    ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                Engine Controls
              </button>
              <button
                onClick={() => setMobilePanel(mobilePanel === 'history' ? null : 'history')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 btn-press ${
                  mobilePanel === 'history'
                    ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Moves ({moveHistory.length})
              </button>
            </div>

            {/* Mobile Engine Panel */}
            {mobilePanel === 'engine' && (
              <div className="mt-2.5 animate-fade-in">
                <StockfishControls
                  evaluation={evaluation}
                  depth={depth}
                  setDepth={setDepth}
                  isEngineReady={isEngineReady}
                  onGetHint={() => setShowingHint(!showingHint)}
                  showingHint={showingHint}
                />
              </div>
            )}

            {/* Mobile Move History Panel */}
            {mobilePanel === 'history' && (
              <div className="mt-2.5 bg-[#181714]/90 border border-white/10 rounded-3xl p-4 shadow-xl backdrop-blur-md animate-fade-in">
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/[0.08]">
                  <h4 className="text-xs font-heading font-extrabold text-white flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#81b64c]" />
                    Move History
                  </h4>
                  <span className="text-[10px] text-gray-400 font-mono bg-white/5 px-2 py-0.5 rounded-full border border-white/5">{moveHistory.length} moves</span>
                </div>
                <div className="max-h-48 overflow-y-auto font-mono text-xs grid grid-cols-2 gap-x-3 gap-y-1.5 pr-1">
                  {moveHistory.length === 0 ? (
                    <div className="col-span-2 text-center text-gray-500 py-8 italic text-xs">No moves yet</div>
                  ) : (
                    moveHistory.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-gray-500 text-[10px] w-6 shrink-0">{Math.floor(idx / 2) + 1}{idx % 2 === 0 ? '.' : '…'}</span>
                        <span className="font-bold text-emerald-400">{m}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Right: desktop panels (hidden on mobile) ──────────────────────── */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-4">
          <StockfishControls
            evaluation={evaluation}
            depth={depth}
            setDepth={setDepth}
            isEngineReady={isEngineReady}
            onGetHint={() => setShowingHint(!showingHint)}
            showingHint={showingHint}
          />

          {/* Move History Panel */}
          <div className="bg-[#181714]/90 border border-white/10 rounded-3xl p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/[0.08]">
              <h4 className="text-xs font-heading font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#81b64c]" />
                Move History
              </h4>
              <span className="text-[10px] text-gray-400 font-mono bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">{moveHistory.length} moves</span>
            </div>
            <div className="h-44 overflow-y-auto font-mono text-xs grid grid-cols-2 gap-x-4 gap-y-1.5 bg-[#12110e]/70 p-3 rounded-2xl border border-white/5">
              {moveHistory.length === 0 ? (
                <div className="col-span-2 text-center text-gray-500 py-12 italic text-xs">
                  No moves played yet.
                </div>
              ) : (
                moveHistory.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gray-500 w-7 shrink-0 text-[10px]">{Math.floor(idx / 2) + 1}{idx % 2 === 0 ? '.' : '…'}</span>
                    <span className="font-bold text-emerald-400 tracking-wide">{m}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
