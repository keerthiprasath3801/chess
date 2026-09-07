import React, { useState, useEffect, useMemo } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import {
  Zap,
  Target,
  Sparkles,
  ArrowRightLeft,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Play,
  Pause,
  AlertTriangle,
  Flame,
  CheckCircle2,
  XCircle,
  Copy,
  Search,
  Cpu,
  ShieldAlert,
  Swords
} from 'lucide-react';
import CHESS_TRAPS, { TrapDifficulty, TRAP_CATEGORIES } from '../data/trapsData';

interface TrapsExplorerProps {
  onAnalyzePosition?: (fen: string) => void;
}

type SortOption = 'order' | 'name' | 'moves-asc' | 'difficulty';

export const TrapsExplorer: React.FC<TrapsExplorerProps> = ({ onAnalyzePosition }) => {
  // Active Trap Selection
  const [selectedTrapId, setSelectedTrapId] = useState<string>(CHESS_TRAPS[0].id);
  const currentTrap = useMemo(() => {
    return CHESS_TRAPS.find((t) => t.id === selectedTrapId) || CHESS_TRAPS[0];
  }, [selectedTrapId]);

  // Game & Move State
  const [currentPly, setCurrentPly] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playSpeed = 1200; // ms per move
  const [orientation, setOrientation] = useState<'white' | 'black'>('white');
  
  // Practice / Trainer Mode
  const [isPracticeMode, setIsPracticeMode] = useState<boolean>(false);
  const [practiceGame, setPracticeGame] = useState<Chess | null>(null);
  const [practicePly, setPracticePly] = useState<number>(0);
  const [practiceFeedback, setPracticeFeedback] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedTrappedSide, setSelectedTrappedSide] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('order');

  // UI Toast
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Synchronize board orientation when selecting a trap:
  // Default to the perspective of the WINNING side so the user learns how to execute the trap!
  useEffect(() => {
    setOrientation(currentTrap.winningSide);
    setCurrentPly(currentTrap.moves.length); // Start at the climax/final position of the trap
    setIsPlaying(false);
    setIsPracticeMode(false);
    setPracticeFeedback(null);
  }, [selectedTrapId, currentTrap]);

  // Current FEN based on currentPly
  const currentFen = useMemo(() => {
    if (isPracticeMode && practiceGame) {
      return practiceGame.fen();
    }
    const safePly = Math.max(0, Math.min(currentPly, currentTrap.fenSequence.length - 1));
    return currentTrap.fenSequence[safePly];
  }, [currentTrap, currentPly, isPracticeMode, practiceGame]);

  // Auto-play timer
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (isPlaying && !isPracticeMode) {
      timer = setInterval(() => {
        setCurrentPly((prev) => {
          if (prev >= currentTrap.moves.length) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, playSpeed);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, isPracticeMode, playSpeed, currentTrap]);

  // Filter and Sort Traps
  const filteredTraps = useMemo(() => {
    return CHESS_TRAPS.filter((trap) => {
      // Category filter
      if (selectedCategory !== 'all' && trap.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'all' && trap.difficulty !== selectedDifficulty) {
        return false;
      }
      // Trapped side filter
      if (selectedTrappedSide !== 'all' && trap.trappedSide !== selectedTrappedSide) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = trap.name.toLowerCase().includes(q);
        const matchesEco = trap.eco.toLowerCase().includes(q);
        const matchesOpening = trap.opening.toLowerCase().includes(q);
        const matchesTheme = trap.theme.toLowerCase().includes(q);
        const matchesMoves = trap.moves.some((m) => m.toLowerCase().includes(q));
        if (!matchesName && !matchesEco && !matchesOpening && !matchesTheme && !matchesMoves) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'order') return a.orderIndex - b.orderIndex;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'moves-asc') return a.moves.length - b.moves.length;
      if (sortBy === 'difficulty') {
        const diffRank = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return diffRank[a.difficulty] - diffRank[b.difficulty];
      }
      return 0;
    });
  }, [selectedCategory, selectedDifficulty, selectedTrappedSide, searchQuery, sortBy]);

  // Current Trap index in filtered list
  const currentFilteredIndex = useMemo(() => {
    return filteredTraps.findIndex((t) => t.id === currentTrap.id);
  }, [filteredTraps, currentTrap]);

  // Navigation handlers
  const handlePrevTrap = () => {
    if (currentFilteredIndex > 0) {
      setSelectedTrapId(filteredTraps[currentFilteredIndex - 1].id);
    }
  };

  const handleNextTrap = () => {
    if (currentFilteredIndex < filteredTraps.length - 1) {
      setSelectedTrapId(filteredTraps[currentFilteredIndex + 1].id);
    }
  };

  const handleFirstMove = () => {
    setIsPlaying(false);
    setCurrentPly(0);
  };

  const handlePrevMove = () => {
    setIsPlaying(false);
    setCurrentPly((prev) => Math.max(0, prev - 1));
  };

  const handleNextMove = () => {
    setIsPlaying(false);
    setCurrentPly((prev) => Math.min(currentTrap.moves.length, prev + 1));
  };

  const handleLastMove = () => {
    setIsPlaying(false);
    setCurrentPly(currentTrap.moves.length);
  };

  const handleJumpToBlunder = () => {
    setIsPlaying(false);
    // Find index of blunder move
    const blunderClean = currentTrap.blunderMove.replace(/[?!+#]/g, '').trim();
    const parts = blunderClean.split(' ');
    const lastPart = parts[parts.length - 1];
    const blunderIdx = currentTrap.moves.findIndex((m) => m.replace(/[?!+#]/g, '') === lastPart);
    if (blunderIdx !== -1) {
      setCurrentPly(blunderIdx + 1);
    } else {
      // Approximate: blunder is usually 2 plies before climax
      setCurrentPly(Math.max(1, currentTrap.moves.length - 2));
    }
  };

  // Start / Reset Practice Mode
  const startPracticeMode = () => {
    setIsPracticeMode(true);
    setIsPlaying(false);
    const newG = new Chess();
    setPracticeGame(newG);
    setPracticePly(0);
    setPracticeFeedback({
      type: 'info',
      text: `You play as ${currentTrap.winningSide.toUpperCase()}. Deliver the ${currentTrap.name}!`,
    });

    // If Black is winning, White makes the first move automatically
    if (currentTrap.winningSide === 'black') {
      setTimeout(() => {
        newG.move(currentTrap.moves[0]);
        setPracticeGame(new Chess(newG.fen()));
        setPracticePly(1);
      }, 400);
    }
  };

  const exitPracticeMode = () => {
    setIsPracticeMode(false);
    setPracticeGame(null);
    setPracticeFeedback(null);
    setCurrentPly(currentTrap.moves.length);
  };

  // Practice move handler
  const handlePracticePieceDrop = (sourceSquare: string, targetSquare: string) => {
    if (!practiceGame) return false;

    try {
      const gCopy = new Chess(practiceGame.fen());
      const move = gCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      });

      if (!move) return false;

      // Check if move matches trap move
      const expectedMoveSan = currentTrap.moves[practicePly];
      const isCorrect = move.san === expectedMoveSan || move.san.replace('+', '') === expectedMoveSan.replace('+', '');

      if (!isCorrect) {
        setPracticeFeedback({
          type: 'error',
          text: `❌ Not the trap move (${move.san}). Expected ${expectedMoveSan}. Try again!`,
        });
        return false;
      }

      // Move is correct!
      setPracticeGame(gCopy);
      const nextPly = practicePly + 1;
      setPracticePly(nextPly);

      if (nextPly >= currentTrap.moves.length) {
        setPracticeFeedback({
          type: 'success',
          text: `🎉 EXCELLENT! You executed the ${currentTrap.name} perfectly!`,
        });
        return true;
      }

      setPracticeFeedback({
        type: 'success',
        text: `✅ Great move! (${move.san})`,
      });

      // Opponent plays next move automatically after a brief pause
      setTimeout(() => {
        if (nextPly < currentTrap.moves.length) {
          const opponentMoveSan = currentTrap.moves[nextPly];
          gCopy.move(opponentMoveSan);
          setPracticeGame(new Chess(gCopy.fen()));
          setPracticePly(nextPly + 1);

          if (nextPly + 1 >= currentTrap.moves.length) {
            setPracticeFeedback({
              type: 'info',
              text: `⚠️ Opponent walked into the blunder! Find the finishing blow!`,
            });
          }
        }
      }, 500);

      return true;
    } catch {
      return false;
    }
  };

  // Highlight squares for custom styling
  const customSquareStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};

    if (!isPracticeMode && currentPly > 0 && currentTrap.uciMoves && currentTrap.uciMoves[currentPly - 1]) {
      const uci = currentTrap.uciMoves[currentPly - 1];
      const from = uci.substring(0, 2);
      const to = uci.substring(2, 4);

      const isClimaxMove = currentPly === currentTrap.moves.length;
      if (isClimaxMove) {
        styles[from] = { backgroundColor: 'rgba(234, 179, 8, 0.45)' };
        styles[to] = { backgroundColor: 'rgba(16, 185, 129, 0.65)', borderRadius: '50%' };
      } else {
        styles[from] = { backgroundColor: 'rgba(129, 182, 76, 0.35)' };
        styles[to] = { backgroundColor: 'rgba(129, 182, 76, 0.65)', borderRadius: '50%' };
      }
    }

    return styles;
  }, [isPracticeMode, currentPly, currentTrap]);

  // Copy FEN to clipboard
  const handleCopyFen = () => {
    navigator.clipboard.writeText(currentFen);
    setCopiedNotification('FEN copied to clipboard!');
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  // Copy PGN to clipboard
  const handleCopyPgn = () => {
    const formattedMoves = currentTrap.moves
      .reduce((acc: string[], move, i) => {
        if (i % 2 === 0) {
          acc.push(`${Math.floor(i / 2) + 1}. ${move}`);
        } else {
          acc[acc.length - 1] += ` ${move}`;
        }
        return acc;
      }, [])
      .join(' ');

    const pgn = `[Event "${currentTrap.name}"]\n[Site "Chess Engine Suite"]\n[ECO "${currentTrap.eco}"]\n[Result "${currentTrap.winningSide === 'white' ? '1-0' : '0-1'}"]\n\n${formattedMoves} ${currentTrap.winningSide === 'white' ? '1-0' : '0-1'}`;
    
    navigator.clipboard.writeText(pgn);
    setCopiedNotification('PGN copied to clipboard!');
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  // Difficulty badge colors
  const getDifficultyBadge = (diff: TrapDifficulty) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'Advanced':
        return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#12110e] text-gray-100 flex flex-col font-sans pb-12">
      {/* ── Top Header & Stats Bar ────────────────────────────────────────── */}
      <header className="bg-[#181613]/95 border-b border-white/[0.07] sticky top-0 z-30 backdrop-blur-xl shadow-lg shadow-black/30">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-5 py-3 flex items-center justify-between gap-3 flex-wrap">
          {/* Left Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-amber-600 border border-rose-400/40 flex items-center justify-center shadow-lg shadow-rose-500/25 text-white font-bold text-base">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-heading font-extrabold text-base sm:text-lg text-white tracking-tight leading-none">
                  Opening Traps & Gambits
                </h1>
                <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2.5 py-0.5 rounded-full font-mono font-bold">
                  {CHESS_TRAPS.length} Classic Traps
                </span>
                <span className="text-[10px] bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono font-semibold hidden md:inline">
                  In Canonical Opening Order
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-mono mt-0.5 hidden xs:block">
                Master deadly opening traps, tactical blunders & winning refutations
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {onAnalyzePosition && (
              <button
                onClick={() => onAnalyzePosition(currentFen)}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] hover:from-[#9fd168] hover:to-[#81b64c] text-black font-black text-xs transition-all shadow-md shadow-[#81b64c]/20 flex items-center gap-1.5 btn-press"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Analyze with Stockfish 16</span>
              </button>
            )}
          </div>
        </div>

        {/* ── Category Pill Tabs ────────────────────────────────────────────── */}
        <div className="max-w-[1600px] mx-auto px-3 sm:px-5 py-2 border-t border-white/[0.05] flex items-center justify-between gap-2 overflow-x-auto no-scrollbar text-xs">
          <div className="flex items-center gap-1.5 flex-nowrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg font-bold transition-all whitespace-nowrap text-xs flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'bg-white/15 text-white shadow-inner border border-white/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🔥 All Traps</span>
              <span className="text-[10px] opacity-70">({CHESS_TRAPS.length})</span>
            </button>
            {TRAP_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1 rounded-lg font-bold transition-all whitespace-nowrap text-xs flex items-center gap-1.5 ${
                  selectedCategory === cat.key
                    ? 'bg-rose-500/25 text-rose-300 border border-rose-500/40 shadow-inner'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-70 font-mono">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              100% Engine Verified
            </span>
          </div>
        </div>
      </header>

      {/* ── Main Layout: Sidebar & Board & Details ───────────────────────── */}
      <main className="max-w-[1600px] mx-auto px-3 sm:px-5 py-4 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* ── Left Column (Desktop: 4 cols): Search & Traps List ──────────── */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {/* Search and Filters Card */}
            <div className="bg-[#181714]/90 border border-white/10 rounded-2xl p-3.5 shadow-lg backdrop-blur-md flex flex-col gap-2.5">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 79 traps, openings, themes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#100f0d] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500/50 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Filter Selectors Row */}
              <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                {/* Trapped Side */}
                <select
                  value={selectedTrappedSide}
                  onChange={(e) => setSelectedTrappedSide(e.target.value)}
                  className="bg-[#100f0d] border border-white/10 rounded-lg px-2 py-1 text-gray-300 focus:outline-none text-[11px]"
                >
                  <option value="all">Trapped: All</option>
                  <option value="white">⚪ White Trapped</option>
                  <option value="black">⚫ Black Trapped</option>
                </select>

                {/* Difficulty */}
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="bg-[#100f0d] border border-white/10 rounded-lg px-2 py-1 text-gray-300 focus:outline-none text-[11px]"
                >
                  <option value="all">Level: All</option>
                  <option value="Beginner">⭐ Beginner</option>
                  <option value="Intermediate">⭐⭐ Medium</option>
                  <option value="Advanced">⭐⭐⭐ Hard</option>
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-[#100f0d] border border-white/10 rounded-lg px-2 py-1 text-gray-300 focus:outline-none text-[11px]"
                >
                  <option value="order">Order (1-79)</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="moves-asc">Shortest First</option>
                  <option value="difficulty">Difficulty</option>
                </select>
              </div>
            </div>

            {/* Traps Scrollable List */}
            <div className="bg-[#181714]/90 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden flex flex-col h-[520px] lg:h-[680px]">
              <div className="px-3.5 py-2.5 border-b border-white/[0.08] bg-[#151411] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-gray-200">Catalog</span>
                  <span className="text-[10px] bg-white/10 text-gray-300 px-1.5 py-0.2 rounded-full font-mono">
                    {filteredTraps.length}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 font-mono">Click to load</span>
              </div>

              <div className="flex-1 overflow-y-auto divide-y divide-white/[0.04] p-1.5 space-y-1">
                {filteredTraps.map((trap) => {
                  const isSelected = trap.id === currentTrap.id;
                  return (
                    <button
                      key={trap.id}
                      onClick={() => setSelectedTrapId(trap.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 group relative ${
                        isSelected
                          ? 'bg-gradient-to-r from-rose-500/20 to-amber-500/10 border border-rose-500/40 shadow-md'
                          : 'hover:bg-white/[0.04] border border-transparent'
                      }`}
                    >
                      {/* Order Number Badge */}
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-mono font-black shrink-0 ${
                        isSelected
                          ? 'bg-rose-500 text-white shadow'
                          : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                      }`}>
                        {trap.orderIndex}
                      </div>

                      {/* Trap Details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1.5">
                          <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-rose-300' : 'text-gray-200 group-hover:text-white'}`}>
                            {trap.name}
                          </h4>
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-white/10 text-gray-300 shrink-0">
                            {trap.eco}
                          </span>
                        </div>

                        <p className="text-[10px] text-gray-400 truncate mt-0.5">
                          {trap.opening}
                        </p>

                        <div className="flex items-center gap-1.5 mt-1.5 text-[9px] font-mono flex-wrap">
                          <span className={`px-1.5 py-0.2 rounded-full border ${getDifficultyBadge(trap.difficulty)}`}>
                            {trap.difficulty}
                          </span>
                          <span className="text-gray-400 bg-[#100f0d] px-1.5 py-0.2 rounded border border-white/5">
                            {trap.moves.length} moves
                          </span>
                          <span className="text-gray-400 bg-[#100f0d] px-1.5 py-0.2 rounded border border-white/5">
                            {trap.winningSide === 'white' ? '⚪ 1-0' : '⚫ 0-1'}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}

                {filteredTraps.length === 0 && (
                  <div className="p-8 text-center text-gray-400">
                    <p className="text-sm font-semibold">No traps match your filter</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setSelectedDifficulty('all');
                        setSelectedTrappedSide('all');
                      }}
                      className="mt-3 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Center Column (Desktop: 5 cols): Chessboard & Board Controls ── */}
          <div className="lg:col-span-5 flex flex-col items-center gap-3">
            
            {/* Active Trap Banner Header */}
            <div className="w-full max-w-[540px] bg-[#181714]/90 border border-white/10 rounded-2xl p-3 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/40">
                      #{currentTrap.orderIndex} • {currentTrap.eco}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${getDifficultyBadge(currentTrap.difficulty)}`}>
                      {currentTrap.difficulty}
                    </span>
                  </div>
                  <h2 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight mt-1 truncate">
                    {currentTrap.name}
                  </h2>
                  <p className="text-[11px] text-gray-400 font-mono truncate">
                    {currentTrap.opening} • <span className="text-amber-300 font-bold">{currentTrap.theme}</span>
                  </p>
                </div>

                {/* Next / Prev Trap Arrows */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={handlePrevTrap}
                    disabled={currentFilteredIndex <= 0}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-30 disabled:pointer-events-none transition-all"
                    title="Previous Trap"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextTrap}
                    disabled={currentFilteredIndex >= filteredTraps.length - 1}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-30 disabled:pointer-events-none transition-all"
                    title="Next Trap"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chessboard Container */}
            <div className="w-full max-w-[540px] aspect-square rounded-2xl overflow-hidden border-2 border-[#81b64c]/30 shadow-2xl bg-[#2b2924] p-1 relative">
              <Chessboard
                position={currentFen}
                boardOrientation={orientation}
                onPieceDrop={isPracticeMode ? handlePracticePieceDrop : () => false}
                customBoardStyle={{
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
                }}
                customDarkSquareStyle={{ backgroundColor: '#779952' }}
                customLightSquareStyle={{ backgroundColor: '#edeed1' }}
                customSquareStyles={customSquareStyles}
                animationDuration={250}
                arePiecesDraggable={isPracticeMode}
              />

              {/* Practice Mode Badge Overlay */}
              {isPracticeMode && (
                <div className="absolute top-3 left-3 bg-amber-500/90 text-black font-black text-[10px] px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider animate-pulse">
                  <Flame className="w-3 h-3" />
                  <span>Practice Mode</span>
                </div>
              )}
            </div>

            {/* Practice Mode Feedback Banner */}
            {isPracticeMode && practiceFeedback && (
              <div className={`w-full max-w-[540px] p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 border ${
                practiceFeedback.type === 'success'
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                  : practiceFeedback.type === 'error'
                  ? 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                  : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
              }`}>
                {practiceFeedback.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : practiceFeedback.type === 'error' ? (
                  <XCircle className="w-4 h-4 shrink-0" />
                ) : (
                  <Sparkles className="w-4 h-4 shrink-0" />
                )}
                <span>{practiceFeedback.text}</span>
              </div>
            )}

            {/* Board Stepper Controls Bar */}
            <div className="w-full max-w-[540px] bg-[#181714]/90 border border-white/10 rounded-2xl p-2.5 shadow-lg backdrop-blur-md flex items-center justify-between gap-2 flex-wrap">
              {/* Left Controls: Flip & Practice Toggle */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setOrientation(orientation === 'white' ? 'black' : 'white')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-xs flex items-center gap-1 font-mono"
                  title="Flip Board"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline uppercase text-[10px]">{orientation}</span>
                </button>

                {!isPracticeMode ? (
                  <button
                    onClick={startPracticeMode}
                    className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center gap-1"
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Try Trap</span>
                  </button>
                ) : (
                  <button
                    onClick={exitPracticeMode}
                    className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center gap-1"
                  >
                    <span>Exit Trainer</span>
                  </button>
                )}
              </div>

              {/* Center Stepper: Prev / Play / Next */}
              {!isPracticeMode && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleFirstMove}
                    disabled={currentPly === 0}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-25 transition-all"
                    title="First Move"
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handlePrevMove}
                    disabled={currentPly === 0}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-25 transition-all"
                    title="Previous Move"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 transition-all font-bold"
                    title={isPlaying ? 'Pause Auto-play' : 'Play Trap Sequence'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleNextMove}
                    disabled={currentPly >= currentTrap.moves.length}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-25 transition-all"
                    title="Next Move"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleLastMove}
                    disabled={currentPly >= currentTrap.moves.length}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 disabled:opacity-25 transition-all"
                    title="Climax Position"
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Right Shortcuts: Jump to Blunder / Climax */}
              {!isPracticeMode && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleJumpToBlunder}
                    className="px-2 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 text-[10px] font-mono font-bold transition-all flex items-center gap-1"
                    title="Jump to Opponent's Blunder"
                  >
                    <AlertTriangle className="w-3 h-3 text-rose-400" />
                    <span className="hidden sm:inline">Blunder</span>
                  </button>

                  <button
                    onClick={handleLastMove}
                    className="px-2 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold transition-all flex items-center gap-1"
                    title="Jump to Checkmate / Punishment"
                  >
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span className="hidden sm:inline">Mate</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ── Right Column (Desktop: 3 cols): Explanations & Move Tree ───── */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            
            {/* Trap Mechanism & Tactical Breakdown */}
            <div className="bg-[#181714]/90 border border-white/10 rounded-2xl p-4 shadow-lg backdrop-blur-md flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-extrabold text-sm text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>The Trap Mechanism</span>
                </h3>
                <span className="text-[10px] font-mono text-gray-400">
                  {currentTrap.trappedSide === 'white' ? 'White Falls In' : 'Black Falls In'}
                </span>
              </div>

              {/* Blunder & Punishment Highlight Boxes */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-2.5">
                  <span className="text-[9px] font-mono uppercase text-rose-400 font-bold block">
                    ⚠️ The Blunder
                  </span>
                  <span className="font-mono text-xs font-black text-rose-200 mt-0.5 block">
                    {currentTrap.blunderMove}
                  </span>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-2.5">
                  <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold block">
                    💥 The Trap Spring
                  </span>
                  <span className="font-mono text-xs font-black text-emerald-200 mt-0.5 block">
                    {currentTrap.punishmentMove}
                  </span>
                </div>
              </div>

              {/* Explanation Text */}
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {currentTrap.description}
              </p>

              {/* Refutation & How to Avoid */}
              <div className="bg-[#11100e] border border-white/5 rounded-xl p-3">
                <span className="text-[10px] font-mono text-amber-400 font-bold flex items-center gap-1 uppercase tracking-wider mb-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>How to Avoid / Refutation</span>
                </span>
                <p className="text-[11px] text-gray-300 leading-normal">
                  {currentTrap.refutation}
                </p>
              </div>

              {/* Copy / Share Actions */}
              <div className="flex items-center gap-2 pt-1 border-t border-white/5">
                <button
                  onClick={handleCopyFen}
                  className="flex-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-[11px] font-mono transition-all flex items-center justify-center gap-1.5"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy FEN</span>
                </button>
                <button
                  onClick={handleCopyPgn}
                  className="flex-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-[11px] font-mono transition-all flex items-center justify-center gap-1.5"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy PGN</span>
                </button>
              </div>

              {copiedNotification && (
                <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-center py-1 rounded-lg text-xs font-mono animate-fade-in">
                  {copiedNotification}
                </div>
              )}
            </div>

            {/* Interactive Move Notation Sequence */}
            <div className="bg-[#181714]/90 border border-white/10 rounded-2xl p-4 shadow-lg backdrop-blur-md flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-extrabold text-sm text-white flex items-center gap-1.5">
                  <Swords className="w-4 h-4 text-emerald-400" />
                  <span>Move Sequence</span>
                </h3>
                <span className="text-[10px] font-mono text-gray-400">
                  {currentPly} / {currentTrap.moves.length} plies
                </span>
              </div>

              {/* Move list */}
              <div className="bg-[#100f0d] border border-white/5 rounded-xl p-2.5 max-h-[220px] overflow-y-auto font-mono text-xs leading-loose">
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {currentTrap.moves.map((move, idx) => {
                    const isWhiteMove = idx % 2 === 0;
                    const moveNumber = Math.floor(idx / 2) + 1;
                    const isCurrent = currentPly === idx + 1;

                    return (
                      <React.Fragment key={idx}>
                        {isWhiteMove && (
                          <span className="text-gray-500 font-bold">{moveNumber}.</span>
                        )}
                        <button
                          onClick={() => {
                            setIsPlaying(false);
                            setCurrentPly(idx + 1);
                          }}
                          className={`px-1.5 py-0.5 rounded transition-all font-bold ${
                            isCurrent
                              ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-sm font-black'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {move}
                        </button>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default TrapsExplorer;
