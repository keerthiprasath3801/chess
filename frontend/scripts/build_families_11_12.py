import json
import os

output_dir = os.path.join(os.path.dirname(__file__), 'openings_data')
os.makedirs(output_dir, exist_ok=True)

# ── 11. ITALIAN GAME, SCOTCH, VIENNA & KING'S GAMBIT (22 variations) ─────────
italian_open = {
  "id": "italian-open",
  "name": "Italian Game, Scotch & Open Games",
  "ecoRange": "C20–C59",
  "category": "Classical Open Games (1.e4 e5 2.Nf3 Nc6 3.Bc4 / 3.d4)",
  "summary": "The birthplace of classical chess tactics and dynamic pawn play. White targets the weak f7 square with Bc4 or blows open the center immediately with 3.d4.",
  "keyConcepts": ["Direct pressure on f7", "Giuoco Piano c3/d4 central steamroller", "Evans Gambit dynamic pawn sacrifices", "Scotch open piece warfare"],
  "famousPlayers": ["Garry Kasparov", "Magnus Carlsen", "Paul Morphy", "Hikaru Nakamura", "Alexander Morozevich"],
  "subVariations": [
    {
      "id": "it-giuoco-piano-main",
      "name": "Italian Game: Giuoco Piano Main Line (4.c3 Nf6 5.d4)",
      "eco": "C54",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "c3", "Nf6", "d4", "exd4", "cxd4", "Bb4+", "Bd2", "Bxd2+", "Nbxd2", "d5", "exd5", "Nxd5", "Qb3", "Nce7", "O-O", "O-O", "Rfe1", "c6"],
      "description": "The immortal Giuoco Piano ('Quiet Game') that erupts into sharp central tactics after 4.c3 and 5.d4.",
      "whitePlan": "Pressure d5 and f7 with Qb3 and Rfe1, use active piece play.",
      "blackPlan": "Blockade d5 with ...Nce7 and ...c6, maintain solid piece defense.",
      "keyThemes": ["Giuoco Piano c3/d4 Center", "Tactical ...Bb4+ Check", "Blockade on d5", "Harmonious Piece Parity"]
    },
    {
      "id": "it-giuoco-pianissimo",
      "name": "Italian Game: Giuoco Pianissimo (4.d3)",
      "eco": "C50",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "c3", "Nf6", "d3", "d6", "O-O", "a6", "Bb3", "Ba7", "Nbd2", "O-O", "h3", "h6", "Re1", "Re8", "Nf1", "Be6"],
      "description": "Magnus Carlsen's modern weapon: White avoids early central clashes with 4.d3 and maneuvers the knight via Nbd2-f1-g3.",
      "whitePlan": "Maneuver Nf1-g3, push d4 at the right moment, create kingside attack.",
      "blackPlan": "Retreat bishop to a7, trade light bishops with ...Be6, coordinate smoothly.",
      "keyThemes": ["Pianissimo Prophylaxis", "Knight Tour Nbd2-f1-g3", "Bishop on a7 Safety", "Deep Positional Struggle"]
    },
    {
      "id": "it-evans-gambit-accepted",
      "name": "Italian Game: Evans Gambit Accepted (4.b4 Bxb4 5.c3)",
      "eco": "C52",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "b4", "Bxb4", "c3", "Ba5", "d4", "exd4", "O-O", "Nge7", "cxd4", "d5", "exd5", "Nxd5", "Ba3", "Be6", "Bb5", "Bb4"],
      "description": "Captain William Evans's immortal gambit: White sacrifices the b4 pawn for an overwhelming center and deadly attacking diagonals (Ba3/Qb3).",
      "whitePlan": "Prevent Black from castling with Ba3, attack down the open e-file, deliver checkmate.",
      "blackPlan": "Hold onto material with ...Ba5/d5, return pawn if needed to secure king safety.",
      "keyThemes": ["Evans Gambit Sacrifice", "Ba3 Diagonal Clamp", "Deadly Kingside Assault", "Romantic Tactical Masterpiece"]
    },
    {
      "id": "it-evans-gambit-declined",
      "name": "Italian Game: Evans Gambit Declined (4...Bb6)",
      "eco": "C51",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "b4", "Bb6", "a4", "a6", "Nc3", "Nf6", "Nd5", "Nxd5", "exd5", "Nd4", "a5", "Ba7", "O-O", "d6"],
      "description": "Black declines the gambit with 4...Bb6, avoiding tactical complications while maintaining the strong bishop diagonal.",
      "whitePlan": "Expand on queenside with a4-a5, put pressure on Black's e5 pawn.",
      "blackPlan": "Maintain bishop on a7, anchor knight on d4, castle securely.",
      "keyThemes": ["Declining the Gambit", "Queenside a4-a5 Expansion", "Bishop Retreat to a7", "Solid Central Parity"]
    },
    {
      "id": "it-two-knights-fried-liver",
      "name": "Two Knights Defense: Fried Liver Attack (5.exd5 Nxd5 6.Nxf7)",
      "eco": "C57",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6", "Ng5", "d5", "exd5", "Nxd5", "Nxf7", "Kxf7", "Qf3+", "Ke6", "Nc3", "Nce7", "d4", "c6", "Bg5", "h6", "Bxe7", "Bxe7", "O-O-O", "Bg5+", "Kb1"],
      "description": "The legendary Fried Liver Attack: White sacrifices a knight on f7 to drag Black's king into the center of the board.",
      "whitePlan": "Relentlessly pin and attack Black's d5 knight with Qf3, Nc3, and O-O-O.",
      "blackPlan": "Shelter king on e6, defend d5 with ...c6 and ...Nce7, survive the storm.",
      "keyThemes": ["Fried Liver f7 Knight Sacrifice", "King Exposed on e6", "Triple Pressure on d5", "Pure Tactical Mayhem"]
    },
    {
      "id": "it-two-knights-traxler",
      "name": "Two Knights Defense: Traxler Counterattack (4...Bc5)",
      "eco": "C57",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6", "Ng5", "Bc5", "Nxf7", "Bxf2+", "Kxf2", "Nxe4+", "Kg1", "Qh4", "g3", "Nxg3", "Nxh8", "d5", "Bxd5", "Nd4"],
      "description": "Father Karel Traxler's counterattack: Black ignores the attack on f7 and sacrifices own bishop with 5...Bxf2+!",
      "whitePlan": "Survive the queen and knight checks, consolidate the huge material lead.",
      "blackPlan": "Attack White's king with ...Qh4, ...Nxg3, and ...Nd4, deliver checkmate.",
      "keyThemes": ["Traxler 5...Bxf2+ Sacrifice", "Wild King Mating Assault", "Chaos & Fireworks", "Theoretical Shock"]
    },
    {
      "id": "it-two-knights-main-line",
      "name": "Two Knights Defense: Main Line (4...d5 5.exd5 Na5)",
      "eco": "C58",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bc4", "Nf6", "Ng5", "d5", "exd5", "Na5", "Bb5+", "c6", "dxc6", "bxc6", "Be2", "h6", "Nf3", "e4", "Ne5", "Bd6", "d4", "exd3", "Nxd3", "Qc7"],
      "description": "The classical refutation of 4.Ng5. Black sacrifices a pawn with 5...Na5, gaining huge piece activity and the bishop pair.",
      "whitePlan": "Hold onto extra pawn on d3, defend king, neutralize Black's initiative.",
      "blackPlan": "Use active minor pieces on d6/c7, pressure White's kingside with ...h6/e4.",
      "keyThemes": ["Thematic 5...Na5 Sacrifice", "Queenside Pawn Destruction", "En Passant Central Dynamics", "Dynamic Initiative over Material"]
    },
    {
      "id": "scotch-mieses",
      "name": "Scotch Game: Mieses Variation (4...Nf6 5.Nxc6 bxc6)",
      "eco": "C45",
      "moves": ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Nf6", "Nxc6", "bxc6", "e5", "Qe7", "Qe2", "Nd5", "c4", "Ba6", "b3", "g6", "f4", "Bg7", "Qf2", "Nb6"],
      "description": "Jacques Mieses's sharp variation: White pushes e5 and c4 to attack the d5 knight, while Black pins with ...Ba6 and ...Qe7.",
      "whitePlan": "Advance f4, utilize kingside space advantage, attack Black's knight.",
      "blackPlan": "Pin c4 with ...Ba6, fianchetto on g7, strike centrally with ...f6 or ...d6.",
      "keyThemes": ["Mieses 4...Nf6 Main Line", "Pin with ...Ba6", "Queenside Pawn Doubling", "Dynamic Central Counterplay"]
    },
    {
      "id": "scotch-classical-4-bc5",
      "name": "Scotch Game: Classical Variation (4...Bc5)",
      "eco": "C45",
      "moves": ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bc5", "Be3", "Qf6", "c3", "Nge7", "Bc4", "O-O", "O-O", "Bb6", "Na3", "d6", "Ndb5", "Qg6", "Bxb6", "cxb6"],
      "description": "Garry Kasparov's favorite weapon: Black puts immediate pressure on the d4 knight with 4...Bc5 and 5...Qf6.",
      "whitePlan": "Target c7 with Ndb5, utilize active piece posts, attack queenside.",
      "blackPlan": "Maintain pressure on d4, retreat bishop to b6, counterattack with ...Qg6.",
      "keyThemes": ["Triple Siege on d4", "Queen to f6 Centralization", "Ndb5 Outpost Attack", "Sharp Tactical Equality"]
    },
    {
      "id": "scotch-four-knights",
      "name": "Scotch Four Knights Game (4.d4 exd4 5.Nxd4)",
      "eco": "C47",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Nc3", "Nf6", "d4", "exd4", "Nxd4", "Bb4", "Nxc6", "bxc6", "Bd3", "d5", "exd5", "cxd5", "O-O", "O-O", "Bg5", "c6", "Qf3", "Be7"],
      "description": "Solid classical opening where White blows open the center on move 4, leading to symmetrical piece play.",
      "whitePlan": "Pin knight with Bg5, attack with Qf3, control open e-file.",
      "blackPlan": "Pin knight with ...Bb4, maintain solid c6/d5 pawn center, trade pieces.",
      "keyThemes": ["Scotch Four Knights", "Central d5 Strike", "Pin with Bg5/Bb4", "Smooth Classical Battle"]
    },
    {
      "id": "scotch-gambit",
      "name": "Scotch Gambit (4.Bc4)",
      "eco": "C44",
      "moves": ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Bc4", "Nf6", "e5", "d5", "Bb5", "Ne4", "Nxd4", "Bd7", "Bxc6", "bxc6", "O-O", "Bc5", "f3", "Ng5", "f4", "Ne4"],
      "description": "White offers the d4 pawn for rapid development, leading to sharp tactical skirmishes after 5.e5 d5! 6.Bb5.",
      "whitePlan": "Push f4-f5 to trap the e4 knight, attack Black's kingside.",
      "blackPlan": "Anchor knight on e4, utilize bishop on c5, counterattack in center.",
      "keyThemes": ["Scotch Gambit 4.Bc4", "Central e5/d5 Clash", "Knight Outpost on e4", "Kingside f4-f5 Advance"]
    },
    {
      "id": "vienna-gambit",
      "name": "Vienna Game: Vienna Gambit (3.f4)",
      "eco": "C29",
      "moves": ["e4", "e5", "Nc3", "Nf6", "f4", "d5", "fxe5", "Nxe4", "Qf3", "Nxc3", "bxc3", "Be7", "d4", "O-O", "Bd3", "c5", "Ne2", "Nc6", "O-O", "c4", "Bf5"],
      "description": "A refined King's Gambit where 2.Nc3 prevents Black's ...Qh4+ defense, leading to fierce attacking chances.",
      "whitePlan": "Build broad d4/e5 center, attack down open f-file with Qf3 and Bd3.",
      "blackPlan": "Counterstrike with ...d5! and ...c5, lock queenside with ...c4.",
      "keyThemes": ["Vienna Gambit 3.f4", "Immediate ...d5 Counter-Blast", "Open f-file Attack", "Locking with ...c4"]
    },
    {
      "id": "vienna-frankenstein-dracula",
      "name": "Vienna: Frankenstein-Dracula Variation",
      "eco": "C27",
      "moves": ["e4", "e5", "Nc3", "Nf6", "Bc4", "Nxe4", "Qh5", "Nd6", "Bb3", "Nc6", "Nb5", "g6", "Qf3", "f5", "Qd5", "Qe7", "Nxc7+", "Kd8", "Nxa8", "b6"],
      "description": "The monster of opening theory: White captures the rook on a8 while Black traps the knight and builds a lethal attack.",
      "whitePlan": "Escape with the a8 knight, defend king against Black's massive pieces.",
      "blackPlan": "Trap the a8 knight, mobilize bishop pair on b7/g7, hunt White's king.",
      "keyThemes": ["Frankenstein-Dracula Madness", "Trapped Knight on a8", "Rook Sacrifice for Initiative", "King Mating Assault"]
    },
    {
      "id": "kings-gambit-accepted-cunningham",
      "name": "King's Gambit Accepted: Cunningham Defense",
      "eco": "C35",
      "moves": ["e4", "e5", "f4", "exf4", "Nf3", "Be7", "Bc4", "Bh4+", "g3", "fxg3", "O-O", "gxh2+", "Kh1", "d5", "Bxd5", "Nf6", "Bxf7+", "Kxf7", "Nxh4", "Re8"],
      "description": "Alexander Cunningham's defense: Black checks on h4 and sacrifices pawns to strip White's king barrier.",
      "whitePlan": "Use open f-file and bishop pair, attack Black's king on f7.",
      "blackPlan": "Pin with ...Re8, mobilize pieces rapidly, exploit White's exposed king.",
      "keyThemes": ["Cunningham 3...Be7 Check", "King Exposed on h1", "Bxf7+ Sacrifice", "Open Tactical Wildness"]
    },
    {
      "id": "kings-gambit-kieseritzky",
      "name": "King's Gambit: Kieseritzky Gambit (5.Ne5)",
      "eco": "C39",
      "moves": ["e4", "e5", "f4", "exf4", "Nf3", "g5", "h4", "g4", "Ne5", "Nf6", "d4", "d6", "Nd3", "Nxe4", "Bxf4", "Bg7", "c3", "O-O", "Nd2", "Re8", "Be2"],
      "description": "Lionel Kieseritzky's legendary line: White pushes 4.h4 and occupies e5 with the knight, triggering full romantic clashes.",
      "whitePlan": "Regain the f4 pawn with Bxf4, control center with d4, attack kingside.",
      "blackPlan": "Counterattack down open e-file with ...Re8, activate bishop on g7.",
      "keyThemes": ["Kieseritzky 5.Ne5 Jump", "Kingside Pawn Storm ...g5-g4", "Regaining f4 Pawn", "Romantic Era Chess"]
    },
    {
      "id": "kings-gambit-muzio",
      "name": "King's Gambit: Muzio Gambit (5.O-O)",
      "eco": "C37",
      "moves": ["e4", "e5", "f4", "exf4", "Nf3", "g5", "Bc4", "g4", "O-O", "gxf3", "Qxf3", "Qf6", "e5", "Qxe5", "Bxf7+", "Kxf7", "d4", "Qxd4+", "Be3", "Qf6", "Bxf4"],
      "description": "Paul Morphy's favorite gambit: White sacrifices an entire knight on f3 on move 5 for an unstoppable attack on f7.",
      "whitePlan": "Sacrifice on f7 and d4 to strip Black's king, deliver rapid checkmate.",
      "blackPlan": "Consolidate the massive piece lead, defend with ...Qf6, survive the onslaught.",
      "keyThemes": ["Muzio Full Knight Sacrifice", "Bxf7+ King Destruction", "Total Romantic Attacking Spirit", "Extreme Tactical Fireworks"]
    },
    {
      "id": "kings-gambit-declined-classical",
      "name": "King's Gambit Declined: Classical 2...Bc5",
      "eco": "C30",
      "moves": ["e4", "e5", "f4", "Bc5", "Nf3", "d6", "Nc3", "Nf6", "Bc4", "Nc6", "d3", "a6", "f5", "h6", "Qe2", "Nd4", "Nxd4", "Bxd4", "Bd2", "b5"],
      "description": "Black declines the gambit with 2...Bc5, preventing White from castling and controlling the g1-a7 diagonal.",
      "whitePlan": "Lock the kingside with f5, prepare queenside castling and kingside assault.",
      "blackPlan": "Anchor bishop on d4/c5, expand on queenside with ...b5, attack c2.",
      "keyThemes": ["Declining with 2...Bc5", "Diagonal Control (g1-a7)", "Kingside f5 Clamp", "Queenside Counterplay"]
    },
    {
      "id": "kings-gambit-falkbeer",
      "name": "King's Gambit: Falkbeer Countergambit (2...d5)",
      "eco": "C31",
      "moves": ["e4", "e5", "f4", "d5", "exd5", "e4", "d3", "Nf6", "dxe4", "Nxe4", "Nf3", "Bc5", "Qe2", "Bf5", "Nc3", "Qe7", "Be3", "Nxc3", "Bxc5", "Qxe2+", "Bxe2", "Nxe2", "Kxe2"],
      "description": "Ernst Falkbeer's counter-blast with 2...d5! and 3...e4, giving up a pawn to paralyze White's development.",
      "whitePlan": "Trade queens with Qe2/Be3, simplify into an advantageous endgame.",
      "blackPlan": "Use advanced e4 wedge, attack White's king with ...Bc5, dominate central files.",
      "keyThemes": ["Falkbeer 2...d5 Countergambit", "Advanced e4 Wedge", "Queen Pin Tactics", "Simplified Endgame"]
    },
    {
      "id": "center-game",
      "name": "Center Game & Danish Gambit",
      "eco": "C21",
      "moves": ["e4", "e5", "d4", "exd4", "c3", "dxc3", "Bc4", "cxb2", "Bxb2", "d5", "Bxd5", "Nf6", "Bxf7+", "Kxf7", "Qxd8", "Bb4+", "Qd2", "Bxd2+", "Nxd2", "Re8"],
      "description": "The Danish Gambit: White sacrifices two full pawns for double attacking bishops on b2 and c4, met by Black's ...d5 counter-strike.",
      "whitePlan": "Attack f7 and g7 with double fianchetto bishops, mate the black king.",
      "blackPlan": "Return pawns with ...d5! and ...Bb4+, simplify into a winning endgame.",
      "keyThemes": ["Danish Double Pawn Sac", "Monster Bishops on b2/c4", "Central ...d5 Counter-Blow", "Queen Simplification"]
    },
    {
      "id": "bishops-opening",
      "name": "Bishop's Opening: Berlin Defense",
      "eco": "C24",
      "moves": ["e4", "e5", "Bc4", "Nf6", "d3", "c6", "Nf3", "d5", "Bb3", "Bd6", "Nc3", "dxe4", "dxe4", "O-O", "O-O", "Qe7", "Bg5", "Nbd7", "Nh4", "Nc5", "Qf3"],
      "description": "White develops the bishop on move 2 to target f7 and controls d5, while Black strikes centrally with ...c6 and ...d5.",
      "whitePlan": "Pressure d5 and f7, maneuver Nh4-f5, launch kingside attack.",
      "blackPlan": "Maneuver knight via Nc5 to trade White's b3 bishop, equalize in center.",
      "keyThemes": ["Bishop's Opening 2.Bc4", "Central ...c6/...d5 Strike", "Nh4-f5 Outpost Attack", "Positional Balance"]
    },
    {
      "id": "ponziani-opening",
      "name": "Ponziani Opening (3.c3)",
      "eco": "C44",
      "moves": ["e4", "e5", "Nf3", "Nc6", "c3", "d5", "Qa4", "f6", "Bb5", "Ne7", "exd5", "Qxd5", "O-O", "Bd7", "d4", "e4", "Nfd2", "f5"],
      "description": "One of the oldest recorded chess openings (Domenico Ponziani, 18th century). White plays 3.c3 to establish a full d4 pawn center.",
      "whitePlan": "Attack with Qa4 and Bb5, exploit Black's uncastled king.",
      "blackPlan": "Strike with 3...d5!, defend with ...f6, expand centrally with ...e4.",
      "keyThemes": ["Ponziani 3.c3 Build", "Immediate ...d5 Counter-Blast", "Qa4+ Pin Tactics", "Advanced e4 Wedge"]
    },
    {
      "id": "philidor-defense",
      "name": "Philidor Defense: Hanham Variation",
      "eco": "C41",
      "moves": ["e4", "e5", "Nf3", "d6", "d4", "Nd7", "Bc4", "c6", "O-O", "Be7", "dxe5", "dxe5", "Ng5", "Bxg5", "Qh5", "Qe7", "Qxg5", "Ngf6", "Nc3", "O-O", "a4", "Re8"],
      "description": "François-André Danican Philidor's solid defense: Black supports e5 securely with ...Nd7 and ...c6.",
      "whitePlan": "Regain piece with Qh5 after Ng5, maintain spatial advantage on queenside.",
      "blackPlan": "Coordinate pieces with ...Qe7 and ...Re8, maintain an unbreakable central shield.",
      "keyThemes": ["Philidor Iron Defense", "Ng5 Tactical Sac", "Queen Recapture on g5", "Solid Classical Equality"]
    }
  ]
}

with open(os.path.join(output_dir, 'italian_open.json'), 'w') as f:
    json.dump(italian_open, f, indent=2)

print("Saved Italian & Open Games family (22 variations).")
