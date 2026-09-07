import json
import os

output_dir = os.path.join(os.path.dirname(__file__), 'openings_data')
os.makedirs(output_dir, exist_ok=True)

# ── 7. KING'S INDIAN DEFENSE (20 variations) ─────────────────────────────────
kings_indian = {
  "id": "kings-indian",
  "name": "King's Indian Defense",
  "ecoRange": "E60–E99",
  "category": "Hypermodern & Dynamic Asymmetric Defenses (1.d4 Nf6 2.c4 g6)",
  "summary": "The ultimate romantic counterattacking defense against 1.d4. Black concedes the entire center to White, fianchettoes on g7, and launches an all-out kingside mating attack with ...f5.",
  "keyConcepts": ["Hypermodern center concession", "King's Indian monster bishop on g7", "Thematic ...e5 and ...f5 kingside pawn storms", "Opposite wing attacks (White queenside vs Black kingside)"],
  "famousPlayers": ["Garry Kasparov", "Bobby Fischer", "Hikaru Nakamura", "Teimour Radjabov", "David Bronstein"],
  "subVariations": [
    {
      "id": "kid-classical-mar-del-plata-ne1",
      "name": "King's Indian: Classical Mar del Plata (9.Ne1)",
      "eco": "E99",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O", "Be2", "e5", "O-O", "Nc6", "d5", "Ne7", "Ne1", "Nd7", "Be3", "f5", "f3", "f4", "Bf2", "g5"],
      "description": "The immortal Mar del Plata attack. White attacks down the queenside with c5 and b4, while Black storms the kingside with ...f4, ...g5, and ...h5 to mate White's king.",
      "whitePlan": "Blast open the c-file with c5, break into Black's queenside with b4/c6.",
      "blackPlan": "Push ...f4, ...g5, ...h5, sacrifice pieces on g3 or h3, deliver checkmate.",
      "keyThemes": ["Mar del Plata Mating Race", "Closed Center Battle", "Kingside Pawn Storm (...f4/g5)", "Queenside c5 Rupture"]
    },
    {
      "id": "kid-classical-mar-del-plata-nd2",
      "name": "King's Indian: Classical Mar del Plata (9.Nd2)",
      "eco": "E98",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O", "Be2", "e5", "O-O", "Nc6", "d5", "Ne7", "Nd2", "a5", "a3", "Nd7", "Rb1", "f5", "b4", "Kh8"],
      "description": "White routes the knight to d2 instead of e1 to immediately support the b4 thrust and control c4.",
      "whitePlan": "Execute b4 breakthrough, open queenside files, establish rook invasion on c7.",
      "blackPlan": "Slow down b4 with ...a5, shelter king on h8, launch ...f5-f4 kingside assault.",
      "keyThemes": ["9.Nd2 System", "Halting b4 with ...a5", "Kh8 King Safety", "Kingside Attack Continuation"]
    },
    {
      "id": "kid-classical-petrosian",
      "name": "King's Indian: Petrosian System (7.d5)",
      "eco": "E92",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O", "Be2", "e5", "d5", "a5", "Bg5", "h6", "Bh4", "Na6", "Nd2", "Qe8", "O-O", "Nh7"],
      "description": "Tigran Petrosian's prophylactic system: White closes the center with 7.d5 and pins Black's knight with Bg5.",
      "whitePlan": "Maintain Bg5 pin, restrict Black's ...f5 break, prepare queenside expansion with a3/b4.",
      "blackPlan": "Unpin with ...Qe8, maneuver knight via Na6-c5, prepare ...f5 via ...Nh7.",
      "keyThemes": ["Petrosian 7.d5 Prophylaxis", "Bg5 Pin Technique", "Unpinning with ...Qe8", "Knight Outpost on c5"]
    },
    {
      "id": "kid-classical-gligoric",
      "name": "King's Indian: Gligoric System (7.Be3)",
      "eco": "E92",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O", "Be2", "e5", "Be3", "Ng4", "Bg5", "f6", "Bh4", "Nc6", "d5", "Ne7", "Nd2", "Nh6"],
      "description": "Svetozar Gligoric's system where White plays 7.Be3 to control the center flexibly without committing d5 immediately.",
      "whitePlan": "Provoke ...f6, maneuver Nd2, control light squares and queenside.",
      "blackPlan": "Harass bishop with ...Ng4, maneuver knight via Nh6-f7, launch ...f5.",
      "keyThemes": ["Gligoric 7.Be3 Setup", "Harassing with ...Ng4", "Knight Maneuver to f7", "Central Tension"]
    },
    {
      "id": "kid-samisch-main",
      "name": "King's Indian: Sämisch Main Line (5.f3 O-O 6.Be3)",
      "eco": "E81",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "e5", "d5", "c6", "Qd2", "cxd5", "cxd5", "a6", "O-O-O", "Nbd7", "g4", "b5"],
      "description": "Fritz Sämisch's uncompromising system. White reinforces e4 with f3, castles queenside, and launches an all-out pawn storm with g4/h4.",
      "whitePlan": "Castle long, push g4, h4, h5, and Bh6 to checkmate the black king.",
      "blackPlan": "Strike on the queenside with ...c6 and ...b5, exploit the c-file against White's king.",
      "keyThemes": ["Sämisch f3 Iron Center", "Opposite Castling Mating Race", "Queenside ...b5 Storm", "Open c-file Attack"]
    },
    {
      "id": "kid-samisch-panno",
      "name": "King's Indian: Sämisch Panno (6...Nc6)",
      "eco": "E83",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f3", "O-O", "Be3", "Nc6", "Nge2", "a6", "Qd2", "Rb8", "h4", "h5", "O-O-O", "b5"],
      "description": "Oscar Panno's hyper-active counterattack against the Sämisch: Black prepares an immediate ...Rb8 and ...b5 queenside storm.",
      "whitePlan": "Open h-file with h4-h5, sacrifice material on kingside.",
      "blackPlan": "Rip open the b-file with ...b5-b4, attack White's king on c1.",
      "keyThemes": ["Panno ...a6/...Rb8/...b5 Attack", "Queenside Flank Blows", "Mutual Racing Attacks", "Tactical Fireworks"]
    },
    {
      "id": "kid-averbakh",
      "name": "King's Indian: Averbakh Variation (6.Bg5)",
      "eco": "E73",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Be2", "O-O", "Bg5", "c5", "d5", "h6", "Bf4", "e6", "dxe6", "Bxe6", "Qd2", "Kh7", "Bxd6", "Re8"],
      "description": "Yuri Averbakh's positional system: 6.Bg5 prevents Black's thematic ...e5 break, forcing Black into Benoni-style counterplay with ...c5.",
      "whitePlan": "Pin with Bg5, win the d6 pawn or maintain strong central bind.",
      "blackPlan": "Counter with ...c5 and ...e6, sacrifice d6 pawn for open files and active pieces.",
      "keyThemes": ["Averbakh 6.Bg5 Pin", "Preventing ...e5 Break", "Benoni-Style Counterplay", "Dynamic Piece Activity"]
    },
    {
      "id": "kid-four-pawns",
      "name": "King's Indian: Four Pawns Attack (5.f4)",
      "eco": "E76",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "f4", "O-O", "Nf3", "c5", "d5", "e6", "Be2", "exd5", "cxd5", "Bg4", "O-O", "Nbd7", "Re1", "Re8"],
      "description": "White pushes four pawns (c4, d5, e4, f4) aggressively in the opening, leading to high-octane central tactical battles.",
      "whitePlan": "Advance e5 to steamroll Black's position, utilize massive space advantage.",
      "blackPlan": "Undermine White's overextended center with ...c5, ...Bg4, and ...Re8.",
      "keyThemes": ["Four Pawns Mega Center", "Overextended Center Target", "Pin with ...Bg4", "Dynamic e-file Counterplay"]
    },
    {
      "id": "kid-fianchetto-classical",
      "name": "King's Indian: Fianchetto Classical (6...Nbd7)",
      "eco": "E67",
      "moves": ["d4", "Nf6", "c4", "g6", "Nf3", "Bg7", "g3", "O-O", "Bg2", "d6", "O-O", "Nbd7", "Nc3", "e5", "e4", "c6", "h3", "Qb6", "Re1", "exd4", "Nxd4", "Re8"],
      "description": "White fianchettoes on g2 to blunt Black's attacking ambitions. Highly respected at the highest level of Grandmaster play.",
      "whitePlan": "Maintain calm center, restrict Black's kingside attacks, utilize superior space.",
      "blackPlan": "Pressure d4 with ...Qb6 and ...Re8, break with ...exd4 and ...Nc5.",
      "keyThemes": ["Fianchetto Neutralization", "Queen Pressure on d4", "Knight Outpost on c5", "Prophylactic Positional Battle"]
    },
    {
      "id": "kid-fianchetto-panno",
      "name": "King's Indian: Fianchetto Panno (6...Nc6)",
      "eco": "E69",
      "moves": ["d4", "Nf6", "c4", "g6", "Nf3", "Bg7", "g3", "O-O", "Bg2", "d6", "O-O", "Nc6", "Nc3", "a6", "d5", "Na5", "Nd2", "c5", "Qc2", "Rb8", "b3", "b5"],
      "description": "Oscar Panno's active setup against the Fianchetto: Black maneuvers the knight to a5 to attack c4 and storms the queenside with ...b5.",
      "whitePlan": "Defend c4 with Nd2 and b3, exploit Black's offside knight on a5.",
      "blackPlan": "Push ...b5 to rip open the queenside, place knight on c4, activate rooks.",
      "keyThemes": ["Panno ...Na5 Knight Maneuver", "Queenside ...b5 Breakthrough", "Targeting c4 Pawn", "Dynamic Flank Tension"]
    },
    {
      "id": "kid-makogonov",
      "name": "King's Indian: Makogonov Variation (6.h3)",
      "eco": "E71",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "h3", "O-O", "Be3", "e5", "d5", "Na6", "g4", "Nc5", "f3", "a5", "Nge2", "c6", "Qd2", "cxd5", "cxd5", "Bd7"],
      "description": "Vladimir Makogonov's modern system with 6.h3, preventing ...Ng4 and preparing g4 without weakening the dark squares.",
      "whitePlan": "Expand on kingside with g4/h4, control center with d5, castle queenside.",
      "blackPlan": "Place knight on c5, expand on queenside with ...a5 and ...b5, break in center.",
      "keyThemes": ["Makogonov 6.h3 Setup", "Controlling g4 Square", "Kingside g4 Expansion", "Knight Outpost on c5"]
    },
    {
      "id": "kid-bayonet-attack",
      "name": "King's Indian: Bayonet Attack (9.b4)",
      "eco": "E97",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O", "Be2", "e5", "O-O", "Nc6", "d5", "Ne7", "b4", "Nh5", "Re1", "f5", "Ng5", "Nf6", "Bf3", "c6"],
      "description": "Vladimir Kramnik's devastating modern antidote: White pushes 9.b4 immediately without moving the f3 knight, speeding up the queenside assault.",
      "whitePlan": "Break open queenside with c5 and b5, utilize Ng5-e6 outpost.",
      "blackPlan": "Anchor knight on f4 via Nh5, maintain kingside attacking chances with ...f5.",
      "keyThemes": ["Bayonet 9.b4 Thrust", "Fast-Forward Queenside Attack", "Ne6 Outpost Pressure", "Tactical Counter-Assault"]
    },
    {
      "id": "kid-kramer-system",
      "name": "King's Indian: Kramer System (5.Nge2)",
      "eco": "E70",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nge2", "O-O", "Ng3", "e5", "d5", "a5", "Be2", "Na6", "h4", "h5", "Bg5", "Qe8"],
      "description": "White develops the knight to e2 and g3, supporting a swift kingside pawn storm with h4-h5.",
      "whitePlan": "Storm the kingside with h4-h5, pin knight with Bg5, attack with Qd2.",
      "blackPlan": "Halt White's h-pawn with ...h5, unpin with ...Qe8, maneuver knight via Na6-c5.",
      "keyThemes": ["Kramer Nge2-g3 Setup", "Early h4-h5 Pawn Storm", "Bg5 Pin Technique", "Prophylactic Defense"]
    },
    {
      "id": "kid-larsen",
      "name": "King's Indian: Larsen Variation (7.Be3 Na6)",
      "eco": "E90",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O", "Be3", "Na6", "h3", "e5", "d5", "Nc5", "Nd2", "a5", "g4", "c6"],
      "description": "Bent Larsen's flexible knight deployment to a6, preparing ...Nc5 before White can lock the position.",
      "whitePlan": "Expand on kingside with g4/h4, restrict Black's ...f5 break.",
      "blackPlan": "Anchor knight on c5, strike with ...c6 in the center, open queenside lines.",
      "keyThemes": ["Larsen ...Na6-c5 Maneuver", "Kingside g4 Expansion", "Central ...c6 Tension", "Asymmetric Dynamics"]
    },
    {
      "id": "kid-zinnowitz",
      "name": "King's Indian: Zinnowitz Variation",
      "eco": "E70",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Bg5", "c5", "d5", "h6", "Bh4", "g5", "Bg3", "Nh5", "Qxh5", "Bxc3+", "bxc3", "Qa5"],
      "description": "Ultra-sharp tactical skirmish where Black sacrifices a piece on h5 to shatter White's queenside pawns and deliver checks on a5.",
      "whitePlan": "Survive the queen checks, consolidate the extra piece for victory.",
      "blackPlan": "Attack White's king on c1/d1 with ...Qa5 and ...Qxc3+, exploit king exposure.",
      "keyThemes": ["Piece Sacrifice on h5", "Bxc3+ Structural Destruction", "Queen Check on a5", "Extreme Tactical Sharpness"]
    },
    {
      "id": "kid-exchange",
      "name": "King's Indian: Exchange Variation (7.dxe5)",
      "eco": "E92",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O", "Be2", "e5", "dxe5", "dxe5", "Qxd8", "Rxd8", "Bg5", "Re8", "Nd5", "Nxd5", "cxd5", "c6"],
      "description": "White trades queens early with 7.dxe5, aiming to stifle Black's attacking ambitions and grind in the endgame.",
      "whitePlan": "Use open d-file and c-file, put pressure on c7 with Nd5 and Rc1.",
      "blackPlan": "Undermine White's d5 pawn with ...c6, use bishop on g7, neutralize open files.",
      "keyThemes": ["Early Queen Trade", "Nd5 Outpost Pressure", "Undermining with ...c6", "Solid Endgame Parity"]
    },
    {
      "id": "kid-blackburne",
      "name": "King's Indian: Blackburne Variation",
      "eco": "E70",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nge2", "O-O", "g3", "e5", "Bg2", "Nc6", "d5", "Ne7", "O-O", "Nd7", "Be3", "f5"],
      "description": "White combines the Nge2 knight development with a kingside fianchetto on g2.",
      "whitePlan": "Control center with d5, maintain solid king defense with Bg2.",
      "blackPlan": "Maneuver knight via Nd7, push ...f5, launch kingside offensive.",
      "keyThemes": ["Fianchetto & Nge2 Combination", "Solid Defense on g2", "Kingside ...f5 Assault", "Harmonious Piece Play"]
    },
    {
      "id": "kid-accelerated",
      "name": "Accelerated King's Indian (2...g6 without 1...Nf6)",
      "eco": "E60",
      "moves": ["d4", "g6", "c4", "Bg7", "Nc3", "d6", "e4", "Nc6", "Be3", "e5", "d5", "Nce7", "g4", "f5", "gxf5", "gxf5", "Qh5+", "Kf8"],
      "description": "Black fianchettoes immediately on move 1/2, avoiding early knight pins and leading to direct clashes.",
      "whitePlan": "Deliver check with Qh5+, exploit Black's uncastled king on f8.",
      "blackPlan": "Shelter king on f8/g8, dominate dark squares, counterattack in center.",
      "keyThemes": ["Early 1...g6 Move Order", "Qh5+ King Disruption", "Dark-Square Domination", "Fierce Central Clashes"]
    },
    {
      "id": "kid-fianchetto-yugoslav",
      "name": "King's Indian: Fianchetto Yugoslav (6...c5)",
      "eco": "E65",
      "moves": ["d4", "Nf6", "c4", "g6", "Nf3", "Bg7", "g3", "O-O", "Bg2", "d6", "O-O", "c5", "Nc3", "Nc6", "d5", "Na5", "Nd2", "a6", "Qc2", "Rb8", "b3", "b5"],
      "description": "Black strikes with 6...c5 into a Benoni-style structure against the Fianchetto system.",
      "whitePlan": "Defend c4 with Nd2/b3, exploit Black's knight on a5.",
      "blackPlan": "Push ...b5, attack down the b-file, dominate the long diagonal.",
      "keyThemes": ["Benoni-Style ...c5 Break", "Knight Outpost on a5", "Queenside ...b5 Roll", "Long Diagonal Pressure"]
    },
    {
      "id": "kid-semi-averbakh",
      "name": "King's Indian: Semi-Averbakh (5.Be2 O-O 6.Be3)",
      "eco": "E73",
      "moves": ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Be2", "O-O", "Be3", "e5", "d5", "Na6", "g4", "Nc5", "f3", "a5", "h4", "h5", "g5", "Nfd7"],
      "description": "White plays Be3, g4, and h4, locking the kingside and aiming to squeeze Black for space.",
      "whitePlan": "Advance g5, castle queenside, dominate the board with spatial advantage.",
      "blackPlan": "Anchor knight on c5, break with ...f6 or ...f5, counterstrike on queenside.",
      "keyThemes": ["Semi-Averbakh g4/h4 Roll", "Locked Kingside (g5)", "Knight Outpost on c5", "Counter-Break with ...f6"]
    }
  ]
}

with open(os.path.join(output_dir, 'kings_indian.json'), 'w') as f:
    json.dump(kings_indian, f, indent=2)

print("Saved King's Indian family (20 variations).")
