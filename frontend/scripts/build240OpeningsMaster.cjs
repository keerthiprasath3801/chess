const fs = require('fs');
const path = require('path');
const { Chess } = require('chess.js');

console.log("Compiling comprehensive 240+ deep opening lines master database...");

// Master Opening Families Definitions
const OPENING_FAMILIES = [
  // ── 1. BENONI DEFENSE & BENKO GAMBIT (22 variations) ───────────────────
  {
    id: "benoni",
    name: "Benoni Defense & Benko Gambit",
    ecoRange: "A56–A79",
    category: "Hypermodern & Dynamic Asymmetric Defenses (1.d4 c5 / 1.d4 Nf6 2.c4 c5)",
    summary: "One of Black's sharpest, most dynamic responses against 1.d4. Black gives White a spatial advantage in exchange for an active dark-squared bishop, queenside pawn majority, open c-file/e-file, and lethal counterattacking chances.",
    keyConcepts: [
      "Queenside 3 vs 2 pawn majority",
      "Dynamic dark-squared bishop on g7 (Fianchetto monster)",
      "Central tension vs White e4/d5 wedge",
      "Tactical breaks with ...b5, ...f5, and knight outposts on e5/c4"
    ],
    famousPlayers: ["Mikhail Tal", "Garry Kasparov", "Bobby Fischer", "Vugar Gashimov", "Levon Aronian", "Judit Polgar"],
    subVariations: [
      {
        id: "ben-modern-classical",
        name: "Modern Benoni: Classical Main Line",
        eco: "A70",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "Nf3", "Bg7", "Be2", "O-O", "O-O", "Re8", "Nd2", "Nbd7", "a4"],
        description: "The gold standard of the Modern Benoni. White develops classically with Nf3, Be2, O-O, and redirects the knight via Nd2 to c4 to put pressure on Black's backward d6-pawn, while Black counterattacks along the e-file and prepares queenside expansion.",
        whitePlan: "Anchor the knight on c4, push a4-a5 to clamp Black's queenside, and eventually break with e4-e5 or f2-f4.",
        blackPlan: "Place knight on e5 or c5, mobilize queenside with ...a6 and ...Rb8 followed by ...b5, and exert relentless pressure on the e4 pawn.",
        keyThemes: ["Nd2-c4 Knight Maneuver", "Backward d6 Pawn Target", "Queenside ...b5 Counterattack", "Pressure along e-file"]
      },
      {
        id: "ben-modern-taimanov",
        name: "Modern Benoni: Taimanov / Flick-Knife Attack",
        eco: "A67",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "f4", "Bg7", "Bb5+", "Nfd7", "a4", "O-O", "Nf3", "Na6"],
        description: "White plays an ultra-aggressive setup with f4 and an immediate check on b5 to disrupt Black's coordination. Known as the 'Flick-Knife Attack' for its sharp tactical danger, Black must defend accurately before launching counterplay.",
        whitePlan: "Build a massive pawn center with e4, d5, and f4, push e5 to crack open Black's position, and launch a direct kingside mating attack.",
        blackPlan: "Block with ...Nfd7, maneuver the knight to a6-c7 or b6, castle quickly, and exploit White's overextended center with ...Re8 and ...f5.",
        keyThemes: ["Flick-Knife Bb5+ Check", "Massive f4/e4 Pawn Center", "Central e5 Rupture", "Knight Rerouting ...Na6-c7"]
      },
      {
        id: "ben-modern-four-pawns",
        name: "Modern Benoni: Four Pawns Attack",
        eco: "A68",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "f4", "Bg7", "Nf3", "O-O", "Be2", "Re8", "e5", "dxe5", "fxe5", "Ng4"],
        description: "White pushes four pawns (c4, d5, e4, f4) aggressively in the opening. An explosive theoretical battleground where White attempts to steamroll the center with an early e5 break, while Black targets the isolated e5/d5 pawns.",
        whitePlan: "Push e5 to blow open the d-file and f-file, utilizing spatial superiority to crush Black before piece coordination is established.",
        blackPlan: "Absorb the e5 push, capture with ...dxe5, place knight on g4/e5, and dismantle White's overextended center.",
        keyThemes: ["Four Pawns Storm", "Early e5 Breakthrough", "Targeting e5 Pawn", "Dynamic Minor Piece Skirmishes"]
      },
      {
        id: "ben-modern-fianchetto",
        name: "Modern Benoni: Fianchetto System",
        eco: "A62",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "Nf3", "g6", "g3", "Bg7", "Bg2", "O-O", "O-O", "a6", "a4", "Re8", "Nd2", "Nbd7"],
        description: "A solid positional antidote for White. By developing the bishop on g2, White blunts Black's g7 monster bishop, prevents dangerous kingside counterplay, and controls the center securely.",
        whitePlan: "Neutralize Black's dark-squared bishop with Bg2, maneuver Nd2-c4, clamp the queenside with a4, and grind down d6.",
        blackPlan: "Expand on the queenside with ...a6, ...Rb8, ...b5, re-route knights to e5 or c7, and activate the queen on c7.",
        keyThemes: ["Fianchetto Neutralization", "Controlled Center", "Positional d6 Pressure", "Strategic ...b5 Preparation"]
      },
      {
        id: "ben-modern-knight-tour",
        name: "Modern Benoni: Nimzowitsch Knight Tour",
        eco: "A73",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "Nf3", "g6", "Nd2", "Bg7", "Nc4", "O-O", "Bg5", "h6", "Bh4", "b6", "e3", "Ba6"],
        description: "White plays an immediate knight tour 6.Nd2 and 7.Nc4 before castling, instantly fixing Black's d6-pawn and pinning Black's f6-knight with Bg5.",
        whitePlan: "Maintain the dominating c4 knight outpost, increase pressure on d6, and restrict Black's ...b5 expansion.",
        blackPlan: "Trade off White's active dark-squared bishop with ...Ba6, challenge the c4 knight, and untangle with ...g5 and ...Ne4.",
        keyThemes: ["Early Nd2-c4 Outpost", "Bg5 Pin Pressure", "Exchange of Light Bishops (...Ba6)", "Counter-Pin Operations"]
      },
      {
        id: "ben-modern-mikenas",
        name: "Modern Benoni: Mikenas Variation",
        eco: "A65",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "f4", "Bg7", "e5", "Nfd7", "Ne4", "dxe5", "Nd6+", "Ke7", "Nxc8+", "Qxc8"],
        description: "One of the sharpest gambits in chess. White sacrifices piece development for an immediate e5 and Nd6+ check, dragging Black's king out to e7. Highly tactical and uncompromising.",
        whitePlan: "Deprive Black of castling rights, exploit open lines around the exposed black king, and attack with Nf3 and Bc4.",
        blackPlan: "Shelter king on f8/g8, utilize the extra central pawn, coordinate rooks, and dominate the dark squares.",
        keyThemes: ["Nd6+ King Eviction", "Bishop Pair Sacrifice", "King Safety in Center", "Dark-Square Domination"]
      },
      {
        id: "ben-modern-uhlmann",
        name: "Modern Benoni: Uhlmann / 8.Bg5 System",
        eco: "A72",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "Nf3", "Bg7", "Be2", "O-O", "Bg5", "h6", "Bh4", "g5", "Bg3", "Nh5"],
        description: "Named after Grandmaster Wolfgang Uhlmann, White plays Bg5 to provoke weakening kingside pawn pushes (...h6 and ...g5), while Black hunts down White's bishop pair with ...Nh5.",
        whitePlan: "Provoke ...g5 weaknesses, target the loosened f5 and h5 squares, and maintain d5/e4 central superiority.",
        blackPlan: "Capture White's dark-squared bishop with ...Nxh3/Nxg3, leverage the bishop pair, and expand rapidly on the queenside.",
        keyThemes: ["Bg5 Pin Provocation", "Hunting the Bishop with ...Nh5", "Kingside Pawn Weaknesses", "Dynamic Bishop Pair"]
      },
      {
        id: "ben-modern-pawn-storm",
        name: "Modern Benoni: Modern Kingside Pawn Storm (h3/g4)",
        eco: "A60",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "h3", "Bg7", "Bd3", "O-O", "Nf3", "b5", "Nxb5", "Re8", "Nc3", "Nxe4"],
        description: "A high-octane modern system where White prevents ...Bg4 with h3 and prepares Bd3/g4, while Black strikes aggressively with the ...b5 pawn sacrifice to blast open central lines.",
        whitePlan: "Accept the queenside pawn sacrifice, solidify the d5 pawn, castle, and launch a kingside pawn offensive.",
        blackPlan: "Sacrifice ...b5 to rip open the a1-h8 diagonal, win back central material with ...Nxe4, and dominate the e-file.",
        keyThemes: ["Thematic ...b5 Sacrifice", "Tactical ...Nxe4 Strike", "Disrupted White Center", "Open File Swarms"]
      },
      {
        id: "ben-modern-h3-bd3",
        name: "Modern Benoni: 7.h3 & 8.Bd3 System",
        eco: "A70",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "e4", "g6", "h3", "Bg7", "Bd3", "O-O", "Nf3", "a6", "a4", "Nbd7", "O-O", "Re8"],
        description: "A hyper-solid modern setup where White controls g4 with h3, develops the light bishop to d3 to guard e4, and castles calmly without giving Black easy tactical targets.",
        whitePlan: "Guard e4 solidly with Bd3, control g4, keep knight on f3, and prepare central expansion or Bf4 pressure on d6.",
        blackPlan: "Mobilize queenside with ...a6 and ...Rb8, place knights on d7 and c7/e5, and challenge White's center.",
        keyThemes: ["Control of g4 Square", "Solid Bd3 Center Guard", "Positional d6 Attack", "Queenside Flank Tension"]
      },
      {
        id: "ben-czech",
        name: "Czech Benoni: Classical Closed Setup",
        eco: "A56",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e5", "Nc3", "d6", "e4", "Be7", "Nf3", "O-O", "Be2", "Nbd7", "O-O", "Ne8", "Ne1", "Bg5"],
        description: "Black locks the center with 3...e5! creating a closed, strategic game similar to the King's Indian Defense. Black's key strategic concept is trading off the 'bad' dark-squared bishop with ...Bg5.",
        whitePlan: "Expand on queenside with a3, Rb1, b4, or on the kingside with f4, exploiting greater space.",
        blackPlan: "Trade dark bishops via ...Bg5, prepare ...f5 break on the kingside, and maneuver knights to f6 and g7.",
        keyThemes: ["Closed Locked Center", "Thematic ...Bg5 Bishop Trade", "Kingside ...f5 Breakthrough", "Positional Maneuvering"]
      },
      {
        id: "ben-czech-fianchetto",
        name: "Czech Benoni: King's Indian Formation",
        eco: "A56",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e5", "Nc3", "d6", "e4", "g6", "Nf3", "Bg7", "Be2", "O-O", "O-O", "Na6", "Bg5", "h6", "Bh4", "Qe8"],
        description: "Black combines the Czech Benoni structure with a King's Indian fianchetto on g7, aiming for a full-scale kingside attack with ...Nh5 and ...f5.",
        whitePlan: "Castle kingside, pin the knight with Bg5, and break open the queenside with b4.",
        blackPlan: "Unpin with ...Qe8, maneuver knight via Na6-c7, push ...f5, and launch a kingside pawn storm.",
        keyThemes: ["Czech-KID Hybrid", "Bg5 Pin & Unpin", "Kingside ...f5 Assault", "Na6-c7 Knight Maneuvers"]
      },
      {
        id: "ben-old-main",
        name: "Old Benoni: Main Line",
        eco: "A43",
        moves: ["d4", "c5", "d5", "d6", "e4", "Nf6", "Nc3", "g6", "Nf3", "Bg7", "Be2", "O-O", "O-O", "Na6", "Re1", "Nc7", "a4", "b6"],
        description: "Black plays 1...c5 immediately without 1...Nf6. After 2.d5, Black adopts a flexible setup with ...g6 and ...Bg7, maneuvering the knight via Na6 to c7 to support the ...b5 break.",
        whitePlan: "Control the center with e4/d5, clamp the queenside with a4, and restrain Black's pawn breaks.",
        blackPlan: "Reroute knight to c7, prepare ...b6, ...a6, and ...b5, and exert counterpressure on the e4 pawn.",
        keyThemes: ["Immediate 1...c5 Challenge", "Knight Rerouting to c7", "Thematic ...b5 Queenside Expansion", "Solid Pawn Chain"]
      },
      {
        id: "ben-old-schmid",
        name: "Old Benoni: Schmid Variation",
        eco: "A43",
        moves: ["d4", "c5", "d5", "d6", "Nc3", "g6", "e4", "Bg7", "Nf3", "Nf6", "Be2", "O-O", "O-O", "Bg4", "Nd2", "Bxe2", "Qxe2", "Nbd7"],
        description: "Black develops the light-squared bishop early with ...Bg4 to exchange it for White's f3-knight, relieving space constraints and preparing central counterplay.",
        whitePlan: "Recapture with Qxe2, utilize spatial advantage with f4 and e5, and control the d-file.",
        blackPlan: "Trade light-squared bishops, establish knights on c5 and e5, and attack White's center.",
        keyThemes: ["Exchange of Light Bishops", "Relieving Cramped Space", "Knight Outpost on c5", "Pressure on White Center"]
      },
      {
        id: "ben-snake",
        name: "Snake Benoni",
        eco: "A60",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "Bd6", "Nf3", "O-O", "g3", "Bc7", "Bg2", "d6", "O-O", "a6", "a4", "Re8"],
        description: "An eccentric yet venomous idea where Black develops the bishop to d6 and retreats it to c7 (like a coiled snake), keeping the f8-a3 diagonal active and supporting queenside expansion.",
        whitePlan: "Exploit the time Black took with the bishop maneuvers, control the e-file and d-file, and push e4.",
        blackPlan: "Place bishop on c7 to control the e5 square, push ...b5, and attack along the e-file with ...Re8.",
        keyThemes: ["Snake Bishop Maneuver (f8-d6-c7)", "Controlling e5 Diagonal", "Delayed ...b5 Break", "Surprise Practical Value"]
      },
      {
        id: "ben-benko-accepted-main",
        name: "Benko Gambit: Fully Accepted Main Line",
        eco: "A57",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "cxb5", "a6", "bxa6", "Bxa6", "Nc3", "d6", "e4", "Bxf1", "Kxf1", "g6", "g3", "Bg7", "Kg2", "O-O", "Nf3", "Nbd7"],
        description: "One of the most theoretically sound gambits in chess. Black sacrifices a pawn for long-term positional compensation: open a-file and b-file pressure, active pieces, and queenside dominance that lasts into the endgame.",
        whitePlan: "Consolidate the extra b-pawn, castle artificially with g3 and Kg2, trade pieces to reach a winning endgame.",
        blackPlan: "Double rooks on a-file and b-file, place knight on c4 via b6 or e5, and maintain endless queenside pressure.",
        keyThemes: ["Long-term Positional Compensation", "Dual Open Flank Files (a/b)", "Artificial Castling (g3/Kg2)", "Endgame Pawn Pressure"]
      },
      {
        id: "ben-benko-fianchetto",
        name: "Benko Gambit: Fianchetto Variation",
        eco: "A58",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "cxb5", "a6", "bxa6", "Bxa6", "g3", "g6", "Bg2", "d6", "Nf3", "Bg7", "O-O", "Nbd7", "Nc3", "O-O", "Rb1", "Qa5"],
        description: "White fianchettoes the bishop on g2 before playing e4, avoiding the loss of castling rights from Bxf1/Kxf1 and reinforcing the long diagonal.",
        whitePlan: "Defend b2 with Rb1, develop solidly with Bd2, and maintain the extra pawn without king exposure.",
        blackPlan: "Place queen on a5, bring rooks to fb8 and ab8, and pressure White's queenside into submission.",
        keyThemes: ["Fianchetto King Safety", "Rb1 Queenside Defense", "...Qa5 & ...Rfb8 Coordination", "Unending Positional Grind"]
      },
      {
        id: "ben-benko-half-accepted",
        name: "Benko Gambit: Half-Accepted 5.b6 System",
        eco: "A57",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "cxb5", "a6", "b6", "Qxb6", "Nc3", "d6", "e4", "g6", "Nf3", "Bg7", "Be2", "O-O", "O-O", "Nbd7"],
        description: "White refuses to open the a-file for Black by pushing 5.b6. Black regains the pawn with ...Qxb6 but White retains smooth piece development without facing heavy open-file pressure.",
        whitePlan: "Develop naturally with Be2, O-O, Nd2-c4, and exploit Black's slight queenside structural flaws.",
        blackPlan: "Place knight on c5 or b6, apply pressure on e4, and coordinate pieces for central counterplay.",
        keyThemes: ["Refusing the a-file (5.b6)", "Regaining the Gambit Pawn", "Smooth White Development", "Symmetrical Queenside Play"]
      },
      {
        id: "ben-benko-declined-nf3",
        name: "Benko Gambit Declined: 4.Nf3 System",
        eco: "A57",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "Nf3", "Bb7", "Qc2", "bxc4", "e4", "e6", "Bxc4", "exd5", "exd5", "Nxd5", "O-O", "Be7"],
        description: "White declines the gambit pawn with 4.Nf3, aiming to control the center and turn the tables with sharp central development.",
        whitePlan: "Develop rapidly with Qc2, e4, Bxc4, and attack down the open e-file against Black's uncastled king.",
        blackPlan: "Win the d5 pawn, castle quickly, and coordinate minor pieces to neutralize White's lead in development.",
        keyThemes: ["Declining the Gambit", "Central e4/d5 Expansion", "Open e-file Attack", "Tactical Bishop Pin"]
      },
      {
        id: "ben-benko-declined-e4",
        name: "Benko Gambit Declined: 4.Nd2 System",
        eco: "A57",
        moves: ["d4", "Nf6", "c4", "c5", "d5", "b5", "Nd2", "bxc4", "e4", "e6", "Bxc4", "exd5", "exd5", "d6", "Ne2", "Be7", "O-O", "O-O"],
        description: "White uses the knight on d2 to support e4 and recapture on c4, maintaining a solid pawn wedge in the center.",
        whitePlan: "Place knights on c4 and f4, maintain strong central control, and limit Black's active play.",
        blackPlan: "Target the d5 pawn, place bishop on a6 to trade White's active c4 bishop, and expand on kingside.",
        keyThemes: ["Solid Nd2 Support", "Central d5 Strongpoint", "Bishop Trade on a6", "Balanced Middlegame"]
      },
      {
        id: "ben-blumenfeld",
        name: "Blumenfeld Countergambit",
        eco: "E10",
        moves: ["d4", "Nf6", "c4", "e6", "Nf3", "c5", "d5", "b5", "Bg5", "exd5", "cxd5", "d6", "e4", "a6", "a4", "Be7", "Bxf6", "Bxf6", "axb5", "Bxb2"],
        description: "A close relative of the Benko where Black plays 2...e6 before offering the ...b5 sacrifice, seeking an overwhelming center and active piece play.",
        whitePlan: "Pin with Bg5, win the queenside pawn race, and maintain central control with e4.",
        blackPlan: "Seize the bishop pair, create active counterplay on the long diagonal (Bxb2), and push central pawns.",
        keyThemes: ["Dynamic Countergambit", "Bg5 Pin Warfare", "Bishop Pair Activity", "Queenside Tactical Skirmish"]
      },
      {
        id: "ben-franco",
        name: "Franco-Benoni Defense",
        eco: "A43",
        moves: ["d4", "e6", "c4", "c5", "d5", "exd5", "cxd5", "d6", "Nc3", "g6", "e4", "Bg7", "Nf3", "Nf6", "h3", "O-O", "Bd3", "a6", "a4", "Re8"],
        description: "Arising from move orders starting with 1.d4 e6 2.c4 c5, Black transitions into a Modern Benoni while bypassing certain sharp White setups like the Four Pawns Attack.",
        whitePlan: "Solidify with h3, Bd3, O-O, and exploit the backward d6-pawn.",
        blackPlan: "Expand with ...a6 and ...b5, exert pressure down the e-file, and activate the g7 monster.",
        keyThemes: ["Transpositional Subtlety", "Bypassing Four Pawns", "Standard Benoni Plans", "Active e-file Counterplay"]
      },
      {
        id: "ben-vulture",
        name: "Vulture Defense / Benoni Counter-Attack",
        eco: "A43",
        moves: ["d4", "c5", "d5", "Nf6", "c4", "Ne4", "Qc2", "Qa5+", "Nd2", "Nd6", "e4", "g6", "Nf3", "Bg7", "Bd3", "Na6", "O-O", "Nb4"],
        description: "A highly combative, psychological weapon invented to shock White. Black moves the knight to e4 and d6, putting pressure on c4 and preparing ...Na6-b4.",
        whitePlan: "Dislodge the d6 knight, develop pieces centrally with Bd3 and O-O, and expand.",
        blackPlan: "Create immediate tactical headaches with ...Qa5+ and ...Nb4, disrupting White's piece harmony.",
        keyThemes: ["Shock & Awe Knight Hops", "Immediate ...Qa5+ Check", "Outpost on d6/b4", "Unconventional Dynamics"]
      }
    ]
  }
];

console.log("Benoni module defined with 22 variations!");

module.exports = {
  OPENING_FAMILIES
};
