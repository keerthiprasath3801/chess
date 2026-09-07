import json
import os

output_dir = os.path.join(os.path.dirname(__file__), 'openings_data')
os.makedirs(output_dir, exist_ok=True)

# ── 4. FRENCH DEFENSE (18 variations) ────────────────────────────────────────
french = {
  "id": "french",
  "name": "French Defense",
  "ecoRange": "C00–C19",
  "category": "Semi-Open Games (1.e4 e6)",
  "summary": "One of the most resilient, strategic counterattacking defenses in chess. Black establishes a solid pawn chain (e6/d5) and counterstrikes against White's center with ...c5 and ...f6.",
  "keyConcepts": ["Pawn chains (e5/d4 vs e6/d5)", "Bad light-squared bishop vs active counterplay", "Thematic ...c5 and ...f6 breaks", "Attacking the d4 base pawn"],
  "famousPlayers": ["Mikhail Botvinnik", "Viktor Korchnoi", "Wolfgang Uhlmann", "Ian Nepomniachtchi", "Alexander Morozevich"],
  "subVariations": [
    {
      "id": "fr-winawer-poisoned-pawn",
      "name": "French Winawer: Poisoned Pawn Main Line",
      "eco": "C18",
      "moves": ["e4", "e6", "d4", "d5", "Nc3", "Bb4", "e5", "c5", "a3", "Bxc3+", "bxc3", "Ne7", "Qg4", "Qc7", "Qxg7", "Rg8", "Qxh7", "cxd4", "Ne2", "Nbc6", "f4", "Bd7"],
      "description": "One of the sharpest theoretical battlegrounds in chess history. White captures on g7 and h7 while Black storms the center and queenside.",
      "whitePlan": "Advance passed h-pawn (h4-h5-h6), use extra material, survive Black's initiative.",
      "blackPlan": "Rip open the center with ...cxd4, activate rooks on g-file, attack White's uncastled king.",
      "keyThemes": ["Poisoned Pawn Bloodbath", "Passed h-pawn Monster", "Open g-file Counter-Assault", "King in the Center"]
    },
    {
      "id": "fr-winawer-classical",
      "name": "French Winawer: Classical 7.Nf3 / Positional Setup",
      "eco": "C16",
      "moves": ["e4", "e6", "d4", "d5", "Nc3", "Bb4", "e5", "c5", "a3", "Bxc3+", "bxc3", "Ne7", "Nf3", "Bd7", "a4", "Qa5", "Bd2", "Nbc6", "Be2", "c4"],
      "description": "White plays posionally with Nf3 and a4, clamping Black's queenside, while Black fixes the queenside with ...c4.",
      "whitePlan": "Utilize bishop pair, prepare kingside expansion with h4 or central d5 break.",
      "blackPlan": "Lock the queenside with ...c4, trade light bishops with ...Ba4/Bb5, target c3/a4 weaknesses.",
      "keyThemes": ["Bishop Pair vs Locked Center", "Queenside Pawn Clamp ...c4", "Trading the Bad Bishop", "Positional Maneuvering"]
    },
    {
      "id": "fr-classical-steinitz",
      "name": "French Classical: Steinitz Variation (4.e5)",
      "eco": "C11",
      "moves": ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "e5", "Nfd7", "f4", "c5", "Nf3", "Nc6", "Be3", "a6", "Qd2", "b5", "a3", "Qb6", "Ne2", "c4"],
      "description": "Wilhelm Steinitz's classical spatial setup. White builds an iron fortress with e5 and f4, while Black undermines d4 with ...c5.",
      "whitePlan": "Maintain e5/d4 pawn fortress, launch kingside pawn storm with g4/f5.",
      "blackPlan": "Expand on queenside with ...b5, pressure d4 with ...Qb6, break with ...f6.",
      "keyThemes": ["Steinitz e5/f4 Pawn Fortress", "Targeting d4 Base", "Queenside ...b5 Pawn Storm", "Central ...f6 Counter-Break"]
    },
    {
      "id": "fr-classical-mccutcheon",
      "name": "French Classical: McCutcheon Variation (4.Bg5 Bb4)",
      "eco": "C12",
      "moves": ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "Bb4", "e5", "h6", "Bd2", "Bxc3", "bxc3", "Ne4", "Qg4", "g6", "Bd3", "Nxd2", "Kxd2", "c5"],
      "description": "Black pins the knight with ...Bb4 and challenges the bishop with ...h6, seizing the bishop pair and destabilizing White's king.",
      "whitePlan": "Attack kingside with Qg4, use active pieces around the center.",
      "blackPlan": "Capture White's bishop on d2, pressure d4 with ...c5 and ...Nc6.",
      "keyThemes": ["McCutcheon Pin & Challenge", "Capturing Bishop Pair", "King Exposed on d2", "Central Counter-Assault"]
    },
    {
      "id": "fr-tarrasch-open",
      "name": "French Tarrasch: Open Variation (3...c5)",
      "eco": "C07",
      "moves": ["e4", "e6", "d4", "d5", "Nd2", "c5", "exd5", "exd5", "Ngf3", "Nc6", "Bb5", "Bd6", "O-O", "Ne7", "dxc5", "Bxc5", "Nb3", "Bd6", "Re1", "O-O"],
      "description": "Black accepts an Isolated Queen Pawn (IQP) with 3...c5 in exchange for rapid piece activity and open diagonals.",
      "whitePlan": "Blockade d4 outpost with Nd4, trade pieces to exploit the isolated d5 pawn.",
      "blackPlan": "Utilize free piece diagonals, attack kingside with ...Bg4 and ...Qd6.",
      "keyThemes": ["IQP Strategic Struggle", "Nd4 Blockade", "Active Black Piece Play", "Endgame Target"]
    },
    {
      "id": "fr-tarrasch-closed",
      "name": "French Tarrasch: Closed / Leningrad (3...Nf6)",
      "eco": "C05",
      "moves": ["e4", "e6", "d4", "d5", "Nd2", "Nf6", "e5", "Nfd7", "Bd3", "c5", "c3", "Nc6", "Ne2", "cxd4", "cxd4", "f6", "exf6", "Nxf6", "Nf3", "Bd6", "O-O", "Qc7"],
      "description": "Black maintains dynamic piece harmony and undermines White's center with an immediate ...f6 break.",
      "whitePlan": "Control e5 outpost with Bf4 or Ne5, clamp Black's counterplay.",
      "blackPlan": "Use active piece posts on d6 and c7, strike with ...e5 in the center.",
      "keyThemes": ["Thematic ...f6 Break", "Control of e5 Outpost", "Central ...e5 Push", "Harmonious Piece Play"]
    },
    {
      "id": "fr-advance-nimzowitsch",
      "name": "French Advance: Nimzowitsch System (3.e5 c5 4.c3)",
      "eco": "C02",
      "moves": ["e4", "e6", "d4", "d5", "e5", "c5", "c3", "Nc6", "Nf3", "Qb6", "a3", "c4", "Nbd2", "Na5", "g3", "Bd7", "Bg2", "Ne7", "O-O", "h6"],
      "description": "Aron Nimzowitsch's hypermodern masterpiece. White builds a pawn chain e5/d4 while Black puts maximum siege on d4.",
      "whitePlan": "Expand on kingside with h4/f4, maneuver knight via f1-e3.",
      "blackPlan": "Clamp the queenside with ...c4 and ...Na5, undermine with ...f6.",
      "keyThemes": ["Nimzowitsch Pawn Chains", "Siege of d4 Base", "Queenside Clamp ...c4", "Knight Outpost on a5"]
    },
    {
      "id": "fr-advance-milner-barry",
      "name": "French Advance: Milner-Barry Gambit",
      "eco": "C02",
      "moves": ["e4", "e6", "d4", "d5", "e5", "c5", "c3", "Nc6", "Nf3", "Qb6", "Bd3", "cxd4", "cxd4", "Bd7", "O-O", "Nxd4", "Nxd4", "Qxd4", "Nc3", "a6", "Qe2", "Ne7", "Kh1", "Nc6", "f4"],
      "description": "White sacrifices the central d4 pawn for blistering development, open lines, and an all-out kingside mating attack.",
      "whitePlan": "Launch f4-f5, utilize open diagonals with Bd3 and Qe2, mate the black king.",
      "blackPlan": "Consolidate the extra pawn, return material if necessary to reach a winning endgame.",
      "keyThemes": ["d4 Pawn Sacrifice", "Fierce Kingside Attack", "Central f4-f5 Rupture", "Defensive Consolidation"]
    },
    {
      "id": "fr-exchange",
      "name": "French Exchange: Monte Carlo & Active Lines",
      "eco": "C01",
      "moves": ["e4", "e6", "d4", "d5", "exd5", "exd5", "c4", "Nf6", "Nc3", "Bb4", "Bd3", "O-O", "Ne2", "dxc4", "Bxc4", "Nbd7", "O-O", "Nb6", "Bb3", "Re8"],
      "description": "White plays an early 3.exd5 and 4.c4 to create sharp IQP imbalances instead of symmetrical stagnation.",
      "whitePlan": "Use active minor pieces, attack down e-file and a2-g8 diagonal.",
      "blackPlan": "Blockade d5, place knight on b6/d5, target the isolated c4/d4 pawns.",
      "keyThemes": ["Asymmetric Exchange System", "IQP Open Battles", "Active Piece Diagonals", "Blockade on d5"]
    },
    {
      "id": "fr-rubinstein",
      "name": "French Rubinstein: Fort Knox Variation",
      "eco": "C10",
      "moves": ["e4", "e6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Bd7", "Nf3", "Bc6", "Bd3", "Nd7", "O-O", "Ngf6", "Ng3", "Be7", "c4", "Bxf3", "Qxf3", "c6"],
      "description": "Akiba Rubinstein's solid system where Black solves the problem of the 'bad' light-squared bishop by developing it to c6.",
      "whitePlan": "Use spatial advantage with c4 and bishop pair, pressure kingside.",
      "blackPlan": "Build unbreakable Fort Knox structure with ...c6, trade minor pieces.",
      "keyThemes": ["Fort Knox Defense", "Solving the French Bishop", "Solid c6/e6 Fortress", "Strategic Neutralization"]
    },
    {
      "id": "fr-burn",
      "name": "French Burn Variation (3.Nc3 Nf6 4.Bg5 dxe4)",
      "eco": "C11",
      "moves": ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "dxe4", "Nxe4", "Be7", "Bxf6", "Bxf6", "Nf3", "Nd7", "c3", "O-O", "Bd3", "b6", "Qc2", "Bb7", "O-O-O", "Qe7"],
      "description": "Amos Burn's hybrid combining the Rubinstein pawn capture with active bishop pair counterplay.",
      "whitePlan": "Castle long, attack kingside with h4/g4, exploit open lines.",
      "blackPlan": "Fianchetto bishop on b7, break with ...c5, attack White's queen on c2.",
      "keyThemes": ["Burn Pawn Capture", "Bishop Pair Activity", "Opposite Castling Storm", "Central ...c5 Break"]
    },
    {
      "id": "fr-guimard",
      "name": "French Guimard Variation (3.Nd2 Nc6)",
      "eco": "C03",
      "moves": ["e4", "e6", "d4", "d5", "Nd2", "Nc6", "Ngf3", "Nf6", "e5", "Nd7", "Nb3", "a5", "a4", "b6", "Bb5", "Ne7", "O-O", "Ba6", "Bxa6", "Rxa6"],
      "description": "Carlos Guimard's surprising system with 3...Nc6, pressuring d4 and aiming to exchange the light bishops via ...Ba6.",
      "whitePlan": "Control center with c3, exploit Black's blocked c-pawn, attack kingside.",
      "blackPlan": "Trade light bishops with ...Ba6, maneuver knight via Ne7-f5, strike with ...c5.",
      "keyThemes": ["3...Nc6 Surprise", "Light Bishop Trade (...Ba6)", "Pressure on d4", "Solid Central Block"]
    },
    {
      "id": "fr-alapin-gambit",
      "name": "French Alapin Gambit (3.Be3)",
      "eco": "C00",
      "moves": ["e4", "e6", "d4", "d5", "Be3", "dxe4", "Nd2", "Nf6", "f3", "exf3", "Ngxf3", "Be7", "Bd3", "O-O", "Qe2", "b6", "O-O-O", "Bb7"],
      "description": "Aggressive gambit sacrificing the e4 pawn for rapid development, open f-file, and opposite castling.",
      "whitePlan": "Castle long, launch mating attack with Bg5, Ne5, and g4.",
      "blackPlan": "Consolidate the extra pawn, place bishop on b7, counterattack on c-file.",
      "keyThemes": ["3.Be3 Gambit", "Fast Piece Mobilization", "Open f-file Attack", "Opposite Castling"]
    },
    {
      "id": "fr-franco-hiva",
      "name": "French Franco-Hiva / Modern System",
      "eco": "C00",
      "moves": ["e4", "e6", "d4", "d5", "Nc3", "dxe4", "Nxe4", "Nf6", "Bg5", "Be7", "Bxf6", "gxf6", "Nf3", "b6", "Bc4", "Bb7", "Qe2", "c6", "O-O-O", "Nd7"],
      "description": "Black accepts doubled f-pawns for dynamic bishop pair and the half-open g-file.",
      "whitePlan": "Target weak f6/f7 pawns, castle long, control center.",
      "blackPlan": "Use open g-file for rook attacks, utilize bishop pair, expand on queenside.",
      "keyThemes": ["Doubled f-pawns Dynamic", "Open g-file Counterplay", "Bishop Pair Strength", "Active Defending"]
    },
    {
      "id": "fr-st-george",
      "name": "St. George / French Hybrid (1.e4 e6 2.d4 a6)",
      "eco": "B00",
      "moves": ["e4", "e6", "d4", "a6", "Nf3", "b5", "Bd3", "Bb7", "O-O", "Nf6", "Re1", "c5", "c3", "Be7", "Nbd2", "O-O", "a4", "b4"],
      "description": "Tony Miles's opening that famously defeated World Champion Anatoly Karpov in 1980.",
      "whitePlan": "Control the center with d4/e4, push a4 to shatter Black's queenside pawns.",
      "blackPlan": "Fianchetto bishop on b7, pressure e4, undermine center with ...c5 and ...b4.",
      "keyThemes": ["Tony Miles Karpov Refutation", "Queenside Pawn Roll", "Fianchetto on b7", "Psychological Warfare"]
    },
    {
      "id": "fr-classical-4-bg5",
      "name": "French Classical: 4.Bg5 Be7 Main Line",
      "eco": "C14",
      "moves": ["e4", "e6", "d4", "d5", "Nc3", "Nf6", "Bg5", "Be7", "e5", "Nfd7", "Bxe7", "Qxe7", "f4", "O-O", "Nf3", "c5", "Qd2", "Nc6", "O-O-O", "a6"],
      "description": "The traditional classical main line where White exchanges bishops on e7 and builds a kingside offensive.",
      "whitePlan": "Castle queenside, push g4/f5, attack the castled black king.",
      "blackPlan": "Strike with ...c5, expand on queenside with ...b5, attack along c-file.",
      "keyThemes": ["Exchange on e7", "f4/e5 Central Wedge", "Queenside Counter-Storm", "Opposite Castling Battle"]
    },
    {
      "id": "fr-tarrasch-guimard-hybrid",
      "name": "French Tarrasch: 3.Nd2 c5 4.exd5 Qxd5",
      "eco": "C07",
      "moves": ["e4", "e6", "d4", "d5", "Nd2", "c5", "exd5", "Qxd5", "Ngf3", "cxd4", "Bc4", "Qd6", "O-O", "Nf6", "Nb3", "Nc6", "Nbxd4", "Nxd4", "Nxd4", "a6"],
      "description": "Black recaptures on d5 with the queen, establishing active queen centralization without an IQP.",
      "whitePlan": "Develop active minor pieces on c4/d4, attack down the d-file.",
      "blackPlan": "Solidify with ...a6 and ...Qc7, develop light-squared bishop to d7/b7.",
      "keyThemes": ["Queen Centralization on d5", "Avoidance of IQP", "Harmonious Black Setup", "Positional Balance"]
    },
    {
      "id": "fr-advance-paulsen",
      "name": "French Advance: Paulsen 5...Bd7 System",
      "eco": "C02",
      "moves": ["e4", "e6", "d4", "d5", "e5", "c5", "c3", "Nc6", "Nf3", "Bd7", "Be2", "Nge7", "Na3", "cxd4", "cxd4", "Nf5", "Nc2", "Qb6", "O-O", "Be7"],
      "description": "Black develops 5...Bd7 immediately to maneuver the f8 knight via e7 to f5, putting relentless pressure on d4.",
      "whitePlan": "Defend d4 with Nc2, develop light-squared bishop, maintain space on kingside.",
      "blackPlan": "Triple attack on d4 with ...Qb6, ...Nc6, ...Nf5, challenge with ...f6.",
      "keyThemes": ["Early 5...Bd7 Development", "Knight to f5 Maneuver", "Pressure on d4 Base", "Smooth Coordination"]
    }
  ]
}

with open(os.path.join(output_dir, 'french.json'), 'w') as f:
    json.dump(french, f, indent=2)

print("Saved French family (18 variations).")
