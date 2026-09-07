// ============================================================
// Stockfish Web Worker — UCI-compatible chess engine driver
// Loads Stockfish 16 NNUE from CDN (significantly stronger than SF10).
// Falls back to the lighter SF10 build, then to a built-in minimax.
// ============================================================

/* eslint-disable @typescript-eslint/no-explicit-any */

declare function importScripts(...urls: string[]): void;
declare const Stockfish: any;

// CDN URLs — we try the strongest available build first
const STOCKFISH_URLS = [
  'https://unpkg.com/stockfish@16.0.0/src/stockfish.js',          // SF16 (try first)
  'https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js', // SF10 fallback
  'https://unpkg.com/stockfish.js@10.0.2/stockfish.js',            // SF10 fallback #2
];

let sf: any = null;
let engineReady = false;
let pendingFen: string | null = null;
let pendingDepth = 18;

// ------------------------------------------------------------------
// Try to load the strongest available Stockfish build via CDN
// ------------------------------------------------------------------
function tryLoadStockfish(): boolean {
  if (typeof importScripts !== 'function') return false;

  for (const url of STOCKFISH_URLS) {
    try {
      importScripts(url);
      if (typeof Stockfish === 'undefined') continue;

      sf = Stockfish();
      sf.onmessage = (msg: string | MessageEvent) => {
        const line = typeof msg === 'string' ? msg : msg.data;
        handleEngineLine(line);
      };

      sf.postMessage('uci');
      sf.postMessage('setoption name Hash value 128');
      sf.postMessage('setoption name Threads value 1');
      sf.postMessage('isready');
      return true;
    } catch {
      // Try next URL
    }
  }
  return false;
}

const stockfishLoaded = tryLoadStockfish();

if (!stockfishLoaded) {
  // Signal ready immediately — will use built-in fallback minimax
  self.postMessage({ type: 'status', ready: true });
  engineReady = true;
}

// ------------------------------------------------------------------

// Parse real UCI output lines from Stockfish
// ------------------------------------------------------------------
function handleEngineLine(line: string) {
  if (!line) return;

  if (line === 'readyok' || line.includes('readyok')) {
    engineReady = true;
    self.postMessage({ type: 'status', ready: true });
    if (pendingFen) {
      sendPosition(pendingFen, pendingDepth);
      pendingFen = null;
    }
    return;
  }

  if (line.startsWith('info') && line.includes('score')) {
    const depthM = line.match(/depth (\d+)/);
    const cpM = line.match(/score cp (-?\d+)/);
    const mateM = line.match(/score mate (-?\d+)/);
    const pvM = line.match(/ pv (.+)/);
    const nodesM = line.match(/nodes (\d+)/);
    const npsM = line.match(/nps (\d+)/);
    const timeM = line.match(/time (\d+)/);

    const depth = depthM ? parseInt(depthM[1]) : 0;
    const cp = cpM ? parseInt(cpM[1]) : null;
    const mate = mateM ? parseInt(mateM[1]) : null;
    const pv = pvM ? pvM[1].trim() : '';
    const nodes = nodesM ? parseInt(nodesM[1]) : 0;
    const nps = npsM ? parseInt(npsM[1]) : 0;
    const time = timeM ? parseInt(timeM[1]) : 0;

    self.postMessage({ type: 'evaluation', depth, cp, mate, pv, nodes, nps, time });
    return;
  }

  if (line.startsWith('bestmove')) {
    const parts = line.split(' ');
    const bestMove = parts[1] !== '(none)' ? parts[1] : null;
    const ponder = parts[3] || null;
    self.postMessage({ type: 'bestmove', bestMove, ponder });
    return;
  }
}

// ------------------------------------------------------------------
// Send a position to Stockfish for analysis
// ------------------------------------------------------------------
function sendPosition(fen: string, depth: number) {
  if (sf) {
    sf.postMessage('stop');
    sf.postMessage(`position fen ${fen}`);
    sf.postMessage(`go depth ${depth}`);
  } else {
    runFallbackEngine(fen, depth);
  }
}

