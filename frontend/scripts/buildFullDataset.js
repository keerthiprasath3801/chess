const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '../src/data/openingsMasterData.ts');

const script = `const fs = require('fs');
const path = require('path');

console.log("Generating complete Openings & GM Games master dataset...");

// Opening Families configuration
const OPENING_FAMILIES = [
  {
    id: "sicilian",
    name: "Sicilian Defense",
    ecoRange: "B20–B99",
    category: "Semi-Open Games (1.e4 c5)",
    summary: "The most combative, asymmetric, and popular response to 1.e4. Black fights for central control from the flank and creates winning chances without settling for symmetry.",
    keyConcepts: ["Open c-file for Black", "Queenside minority/counterattack", "d4 pawn break vs d6/e6 pawn structures", "Dynamic imbalances and sharp tactics"],
    famousPlayers: ["Garry Kasparov", "Bobby Fischer", "Magnus Carlsen", "Maxime Vachier-Lagrave", "Judit Polgar"],
    subVariations: [
      {
        id: "sic-najdorf",
        name: "Sicilian Najdorf: English Attack / Main Lines",
        eco: "B90",
        moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be6", "f3", "Be7", "Qd2", "O-O", "O-O-O", "Nbd7", "g4", "b5"],
        description: "The Rolls-Royce of chess openings. With 5...a6 Black controls b5, prepares queenside expansion with ...b5, and keeps maximum flexibility. White attacks on the kingside with f3/g4/h4 while Black storms the queenside.",
        whitePlan: "Castle queenside (O-O-O), launch pawn storm with f3, g4, h4, and open the h-file or breakthrough on d5.",
        blackPlan: "Expand on queenside with ...b5, place rooks on c8, exert pressure on c-file, and counterstrike in the center with ...d5.",
        keyThemes: ["Queenside Expansion", "Opposite Castling Storm", "Exchange Sacrifice on c3", "Central d5 Break"]
      },
      {
        id: "sic-dragon",
        name: "Sicilian Dragon: Yugoslav Attack",
        eco: "B78",
        moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "g6", "Be3", "Bg7", "f3", "O-O", "Qd2", "Nc6", "Bc4", "Bd7", "O-O-O", "Rc8", "Bb3", "Ne5", "h4", "h5"],
        description: "The fierce Dragon variation where Black fianchettoes the dark-squared bishop on g7. In the Yugoslav Attack, White plays Be3, f3, Qd2, Bc4, and castles long to execute a lethal kingside mating attack with h4-h5 and Bh6.",
        whitePlan: "Trade off Black's dark-squared bishop via Bh6, open the h-file with h4-h5, sacrifice material to checkmate the black king.",
        blackPlan: "Counterattack along the c-file with ...Rc8, ...Nc6-e5-c4, sacrifice the exchange on c3 (...Rxc3) to destroy White's king barrier.",
        keyThemes: ["Fianchetto Monster Bishop", "Yugoslav Attack Race", "Rook Sac on c3", "Dark-Square King Attack"]
      },
      {
        id: "sic-scheveningen",
        name: "Sicilian Scheveningen: Classical & Keres Attack",
        eco: "B80",
        moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "e6", "Be2", "a6", "O-O", "Be7", "f4", "O-O", "Kh1", "Qc7", "a4", "Nc6", "Be3", "Re8"],
        description: "Black builds a classical 'small center' pawn formation with d6 and e6, controlling central squares while preparing ...Qc7 and ...Nc6. A cornerstone of Garry Kasparov's World Championship victories against Karpov.",
        whitePlan: "Aim for kingside pressure via f4-f5 or g4 (Keres Attack), or pressure the d6 pawn.",
        blackPlan: "Maintain flexible center, coordinate pieces on c-file and e-file, strike back with ...e5 or ...d5 at the opportune moment.",
        keyThemes: ["Small Center (d6/e6)", "Flexible Defense", "Keres Attack", "Central Counter-Break"]
      },
      {
        id: "sic-sveshnikov",
        name: "Sicilian Sveshnikov: Chelyabinsk Variation",
        eco: "B33",
        moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "e5", "Ndb5", "d6", "Bg5", "a6", "Na3", "b5", "Nd5", "Be7", "Bxf6", "Bxf6", "c3", "O-O", "Nc2", "Bg5"],
        description: "A dynamic hypermodern powerhouse where Black willingly accepts a backward d6-pawn and a hole on d5 in exchange for huge active piece play, bishop pair, and queenside expansion with ...f5.",
        whitePlan: "Anchor the d5 outpost knight, target the weak d6 backward pawn, restrict Black's f5 break.",
        blackPlan: "Use the dark-squared bishop pair, push ...f5 to create kingside initiative, coordinate pieces actively.",
        keyThemes: ["d5 Outpost Battle", "Backward d6 Pawn Dynamic", "Bishop Pair Activity", "...f5 Pawn Strike"]
      },
      {
        id: "sic-classical",
        name: "Sicilian Classical: Richter-Rauzer Attack",
        eco: "B60",
        moves: ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "Nc6", "Bg5", "e6", "Qd2", "a6", "O-O-O", "Bd7", "f4", "Be7", "Nf3", "b5", "Bxf6", "gxf6"],
        description: "Black develops knights naturally with 2...d6 and 5...Nc6. In the Richter-Rauzer (6.Bg5), White pins the knight and attacks Black's pawn structure, leading to unbalanced, razor-sharp tactical struggles.",
        whitePlan: "Double Black's f-pawns with Bxf6, castle long, and push e5 or f5 to blast open lines.",
        blackPlan: "Accept doubled pawns for dynamic bishop pair and open g-file, counterattack vigorously on the queenside.",
        keyThemes: ["Richter-Rauzer Pin", "Doubled f-pawns Imbalance", "Open g-file Counterplay", "Central Friction"]
      },
      {
        id: "sic-taimanov",
        name: "Sicilian Taimanov: Bastrikov System",
        eco: "B46",
        moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "Nc6", "Nc3", "a6", "Be3", "Nf6", "Qd2", "Bb4", "f3", "d5", "a3", "Ba5", "O-O-O", "O-O"],
        description: "Named after Mark Taimanov, this system emphasizes smooth piece coordination without committing the d-pawn early. Black plays ...Nc6, ...a6, and ...Qc7 to control key squares flexibly.",
        whitePlan: "Employ the English Attack setup with Be3/Qd2/f3/g4 or clamp the center with c4.",
        blackPlan: "Quickly develop with ...Qc7, ...Nf6, and strike with ...d5 in the center before White organizes an assault.",
        keyThemes: ["Flexible Pawn Center", "Early ...a6 and ...Qc7", "Central ...d5 Break", "Fast Dark-Square Development"]
      },
      {
        id: "sic-kan",
        name: "Sicilian Kan: Paulsen System",
        eco: "B42",
        moves: ["e4", "c5", "Nf3", "e6", "d4", "cxd4", "Nxd4", "a6", "Bd3", "Nf6", "O-O", "Qc7", "Qe2", "d6", "c4", "g6", "Nc3", "Bg7", "Nf3", "O-O"],
        description: "An ultra-flexible hedgehog-style system with an early 2...e6 and 4...a6. Black waits to see White's setup before committing other pawns, often transitioning into a resilient Hedgehog defense.",
        whitePlan: "Establish a Maróczy Bind with c4 and d4 to suffocate Black's expansion.",
        blackPlan: "Build Hedgehog fortress with ...b6, ...Bb7, ...d6, ...Be7, preparing thematic ...b5 or ...d5 breaks.",
        keyThemes: ["Hedgehog Formation", "Flexible Move Orders", "Preventing Nb5 with ...a6", "Sudden Central Ruptures"]
      },
      {
        id: "sic-accelerated-dragon",
        name: "Sicilian Accelerated Dragon: Maróczy Bind",
        eco: "B38",
        moves: ["e4", "c5", "Nf3", "Nc6", "d4", "cxd4", "Nxd4", "g6", "c4", "Bg7", "Be3", "Nf6", "Nc3", "O-O", "Be2", "d6", "O-O", "Bd7", "Qd2", "Nxd4", "Bxd4", "Bc6"],
        description: "Black plays 4...g6 immediately, avoiding 2...d6 so as to threaten an immediate ...d7-d5 in one move. White often chooses the Maróczy Bind (c4) for spatial dominance.",
        whitePlan: "Clamp down on d5 with c4 and e4 pawns, restrict Black's breaks, squeeze in the endgame.",
        blackPlan: "Trade off minor pieces to relieve cramped space, pressure e4 pawn with ...Bc6, prepare ...f5 or ...b5 counterplay.",
        keyThemes: ["Maróczy Bind Pawn Clamp", "One-Step ...d5 Ambition", "Pressure on Long Diagonal", "Minor Piece Exchanges"]
      },
      {
        id: "sic-alapin",
        name: "Sicilian Alapin: 2.c3 System",
        eco: "B22",
        moves: ["e4", "c5", "c3", "d5", "exd5", "Qxd5", "d4", "Nf6", "Nf3", "e6", "Be2", "Nc6", "O-O", "cxd4", "cxd4", "Be7", "Nc3", "Qd6", "Be3", "O-O"],
        description: "A solid positional weapon where White plays 2.c3 to establish a full pawn center with d4. Black typically counters centrally with 2...d5 or 2...Nf6, leading to IQP (Isolated Queen Pawn) battles.",
        whitePlan: "Obtain an isolated queen pawn on d4, use active piece play, open c- and e-files to attack Black's kingside.",
        blackPlan: "Blockade the d4 pawn on d5, exchange pieces to reach favorable endgames against the isolated pawn.",
        keyThemes: ["Isolated Queen's Pawn (IQP)", "Solid Pawn Center", "Central Strike with 2...d5", "Blockade Strategy"]
      },
      {
        id: "sic-closed",
        name: "Closed Sicilian & Grand Prix Attack",
        eco: "B23",
        moves: ["e4", "c5", "Nc3", "Nc6", "f4", "g6", "Nf3", "Bg7", "Bc4", "e6", "f5", "Nge7", "fxe6", "fxe6", "d3", "O-O", "O-O", "d5", "Bb3", "h6"],
        description: "White bypasses 2.Nf3 and 3.d4, aiming for an aggressive kingside flank assault with f4 (Grand Prix) or a closed maneuvering battle with g3 and Bg2.",
        whitePlan: "Attack Black's king with f4-f5, Qe1-Qh4, Bh6, and kingside piece swarms.",
        blackPlan: "Seize the center with ...e6 and ...d5, expand on queenside with ...b5, exploit White's weakened squares.",
        keyThemes: ["Grand Prix f4-f5 Thrust", "Opposing Flank Attacks", "Center Strike with ...d5", "Kingside Defense"]
      },
      {
        id: "sic-rossolimo",
        name: "Sicilian Rossolimo & Moscow Attack",
        eco: "B51",
        moves: ["e4", "c5", "Nf3", "d6", "Bb5+", "Bd7", "Bxd7+", "Qxd7", "O-O", "Nc6", "c3", "Nf6", "Re1", "e6", "d4", "cxd4", "cxd4", "d5", "e5", "Ne4"],
        description: "White plays an early Bb5(+) to avoid massive open Sicilian theoretical battles, aiming to damage Black's pawn structure or secure easy central control. Magnus Carlsen's primary weapon in his 2018 World Championship match.",
        whitePlan: "Control the center with c3/d4, trade bishops to weaken Black's complex, create kingside pawn majorities.",
        blackPlan: "Occupy central outposts like e4 with knights, challenge White's pawn chain with ...f6, play on queenside.",
        keyThemes: ["Anti-Sicilian Strategy", "Pawn Structure Damage (Bxc6)", "Central Clamp with c3/d4", "Knight Outpost on e4"]
      }
    ]
  },
  {
    id: "ruy-lopez",
    name: "Ruy Lopez (Spanish Opening)",
    ecoRange: "C60–C99",
    category: "Open Games (1.e4 e5)",
    summary: "The ultimate classic of chess strategy. 1.e4 e5 2.Nf3 Nc6 3.Bb5 puts long-term positional pressure on Black's center and king, creating profound middlegame strategic battles.",
    keyConcepts: ["Pressure on c6 defender of e5", "Central pawn tension (c3 and d4)", "Spanish Bishop on b3/c2", "Maneuvers with Nbd2-f1-g3/e3"],
    famousPlayers: ["Garry Kasparov", "Anatoly Karpov", "Bobby Fischer", "Magnus Carlsen", "Fabiano Caruana"],
    subVariations: [
      {
        id: "ruy-chigorin",
        name: "Ruy Lopez: Closed Chigorin Variation",
        eco: "C99",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "Na5", "Bc2", "c5", "d4", "Qc7", "Nbd2", "cxd4", "cxd4", "Nc6"],
        description: "The grand classical main line named after Mikhail Chigorin. Black reroutes the knight to a5 to preserve the e5 stronghold and strikes with ...c5, leading to rich strategic maneuvers.",
        whitePlan: "Maintain central grip with d4 and Bc2, maneuver knight Nbd2-f1-g3, launch kingside offensive.",
        blackPlan: "Exert pressure on d4, trade on d4 to activate c-file, redeploy Nc6 and Bd7 for active counterplay.",
        keyThemes: ["Spanish Bishop on c2", "Central Pawn Climax", "Knight Maneuver Nbd2-f1-g3", "Queenside Counterplay"]
      },
      {
        id: "ruy-zaitsev",
        name: "Ruy Lopez: Zaitsev Variation",
        eco: "C92",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "Bb7", "d4", "Re8", "Nbd2", "Bf8", "a4", "h6", "Bc2", "exd4", "cxd4", "Nb4"],
        description: "Created by Igor Zaitsev, this system puts immediate hypermodern pressure on e4 via ...Bb7 and ...Re8/Bf8. Anatoly Karpov's top choice against Garry Kasparov in their epic matches.",
        whitePlan: "Guard e4, preserve light-squared bishop with Bc2, break open center or build kingside attack.",
        blackPlan: "Coordinate pieces against e4, jump knight to b4, activate rooks and bishop pair.",
        keyThemes: ["Hypermodern Pressure on e4", "Zaitsev Bishop on b7", "Knight Invasion on b4", "Re8/Bf8 Coordination"]
      },
      {
        id: "ruy-breyer",
        name: "Ruy Lopez: Breyer Variation",
        eco: "C95",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "Nb8", "d4", "Nbd7", "Nbd2", "Bb7", "Bc2", "Re8", "Nf1", "Bf8", "Ng3", "g6"],
        description: "Gyula Breyer's ingenious retreat 9...Nb8 reroutes the knight to d7, reinforcing e5 while liberating the c-pawn for ...c5. Known for its rock-solid solidity and flexibility.",
        whitePlan: "Maneuver knight to f1-g3, push a4 to challenge queenside, probe Black's kingside weaknesses.",
        blackPlan: "Build resilient defensive web with ...Nbd7, ...Bb7, ...Bf8, ...g6, prepare central counterstrike.",
        keyThemes: ["Profound Knight Retreat (9...Nb8)", "Reinforced e5 Defense", "Hedgehog-like Flexibility", "Long Strategic Maneuvering"]
      },
      {
        id: "ruy-marshall",
        name: "Ruy Lopez: Marshall Attack",
        eco: "C89",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "O-O", "c3", "d5", "exd5", "Nxd5", "Nxe5", "Nxe5", "Rxe5", "c6", "d4", "Bd6", "Re1", "Qh4", "g3", "Qh3"],
        description: "Frank Marshall's legendary pawn sacrifice 8...d5! Black sacrifices the e5 pawn for ferocious attacking initiative against White's kingside. Considered one of the most potent weapons at top GM level.",
        whitePlan: "Consolidate extra pawn, defend against kingside threats (Qh3/Bg4), trade queens to win the endgame.",
        blackPlan: "Unleash devastating piece assault with Qh3, Bd6, Bg4, Rd8, hunting White's king.",
        keyThemes: ["Legendary Pawn Sac 8...d5", "Fierce Kingside Attack", "Queen on h3", "Light-Square Domination"]
      },
      {
        id: "ruy-berlin",
        name: "Ruy Lopez: Berlin Defense (Berlin Wall)",
        eco: "C67",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "Nf6", "O-O", "Nxe4", "d4", "Nd6", "Bxc6", "dxc6", "dxe5", "Nf5", "Qxd8+", "Kxd8", "Nc3", "Ke8", "h3", "h5", "Bf4", "Be7", "Rad1", "Be6"],
        description: "Vladimir Kramnik used the 'Berlin Wall' to dethrone Garry Kasparov in 2000. Black gives up castling rights and queen on move 8 to achieve an impregnable endgame with the bishop pair.",
        whitePlan: "Exploit 4-vs-3 kingside pawn majority, restrict Black's bishop pair, push e6 when tactical opportunities arise.",
        blackPlan: "Use the bishop pair, activate king on d8/e8, hold the kingside pawn structure with ...h5.",
        keyThemes: ["Queenless Middlegame/Endgame", "Bishop Pair vs Pawn Majority", "Berlin Wall Fortress", "King Safety on d8"]
      },
      {
        id: "ruy-open",
        name: "Ruy Lopez: Open Variation",
        eco: "C80",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Nxe4", "d4", "b5", "Bb3", "d5", "dxe5", "Be6", "c3", "Bc5", "Nbd2", "O-O", "Bc2", "Bf5", "Nb3", "Bg6"],
        description: "Black boldly grabs the e4 pawn on move 5 and locks down the center with ...d5 and ...Be6, resulting in open, highly tactical piece play rather than slow closed maneuvering.",
        whitePlan: "Regain central initiative, exploit the pin on d5, attack Black's knight on e4 and bishop on e6.",
        blackPlan: "Anchor knight on e4, activate dark-squared bishop actively on c5, counterattack in the center.",
        keyThemes: ["Early Capture on e4", "Open Center Dynamic", "Piece Activity on c5", "Central Tension on d5"]
      },
      {
        id: "ruy-exchange",
        name: "Ruy Lopez: Exchange Variation",
        eco: "C68",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Bxc6", "dxc6", "O-O", "f6", "d4", "exd4", "Nxd4", "c5", "Nb3", "Qxd1", "Rxd1", "Bd7", "Be3", "b6", "Nc3", "O-O-O"],
        description: "Championed by World Champions Emanuel Lasker and Bobby Fischer. White trades bishop for knight on c6 on move 4, creating an asymmetric endgame pawn structure with a 4-vs-3 kingside majority.",
        whitePlan: "Advance kingside majority (f4/e5), exchange pieces into winning king-and-pawn endgame.",
        blackPlan: "Utilize bishop pair in open board, prevent White's pawn breakthroughs, counterattack along open d-file.",
        keyThemes: ["Healthy Kingside Pawn Majority", "Bishop Pair Compensation", "Fischer Endgame Technique", "Asymmetric Pawn Structures"]
      },
      {
        id: "ruy-steinitz",
        name: "Ruy Lopez: Modern Steinitz Defense",
        eco: "C71",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "d6", "c3", "Bd7", "d4", "Nf6", "O-O", "Be7", "Re1", "O-O", "Nbd2", "Re8", "Nf1", "Bf8", "Ng3", "g6"],
        description: "Black strengthens e5 with ...a6 and ...d6, solidifying the central chain. Endorsed by Capablanca, Keres, and Smyslov for its rock-solid reliability.",
        whitePlan: "Establish strong d4 center, pressure e5 pawn, maneuver knight to g3 and f5.",
        blackPlan: "Defend e5 stubbornly, coordinate pieces behind solid pawn shield, prepare counterattack.",
        keyThemes: ["Solid Central Bastion", "Pawn Chain Defense", "Knight Maneuver Ng3-f5", "Bishop Preservation on f8"]
      },
      {
        id: "ruy-schliemann",
        name: "Ruy Lopez: Schliemann (Jaenisch) Gambit",
        eco: "C63",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "f5", "Nc3", "fxe4", "Nxe4", "d5", "Nxe5", "dxe4", "Nxc6", "Qg5", "Qe2", "Nf6", "f4", "Qxf4", "d4", "Qh4+", "g3", "Qh3"],
        description: "An ultra-aggressive counter-gambit where Black plays 3...f5! to blast open lines against White's center immediately. Championed by Teimour Radjabov and Levon Aronian.",
        whitePlan: "Defend king against tactical strikes, exploit Black's exposed e-file and king diagonal.",
        blackPlan: "Unleash rapid piece activity with Qg5/Qh4, exert pressure on White's uncastled king.",
        keyThemes: ["Aggressive 3...f5 Counter-Strike", "Wild Tactical Fireworks", "Early Queen Infiltration (Qg5/Qh3)", "King Walk Danger"]
      },
      {
        id: "ruy-archangel",
        name: "Ruy Lopez: Archangel & Neo-Archangel",
        eco: "C78",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "b5", "Bb3", "Bc5", "c3", "d6", "a4", "Rb8", "d4", "Bb6", "axb5", "axb5", "Na3", "O-O", "Nxb5", "Bg4"],
        description: "Black aggressively develops the dark-squared bishop outside the pawn chain to c5 before castling. Alexei Shirov and Magnus Carlsen have scored brilliant victories with this system.",
        whitePlan: "Undermine queenside with a4, push d4 to challenge the bishop on c5, exploit pins.",
        blackPlan: "Pin White's knight with ...Bg4, maintain active diagonal pressure on f2, counterstrike in center.",
        keyThemes: ["Active Bishop on c5", "Sharp Queenside Tension (a4 vs b5)", "Pin with ...Bg4", "Dynamic Piece Battles"]
      }
    ]
  },
  {
    id: "french",
    name: "French Defense",
    ecoRange: "C00–C19",
    category: "Semi-Open Games (1.e4 e6)",
    summary: "A fortress-like, counterattacking opening where Black establishes a rock-solid pawn chain (d5/e6) and attacks White's pawn base on d4 with ...c5 and ...f6.",
    keyConcepts: ["Pawn Chains (e5 vs d5/e6)", "Battle for the d4 Pawn Base", "French Bad Light-Squared Bishop", "Flank Breaks (...c5 and ...f6)"],
    famousPlayers: ["Mikhail Botvinnik", "Viktor Korchnoi", "Alexander Morozevich", "Ian Nepomniachtchi", "Ding Liren"],
    subVariations: [
      {
        id: "fr-winawer",
        name: "French Winawer: Poisoned Pawn & Main Line",
        eco: "C18",
        moves: ["e4", "e6", "d4", "d5", "Nc3", "Bb4", "e5", "c5", "a3", "Bxc3+", "bxc3", "Ne7", "Qg4", "Qc7", "Qxg7", "Rg8", "Qxh7", "cxd4", "Ne2", "Nbc6", "f4", "Bd7", "Qd3", "dxc3"],
        description: "The sharpest battleground in the French Defense. Black pins White's knight on c3 with 3...Bb4, doubles White's c-pawns, and counterattacks White's center while White ravages Black's kingside in the Poisoned Pawn variation.",
        whitePlan: "Ravage Black's kingside with Qg4/Qxg7, push passed h-pawn (h4-h5-h6), use bishop pair.",
        blackPlan: "Destroy White's center with ...cxd4, invade along open c- and g-files, dominate light squares.",
        keyThemes: ["Doubled c-pawns vs Bad Bishop", "Poisoned Pawn Sac (Qxg7)", "Rapid h-pawn Promotion Race", "Open c-file and g-file Dynamics"]
      },
      {
        id: "fr-classical",
        name: "French Classical: Steinitz & McCutcheon",
        eco: "C14",
        moves: ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "Be7", "e5", "Nfd7", "Bxe7", "Qxe7", "f4", "O-O", "Nf3", "c5", "Qd2", "Nc6", "O-O-O", "a6", "dxc5", "Nxc5"],
        description: "Black develops naturally with 3...Nf6. White pins with 4.Bg5, leading after exchanges to classic pawn-chain warfare where White castles long to launch an attack and Black races on the queenside.",
        whitePlan: "Castle queenside, push f5 or g4, exert pressure on Black's kingside.",
        blackPlan: "Pound White's center with ...c5, maneuver knight to c5, attack on queenside with ...b5.",
        keyThemes: ["Pawn Chain Wedge on e5", "Opposite-Side Castling Race", "Knight Outpost on c5", "Break on f6 vs f5"]
      },
      {
        id: "fr-tarrasch",
        name: "French Tarrasch: 3.Nd2 System",
        eco: "C07",
        moves: ["e4", "e6", "d4", "d5", "Nd2", "c5", "exd5", "Qxd5", "Ngf3", "cxd4", "Bc4", "Qd6", "O-O", "Nf6", "Nb3", "Nc6", "Nbxd4", "Nxd4", "Nxd4", "a6", "Re1", "Qc7", "Bb3", "Bd6"],
        description: "White plays 3.Nd2 to avoid the Winawer pin (...Bb4) and support the center with c3. Anatoly Karpov's weapon of choice, yielding a pleasant positional grip.",
        whitePlan: "Control key squares without pawn weaknesses, develop smoothly, target d5/e6 squares.",
        blackPlan: "Strike immediately with 3...c5, isolate White's d-pawn or liquidate the center for free piece play.",
        keyThemes: ["Solid 3.Nd2 Setup", "3...c5 Central Strike", "Active Queen Maneuver (Qd6/Qc7)", "Piece Harmony"]
      },
      {
        id: "fr-advance",
        name: "French Advance: Nimzowitsch System",
        eco: "C02",
        moves: ["e4", "e6", "d4", "d5", "e5", "c5", "c3", "Nc6", "Nf3", "Qb6", "a3", "c4", "Nbd2", "Na5", "g3", "Bd7", "Bg2", "Ne7", "O-O", "h6", "Re1", "O-O-O"],
        description: "Aron Nimzowitsch's favorite French line. White locks the center with 3.e5, establishing a space advantage, while Black immediately sieges the d4 pawn with ...c5, ...Nc6, and ...Qb6.",
        whitePlan: "Reinforce d4 pawn chain, clamp down with a3/b4, transfer knights to kingside via f1-e3.",
        blackPlan: "Pile maximum pressure on d4 and b2 with ...Qb6 and ...Na5, undermine chain with ...f6.",
        keyThemes: ["Locked Pawn Center", "Pawn Chain Base Siege (d4/c3)", "Queen Pressure on b6", "Breakthrough with ...f6"]
      },
      {
        id: "fr-exchange",
        name: "French Exchange Variation",
        eco: "C01",
        moves: ["e4", "e6", "d4", "d5", "exd5", "exd5", "Nf3", "Nf6", "Bd3", "Bd6", "O-O", "O-O", "Bg5", "Bg4", "Nbd2", "Nbd7", "c3", "c6", "Qc2", "Qc7", "Rfe1", "Rfe8"],
        description: "White trades immediately with 3.exd5, creating a completely symmetrical pawn structure. Despite its quiet reputation, GMs use it to play for subtle positional outposts and open-file dominance.",
        whitePlan: "Fight for control of the only open e-file, place knight on e5, generate kingside pressure.",
        blackPlan: "Mirror White's setup, contest the e-file, trade heavy pieces into equal or favorable endings.",
        keyThemes: ["Symmetrical Center", "Battle for the Open e-file", "Knight Outpost on e4/e5", "Endgame Technique"]
      },
      {
        id: "fr-rubinstein",
        name: "French Rubinstein & Burn Variation",
        eco: "C10",
        moves: ["e4", "e6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Nd7", "Nf3", "Ngf6", "Nxf6+", "Nxf6", "Bd3", "c5", "dxc5", "Bxc5", "O-O", "O-O", "Bg5", "Be7", "Qe2", "Qc7", "Rad1", "b6"],
        description: "Akiba Rubinstein's solid variation where Black surrenders the center with 3...dxe4 to develop pieces freely without getting suffocated by White's e5 pawn chain.",
        whitePlan: "Use spatial advantage, position pieces actively toward Black's kingside, push c4.",
        blackPlan: "Develop smoothly with ...Nd7-f6, ...b6, ...Bb7, and break with ...c5 to equalize completely.",
        keyThemes: ["Central Surrender (3...dxe4)", "Free Piece Development", "Queenside Fianchetto (...b6/Bb7)", "Solid Pawn Structure"]
      },
      {
        id: "fr-mccutcheon",
        name: "French McCutcheon Variation",
        eco: "C12",
        moves: ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "Bb4", "e5", "h6", "Bd2", "Bxc3", "bxc3", "Ne4", "Qg4", "g6", "Bd3", "Nxd2", "Kxd2", "c5", "Nf3", "Nc6"],
        description: "An aggressive counter-pin where Black answers 4.Bg5 with 4...Bb4! Black challenges White's bishop, eliminates the knight on c3, and creates chaotic unbalanced structures.",
        whitePlan: "Take advantage of Black's weakened dark squares on kingside, mobilize doubled c-pawns, attack with h4-h5.",
        blackPlan: "Exploit White's displaced king on d2, attack the d4/c3 pawn chain with ...c5, coordinate on dark squares.",
        keyThemes: ["Counter-Pin 4...Bb4", "Weakened King on d2", "Dark-Square Compensation", "Kingside g6/h6 Pawn Structure"]
      },
      {
        id: "fr-guimard",
        name: "French Guimard Variation",
        eco: "C04",
        moves: ["e4", "e6", "d4", "d5", "Nd2", "Nc6", "Ngf3", "Nf6", "e5", "Nd7", "Be2", "f6", "exf6", "Qxf6", "Nf1", "Bd6", "Ne3", "O-O", "O-O", "Qg6"],
        description: "Black answers the Tarrasch (3.Nd2) with the unorthodox 3...Nc6, attacking d4 directly and quickly undermining White's e5 wedge with ...f6.",
        whitePlan: "Defend d4 pawn, maneuver knight Nd2-f1-e3 to guard key squares, maintain central presence.",
        blackPlan: "Blast open the f-file with ...f6, swing the queen to f6/g6, build active kingside pressure.",
        keyThemes: ["Early 3...Nc6", "Fast ...f6 Undermining", "Queen Lift (Qf6-g6)", "Pressure on d4"]
      },
      {
        id: "fr-burn",
        name: "French Burn Variation",
        eco: "C11",
        moves: ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "dxe4", "Nxe4", "Be7", "Bxf6", "Bxf6", "Nf3", "O-O", "c3", "Nd7", "Bd3", "e5", "Qc2", "exd4", "O-O-O", "dxc3"],
        description: "Amos Burn's practical hybrid between the Classical and Rubinstein variations. Black trades on e4, exchanges bishops on f6, and achieves active piece play.",
        whitePlan: "Castle queenside, push kingside attack, exert central pressure on d4/e4.",
        blackPlan: "Counterstrike in center with ...e5, maintain bishop pair or active minor piece placement.",
        keyThemes: ["Controlled Liquidation", "Bxf6 Exchange", "Central ...e5 Strike", "Balanced Counterplay"]
      },
      {
        id: "fr-fort-knox",
        name: "French Fort Knox Variation",
        eco: "C10",
        moves: ["e4", "e6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Bd7", "Nf3", "Bc6", "Bd3", "Nd7", "O-O", "Ngf6", "Ng3", "Bxf3", "Qxf3", "c6", "c3", "Be7", "Re1", "O-O"],
        description: "Nicknamed 'Fort Knox' for its ultra-defensive reputation. Black solves the problem of the bad French bishop by developing it via ...Bd7 to ...Bc6, neutralizing White's initiative.",
        whitePlan: "Retain spatial advantage, position queen on f3, seek piece breakthroughs on kingside.",
        blackPlan: "Build impenetrable defensive barrier, exchange attacking minor pieces, achieve solid equality.",
        keyThemes: ["Fort Knox Wall", "French Bishop Solved (...Bc6)", "Piece Simplification", "Rock-Solid Castle"]
      }
    ]
  },
  {
    id: "caro-kann",
    name: "Caro-Kann Defense",
    ecoRange: "B10–B19",
    category: "Semi-Open Games (1.e4 c6)",
    summary: "One of the most solid and reliable defenses in chess history. Black supports ...d5 with ...c6, ensuring a sound pawn structure while successfully developing the light-squared bishop outside the pawn chain.",
    keyConcepts: ["Solid, pristine pawn structure", "Light-squared bishop outside pawn chain", "Endgame superiority for Black", "Pawn breaks with ...c5 and ...e5"],
    famousPlayers: ["Anatoly Karpov", "José Raúl Capablanca", "Mikhail Botvinnik", "Alireza Firouzja", "Viswanathan Anand"],
    subVariations: [
      {
        id: "caro-classical",
        name: "Caro-Kann Classical: Capablanca Variation",
        eco: "B18",
        moves: ["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Bf5", "Ng3", "Bg6", "h4", "h6", "Nf3", "Nd7", "h5", "Bh7", "Bd3", "Bxd3", "Qxd3", "e6", "Bd2", "Ngf6", "O-O-O", "Be7"],
        description: "The absolute standard of the Caro-Kann. Black activates the bishop to f5 before playing ...e6, exchanges light-squared bishops on d3, and creates an unshakeable defensive fortress.",
        whitePlan: "Castle queenside (O-O-O), gain kingside space with h4-h5, target Black's king with pieces.",
        blackPlan: "Castle kingside or queenside, counterattack in the center with ...c5, maneuver knight to d5/e4.",
        keyThemes: ["Active Bishop on f5/g6", "White Space Gain (h4-h5)", "Trade of Light-Square Bishops", "Pristine Pawn Structure"]
      },
      {
        id: "caro-advance",
        name: "Caro-Kann Advance: Shirov & Short Systems",
        eco: "B12",
        moves: ["e4", "c6", "d4", "d5", "e5", "Bf5", "Nf3", "e6", "Be2", "c5", "Be3", "Qb6", "Nc3", "Nc6", "O-O", "Qxb2", "Qe1", "cxd4", "Bxd4", "Nxd4", "Nxd4", "Bb4"],
        description: "White grabs space with 3.e5. Black brings the bishop to f5 and immediately counters with ...c5. The modern battlefield of elite chess featuring wild theoretical lines.",
        whitePlan: "Sacrifice b2 pawn for massive initiative, open lines on Black's uncastled king, use knight on d4.",
        blackPlan: "Grab loose pawns, counterattack with ...Qb6 and ...Bb4, simplify into winning endgame.",
        keyThemes: ["Sharp Advance Wedge (e5)", "Poisoned b2 Pawn Battles", "Counterstrike with ...c5", "Tactical Pin on c3"]
      },
      {
        id: "caro-panov",
        name: "Caro-Kann Panov-Botvinnik Attack",
        eco: "B13",
        moves: ["e4", "c6", "d4", "d5", "exd5", "cxd5", "c4", "Nf6", "Nc3", "e6", "Nf3", "Bb4", "cxd5", "Nxd5", "Bd2", "Nc6", "Bd3", "O-O", "O-O", "Be7", "a3", "Nf6", "Bg5", "Bd7"],
        description: "Mikhail Botvinnik's aggressive system transforming the quiet Caro-Kann into an open, dynamic Isolated Queen's Pawn (IQP) middlegame with attacking chances for White.",
        whitePlan: "Use the isolated d4 pawn to dominate central squares, launch kingside piece assault via Bd3/Qc2/Ne5.",
        blackPlan: "Blockade d5 square, trade pieces to enter favorable endgame against the isolated d-pawn.",
        keyThemes: ["Isolated Queen's Pawn (IQP)", "Rapid Piece Mobilization", "d5 Square Blockade", "Kingside Attack vs Endgame Edge"]
      },
      {
        id: "caro-steinitz",
        name: "Caro-Kann Steinitz (Modern) 4...Nd7",
        eco: "B17",
        moves: ["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Nd7", "Ng5", "Ngf6", "Bd3", "e6", "N1f3", "Bd6", "Qe2", "h6", "Ne4", "Nxe4", "Qxe4", "Qc7", "Qg4", "Kf8", "O-O", "b6"],
        description: "Black plays 4...Nd7 to prepare ...Ngf6 without allowing double pawns (Nxf6+ Nxf6). Features deep positional maneuvering and sharp sacrifices (Nxe6!).",
        whitePlan: "Probe e6 with knight jump to g5, sacrifice on e6 (Nxe6!), prevent Black from castling comfortably.",
        blackPlan: "Defend e6 securely, relocate king safely to f8/g8, develop with ...b6 and ...Bb7.",
        keyThemes: ["Knight Jump to g5", "Sacrifice on e6 Threat", "Solid ...Nd7 Setup", "King Safety on f8/g8"]
      },
      {
        id: "caro-fantasy",
        name: "Caro-Kann Fantasy / Tartakower Variation (3.f3)",
        eco: "B12",
        moves: ["e4", "c6", "d4", "d5", "f3", "dxe4", "fxe4", "e5", "Nf3", "exd4", "Bc4", "Be6", "Bxe6", "fxe6", "O-O", "Nf6", "e5", "Nd5", "Ng5", "Qd7", "Qg4"],
        description: "Savielly Tartakower's aggressive weapon: White supports e4 with 3.f3, aiming to maintain a massive classical two-pawn center (e4 and d4) at the cost of slight king exposure.",
        whitePlan: "Build overwhelming pawn center, open f-file for kingside attack, target f7 square with Bc4 and Ng5.",
        blackPlan: "Strike at White's center with 3...e5! or 3...dxe4, exploit the exposed a7-g1 diagonal.",
        keyThemes: ["Aggressive 3.f3 Pawn Setup", "Open f-file Kingside Attack", "Central Counter-Break 3...e5", "f7 Square Vulnerability"]
      },
      {
        id: "caro-two-knights",
        name: "Caro-Kann Two Knights Variation",
        eco: "B11",
        moves: ["e4", "c6", "Nc3", "d5", "Nf3", "Bg4", "h3", "Bxf3", "Qxf3", "e6", "d4", "Nf6", "Bd3", "dxe4", "Nxe4", "Nxd4", "Qd1", "Nf6", "O-O", "Nbd7", "Bf4", "Be7"],
        description: "White develops both knights early before committing central pawns. Black usually pins with ...Bg4, leading to bishop pair vs solid pawn structure struggles.",
        whitePlan: "Acquire the bishop pair with h3/Qxf3, establish active center with d4, attack on kingside.",
        blackPlan: "Solidify pawn structure with ...e6, trade central pawns to open lines, maintain granite defense.",
        keyThemes: ["Quick Minor Piece Development", "Early ...Bg4 Pin", "Bishop Pair vs Solid Pawns", "Central Tension"]
      },
      {
        id: "caro-exchange",
        name: "Caro-Kann Exchange Variation",
        eco: "B13",
        moves: ["e4", "c6", "d4", "d5", "exd5", "cxd5", "Bd3", "Nc6", "c3", "Nf6", "Bf4", "Bg4", "Qb3", "Qc8", "Nd2", "e6", "Ngf3", "Be7", "O-O", "O-O", "Rfe1", "Bh5"],
        description: "Bobby Fischer and Garry Kasparov favored this line for White to play for quiet, long-term queenside minority attacks and e5 square outposts.",
        whitePlan: "Prevent Black from activating bishop freely with Bd3/Bf4, use knight on e5, push b4-b5 (minority attack).",
        blackPlan: "Activate light-squared bishop with ...Bg4-h5-bg6, counter on queenside or center.",
        keyThemes: ["Carlsbad-like Pawn Structure", "Minority Attack on Queenside", "Bishop Placement on d3/f4", "Battle for e5/e4"]
      },
      {
        id: "caro-bronstein",
        name: "Caro-Kann Bronstein-Larsen Variation",
        eco: "B16",
        moves: ["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Nf6", "Nxf6+", "gxf6", "c3", "Bf5", "Nf3", "Nd7", "g3", "Qc7", "Bg2", "O-O-O", "O-O", "e5", "Nh4", "Be6"],
        description: "David Bronstein and Bent Larsen played 4...Nf6 5.Nxf6+ gxf6!, accepting shattered kingside pawns in exchange for the open g-file and intense dynamic counterplay.",
        whitePlan: "Target Black's doubled and isolated f-pawns, castle kingside, seize central outposts.",
        blackPlan: "Castle queenside (O-O-O), use open g-file for rook attack against White's king, push ...e5.",
        keyThemes: ["Shattered Kingside Pawns (...gxf6)", "Open g-file Attack", "Queenside Castling Shelter", "Dynamic Imbalance"]
      },
      {
        id: "caro-korchnoi",
        name: "Caro-Kann Korchnoi (Tartakower) 5...exf6",
        eco: "B15",
        moves: ["e4", "c6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Nf6", "Nxf6+", "exf6", "c3", "Bd6", "Bd3", "O-O", "Qc2", "Re8+", "Ne2", "h5", "O-O", "Nd7", "Be3", "Nf8", "Rae1", "Be6"],
        description: "Viktor Korchnoi's favorite solid system. Black recaptures 5...exf6 to accelerate piece development and lock down the e5 square permanently.",
        whitePlan: "Play for queenside pawn majority in the endgame, control the center with c3/d4.",
        blackPlan: "Coordinate pieces on open e-file, place knight on f8-g6, play for active king safety.",
        keyThemes: ["Rapid Kingside Castling", "e5 Square Lockout", "Pawn Majority Dynamic", "Knight Relocation to f8"]
      },
      {
        id: "caro-gurgenidze",
        name: "Caro-Kann Gurgenidze System",
        eco: "B15",
        moves: ["e4", "c6", "d4", "d5", "Nc3", "g6", "e5", "h5", "f4", "Nh6", "Nf3", "Bg4", "Be3", "e6", "Be2", "Nf5", "Bf2", "Be7", "O-O", "Nd7"],
        description: "Bukhuti Gurgenidze introduced this hybrid setup where Black plays ...g6 and ...h5, blockading White's kingside and planting a monster knight on f5.",
        whitePlan: "Break Black's blockade with c4 or f5, expand on queenside, utilize spatial superiority.",
        blackPlan: "Establish iron grip on f5 with ...Nh6-f5, trade light-squared bishop, build fortress.",
        keyThemes: ["Knight Outpost on f5", "Blockade on Kingside (...h5)", "Fortress Defense", "Hybrid Caro-Pirc Setup"]
      }
    ]
  }
];

console.log("Compiling dataset with move purpose engine...");
`;

fs.writeFileSync(path.join(__dirname, 'buildFullDataset.js'), script, 'utf8');
console.log("Created buildFullDataset.js");
