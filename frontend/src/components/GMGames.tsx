import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useStockfish } from '../hooks/useStockfish';
import CARLSEN_GAMES, { OPENING_CATEGORIES as CARLSEN_CATEGORIES, type GMGame } from '../data/carlsenGames';
import KASPAROV_GAMES, { KASPAROV_OPENING_CATEGORIES } from '../data/kasparovGames';
import TAL_GAMES, { TAL_OPENING_CATEGORIES } from '../data/talGames';
import KARPOV_GAMES, { KARPOV_OPENING_CATEGORIES } from '../data/karpovGames';
import CAPABLANCA_GAMES, { CAPABLANCA_OPENING_CATEGORIES } from '../data/capablancaGames';
import ANAND_GAMES, { ANAND_OPENING_CATEGORIES } from '../data/anandGames';
import FISCHER_GAMES, { FISCHER_OPENING_CATEGORIES } from '../data/fischerGames';
import ALEKHINE_GAMES, { ALEKHINE_OPENING_CATEGORIES } from '../data/alekhineGames';
import PETROSIAN_GAMES, { PETROSIAN_OPENING_CATEGORIES } from '../data/petrosianGames';
import HIKARU_GAMES, { HIKARU_OPENING_CATEGORIES } from '../data/hikaruGames';
import SINDAROV_GAMES, { SINDAROV_OPENING_CATEGORIES } from '../data/sindarovGames';

// ─── Types ────────────────────────────────────────────────────────────────────
type GMKey = 'tal' | 'kasparov' | 'karpov' | 'capablanca' | 'anand' | 'fischer' | 'alekhine' | 'petrosian' | 'carlsen' | 'hikaru' | 'sindarov';
type FilterResult = 'all' | '1-0' | '0-1' | '1/2-1/2';
type SortKey = 'year' | 'event' | 'result' | 'opponent';
type MobileTab = 'board' | 'games' | 'analysis';
type ClassificationStage = 'opening' | 'pawnStructure' | 'middlegameTheme' | 'tacticalMotif' | 'endgame' | 'difficulty';

function getGMLastName(name: string): string {
  const parts = name.split(' ');
  return parts[parts.length - 1];
}

const STAGE_LABELS: { key: ClassificationStage; label: string; icon: string; num: number }[] = [
  { key: 'opening', label: 'Opening', icon: '♟️', num: 1 },
  { key: 'pawnStructure', label: 'Pawn Structure', icon: '🧱', num: 2 },
  { key: 'middlegameTheme', label: 'Middlegame Theme', icon: '⚔️', num: 3 },
  { key: 'tacticalMotif', label: 'Tactical Motif', icon: '⚡', num: 4 },
  { key: 'endgame', label: 'Endgame', icon: '🏁', num: 5 },
  { key: 'difficulty', label: 'Difficulty', icon: '⭐', num: 6 },
];

interface GMGamesProps {
  initialGM?: GMKey;
  onAnalyzePosition?: (fen: string) => void;
  onBackToGame?: () => void;
}

const GM_INFO = {
  tal: {
    name: 'Mikhail Tal',
    title: '8th World Champion (1960–1961)',
    peakElo: 2710,
    badge: '🪄 "The Magician from Riga" — Unmatched Sacrificial Genius',
    avatar: '🪄',
    games: TAL_GAMES,
    categories: TAL_OPENING_CATEGORIES,
  },
  kasparov: {
    name: 'Garry Kasparov',
    title: '13th World Champion (1985–2000)',
    peakElo: 2851,
    badge: '🔥 World No. 1 for 20 Consecutive Years',
    avatar: '🔥',
    games: KASPAROV_GAMES,
    categories: KASPAROV_OPENING_CATEGORIES,
  },
  karpov: {
    name: 'Anatoly Karpov',
    title: '12th World Champion (1975–1985)',
    peakElo: 2780,
    badge: '🛡️ "The Python" — Prophylactic & Positional Squeeze',
    avatar: '🛡️',
    games: KARPOV_GAMES,
    categories: KARPOV_OPENING_CATEGORIES,
  },
  capablanca: {
    name: 'José Raúl Capablanca',
    title: '3rd World Champion (1921–1927)',
    peakElo: 2725,
    badge: '💎 "The Chess Machine" — Flawless Positional & Endgame Mastery',
    avatar: '💎',
    games: CAPABLANCA_GAMES,
    categories: CAPABLANCA_OPENING_CATEGORIES,
  },
  anand: {
    name: 'Viswanathan Anand',
    title: '15th World Champion (2007–2013)',
    peakElo: 2817,
    badge: '⚡ "The Lightning Kid" — Rapid Calculation & Dynamic Mastery',
    avatar: '⚡',
    games: ANAND_GAMES,
    categories: ANAND_OPENING_CATEGORIES,
  },
  fischer: {
    name: 'Bobby Fischer',
    title: '11th World Champion (1972–1975)',
    peakElo: 2785,
    badge: '🦅 "The Maverick Genius" — Absolute Precision & Mating Attacks',
    avatar: '🦅',
    games: FISCHER_GAMES,
    categories: FISCHER_OPENING_CATEGORIES,
  },
  alekhine: {
    name: 'Alexander Alekhine',
    title: '4th World Champion (1927–1935, 1937–1946)',
    peakElo: 2720,
    badge: '⚔️ "The Attacking Genius" — Combinative Fire & Complex Calculation',
    avatar: '⚔️',
    games: ALEKHINE_GAMES,
    categories: ALEKHINE_OPENING_CATEGORIES,
  },
  petrosian: {
    name: 'Tigran Petrosian',
    title: '9th World Champion (1963–1969)',
    peakElo: 2645,
    badge: '🧱 "Iron Tigran" — Prophylactic Wall & Exchange Sacrifice Specialist',
    avatar: '🧱',
    games: PETROSIAN_GAMES,
    categories: PETROSIAN_OPENING_CATEGORIES,
  },
  carlsen: {
    name: 'Magnus Carlsen',
    title: '16th World Champion (2013–2023)',
    peakElo: 2882,
    badge: '👑 Peak Rating 2882 (All-Time Record)',
    avatar: '👑',
    games: CARLSEN_GAMES,
    categories: CARLSEN_CATEGORIES,
  },
  hikaru: {
    name: 'Hikaru Nakamura',
    title: '5-Time US Champion & World Fischer Random Champion',
    peakElo: 2816,
    badge: '⚡ "The Speed Demon" — Unrivaled Calculation, Speed & Dynamic Fighting Spirit',
    avatar: '⚡',
    games: HIKARU_GAMES,
    categories: HIKARU_OPENING_CATEGORIES,
  },
  sindarov: {
    name: 'Javokhir Sindarov',
    title: 'Grandmaster & Olympiad Gold Medalist (2022)',
    peakElo: 2715,
    badge: '🇺🇿 "The Uzbek Prodigy" — Fearless Calculation, Sharp Attacks & Olympiad Hero',
    avatar: '🇺🇿',
    games: SINDAROV_GAMES,
    categories: SINDAROV_OPENING_CATEGORIES,
  },
};