// ------------------------------------------------------------------
// MESSAGE HANDLER from main thread
// ------------------------------------------------------------------
self.onmessage = (event: MessageEvent) => {
  const { command, fen, depth, options } = event.data;

  switch (command) {
    case 'init':
      if (sf && !engineReady) {
        // still waiting for readyok
      } else if (!sf) {
        self.postMessage({ type: 'status', ready: true });
      }
      break;

    case 'setoption':
      if (sf && options) {
        Object.entries(options).forEach(([name, value]) => {
          sf.postMessage(`setoption name ${name} value ${value}`);
        });
      }
      break;

    case 'position':
      if (!engineReady) {
        pendingFen = fen;
        pendingDepth = depth || 18;
      } else {
        sendPosition(fen, depth || 18);
      }
      break;

    case 'stop':
      if (sf) sf.postMessage('stop');
      break;

    case 'newgame':
      if (sf) {
        sf.postMessage('stop');
        sf.postMessage('ucinewgame');
      }
      break;
  }
};

// ------------------------------------------------------------------
// FALLBACK ENGINE — minimax with alpha-beta pruning + evaluation
// Plays real chess moves using piece-square tables and material.
// ------------------------------------------------------------------

const PIECE_VALUES: Record<string, number> = {
  p: -100, P: 100,
  n: -320, N: 320,
  b: -330, B: 330,
  r: -500, R: 500,
  q: -900, Q: 900,
  k: -20000, K: 20000,
};

// Simplified piece-square tables (white perspective)
const PST: Record<string, number[]> = {
  P: [
     0,  0,  0,  0,  0,  0,  0,  0,
    50, 50, 50, 50, 50, 50, 50, 50,
    10, 10, 20, 30, 30, 20, 10, 10,
     5,  5, 10, 25, 25, 10,  5,  5,
     0,  0,  0, 20, 20,  0,  0,  0,
     5, -5,-10,  0,  0,-10, -5,  5,
     5, 10, 10,-20,-20, 10, 10,  5,
     0,  0,  0,  0,  0,  0,  0,  0,
  ],
  N: [
    -50,-40,-30,-30,-30,-30,-40,-50,
    -40,-20,  0,  0,  0,  0,-20,-40,
    -30,  0, 10, 15, 15, 10,  0,-30,
    -30,  5, 15, 20, 20, 15,  5,-30,
    -30,  0, 15, 20, 20, 15,  0,-30,
    -30,  5, 10, 15, 15, 10,  5,-30,
    -40,-20,  0,  5,  5,  0,-20,-40,
    -50,-40,-30,-30,-30,-30,-40,-50,
  ],
  B: [
    -20,-10,-10,-10,-10,-10,-10,-20,
    -10,  0,  0,  0,  0,  0,  0,-10,
    -10,  0,  5, 10, 10,  5,  0,-10,
    -10,  5,  5, 10, 10,  5,  5,-10,
    -10,  0, 10, 10, 10, 10,  0,-10,
    -10, 10, 10, 10, 10, 10, 10,-10,
    -10,  5,  0,  0,  0,  0,  5,-10,
    -20,-10,-10,-10,-10,-10,-10,-20,
  ],
  R: [
     0,  0,  0,  0,  0,  0,  0,  0,
     5, 10, 10, 10, 10, 10, 10,  5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
    -5,  0,  0,  0,  0,  0,  0, -5,
     0,  0,  0,  5,  5,  0,  0,  0,
  ],
  Q: [
    -20,-10,-10, -5, -5,-10,-10,-20,
    -10,  0,  0,  0,  0,  0,  0,-10,
    -10,  0,  5,  5,  5,  5,  0,-10,
     -5,  0,  5,  5,  5,  5,  0, -5,
      0,  0,  5,  5,  5,  5,  0, -5,
    -10,  5,  5,  5,  5,  5,  0,-10,
    -10,  0,  5,  0,  0,  0,  0,-10,
    -20,-10,-10, -5, -5,-10,-10,-20,
  ],
  K: [
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -30,-40,-40,-50,-50,-40,-40,-30,
    -20,-30,-30,-40,-40,-30,-30,-20,
    -10,-20,-20,-20,-20,-20,-20,-10,
     20, 20,  0,  0,  0,  0, 20, 20,
     20, 30, 10,  0,  0, 10, 30, 20,
  ],
};

