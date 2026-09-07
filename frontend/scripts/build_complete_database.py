import json
import os

output_dir = os.path.join(os.path.dirname(__file__), 'openings_data')
os.makedirs(output_dir, exist_ok=True)

# ── 3. RUY LOPEZ (SPANISH OPENING) (20 variations) ──────────────────────────
ruy_lopez = {
  "id": "ruy-lopez",
  "name": "Ruy Lopez (Spanish Opening)",
  "ecoRange": "C60–C99",
  "category": "Open Games (1.e4 e5 2.Nf3 Nc6 3.Bb5)",
  "summary": "The cornerstone of classical chess strategy. White develops the bishop to b5 on move 3 to put indirect pressure on Black's e5 pawn and center.",
  "keyConcepts": ["Indirect pressure on e5", "c3 and d4 pawn center construction", "Light-squared bishop retreat to c2", "Maneuvering knight via d2-f1-g3"],
  "famousPlayers": ["Garry Kasparov", "Anatoly Karpov", "Bobby Fischer", "Magnus Carlsen", "Fabiano Caruana"],
  "subVariations": [
    {
      "id": "ruy-chigorin",
      "name": "Ruy Lopez: Closed Chigorin Variation",
      "eco": "C97",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "Na5", "Bc2", "c5", "d4", "Qc7"],
      "description": "Mikhail Chigorin's classical system. Black maneuvers knight to a5 and expands with ...c5 and ...Qc7.",
      "whitePlan": "Maneuver Nbd2-f1-g3, maintain strong center with d4, attack on kingside.",
      "blackPlan": "Maintain queenside space with ...c5, pressure d4 pawn, prepare central counterplay.",
      "keyThemes": ["Chigorin ...Na5 Maneuver", "c3/d4 Center vs ...c5", "Knight Tour Nbd2-f1-g3", "Classical Strategic Depth"]
    },
    {
      "id": "ruy-breyer",
      "name": "Ruy Lopez: Breyer Variation (9...Nb8)",
      "eco": "C95",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "Nb8", "d4", "Nbd7", "Nbd2", "Bb7", "Bc2", "Re8"],
      "description": "Gyula Breyer's hypermodern knight retreat: 9...Nb8 reroutes to d7, reinforcing the center without blocking c-pawns.",
      "whitePlan": "Push d4, maneuver knight via f1-g3, maintain central space.",
      "blackPlan": "Fianchetto bishop on b7, maneuver knight to d7, exert harmonious e5/d4 pressure.",
      "keyThemes": ["Breyer 9...Nb8 Retreat", "Harmonious Piece Setup", "Fianchetto on b7", "Prophylactic Defense"]
    },
    {
      "id": "ruy-zaitsev",
      "name": "Ruy Lopez: Zaitsev Variation (9...Bb7)",
      "eco": "C92",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "Bb7", "d4", "Re8", "Nbd2", "Bf8", "a4", "h6"],
      "description": "Igor Zaitsev's sharp counterattacking system favored by Anatoly Karpov, putting immediate pressure on e4.",
      "whitePlan": "Maneuver Nf1-g3, control d5, push d5 or a4 to test Black's queenside.",
      "blackPlan": "Pressure e4 with ...Bb7 and ...Re8, retreat bishop to f8 to guard g7.",
      "keyThemes": ["Immediate Pressure on e4", "Bishop on b7 and f8", "Flexible Queenside Defense", "Complex Modern Battles"]
    },
    {
      "id": "ruy-marshall",
      "name": "Ruy Lopez: Marshall Attack",
      "eco": "C89",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "O-O", "c3", "d5", "exd5", "Nxd5", "Nxe5", "Nxe5", "Rxe5", "c6", "d4", "Bd6", "Re1", "Qh4"],
      "description": "Frank Marshall's legendary pawn sacrifice 8...d5! seizing a vicious, unstoppable kingside initiative.",
      "whitePlan": "Survive the ferocious kingside mating assault, consolidate the extra pawn for endgame.",
      "blackPlan": "Attack king with ...Qh4, ...Bd6, ...Bg4, sacrifice further material to mate.",
      "keyThemes": ["Legendary 8...d5 Gambit", "Vicious Kingside Mating Attack", "Piece Activity over Material", "Theoretical Masterpiece"]
    },
    {
      "id": "ruy-berlin-wall",
      "name": "Ruy Lopez: Berlin Defense (Berlin Wall Endgame)",
      "eco": "C67",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "Nf6", "O-O", "Nxe4", "d4", "Nd6", "Bxc6", "dxc6", "dxe5", "Nf5", "Qxd8+", "Kxd8", "Nc3", "Ke8", "h3", "h5"],
      "description": "Vladimir Kramnik's Berlin Wall that defeated Garry Kasparov in 2000. Black trades queens early for an impenetrable fortress.",
      "whitePlan": "Exploit 4 vs 3 kingside pawn majority in the queenless endgame.",
      "blackPlan": "Use the dark-squared bishop pair, defend king actively, neutralize White's pawns.",
      "keyThemes": ["Berlin Wall Endgame", "Bishop Pair vs Structure", "King Activity without Queens", "Unbreakable Fortress"]
    },
    {
      "id": "ruy-berlin-4-d3",
      "name": "Ruy Lopez: Anti-Berlin 4.d3 System",
      "eco": "C65",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "Nf6", "d3", "Bc5", "c3", "O-O", "O-O", "d6", "Nbd2", "a6", "Ba4", "Ba7", "h3", "Ne7", "Re1", "Ng6"],
      "description": "The modern Grandmaster choice to avoid the Berlin endgame. White solidifies e4 with d3 and develops classically.",
      "whitePlan": "Maneuver Nf1-g3, push d4 at the right moment, create kingside play.",
      "blackPlan": "Maneuver knight via Ne7-g6, maintain ...Ba7 diagonal, strike with ...c6/d5.",
      "keyThemes": ["Anti-Berlin Prophylaxis", "Knight Maneuvers Ne7-g6", "Solid d3 Pawn Base", "Manoeuvring Game"]
    },
    {
      "id": "ruy-open",
      "name": "Ruy Lopez: Open Variation (5...Nxe4)",
      "eco": "C80",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Nxe4", "d4", "b5", "Bb3", "d5", "dxe5", "Be6", "c3", "Bc5", "Nbd2", "O-O", "Bc2", "Bf5"],
      "description": "Black captures 5...Nxe4, opening the center and establishing active piece posts on d5 and c5.",
      "whitePlan": "Target Black's e4/d5 knight and bishop with Nbd2 and Bc2.",
      "blackPlan": "Anchor bishop on e6/f5, maintain active knight outpost, fight for central parity.",
      "keyThemes": ["Open Center Warfare", "Active Piece Outposts", "Tactical Friction on e4", "Classical Counterplay"]
    },
    {
      "id": "ruy-exchange",
      "name": "Ruy Lopez: Exchange Variation (4.Bxc6)",
      "eco": "C68",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Bxc6", "dxc6", "O-O", "f6", "d4", "exd4", "Nxd4", "c5", "Nb3", "Qxd1", "Rxd1", "Bd7", "Be3", "b6"],
      "description": "Bobby Fischer's favorite endgame weapon. White inflicts doubled pawns and aims for an easily winning pawn endgame.",
      "whitePlan": "Trade all pieces to reach king and pawn endgame where White's kingside majority wins.",
      "blackPlan": "Maximize the bishop pair to prevent simplification, dominate open lines.",
      "keyThemes": ["Fischer Endgame Weapon", "4 vs 3 Kingside Pawn Majority", "Bishop Pair Defense", "Structural Endgame Edge"]
    },
    {
      "id": "ruy-modern-steinitz",
      "name": "Ruy Lopez: Modern Steinitz Defense (4...d6)",
      "eco": "C71",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "d6", "c3", "Bd7", "d4", "Nge7", "Bb3", "h6", "O-O", "Ng6", "Be3", "Be7"],
      "description": "Solid classical defense where Black defends e5 securely with 4...d6 and maneuvers the knight to g6.",
      "whitePlan": "Build c3/d4 center, attack kingside with Bb3 targeting f7.",
      "blackPlan": "Maneuver knight via Nge7-g6, castle safely, counterstrike centrally.",
      "keyThemes": ["Solid e5 Defense", "Knight Rerouting Nge7-g6", "c3/d4 Center", "Positional Maneuvering"]
    },
    {
      "id": "ruy-schliemann",
      "name": "Ruy Lopez: Schliemann (Jaenisch) Gambit (3...f5)",
      "eco": "C63",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "f5", "Nc3", "fxe4", "Nxe4", "d5", "Nxe5", "dxe4", "Nxc6", "Qg5", "Qe2", "Nf6", "f4", "Qxf4", "d4", "Qh4+", "g3", "Qh3"],
      "description": "A razor-sharp counter-gambit where Black attacks e4 immediately with 3...f5!",
      "whitePlan": "Exploit Black's weakened kingside diagonals and pin with Qe2/d4.",
      "blackPlan": "Create tactical threats with ...Qg5/Qh3, leverage open f-file.",
      "keyThemes": ["Immediate 3...f5 Gambit", "King Exposure Warfare", "Tactical Chaos", "Uncompromising Clash"]
    },
    {
      "id": "ruy-archangel",
      "name": "Ruy Lopez: Archangel & Neo-Archangel",
      "eco": "C78",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "b5", "Bb3", "Bc5", "c3", "d6", "a4", "Rb8", "d4", "Bb6", "h3", "O-O"],
      "description": "Active development of the dark-squared bishop to c5 before d6, contesting the center aggressively.",
      "whitePlan": "Pressure with a4, build center with c3/d4, pin with Bg5.",
      "blackPlan": "Pressure e4 with ...Bc5/Bb6 and ...Rb8, strike in the center.",
      "keyThemes": ["Active ...Bc5 Bishop", "Pressure along a7-g1 Diagonal", "Tactical Counterplay", "Open Flank Friction"]
    },
    {
      "id": "ruy-cozio",
      "name": "Ruy Lopez: Cozio Defense (3...Nge7)",
      "eco": "C60",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "Nge7", "c3", "a6", "Ba4", "g6", "d4", "exd4", "cxd4", "b5", "Bb3", "Bg7", "O-O", "O-O"],
      "description": "Black develops knight to e7 to avoid doubled pawns and prepares a kingside fianchetto.",
      "whitePlan": "Build broad center with c3/d4, utilize active bishop on b3.",
      "blackPlan": "Fianchetto bishop on g7, pressure d4 pawn, break with ...d5.",
      "keyThemes": ["3...Nge7 Move Order", "Avoiding Doubled Pawns", "Fianchetto on g7", "Solid Center Counter"]
    },
    {
      "id": "ruy-birds",
      "name": "Ruy Lopez: Bird's Defense (3...Nd4)",
      "eco": "C61",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "Nd4", "Nxd4", "exd4", "O-O", "Bc5", "d3", "c6", "Bc4", "d5", "exd5", "cxd5", "Bb3", "Ne7"],
      "description": "Henry Bird's eccentric move 3...Nd4, trading knights immediately to disrupt White's coordination.",
      "whitePlan": "Target the advanced d4 pawn, expand with f4 or c3.",
      "blackPlan": "Build solid pawn wedge on d4, develop pieces quickly with ...Bc5 and ...Ne7.",
      "keyThemes": ["Immediate 3...Nd4 Hop", "Doubled d-pawns Dynamic", "Open Center Play", "Tactical Surprise"]
    },
    {
      "id": "ruy-worrall",
      "name": "Ruy Lopez: Worrall Attack (5.Qe2)",
      "eco": "C86",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "Qe2", "b5", "Bb3", "Be7", "c3", "O-O", "d4", "d6", "O-O", "Bg4", "Rd1", "Qc8"],
      "description": "White develops the queen to e2 to support the e4 pawn and free the d1 square for the rook.",
      "whitePlan": "Place rook on d1, maintain solid e4/d4 center, attack Black's pinned pieces.",
      "blackPlan": "Pin f3 with ...Bg4, maintain queenside counterplay, coordinate on c-file.",
      "keyThemes": ["Worrall 5.Qe2 Setup", "Rd1 Pressure on d-file", "Pin with ...Bg4", "Strategic Solid Defense"]
    },
    {
      "id": "ruy-delayed-steinitz",
      "name": "Ruy Lopez: Delayed Steinitz (4.Ba4 d6)",
      "eco": "C72",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "d6", "c4", "Bd7", "Nc3", "g6", "d4", "Bg7", "Be3", "Nf6", "d5", "Ne7"],
      "description": "White adopts a Duras-style clamp with c4, establishing strong spatial dominance.",
      "whitePlan": "Clamp center with c4/d5, restrict Black's counterplay, attack queenside.",
      "blackPlan": "Fianchetto bishop on g7, maneuver knight to e7, prepare ...f5 break.",
      "keyThemes": ["c4 Pawn Clamp", "Closed Center Manoeuvres", "Fianchetto on g7", "Kingside ...f5 Break"]
    },
    {
      "id": "ruy-smyslov",
      "name": "Ruy Lopez: Smyslov Variation (9...h6)",
      "eco": "C93",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "h6", "d4", "Re8", "Nbd2", "Bf8"],
      "description": "Vasily Smyslov's classical system with 9...h6 preventing Bg5 and preparing ...Re8/Bf8.",
      "whitePlan": "Maneuver Nf1-g3, maintain broad center with d4, push a4.",
      "blackPlan": "Harmonize pieces with ...Re8, ...Bf8, ...Bb7, contest e4.",
      "keyThemes": ["Smyslov 9...h6 Prophylaxis", "Solid Central Defense", "Bishop Maneuver ...Bf8", "Deep Grandmaster Strategy"]
    },
    {
      "id": "ruy-keres",
      "name": "Ruy Lopez: Keres Variation (9...a5)",
      "eco": "C96",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O", "Be7", "Re1", "b5", "Bb3", "d6", "c3", "O-O", "h3", "a5", "a4", "b4", "d4", "bxc3", "bxc3", "exd4", "cxd4", "Nb4"],
      "description": "Paul Keres's ambitious queenside flank thrust with 9...a5, establishing an outpost on b4.",
      "whitePlan": "Occupy center with d4/e4, target Black's isolated queenside pawns.",
      "blackPlan": "Anchor knight on b4, pressure e4 and c3 pawns.",
      "keyThemes": ["9...a5 Flank Thrust", "Knight Outpost on b4", "Queenside Tension", "Active Piece Activity"]
    },
    {
      "id": "ruy-four-knights",
      "name": "Spanish Four Knights Game",
      "eco": "C48",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Nc3", "Nf6", "Bb5", "Bb4", "O-O", "O-O", "d3", "d6", "Bg5", "Bxc3", "bxc3", "Qe7", "Re1", "Nd8", "d4", "Ne6"],
      "description": "Classical symmetrical battle with 4 knights, transitioning into rich positional maneuvering.",
      "whitePlan": "Pin knight with Bg5, double pawns with Bxc6, push d4.",
      "blackPlan": "Reroute knight via Nd8-e6, eliminate White's pinned bishop, control center.",
      "keyThemes": ["Symmetrical Four Knights", "Bg5 Pin Pressure", "Knight Tour ...Nd8-e6", "Solid Classical Battle"]
    },
    {
      "id": "ruy-cordel",
      "name": "Ruy Lopez: Classical Cordel Defense (3...Bc5)",
      "eco": "C64",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "Bc5", "c3", "Nf6", "d4", "exd4", "e5", "Ne4", "O-O", "d5", "exd6", "O-O", "cxd4", "Bb6"],
      "description": "Black develops the bishop actively to c5 on move 3, leading to direct tactical clashes.",
      "whitePlan": "Build broad d4/e5 center, attack the e4 knight outpost.",
      "blackPlan": "Maintain active bishop on b6/c5, pressure d4 pawn, castle quickly.",
      "keyThemes": ["Active ...Bc5 Development", "Central d4/e5 Clashes", "En Passant Tactics", "Open Tactical Play"]
    },
    {
      "id": "ruy-steinitz-defense",
      "name": "Ruy Lopez: Old Steinitz Defense (3...d6)",
      "eco": "C62",
      "moves": ["e4", "e5", "Nf3", "Nc6", "Bb5", "d6", "d4", "Bd7", "Nc3", "Nf6", "O-O", "Be7", "Re1", "exd4", "Nxd4", "O-O", "Bxc6", "bxc6"],
      "description": "Wilhelm Steinitz's foundational defense. Extremely solid, allowing Black to withstand immense pressure.",
      "whitePlan": "Control d4 outpost, exploit doubled c-pawns with Qf3 and b3.",
      "blackPlan": "Unpin with ...Bd7, coordinate pieces solidly, utilize c-file.",
      "keyThemes": ["Steinitz Solid Defense", "Bxc6 Doubled Pawns", "Central Control", "Endgame Resilience"]
    }
  ]
}

with open(os.path.join(output_dir, 'ruy_lopez.json'), 'w') as f:
    json.dump(ruy_lopez, f, indent=2)

print("Saved Ruy Lopez family (20 variations).")
