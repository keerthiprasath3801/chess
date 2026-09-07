import json
import os

output_dir = os.path.join(os.path.dirname(__file__), 'openings_data')
os.makedirs(output_dir, exist_ok=True)

# ── 10. ENGLISH OPENING & FLANK SYSTEMS (20 variations) ──────────────────────
english_flank = {
  "id": "english-flank",
  "name": "English Opening & Flank Systems",
  "ecoRange": "A10–A39",
  "category": "Flank & Hypermodern Openings (1.c4 / 1.Nf3 / 1.b3)",
  "summary": "Mikhail Botvinnik and Garry Kasparov's hyper-flexible flank weapon. White attacks the d5 central square from the flank with 1.c4, maintaining immense strategic adaptability.",
  "keyConcepts": ["Flank pressure on d5", "Reversed Sicilian dynamics", "Botvinnik pawn triangle (c4/d3/e4)", "Symmetrical Hedgehog fortifications"],
  "famousPlayers": ["Mikhail Botvinnik", "Garry Kasparov", "Magnus Carlsen", "Bobby Fischer", "Levon Aronian"],
  "subVariations": [
    {
      "id": "eng-symm-four-knights",
      "name": "English Symmetrical: Four Knights Line",
      "eco": "A33",
      "moves": ["c4", "c5", "Nf3", "Nf6", "Nc3", "Nc6", "d4", "cxd4", "Nxd4", "e6", "g3", "Qb6", "Ndb5", "Ne5", "Bf4", "Nfg4", "e3", "a6", "Qa4", "Rb8", "Nd4", "Qxb2"],
      "description": "Wild, razor-sharp tactical brawl arising from the Symmetrical English with early queen sorties on b6 and b2.",
      "whitePlan": "Disrupt Black's queen with Qa4 and Nd4, attack exposed king.",
      "blackPlan": "Grab b2 pawn with ...Qxb2, maintain knights on e5/g4, counterattack.",
      "keyThemes": ["Symmetrical Four Knights", "Extreme Tactical Sharpness", "Early Queen Invasions", "Opposite Wing Clashes"]
    },
    {
      "id": "eng-symm-hedgehog",
      "name": "English Symmetrical: Hedgehog System",
      "eco": "A30",
      "moves": ["c4", "c5", "Nf3", "Nf6", "Nc3", "e6", "g3", "b6", "Bg2", "Bb7", "O-O", "Be7", "d4", "cxd4", "Qxd4", "d6", "Rd1", "a6", "b3", "Nbd7", "e4", "Qc7"],
      "description": "The quintessential Hedgehog fortress: Black builds a resilient setup with pawns on a6/b6/d6/e6, waiting to spring lethal ...b5 or ...d5 breaks.",
      "whitePlan": "Establish spatial clamp with c4 and e4, prevent ...b5 and ...d5 breaks.",
      "blackPlan": "Coil behind the 6th rank fortress, unleash explosive ...b5 or ...d5 ruptures.",
      "keyThemes": ["Hedgehog Defense", "Resilient 6th Rank Spines", "Explosive ...b5/...d5 Breaks", "Positional Mastery"]
    },
    {
      "id": "eng-symm-rubinstein",
      "name": "English Symmetrical: Rubinstein 3...d5",
      "eco": "A34",
      "moves": ["c4", "c5", "Nc3", "Nf6", "Nf3", "d5", "cxd5", "Nxd5", "d4", "cxd4", "Qxd4", "Nxc3", "Qxc3", "Nc6", "e4", "e5", "a3", "Bd6", "Bc4", "O-O"],
      "description": "Black strikes centrally with 3...d5, liquidating central pawns for rapid piece development.",
      "whitePlan": "Use active bishop on c4, control d5 square, attack down open c-file.",
      "blackPlan": "Coordinate knights on c6, develop bishop to d6, fight for central parity.",
      "keyThemes": ["Central ...d5 Liquidation", "Active Bc4 Bishop", "Control of c-file", "Smooth Equality"]
    },
    {
      "id": "eng-kings-reversed-dragon",
      "name": "King's English: Reversed Dragon (1.c4 e5)",
      "eco": "A22",
      "moves": ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "g3", "d5", "cxd5", "Nxd5", "Bg2", "Nb6", "O-O", "Be7", "a3", "O-O", "b4", "Be6", "Rb1", "f6", "d3", "Qd7"],
      "description": "A Sicilian Dragon with colors reversed where White plays with an extra tempo, expanding on the queenside with a3/b4.",
      "whitePlan": "Expand on queenside with b4-b5, utilize monster g2 bishop on the long diagonal.",
      "blackPlan": "Solidify center with ...f6 and ...Be6, coordinate queen on d7, defend queenside.",
      "keyThemes": ["Reversed Dragon Dynamics", "Queenside b4-b5 Roll", "Long Diagonal g2 Pressure", "Solid ...f6 Base"]
    },
    {
      "id": "eng-kings-four-knights",
      "name": "King's English: Four Knights 4.e3",
      "eco": "A28",
      "moves": ["c4", "e5", "Nc3", "Nf6", "Nf3", "Nc6", "e3", "Bb4", "Qc2", "Bxc3", "Qxc3", "Qe7", "a3", "a5", "b3", "d5", "cxd5", "Nxd5", "Qc2", "O-O", "Bb2", "Bg4"],
      "description": "White plays 4.e3 and 5.Qc2, controlling d4 and allowing Black to trade on c3 to gain the bishop pair.",
      "whitePlan": "Utilize bishop pair on b2/e2, control central light squares.",
      "blackPlan": "Strike with ...d5 in the center, develop active bishops on b4 and g4.",
      "keyThemes": ["4.e3 Nimzo-Style Idea", "Bishop Pair Advantage", "Central ...d5 Counterstrike", "Smooth Development"]
    },
    {
      "id": "eng-mikenas-attack",
      "name": "Anglo-Indian: Mikenas-Flohr Attack (1.c4 Nf6 2.Nc3 e6 3.e4)",
      "eco": "A18",
      "moves": ["c4", "Nf6", "Nc3", "e6", "e4", "d5", "e5", "d4", "exf6", "dxc3", "bxc3", "Qxf6", "d4", "e5", "Nf3", "exd4", "Bg5", "Qe6+", "Be2", "Be7"],
      "description": "Vladas Mikenas's aggressive thrust 3.e4! seizing the center immediately and forcing sharp piece captures on f6 and c3.",
      "whitePlan": "Build broad d4 center, attack Black's queen with Bg5 and Re1.",
      "blackPlan": "Centralize queen on e6/f6, trade bishops on e7, attack White's d4 center.",
      "keyThemes": ["Mikenas 3.e4 Thrust", "Double Central Pawn Captures", "Queen Pin Tactics", "Open Tactical Battle"]
    },
    {
      "id": "eng-neo-catalan",
      "name": "Anglo-Indian: Neo-Catalan System",
      "eco": "A13",
      "moves": ["c4", "e6", "Nf3", "d5", "g3", "Nf6", "Bg2", "Be7", "O-O", "O-O", "b3", "c5", "Bb2", "Nc6", "e3", "b6", "Nc3", "Bb7", "cxd5", "Nxd5", "Nxd5", "Qxd5"],
      "description": "Harmonious double fianchetto battle with b3/Bb2 and g3/Bg2, controlling central outposts.",
      "whitePlan": "Control d5 and e4 diagonals with dual bishops, push d4.",
      "blackPlan": "Centralize queen on d5, coordinate knights on c6, fight for central equality.",
      "keyThemes": ["Double Fianchetto Setup", "Queen Centralization on d5", "Central Parity", "Smooth Strategic Maneuvering"]
    },
    {
      "id": "eng-anglo-dutch",
      "name": "Anglo-Dutch Defense (1.c4 f5)",
      "eco": "A10",
      "moves": ["c4", "f5", "Nc3", "Nf6", "g3", "g6", "Bg2", "Bg7", "d3", "O-O", "e4", "d6", "Nge2", "e5", "O-O", "Nc6", "Nd5", "Nxd5", "cxd5", "Ne7"],
      "description": "Black responds with 1...f5 to establish a Dutch formation against 1.c4.",
      "whitePlan": "Control d5 outpost, open c-file with cxd5, attack queenside.",
      "blackPlan": "Occupy center with ...e5/f5, attack on kingside with ...Qe8 and ...f4.",
      "keyThemes": ["Anglo-Dutch Setup", "Nd5 Outpost Struggle", "Kingside ...f4 Push", "Closed Center Dynamics"]
    },
    {
      "id": "reti-opening-kings-indian",
      "name": "Réti Opening: King's Indian Setup",
      "eco": "A04",
      "moves": ["Nf3", "d5", "c4", "c6", "b3", "Nf6", "g3", "g6", "Bb2", "Bg7", "Bg2", "O-O", "O-O", "Nbd7", "d3", "Re8", "Nbd2", "e5", "cxd5", "cxd5", "Rc1", "b6"],
      "description": "Richard Réti's hypermodern masterpiece: White controls the center with knights and flank bishops before striking with c4.",
      "whitePlan": "Undermine Black's e5/d5 pawn center from the flanks, use open c-file.",
      "blackPlan": "Establish full pawn center with ...e5/d5, coordinate pieces on b7/e8.",
      "keyThemes": ["Hypermodern Réti Strategy", "Flank Undermining of Center", "Open c-file Pressure", "Double Fianchetto Grip"]
    },
    {
      "id": "reti-opening-capablanca",
      "name": "Réti Opening: Capablanca / Lasker System",
      "eco": "A09",
      "moves": ["Nf3", "d5", "c4", "dxc4", "Na3", "c5", "Nxc4", "Nc6", "g3", "f6", "Bg2", "e5", "O-O", "Be6", "d3", "Qd7", "a3", "Nge7", "b4", "cxb4", "axb4", "Nxb4"],
      "description": "Black grabs the c4 pawn and builds a broad pawn center with ...e5 and ...f6, while White breaks open the queenside with b4.",
      "whitePlan": "Sacrifice b4 pawn for open files and blazing attack against Black's king.",
      "blackPlan": "Anchor knight on b4, maintain e5/f6 center, castle queenside.",
      "keyThemes": ["c4 Gambit Recovery", "Queenside b4 Breakthrough", "Broad Black Center", "Open Flank Attack"]
    },
    {
      "id": "kia-vs-french",
      "name": "King's Indian Attack (KIA) vs French",
      "eco": "A07",
      "moves": ["Nf3", "d5", "g3", "c5", "Bg2", "Nc6", "O-O", "e6", "d3", "Nf6", "Nbd2", "Be7", "e4", "O-O", "Re1", "b5", "e5", "Nd7", "Nf1", "a5", "h4", "b4", "Bf4", "a4"],
      "description": "Bobby Fischer's signature attacking setup against the French Defense: White plays e5, Nf1-h2, and h4 to launch an unstoppable kingside assault.",
      "whitePlan": "Advance h4-h5, maneuver Nh2-g4, sacrifice pieces on h7/f6 to mate.",
      "blackPlan": "Storm the queenside with ...b4 and ...a3, rip open the queenside before White mates.",
      "keyThemes": ["Fischer KIA Blueprint", "Kingside e5 Wedge Assault", "Knight Tour Nf1-h2-g4", "Queenside Flank Race"]
    },
    {
      "id": "kia-vs-sicilian",
      "name": "King's Indian Attack vs Sicilian",
      "eco": "A07",
      "moves": ["Nf3", "c5", "g3", "Nc6", "Bg2", "g6", "O-O", "Bg7", "d3", "e6", "e4", "Nge7", "Re1", "d6", "c3", "O-O", "d4", "cxd4", "cxd4", "d5", "e5", "Qb6"],
      "description": "White plays a flexible KIA setup against the Sicilian, building a solid pawn center with c3/d4.",
      "whitePlan": "Maintain e5 space wedge, attack kingside with h4 and Nbd2-f1.",
      "blackPlan": "Pressure d4 pawn with ...Qb6 and ...Nf5, challenge e5 with ...f6.",
      "keyThemes": ["KIA Solid d4/e5 Center", "Pressure on d4 Base", "Knight to f5 Outpost", "Strategic Prophylaxis"]
    },
    {
      "id": "birds-opening-froms",
      "name": "Bird's Opening: From's Gambit (1.f4 e5)",
      "eco": "A02",
      "moves": ["f4", "e5", "fxe5", "d6", "exd6", "Bxd6", "Nf3", "g5", "g3", "g4", "Nh4", "Ne7", "d4", "Ng6", "Nxg6", "hxg6", "Qd3", "Nc6", "c3", "Bf5"],
      "description": "Henry Bird's 1.f4 met by the explosive From's Gambit (1...e5!). Black sacrifices two pawns for a ferocious kingside mating assault.",
      "whitePlan": "Survive the kingside attack with g3/Nh4, consolidate the extra material.",
      "blackPlan": "Storm with ...g5-g4, open the h-file for the rook, deliver mate.",
      "keyThemes": ["From's Gambit Attack", "Open h-file Mating Threats", "Pawn Storm ...g5-g4", "Sacrificial Chaos"]
    },
    {
      "id": "birds-opening-dutch",
      "name": "Bird's Opening: Classical 1...d5 Setup",
      "eco": "A03",
      "moves": ["f4", "d5", "Nf3", "Nf6", "e3", "g6", "b3", "Bg7", "Bb2", "O-O", "Be2", "c5", "O-O", "Nc6", "Ne5", "Qc7", "Nxc6", "Qxc6", "Bf3", "b6"],
      "description": "Classical Dutch formation with colors reversed. White controls e5 with Ne5 and Bb2.",
      "whitePlan": "Anchor knight on e5, utilize bishop pair, attack down f-file.",
      "blackPlan": "Coordinate queen on c6, fianchetto on b7, break with ...e5.",
      "keyThemes": ["Reversed Dutch Setup", "Ne5 Outpost Control", "Fianchetto on b2/b7", "Solid Central Equality"]
    },
    {
      "id": "nimzo-larsen-modern",
      "name": "Nimzo-Larsen Attack: 1...e5 Setup",
      "eco": "A01",
      "moves": ["b3", "e5", "Bb2", "Nc6", "e3", "Nf6", "Bb5", "Bd6", "Na3", "a6", "Be2", "b5", "c4", "b4", "Nc2", "O-O", "d4", "exd4", "exd4", "Re8"],
      "description": "Bent Larsen's 1.b3 attack: White attacks e5 immediately with Bb2, provoking sharp piece skirmishes.",
      "whitePlan": "Undermine Black's e5 center with c4/d4, utilize b2 bishop.",
      "blackPlan": "Defend e5 with ...Bd6/Nc6, expand on queenside with ...b5/b4.",
      "keyThemes": ["1.b3 Hypermodern Attack", "Pressure on e5 Pawn", "Queenside ...b5 Roll", "Dynamic Counterplay"]
    },
    {
      "id": "nimzo-larsen-classical",
      "name": "Nimzo-Larsen Attack: 1...d5 Setup",
      "eco": "A01",
      "moves": ["b3", "d5", "Bb2", "c5", "e3", "Nc6", "Bb5", "Bd7", "f4", "Nf6", "Nf3", "e6", "O-O", "Be7", "Bxc6", "Bxc6", "Ne5", "Rc8", "d3", "O-O"],
      "description": "White plays a Dutch/Bird hybrid with 1.b3, f4, and Ne5, controlling key light squares.",
      "whitePlan": "Anchor knight on e5, attack kingside with Rf3-h3.",
      "blackPlan": "Develop bishops smoothly on c6/e7, fight for central space.",
      "keyThemes": ["1.b3/f4 Hybrid Setup", "Ne5 Outpost Control", "Light-Square Domination", "Rook Lift Rf3-h3"]
    },
    {
      "id": "polish-sokolsky",
      "name": "Polish / Sokolsky Opening (1.b4)",
      "eco": "A00",
      "moves": ["b4", "e5", "Bb2", "Bxb4", "Bxe5", "Nf6", "c4", "O-O", "Nf3", "Re8", "e3", "d5", "cxd5", "Nxd5", "Be2", "Nc6", "Bb2", "Bg4"],
      "description": "The Orangutan / Sokolsky Opening: 1.b4 claims immediate queenside flank space and attacks e5.",
      "whitePlan": "Control long diagonal with Bb2, attack Black's center with c4.",
      "blackPlan": "Grab b4 with ...Bxb4, develop rapidly with ...Re8 and ...Bg4.",
      "keyThemes": ["1.b4 Flank Challenge", "Bb2 Long Diagonal Control", "Rapid Black Development", "Open Tactical Play"]
    },
    {
      "id": "english-botvinnik-system",
      "name": "English Opening: Botvinnik System (c4/d3/e4)",
      "eco": "A26",
      "moves": ["c4", "e5", "Nc3", "Nc6", "g3", "g6", "Bg2", "Bg7", "d3", "d6", "e4", "f5", "Nge2", "Nf6", "O-O", "O-O", "Nd5", "Nxd5", "cxd5", "Ne7", "Be3", "c5"],
      "description": "Mikhail Botvinnik's iron system: White establishes a massive pawn clamp on d5 with c4/d3/e4.",
      "whitePlan": "Maintain d5 clamp, expand on queenside with b4, control the board.",
      "blackPlan": "Counterstrike with ...f5 on the kingside, lock the center with ...c5.",
      "keyThemes": ["Botvinnik Pawn Triangle (c4/d3/e4)", "Iron d5 Clamp", "Kingside ...f5 Assault", "Strategic Blockade"]
    },
    {
      "id": "larsen-opening-nf6",
      "name": "Larsen Opening (1.b3 Nf6 2.Bb2 g6)",
      "eco": "A01",
      "moves": ["b3", "Nf6", "Bb2", "g6", "e4", "d6", "g3", "Bg7", "Bg2", "O-O", "Ne2", "e5", "O-O", "Nc6", "d4", "exd4", "Nxd4", "Bd7"],
      "description": "Harmonious double fianchetto struggle where Black occupies the center with ...e5/d6.",
      "whitePlan": "Control long diagonal with Bb2/Bg2, break centrally with d4.",
      "blackPlan": "Fianchetto on g7, coordinate knights on c6/d7, maintain central parity.",
      "keyThemes": ["Double Fianchetto Clash", "Central ...e5 Defense", "d4 Pawn Break", "Harmonious Piece Play"]
    },
    {
      "id": "dunst-opening",
      "name": "Dunst / Sleipner Opening (1.Nc3)",
      "eco": "A00",
      "moves": ["Nc3", "d5", "e4", "d4", "Nce2", "e5", "Ng3", "Be6", "Nf3", "f6", "c3", "c5", "Bb5+", "Nc6", "Bxc6+", "bxc6", "d3", "Bd6"],
      "description": "Ted Dunst's provocative 1.Nc3, allowing Black to advance ...d4 before rerouting the knight to g3.",
      "whitePlan": "Reroute knight to g3, build d3/c3 center, attack on kingside.",
      "blackPlan": "Establish space with ...c5/d4/e5, utilize bishop pair.",
      "keyThemes": ["1.Nc3 Knight Outpost", "Knight Rerouting to g3", "Advanced ...d4 Wedge", "Solid Central Clamp"]
    }
  ]
}

with open(os.path.join(output_dir, 'english_flank.json'), 'w') as f:
    json.dump(english_flank, f, indent=2)

print("Saved English & Flank family (20 variations).")