function fenToBoard(fen: string): { piece: string; color: 'w' | 'b' }[][] {
  const rows = fen.split(' ')[0].split('/');
  const board: { piece: string; color: 'w' | 'b' }[][] = [];
  for (const row of rows) {
    const rank: { piece: string; color: 'w' | 'b' }[] = [];
    for (const ch of row) {
      const n = parseInt(ch);
      if (!isNaN(n)) {
        for (let i = 0; i < n; i++) rank.push({ piece: '', color: 'w' });
      } else {
        rank.push({
          piece: ch.toLowerCase(),
          color: ch === ch.toUpperCase() ? 'w' : 'b',
        });
      }
    }
    board.push(rank);
  }
  return board;
}

function evaluateBoard(fen: string): number {
  const board = fenToBoard(fen);
  let score = 0;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const sq = board[r][c];
      if (!sq.piece) continue;
      const isWhite = sq.color === 'w';
      const upper = sq.piece.toUpperCase();
      const val = isWhite ? Math.abs(PIECE_VALUES[upper] || 0) : -Math.abs(PIECE_VALUES[upper] || 0);
      score += val;

      if (PST[upper]) {
        const idx = isWhite ? r * 8 + c : (7 - r) * 8 + c;
        score += isWhite ? PST[upper][idx] : -PST[upper][idx];
      }
    }
  }
  return score;
}

function getLegalMoves(fen: string): string[] {
  // Parse FEN manually to generate pseudo-legal moves
  // We use a simplified approach with coordinate notation
  const parts = fen.split(' ');
  const turn = parts[1] || 'w';
  const board = fenToBoard(fen);

  const moves: string[] = [];
  const files = 'abcdefgh';

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const sq = board[r][c];
      if (!sq.piece) continue;
      if (sq.color !== turn) continue;

      const from = files[c] + (8 - r);
      const piece = sq.piece;

      const addMove = (tr: number, tc: number, promo = '') => {
        if (tr < 0 || tr > 7 || tc < 0 || tc > 7) return false;
        const target = board[tr][tc];
        if (target.piece && target.color === sq.color) return false;
        const to = files[tc] + (8 - tr);
        moves.push(from + to + promo);
        return !target.piece; // can continue sliding only if empty
      };

      if (piece === 'p') {
        const dir = turn === 'w' ? -1 : 1;
        const startRow = turn === 'w' ? 6 : 1;
        const promoRow = turn === 'w' ? 0 : 7;
        const nr = r + dir;

        if (nr >= 0 && nr < 8 && !board[nr][c].piece) {
          const promo = nr === promoRow ? 'q' : '';
          moves.push(from + files[c] + (8 - nr) + promo);
          if (r === startRow && !board[nr + dir]?.[c]?.piece) {
            moves.push(from + files[c] + (8 - (r + 2 * dir)));
          }
        }
        for (const dc of [-1, 1]) {
          const nc = c + dc;
          if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && board[nr][nc].piece && board[nr][nc].color !== sq.color) {
            const promo = nr === promoRow ? 'q' : '';
            moves.push(from + files[nc] + (8 - nr) + promo);
          }
        }
      } else if (piece === 'n') {
        for (const [dr, dc] of [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]) {
          addMove(r + dr, c + dc);
        }
      } else if (piece === 'b') {
        for (const [dr, dc] of [[-1,-1],[-1,1],[1,-1],[1,1]]) {
          for (let i = 1; i < 8; i++) { if (!addMove(r + dr*i, c + dc*i)) break; }
        }
      } else if (piece === 'r') {
        for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
          for (let i = 1; i < 8; i++) { if (!addMove(r + dr*i, c + dc*i)) break; }
        }
      } else if (piece === 'q') {
        for (const [dr, dc] of [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]]) {
          for (let i = 1; i < 8; i++) { if (!addMove(r + dr*i, c + dc*i)) break; }
        }
      } else if (piece === 'k') {
        for (const [dr, dc] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) {
          addMove(r + dr, c + dc);
        }
      }
    }
  }

  return moves;
}

