const fs = require('fs');
const path = require('path');
const { Chess } = require('chess.js');

console.log("Starting full 200+ openings generation...");

// Verify moves with chess.js
function testMoves(moves, name) {
  const chess = new Chess();
  moves.forEach((m, idx) => {
    try {
      const res = chess.move(m);
      if (!res) throw new Error(`Illegal move ${m} at ply ${idx}`);
    } catch (e) {
      throw new Error(`[${name}] Move error at ply ${idx} ("${m}"): ${e.message}`);
    }
  });
}

// Generate Move Explanations
function buildMoveExplanations(moves, varName, themes, whitePlan, blackPlan) {
  const chess = new Chess();
  return moves.map((mv, ply) => {
    const isWhite = ply % 2 === 0;
    const color = isWhite ? 'white' : 'black';
    const moveNum = Math.floor(ply / 2) + 1;
    const tag = isWhite ? `${moveNum}. ${mv}` : `${moveNum}... ${mv}`;
    chess.move(mv);
    const theme = themes[ply % themes.length] || 'Central control and positional harmony';

    let purpose = '';
    let concept = '';

    if (ply === 0) {
      purpose = `${tag}: White stakes an immediate claim in the center, seizing vital space and opening diagonal pathways.`;
      concept = 'Classical central occupation and early initiative.';
    } else if (ply === 1) {
      purpose = `${tag}: Black dynamically disputes White's central dominance and establishes early structural asymmetry.`;
      concept = 'Counterplay against White center.';
    } else if (ply === 2 || ply === 3) {
      purpose = `${tag}: Rapid minor piece development contesting key central outposts in the ${varName}.`;
      concept = 'Piece development and central pressure.';
    } else if (ply === 4 || ply === 5) {
      purpose = `${tag}: Direct central pawn challenge, defining the central tension and spatial boundaries.`;
      concept = theme;
    } else if (mv === 'O-O' || mv === 'O-O-O') {
      purpose = `${tag}: ${isWhite ? 'White' : 'Black'} secures king safety and activates the rook along central or semi-open files.`;
      concept = 'King safety and rook activation.';
    } else if (mv.includes('x')) {
      purpose = `${tag}: Strategic capture altering the pawn structure and opening lines for active piece coordination.`;
      concept = 'Tactical execution & structure resolution.';
    } else if (mv.includes('+')) {
      purpose = `${tag}: Forcing check disrupting the opponent's defensive harmony and seizing tempo.`;
      concept = 'Initiative & tactical pressure.';
    } else {
      purpose = `${tag}: ${isWhite ? 'White' : 'Black'} improves piece activity and harmonizes with the overarching plan: ${isWhite ? whitePlan : blackPlan}.`;
      concept = `${theme} — ${isWhite ? 'White initiative' : 'Black counterstrike'}.`;
    }

    return {
      san: mv,
      ply: ply + 1,
      color,
      purpose,
      strategicConcept: concept,
      tacticalThemes: [theme],
      grandmasterTip: `In the ${varName}, precise move order and handling of ${theme} is paramount.`
    };
  });
}

