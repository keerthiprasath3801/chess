import json
import os

output_dir = os.path.join(os.path.dirname(__file__), 'openings_data')
os.makedirs(output_dir, exist_ok=True)

# ── 6. QUEEN'S GAMBIT & SLAV DEFENSE (22 variations) ─────────────────────────
queens_gambit = {
  "id": "queens-gambit",
  "name": "Queen's Gambit & Slav Defense",
  "ecoRange": "D06–D69",
  "category": "Closed Games (1.d4 d5 2.c4)",
  "summary": "The ultimate classical battle for central supremacy. White offers a temporary wing pawn on c4 to divert Black's d5 pawn, gaining full central control.",
  "keyConcepts": ["c4 pawn challenge against d5", "Carlsbad pawn structure & minority attack", "Solid Slav c6/d5 pawn chain", "Meran & Botvinnik tactical explosions"],
  "famousPlayers": ["Garry Kasparov", "Magnus Carlsen", "Alexander Alekhine", "Vladimir Kramnik", "Levon Aronian"],
  "subVariations": [
    {
      "id": "qgd-orthodox",
      "name": "Queen's Gambit Declined: Orthodox Defense",
      "eco": "D60",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Be7", "e3", "O-O", "Nf3", "Nbd7", "Rc1", "c6", "Bd3", "dxc4", "Bxc4", "Nd5", "Bxe7", "Qxe7", "O-O", "Nxc3", "Rxc3", "e5"],
      "description": "Capablanca's freeing maneuver in the Orthodox Defense: Black plays ...Nd5 and exchanges minor pieces, breaking out with ...e5.",
      "whitePlan": "Maintain central pressure, target d5/e5, use open c-file.",
      "blackPlan": "Execute Capablanca freeing maneuver (...Nd5/Nxc3), break with ...e5.",
      "keyThemes": ["Orthodox Classical Defense", "Capablanca Freeing Maneuver", "Central ...e5 Breakthrough", "Simplification to Equality"]
    },
    {
      "id": "qgd-tartakower",
      "name": "Queen's Gambit Declined: Tartakower System (7...b6)",
      "eco": "D58",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Be7", "e3", "O-O", "Nf3", "h6", "Bh4", "b6", "Be2", "Bb7", "Bxf6", "Bxf6", "cxd5", "exd5", "b4", "c6", "O-O", "Qd6"],
      "description": "Savielly Tartakower's modern setup favored by Kasparov and Karpov. Black fianchettoes on b7 to solve the problem of the light-squared bishop.",
      "whitePlan": "Execute minority attack with b4-b5, target Black's hanging pawns on c6/d5.",
      "blackPlan": "Harmonize pieces on b7/f6, break centrally with ...c5 or create kingside counterplay.",
      "keyThemes": ["Tartakower 7...b6 Setup", "Bishop on b7 Solution", "Hanging Pawns Battle", "White Minority Attack"]
    },
    {
      "id": "qgd-lasker",
      "name": "Queen's Gambit Declined: Lasker Defense (7...Ne4)",
      "eco": "D56",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Be7", "e3", "O-O", "Nf3", "h6", "Bh4", "Ne4", "Bxe7", "Qxe7", "cxd5", "Nxc3", "bxc3", "exd5", "Qb3", "Rd8", "c4", "dxc4", "Bxc4", "Nc6"],
      "description": "Emanuel Lasker's famous freeing defense: 7...Ne4 forces the exchange of two sets of minor pieces, solving all opening problems.",
      "whitePlan": "Pressure d5 pawn with Qb3, maintain c4/d4 central presence.",
      "blackPlan": "Simplify position, coordinate knight on c6 to target White's bishop on c4.",
      "keyThemes": ["Lasker Freeing Idea (7...Ne4)", "Two Minor Piece Trades", "Harmonious Simplification", "Solid Endgame Parity"]
    },
    {
      "id": "qgd-cambridge-springs",
      "name": "Queen's Gambit Declined: Cambridge Springs Defense",
      "eco": "D52",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Nbd7", "e3", "c6", "Nf3", "Qa5", "Nd2", "Bb4", "Qc2", "O-O", "Be2", "e5", "dxe5", "Ne4", "Ndxe4", "dxe4"],
      "description": "Dynamic counterattacking weapon. Black pins the knight with ...Qa5 and ...Bb4, counter-pinning White's Bg5.",
      "whitePlan": "Unpin with Nd2 and Qc2, capture on e5, maintain central stability.",
      "blackPlan": "Exploit pin on c3 knight with ...Ne4, win the bishop pair or break centrally.",
      "keyThemes": ["Cambridge Springs Pin (...Qa5)", "Counter-Pinning Tactics", "Central ...e5 Strike", "Double Knight Forks"]
    },
    {
      "id": "qgd-exchange-carlsbad",
      "name": "Queen's Gambit Declined: Exchange Variation (Carlsbad)",
      "eco": "D35",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "cxd5", "exd5", "Bg5", "c6", "e3", "Be7", "Bd3", "Nbd7", "Qc2", "O-O", "Nge2", "Re8", "O-O", "Nf8", "f3", "g6"],
      "description": "The quintessential Carlsbad structure. White plays for either the Minority Attack (b4-b5) on the queenside or the e4 central steamroller.",
      "whitePlan": "Advance b4-b5 to create weaknesses on c6, or prepare e3-e4 central breakthrough.",
      "blackPlan": "Anchor knight on f8/e6, organize kingside counterplay with ...Nh5 and ...f5.",
      "keyThemes": ["Carlsbad Pawn Structure", "Minority Attack (b4-b5)", "Central e4 Breakthrough", "Knight Tour to f8/e6"]
    },
    {
      "id": "qgd-tarrasch",
      "name": "Queen's Gambit Declined: Tarrasch Defense (3...c5)",
      "eco": "D32",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "c5", "cxd5", "exd5", "Nf3", "Nc6", "g3", "Nf6", "Bg2", "Be7", "O-O", "O-O", "Bg5", "cxd4", "Nxd4", "h6", "Be3", "Re8"],
      "description": "Siegbert Tarrasch's fighting defense. Black accepts an Isolated Queen Pawn (IQP) for rapid piece development and active central play.",
      "whitePlan": "Blockade d4 outpost, trade minor pieces, target the isolated d5 pawn.",
      "blackPlan": "Use active piece posts on e8/g4, attack White's king, break with ...d4.",
      "keyThemes": ["Tarrasch IQP System", "Active Piece Activity", "Blockade on d4", "Central ...d4 Breakthrough"]
    },
    {
      "id": "qgd-semi-tarrasch",
      "name": "Queen's Gambit Declined: Semi-Tarrasch Defense",
      "eco": "D41",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Nf3", "c5", "cxd5", "Nxd5", "e4", "Nxc3", "bxc3", "cxd4", "cxd4", "Bb4+", "Bd2", "Bxd2+", "Qxd2", "O-O", "Bc4", "Nc6", "O-O", "b6"],
      "description": "Black recaptures on d5 with the knight (avoiding the IQP) and forces White into a classical broad center (d4/e4).",
      "whitePlan": "Advance d5 to blast open central files, attack the black king with Bc4/Qd3.",
      "blackPlan": "Fianchetto bishop on b7, pressure d4 pawn with ...Rc8 and ...Na5, counterattack.",
      "keyThemes": ["Broad White Center (d4/e4)", "Semi-Tarrasch Knight Capture", "Fianchetto on b7", "Pressure on d4 Pawn"]
    },
    {
      "id": "qgd-vienna",
      "name": "Queen's Gambit Declined: Vienna Variation",
      "eco": "D39",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Nf3", "dxc4", "e4", "Bb4", "Bg5", "c5", "Bxc4", "cxd4", "Nxd4", "Bxc3+", "bxc3", "Qa5", "Bb5+", "Bd7", "Bxf6", "gxf6"],
      "description": "Levon Aronian's favorite high-voltage opening. Black gives up the dark bishop to tear apart White's pawn structure.",
      "whitePlan": "Use powerful bishop pair and open b-file, target Black's shattered f-pawns.",
      "blackPlan": "Attack White's queen with ...Qa5, exploit shattered c3 pawn, utilize open g-file.",
      "keyThemes": ["Vienna Variation Tactics", "Double Pawn Structure Damage", "Sharp Queen Sorties", "Dynamic Imbalance"]
    },
    {
      "id": "qga-classical",
      "name": "Queen's Gambit Accepted: Classical Main Line",
      "eco": "D27",
      "moves": ["d4", "d5", "c4", "dxc4", "Nf3", "Nf6", "e3", "e6", "Bxc4", "c5", "O-O", "a6", "a4", "Nc6", "Qe2", "cxd4", "Rd1", "Be7", "exd4", "O-O", "Nc3", "Nb4"],
      "description": "Black accepts the gambit pawn temporarily, strikes back with ...c5 and ...a6, and blockades the d5 square with ...Nb4.",
      "whitePlan": "Use active d4 IQP pieces, attack down e-file, push d5 at opportune moment.",
      "blackPlan": "Anchor knight on b4/d5, trade pieces, exploit the isolated d4 pawn.",
      "keyThemes": ["QGA Classical System", "Blockade on d5/b4", "Active Piece Defense", "Endgame Target"]
    },
    {
      "id": "qga-central",
      "name": "Queen's Gambit Accepted: Central Variation (3.e4)",
      "eco": "D20",
      "moves": ["d4", "d5", "c4", "dxc4", "e4", "e5", "Nf3", "exd4", "Bxc4", "Nc6", "O-O", "Be6", "Bxe6", "fxe6", "Qb3", "Qd7", "Qxb7", "Rb8", "Qa6", "Nf6"],
      "description": "White seizes the full center with 3.e4 immediately, leading to wild tactical scrambles after 3...e5! and 7.Qb3.",
      "whitePlan": "Grab b7 with Qb3, attack weak e6 pawn, maintain active piece play.",
      "blackPlan": "Trap queen or gain immense piece development with ...Rb8 and ...Bd6, attack e4.",
      "keyThemes": ["Central 3.e4 Push", "Immediate ...e5 Counterstrike", "Queen Raid on b7", "Rapid Black Mobilization"]
    },
    {
      "id": "slav-classical",
      "name": "Slav Defense: Classical Main Line (5...Bf5)",
      "eco": "D18",
      "moves": ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "dxc4", "a4", "Bf5", "e3", "e6", "Bxc4", "Bb4", "O-O", "O-O", "Qe2", "Nbd7", "e4", "Bg6", "Bd3", "Bh5"],
      "description": "The gold standard of the Slav Defense. Black develops the bishop to f5 before playing ...e6, achieving solid equality.",
      "whitePlan": "Build broad center with e4, push e5, launch kingside attack.",
      "blackPlan": "Pin f3 knight with ...Bh5, counterstrike in the center with ...e5 or ...c5.",
      "keyThemes": ["Slav Classical 5...Bf5", "Solid c6/e6 Fortress", "Pin with ...Bh5", "Central ...e5 Counterplay"]
    },
    {
      "id": "slav-chebanenko",
      "name": "Slav Defense: Chebanenko Variation (4...a6)",
      "eco": "D15",
      "moves": ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "a6", "c5", "Bf5", "Bf4", "Nbd7", "h3", "e6", "e3", "Be7", "Be2", "O-O", "O-O", "h6", "b4", "Ne4"],
      "description": "Vecheslav Chebanenko's hyper-flexible move 4...a6, keeping all options open and preventing White from easily clamping the queenside.",
      "whitePlan": "Lock the queenside with c5 and b4, expand on the kingside.",
      "blackPlan": "Anchor knight on e4, maneuver light bishop to f5, strike with ...e5 or ...b6.",
      "keyThemes": ["Chebanenko 4...a6 Flexibility", "Locked c5/b4 Queenside", "Knight Outpost on e4", "Thematic ...b6/e5 Breaks"]
    },
    {
      "id": "slav-schlechter",
      "name": "Slav Defense: Schlechter Variation (4...g6)",
      "eco": "D94",
      "moves": ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "g6", "e3", "Bg7", "Be2", "O-O", "O-O", "Nbd7", "cxd5", "cxd5", "Qb3", "e6", "Bd2", "Ne4", "Rfc1", "Nxd2", "Nxd2"],
      "description": "Carl Schlechter's hybrid setup combining the Slav pawn chain with a King's Indian fianchetto on g7.",
      "whitePlan": "Control open c-file with Rfc1, target d5 pawn with Qb3.",
      "blackPlan": "Anchor knight on e4, eliminate White's active bishop, maintain rock-solid structure.",
      "keyThemes": ["Schlechter Fianchetto Slav", "Unbreakable Pawn Structure", "Open c-file Control", "Positional Grind"]
    },
    {
      "id": "semi-slav-meran",
      "name": "Semi-Slav Defense: Meran Variation",
      "eco": "D48",
      "moves": ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "e6", "e3", "Nbd7", "Bd3", "dxc4", "Bxc4", "b5", "Bd3", "a6", "e4", "c5", "e5", "cxd4", "Nxb5", "axb5", "exf6", "gxf6", "O-O", "Qb6"],
      "description": "The Meran Variation is one of the most deeply analyzed, double-edged openings in chess history. Black storms the queenside with ...b5 and ...c5.",
      "whitePlan": "Sacrifice on b5 or e5 to blast open central lines, mate the black king.",
      "blackPlan": "Solidify the extra b5 pawn, use bishop pair on b7/d6, counterattack.",
      "keyThemes": ["Meran Tactical Fireworks", "Queenside ...b5/...c5 Explosion", "Central e5 Rupture", "Sharp Calculation"]
    },
    {
      "id": "semi-slav-botvinnik",
      "name": "Semi-Slav: Botvinnik Variation (5.Bg5 dxc4 6.e4 b5)",
      "eco": "D44",
      "moves": ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "e6", "Bg5", "dxc4", "e4", "b5", "e5", "h6", "Bh4", "g5", "Nxg5", "hxg5", "Bxg5", "Nbd7", "g3", "Bb7", "Bg2", "Qb6", "exf6", "O-O-O"],
      "description": "Mikhail Botvinnik's legendary theoretical monster. Black sacrifices pieces, ruins kingside pawns, and castles long into pure tactical insanity.",
      "whitePlan": "Regain piece with exf6, use central space, attack down open files.",
      "blackPlan": "Castle long, place bishop on b7, push passed c- and d-pawns to victory.",
      "keyThemes": ["Botvinnik Variation Madness", "Piece Sacrifice on g5", "Long-Castled King", "Dangerous Passed Pawns"]
    },
    {
      "id": "semi-slav-moscow",
      "name": "Semi-Slav: Moscow Variation (5.Bg5 h6 6.Bxf6)",
      "eco": "D43",
      "moves": ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "e6", "Bg5", "h6", "Bxf6", "Qxf6", "e3", "Nd7", "Bd3", "dxc4", "Bxc4", "g6", "O-O", "Bg7", "e4", "e5", "d5", "Nb6"],
      "description": "White avoids the Botvinnik madness by capturing 6.Bxf6. Black gets the bishop pair in exchange for White's central space.",
      "whitePlan": "Advance e4 and d5, exploit spatial advantage, control light squares.",
      "blackPlan": "Fianchetto bishop on g7, maneuver knight to b6, use the powerful bishop pair.",
      "keyThemes": ["Moscow 6.Bxf6 Trade", "Bishop Pair vs Central Space", "Central d5 Push", "Knight to b6 Outpost"]
    },
    {
      "id": "semi-slav-anti-moscow",
      "name": "Semi-Slav: Anti-Moscow Gambit (6.Bh4 dxc4)",
      "eco": "D43",
      "moves": ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "e6", "Bg5", "h6", "Bh4", "dxc4", "e4", "g5", "Bg3", "b5", "Be2", "Bb7", "h4", "g4", "Ne5", "h5"],
      "description": "White declines the bishop trade with 6.Bh4, provoking Black's ...g5 thrust and leading to sharp, uncompromising struggles.",
      "whitePlan": "Blast open kingside with h4, utilize Ne5 outpost, attack Black's uncastled king.",
      "blackPlan": "Hold onto the extra c4/b5 pawns, defend kingside with ...h5, counter on queenside.",
      "keyThemes": ["Anti-Moscow Gambit", "Double Flank Pawn Storms", "Ne5 Outpost Attack", "Extreme Dynamic Tension"]
    },
    {
      "id": "albin-countergambit",
      "name": "Albin Countergambit (2...e5)",
      "eco": "D08",
      "moves": ["d4", "d5", "c4", "e5", "dxe5", "d4", "Nf3", "Nc6", "a3", "Bg4", "Nbd2", "Qe7", "h3", "Bxf3", "Nxf3", "O-O-O", "Bf4", "h6"],
      "description": "Adolf Albin's venomous gambit with 2...e5! and the advanced d4 wedge, containing the famous Lasker Trap underpromotions.",
      "whitePlan": "Develop solidly with g3/Bg2, surround and eliminate the d4 pawn wedge.",
      "blackPlan": "Castle queenside, use active piece play, regain the e5 pawn or mate on kingside.",
      "keyThemes": ["Albin Advanced d4 Wedge", "Lasker Trap Danger", "Queenside Castling Attack", "Dynamic Sacrifices"]
    },
    {
      "id": "chigorin-defense",
      "name": "Chigorin Defense (2...Nc6)",
      "eco": "D07",
      "moves": ["d4", "d5", "c4", "Nc6", "Nf3", "Bg4", "cxd5", "Bxf3", "gxf3", "Qxd5", "e3", "e5", "Nc3", "Bb4", "Bd2", "Bxc3", "bxc3", "Qd6", "Rb1", "O-O-O"],
      "description": "Mikhail Chigorin's hyper-active defense, developing the knight to c6 to block the c-pawn but putting immediate pressure on d4.",
      "whitePlan": "Utilize bishop pair and broad center, attack Black's queenside down b-file.",
      "blackPlan": "Castle long, pin with ...Bb4, pressure White's d4 center with ...Qd6 and ...f5.",
      "keyThemes": ["Chigorin 2...Nc6 Challenge", "Bishop Pair vs Lead in Development", "Opposite Castling", "Center Pressure"]
    },
    {
      "id": "baltic-defense",
      "name": "Baltic Defense (2...Bf5)",
      "eco": "D06",
      "moves": ["d4", "d5", "c4", "Bf5", "cxd5", "Bxb1", "Qa4+", "c6", "Rxb1", "Qxd5", "e3", "Nd7", "Nf3", "e6", "Bc4", "Qf5", "Ra1", "Nb6"],
      "description": "Black develops the light-squared bishop outside the pawn chain immediately on move 2.",
      "whitePlan": "Exploit Black's missing light-squared bishop, attack b7 with Qb3.",
      "blackPlan": "Centralize queen with ...Qd5/Qf5, maneuver knight to b6, control light squares.",
      "keyThemes": ["Immediate 2...Bf5", "Queen Fork on a4", "Attacking b7 Weakness", "Quick Piece Regrouping"]
    },
    {
      "id": "marshall-defense",
      "name": "Marshall Defense (2...Nf6)",
      "eco": "D06",
      "moves": ["d4", "d5", "c4", "Nf6", "cxd5", "Nxd5", "Nf3", "e6", "e4", "Nf6", "Nc3", "c5", "d5", "exd5", "e5", "Ne4", "Qxd5", "Nxc3", "Qxd8+", "Kxd8", "bxc3"],
      "description": "Frank Marshall's provocative response, giving White a full pawn center in exchange for rapid piece play.",
      "whitePlan": "Occupy center with e4/d5, exploit spatial dominance in queenless middlegame.",
      "blackPlan": "Trade queens, target White's c3 pawn, activate minor pieces.",
      "keyThemes": ["Provocative 2...Nf6", "Full Central Occupation (e4/d5)", "Queenless Endgame", "Piece Activity vs Space"]
    },
    {
      "id": "qgd-manhattan",
      "name": "Queen's Gambit Declined: Manhattan / Westphalia",
      "eco": "D51",
      "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Nbd7", "e3", "Bb4", "cxd5", "exd5", "Bd3", "c5", "Nge2", "c4", "Bc2", "O-O", "O-O", "Qa5"],
      "description": "A hybrid of the Cambridge Springs and Nimzo-Indian where Black pins the c3 knight and locks the queenside with ...c4.",
      "whitePlan": "Maneuver Nge2-g3, prepare e4 central breakthrough.",
      "blackPlan": "Lock queenside with ...c4, place queen on a5, attack along e-file.",
      "keyThemes": ["Manhattan ...Bb4 Pin", "Queenside ...c4 Lock", "Central e4 Preparation", "Strategic Tension"]
    }
  ]
}

with open(os.path.join(output_dir, 'queens_gambit.json'), 'w') as f:
    json.dump(queens_gambit, f, indent=2)

print("Saved Queen's Gambit family (22 variations).")