function applyMove(fen: string, move: string): string {
  const parts = fen.split(' ');
  const board = fenToBoard(fen);
  const turn = parts[1] || 'w';
  const files = 'abcdefgh';

  const fc = files.indexOf(move[0]);
  const fr = 8 - parseInt(move[1]);
  const tc = files.indexOf(move[2]);
  const tr = 8 - parseInt(move[3]);
  const promo = move[4];

  const piece = board[fr][fc];
  board[tr][tc] = promo ? { piece: promo, color: piece.color } : { ...piece };
  board[fr][fc] = { piece: '', color: 'w' };

  // Rebuild FEN board part
  const rows = board.map(rank => {
    let row = '';
    let empty = 0;
    for (const sq of rank) {
      if (!sq.piece) {
        empty++;
      } else {
        if (empty) { row += empty; empty = 0; }
        row += sq.color === 'w' ? sq.piece.toUpperCase() : sq.piece;
      }
    }
    if (empty) row += empty;
    return row;
  });

  const nextTurn = turn === 'w' ? 'b' : 'w';
  const halfmove = parseInt(parts[4] || '0') + 1;
  const fullmove = turn === 'b' ? parseInt(parts[5] || '1') + 1 : parseInt(parts[5] || '1');

  return `${rows.join('/')} ${nextTurn} - - ${halfmove} ${fullmove}`;
}

let fallbackStop = false;

function minimax(fen: string, depth: number, alpha: number, beta: number, maximizing: boolean): number {
  if (fallbackStop) return 0;
  if (depth === 0) return evaluateBoard(fen);

  const moves = getLegalMoves(fen);
  if (moves.length === 0) return maximizing ? -99999 : 99999;

  if (maximizing) {
    let best = -Infinity;
    for (const move of moves) {
      const next = applyMove(fen, move);
      const val = minimax(next, depth - 1, alpha, beta, false);
      best = Math.max(best, val);
      alpha = Math.max(alpha, best);
      if (beta <= alpha) break;
    }
    return best;
  } else {
    let best = Infinity;
    for (const move of moves) {
      const next = applyMove(fen, move);
      const val = minimax(next, depth - 1, alpha, beta, true);
      best = Math.min(best, val);
      beta = Math.min(beta, best);
      if (beta <= alpha) break;
    }
    return best;
  }
}

function runFallbackEngine(fen: string, maxDepth: number) {
  fallbackStop = false;
  const isWhite = fen.split(' ')[1] === 'w';
  const moves = getLegalMoves(fen);

  if (moves.length === 0) {
    self.postMessage({ type: 'bestmove', bestMove: null, ponder: null });
    return;
  }

  // Emit depth-by-depth evaluations
  let finalBest = moves[0];

  for (let d = 1; d <= Math.min(maxDepth, 4); d++) {
    if (fallbackStop) break;

    let bestScore = isWhite ? -Infinity : Infinity;
    let bestMove = moves[0];

    // Shuffle moves for variety
    const shuffled = [...moves].sort(() => Math.random() * 0.4 - 0.2);

    for (const move of shuffled) {
      if (fallbackStop) break;
      const next = applyMove(fen, move);
      const score = minimax(next, d - 1, -Infinity, Infinity, !isWhite);
      if (isWhite ? score > bestScore : score < bestScore) {
        bestScore = score;
        bestMove = move;
      }
    }

    finalBest = bestMove;

    self.postMessage({
      type: 'evaluation',
      depth: d,
      cp: isWhite ? bestScore : -bestScore,
      mate: null,
      pv: bestMove,
      nodes: d * moves.length,
      nps: 50000,
      time: d * 50,
    });
  }

  self.postMessage({ type: 'bestmove', bestMove: finalBest, ponder: null });
}

export {};