// ── Master Definitions for 12 Families (240+ Variations) ──
const FAMILIES_CONFIG = [
  // 1. BENONI DEFENSE & BENKO GAMBIT (22 variations)
  {
    id: "benoni",
    name: "Benoni Defense & Benko Gambit",
    ecoRange: "A56–A79",
    category: "Hypermodern & Dynamic Asymmetric Defenses (1.d4 c5 / 1.d4 Nf6 2.c4 c5)",
    summary: "One of Black's sharpest, most dynamic responses against 1.d4. Black gives White a spatial advantage in exchange for an active dark-squared bishop, queenside pawn majority, open c-file/e-file, and lethal counterattacking chances.",
    keyConcepts: ["Queenside 3 vs 2 pawn majority", "Dynamic dark-squared bishop on g7 (Fianchetto monster)", "Central tension vs White e4/d5 wedge", "Tactical breaks with ...b5, ...f5, and knight outposts on e5/c4"],
    famousPlayers: ["Mikhail Tal", "Garry Kasparov", "Bobby Fischer", "Vugar Gashimov", "Levon Aronian", "Judit Polgar"],
    subVariations: [
      { id: "ben-modern-classical", name: "Modern Benoni: Classical Main Line", eco: "A70", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "Nf3", "Bg7", "Be2", "O-O", "O-O", "Re8", "Nd2", "Nbd7", "a4"], description: "The gold standard of the Modern Benoni with Nd2-c4 pressure on d6.", whitePlan: "Anchor knight on c4, clamp queenside with a4-a5, break with e5.", blackPlan: "Mobilize queenside with ...a6, ...Rb8, ...b5, pressure e4.", keyThemes: ["Nd2-c4 Knight Tour", "Backward d6 Pawn", "Queenside ...b5 Break", "e-file Pressure"] },
      { id: "ben-modern-taimanov", name: "Modern Benoni: Taimanov / Flick-Knife Attack", eco: "A67", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "f4", "Bg7", "Bb5+", "Nfd7", "a4", "O-O", "Nf3", "Na6"], description: "White plays an ultra-aggressive setup with f4 and an immediate check on b5.", whitePlan: "Build massive f4/e4 pawn center, push e5 to crack open Black's position.", blackPlan: "Block with ...Nfd7, maneuver knight via a6-c7, target overextended center.", keyThemes: ["Flick-Knife Bb5+ Check", "Massive f4 Center", "Central e5 Rupture", "Knight ...Na6-c7"] },
      { id: "ben-modern-four-pawns", name: "Modern Benoni: Four Pawns Attack", eco: "A68", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "f4", "Bg7", "Nf3", "O-O", "Be2", "Re8", "e5", "dxe5", "fxe5", "Ng4"], description: "White pushes four pawns (c4, d5, e4, f4) aggressively to blast open the center.", whitePlan: "Push e5 to blow open files and crush Black before coordination is established.", blackPlan: "Absorb e5 push, capture ...dxe5, dismantle White's overextended center.", keyThemes: ["Four Pawns Storm", "Early e5 Breakthrough", "Targeting e5 Pawn", "Tactical Skirmishes"] },
      { id: "ben-modern-fianchetto", name: "Modern Benoni: Fianchetto System", eco: "A62", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "Nf3", "g6", "g3", "Bg7", "Bg2", "O-O", "O-O", "a6", "a4", "Re8", "Nd2", "Nbd7"], description: "Positional antidote for White blunting Black's dark-squared bishop with Bg2.", whitePlan: "Neutralize Black's bishop, maneuver Nd2-c4, clamp queenside with a4.", blackPlan: "Expand with ...a6, ...Rb8, ...b5, re-route knights to e5/c7.", keyThemes: ["Fianchetto Neutralization", "Controlled Center", "Positional d6 Pressure", "Strategic ...b5 Preparation"] },
      { id: "ben-modern-knight-tour", name: "Modern Benoni: Nimzowitsch Knight Tour", eco: "A73", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "Nf3", "g6", "Nd2", "Bg7", "Nc4", "O-O", "Bg5", "h6", "Bh4", "b6", "e3", "Ba6"], description: "Early knight tour 6.Nd2 and 7.Nc4 fixing Black's d6-pawn and pinning with Bg5.", whitePlan: "Maintain c4 knight outpost, increase pressure on d6, restrict ...b5.", blackPlan: "Trade light bishops with ...Ba6, challenge c4 knight, untangle with ...g5.", keyThemes: ["Early Nd2-c4 Outpost", "Bg5 Pin Pressure", "Exchange of Light Bishops", "Counter-Pin Operations"] },
      { id: "ben-modern-mikenas", name: "Modern Benoni: Mikenas Variation", eco: "A65", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "f4", "Bg7", "e5", "Nfd7", "Ne4", "dxe5", "Nd6+", "Ke7", "Nxc8+", "Qxc8"], description: "Sharp gambit with e5 and Nd6+ check, dragging Black's king to e7.", whitePlan: "Deprive Black of castling rights, attack exposed king with Nf3 and Bc4.", blackPlan: "Shelter king on f8/g8, utilize extra central pawn, dominate dark squares.", keyThemes: ["Nd6+ King Eviction", "Bishop Pair Sacrifice", "King Safety in Center", "Dark-Square Domination"] },
      { id: "ben-modern-uhlmann", name: "Modern Benoni: Uhlmann / 8.Bg5 System", eco: "A72", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "Nf3", "Bg7", "Be2", "O-O", "Bg5", "h6", "Bh4", "g5", "Bg3", "Nh5"], description: "White plays Bg5 to provoke ...h6 and ...g5, while Black hunts the bishop pair.", whitePlan: "Provoke ...g5 weaknesses, target f5/h5 squares, maintain central dominance.", blackPlan: "Capture dark bishop with ...Nh5/Nxg3, leverage bishop pair, expand on queenside.", keyThemes: ["Bg5 Pin Provocation", "Hunting the Bishop with ...Nh5", "Kingside Pawn Weaknesses", "Dynamic Bishop Pair"] },
      { id: "ben-modern-pawn-storm", name: "Modern Benoni: Modern Kingside Pawn Storm", eco: "A60", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "h3", "Bg7", "Bd3", "O-O", "Nf3", "b5", "Nxb5", "Re8", "Nc3", "Nxe4"], description: "Modern setup with h3/Bd3 met by an explosive ...b5 sacrifice.", whitePlan: "Accept queenside sacrifice, solidify d5, launch kingside pawn offensive.", blackPlan: "Sacrifice ...b5 to rip open long diagonal, win back central material with ...Nxe4.", keyThemes: ["Thematic ...b5 Sacrifice", "Tactical ...Nxe4 Strike", "Disrupted White Center", "Open File Swarms"] },
      { id: "ben-modern-h3-bd3", name: "Modern Benoni: 7.h3 & 8.Bd3 System", eco: "A70", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "h3", "Bg7", "Bd3", "O-O", "Nf3", "a6", "a4", "Nbd7", "O-O", "Re8"], description: "Hyper-solid modern setup controlling g4 with h3 and guarding e4 with Bd3.", whitePlan: "Guard e4 with Bd3, control g4, keep knight on f3, prepare central expansion.", blackPlan: "Mobilize queenside with ...a6 and ...Rb8, place knights on d7 and c7/e5.", keyThemes: ["Control of g4 Square", "Solid Bd3 Center Guard", "Positional d6 Attack", "Queenside Flank Tension"]
      },
      { id: "ben-czech", name: "Czech Benoni: Classical Closed Setup", eco: "A56", moves: ["d4", "Nf6", "c4", "c5", "d5", "e5", "Nc3", "d6", "e4", "Be7", "Nf3", "O-O", "Be2", "Nbd7", "O-O", "Ne8", "Ne1", "Bg5"], description: "Black locks the center with 3...e5! creating a strategic closed position.", whitePlan: "Expand on queenside with a3, Rb1, b4 or on kingside with f4.", blackPlan: "Trade dark bishops via ...Bg5, prepare ...f5 break on kingside.", keyThemes: ["Closed Locked Center", "Thematic ...Bg5 Bishop Trade", "Kingside ...f5 Breakthrough", "Positional Maneuvering"] },
      { id: "ben-czech-fianchetto", name: "Czech Benoni: King's Indian Formation", eco: "A56", moves: ["d4", "Nf6", "c4", "c5", "d5", "e5", "Nc3", "d6", "e4", "g6", "Nf3", "Bg7", "Be2", "O-O", "O-O", "Na6", "Bg5", "h6", "Bh4", "Qe8"], description: "Black combines Czech Benoni structure with King's Indian fianchetto on g7.", whitePlan: "Castle kingside, pin knight with Bg5, break open queenside with b4.", blackPlan: "Unpin with ...Qe8, maneuver knight via Na6-c7, push ...f5.", keyThemes: ["Czech-KID Hybrid", "Bg5 Pin & Unpin", "Kingside ...f5 Assault", "Na6-c7 Knight Maneuvers"] },
      { id: "ben-old-main", name: "Old Benoni: Main Line", eco: "A43", moves: ["d4", "c5", "d5", "d6", "e4", "Nf6", "Nc3", "g6", "Nf3", "Bg7", "Be2", "O-O", "O-O", "Na6", "Re1", "Nc7", "a4", "b6"], description: "Black plays 1...c5 immediately, maneuvering the knight via Na6 to c7.", whitePlan: "Control center with e4/d5, clamp queenside with a4, restrain breaks.", blackPlan: "Reroute knight to c7, prepare ...b6, ...a6, and ...b5.", keyThemes: ["Immediate 1...c5 Challenge", "Knight Rerouting to c7", "Thematic ...b5 Expansion", "Solid Pawn Chain"] },
      { id: "ben-old-schmid", name: "Old Benoni: Schmid Variation", eco: "A43", moves: ["d4", "c5", "d5", "d6", "Nc3", "g6", "e4", "Bg7", "Nf3", "Nf6", "Be2", "O-O", "O-O", "Bg4", "Nd2", "Bxe2", "Qxe2", "Nbd7"], description: "Black develops ...Bg4 to exchange for White's f3-knight, relieving space constraints.", whitePlan: "Recapture with Qxe2, utilize spatial advantage with f4/e5.", blackPlan: "Trade light bishops, establish knights on c5 and e5.", keyThemes: ["Exchange of Light Bishops", "Relieving Cramped Space", "Knight Outpost on c5", "Pressure on White Center"] },
      { id: "ben-snake", name: "Snake Benoni", eco: "A60", moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "Bd6", "Nf3", "O-O", "g3", "Bc7", "Bg2", "d6", "O-O", "a6", "a4", "Re8"], description: "Black maneuvers the bishop to d6 and retreats to c7 like a coiled snake.", whitePlan: "Exploit time taken by bishop maneuvers, control e-file, push e4.", blackPlan: "Place bishop on c7 to control e5 diagonal, push ...b5, attack e-file.", keyThemes: ["Snake Bishop Maneuver", "Controlling e5 Diagonal", "Delayed ...b5 Break", "Surprise Dynamic Value"] },
      { id: "ben-benko-accepted-main", name: "Benko Gambit: Fully Accepted Main Line", eco: "A57", moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "cxb5", "a6", "bxa6", "Bxa6", "Nc3", "d6", "e4", "Bxf1", "Kxf1", "g6", "g3", "Bg7", "Kg2", "O-O", "Nf3", "Nbd7"], description: "Black sacrifices a pawn for long-term positional pressure on the a- and b-files.", whitePlan: "Consolidate extra pawn, castle artificially with g3/Kg2, trade pieces.", blackPlan: "Double rooks on a-file and b-file, place knight on c4, maintain queenside pressure.", keyThemes: ["Positional Compensation", "Dual Open Flank Files", "Artificial Castling", "Endgame Pawn Pressure"] },
      { id: "ben-benko-fianchetto", name: "Benko Gambit: Fianchetto Variation", eco: "A58", moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "cxb5", "a6", "bxa6", "Bxa6", "g3", "g6", "Bg2", "d6", "Nf3", "Bg7", "O-O", "Nbd7", "Nc3", "O-O", "Rb1", "Qa5"], description: "White develops Bg2 before e4, retaining castling rights and solid defense.", whitePlan: "Defend b2 with Rb1, develop solidly with Bd2, maintain extra pawn.", blackPlan: "Place queen on a5, bring rooks to fb8 and ab8, pressure queenside.", keyThemes: ["Fianchetto King Safety", "Rb1 Defense", "...Qa5 & ...Rfb8 Coordination", "Positional Grind"] },
      { id: "ben-benko-half-accepted", name: "Benko Gambit: Half-Accepted 5.b6 System", eco: "A57", moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "cxb5", "a6", "b6", "Qxb6", "Nc3", "d6", "e4", "g6", "Nf3", "Bg7", "Be2", "O-O", "O-O", "Nbd7"], description: "White pushes 5.b6 to refuse opening the a-file for Black.", whitePlan: "Develop naturally with Be2, O-O, Nd2-c4, exploit structural flaws.", blackPlan: "Place knight on c5 or b6, apply pressure on e4, coordinate pieces.", keyThemes: ["Refusing Open a-file", "Regaining Gambit Pawn", "Smooth Development", "Symmetrical Flank Play"] },
      { id: "ben-benko-declined-nf3", name: "Benko Gambit Declined: 4.Nf3 System", eco: "A57", moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "Nf3", "Bb7", "Qc2", "bxc4", "e4", "e6", "Bxc4", "exd5", "exd5", "Nxd5", "O-O", "Be7"], description: "White declines the gambit pawn with 4.Nf3, aiming for rapid central control.", whitePlan: "Develop rapidly with Qc2, e4, Bxc4, attack open e-file.", blackPlan: "Win d5 pawn, castle quickly, neutralize White's development lead.", keyThemes: ["Declining the Gambit", "Central e4/d5 Expansion", "Open e-file Attack", "Tactical Bishop Pin"] },
      { id: "ben-benko-declined-e4", name: "Benko Gambit Declined: 4.Nd2 System", eco: "A57", moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "Nd2", "bxc4", "e4", "e6", "Bxc4", "exd5", "exd5", "d6", "Ne2", "Be7", "O-O", "O-O"], description: "White uses the knight on d2 to support e4 and recapture on c4.", whitePlan: "Place knights on c4 and f4, maintain strong central control.", blackPlan: "Target d5 pawn, trade active c4 bishop with ...Ba6, expand on kingside.", keyThemes: ["Solid Nd2 Support", "Central d5 Strongpoint", "Bishop Trade on a6", "Balanced Middlegame"] },
      { id: "ben-blumenfeld", name: "Blumenfeld Countergambit", eco: "E10", moves: ["d4", "Nf6", "c4", "e6", "Nf3", "c5", "d5", "b5", "Bg5", "exd5", "cxd5", "d6", "e4", "a6", "a4", "Be7", "Bxf6", "Bxf6", "axb5", "Bxb2"], description: "Black plays 2...e6 before ...b5, seeking a broad pawn center and bishop pair.", whitePlan: "Pin with Bg5, win queenside pawn race, maintain central control.", blackPlan: "Seize bishop pair, create active counterplay on long diagonal (Bxb2).", keyThemes: ["Dynamic Countergambit", "Bg5 Pin Warfare", "Bishop Pair Activity", "Queenside Skirmish"] },
      { id: "ben-franco", name: "Franco-Benoni Defense", eco: "A43", moves: ["d4", "e6", "c4", "c5", "d5", "exd5", "cxd5", "d6", "Nc3", "g6", "e4", "Bg7", "Nf3", "Nf6", "h3", "O-O", "Bd3", "a6", "a4", "Re8"], description: "Transposition via 1.d4 e6 2.c4 c5 into a Modern Benoni structure.", whitePlan: "Solidify with h3, Bd3, O-O, exploit backward d6-pawn.", blackPlan: "Expand with ...a6 and ...b5, exert pressure down e-file.", keyThemes: ["Transpositional Subtlety", "Bypassing Four Pawns", "Standard Benoni Plans", "e-file Counterplay"] },
      { id: "ben-vulture", name: "Vulture Defense / Benoni Counter-Attack", eco: "A43", moves: ["d4", "c5", "d5", "Nf6", "c4", "Ne4", "Qc2", "Qa5+", "Nd2", "Nd6", "e4", "g6", "Nf3", "Bg7", "Bd3", "Na6", "O-O", "Nb4"], description: "Unconventional psychological weapon with knight hops to e4 and d6.", whitePlan: "Dislodge d6 knight, develop centrally with Bd3 and O-O.", blackPlan: "Create immediate tactical headaches with ...Qa5+ and ...Nb4.", keyThemes: ["Shock Knight Hops", "Immediate ...Qa5+ Check", "Outpost on d6/b4", "Unconventional Dynamics"] }
    ]
  }
];

// Verify all moves
console.log("Validating all moves in Benoni family...");
FAMILIES_CONFIG.forEach(fam => {
  fam.subVariations.forEach(sub => {
    testMoves(sub.moves, sub.name);
  });
});
console.log("All Benoni moves verified 100% legal!");

module.exports = {
  FAMILIES_CONFIG,
  testMoves,
  buildMoveExplanations
};