// ─── PGN parser → SAN move array ──────────────────────────────────────────────
function parsePgnMoves(pgn: string): string[] {
  return pgn
    .replace(/0-0-0/g, 'O-O-O')
    .replace(/0-0/g, 'O-O')
    .replace(/\{[^}]*\}/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/\$\d+/g, '')
    .replace(/\d+\.\.\./g, '')
    .replace(/\d+\./g, '')
    .replace(/1-0|0-1|1\/2-1\/2|\*/g, '')
    .split(/\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 0 && !/^\d/.test(s));
}

function resultBg(r: string) {
  if (r === '1-0') return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
  if (r === '0-1') return 'bg-red-500/10 border-red-500/30 text-red-300';
  return 'bg-amber-500/10 border-amber-500/30 text-amber-300';
}

// ─── Game Card ────────────────────────────────────────────────────────────────
function GameCard({
  game, isSelected, gmName, onClick,
}: {
  game: GMGame; isSelected: boolean; gmName: string; onClick: () => void;
}) {
  const isGMWhite = game.white.includes(getGMLastName(gmName)) || game.white.includes(gmName.split(' ')[0]);
  const opponent = isGMWhite ? game.black : game.white;
  const gmColor = isGMWhite ? 'White' : 'Black';
  const gmWon = (game.result === '1-0' && isGMWhite) || (game.result === '0-1' && !isGMWhite);

  const diffBadgeColor =
    game.difficulty === 'Grandmaster' ? 'bg-purple-500/15 border-purple-500/30 text-purple-300' :
    game.difficulty === 'Master' ? 'bg-amber-500/15 border-amber-500/30 text-amber-300' :
    'bg-blue-500/15 border-blue-500/30 text-blue-300';

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-150 group ${
        isSelected
          ? 'bg-[#1e2a18] border-[#81b64c]/70 shadow-[0_0_12px_rgba(129,182,76,0.15)]'
          : 'bg-[#1a1917] border-[#2e2c28] hover:bg-[#1e1c18] hover:border-[#3a3731]'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.2 rounded border font-mono ${resultBg(game.result)}`}>
              {game.result}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-semibold ${
                gmWon ? 'text-emerald-400' : game.result === '1/2-1/2' ? 'text-amber-400' : 'text-red-400'
              }`}
            >
              {gmWon ? '✓ Win' : game.result === '1/2-1/2' ? '½ Draw' : '✗ Loss'}
            </span>
            <span className="text-[9px] sm:text-[10px] text-gray-500 font-mono">({gmColor})</span>
            {game.difficulty && (
              <span className={`text-[8px] sm:text-[9px] font-black px-1.5 py-0.2 rounded border font-mono ${diffBadgeColor}`}>
                {game.difficulty === 'Grandmaster' ? '🔥 GM' : game.difficulty === 'Master' ? '🥇 M' : '⚡ Adv'}
              </span>
            )}
          </div>
          <p className="text-xs font-bold text-white mt-1 truncate">vs {opponent}</p>
          <p className="text-[10px] text-gray-500 truncate">{game.event}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-[11px] sm:text-xs font-black font-mono text-gray-300">{game.year}</div>
          <div className="text-[9px] font-mono text-gray-500">{game.eco}</div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-1 mt-1 flex-wrap">
        <span className="text-[9px] sm:text-[10px] font-mono bg-[#262421] border border-[#363431] px-1.5 py-0.2 rounded text-gray-400 truncate max-w-[160px] sm:max-w-[200px]">
          ♟️ {game.opening}
        </span>
        <span className="text-[8px] sm:text-[9px] font-semibold text-[#81b64c] bg-[#81b64c]/10 px-1.5 py-0.2 rounded shrink-0">
          🧱 {game.pawnStructure ? game.pawnStructure.split(' ')[0] : game.openingCategory.split(' ')[0]}
        </span>
      </div>
    </button>
  );
}

// ─── Move List ────────────────────────────────────────────────────────────────
function MoveList({
  moves, currentIdx, onSelectIdx,
}: {
  moves: string[]; currentIdx: number; onSelectIdx: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current.querySelector(`[data-idx="${currentIdx}"]`) as HTMLElement;
    if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [currentIdx]);

  const pairs: [string, string?][] = [];
  for (let i = 0; i < moves.length; i += 2) pairs.push([moves[i], moves[i + 1]]);

  return (
    <div ref={ref} className="h-full overflow-y-auto pr-0.5 space-y-0.5 text-xs">
      {pairs.length === 0 ? (
        <p className="text-gray-600 italic text-center py-6 text-xs">No moves</p>
      ) : (
        pairs.map(([w, b], idx) => (
          <div key={idx} className="grid grid-cols-[20px_1fr_1fr] gap-0.5 items-center">
            <span className="text-gray-700 font-mono text-right pr-1 text-[10px]">{idx + 1}.</span>
            <button
              data-idx={idx * 2}
              onClick={() => onSelectIdx(idx * 2)}
              className={`px-1.5 py-0.5 rounded text-left font-mono font-semibold truncate transition text-xs ${
                currentIdx === idx * 2
                  ? 'bg-[#81b64c]/20 text-[#81b64c] border border-[#81b64c]/30'
                  : currentIdx > idx * 2
                  ? 'text-gray-300 hover:bg-[#2d2b27]'
                  : 'text-gray-500 hover:bg-[#2d2b27] hover:text-white'
              }`}
            >
              {w}
            </button>
            {b !== undefined && (
              <button
                data-idx={idx * 2 + 1}
                onClick={() => onSelectIdx(idx * 2 + 1)}
                className={`px-1.5 py-0.5 rounded text-left font-mono font-semibold truncate transition text-xs ${
                  currentIdx === idx * 2 + 1
                    ? 'bg-[#81b64c]/20 text-[#81b64c] border border-[#81b64c]/30'
                    : currentIdx > idx * 2 + 1
                    ? 'text-gray-300 hover:bg-[#2d2b27]'
                    : 'text-gray-500 hover:bg-[#2d2b27] hover:text-white'
                }`}
              >
                {b}
              </button>
            )}
          </div>
        ))
      )}
    </div>
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
      <div className="w-3.5 sm:w-4 flex-1 rounded-md sm:rounded-lg overflow-hidden border border-[#3a3731] relative bg-[#1a1917]">
        <div className="w-full bg-[#272320] transition-all duration-700" style={{ height: `${100 - pct}%` }} />
        <div className="w-full bg-[#f0ebe5] transition-all duration-700" style={{ height: `${pct}%` }} />
        <div className="absolute inset-x-0 top-1/2 h-px bg-[#5a5550] opacity-40" />
      </div>
      <div className="mt-1 text-[8px] sm:text-[9px] font-black font-mono text-gray-500">{label}</div>
    </div>
  );
}

