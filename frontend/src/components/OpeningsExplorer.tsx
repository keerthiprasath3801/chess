import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import {
  BookOpen,
  RotateCcw,
  Undo2,
  ArrowRightLeft,
  Cpu,
  ChevronRight,
  TrendingUp,
  Globe,
  Database,
  Search,
  Play,
  Pause,
  ListTree,
  Trophy
} from 'lucide-react';
import {
  fetchOpeningExplorerStats,
  ExplorerResponse,
  ExplorerDatabaseSource
} from '../services/openingExplorerService';
import { OpeningMoveStats } from '../data/openingsBook';
import { OPENING_FAMILIES, SubVariation, getMoveExplanation, MovePurposeExplanation } from '../data/openingsMasterData';
import { GM_OPENINGS_GAMES, GMOpeningGame } from '../data/openingsGamesData';

interface OpeningsExplorerProps {
  onAnalyzePosition?: (fen: string) => void;
  onSelectGMGame?: (pgn: string) => void;
  onOpenTraps?: () => void;
}

type ExplorerTab = 'moves' | 'variations' | 'gm-games';

export const OpeningsExplorer: React.FC<OpeningsExplorerProps> = ({
  onAnalyzePosition,
  onOpenTraps,
}) => {
  const [game, setGame] = useState(() => new Chess());
  const [boardFen, setBoardFen] = useState(game.fen());
  const [orientation, setOrientation] = useState<'white' | 'black'>('white');
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [historyFens, setHistoryFens] = useState<string[]>([game.fen()]);
  const [selectedMoveIndex, setSelectedMoveIndex] = useState<number>(-1);
  
  // Database source & active explorer tab
  const [dbSource, setDbSource] = useState<ExplorerDatabaseSource>('masters');
  const [activeExplorerTab, setActiveExplorerTab] = useState<ExplorerTab>('moves');
  const [explorerData, setExplorerData] = useState<ExplorerResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hoveredMove, setHoveredMove] = useState<OpeningMoveStats | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Active family & variation filters
  const [selectedFamilyId, setSelectedFamilyId] = useState<string>('all');
  const [selectedSubVarId, setSelectedSubVarId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected GM Game for interactive replay
  const [selectedGMGame, setSelectedGMGame] = useState<GMOpeningGame | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  // Extract all sub-variations flat list
  const allSubVariations = useMemo(() => {
    const list: (SubVariation & { familyName: string; familyId: string })[] = [];
    OPENING_FAMILIES.forEach(fam => {
      fam.subVariations.forEach(sub => {
        list.push({ ...sub, familyName: fam.name, familyId: fam.id });
      });
    });
    return list;
  }, []);

  // Filtered Sub-variations
  const filteredSubVariations = useMemo(() => {
    return allSubVariations.filter(sub => {
      if (selectedFamilyId !== 'all' && sub.familyId !== selectedFamilyId) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = sub.name.toLowerCase().includes(q);
        const matchesEco = sub.eco.toLowerCase().includes(q);
        const matchesDesc = sub.description.toLowerCase().includes(q);
        const matchesMoves = sub.moves.some(m => m.toLowerCase().includes(q));
        if (!matchesName && !matchesEco && !matchesDesc && !matchesMoves) return false;
      }
      return true;
    });
  }, [allSubVariations, selectedFamilyId, searchQuery]);

  // Filtered GM Games
  const filteredGMGames = useMemo(() => {
    return GM_OPENINGS_GAMES.filter(g => {
      if (selectedFamilyId !== 'all') {
        const fam = OPENING_FAMILIES.find(f => f.id === selectedFamilyId);
        if (fam && !g.openingFamily.toLowerCase().includes(fam.name.toLowerCase().replace(' defense', '').replace(' opening', ''))) {
          // Check match
          const matches = fam.subVariations.some(s => s.name === g.subVariation);
          if (!matches) return false;
        }
      }
      if (selectedSubVarId !== 'all') {
        const sub = allSubVariations.find(s => s.id === selectedSubVarId);
        if (sub && g.subVariation !== sub.name) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesPlayers = g.white.toLowerCase().includes(q) || g.black.toLowerCase().includes(q);
        const matchesOpening = g.subVariation.toLowerCase().includes(q) || g.openingFamily.toLowerCase().includes(q);
        const matchesEco = g.eco.toLowerCase().includes(q);
        const matchesEvent = g.event.toLowerCase().includes(q);
        if (!matchesPlayers && !matchesOpening && !matchesEco && !matchesEvent) return false;
      }
      return true;
    });
  }, [selectedFamilyId, selectedSubVarId, searchQuery, allSubVariations]);

  // Fetch opening stats when board FEN or DB source changes
  useEffect(() => {
    let isCurrent = true;
    setIsLoading(true);

    fetchOpeningExplorerStats(boardFen, dbSource)
      .then((data) => {
        if (isCurrent) {
          setExplorerData(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isCurrent) {
          setIsLoading(false);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [boardFen, dbSource]);

  // Execute a single move on the board
  const makeMove = useCallback(
    (move: any) => {
      try {
        const gameCopy = new Chess(game.fen());
        const result = gameCopy.move(move);
        if (result) {
          setGame(gameCopy);
          const newFen = gameCopy.fen();
          setBoardFen(newFen);
          const history = gameCopy.history();
          setMoveHistory(history);
          setHistoryFens((prev) => [...prev, newFen]);
          setSelectedMoveIndex(history.length - 1);
          setHoveredMove(null);
          return true;
        }
      } catch (e) {
        return false;
      }
      return false;
    },
    [game]
  );

  // Play full variation line on the board
  const loadVariationLine = (line: SubVariation, upToPly?: number) => {
    const newG = new Chess();
    const fens = [newG.fen()];
    const history: string[] = [];
    const limit = upToPly !== undefined ? Math.min(upToPly + 1, line.moves.length) : line.moves.length;

    for (let i = 0; i < limit; i++) {
      try {
        newG.move(line.moves[i]);
        fens.push(newG.fen());
        history.push(line.moves[i]);
      } catch (e) {
        break;
      }
    }

    setGame(newG);
    setBoardFen(newG.fen());
    setMoveHistory(history);
    setHistoryFens(fens);
    setSelectedMoveIndex(history.length - 1);
    setHoveredMove(null);
  };

  // Load and play a Grandmaster Game
  const loadGMGame = (gmGame: GMOpeningGame) => {
    setSelectedGMGame(gmGame);
    const newG = new Chess();
    const fens = [newG.fen()];
    const history: string[] = [];

    // Parse moves from PGN
    const rawMoves = gmGame.moves.replace(/\d+\./g, ' ').replace(/1-0|0-1|1\/2-1\/2/g, '').trim().split(/\s+/).filter(Boolean);

    for (let i = 0; i < rawMoves.length; i++) {
      try {
        const res = newG.move(rawMoves[i]);
        if (res) {
          fens.push(newG.fen());
          history.push(res.san);
        } else {
          break;
        }
      } catch (e) {
        break;
      }
    }

    setGame(newG);
    setBoardFen(newG.fen());
    setMoveHistory(history);
    setHistoryFens(fens);
    setSelectedMoveIndex(history.length - 1);
    setHoveredMove(null);
  };

  // Autoplay GM Game
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isAutoPlaying && selectedMoveIndex < moveHistory.length - 1) {
      timer = setTimeout(() => {
        jumpToMove(selectedMoveIndex + 1);
      }, 1400);
    } else if (selectedMoveIndex >= moveHistory.length - 1) {
      setIsAutoPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isAutoPlaying, selectedMoveIndex, moveHistory]);

  // Jump to specific move in breadcrumbs / game
  const jumpToMove = (index: number) => {
    if (index < -1 || index >= historyFens.length - 1) return;
    const targetFen = historyFens[index + 1];
    const newGame = new Chess(targetFen);
    setGame(newGame);
    setBoardFen(targetFen);
    setSelectedMoveIndex(index);
    setHoveredMove(null);
  };

  // Reset to initial position
  const handleReset = () => {
    const newGame = new Chess();
    setGame(newGame);
    setBoardFen(newGame.fen());
    setMoveHistory([]);
    setHistoryFens([newGame.fen()]);
    setSelectedMoveIndex(-1);
    setHoveredMove(null);
    setIsAutoPlaying(false);
  };

  // Undo one ply
  const handleUndo = () => {
    if (moveHistory.length === 0) return;
    jumpToMove(moveHistory.length - 2);
  };

  // Active Move Explanation determination
  const activeMoveExplanation: MovePurposeExplanation | null = useMemo(() => {
    if (selectedMoveIndex < 0 || selectedMoveIndex >= moveHistory.length) {
      return null;
    }
    const currentSan = moveHistory[selectedMoveIndex];
    const color = selectedMoveIndex % 2 === 0 ? 'white' : 'black';
    const currentOpening = explorerData?.openingName || 'Standard Opening';

    // If viewing a GM game with specific move explanation
    if (selectedGMGame && selectedGMGame.moveExplanations && selectedGMGame.moveExplanations[selectedMoveIndex]) {
      const exp = selectedGMGame.moveExplanations[selectedMoveIndex];
      return {
        san: exp.san,
        ply: exp.ply,
        color: exp.color,
        purpose: exp.purpose,
        strategicConcept: exp.concept
      };
    }

    return getMoveExplanation(currentSan, selectedMoveIndex, color, currentOpening);
  }, [selectedMoveIndex, moveHistory, explorerData, selectedGMGame]);

  // Piece drop handler for chessboard
  const onPieceDrop = (sourceSquare: string, targetSquare: string) => {
    return makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });
  };

  // Custom square styles to highlight move preview
  const getCustomSquareStyles = () => {
    const styles: Record<string, React.CSSProperties> = {};
    if (hoveredMove && hoveredMove.uci && hoveredMove.uci.length >= 4) {
      const from = hoveredMove.uci.substring(0, 2);
      const to = hoveredMove.uci.substring(2, 4);
      styles[from] = { backgroundColor: 'rgba(129, 182, 76, 0.45)' };
      styles[to] = { backgroundColor: 'rgba(129, 182, 76, 0.7)', borderRadius: '50%' };
    }
    return styles;
  };

  // Copy FEN to clipboard
  const handleCopyFen = () => {
    navigator.clipboard.writeText(boardFen);
    setCopiedNotification('FEN copied to clipboard!');
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  // Format games number
  const formatGamesCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  return (
    <div className="min-h-screen bg-[#12110e] text-gray-100 flex flex-col font-sans pb-12">
      {/* ── Top Header Bar ─────────────────────────────────────────────────── */}
      <header className="bg-[#181613]/95 border-b border-white/[0.07] sticky top-0 z-30 backdrop-blur-xl shadow-lg shadow-black/25">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-5 py-2.5 flex items-center justify-between gap-3 flex-wrap">
          {/* Left Title & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-700 border border-teal-400/40 flex items-center justify-center shadow-md shadow-teal-500/20 text-white font-bold text-sm">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight leading-none">
                  Openings Master Database
                </h1>
                <span className="text-[10px] bg-teal-500/15 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
                  {allSubVariations.length}+ Deep Variations & {GM_OPENINGS_GAMES.length}+ GM Games
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono mt-0.5 hidden xs:block">
                All opening families, deep sub-variations, move-by-move strategic purpose & Grandmaster encounters
              </p>
            </div>
          </div>

          {/* Database Source Switcher */}
          <div className="flex items-center bg-[#100f0d] p-1 rounded-2xl border border-white/[0.08] shadow-inner flex-wrap gap-1">
            <button
              onClick={() => setDbSource('masters')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 btn-press ${
                dbSource === 'masters'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-md shadow-emerald-500/25 font-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Master Stats</span>
            </button>
            <button
              onClick={() => setDbSource('lichess')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 btn-press ${
                dbSource === 'lichess'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-md shadow-emerald-500/25 font-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Lichess 2200+</span>
            </button>
            <button
              onClick={() => setDbSource('builtin')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 btn-press ${
                dbSource === 'builtin'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-md shadow-emerald-500/25 font-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Offline Repertoire</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {onOpenTraps && (
              <button
                onClick={onOpenTraps}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white font-extrabold text-xs transition-all shadow-md shadow-rose-500/20 flex items-center gap-1.5 btn-press"
              >
                <span>🎯</span>
                <span>Opening Traps</span>
              </button>
            )}
            {onAnalyzePosition && (
              <button
                onClick={() => onAnalyzePosition(boardFen)}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] hover:from-[#9fd168] hover:to-[#81b64c] text-black font-black text-xs transition-all shadow-md shadow-[#81b64c]/20 flex items-center gap-1.5 btn-press"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Analyze with Stockfish 16</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── Main Explorer Content Grid ───────────────────────────────────────── */}
      <main className="max-w-[1600px] mx-auto px-3 sm:px-5 py-4 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* ── Left Column: Chessboard & Move Controls ── */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center gap-3">
            
            {/* Active Opening Banner above board */}
            <div className="w-full max-w-[540px] bg-[#181714]/90 border border-white/10 rounded-2xl p-3 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      {explorerData?.eco || 'A00'}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono truncate">
                      {selectedGMGame ? `GM Game: ${selectedGMGame.white} vs ${selectedGMGame.black}` : explorerData?.category || 'Standard Opening'}
                    </span>
                  </div>
                  <h2 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight mt-1 truncate">
                    {explorerData?.openingName || 'Standard Opening'}
                  </h2>
                </div>

                {isLoading && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px]">Loading stats…</span>
                  </div>
                )}
              </div>
            </div>

            {/* Chessboard Container */}
            <div className="w-full max-w-[540px] aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#2b2924] p-1">
              <Chessboard
                position={boardFen}
                onPieceDrop={onPieceDrop}
                boardOrientation={orientation}
                customBoardStyle={{
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
                }}
                customDarkSquareStyle={{ backgroundColor: '#779952' }}
                customLightSquareStyle={{ backgroundColor: '#edeed1' }}
                customSquareStyles={getCustomSquareStyles()}
                animationDuration={200}
              />
            </div>

            {/* Board Controls Bar */}
            <div className="w-full max-w-[540px] flex items-center justify-between bg-[#181714]/90 border border-white/10 p-2.5 rounded-2xl shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1 border border-white/10 btn-press"
                  title="Starting Position"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={handleUndo}
                  disabled={moveHistory.length === 0}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 disabled:opacity-30 text-gray-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1 border border-white/10 btn-press"
                  title="Undo Move"
                >
                  <Undo2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Undo</span>
                </button>
                <button
                  onClick={() => setOrientation((o) => (o === 'white' ? 'black' : 'white'))}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1 border border-white/10 btn-press"
                  title="Flip Board"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5 text-purple-400" />
                  <span>Flip</span>
                </button>

                {selectedGMGame && (
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 border ${
                      isAutoPlaying
                        ? 'bg-amber-500 text-black font-black border-amber-400'
                        : 'bg-white/5 hover:bg-white/10 text-amber-300 border-white/10'
                    }`}
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isAutoPlaying ? 'Pause' : 'Autoplay'}</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyFen}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-mono rounded-xl transition-all border border-white/10 btn-press"
                >
                  {copiedNotification || 'Copy FEN'}
                </button>
              </div>
            </div>

            {/* Move History Breadcrumbs */}
            <div className="w-full max-w-[540px] bg-[#181714]/90 border border-white/10 rounded-2xl p-3 shadow-lg backdrop-blur-md">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Move Sequence ({moveHistory.length} plies)</span>
                <span className="font-mono text-emerald-400 font-bold">{explorerData?.eco || 'A00'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                <button
                  onClick={() => jumpToMove(-1)}
                  className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedMoveIndex === -1
                      ? 'bg-emerald-500 text-black font-black shadow-sm'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  Start
                </button>
                {moveHistory.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToMove(idx)}
                    className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      selectedMoveIndex === idx
                        ? 'bg-emerald-500 text-black font-black shadow-sm'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {idx % 2 === 0 ? `${Math.floor(idx / 2) + 1}. ` : ''}
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Real-Time Move-by-Move Purpose & Explanation Card ── */}
            <div className="w-full max-w-[540px] bg-gradient-to-br from-[#1a1914] to-[#151410] border border-amber-500/30 rounded-2xl p-4 shadow-xl backdrop-blur-md space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold text-xs">
                    💡
                  </div>
                  <h3 className="font-heading font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
                    Move Purpose & Strategic Explanation
                  </h3>
                </div>
                {selectedMoveIndex >= 0 && moveHistory[selectedMoveIndex] && (
                  <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {selectedMoveIndex % 2 === 0 ? `${Math.floor(selectedMoveIndex / 2) + 1}. ` : `${Math.floor(selectedMoveIndex / 2) + 1}... `}
                    {moveHistory[selectedMoveIndex]}
                  </span>
                )}
              </div>

              {activeMoveExplanation ? (
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                      Why this move was played:
                    </span>
                    <p className="text-xs text-gray-200 leading-relaxed font-sans mt-0.5">
                      {activeMoveExplanation.purpose}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                      Strategic Concept & Purpose:
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans mt-0.5">
                      {activeMoveExplanation.strategicConcept}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="py-2 text-center text-xs text-gray-400">
                  <p>Click on any move in the sequence, candidate table, or variation list to view why it is played and its tactical & strategic purpose.</p>
                </div>
              )}
            </div>

          </div>

          {/* ── Right Column: Tabs (Candidate Moves, Sub-Variations, GM Master Games) ── */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-4">
            
            {/* Master Tab Switcher */}
            <div className="flex items-center bg-[#151411] p-1.5 rounded-2xl border border-white/10 shadow-lg justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1 flex-wrap">
                <button
                  onClick={() => setActiveExplorerTab('moves')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 ${
                    activeExplorerTab === 'moves'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-md shadow-emerald-500/25 font-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Candidate Moves</span>
                </button>
                <button
                  onClick={() => setActiveExplorerTab('variations')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 ${
                    activeExplorerTab === 'variations'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-black shadow-md shadow-teal-500/25 font-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <ListTree className="w-3.5 h-3.5" />
                  <span>{allSubVariations.length}+ Deep Opening Lines</span>
                </button>
                <button
                  onClick={() => setActiveExplorerTab('gm-games')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 ${
                    activeExplorerTab === 'gm-games'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md shadow-amber-500/25 font-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{GM_OPENINGS_GAMES.length}+ GM Master Games</span>
                </button>
              </div>

              <span className="text-[10px] font-mono text-gray-400 px-2 py-0.5 bg-white/5 rounded-lg border border-white/5 hidden xl:inline">
                {activeExplorerTab === 'moves' ? `${explorerData?.moves.length || 0} candidate moves` : activeExplorerTab === 'variations' ? `${filteredSubVariations.length} deep lines` : `${filteredGMGames.length} GM games`}
              </span>
            </div>

            {/* Filter Bar (Opening Family & Search) */}
            <div className="flex items-center gap-2 bg-[#181714]/90 p-2.5 rounded-2xl border border-white/10 shadow-md flex-wrap">
              <div className="relative flex-1 min-w-[180px]">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search openings, variations, players, ECO..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#100f0d] border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50"
                />
              </div>

              {/* Opening Family Filter Dropdown */}
              <select
                value={selectedFamilyId}
                onChange={(e) => {
                  setSelectedFamilyId(e.target.value);
                  setSelectedSubVarId('all');
                }}
                className="bg-[#100f0d] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-gray-300 focus:outline-none"
              >
                <option value="all">All Opening Families ({OPENING_FAMILIES.length})</option>
                {OPENING_FAMILIES.map((fam) => (
                  <option key={fam.id} value={fam.id}>
                    {fam.name} ({fam.subVariations.length} vars)
                  </option>
                ))}
              </select>

              {/* Sub-variation Filter Dropdown (when family selected or in GM games) */}
              {selectedFamilyId !== 'all' && (
                <select
                  value={selectedSubVarId}
                  onChange={(e) => setSelectedSubVarId(e.target.value)}
                  className="bg-[#100f0d] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-gray-300 focus:outline-none max-w-[220px] truncate"
                >
                  <option value="all">All Sub-Variations</option>
                  {OPENING_FAMILIES.find(f => f.id === selectedFamilyId)?.subVariations.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* TAB 1: Candidate Moves Table */}
            {activeExplorerTab === 'moves' && (
              <div className="bg-[#181714]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="px-4 py-3 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <h3 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
                      Master Candidate Moves & Win Rates
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-white" /> White
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-zinc-500" /> Draw
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-700" /> Black
                    </span>
                  </div>
                </div>

                {/* Table Body */}
                <div className="overflow-x-auto">
                  {explorerData && explorerData.moves.length > 0 ? (
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-white/[0.06] text-[10px] font-mono text-gray-400 uppercase tracking-wider bg-white/[0.01]">
                          <th className="py-2.5 px-4 font-bold">Move</th>
                          <th className="py-2.5 px-3 font-bold text-right">Games</th>
                          <th className="py-2.5 px-4 font-bold text-center w-[260px] sm:w-[320px]">
                            Win / Draw / Loss %
                          </th>
                          <th className="py-2.5 px-3 font-bold text-right">Play</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04]">
                        {explorerData.moves.map((move, idx) => {
                          const totalPct = move.white + move.draw + move.black || 100;
                          const wPct = Math.round((move.white / totalPct) * 100);
                          const dPct = Math.round((move.draw / totalPct) * 100);
                          const bPct = Math.max(0, 100 - wPct - dPct);

                          return (
                            <tr
                              key={idx}
                              onMouseEnter={() => setHoveredMove(move)}
                              onMouseLeave={() => setHoveredMove(null)}
                              onClick={() => makeMove(move.san)}
                              className="hover:bg-white/[0.06] cursor-pointer transition-colors group"
                            >
                              {/* Move Name */}
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono font-black text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors">
                                    {move.san}
                                  </span>
                                  {move.name && (
                                    <span className="text-[10px] text-gray-400 truncate max-w-[150px] hidden sm:inline">
                                      {move.name}
                                    </span>
                                  )}
                                </div>
                              </td>

                              {/* Games Count */}
                              <td className="py-3 px-3 text-right font-mono font-bold text-gray-300 text-xs">
                                {formatGamesCount(move.games)}
                              </td>

                              {/* Tri-Color Percentage Bar */}
                              <td className="py-3 px-4">
                                <div className="space-y-1">
                                  <div className="h-4.5 w-full bg-[#12110e] rounded-lg overflow-hidden flex border border-white/10 shadow-inner">
                                    <div
                                      className="bg-gray-100 hover:bg-white text-black font-mono font-black text-[9px] flex items-center justify-center transition-all"
                                      style={{ width: `${wPct}%` }}
                                      title={`White wins: ${wPct}%`}
                                    >
                                      {wPct >= 12 ? `${wPct}%` : ''}
                                    </div>
                                    <div
                                      className="bg-[#52525b] hover:bg-[#71717a] text-gray-200 font-mono font-bold text-[9px] flex items-center justify-center transition-all"
                                      style={{ width: `${dPct}%` }}
                                      title={`Draws: ${dPct}%`}
                                    >
                                      {dPct >= 12 ? `${dPct}%` : ''}
                                    </div>
                                    <div
                                      className="bg-[#18181b] hover:bg-[#27272a] text-gray-300 font-mono font-black text-[9px] flex items-center justify-center transition-all"
                                      style={{ width: `${bPct}%` }}
                                      title={`Black wins: ${bPct}%`}
                                    >
                                      {bPct >= 12 ? `${bPct}%` : ''}
                                    </div>
                                  </div>
                                </div>
                              </td>

                              {/* Play Button */}
                              <td className="py-3 px-3 text-right">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    makeMove(move.san);
                                  }}
                                  className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-emerald-500 group-hover:text-black text-gray-400 flex items-center justify-center transition-all text-xs font-bold ml-auto"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <div className="py-12 px-4 text-center space-y-2">
                      <p className="text-sm font-bold text-gray-400">Loading moves...</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: Sub-Variations Repertoire */}
            {activeExplorerTab === 'variations' && (
              <div className="bg-[#181714]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md p-4 space-y-3">
                <div className="space-y-3 max-h-[580px] overflow-y-auto pr-1">
                  {filteredSubVariations.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-[#1c1a16] border border-white/[0.08] hover:border-teal-500/40 rounded-2xl p-4 transition-all space-y-2.5"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/40 shrink-0">
                            {sub.eco}
                          </span>
                          <div>
                            <h4 className="font-heading font-extrabold text-sm text-white truncate">
                              {sub.name}
                            </h4>
                            <span className="text-[10px] text-gray-400 font-mono">
                              {sub.familyName} • {sub.gamesCount} GM Games Available
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => loadVariationLine(sub)}
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-black font-extrabold text-xs shadow transition-all flex items-center gap-1.5 shrink-0"
                          title="Play all moves of this variation"
                        >
                          <Play className="w-3.5 h-3.5 fill-black" />
                          <span>Play Line ({sub.moves.length} plies)</span>
                        </button>
                      </div>

                      <p className="text-xs text-gray-300 leading-normal font-sans">
                        {sub.description}
                      </p>

                      {/* White and Black Plans */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] bg-[#12110e] p-2.5 rounded-xl border border-white/5">
                        <div>
                          <span className="font-bold text-amber-400">⚪ White Plan: </span>
                          <span className="text-gray-300">{sub.whitePlan}</span>
                        </div>
                        <div>
                          <span className="font-bold text-teal-400">⚫ Black Plan: </span>
                          <span className="text-gray-300">{sub.blackPlan}</span>
                        </div>
                      </div>

                      {/* Interactive Moves Flow with Purpose on Click */}
                      <div className="bg-[#11100e] border border-white/5 rounded-xl p-2 font-mono text-xs flex flex-wrap gap-1 items-center">
                        {sub.moves.map((mv, mIdx) => {
                          const isWhiteMove = mIdx % 2 === 0;
                          const moveNum = Math.floor(mIdx / 2) + 1;
                          return (
                            <React.Fragment key={mIdx}>
                              {isWhiteMove && (
                                <span className="text-gray-500 font-bold ml-1">{moveNum}.</span>
                              )}
                              <button
                                onClick={() => loadVariationLine(sub, mIdx)}
                                className="px-1.5 py-0.5 rounded hover:bg-teal-500/20 hover:text-teal-300 text-gray-300 font-semibold transition-all text-xs"
                                title={`Jump to move ${isWhiteMove ? `${moveNum}.` : `${moveNum}...`} ${mv}`}
                              >
                                {mv}
                              </button>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Grandmaster Games Library (1,020 Games) */}
            {activeExplorerTab === 'gm-games' && (
              <div className="bg-[#181714]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider">
                      Grandmaster Master Games ({filteredGMGames.length} Encounters)
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    Move-by-move annotations included
                  </span>
                </div>

                {/* GM Games List */}
                <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
                  {filteredGMGames.map((gmGame, gIdx) => (
                    <div
                      key={gIdx}
                      className="bg-[#1c1a16] border border-white/[0.08] hover:border-amber-500/40 rounded-2xl p-3.5 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                              {gmGame.eco}
                            </span>
                            <span className="text-xs font-extrabold text-white">
                              ⚪ {gmGame.white} ({gmGame.whiteElo}) <span className="text-gray-500">vs</span> ⚫ {gmGame.black} ({gmGame.blackElo})
                            </span>
                          </div>
                          <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                            {gmGame.subVariation} • {gmGame.event} • {gmGame.year}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs font-black px-2.5 py-1 rounded-lg border ${
                              gmGame.result === '1-0'
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                                : gmGame.result === '0-1'
                                ? 'bg-red-500/20 text-red-400 border-red-500/40'
                                : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                            }`}
                          >
                            {gmGame.result}
                          </span>

                          <button
                            onClick={() => loadGMGame(gmGame)}
                            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs shadow transition-all flex items-center gap-1.5"
                          >
                            <Play className="w-3.5 h-3.5 fill-black" />
                            <span>Replay Game</span>
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-gray-300 leading-normal font-sans">
                        {gmGame.description}
                      </p>

                      {/* Key Themes Badges */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {gmGame.keyThemes.map((theme, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10 font-mono"
                          >
                            🏷️ {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </main>
    </div>
  );
};

export default OpeningsExplorer;