// ─── SVG Arrow ────────────────────────────────────────────────────────────────
function BestMoveArrow({
  bestMove, boardSize, orientation,
}: {
  bestMove: string | null; boardSize: number; orientation: 'white' | 'black';
}) {
  if (!bestMove || bestMove.length < 4) return null;
  const from = bestMove.slice(0, 2);
  const to = bestMove.slice(2, 4);
  const sq = boardSize / 8;
  const col = (s: string) => {
    const c = s.charCodeAt(0) - 97;
    return orientation === 'white' ? c : 7 - c;
  };
  const row = (s: string) => {
    const r = parseInt(s[1]) - 1;
    return orientation === 'white' ? 7 - r : r;
  };
  const x1 = col(from) * sq + sq / 2, y1 = row(from) * sq + sq / 2;
  const x2 = col(to) * sq + sq / 2,   y2 = row(to) * sq + sq / 2;
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return null;
  const ux = dx / len, uy = dy / len;
  const ex = x2 - ux * sq * 0.38, ey = y2 - uy * sq * 0.38;

  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: boardSize, height: boardSize, pointerEvents: 'none', zIndex: 10 }}
      viewBox={`0 0 ${boardSize} ${boardSize}`}
    >
      <defs>
        <marker id="gm-arrow" markerWidth="4" markerHeight="4" refX="2.5" refY="2" orient="auto">
          <polygon points="0 0, 4 2, 0 4" fill="#81b64c" opacity="0.9" />
        </marker>
      </defs>
      <line
        x1={x1} y1={y1} x2={ex} y2={ey}
        stroke="#81b64c" strokeWidth={sq * 0.22} strokeLinecap="round" opacity="0.85"
        markerEnd="url(#gm-arrow)"
      />
    </svg>
  );
}

// ─── Main GMGames Component ───────────────────────────────────────────────────
export const GMGames: React.FC<GMGamesProps> = ({ initialGM = 'tal', onAnalyzePosition, onBackToGame }) => {
  const [selectedGM, setSelectedGM] = useState<GMKey>(initialGM);
  const currentGMData = GM_INFO[selectedGM];

  // Mobile active tab for < 1280px
  const [mobileTab, setMobileTab] = useState<MobileTab>('board');

  const [activeStage, setActiveStage] = useState<ClassificationStage>('opening');
  // Bug fix: initialise to 'All Openings' to match default activeStage of 'opening'
  const [selectedStageValue, setSelectedStageValue] = useState<string>('All Openings');
  const [search, setSearch] = useState('');
  const [filterResult, setFilterResult] = useState<FilterResult>('all');
  const [sortKey, setSortKey] = useState<SortKey>('year');
  const [sortDesc, setSortDesc] = useState(true);

  const [selectedGame, setSelectedGame] = useState<GMGame>(() => currentGMData.games[0]);
  const [parsedMoves, setParsedMoves] = useState<string[]>(() => parsePgnMoves(currentGMData.games[0].moves));
  const [currentMoveIdx, setCurrentMoveIdx] = useState(-1);
  const [boardFen, setBoardFen] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const [orientation, setOrientation] = useState<'white' | 'black'>('white');
  const [autoPlay, setAutoPlay] = useState(false);
  const [autoSpeed, setAutoSpeed] = useState(1400);
  const [showAnalysis, setShowAnalysis] = useState(true);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(null);

  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [boardSize, setBoardSize] = useState(460);
  const boardRef = useRef<HTMLDivElement>(null);
  // Filter drawer — collapsed by default so header stays compact
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const obs = new ResizeObserver((e) => {
      const w = e[0]?.contentRect.width;
      if (w) setBoardSize(w);
    });
    if (boardRef.current) obs.observe(boardRef.current);
    return () => obs.disconnect();
  }, []);

  const { evaluation, isEngineReady } = useStockfish(boardFen, 16);

  // Bug fix: old handleSwitchGM called loadGame() which used stale currentGMData.name
  // for orientation. Now we inline the load using GM_INFO[gm] directly.
  const handleSwitchGM = (gm: GMKey) => {
    setSelectedGM(gm);
    // Reset filter to correct default value for the current active stage
    setSelectedStageValue(activeStage === 'opening' ? 'All Openings' : 'All');
    setSearch('');
    setFilterResult('all');
    const gmData = GM_INFO[gm];
    const firstGame = gmData.games[0];
    const moves = parsePgnMoves(firstGame.moves);
    setSelectedGame(firstGame);
    setParsedMoves(moves);
    setCurrentMoveIdx(-1);
    setBoardFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    setLastMove(null);
    setAutoPlay(false);
    // Use fresh gmData to determine orientation — fixes the stale-closure bug
    const gmPart = getGMLastName(gmData.name);
    setOrientation(firstGame.white.includes(gmPart) ? 'white' : 'black');
    if (autoRef.current) clearTimeout(autoRef.current);
    setMobileTab('board');
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Openings': currentGMData.games.length };
    currentGMData.games.forEach((g) => {
      counts[g.openingCategory] = (counts[g.openingCategory] || 0) + 1;
    });
    return counts;
  }, [currentGMData]);

  const stageValues = useMemo(() => {
    if (activeStage === 'opening') return currentGMData.categories as readonly string[];
    const set = new Set<string>();
    currentGMData.games.forEach((g) => {
      const val = g[activeStage];
      if (val) set.add(val);
    });
    return ['All', ...Array.from(set)];
  }, [currentGMData, activeStage]);

  const stageCounts = useMemo(() => {
    if (activeStage === 'opening') return categoryCounts;
    const counts: Record<string, number> = { All: currentGMData.games.length };
    currentGMData.games.forEach((g) => {
      const val = g[activeStage];
      if (val) counts[val] = (counts[val] || 0) + 1;
    });
    return counts;
  }, [currentGMData, activeStage, categoryCounts]);

  const filteredGames = useMemo(() => {
    let games = currentGMData.games.filter((g) => {
      if (activeStage === 'opening') {
        if (selectedStageValue !== 'All Openings' && selectedStageValue !== 'All' && g.openingCategory !== selectedStageValue) return false;
      } else {
        if (selectedStageValue !== 'All' && g[activeStage] !== selectedStageValue) return false;
      }
      const q = search.toLowerCase();
      if (
        q &&
        !g.white.toLowerCase().includes(q) &&
        !g.black.toLowerCase().includes(q) &&
        !g.event.toLowerCase().includes(q) &&
        !g.opening.toLowerCase().includes(q) &&
        !g.openingCategory.toLowerCase().includes(q) &&
        !(g.pawnStructure || '').toLowerCase().includes(q) &&
        !(g.middlegameTheme || '').toLowerCase().includes(q) &&
        !(g.tacticalMotif || '').toLowerCase().includes(q) &&
        !(g.endgame || '').toLowerCase().includes(q) &&
        !(g.difficulty || '').toLowerCase().includes(q) &&
        !g.description.toLowerCase().includes(q) &&
        !g.eco?.toLowerCase().includes(q)
      ) {
        return false;
      }
      if (filterResult !== 'all' && g.result !== filterResult) return false;
      return true;
    });

    games.sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'year') cmp = a.year - b.year;
      else if (sortKey === 'event') cmp = a.event.localeCompare(b.event);
      else if (sortKey === 'result') cmp = a.result.localeCompare(b.result);
      else if (sortKey === 'opponent') {
        const gmPart = getGMLastName(currentGMData.name);
        const ao = a.white.includes(gmPart) ? a.black : a.white;
        const bo = b.white.includes(gmPart) ? b.black : b.white;
        cmp = ao.localeCompare(bo);
      }
      return sortDesc ? -cmp : cmp;
    });
    return games;
  }, [currentGMData, activeStage, selectedStageValue, search, filterResult, sortKey, sortDesc]);

  const categoryStats = useMemo(() => {
    const gmPart = getGMLastName(currentGMData.name);
    const pool =
      selectedStageValue === 'All' || selectedStageValue === 'All Openings'
        ? currentGMData.games
        : currentGMData.games.filter((g) => {
            if (activeStage === 'opening') return g.openingCategory === selectedStageValue;
            return g[activeStage] === selectedStageValue;
          });
    const wins = pool.filter(
      (g) =>
        (g.result === '1-0' && g.white.includes(gmPart)) ||
        (g.result === '0-1' && g.black.includes(gmPart))
    ).length;
    const draws = pool.filter((g) => g.result === '1/2-1/2').length;
    const total = pool.length;
    const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;
    const scoreRate = total > 0 ? Math.round(((wins + draws * 0.5) / total) * 100) : 0;
    return { total, wins, draws, losses: total - wins - draws, winRate, scoreRate };
  }, [currentGMData, activeStage, selectedStageValue]);

  const buildFenAt = useCallback((moves: string[], idx: number) => {
    const g = new Chess();
    for (let i = 0; i <= idx && i < moves.length; i++) {
      try {
        g.move(moves[i]);
      } catch {
        break;
      }
    }
    return g.fen();
  }, []);

  const getLastMoveAt = useCallback((moves: string[], idx: number) => {
    if (idx < 0) return null;
    const g = new Chess();
    let lastMoveObj: { from: string; to: string } | null = null;
    for (let i = 0; i <= idx && i < moves.length; i++) {
      try {
        const mv = g.move(moves[i]);
        if (mv && i === idx) lastMoveObj = { from: mv.from, to: mv.to };
      } catch {
        break;
      }
    }
    return lastMoveObj;
  }, []);

  const loadGame = (game: GMGame) => {
    const moves = parsePgnMoves(game.moves);
    setSelectedGame(game);
    setParsedMoves(moves);
    setCurrentMoveIdx(-1);
    setBoardFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    setLastMove(null);
    setAutoPlay(false);
    const gmPart = getGMLastName(currentGMData.name);
    setOrientation(game.white.includes(gmPart) ? 'white' : 'black');
    if (autoRef.current) clearTimeout(autoRef.current);
    // On mobile, auto-switch to board tab
    setMobileTab('board');
  };

  const goTo = useCallback(
    (idx: number) => {
      if (!parsedMoves.length) return;
      const clamped = Math.max(-1, Math.min(parsedMoves.length - 1, idx));
      setCurrentMoveIdx(clamped);
      if (clamped < 0) {
        setBoardFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
        setLastMove(null);
      } else {
        setBoardFen(buildFenAt(parsedMoves, clamped));
        setLastMove(getLastMoveAt(parsedMoves, clamped));
      }
    },
    [parsedMoves, buildFenAt, getLastMoveAt]
  );

  const goFirst = () => goTo(-1);
  const goPrev = () => goTo(currentMoveIdx - 1);
  const goNext = () => goTo(currentMoveIdx + 1);
  const goLast = () => goTo(parsedMoves.length - 1);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goFirst();
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goLast();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [currentMoveIdx, parsedMoves]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || !parsedMoves.length) return;
    if (currentMoveIdx >= parsedMoves.length - 1) {
      setAutoPlay(false);
      return;
    }
    autoRef.current = setTimeout(() => goTo(currentMoveIdx + 1), autoSpeed);
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [autoPlay, currentMoveIdx, parsedMoves, autoSpeed, goTo]);

  const squareStyles = useMemo(() => {
    const s: Record<string, React.CSSProperties> = {};
    if (lastMove) {
      s[lastMove.from] = { backgroundColor: 'rgba(155,199,0,0.3)' };
      s[lastMove.to] = { backgroundColor: 'rgba(155,199,0,0.48)' };
    }
    return s;
  }, [lastMove]);

  // derive accent gradient class for the active GM (used by filter pills)
  const accentCls = (
    selectedGM === 'tal'        ? 'from-purple-500 to-indigo-600' :
    selectedGM === 'kasparov'   ? 'from-red-500 to-amber-600' :
    selectedGM === 'karpov'     ? 'from-blue-500 to-cyan-600' :
    selectedGM === 'capablanca' ? 'from-teal-500 to-emerald-600' :
    selectedGM === 'anand'      ? 'from-orange-500 to-amber-600' :
    selectedGM === 'fischer'    ? 'from-sky-500 to-indigo-600' :
    selectedGM === 'alekhine'   ? 'from-rose-500 to-red-600' :
    selectedGM === 'petrosian'  ? 'from-slate-500 to-zinc-600' :
    selectedGM === 'carlsen'    ? 'from-emerald-500 to-green-600' :
    selectedGM === 'hikaru'     ? 'from-amber-500 to-yellow-500' :
    /* sindarov */                'from-cyan-500 to-blue-600'
  );

  const progress = parsedMoves.length ? Math.round(((currentMoveIdx + 1) / parsedMoves.length) * 100) : 0;
  const gmPart = getGMLastName(currentGMData.name);
  const gmWon =
    (selectedGame.result === '1-0' && selectedGame.white.includes(gmPart)) ||
    (selectedGame.result === '0-1' && selectedGame.black.includes(gmPart));

  return (
    <div className="min-h-screen bg-[#12110e] text-gray-100 flex flex-col font-sans">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header className="bg-[#181613]/90 border-b border-white/[0.06] sticky top-0 z-30 backdrop-blur-xl shadow-lg shadow-black/25">

        {/* Row 1 — always visible, compact */}
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 py-2 flex items-center justify-between gap-2">

          {/* Left: scrollable GM pill row */}
          <div className="flex items-center gap-2 min-w-0 overflow-x-auto scrollbar-none">
            <div className="flex items-center bg-[#100f0d] p-1 rounded-2xl border border-white/[0.08] flex-nowrap shadow-inner">
              {([
                { key: 'tal',        emoji: '🪄', label: 'Tal',      from: 'from-purple-600', to: 'to-indigo-600',  glow: 'shadow-purple-600/30' },
                { key: 'kasparov',   emoji: '🔥', label: 'Kasparov', from: 'from-red-600',    to: 'to-amber-600',   glow: 'shadow-red-600/30' },
                { key: 'karpov',     emoji: '🛡️', label: 'Karpov',   from: 'from-blue-600',   to: 'to-cyan-600',    glow: 'shadow-blue-600/30' },
                { key: 'capablanca', emoji: '💎', label: 'Capa',     from: 'from-teal-600',   to: 'to-emerald-500', glow: 'shadow-teal-600/30' },
                { key: 'anand',      emoji: '⚡', label: 'Anand',    from: 'from-orange-600', to: 'to-amber-500',   glow: 'shadow-orange-600/30' },
                { key: 'fischer',    emoji: '🦅', label: 'Fischer',  from: 'from-sky-600',    to: 'to-indigo-600',  glow: 'shadow-sky-600/30' },
                { key: 'alekhine',   emoji: '⚔️', label: 'Alekhine', from: 'from-rose-600',   to: 'to-red-700',     glow: 'shadow-rose-600/30' },
                { key: 'petrosian',  emoji: '🧱', label: 'Iron',     from: 'from-slate-600',  to: 'to-zinc-700',    glow: 'shadow-slate-600/30' },
                { key: 'carlsen',    emoji: '👑', label: 'Carlsen',  from: 'from-emerald-600',to: 'to-green-700',   glow: 'shadow-emerald-600/30' },
                { key: 'hikaru',     emoji: '⚡', label: 'Hikaru',   from: 'from-amber-500',  to: 'to-yellow-500',  glow: 'shadow-amber-500/30' },
                { key: 'sindarov',   emoji: '🇺🇿', label: 'Sindarov', from: 'from-cyan-600',   to: 'to-blue-600',    glow: 'shadow-cyan-600/30' },
              ] as const).map(({ key, emoji, label, from, to, glow }) => (
                <button
                  key={key}
                  onClick={() => handleSwitchGM(key as GMKey)}
                  title={GM_INFO[key as GMKey].name}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition-all flex items-center gap-1 shrink-0 whitespace-nowrap btn-press ${
                    selectedGM === key
                      ? `bg-gradient-to-r ${from} ${to} text-white shadow-md ${glow}`
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm leading-none">{emoji}</span>
                  <span className="hidden sm:inline font-heading">{label}</span>
                </button>
              ))}
            </div>

            {/* ⚙ Filter toggle button */}
            <button
              onClick={() => setShowFilters(v => !v)}
              className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold transition-all shrink-0 flex items-center gap-1 btn-press ${
                showFilters
                  ? 'bg-[#81b64c]/20 border-[#81b64c]/50 text-[#81b64c] font-black'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              ⚙ <span className="hidden xs:inline">Filters</span>
            </button>
          </div>

          {/* Right: stats + action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Compact win/draw/loss inline */}
            <div className="hidden md:flex items-center gap-2 border-r border-white/10 pr-3 mr-1">
              <span className="text-[10px] font-mono">
                <span className="text-emerald-400 font-bold">{categoryStats.wins}W</span>
                <span className="text-gray-600"> · </span>
                <span className="text-amber-400 font-bold">{categoryStats.draws}D</span>
                <span className="text-gray-600"> · </span>
                <span className="text-red-400 font-bold">{categoryStats.losses}L</span>
              </span>
              <span className="text-xs font-black text-[#81b64c] font-mono bg-[#81b64c]/10 px-1.5 py-0.5 rounded border border-[#81b64c]/20">{categoryStats.scoreRate}%</span>
            </div>

            {onBackToGame && (
              <button
                onClick={onBackToGame}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 transition-all btn-press"
              >
                ← Engine
              </button>
            )}
            {onAnalyzePosition && (
              <button
                onClick={() => onAnalyzePosition(boardFen)}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] hover:from-[#9fd168] hover:to-[#81b64c] text-black font-black text-xs transition-all shadow-md shadow-[#81b64c]/20 btn-press"
              >
                🔬 Analyze
              </button>
            )}
          </div>
        </div>

        {/* Row 2 — collapsible filter drawer */}
        {showFilters && (
          <div className="border-t border-white/[0.06] bg-[#141310] px-3 sm:px-4 py-2.5 space-y-2 overflow-x-auto scrollbar-none animate-fade-in">
            {/* Stage selector */}
            <div className="flex items-center gap-1.5 min-w-max">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0 mr-1">Stage:</span>
              {STAGE_LABELS.map((stg) => {
                const isActive = activeStage === stg.key;
                return (
                  <button
                    key={stg.key}
                    onClick={() => {
                      setActiveStage(stg.key);
                      setSelectedStageValue(stg.key === 'opening' ? 'All Openings' : 'All');
                    }}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all flex items-center gap-1.5 border btn-press ${
                      isActive
                        ? 'bg-[#81b64c] text-black border-[#81b64c] font-black shadow-sm'
                        : 'bg-white/5 text-gray-400 hover:text-white border-white/5 hover:bg-white/10'
                    }`}
                  >
                    <span>{stg.icon}</span>
                    <span>{stg.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Value pills */}
            <div className="flex items-center gap-1.5 min-w-max border-t border-white/[0.04] pt-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider shrink-0 mr-1">
                {STAGE_LABELS.find((s) => s.key === activeStage)?.label}:
              </span>
              {stageValues.map((val) => {
                const count = stageCounts[val] || 0;
                const isSelected = selectedStageValue === val;
                return (
                  <button
                    key={val}
                    onClick={() => setSelectedStageValue(val)}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all flex items-center gap-1.5 btn-press ${
                      isSelected
                        ? `bg-gradient-to-r ${accentCls} text-white shadow-md font-black`
                        : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="truncate max-w-[130px]">{val}</span>
                    <span className={`text-[8px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-black/30 text-white' : 'bg-black/40 text-gray-500'
                    }`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* ── Main Layout ─────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-2.5 sm:px-4 py-3 sm:py-4">

        {/* Slim context/stats bar */}
        <div className="bg-[#181714]/90 border border-white/10 rounded-2xl px-4 py-2.5 mb-3 flex items-center justify-between gap-3 flex-wrap backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-2xl shrink-0 drop-shadow">{currentGMData.avatar}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-sm font-heading font-extrabold text-white">
                  {selectedStageValue === 'All Openings' || selectedStageValue === 'All'
                    ? currentGMData.name
                    : `${currentGMData.name} · ${selectedStageValue}`}
                </h2>
                <span className="text-[9px] bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono font-bold shrink-0">
                  Peak Elo {currentGMData.peakElo}
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono">{currentGMData.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            {/* Mobile stats (shown on mobile, hidden on md+ where header has them) */}
            <div className="text-[10px] font-mono md:hidden">
              <span className="text-emerald-400 font-bold">{categoryStats.wins}W</span>
              <span className="text-gray-600"> · </span>
              <span className="text-amber-400 font-bold">{categoryStats.draws}D</span>
              <span className="text-gray-600"> · </span>
              <span className="text-red-400 font-bold">{categoryStats.losses}L</span>
            </div>
            <div className="text-right">
              <div className="text-base font-black text-[#81b64c] font-mono leading-none">{categoryStats.scoreRate}%</div>
              <div className="text-[8px] uppercase tracking-wider text-gray-500">Score</div>
            </div>
            <div className="text-right">
              <div className="text-base font-black text-white font-mono leading-none">{filteredGames.length}</div>
              <div className="text-[8px] uppercase tracking-wider text-gray-500">
                {filteredGames.length === currentGMData.games.length ? 'Games' : 'Shown'}
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile 3-Way Tab Switcher (< 1280px) ─────────────────────────── */}
        <div className="xl:hidden flex gap-1 bg-[#151411] p-1 rounded-2xl border border-white/10 mb-3 shadow-inner">
          <button
            onClick={() => setMobileTab('board')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all btn-press ${
              mobileTab === 'board' ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            ♟️ Board & Moves
          </button>
          <button
            onClick={() => setMobileTab('games')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all btn-press ${
              mobileTab === 'games' ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            📋 Games ({filteredGames.length})
          </button>
          <button
            onClick={() => setMobileTab('analysis')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all btn-press ${
              mobileTab === 'analysis' ? 'bg-[#81b64c] text-black shadow-md shadow-[#81b64c]/25 font-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            🔬 Analysis
          </button>
        </div>

        {/* ── Content Grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[340px_1fr_320px] gap-4 items-start">

          {/* ── Left Column: Game Library Sidebar ── */}
          <div className={`${mobileTab === 'games' ? 'flex' : 'hidden'} xl:flex flex-col gap-2.5 bg-[#181714]/90 border border-white/10 rounded-3xl p-3.5 shadow-2xl backdrop-blur-md`} style={{ height: 'calc(100vh - 210px)', minHeight: 420 }}>
            {/* Search */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">🔍</span>
              <input
                type="text"
                placeholder={`Search opponent, ECO, year…`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-[#22201b] border border-white/10 rounded-xl text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#81b64c]/50 transition-colors"
              />
            </div>

            {/* Result filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {(['all', '1-0', '0-1', '1/2-1/2'] as FilterResult[]).map((r) => (
                <button
                  key={r}
                  onClick={() => setFilterResult(r)}
                  className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-all btn-press ${
                    filterResult === r
                      ? 'bg-[#81b64c]/20 border-[#81b64c]/60 text-[#81b64c] font-black'
                      : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  {r === 'all' ? 'All Results' : r === '1-0' ? '1-0 White' : r === '0-1' ? '0-1 Black' : '½-½ Draw'}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono px-1">
              <span>{filteredGames.length} games</span>
              <div className="flex items-center gap-1.5">
                <span>Sort:</span>
                <select
                  value={sortKey}
                  onChange={(e) => setSortKey(e.target.value as SortKey)}
                  className="bg-[#22201b] border border-white/10 rounded-lg px-2 py-0.5 text-gray-300 text-[10px] focus:outline-none"
                >
                  <option value="year">Year</option>
                  <option value="event">Event</option>
                  <option value="result">Result</option>
                  <option value="opponent">Opponent</option>
                </select>
                <button
                  onClick={() => setSortDesc((d) => !d)}
                  className="px-2 py-0.5 bg-[#22201b] border border-white/10 rounded-lg text-gray-300 text-[10px] btn-press"
                >
                  {sortDesc ? '↓ Desc' : '↑ Asc'}
                </button>
              </div>
            </div>

            {/* Game Card list */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {filteredGames.length === 0 ? (
                <div className="text-center text-gray-500 text-xs italic py-16">No games found</div>
              ) : (
                filteredGames.map((g) => (
                  <GameCard
                    key={g.id}
                    game={g}
                    gmName={currentGMData.name}
                    isSelected={selectedGame?.id === g.id}
                    onClick={() => loadGame(g)}
                  />
                ))
              )}
            </div>
          </div>

          {/* ── Center Column: Board & Playback (Desktop xl: or mobileTab === 'board') ── */}
          <div className={`${mobileTab === 'board' ? 'block' : 'hidden'} xl:block space-y-3 max-w-[560px] mx-auto w-full`}>
            {/* Game header bar */}
            <div className="bg-[#181714]/90 border border-white/10 rounded-3xl p-3.5 sm:p-4 shadow-xl backdrop-blur-md">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border ${resultBg(selectedGame.result)}`}>
                      {selectedGame.result}
                    </span>
                    <span className="text-[10px] font-mono bg-[#81b64c]/15 text-[#81b64c] border border-[#81b64c]/35 px-2 py-0.5 rounded-lg font-bold">
                      {selectedGame.eco} · {selectedGame.opening}
                    </span>
                    <span className="text-[11px] text-gray-400">{selectedGame.event}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-heading font-extrabold text-white">
                    {selectedGame.white}
                    <span className="text-gray-500 font-normal text-xs mx-2">vs</span>
                    {selectedGame.black}
                  </h3>
                </div>

                <div className="text-right">
                  <div className={`text-xs sm:text-sm font-black ${gmWon ? 'text-emerald-400' : selectedGame.result === '1/2-1/2' ? 'text-amber-400' : 'text-red-400'}`}>
                    {gmWon ? `✓ ${getGMLastName(currentGMData.name)} Won` : selectedGame.result === '1/2-1/2' ? '½ Drawn' : `✗ ${getGMLastName(currentGMData.name)} Lost`}
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">{selectedGame.year} • Round {selectedGame.round || '-'}</div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">{selectedGame.description}</p>
            </div>

            {/* Board area with Eval bar & SVG Arrows */}
            <div className="flex gap-2 sm:gap-3 items-stretch justify-center">
              <div className="py-0.5 self-stretch flex">
                <EvalBar cp={evaluation.cp} mate={evaluation.mate} />
              </div>

              <div className="flex-1 relative max-w-[500px]" ref={boardRef}>
                <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-2 border-white/10 bg-[#161512]">
                  <Chessboard
                    position={boardFen}
                    boardOrientation={orientation}
                    arePiecesDraggable={false}
                    customSquareStyles={squareStyles}
                    customBoardStyle={{ borderRadius: '12px' }}
                    customDarkSquareStyle={{ backgroundColor: '#739552' }}
                    customLightSquareStyle={{ backgroundColor: '#ebedd0' }}
                    animationDuration={160}
                  />
                </div>
                {showAnalysis && (
                  <BestMoveArrow
                    bestMove={evaluation.bestMove}
                    boardSize={boardSize}
                    orientation={orientation}
                  />
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full space-y-0.5">
              <div className="flex items-center justify-between text-[9px] font-mono text-gray-500">
                <span>Move {Math.max(0, currentMoveIdx + 1)} / {parsedMoves.length}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1 bg-[#262421] rounded-full overflow-hidden border border-[#363431]">
                <div
                  className="h-full bg-[#81b64c] rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Playback Controls */}
            <div className="w-full flex items-center justify-between gap-2 flex-wrap bg-[#181714]/90 border border-white/10 rounded-2xl p-2.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={goFirst}
                  disabled={currentMoveIdx < 0}
                  title="First Move"
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 disabled:opacity-30 transition-all font-bold text-xs btn-press"
                >
                  ⏮
                </button>
                <button
                  onClick={goPrev}
                  disabled={currentMoveIdx < 0}
                  title="Previous Move"
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 disabled:opacity-30 transition-all font-bold text-xs btn-press"
                >
                  ◀
                </button>
                <button
                  onClick={() => setAutoPlay((v) => !v)}
                  disabled={currentMoveIdx >= parsedMoves.length - 1}
                  className={`px-3 h-8 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 btn-press ${
                    autoPlay
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm shadow-amber-500/15'
                      : 'bg-[#81b64c]/20 border-[#81b64c]/50 text-[#81b64c]'
                  } disabled:opacity-30`}
                >
                  {autoPlay ? '⏸ Pause' : '▶ Play'}
                </button>
                <button
                  onClick={goNext}
                  disabled={currentMoveIdx >= parsedMoves.length - 1}
                  title="Next Move"
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 disabled:opacity-30 transition-all font-bold text-xs btn-press"
                >
                  ▶
                </button>
                <button
                  onClick={goLast}
                  disabled={currentMoveIdx >= parsedMoves.length - 1}
                  title="Last Move"
                  className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 disabled:opacity-30 transition-all font-bold text-xs btn-press"
                >
                  ⏭
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setOrientation((o) => (o === 'white' ? 'black' : 'white'))}
                  className="px-3 h-8 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 transition-all btn-press"
                >
                  ⇅ Flip
                </button>
                <button
                  onClick={() => setShowAnalysis((v) => !v)}
                  className={`px-3 h-8 rounded-xl border text-xs font-bold transition-all btn-press ${
                    showAnalysis 
                      ? 'bg-[#81b64c]/20 border-[#81b64c]/50 text-[#81b64c] font-black' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  ↗ Arrows
                </button>
              </div>
            </div>

            {/* Auto speed slider */}
            {autoPlay && (
              <div className="w-full flex items-center gap-3 bg-[#181714]/90 border border-white/10 rounded-2xl px-4 py-2 shadow-md">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Speed:</span>
                <input
                  type="range"
                  min={300}
                  max={2500}
                  step={100}
                  value={autoSpeed}
                  onChange={(e) => setAutoSpeed(+e.target.value)}
                  className="flex-1 accent-[#81b64c]"
                />
                <span className="text-[11px] font-mono font-bold text-[#81b64c] w-12 text-right">
                  {(autoSpeed / 1000).toFixed(1)}s
                </span>
              </div>
            )}

            {/* Mobile notation list under board when on mobile tab 'board' */}
            <div className="xl:hidden bg-[#181714]/90 border border-white/10 rounded-2xl p-3 shadow-xl" style={{ height: 220 }}>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Move Notation</span>
                <span className="font-mono text-[9px] text-gray-500">{parsedMoves.length} plies</span>
              </div>
              <div className="h-[170px]">
                <MoveList moves={parsedMoves} currentIdx={currentMoveIdx} onSelectIdx={(i) => goTo(i)} />
              </div>
            </div>
          </div>

          {/* ── Right Column: Notation & Analysis (Desktop xl: or mobileTab === 'analysis') ── */}
          <div className={`${mobileTab === 'analysis' ? 'block' : 'hidden'} xl:block space-y-3.5`}>
            {/* Desktop Move List (xl: only) */}
            <div className="hidden xl:flex bg-[#181714]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex-col backdrop-blur-md" style={{ height: 320 }}>
              <div className="px-4 py-3 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">📜</span>
                  <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider">Move List</h4>
                </div>
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">{parsedMoves.length} plies</span>
              </div>
              <div className="flex-1 overflow-hidden px-3 py-2">
                <MoveList
                  moves={parsedMoves}
                  currentIdx={currentMoveIdx}
                  onSelectIdx={(idx) => goTo(idx)}
                />
              </div>
            </div>

            {/* Stockfish Analysis Card */}
            <div className="bg-[#181714]/90 border border-white/10 rounded-3xl p-4 space-y-3 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${isEngineReady ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-amber-400 animate-pulse'}`} />
                  <span className="font-heading font-extrabold text-sm text-white tracking-tight">Stockfish 16 NNUE</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">depth {evaluation.depth}</span>
              </div>

              {/* Evaluation score */}
              <div className="flex items-center justify-between">
                <div
                  className={`text-2xl font-black font-mono leading-none ${
                    evaluation.mate !== null
                      ? evaluation.mate > 0 ? 'text-emerald-400' : 'text-red-400'
                      : (evaluation.cp ?? 0) > 30 ? 'text-emerald-400' : (evaluation.cp ?? 0) < -30 ? 'text-red-400' : 'text-gray-200'
                  }`}
                >
                  {evaluation.mate !== null
                    ? evaluation.mate > 0 ? `+M${evaluation.mate}` : `-M${Math.abs(evaluation.mate)}`
                    : evaluation.cp !== null
                    ? (evaluation.cp > 0 ? `+${(evaluation.cp / 100).toFixed(2)}` : (evaluation.cp / 100).toFixed(2))
                    : '0.00'}
                </div>
                {evaluation.isAnalyzing && (
                  <span className="text-[9px] text-[#81b64c] font-mono animate-pulse">evaluating…</span>
                )}
              </div>

              {/* Best move */}
              {evaluation.bestMove && (
                <div className="flex items-center gap-2 bg-[#22201b] p-2.5 rounded-xl border border-white/10 text-xs">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Line:</span>
                  <span className="font-black font-mono text-[#81b64c]">{evaluation.bestMove}</span>
                  {evaluation.ponder && (
                    <span className="text-[10px] font-mono text-amber-400">({evaluation.ponder})</span>
                  )}
                </div>
              )}

              {/* Action: Export to Engine */}
              {onAnalyzePosition && (
                <button
                  onClick={() => onAnalyzePosition(boardFen)}
                  className="w-full py-2.5 bg-gradient-to-r from-[#81b64c] to-[#6a9d3b] hover:from-[#9fd168] hover:to-[#81b64c] text-black font-black rounded-xl text-xs transition-all shadow-md shadow-[#81b64c]/20 flex items-center justify-center gap-2 btn-press"
                >
                  <span>🚀</span> Open in Engine Analysis
                </button>
              )}
            </div>

            {/* 6-Stage Masterclass Breakdown Card */}
            <div className="bg-[#181714]/90 border border-white/10 rounded-3xl p-4 space-y-2.5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🎯</span>
                  <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider">6-Stage Masterclass</h4>
                </div>
                <span className="text-[9px] bg-[#81b64c]/15 text-[#81b64c] border border-[#81b64c]/30 px-2 py-0.5 rounded-full font-mono font-bold">
                  Ordered Flow
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {/* 1. Opening */}
                <div className="bg-[#22201b] border border-white/5 rounded-2xl p-2.5 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-[#81b64c]/20 text-[#81b64c] flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5">1</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#81b64c] flex items-center gap-1">
                      <span>♟️</span> Opening
                    </div>
                    <div className="text-gray-100 font-bold truncate text-xs mt-0.5">{selectedGame.opening}</div>
                    <div className="text-[10px] text-gray-400 font-mono">{selectedGame.openingCategory} {selectedGame.eco ? `(${selectedGame.eco})` : ''}</div>
                  </div>
                </div>

                {/* 2. Pawn Structure */}
                <div className="bg-[#22201b] border border-white/5 rounded-2xl p-2.5 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5">2</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                      <span>🧱</span> Pawn Structure
                    </div>
                    <div className="text-gray-200 font-semibold text-xs mt-0.5">{selectedGame.pawnStructure || 'Standard Central Structure'}</div>
                  </div>
                </div>

                {/* 3. Middlegame Theme */}
                <div className="bg-[#22201b] border border-white/5 rounded-2xl p-2.5 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5">3</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1">
                      <span>⚔️</span> Middlegame Theme
                    </div>
                    <div className="text-gray-200 font-semibold text-xs mt-0.5">{selectedGame.middlegameTheme || 'Dynamic Outpost Pressure'}</div>
                  </div>
                </div>

                {/* 4. Tactical Motif */}
                <div className="bg-[#22201b] border border-white/5 rounded-2xl p-2.5 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5">4</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1">
                      <span>⚡</span> Tactical Motif
                    </div>
                    <div className="text-gray-200 font-semibold text-xs mt-0.5">{selectedGame.tacticalMotif || 'Tactical Piece Coordination'}</div>
                  </div>
                </div>

                {/* 5. Endgame */}
                <div className="bg-[#22201b] border border-white/5 rounded-2xl p-2.5 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5">5</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <span>🏁</span> Endgame
                    </div>
                    <div className="text-gray-200 font-semibold text-xs mt-0.5">{selectedGame.endgame || 'Technical Endgame Conversion'}</div>
                  </div>
                </div>

                {/* 6. Difficulty */}
                <div className="bg-[#22201b] border border-white/5 rounded-2xl p-2.5 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-black text-xs shrink-0 mt-0.5">6</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1">
                      <span>⭐</span> Difficulty
                    </div>
                    <div className="mt-1">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg font-mono border inline-block ${
                        selectedGame.difficulty === 'Grandmaster' ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' :
                        selectedGame.difficulty === 'Master' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                        'bg-blue-500/20 text-blue-300 border-blue-500/40'
                      }`}>
                        {selectedGame.difficulty === 'Grandmaster' ? '🔥 Grandmaster Level' : selectedGame.difficulty === 'Master' ? '🥇 Master Level' : '⚡ Advanced Level'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GMGames;
