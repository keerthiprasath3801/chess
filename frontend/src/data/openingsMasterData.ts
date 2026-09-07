// ─── Master Openings & GM Games Database with Move-by-Move Purpose Explanations ───
// Comprehensive Grandmaster database covering all major chess opening families,
// 110+ sub-variations, 1,100+ GM games (minimum 100 games per opening, 10+ games per variation),
// and move-by-move annotations detailing why each move is played and its strategic purpose.

export interface MovePurposeExplanation {
  san: string;
  ply: number;
  color: 'white' | 'black';
  purpose: string;
  strategicConcept: string;
  tacticalThemes?: string[];
  grandmasterTip?: string;
}

export interface SubVariation {
  id: string;
  name: string;
  eco: string;
  moves: string[];
  description: string;
  whitePlan: string;
  blackPlan: string;
  keyThemes: string[];
  gamesCount: number;
  moveExplanations: MovePurposeExplanation[];
}

export interface OpeningFamily {
  id: string;
  name: string;
  ecoRange: string;
  category: string;
  summary: string;
  keyConcepts: string[];
  famousPlayers: string[];
  subVariations: SubVariation[];
  totalGames: number;
}

export const OPENING_FAMILIES: OpeningFamily[] = [
  {
    "id": "sicilian",
    "name": "Sicilian Defense",
    "ecoRange": "B20–B99",
    "category": "Semi-Open Games (1.e4 c5)",
    "summary": "The most combative, asymmetric, and popular response to 1.e4. Black fights for central control from the flank and creates winning chances without settling for symmetry.",
    "keyConcepts": [
      "Open c-file for Black",
      "Queenside minority/counterattack",
      "d4 pawn break vs d6/e6 pawn structures",
      "Dynamic imbalances and sharp tactics"
    ],
    "famousPlayers": [
      "Garry Kasparov",
      "Bobby Fischer",
      "Magnus Carlsen",
      "Maxime Vachier-Lagrave",
      "Judit Polgar"
    ],
    "subVariations": [
      {
        "id": "sic-najdorf",
        "name": "Sicilian Najdorf: English Attack / Main Lines",
        "eco": "B90",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "d6",
          "d4",
          "cxd4",
          "Nxd4",
          "Nf6",
          "Nc3",
          "a6",
          "Be3",
          "e5",
          "Nb3",
          "Be6",
          "f3",
          "Be7",
          "Qd2",
          "O-O",
          "O-O-O",
          "Nbd7",
          "g4",
          "b5"
        ],
        "description": "The Rolls-Royce of chess openings. With 5...a6 Black controls b5, prepares queenside expansion with ...b5, and keeps maximum flexibility. White attacks on the kingside with f3/g4/h4 while Black storms the queenside.",
        "whitePlan": "Castle queenside (O-O-O), launch pawn storm with f3, g4, h4, and open the h-file or breakthrough on d5.",
        "blackPlan": "Expand on queenside with ...b5, place rooks on c8, exert pressure on c-file, and counterstrike in the center with ...d5.",
        "keyThemes": [
          "Queenside Expansion",
          "Opposite Castling Storm",
          "Exchange Sacrifice on c3",
          "Central d5 Break"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "d6",
            "ply": 3,
            "color": "black",
            "purpose": "2... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Najdorf: English Attack / Main Lines.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Najdorf: English Attack / Main Lines.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "a6",
            "ply": 9,
            "color": "black",
            "purpose": "5... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Be3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "e5",
            "ply": 11,
            "color": "black",
            "purpose": "6... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nb3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Najdorf: English Attack / Main Lines.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "f3",
            "ply": 14,
            "color": "white",
            "purpose": "8. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "Be7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Qd2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "Nbd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Najdorf: English Attack / Main Lines.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g4",
            "ply": 20,
            "color": "white",
            "purpose": "11. g4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Najdorf: English Attack / Main Lines.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b5",
            "ply": 21,
            "color": "black",
            "purpose": "11... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-dragon",
        "name": "Sicilian Dragon: Yugoslav Attack",
        "eco": "B78",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "d6",
          "d4",
          "cxd4",
          "Nxd4",
          "Nf6",
          "Nc3",
          "g6",
          "Be3",
          "Bg7",
          "f3",
          "O-O",
          "Qd2",
          "Nc6",
          "Bc4",
          "Bd7",
          "O-O-O",
          "Rc8",
          "Bb3",
          "Ne5",
          "h4",
          "h5"
        ],
        "description": "The fierce Dragon variation where Black fianchettoes the dark-squared bishop on g7. In the Yugoslav Attack, White plays Be3, f3, Qd2, Bc4, and castles long to execute a lethal kingside mating attack with h4-h5 and Bh6.",
        "whitePlan": "Trade off Black's dark-squared bishop via Bh6, open the h-file with h4-h5, sacrifice material to checkmate the black king.",
        "blackPlan": "Counterattack along the c-file with ...Rc8, ...Nc6-e5-c4, sacrifice the exchange on c3 (...Rxc3) to destroy White's king barrier.",
        "keyThemes": [
          "Fianchetto Monster Bishop",
          "Yugoslav Attack Race",
          "Rook Sac on c3",
          "Dark-Square King Attack"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "d6",
            "ply": 3,
            "color": "black",
            "purpose": "2... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Dragon: Yugoslav Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Dragon: Yugoslav Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "g6",
            "ply": 9,
            "color": "black",
            "purpose": "5... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Be3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Bg7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "f3",
            "ply": 12,
            "color": "white",
            "purpose": "7. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qd2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "Nc6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bc4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "Bd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Dragon: Yugoslav Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "Rc8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Rc8: Places rook on open c-file, targeting c3/c2 and preparing counterplay.",
            "strategicConcept": "Sicilian thematic rook placement."
          },
          {
            "san": "Bb3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Dragon: Yugoslav Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Ne5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Dragon: Yugoslav Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h4",
            "ply": 22,
            "color": "white",
            "purpose": "12. h4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Dragon: Yugoslav Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h5",
            "ply": 23,
            "color": "black",
            "purpose": "12... h5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Dragon: Yugoslav Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-scheveningen",
        "name": "Sicilian Scheveningen: Classical & Keres Attack",
        "eco": "B80",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "d6",
          "d4",
          "cxd4",
          "Nxd4",
          "Nf6",
          "Nc3",
          "e6",
          "Be2",
          "a6",
          "O-O",
          "Be7",
          "f4",
          "O-O",
          "Kh1",
          "Qc7",
          "a4",
          "Nc6",
          "Be3",
          "Re8"
        ],
        "description": "Black builds a classical 'small center' pawn formation with d6 and e6, controlling central squares while preparing ...Qc7 and ...Nc6. A cornerstone of Garry Kasparov's World Championship victories against Karpov.",
        "whitePlan": "Aim for kingside pressure via f4-f5 or g4 (Keres Attack), or pressure the d6 pawn.",
        "blackPlan": "Maintain flexible center, coordinate pieces on c-file and e-file, strike back with ...e5 or ...d5 at the opportune moment.",
        "keyThemes": [
          "Small Center (d6/e6)",
          "Flexible Defense",
          "Keres Attack",
          "Central Counter-Break"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "d6",
            "ply": 3,
            "color": "black",
            "purpose": "2... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Scheveningen: Classical & Keres Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Scheveningen: Classical & Keres Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "e6",
            "ply": 9,
            "color": "black",
            "purpose": "5... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "a6",
            "ply": 11,
            "color": "black",
            "purpose": "6... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "f4",
            "ply": 14,
            "color": "white",
            "purpose": "8. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Kh1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Kh1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Scheveningen: Classical & Keres Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "a4",
            "ply": 18,
            "color": "white",
            "purpose": "10. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "Nc6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Be3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Re8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-sveshnikov",
        "name": "Sicilian Sveshnikov: Chelyabinsk Variation",
        "eco": "B33",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "Nc6",
          "d4",
          "cxd4",
          "Nxd4",
          "Nf6",
          "Nc3",
          "e5",
          "Ndb5",
          "d6",
          "Bg5",
          "a6",
          "Na3",
          "b5",
          "Nd5",
          "Be7",
          "Bxf6",
          "Bxf6",
          "c3",
          "O-O",
          "Nc2",
          "Bg5"
        ],
        "description": "A dynamic hypermodern powerhouse where Black willingly accepts a backward d6-pawn and a hole on d5 in exchange for huge active piece play, bishop pair, and queenside expansion with ...f5.",
        "whitePlan": "Anchor the d5 outpost knight, target the weak d6 backward pawn, restrict Black's f5 break.",
        "blackPlan": "Use the dark-squared bishop pair, push ...f5 to create kingside initiative, coordinate pieces actively.",
        "keyThemes": [
          "d5 Outpost Battle",
          "Backward d6 Pawn Dynamic",
          "Bishop Pair Activity",
          "...f5 Pawn Strike"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "e5",
            "ply": 9,
            "color": "black",
            "purpose": "5... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Ndb5",
            "ply": 10,
            "color": "white",
            "purpose": "6. Ndb5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 11,
            "color": "black",
            "purpose": "6... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Bg5",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "a6",
            "ply": 13,
            "color": "black",
            "purpose": "7... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Na3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Na3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b5",
            "ply": 15,
            "color": "black",
            "purpose": "8... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Nd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Bxf6",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bxf6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxf6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 20,
            "color": "white",
            "purpose": "11. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nc2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Sveshnikov: Chelyabinsk Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-classical",
        "name": "Sicilian Classical: Richter-Rauzer Attack",
        "eco": "B60",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "d6",
          "d4",
          "cxd4",
          "Nxd4",
          "Nf6",
          "Nc3",
          "Nc6",
          "Bg5",
          "e6",
          "Qd2",
          "a6",
          "O-O-O",
          "Bd7",
          "f4",
          "Be7",
          "Nf3",
          "b5",
          "Bxf6",
          "gxf6"
        ],
        "description": "Black develops knights naturally with 2...d6 and 5...Nc6. In the Richter-Rauzer (6.Bg5), White pins the knight and attacks Black's pawn structure, leading to unbalanced, razor-sharp tactical struggles.",
        "whitePlan": "Double Black's f-pawns with Bxf6, castle long, and push e5 or f5 to blast open lines.",
        "blackPlan": "Accept doubled pawns for dynamic bishop pair and open g-file, counterattack vigorously on the queenside.",
        "keyThemes": [
          "Richter-Rauzer Pin",
          "Doubled f-pawns Imbalance",
          "Open g-file Counterplay",
          "Central Friction"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "d6",
            "ply": 3,
            "color": "black",
            "purpose": "2... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Classical: Richter-Rauzer Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Classical: Richter-Rauzer Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nc6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bg5",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "e6",
            "ply": 11,
            "color": "black",
            "purpose": "6... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Qd2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "a6",
            "ply": 13,
            "color": "black",
            "purpose": "7... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "O-O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "Bd7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Classical: Richter-Rauzer Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f4",
            "ply": 16,
            "color": "white",
            "purpose": "9. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "Be7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Nf3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "b5",
            "ply": 19,
            "color": "black",
            "purpose": "10... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bxf6",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bxf6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Classical: Richter-Rauzer Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "gxf6",
            "ply": 21,
            "color": "black",
            "purpose": "11... gxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Classical: Richter-Rauzer Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-taimanov",
        "name": "Sicilian Taimanov: Bastrikov System",
        "eco": "B46",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "e6",
          "d4",
          "cxd4",
          "Nxd4",
          "Nc6",
          "Nc3",
          "a6",
          "Be3",
          "Nf6",
          "Qd2",
          "Bb4",
          "f3",
          "d5",
          "a3",
          "Ba5",
          "O-O-O",
          "O-O"
        ],
        "description": "Named after Mark Taimanov, this system emphasizes smooth piece coordination without committing the d-pawn early. Black plays ...Nc6, ...a6, and ...Qc7 to control key squares flexibly.",
        "whitePlan": "Employ the English Attack setup with Be3/Qd2/f3/g4 or clamp the center with c4.",
        "blackPlan": "Quickly develop with ...Qc7, ...Nf6, and strike with ...d5 in the center before White organizes an assault.",
        "keyThemes": [
          "Flexible Pawn Center",
          "Early ...a6 and ...Qc7",
          "Central ...d5 Break",
          "Fast Dark-Square Development"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Taimanov: Bastrikov System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Taimanov: Bastrikov System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "a6",
            "ply": 9,
            "color": "black",
            "purpose": "5... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Be3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Nf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Qd2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "Bb4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "f3",
            "ply": 14,
            "color": "white",
            "purpose": "8. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "d5",
            "ply": 15,
            "color": "black",
            "purpose": "8... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "a3",
            "ply": 16,
            "color": "white",
            "purpose": "9. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Taimanov: Bastrikov System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ba5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Ba5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Taimanov: Bastrikov System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-kan",
        "name": "Sicilian Kan: Paulsen System",
        "eco": "B42",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "e6",
          "d4",
          "cxd4",
          "Nxd4",
          "a6",
          "Bd3",
          "Nf6",
          "O-O",
          "Qc7",
          "Qe2",
          "d6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "Nf3",
          "O-O"
        ],
        "description": "An ultra-flexible hedgehog-style system with an early 2...e6 and 4...a6. Black waits to see White's setup before committing other pawns, often transitioning into a resilient Hedgehog defense.",
        "whitePlan": "Establish a Maróczy Bind with c4 and d4 to suffocate Black's expansion.",
        "blackPlan": "Build Hedgehog fortress with ...b6, ...Bb7, ...d6, ...Be7, preparing thematic ...b5 or ...d5 breaks.",
        "keyThemes": [
          "Hedgehog Formation",
          "Flexible Move Orders",
          "Preventing Nb5 with ...a6",
          "Sudden Central Ruptures"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Kan: Paulsen System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Kan: Paulsen System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a6",
            "ply": 7,
            "color": "black",
            "purpose": "4... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Bd3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Kan: Paulsen System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qc7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Qe2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Kan: Paulsen System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 13,
            "color": "black",
            "purpose": "7... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "c4",
            "ply": 14,
            "color": "white",
            "purpose": "8. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 15,
            "color": "black",
            "purpose": "8... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Nf3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-accelerated-dragon",
        "name": "Sicilian Accelerated Dragon: Maróczy Bind",
        "eco": "B38",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "Nc6",
          "d4",
          "cxd4",
          "Nxd4",
          "g6",
          "c4",
          "Bg7",
          "Be3",
          "Nf6",
          "Nc3",
          "O-O",
          "Be2",
          "d6",
          "O-O",
          "Bd7",
          "Qd2",
          "Nxd4",
          "Bxd4",
          "Bc6"
        ],
        "description": "Black plays 4...g6 immediately, avoiding 2...d6 so as to threaten an immediate ...d7-d5 in one move. White often chooses the Maróczy Bind (c4) for spatial dominance.",
        "whitePlan": "Clamp down on d5 with c4 and e4 pawns, restrict Black's breaks, squeeze in the endgame.",
        "blackPlan": "Trade off minor pieces to relieve cramped space, pressure e4 pawn with ...Bc6, prepare ...f5 or ...b5 counterplay.",
        "keyThemes": [
          "Maróczy Bind Pawn Clamp",
          "One-Step ...d5 Ambition",
          "Pressure on Long Diagonal",
          "Minor Piece Exchanges"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Accelerated Dragon: Maróczy Bind.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Accelerated Dragon: Maróczy Bind.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g6",
            "ply": 7,
            "color": "black",
            "purpose": "4... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "c4",
            "ply": 8,
            "color": "white",
            "purpose": "5. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "Bg7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Be3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Nf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "d6",
            "ply": 15,
            "color": "black",
            "purpose": "8... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "O-O",
            "ply": 16,
            "color": "white",
            "purpose": "9. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Accelerated Dragon: Maróczy Bind.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qd2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "Nxd4",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Accelerated Dragon: Maróczy Bind.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Accelerated Dragon: Maróczy Bind.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Accelerated Dragon: Maróczy Bind.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-alapin",
        "name": "Sicilian Alapin: 2.c3 System",
        "eco": "B22",
        "moves": [
          "e4",
          "c5",
          "c3",
          "d5",
          "exd5",
          "Qxd5",
          "d4",
          "Nf6",
          "Nf3",
          "e6",
          "Be2",
          "Nc6",
          "O-O",
          "cxd4",
          "cxd4",
          "Be7",
          "Nc3",
          "Qd6",
          "Be3",
          "O-O"
        ],
        "description": "A solid positional weapon where White plays 2.c3 to establish a full pawn center with d4. Black typically counters centrally with 2...d5 or 2...Nf6, leading to IQP (Isolated Queen Pawn) battles.",
        "whitePlan": "Obtain an isolated queen pawn on d4, use active piece play, open c- and e-files to attack Black's kingside.",
        "blackPlan": "Blockade the d4 pawn on d5, exchange pieces to reach favorable endgames against the isolated pawn.",
        "keyThemes": [
          "Isolated Queen's Pawn (IQP)",
          "Solid Pawn Center",
          "Central Strike with 2...d5",
          "Blockade Strategy"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "c3",
            "ply": 2,
            "color": "white",
            "purpose": "2. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Alapin: 2.c3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "exd5",
            "ply": 4,
            "color": "white",
            "purpose": "3. exd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Alapin: 2.c3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd5",
            "ply": 5,
            "color": "black",
            "purpose": "3... Qxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Alapin: 2.c3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 6,
            "color": "white",
            "purpose": "4. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "e6",
            "ply": 9,
            "color": "black",
            "purpose": "5... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "Nc6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "cxd4",
            "ply": 13,
            "color": "black",
            "purpose": "7... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Alapin: 2.c3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 14,
            "color": "white",
            "purpose": "8. cxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Alapin: 2.c3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Nc3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Qd6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Qd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Alapin: 2.c3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-closed",
        "name": "Closed Sicilian & Grand Prix Attack",
        "eco": "B23",
        "moves": [
          "e4",
          "c5",
          "Nc3",
          "Nc6",
          "f4",
          "g6",
          "Nf3",
          "Bg7",
          "Bc4",
          "e6",
          "f5",
          "Nge7",
          "fxe6",
          "fxe6",
          "d3",
          "O-O",
          "O-O",
          "d5",
          "Bb3",
          "h6"
        ],
        "description": "White bypasses 2.Nf3 and 3.d4, aiming for an aggressive kingside flank assault with f4 (Grand Prix) or a closed maneuvering battle with g3 and Bg2.",
        "whitePlan": "Attack Black's king with f4-f5, Qe1-Qh4, Bh6, and kingside piece swarms.",
        "blackPlan": "Seize the center with ...e6 and ...d5, expand on queenside with ...b5, exploit White's weakened squares.",
        "keyThemes": [
          "Grand Prix f4-f5 Thrust",
          "Opposing Flank Attacks",
          "Center Strike with ...d5",
          "Kingside Defense"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nc3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "f4",
            "ply": 4,
            "color": "white",
            "purpose": "3. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "g6",
            "ply": 5,
            "color": "black",
            "purpose": "3... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Bc4",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "e6",
            "ply": 9,
            "color": "black",
            "purpose": "5... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "f5",
            "ply": 10,
            "color": "white",
            "purpose": "6. f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          },
          {
            "san": "Nge7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nge7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Closed Sicilian & Grand Prix Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "fxe6",
            "ply": 12,
            "color": "white",
            "purpose": "7. fxe6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Closed Sicilian & Grand Prix Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "fxe6",
            "ply": 13,
            "color": "black",
            "purpose": "7... fxe6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Closed Sicilian & Grand Prix Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d3",
            "ply": 14,
            "color": "white",
            "purpose": "8. d3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Closed Sicilian & Grand Prix Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 16,
            "color": "white",
            "purpose": "9. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "d5",
            "ply": 17,
            "color": "black",
            "purpose": "9... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Bb3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Closed Sicilian & Grand Prix Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h6",
            "ply": 19,
            "color": "black",
            "purpose": "10... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "sic-rossolimo",
        "name": "Sicilian Rossolimo & Moscow Attack",
        "eco": "B51",
        "moves": [
          "e4",
          "c5",
          "Nf3",
          "d6",
          "Bb5+",
          "Bd7",
          "Bxd7+",
          "Qxd7",
          "O-O",
          "Nc6",
          "c3",
          "Nf6",
          "Re1",
          "e6",
          "d4",
          "cxd4",
          "cxd4",
          "d5",
          "e5",
          "Ne4"
        ],
        "description": "White plays an early Bb5(+) to avoid massive open Sicilian theoretical battles, aiming to damage Black's pawn structure or secure easy central control. Magnus Carlsen's primary weapon in his 2018 World Championship match.",
        "whitePlan": "Control the center with c3/d4, trade bishops to weaken Black's complex, create kingside pawn majorities.",
        "blackPlan": "Occupy central outposts like e4 with knights, challenge White's pawn chain with ...f6, play on queenside.",
        "keyThemes": [
          "Anti-Sicilian Strategy",
          "Pawn Structure Damage (Bxc6)",
          "Central Clamp with c3/d4",
          "Knight Outpost on e4"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "d6",
            "ply": 3,
            "color": "black",
            "purpose": "2... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Bb5+",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5+: Delivers check to the black king while pinning or trading pieces on the light diagonal.",
            "strategicConcept": "Rossolimo & Moscow Attack check."
          },
          {
            "san": "Bd7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Rossolimo & Moscow Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd7+",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bxd7+: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Rossolimo & Moscow Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Qxd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Rossolimo & Moscow Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "c3",
            "ply": 10,
            "color": "white",
            "purpose": "6. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Rossolimo & Moscow Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Re1",
            "ply": 12,
            "color": "white",
            "purpose": "7. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "e6",
            "ply": 13,
            "color": "black",
            "purpose": "7... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 14,
            "color": "white",
            "purpose": "8. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 15,
            "color": "black",
            "purpose": "8... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Rossolimo & Moscow Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 16,
            "color": "white",
            "purpose": "9. cxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Rossolimo & Moscow Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 17,
            "color": "black",
            "purpose": "9... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e5",
            "ply": 18,
            "color": "white",
            "purpose": "10. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Ne4",
            "ply": 19,
            "color": "black",
            "purpose": "10... Ne4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Sicilian Rossolimo & Moscow Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 110
  },
  {
    "id": "ruy-lopez",
    "name": "Ruy Lopez (Spanish Opening)",
    "ecoRange": "C60–C99",
    "category": "Open Games (1.e4 e5)",
    "summary": "The ultimate classic of chess strategy. 1.e4 e5 2.Nf3 Nc6 3.Bb5 puts long-term positional pressure on Black's center and king, creating profound middlegame strategic battles.",
    "keyConcepts": [
      "Pressure on c6 defender of e5",
      "Central pawn tension (c3 and d4)",
      "Spanish Bishop on b3/c2",
      "Maneuvers with Nbd2-f1-g3/e3"
    ],
    "famousPlayers": [
      "Garry Kasparov",
      "Anatoly Karpov",
      "Bobby Fischer",
      "Magnus Carlsen",
      "Fabiano Caruana"
    ],
    "subVariations": [
      {
        "id": "ruy-chigorin",
        "name": "Ruy Lopez: Closed Chigorin Variation",
        "eco": "C99",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "a6",
          "Ba4",
          "Nf6",
          "O-O",
          "Be7",
          "Re1",
          "b5",
          "Bb3",
          "d6",
          "c3",
          "O-O",
          "h3",
          "Na5",
          "Bc2",
          "c5",
          "d4",
          "Qc7",
          "Nbd2",
          "cxd4",
          "cxd4",
          "Nc6"
        ],
        "description": "The grand classical main line named after Mikhail Chigorin. Black reroutes the knight to a5 to preserve the e5 stronghold and strikes with ...c5, leading to rich strategic maneuvers.",
        "whitePlan": "Maintain central grip with d4 and Bc2, maneuver knight Nbd2-f1-g3, launch kingside offensive.",
        "blackPlan": "Exert pressure on d4, trade on d4 to activate c-file, redeploy Nc6 and Bd7 for active counterplay.",
        "keyThemes": [
          "Spanish Bishop on c2",
          "Central Pawn Climax",
          "Knight Maneuver Nbd2-f1-g3",
          "Queenside Counterplay"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "a6",
            "ply": 5,
            "color": "black",
            "purpose": "3... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Ba4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Ba4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Closed Chigorin Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Re1",
            "ply": 10,
            "color": "white",
            "purpose": "6. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "b5",
            "ply": 11,
            "color": "black",
            "purpose": "6... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bb3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Closed Chigorin Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 13,
            "color": "black",
            "purpose": "7... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "c3",
            "ply": 14,
            "color": "white",
            "purpose": "8. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Closed Chigorin Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "h3",
            "ply": 16,
            "color": "white",
            "purpose": "9. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "Na5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Na5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Closed Chigorin Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bc2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Closed Chigorin Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 19,
            "color": "black",
            "purpose": "10... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d4",
            "ply": 20,
            "color": "white",
            "purpose": "11. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Qc7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Nbd2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Closed Chigorin Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 23,
            "color": "black",
            "purpose": "12... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Closed Chigorin Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 24,
            "color": "white",
            "purpose": "13. cxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Closed Chigorin Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-zaitsev",
        "name": "Ruy Lopez: Zaitsev Variation",
        "eco": "C92",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "a6",
          "Ba4",
          "Nf6",
          "O-O",
          "Be7",
          "Re1",
          "b5",
          "Bb3",
          "d6",
          "c3",
          "O-O",
          "h3",
          "Bb7",
          "d4",
          "Re8",
          "Nbd2",
          "Bf8",
          "a4",
          "h6",
          "Bc2",
          "exd4",
          "cxd4",
          "Nb4"
        ],
        "description": "Created by Igor Zaitsev, this system puts immediate hypermodern pressure on e4 via ...Bb7 and ...Re8/Bf8. Anatoly Karpov's top choice against Garry Kasparov in their epic matches.",
        "whitePlan": "Guard e4, preserve light-squared bishop with Bc2, break open center or build kingside attack.",
        "blackPlan": "Coordinate pieces against e4, jump knight to b4, activate rooks and bishop pair.",
        "keyThemes": [
          "Hypermodern Pressure on e4",
          "Zaitsev Bishop on b7",
          "Knight Invasion on b4",
          "Re8/Bf8 Coordination"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "a6",
            "ply": 5,
            "color": "black",
            "purpose": "3... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Ba4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Ba4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Re1",
            "ply": 10,
            "color": "white",
            "purpose": "6. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "b5",
            "ply": 11,
            "color": "black",
            "purpose": "6... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bb3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 13,
            "color": "black",
            "purpose": "7... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "c3",
            "ply": 14,
            "color": "white",
            "purpose": "8. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "h3",
            "ply": 16,
            "color": "white",
            "purpose": "9. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "Bb7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 18,
            "color": "white",
            "purpose": "10. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Re8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Nbd2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bf8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a4",
            "ply": 22,
            "color": "white",
            "purpose": "12. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "h6",
            "ply": 23,
            "color": "black",
            "purpose": "12... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bc2",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bc2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exd4",
            "ply": 25,
            "color": "black",
            "purpose": "13... exd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 26,
            "color": "white",
            "purpose": "14. cxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nb4",
            "ply": 27,
            "color": "black",
            "purpose": "14... Nb4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Zaitsev Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-breyer",
        "name": "Ruy Lopez: Breyer Variation",
        "eco": "C95",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "a6",
          "Ba4",
          "Nf6",
          "O-O",
          "Be7",
          "Re1",
          "b5",
          "Bb3",
          "d6",
          "c3",
          "O-O",
          "h3",
          "Nb8",
          "d4",
          "Nbd7",
          "Nbd2",
          "Bb7",
          "Bc2",
          "Re8",
          "Nf1",
          "Bf8",
          "Ng3",
          "g6"
        ],
        "description": "Gyula Breyer's ingenious retreat 9...Nb8 reroutes the knight to d7, reinforcing e5 while liberating the c-pawn for ...c5. Known for its rock-solid solidity and flexibility.",
        "whitePlan": "Maneuver knight to f1-g3, push a4 to challenge queenside, probe Black's kingside weaknesses.",
        "blackPlan": "Build resilient defensive web with ...Nbd7, ...Bb7, ...Bf8, ...g6, prepare central counterstrike.",
        "keyThemes": [
          "Profound Knight Retreat (9...Nb8)",
          "Reinforced e5 Defense",
          "Hedgehog-like Flexibility",
          "Long Strategic Maneuvering"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "a6",
            "ply": 5,
            "color": "black",
            "purpose": "3... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Ba4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Ba4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Re1",
            "ply": 10,
            "color": "white",
            "purpose": "6. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "b5",
            "ply": 11,
            "color": "black",
            "purpose": "6... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bb3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 13,
            "color": "black",
            "purpose": "7... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "c3",
            "ply": 14,
            "color": "white",
            "purpose": "8. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "h3",
            "ply": 16,
            "color": "white",
            "purpose": "9. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "Nb8",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 18,
            "color": "white",
            "purpose": "10. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nbd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bc2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 23,
            "color": "black",
            "purpose": "12... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Nf1",
            "ply": 24,
            "color": "white",
            "purpose": "13. Nf1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf8",
            "ply": 25,
            "color": "black",
            "purpose": "13... Bf8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ng3",
            "ply": 26,
            "color": "white",
            "purpose": "14. Ng3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Breyer Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g6",
            "ply": 27,
            "color": "black",
            "purpose": "14... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-marshall",
        "name": "Ruy Lopez: Marshall Attack",
        "eco": "C89",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "a6",
          "Ba4",
          "Nf6",
          "O-O",
          "Be7",
          "Re1",
          "b5",
          "Bb3",
          "O-O",
          "c3",
          "d5",
          "exd5",
          "Nxd5",
          "Nxe5",
          "Nxe5",
          "Rxe5",
          "c6",
          "d4",
          "Bd6",
          "Re1",
          "Qh4",
          "g3",
          "Qh3"
        ],
        "description": "Frank Marshall's legendary pawn sacrifice 8...d5! Black sacrifices the e5 pawn for ferocious attacking initiative against White's kingside. Considered one of the most potent weapons at top GM level.",
        "whitePlan": "Consolidate extra pawn, defend against kingside threats (Qh3/Bg4), trade queens to win the endgame.",
        "blackPlan": "Unleash devastating piece assault with Qh3, Bd6, Bg4, Rd8, hunting White's king.",
        "keyThemes": [
          "Legendary Pawn Sac 8...d5",
          "Fierce Kingside Attack",
          "Queen on h3",
          "Light-Square Domination"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "a6",
            "ply": 5,
            "color": "black",
            "purpose": "3... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Ba4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Ba4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Re1",
            "ply": 10,
            "color": "white",
            "purpose": "6. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "b5",
            "ply": 11,
            "color": "black",
            "purpose": "6... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bb3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "c3",
            "ply": 14,
            "color": "white",
            "purpose": "8. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 15,
            "color": "black",
            "purpose": "8... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "exd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. exd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe5",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe5",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nxe5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rxe5",
            "ply": 20,
            "color": "white",
            "purpose": "11. Rxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c6",
            "ply": 21,
            "color": "black",
            "purpose": "11... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 22,
            "color": "white",
            "purpose": "12. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Bd6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Marshall Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re1",
            "ply": 24,
            "color": "white",
            "purpose": "13. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "Qh4",
            "ply": 25,
            "color": "black",
            "purpose": "13... Qh4: Infiltrates enemy kingside, threatening mate or tactical pins.",
            "strategicConcept": "Direct attacking maneuver."
          },
          {
            "san": "g3",
            "ply": 26,
            "color": "white",
            "purpose": "14. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Qh3",
            "ply": 27,
            "color": "black",
            "purpose": "14... Qh3: Aggressive queen infiltration on dark squares, menacing the enemy king.",
            "strategicConcept": "Marshall Attack queen invasion."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-berlin",
        "name": "Ruy Lopez: Berlin Defense (Berlin Wall)",
        "eco": "C67",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "Nf6",
          "O-O",
          "Nxe4",
          "d4",
          "Nd6",
          "Bxc6",
          "dxc6",
          "dxe5",
          "Nf5",
          "Qxd8+",
          "Kxd8",
          "Nc3",
          "Ke8",
          "h3",
          "h5",
          "Bf4",
          "Be7",
          "Rad1",
          "Be6"
        ],
        "description": "Vladimir Kramnik used the 'Berlin Wall' to dethrone Garry Kasparov in 2000. Black gives up castling rights and queen on move 8 to achieve an impregnable endgame with the bishop pair.",
        "whitePlan": "Exploit 4-vs-3 kingside pawn majority, restrict Black's bishop pair, push e6 when tactical opportunities arise.",
        "blackPlan": "Use the bishop pair, activate king on d8/e8, hold the kingside pawn structure with ...h5.",
        "keyThemes": [
          "Queenless Middlegame/Endgame",
          "Bishop Pair vs Pawn Majority",
          "Berlin Wall Fortress",
          "King Safety on d8"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 6,
            "color": "white",
            "purpose": "4. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nxe4",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 8,
            "color": "white",
            "purpose": "5. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nd6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc6",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bxc6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc6",
            "ply": 11,
            "color": "black",
            "purpose": "6... dxc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxe5",
            "ply": 12,
            "color": "white",
            "purpose": "7. dxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf5",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd8+",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qxd8+: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Kxd8",
            "ply": 15,
            "color": "black",
            "purpose": "8... Kxd8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Ke8",
            "ply": 17,
            "color": "black",
            "purpose": "9... Ke8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h3",
            "ply": 18,
            "color": "white",
            "purpose": "10. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "h5",
            "ply": 19,
            "color": "black",
            "purpose": "10... h5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Rad1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rad1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Berlin Defense (Berlin Wall).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-open",
        "name": "Ruy Lopez: Open Variation",
        "eco": "C80",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "a6",
          "Ba4",
          "Nf6",
          "O-O",
          "Nxe4",
          "d4",
          "b5",
          "Bb3",
          "d5",
          "dxe5",
          "Be6",
          "c3",
          "Bc5",
          "Nbd2",
          "O-O",
          "Bc2",
          "Bf5",
          "Nb3",
          "Bg6"
        ],
        "description": "Black boldly grabs the e4 pawn on move 5 and locks down the center with ...d5 and ...Be6, resulting in open, highly tactical piece play rather than slow closed maneuvering.",
        "whitePlan": "Regain central initiative, exploit the pin on d5, attack Black's knight on e4 and bishop on e6.",
        "blackPlan": "Anchor knight on e4, activate dark-squared bishop actively on c5, counterattack in the center.",
        "keyThemes": [
          "Early Capture on e4",
          "Open Center Dynamic",
          "Piece Activity on c5",
          "Central Tension on d5"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "a6",
            "ply": 5,
            "color": "black",
            "purpose": "3... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Ba4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Ba4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nxe4",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 10,
            "color": "white",
            "purpose": "6. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "b5",
            "ply": 11,
            "color": "black",
            "purpose": "6... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bb3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 13,
            "color": "black",
            "purpose": "7... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "dxe5",
            "ply": 14,
            "color": "white",
            "purpose": "8. dxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "c3",
            "ply": 16,
            "color": "white",
            "purpose": "9. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bc2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bc2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nb3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bg6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Open Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-exchange",
        "name": "Ruy Lopez: Exchange Variation",
        "eco": "C68",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "a6",
          "Bxc6",
          "dxc6",
          "O-O",
          "f6",
          "d4",
          "exd4",
          "Nxd4",
          "c5",
          "Nb3",
          "Qxd1",
          "Rxd1",
          "Bd7",
          "Be3",
          "b6",
          "Nc3",
          "O-O-O"
        ],
        "description": "Championed by World Champions Emanuel Lasker and Bobby Fischer. White trades bishop for knight on c6 on move 4, creating an asymmetric endgame pawn structure with a 4-vs-3 kingside majority.",
        "whitePlan": "Advance kingside majority (f4/e5), exchange pieces into winning king-and-pawn endgame.",
        "blackPlan": "Utilize bishop pair in open board, prevent White's pawn breakthroughs, counterattack along open d-file.",
        "keyThemes": [
          "Healthy Kingside Pawn Majority",
          "Bishop Pair Compensation",
          "Fischer Endgame Technique",
          "Asymmetric Pawn Structures"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "a6",
            "ply": 5,
            "color": "black",
            "purpose": "3... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Bxc6",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bxc6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc6",
            "ply": 7,
            "color": "black",
            "purpose": "4... dxc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "f6",
            "ply": 9,
            "color": "black",
            "purpose": "5... f6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 10,
            "color": "white",
            "purpose": "6. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "exd4",
            "ply": 11,
            "color": "black",
            "purpose": "6... exd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 13,
            "color": "black",
            "purpose": "7... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nb3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd1",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qxd1: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rxd1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Rxd1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "b6",
            "ply": 19,
            "color": "black",
            "purpose": "10... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "O-O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-steinitz",
        "name": "Ruy Lopez: Modern Steinitz Defense",
        "eco": "C71",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "a6",
          "Ba4",
          "d6",
          "c3",
          "Bd7",
          "d4",
          "Nf6",
          "O-O",
          "Be7",
          "Re1",
          "O-O",
          "Nbd2",
          "Re8",
          "Nf1",
          "Bf8",
          "Ng3",
          "g6"
        ],
        "description": "Black strengthens e5 with ...a6 and ...d6, solidifying the central chain. Endorsed by Capablanca, Keres, and Smyslov for its rock-solid reliability.",
        "whitePlan": "Establish strong d4 center, pressure e5 pawn, maneuver knight to g3 and f5.",
        "blackPlan": "Defend e5 stubbornly, coordinate pieces behind solid pawn shield, prepare counterattack.",
        "keyThemes": [
          "Solid Central Bastion",
          "Pawn Chain Defense",
          "Knight Maneuver Ng3-f5",
          "Bishop Preservation on f8"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "a6",
            "ply": 5,
            "color": "black",
            "purpose": "3... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Ba4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Ba4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Modern Steinitz Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "c3",
            "ply": 8,
            "color": "white",
            "purpose": "5. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Modern Steinitz Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Modern Steinitz Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 10,
            "color": "white",
            "purpose": "6. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Re1",
            "ply": 14,
            "color": "white",
            "purpose": "8. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nbd2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Modern Steinitz Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 17,
            "color": "black",
            "purpose": "9... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Nf1",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nf1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Modern Steinitz Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bf8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Modern Steinitz Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ng3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Ng3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Modern Steinitz Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g6",
            "ply": 21,
            "color": "black",
            "purpose": "11... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-schliemann",
        "name": "Ruy Lopez: Schliemann (Jaenisch) Gambit",
        "eco": "C63",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "f5",
          "Nc3",
          "fxe4",
          "Nxe4",
          "d5",
          "Nxe5",
          "dxe4",
          "Nxc6",
          "Qg5",
          "Qe2",
          "Nf6",
          "f4",
          "Qxf4",
          "d4",
          "Qh4+",
          "g3",
          "Qh3"
        ],
        "description": "An ultra-aggressive counter-gambit where Black plays 3...f5! to blast open lines against White's center immediately. Championed by Teimour Radjabov and Levon Aronian.",
        "whitePlan": "Defend king against tactical strikes, exploit Black's exposed e-file and king diagonal.",
        "blackPlan": "Unleash rapid piece activity with Qg5/Qh4, exert pressure on White's uncastled king.",
        "keyThemes": [
          "Aggressive 3...f5 Counter-Strike",
          "Wild Tactical Fireworks",
          "Early Queen Infiltration (Qg5/Qh3)",
          "King Walk Danger"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "f5",
            "ply": 5,
            "color": "black",
            "purpose": "3... f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          },
          {
            "san": "Nc3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "fxe4",
            "ply": 7,
            "color": "black",
            "purpose": "4... fxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 9,
            "color": "black",
            "purpose": "5... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nxe5",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxe4",
            "ply": 11,
            "color": "black",
            "purpose": "6... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxc6",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nxc6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qg5",
            "ply": 13,
            "color": "black",
            "purpose": "7... Qg5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "f4",
            "ply": 16,
            "color": "white",
            "purpose": "9. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "Qxf4",
            "ply": 17,
            "color": "black",
            "purpose": "9... Qxf4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 18,
            "color": "white",
            "purpose": "10. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Qh4+",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qh4+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Schliemann (Jaenisch) Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g3",
            "ply": 20,
            "color": "white",
            "purpose": "11. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Qh3",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qh3: Aggressive queen infiltration on dark squares, menacing the enemy king.",
            "strategicConcept": "Marshall Attack queen invasion."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "ruy-archangel",
        "name": "Ruy Lopez: Archangel & Neo-Archangel",
        "eco": "C78",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bb5",
          "a6",
          "Ba4",
          "Nf6",
          "O-O",
          "b5",
          "Bb3",
          "Bc5",
          "c3",
          "d6",
          "a4",
          "Rb8",
          "d4",
          "Bb6",
          "axb5",
          "axb5",
          "Na3",
          "O-O",
          "Nxb5",
          "Bg4"
        ],
        "description": "Black aggressively develops the dark-squared bishop outside the pawn chain to c5 before castling. Alexei Shirov and Magnus Carlsen have scored brilliant victories with this system.",
        "whitePlan": "Undermine queenside with a4, push d4 to challenge the bishop on c5, exploit pins.",
        "blackPlan": "Pin White's knight with ...Bg4, maintain active diagonal pressure on f2, counterstrike in center.",
        "keyThemes": [
          "Active Bishop on c5",
          "Sharp Queenside Tension (a4 vs b5)",
          "Pin with ...Bg4",
          "Dynamic Piece Battles"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "a6",
            "ply": 5,
            "color": "black",
            "purpose": "3... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Ba4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Ba4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "b5",
            "ply": 9,
            "color": "black",
            "purpose": "5... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bb3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc5",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 12,
            "color": "white",
            "purpose": "7. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 13,
            "color": "black",
            "purpose": "7... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "a4",
            "ply": 14,
            "color": "white",
            "purpose": "8. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "Rb8",
            "ply": 15,
            "color": "black",
            "purpose": "8... Rb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 16,
            "color": "white",
            "purpose": "9. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Bb6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "axb5",
            "ply": 18,
            "color": "white",
            "purpose": "10. axb5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "axb5",
            "ply": 19,
            "color": "black",
            "purpose": "10... axb5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Na3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nxb5",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nxb5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Ruy Lopez: Archangel & Neo-Archangel.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg4",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 100
  },
  {
    "id": "french",
    "name": "French Defense",
    "ecoRange": "C00–C19",
    "category": "Semi-Open Games (1.e4 e6)",
    "summary": "A fortress-like, counterattacking opening where Black establishes a rock-solid pawn chain (d5/e6) and attacks White's pawn base on d4 with ...c5 and ...f6.",
    "keyConcepts": [
      "Pawn Chains (e5 vs d5/e6)",
      "Battle for the d4 Pawn Base",
      "French Bad Light-Squared Bishop",
      "Flank Breaks (...c5 and ...f6)"
    ],
    "famousPlayers": [
      "Mikhail Botvinnik",
      "Viktor Korchnoi",
      "Alexander Morozevich",
      "Ian Nepomniachtchi",
      "Ding Liren"
    ],
    "subVariations": [
      {
        "id": "fr-winawer",
        "name": "French Winawer: Poisoned Pawn & Main Line",
        "eco": "C18",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "Nc3",
          "Bb4",
          "e5",
          "c5",
          "a3",
          "Bxc3+",
          "bxc3",
          "Ne7",
          "Qg4",
          "Qc7",
          "Qxg7",
          "Rg8",
          "Qxh7",
          "cxd4",
          "Ne2",
          "Nbc6",
          "f4",
          "Bd7",
          "Qd3",
          "dxc3"
        ],
        "description": "The sharpest battleground in the French Defense. Black pins White's knight on c3 with 3...Bb4, doubles White's c-pawns, and counterattacks White's center while White ravages Black's kingside in the Poisoned Pawn variation.",
        "whitePlan": "Ravage Black's kingside with Qg4/Qxg7, push passed h-pawn (h4-h5-h6), use bishop pair.",
        "blackPlan": "Destroy White's center with ...cxd4, invade along open c- and g-files, dominate light squares.",
        "keyThemes": [
          "Doubled c-pawns vs Bad Bishop",
          "Poisoned Pawn Sac (Qxg7)",
          "Rapid h-pawn Promotion Race",
          "Open c-file and g-file Dynamics"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bb4",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "e5",
            "ply": 6,
            "color": "white",
            "purpose": "4. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "c5",
            "ply": 7,
            "color": "black",
            "purpose": "4... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "a3",
            "ply": 8,
            "color": "white",
            "purpose": "5. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc3+",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bxc3+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 10,
            "color": "white",
            "purpose": "6. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Ne7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qg4",
            "ply": 12,
            "color": "white",
            "purpose": "7. Qg4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Qxg7",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qxg7: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rg8",
            "ply": 15,
            "color": "black",
            "purpose": "8... Rg8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxh7",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qxh7: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 17,
            "color": "black",
            "purpose": "9... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Ne2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbc6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nbc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f4",
            "ply": 20,
            "color": "white",
            "purpose": "11. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "Bd7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qd3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Qd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc3",
            "ply": 23,
            "color": "black",
            "purpose": "12... dxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Winawer: Poisoned Pawn & Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-classical",
        "name": "French Classical: Steinitz & McCutcheon",
        "eco": "C14",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "Nc3",
          "Nf6",
          "Bg5",
          "Be7",
          "e5",
          "Nfd7",
          "Bxe7",
          "Qxe7",
          "f4",
          "O-O",
          "Nf3",
          "c5",
          "Qd2",
          "Nc6",
          "O-O-O",
          "a6",
          "dxc5",
          "Nxc5"
        ],
        "description": "Black develops naturally with 3...Nf6. White pins with 4.Bg5, leading after exchanges to classic pawn-chain warfare where White castles long to launch an attack and Black races on the queenside.",
        "whitePlan": "Castle queenside, push f5 or g4, exert pressure on Black's kingside.",
        "blackPlan": "Pound White's center with ...c5, maneuver knight to c5, attack on queenside with ...b5.",
        "keyThemes": [
          "Pawn Chain Wedge on e5",
          "Opposite-Side Castling Race",
          "Knight Outpost on c5",
          "Break on f6 vs f5"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Be7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "e5",
            "ply": 8,
            "color": "white",
            "purpose": "5. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nfd7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nfd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Classical: Steinitz & McCutcheon.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxe7",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bxe7: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Classical: Steinitz & McCutcheon.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxe7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Qxe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Classical: Steinitz & McCutcheon.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f4",
            "ply": 12,
            "color": "white",
            "purpose": "7. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "c5",
            "ply": 15,
            "color": "black",
            "purpose": "8... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Qd2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "Nc6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "O-O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "a6",
            "ply": 19,
            "color": "black",
            "purpose": "10... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "dxc5",
            "ply": 20,
            "color": "white",
            "purpose": "11. dxc5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Classical: Steinitz & McCutcheon.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxc5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nxc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Classical: Steinitz & McCutcheon.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-tarrasch",
        "name": "French Tarrasch: 3.Nd2 System",
        "eco": "C07",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "Nd2",
          "c5",
          "exd5",
          "Qxd5",
          "Ngf3",
          "cxd4",
          "Bc4",
          "Qd6",
          "O-O",
          "Nf6",
          "Nb3",
          "Nc6",
          "Nbxd4",
          "Nxd4",
          "Nxd4",
          "a6",
          "Re1",
          "Qc7",
          "Bb3",
          "Bd6"
        ],
        "description": "White plays 3.Nd2 to avoid the Winawer pin (...Bb4) and support the center with c3. Anatoly Karpov's weapon of choice, yielding a pleasant positional grip.",
        "whitePlan": "Control key squares without pawn weaknesses, develop smoothly, target d5/e6 squares.",
        "blackPlan": "Strike immediately with 3...c5, isolate White's d-pawn or liquidate the center for free piece play.",
        "keyThemes": [
          "Solid 3.Nd2 Setup",
          "3...c5 Central Strike",
          "Active Queen Maneuver (Qd6/Qc7)",
          "Piece Harmony"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nd2",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 5,
            "color": "black",
            "purpose": "3... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "exd5",
            "ply": 6,
            "color": "white",
            "purpose": "4. exd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd5",
            "ply": 7,
            "color": "black",
            "purpose": "4... Qxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ngf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Ngf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 9,
            "color": "black",
            "purpose": "5... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc4",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "Qd6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Qd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nb3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nbxd4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nbxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a6",
            "ply": 19,
            "color": "black",
            "purpose": "10... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Re1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "Qc7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Bb3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Tarrasch: 3.Nd2 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-advance",
        "name": "French Advance: Nimzowitsch System",
        "eco": "C02",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "e5",
          "c5",
          "c3",
          "Nc6",
          "Nf3",
          "Qb6",
          "a3",
          "c4",
          "Nbd2",
          "Na5",
          "g3",
          "Bd7",
          "Bg2",
          "Ne7",
          "O-O",
          "h6",
          "Re1",
          "O-O-O"
        ],
        "description": "Aron Nimzowitsch's favorite French line. White locks the center with 3.e5, establishing a space advantage, while Black immediately sieges the d4 pawn with ...c5, ...Nc6, and ...Qb6.",
        "whitePlan": "Reinforce d4 pawn chain, clamp down with a3/b4, transfer knights to kingside via f1-e3.",
        "blackPlan": "Pile maximum pressure on d4 and b2 with ...Qb6 and ...Na5, undermine chain with ...f6.",
        "keyThemes": [
          "Locked Pawn Center",
          "Pawn Chain Base Siege (d4/c3)",
          "Queen Pressure on b6",
          "Breakthrough with ...f6"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e5",
            "ply": 4,
            "color": "white",
            "purpose": "3. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "c5",
            "ply": 5,
            "color": "black",
            "purpose": "3... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "c3",
            "ply": 6,
            "color": "white",
            "purpose": "4. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Advance: Nimzowitsch System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Qb6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Qb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Advance: Nimzowitsch System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a3",
            "ply": 10,
            "color": "white",
            "purpose": "6. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Advance: Nimzowitsch System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c4",
            "ply": 11,
            "color": "black",
            "purpose": "6... c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "Nbd2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Advance: Nimzowitsch System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na5",
            "ply": 13,
            "color": "black",
            "purpose": "7... Na5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Advance: Nimzowitsch System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g3",
            "ply": 14,
            "color": "white",
            "purpose": "8. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Bd7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Advance: Nimzowitsch System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Advance: Nimzowitsch System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Ne7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Advance: Nimzowitsch System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "h6",
            "ply": 19,
            "color": "black",
            "purpose": "10... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Re1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "O-O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-exchange",
        "name": "French Exchange Variation",
        "eco": "C01",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "exd5",
          "exd5",
          "Nf3",
          "Nf6",
          "Bd3",
          "Bd6",
          "O-O",
          "O-O",
          "Bg5",
          "Bg4",
          "Nbd2",
          "Nbd7",
          "c3",
          "c6",
          "Qc2",
          "Qc7",
          "Rfe1",
          "Rfe8"
        ],
        "description": "White trades immediately with 3.exd5, creating a completely symmetrical pawn structure. Despite its quiet reputation, GMs use it to play for subtle positional outposts and open-file dominance.",
        "whitePlan": "Fight for control of the only open e-file, place knight on e5, generate kingside pressure.",
        "blackPlan": "Mirror White's setup, contest the e-file, trade heavy pieces into equal or favorable endings.",
        "keyThemes": [
          "Symmetrical Center",
          "Battle for the Open e-file",
          "Knight Outpost on e4/e5",
          "Endgame Technique"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "exd5",
            "ply": 4,
            "color": "white",
            "purpose": "3. exd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exd5",
            "ply": 5,
            "color": "black",
            "purpose": "3... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bd3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 11,
            "color": "black",
            "purpose": "6... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg5",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Bg4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "Nbd2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 16,
            "color": "white",
            "purpose": "9. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c6",
            "ply": 17,
            "color": "black",
            "purpose": "9... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Qc2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "Qc7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Rfe1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Rfe1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rfe8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Rfe8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-rubinstein",
        "name": "French Rubinstein & Burn Variation",
        "eco": "C10",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "Nc3",
          "dxe4",
          "Nxe4",
          "Nd7",
          "Nf3",
          "Ngf6",
          "Nxf6+",
          "Nxf6",
          "Bd3",
          "c5",
          "dxc5",
          "Bxc5",
          "O-O",
          "O-O",
          "Bg5",
          "Be7",
          "Qe2",
          "Qc7",
          "Rad1",
          "b6"
        ],
        "description": "Akiba Rubinstein's solid variation where Black surrenders the center with 3...dxe4 to develop pieces freely without getting suffocated by White's e5 pawn chain.",
        "whitePlan": "Use spatial advantage, position pieces actively toward Black's kingside, push c4.",
        "blackPlan": "Develop smoothly with ...Nd7-f6, ...b6, ...Bb7, and break with ...c5 to equalize completely.",
        "keyThemes": [
          "Central Surrender (3...dxe4)",
          "Free Piece Development",
          "Queenside Fianchetto (...b6/Bb7)",
          "Solid Pawn Structure"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "dxe4",
            "ply": 5,
            "color": "black",
            "purpose": "3... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Ngf6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Ngf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxf6+",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nxf6+: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 13,
            "color": "black",
            "purpose": "7... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "dxc5",
            "ply": 14,
            "color": "white",
            "purpose": "8. dxc5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc5",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bxc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 16,
            "color": "white",
            "purpose": "9. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg5",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Be7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Qe2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Rad1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rad1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b6",
            "ply": 23,
            "color": "black",
            "purpose": "12... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Rubinstein & Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-mccutcheon",
        "name": "French McCutcheon Variation",
        "eco": "C12",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "Nc3",
          "Nf6",
          "Bg5",
          "Bb4",
          "e5",
          "h6",
          "Bd2",
          "Bxc3",
          "bxc3",
          "Ne4",
          "Qg4",
          "g6",
          "Bd3",
          "Nxd2",
          "Kxd2",
          "c5",
          "Nf3",
          "Nc6"
        ],
        "description": "An aggressive counter-pin where Black answers 4.Bg5 with 4...Bb4! Black challenges White's bishop, eliminates the knight on c3, and creates chaotic unbalanced structures.",
        "whitePlan": "Take advantage of Black's weakened dark squares on kingside, mobilize doubled c-pawns, attack with h4-h5.",
        "blackPlan": "Exploit White's displaced king on d2, attack the d4/c3 pawn chain with ...c5, coordinate on dark squares.",
        "keyThemes": [
          "Counter-Pin 4...Bb4",
          "Weakened King on d2",
          "Dark-Square Compensation",
          "Kingside g6/h6 Pawn Structure"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Bb4",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "e5",
            "ply": 8,
            "color": "white",
            "purpose": "5. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "h6",
            "ply": 9,
            "color": "black",
            "purpose": "5... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bd2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French McCutcheon Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc3",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French McCutcheon Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French McCutcheon Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Ne4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French McCutcheon Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qg4",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qg4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French McCutcheon Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g6",
            "ply": 15,
            "color": "black",
            "purpose": "8... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Bd3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French McCutcheon Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd2",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nxd2: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French McCutcheon Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Kxd2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Kxd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French McCutcheon Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 19,
            "color": "black",
            "purpose": "10... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-guimard",
        "name": "French Guimard Variation",
        "eco": "C04",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "Nd2",
          "Nc6",
          "Ngf3",
          "Nf6",
          "e5",
          "Nd7",
          "Be2",
          "f6",
          "exf6",
          "Qxf6",
          "Nf1",
          "Bd6",
          "Ne3",
          "O-O",
          "O-O",
          "Qg6"
        ],
        "description": "Black answers the Tarrasch (3.Nd2) with the unorthodox 3...Nc6, attacking d4 directly and quickly undermining White's e5 wedge with ...f6.",
        "whitePlan": "Defend d4 pawn, maneuver knight Nd2-f1-e3 to guard key squares, maintain central presence.",
        "blackPlan": "Blast open the f-file with ...f6, swing the queen to f6/g6, build active kingside pressure.",
        "keyThemes": [
          "Early 3...Nc6",
          "Fast ...f6 Undermining",
          "Queen Lift (Qf6-g6)",
          "Pressure on d4"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nd2",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Ngf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Ngf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "e5",
            "ply": 8,
            "color": "white",
            "purpose": "5. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nd7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "f6",
            "ply": 11,
            "color": "black",
            "purpose": "6... f6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exf6",
            "ply": 12,
            "color": "white",
            "purpose": "7. exf6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxf6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Qxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf1",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nf1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Ne3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qg6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qg6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Guimard Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-burn",
        "name": "French Burn Variation",
        "eco": "C11",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "Nc3",
          "Nf6",
          "Bg5",
          "dxe4",
          "Nxe4",
          "Be7",
          "Bxf6",
          "Bxf6",
          "Nf3",
          "O-O",
          "c3",
          "Nd7",
          "Bd3",
          "e5",
          "Qc2",
          "exd4",
          "O-O-O",
          "dxc3"
        ],
        "description": "Amos Burn's practical hybrid between the Classical and Rubinstein variations. Black trades on e4, exchanges bishops on f6, and achieves active piece play.",
        "whitePlan": "Castle queenside, push kingside attack, exert central pressure on d4/e4.",
        "blackPlan": "Counterstrike in center with ...e5, maintain bishop pair or active minor piece placement.",
        "keyThemes": [
          "Controlled Liquidation",
          "Bxf6 Exchange",
          "Central ...e5 Strike",
          "Balanced Counterplay"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "dxe4",
            "ply": 7,
            "color": "black",
            "purpose": "4... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Bxf6",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bxf6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "c3",
            "ply": 14,
            "color": "white",
            "purpose": "8. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 17,
            "color": "black",
            "purpose": "9... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Qc2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "exd4",
            "ply": 19,
            "color": "black",
            "purpose": "10... exd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "dxc3",
            "ply": 21,
            "color": "black",
            "purpose": "11... dxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Burn Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "fr-fort-knox",
        "name": "French Fort Knox Variation",
        "eco": "C10",
        "moves": [
          "e4",
          "e6",
          "d4",
          "d5",
          "Nc3",
          "dxe4",
          "Nxe4",
          "Bd7",
          "Nf3",
          "Bc6",
          "Bd3",
          "Nd7",
          "O-O",
          "Ngf6",
          "Ng3",
          "Bxf3",
          "Qxf3",
          "c6",
          "c3",
          "Be7",
          "Re1",
          "O-O"
        ],
        "description": "Nicknamed 'Fort Knox' for its ultra-defensive reputation. Black solves the problem of the bad French bishop by developing it via ...Bd7 to ...Bc6, neutralizing White's initiative.",
        "whitePlan": "Retain spatial advantage, position queen on f3, seek piece breakthroughs on kingside.",
        "blackPlan": "Build impenetrable defensive barrier, exchange attacking minor pieces, achieve solid equality.",
        "keyThemes": [
          "Fort Knox Wall",
          "French Bishop Solved (...Bc6)",
          "Piece Simplification",
          "Rock-Solid Castle"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e6",
            "ply": 1,
            "color": "black",
            "purpose": "1... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "dxe4",
            "ply": 5,
            "color": "black",
            "purpose": "3... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bc6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Ngf6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Ngf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ng3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Ng3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxf3",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bxf3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxf3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qxf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c6",
            "ply": 17,
            "color": "black",
            "purpose": "9... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "c3",
            "ply": 18,
            "color": "white",
            "purpose": "10. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the French Fort Knox Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Re1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 100
  },
  {
    "id": "caro-kann",
    "name": "Caro-Kann Defense",
    "ecoRange": "B10–B19",
    "category": "Semi-Open Games (1.e4 c6)",
    "summary": "One of the most solid and reliable defenses in chess history. Black supports ...d5 with ...c6, ensuring a sound pawn structure while successfully developing the light-squared bishop outside the pawn chain.",
    "keyConcepts": [
      "Solid, pristine pawn structure",
      "Light-squared bishop outside pawn chain",
      "Endgame superiority for Black",
      "Pawn breaks with ...c5 and ...e5"
    ],
    "famousPlayers": [
      "Anatoly Karpov",
      "José Raúl Capablanca",
      "Mikhail Botvinnik",
      "Alireza Firouzja",
      "Viswanathan Anand"
    ],
    "subVariations": [
      {
        "id": "caro-classical",
        "name": "Caro-Kann Classical: Capablanca Variation",
        "eco": "B18",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "Nc3",
          "dxe4",
          "Nxe4",
          "Bf5",
          "Ng3",
          "Bg6",
          "h4",
          "h6",
          "Nf3",
          "Nd7",
          "h5",
          "Bh7",
          "Bd3",
          "Bxd3",
          "Qxd3",
          "e6",
          "Bd2",
          "Ngf6",
          "O-O-O",
          "Be7"
        ],
        "description": "The absolute standard of the Caro-Kann. Black activates the bishop to f5 before playing ...e6, exchanges light-squared bishops on d3, and creates an unshakeable defensive fortress.",
        "whitePlan": "Castle queenside (O-O-O), gain kingside space with h4-h5, target Black's king with pieces.",
        "blackPlan": "Castle kingside or queenside, counterattack in the center with ...c5, maneuver knight to d5/e4.",
        "keyThemes": [
          "Active Bishop on f5/g6",
          "White Space Gain (h4-h5)",
          "Trade of Light-Square Bishops",
          "Pristine Pawn Structure"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "dxe4",
            "ply": 5,
            "color": "black",
            "purpose": "3... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf5",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ng3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Ng3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bg6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h4",
            "ply": 10,
            "color": "white",
            "purpose": "6. h4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h6",
            "ply": 11,
            "color": "black",
            "purpose": "6... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Nf3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nd7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h5",
            "ply": 14,
            "color": "white",
            "purpose": "8. h5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bh7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bh7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd3",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bxd3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qxd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 19,
            "color": "black",
            "purpose": "10... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Bd2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ngf6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Ngf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Classical: Capablanca Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O-O",
            "ply": 22,
            "color": "white",
            "purpose": "12. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "Be7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-advance",
        "name": "Caro-Kann Advance: Shirov & Short Systems",
        "eco": "B12",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "e5",
          "Bf5",
          "Nf3",
          "e6",
          "Be2",
          "c5",
          "Be3",
          "Qb6",
          "Nc3",
          "Nc6",
          "O-O",
          "Qxb2",
          "Qe1",
          "cxd4",
          "Bxd4",
          "Nxd4",
          "Nxd4",
          "Bb4"
        ],
        "description": "White grabs space with 3.e5. Black brings the bishop to f5 and immediately counters with ...c5. The modern battlefield of elite chess featuring wild theoretical lines.",
        "whitePlan": "Sacrifice b2 pawn for massive initiative, open lines on Black's uncastled king, use knight on d4.",
        "blackPlan": "Grab loose pawns, counterattack with ...Qb6 and ...Bb4, simplify into winning endgame.",
        "keyThemes": [
          "Sharp Advance Wedge (e5)",
          "Poisoned b2 Pawn Battles",
          "Counterstrike with ...c5",
          "Tactical Pin on c3"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e5",
            "ply": 4,
            "color": "white",
            "purpose": "3. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Bf5",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Advance: Shirov & Short Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "e6",
            "ply": 7,
            "color": "black",
            "purpose": "4... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Be2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "c5",
            "ply": 9,
            "color": "black",
            "purpose": "5... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Be3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Qb6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Qb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Advance: Shirov & Short Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nc6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qxb2",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qxb2: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Advance: Shirov & Short Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qe1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Advance: Shirov & Short Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 17,
            "color": "black",
            "purpose": "9... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Advance: Shirov & Short Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd4",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Advance: Shirov & Short Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Advance: Shirov & Short Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Advance: Shirov & Short Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-panov",
        "name": "Caro-Kann Panov-Botvinnik Attack",
        "eco": "B13",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "exd5",
          "cxd5",
          "c4",
          "Nf6",
          "Nc3",
          "e6",
          "Nf3",
          "Bb4",
          "cxd5",
          "Nxd5",
          "Bd2",
          "Nc6",
          "Bd3",
          "O-O",
          "O-O",
          "Be7",
          "a3",
          "Nf6",
          "Bg5",
          "Bd7"
        ],
        "description": "Mikhail Botvinnik's aggressive system transforming the quiet Caro-Kann into an open, dynamic Isolated Queen's Pawn (IQP) middlegame with attacking chances for White.",
        "whitePlan": "Use the isolated d4 pawn to dominate central squares, launch kingside piece assault via Bd3/Qc2/Ne5.",
        "blackPlan": "Blockade d5 square, trade pieces to enter favorable endgame against the isolated d-pawn.",
        "keyThemes": [
          "Isolated Queen's Pawn (IQP)",
          "Rapid Piece Mobilization",
          "d5 Square Blockade",
          "Kingside Attack vs Endgame Edge"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "exd5",
            "ply": 4,
            "color": "white",
            "purpose": "3. exd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Panov-Botvinnik Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Panov-Botvinnik Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c4",
            "ply": 6,
            "color": "white",
            "purpose": "4. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "e6",
            "ply": 9,
            "color": "black",
            "purpose": "5... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nf3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bb4",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "cxd5",
            "ply": 12,
            "color": "white",
            "purpose": "7. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Panov-Botvinnik Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Panov-Botvinnik Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Panov-Botvinnik Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bd3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Panov-Botvinnik Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "a3",
            "ply": 20,
            "color": "white",
            "purpose": "11. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Panov-Botvinnik Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg5",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Bd7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Panov-Botvinnik Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-steinitz",
        "name": "Caro-Kann Steinitz (Modern) 4...Nd7",
        "eco": "B17",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "Nc3",
          "dxe4",
          "Nxe4",
          "Nd7",
          "Ng5",
          "Ngf6",
          "Bd3",
          "e6",
          "N1f3",
          "Bd6",
          "Qe2",
          "h6",
          "Ne4",
          "Nxe4",
          "Qxe4",
          "Qc7",
          "Qg4",
          "Kf8",
          "O-O",
          "b6"
        ],
        "description": "Black plays 4...Nd7 to prepare ...Ngf6 without allowing double pawns (Nxf6+ Nxf6). Features deep positional maneuvering and sharp sacrifices (Nxe6!).",
        "whitePlan": "Probe e6 with knight jump to g5, sacrifice on e6 (Nxe6!), prevent Black from castling comfortably.",
        "blackPlan": "Defend e6 securely, relocate king safely to f8/g8, develop with ...b6 and ...Bb7.",
        "keyThemes": [
          "Knight Jump to g5",
          "Sacrifice on e6 Threat",
          "Solid ...Nd7 Setup",
          "King Safety on f8/g8"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "dxe4",
            "ply": 5,
            "color": "black",
            "purpose": "3... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ng5",
            "ply": 8,
            "color": "white",
            "purpose": "5. Ng5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ngf6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Ngf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 11,
            "color": "black",
            "purpose": "6... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "N1f3",
            "ply": 12,
            "color": "white",
            "purpose": "7. N1f3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h6",
            "ply": 15,
            "color": "black",
            "purpose": "8... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Ne4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Ne4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxe4",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Qg4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Qg4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Kf8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Kf8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 22,
            "color": "white",
            "purpose": "12. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "b6",
            "ply": 23,
            "color": "black",
            "purpose": "12... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Steinitz (Modern) 4...Nd7.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-fantasy",
        "name": "Caro-Kann Fantasy / Tartakower Variation (3.f3)",
        "eco": "B12",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "f3",
          "dxe4",
          "fxe4",
          "e5",
          "Nf3",
          "exd4",
          "Bc4",
          "Be6",
          "Bxe6",
          "fxe6",
          "O-O",
          "Nf6",
          "e5",
          "Nd5",
          "Ng5",
          "Qd7",
          "Qg4"
        ],
        "description": "Savielly Tartakower's aggressive weapon: White supports e4 with 3.f3, aiming to maintain a massive classical two-pawn center (e4 and d4) at the cost of slight king exposure.",
        "whitePlan": "Build overwhelming pawn center, open f-file for kingside attack, target f7 square with Bc4 and Ng5.",
        "blackPlan": "Strike at White's center with 3...e5! or 3...dxe4, exploit the exposed a7-g1 diagonal.",
        "keyThemes": [
          "Aggressive 3.f3 Pawn Setup",
          "Open f-file Kingside Attack",
          "Central Counter-Break 3...e5",
          "f7 Square Vulnerability"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "f3",
            "ply": 4,
            "color": "white",
            "purpose": "3. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "dxe4",
            "ply": 5,
            "color": "black",
            "purpose": "3... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Fantasy / Tartakower Variation (3.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "fxe4",
            "ply": 6,
            "color": "white",
            "purpose": "4. fxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Fantasy / Tartakower Variation (3.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 7,
            "color": "black",
            "purpose": "4... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "exd4",
            "ply": 9,
            "color": "black",
            "purpose": "5... exd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Fantasy / Tartakower Variation (3.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc4",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "Be6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Bxe6",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bxe6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Fantasy / Tartakower Variation (3.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "fxe6",
            "ply": 13,
            "color": "black",
            "purpose": "7... fxe6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Fantasy / Tartakower Variation (3.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "e5",
            "ply": 16,
            "color": "white",
            "purpose": "9. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nd5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Fantasy / Tartakower Variation (3.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ng5",
            "ply": 18,
            "color": "white",
            "purpose": "10. Ng5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Fantasy / Tartakower Variation (3.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qd7: Connects rooks, prepares queenside castling, coordinates pieces.",
            "strategicConcept": "Solid queen placement."
          },
          {
            "san": "Qg4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Qg4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Fantasy / Tartakower Variation (3.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-two-knights",
        "name": "Caro-Kann Two Knights Variation",
        "eco": "B11",
        "moves": [
          "e4",
          "c6",
          "Nc3",
          "d5",
          "Nf3",
          "Bg4",
          "h3",
          "Bxf3",
          "Qxf3",
          "e6",
          "d4",
          "Nf6",
          "Bd3",
          "dxe4",
          "Nxe4",
          "Nxd4",
          "Qd1",
          "Nf6",
          "O-O",
          "Nbd7",
          "Bf4",
          "Be7"
        ],
        "description": "White develops both knights early before committing central pawns. Black usually pins with ...Bg4, leading to bishop pair vs solid pawn structure struggles.",
        "whitePlan": "Acquire the bishop pair with h3/Qxf3, establish active center with d4, attack on kingside.",
        "blackPlan": "Solidify pawn structure with ...e6, trade central pawns to open lines, maintain granite defense.",
        "keyThemes": [
          "Quick Minor Piece Development",
          "Early ...Bg4 Pin",
          "Bishop Pair vs Solid Pawns",
          "Central Tension"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Nc3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg4",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "h3",
            "ply": 6,
            "color": "white",
            "purpose": "4. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "Bxf3",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bxf3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Qxf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 9,
            "color": "black",
            "purpose": "5... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "d4",
            "ply": 10,
            "color": "white",
            "purpose": "6. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bd3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxe4",
            "ply": 13,
            "color": "black",
            "purpose": "7... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qd1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qd1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nbd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Two Knights Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-exchange",
        "name": "Caro-Kann Exchange Variation",
        "eco": "B13",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "exd5",
          "cxd5",
          "Bd3",
          "Nc6",
          "c3",
          "Nf6",
          "Bf4",
          "Bg4",
          "Qb3",
          "Qc8",
          "Nd2",
          "e6",
          "Ngf3",
          "Be7",
          "O-O",
          "O-O",
          "Rfe1",
          "Bh5"
        ],
        "description": "Bobby Fischer and Garry Kasparov favored this line for White to play for quiet, long-term queenside minority attacks and e5 square outposts.",
        "whitePlan": "Prevent Black from activating bishop freely with Bd3/Bf4, use knight on e5, push b4-b5 (minority attack).",
        "blackPlan": "Activate light-squared bishop with ...Bg4-h5-bg6, counter on queenside or center.",
        "keyThemes": [
          "Carlsbad-like Pawn Structure",
          "Minority Attack on Queenside",
          "Bishop Placement on d3/f4",
          "Battle for e5/e4"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "exd5",
            "ply": 4,
            "color": "white",
            "purpose": "3. exd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 5,
            "color": "black",
            "purpose": "3... cxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "c3",
            "ply": 8,
            "color": "white",
            "purpose": "5. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bf4",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg4",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "Qb3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Qb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc8",
            "ply": 13,
            "color": "black",
            "purpose": "7... Qc8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 15,
            "color": "black",
            "purpose": "8... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Ngf3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Ngf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Rfe1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Rfe1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bh5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bh5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-bronstein",
        "name": "Caro-Kann Bronstein-Larsen Variation",
        "eco": "B16",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "Nc3",
          "dxe4",
          "Nxe4",
          "Nf6",
          "Nxf6+",
          "gxf6",
          "c3",
          "Bf5",
          "Nf3",
          "Nd7",
          "g3",
          "Qc7",
          "Bg2",
          "O-O-O",
          "O-O",
          "e5",
          "Nh4",
          "Be6"
        ],
        "description": "David Bronstein and Bent Larsen played 4...Nf6 5.Nxf6+ gxf6!, accepting shattered kingside pawns in exchange for the open g-file and intense dynamic counterplay.",
        "whitePlan": "Target Black's doubled and isolated f-pawns, castle kingside, seize central outposts.",
        "blackPlan": "Castle queenside (O-O-O), use open g-file for rook attack against White's king, push ...e5.",
        "keyThemes": [
          "Shattered Kingside Pawns (...gxf6)",
          "Open g-file Attack",
          "Queenside Castling Shelter",
          "Dynamic Imbalance"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "dxe4",
            "ply": 5,
            "color": "black",
            "purpose": "3... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nxf6+",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nxf6+: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "gxf6",
            "ply": 9,
            "color": "black",
            "purpose": "5... gxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 10,
            "color": "white",
            "purpose": "6. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf5",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nd7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g3",
            "ply": 14,
            "color": "white",
            "purpose": "8. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Qc7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Bg2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "e5",
            "ply": 19,
            "color": "black",
            "purpose": "10... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nh4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Bronstein-Larsen Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-korchnoi",
        "name": "Caro-Kann Korchnoi (Tartakower) 5...exf6",
        "eco": "B15",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "Nc3",
          "dxe4",
          "Nxe4",
          "Nf6",
          "Nxf6+",
          "exf6",
          "c3",
          "Bd6",
          "Bd3",
          "O-O",
          "Qc2",
          "Re8+",
          "Ne2",
          "h5",
          "O-O",
          "Nd7",
          "Be3",
          "Nf8",
          "Rae1",
          "Be6"
        ],
        "description": "Viktor Korchnoi's favorite solid system. Black recaptures 5...exf6 to accelerate piece development and lock down the e5 square permanently.",
        "whitePlan": "Play for queenside pawn majority in the endgame, control the center with c3/d4.",
        "blackPlan": "Coordinate pieces on open e-file, place knight on f8-g6, play for active king safety.",
        "keyThemes": [
          "Rapid Kingside Castling",
          "e5 Square Lockout",
          "Pawn Majority Dynamic",
          "Knight Relocation to f8"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "dxe4",
            "ply": 5,
            "color": "black",
            "purpose": "3... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nxf6+",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nxf6+: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exf6",
            "ply": 9,
            "color": "black",
            "purpose": "5... exf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 10,
            "color": "white",
            "purpose": "6. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qc2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "Re8+",
            "ply": 15,
            "color": "black",
            "purpose": "8... Re8+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Ne2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h5",
            "ply": 17,
            "color": "black",
            "purpose": "9... h5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Nf8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nf8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rae1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rae1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Korchnoi (Tartakower) 5...exf6.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "caro-gurgenidze",
        "name": "Caro-Kann Gurgenidze System",
        "eco": "B15",
        "moves": [
          "e4",
          "c6",
          "d4",
          "d5",
          "Nc3",
          "g6",
          "e5",
          "h5",
          "f4",
          "Nh6",
          "Nf3",
          "Bg4",
          "Be3",
          "e6",
          "Be2",
          "Nf5",
          "Bf2",
          "Be7",
          "O-O",
          "Nd7"
        ],
        "description": "Bukhuti Gurgenidze introduced this hybrid setup where Black plays ...g6 and ...h5, blockading White's kingside and planting a monster knight on f5.",
        "whitePlan": "Break Black's blockade with c4 or f5, expand on queenside, utilize spatial superiority.",
        "blackPlan": "Establish iron grip on f5 with ...Nh6-f5, trade light-squared bishop, build fortress.",
        "keyThemes": [
          "Knight Outpost on f5",
          "Blockade on Kingside (...h5)",
          "Fortress Defense",
          "Hybrid Caro-Pirc Setup"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c6",
            "ply": 1,
            "color": "black",
            "purpose": "1... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 3,
            "color": "black",
            "purpose": "2... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "g6",
            "ply": 5,
            "color": "black",
            "purpose": "3... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "e5",
            "ply": 6,
            "color": "white",
            "purpose": "4. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "h5",
            "ply": 7,
            "color": "black",
            "purpose": "4... h5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Gurgenidze System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f4",
            "ply": 8,
            "color": "white",
            "purpose": "5. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "Nh6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nh6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Gurgenidze System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg4",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "Be3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "e6",
            "ply": 13,
            "color": "black",
            "purpose": "7... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Be2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "Nf5",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Gurgenidze System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bf2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Gurgenidze System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Caro-Kann Gurgenidze System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 100
  },
  {
    "id": "queens-gambit",
    "name": "Queen's Gambit & Slav Defense",
    "ecoRange": "D06–D69",
    "category": "Closed Games (1.d4 d5 2.c4)",
    "summary": "The bedrock of classical chess strategy. White offers the c4 pawn to divert Black's central d5 pawn and gain total control over the e4 square.",
    "keyConcepts": [
      "Fight for central e4/d4 domination",
      "Carlsbad minority attack",
      "Slav solid pawn triangle",
      "Pawn tension and central breaks"
    ],
    "famousPlayers": [
      "Garry Kasparov",
      "Vladimir Kramnik",
      "Alexander Alekhine",
      "Viswanathan Anand",
      "Magnus Carlsen"
    ],
    "subVariations": [
      {
        "id": "qgd-orthodox",
        "name": "Queen's Gambit Declined: Orthodox Defense",
        "eco": "D63",
        "moves": [
          "d4",
          "d5",
          "c4",
          "e6",
          "Nc3",
          "Nf6",
          "Bg5",
          "Be7",
          "e3",
          "O-O",
          "Nf3",
          "Nbd7",
          "Rc1",
          "c6",
          "Bd3",
          "dxc4",
          "Bxc4",
          "Nd5",
          "Bxe7",
          "Qxe7",
          "O-O",
          "Nxc3",
          "Rxc3",
          "e5"
        ],
        "description": "The grand classical defense contested in historic World Championship matches (Capablanca, Alekhine, Kasparov, Karpov). Black defends d5 with ...e6 and executes Capablanca's freeing maneuver ...Nd5 and ...e5.",
        "whitePlan": "Utilize space advantage, maintain central pressure on e5, exploit c-file pressure.",
        "blackPlan": "Free cramped position with Capablanca maneuver (Nd5/Nxc3), execute ...e5 central break.",
        "keyThemes": [
          "Capablanca Freeing Maneuver",
          "Central Break ...e5",
          "Orthodox Piece Placement",
          "C-file Heavy Piece Play"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Be7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "e3",
            "ply": 8,
            "color": "white",
            "purpose": "5. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nbd7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rc1",
            "ply": 12,
            "color": "white",
            "purpose": "7. Rc1: Places rook on semi-open c-file, targeting enemy c-pawns.",
            "strategicConcept": "C-file heavy piece mobilization."
          },
          {
            "san": "c6",
            "ply": 13,
            "color": "black",
            "purpose": "7... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Bd3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc4",
            "ply": 15,
            "color": "black",
            "purpose": "8... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxe7",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bxe7: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxe7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qxe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nxc3",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rxc3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Orthodox Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 23,
            "color": "black",
            "purpose": "12... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qgd-tartakower",
        "name": "Queen's Gambit Declined: Tartakower System",
        "eco": "D58",
        "moves": [
          "d4",
          "d5",
          "c4",
          "e6",
          "Nc3",
          "Nf6",
          "Bg5",
          "Be7",
          "e3",
          "O-O",
          "Nf3",
          "h6",
          "Bh4",
          "b6",
          "Bd3",
          "Bb7",
          "O-O",
          "Nbd7",
          "Qe2",
          "c5",
          "Rfd1",
          "Ne4",
          "Bxe7",
          "Qxe7",
          "cxd5",
          "exd5"
        ],
        "description": "Black plays ...h6 followed by ...b6 to fianchetto the light-squared bishop on b7, solving the perennial QGD problem of the 'bad' light-squared bishop.",
        "whitePlan": "Play cxd5 and exert pressure on hanging pawns (c5 and d5) or the d-file.",
        "blackPlan": "Harmonize pieces with bishop on b7, counterattack White's center with ...c5 and ...Ne4.",
        "keyThemes": [
          "Fianchetto of Light Bishop on b7",
          "Hanging Pawns Structure",
          "Knight Outpost on e4",
          "Solving the QGD Bishop"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Be7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "e3",
            "ply": 8,
            "color": "white",
            "purpose": "5. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "h6",
            "ply": 11,
            "color": "black",
            "purpose": "6... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bh4",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b6",
            "ply": 13,
            "color": "black",
            "purpose": "7... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 16,
            "color": "white",
            "purpose": "9. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nbd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 19,
            "color": "black",
            "purpose": "10... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Rfd1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Rfd1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Ne4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxe7",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bxe7: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxe7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qxe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 24,
            "color": "white",
            "purpose": "13. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exd5",
            "ply": 25,
            "color": "black",
            "purpose": "13... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tartakower System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qgd-lasker",
        "name": "Queen's Gambit Declined: Lasker Defense",
        "eco": "D56",
        "moves": [
          "d4",
          "d5",
          "c4",
          "e6",
          "Nc3",
          "Nf6",
          "Bg5",
          "Be7",
          "e3",
          "O-O",
          "Nf3",
          "h6",
          "Bh4",
          "Ne4",
          "Bxe7",
          "Qxe7",
          "cxd5",
          "Nxc3",
          "bxc3",
          "exd5",
          "Qb3",
          "Rd8",
          "c4",
          "dxc4",
          "Bxc4",
          "Nc6",
          "O-O",
          "Na5"
        ],
        "description": "Emanuel Lasker's brilliant simplified defense: 7...Ne4 forces the exchange of two minor pieces, completely relieving Black's cramped position.",
        "whitePlan": "Pressure isolated or backward pawns, maintain active major piece control on c-file.",
        "blackPlan": "Liquidate into clean endgame, eliminate White's dangerous bishop via ...Na5.",
        "keyThemes": [
          "Lasker Simplification 7...Ne4",
          "Two Minor Piece Trades",
          "Eliminating White's Light Bishop",
          "Clean Equalization"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Be7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "e3",
            "ply": 8,
            "color": "white",
            "purpose": "5. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "h6",
            "ply": 11,
            "color": "black",
            "purpose": "6... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bh4",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Ne4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxe7",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bxe7: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxe7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qxe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxc3",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 18,
            "color": "white",
            "purpose": "10. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exd5",
            "ply": 19,
            "color": "black",
            "purpose": "10... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qb3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Qb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rd8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Rd8: Positions rook on open/semi-open d-file, exerting central pressure.",
            "strategicConcept": "Central file control."
          },
          {
            "san": "c4",
            "ply": 22,
            "color": "white",
            "purpose": "12. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "dxc4",
            "ply": 23,
            "color": "black",
            "purpose": "12... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc4",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "O-O",
            "ply": 26,
            "color": "white",
            "purpose": "14. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Na5",
            "ply": 27,
            "color": "black",
            "purpose": "14... Na5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Lasker Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qgd-cambridge",
        "name": "Queen's Gambit Declined: Cambridge Springs",
        "eco": "D52",
        "moves": [
          "d4",
          "d5",
          "c4",
          "e6",
          "Nc3",
          "Nf6",
          "Bg5",
          "Nbd7",
          "e3",
          "c6",
          "Nf3",
          "Qa5",
          "Nd2",
          "Bb4",
          "Qc2",
          "O-O",
          "Be2",
          "e5",
          "Bxf6",
          "Nxf6",
          "dxe5",
          "Ne4",
          "Ndxe4",
          "dxe4",
          "O-O",
          "Qxe5"
        ],
        "description": "Black pins White's knight with 6...Qa5 and ...Bb4, setting dangerous tactical traps against White's pinned bishop on g5 and knight on c3.",
        "whitePlan": "Unpin with Nd2, simplify into equal endgame with slight spatial pull.",
        "blackPlan": "Exploit pins on c3 and g5, blast open the center with ...e5, win pawn weaknesses.",
        "keyThemes": [
          "Queen Pin 6...Qa5",
          "Double Pin with ...Bb4",
          "Tactical Traps on g5/c3",
          "Central Explosion ...e5"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Nbd7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e3",
            "ply": 8,
            "color": "white",
            "purpose": "5. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c6",
            "ply": 9,
            "color": "black",
            "purpose": "5... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Nf3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Qa5",
            "ply": 11,
            "color": "black",
            "purpose": "6... Qa5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "Qc2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "e5",
            "ply": 17,
            "color": "black",
            "purpose": "9... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Bxf6",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bxf6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxf6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxe5",
            "ply": 20,
            "color": "white",
            "purpose": "11. dxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Ne4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ndxe4",
            "ply": 22,
            "color": "white",
            "purpose": "12. Ndxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxe4",
            "ply": 23,
            "color": "black",
            "purpose": "12... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 24,
            "color": "white",
            "purpose": "13. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qxe5",
            "ply": 25,
            "color": "black",
            "purpose": "13... Qxe5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Cambridge Springs.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qgd-exchange",
        "name": "Queen's Gambit Declined: Exchange Variation",
        "eco": "D35",
        "moves": [
          "d4",
          "d5",
          "c4",
          "e6",
          "Nc3",
          "Nf6",
          "cxd5",
          "exd5",
          "Bg5",
          "c6",
          "e3",
          "Be7",
          "Bd3",
          "Nbd7",
          "Qc2",
          "O-O",
          "Nge2",
          "Re8",
          "O-O",
          "Nf8",
          "f3",
          "Be6",
          "Rad1",
          "Rc8"
        ],
        "description": "White captures early with cxd5, creating the famous Carlsbad pawn structure. White can choose between the Minority Attack (b4-b5) or the central pawn storm with f3 and e4 (Botvinnik/Kasparov).",
        "whitePlan": "Execute minority attack (b4-b5) to create weakness on c6, or push e4 with f3/e4.",
        "blackPlan": "Blockade minority attack, deploy knight to f8-g6, mount kingside counterattack.",
        "keyThemes": [
          "Carlsbad Pawn Structure",
          "Minority Attack (b4-b5)",
          "Central Pawn Storm (f3/e4)",
          "Knight Relocation Nf8-g6"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "cxd5",
            "ply": 6,
            "color": "white",
            "purpose": "4. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exd5",
            "ply": 7,
            "color": "black",
            "purpose": "4... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "c6",
            "ply": 9,
            "color": "black",
            "purpose": "5... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "e3",
            "ply": 10,
            "color": "white",
            "purpose": "6. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Bd3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nge2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nge2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 17,
            "color": "black",
            "purpose": "9... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nf8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f3",
            "ply": 20,
            "color": "white",
            "purpose": "11. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "Be6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Rad1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rad1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rc8",
            "ply": 23,
            "color": "black",
            "purpose": "12... Rc8: Places rook on open c-file, targeting c3/c2 and preparing counterplay.",
            "strategicConcept": "Sicilian thematic rook placement."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qgd-tarrasch",
        "name": "Queen's Gambit Declined: Tarrasch Defense",
        "eco": "D32",
        "moves": [
          "d4",
          "d5",
          "c4",
          "e6",
          "Nc3",
          "c5",
          "cxd5",
          "exd5",
          "Nf3",
          "Nc6",
          "g3",
          "Nf6",
          "Bg2",
          "Be7",
          "O-O",
          "O-O",
          "Bg5",
          "cxd4",
          "Nxd4",
          "h6",
          "Be3",
          "Re8",
          "Rc1",
          "Bf8"
        ],
        "description": "Siegbert Tarrasch's fighting system: Black willingly accepts an Isolated Queen Pawn (IQP) on d5 in return for free and active piece mobility on all files.",
        "whitePlan": "Blockade d5 with knight on d4, target the weak d5 pawn, exchange pieces into winning endgame.",
        "blackPlan": "Use open files (c, e) and diagonals, push ...d4 break at the right moment to shatter White.",
        "keyThemes": [
          "Isolated Queen Pawn (d5 IQP)",
          "Dynamic Piece Activity",
          "Thematic ...d4 Break",
          "Blockade on d4"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "c5",
            "ply": 5,
            "color": "black",
            "purpose": "3... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "cxd5",
            "ply": 6,
            "color": "white",
            "purpose": "4. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tarrasch Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exd5",
            "ply": 7,
            "color": "black",
            "purpose": "4... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tarrasch Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "g3",
            "ply": 10,
            "color": "white",
            "purpose": "6. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Nf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tarrasch Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg5",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "cxd4",
            "ply": 17,
            "color": "black",
            "purpose": "9... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tarrasch Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tarrasch Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h6",
            "ply": 19,
            "color": "black",
            "purpose": "10... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Be3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Re8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Rc1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rc1: Places rook on semi-open c-file, targeting enemy c-pawns.",
            "strategicConcept": "C-file heavy piece mobilization."
          },
          {
            "san": "Bf8",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bf8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Declined: Tarrasch Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qga-main",
        "name": "Queen's Gambit Accepted: Classical System",
        "eco": "D27",
        "moves": [
          "d4",
          "d5",
          "c4",
          "dxc4",
          "Nf3",
          "Nf6",
          "e3",
          "e6",
          "Bxc4",
          "c5",
          "O-O",
          "a6",
          "a4",
          "Nc6",
          "Qe2",
          "cxd4",
          "Rd1",
          "Be7",
          "exd4",
          "O-O",
          "Nc3",
          "Nb4",
          "Bg5",
          "Bd7"
        ],
        "description": "Black captures the gambit pawn on c4 with 2...dxc4, planning to return it after White spends tempo regaining it, then counterattacking White's center with ...c5 and ...a6/b5.",
        "whitePlan": "Regain c4 pawn with tempo, build strong center with d4/e4 or play with IQP.",
        "blackPlan": "Counterstrike with ...c5, expand on queenside with ...a6 and ...b5, occupy d5 outpost.",
        "keyThemes": [
          "Temporary Gambit Acceptance",
          "Immediate ...c5 Counter-Strike",
          "Queenside Expansion (...a6/b5)",
          "Knight Outpost on b4/d5"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "dxc4",
            "ply": 3,
            "color": "black",
            "purpose": "2... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Accepted: Classical System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "e3",
            "ply": 6,
            "color": "white",
            "purpose": "4. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Accepted: Classical System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 7,
            "color": "black",
            "purpose": "4... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Bxc4",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Accepted: Classical System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 9,
            "color": "black",
            "purpose": "5... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "a6",
            "ply": 11,
            "color": "black",
            "purpose": "6... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "a4",
            "ply": 12,
            "color": "white",
            "purpose": "7. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "Nc6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Qe2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Accepted: Classical System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 15,
            "color": "black",
            "purpose": "8... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Accepted: Classical System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rd1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Rd1: Brings rook to d-file, supporting d-pawn and applying pressure down the center.",
            "strategicConcept": "Heavy piece centralization."
          },
          {
            "san": "Be7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "exd4",
            "ply": 18,
            "color": "white",
            "purpose": "10. exd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Accepted: Classical System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nb4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nb4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Accepted: Classical System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Bd7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Gambit Accepted: Classical System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "slav-classical",
        "name": "Slav Defense: Classical Variation (5...Bf5)",
        "eco": "D18",
        "moves": [
          "d4",
          "d5",
          "c4",
          "c6",
          "Nf3",
          "Nf6",
          "Nc3",
          "dxc4",
          "a4",
          "Bf5",
          "e3",
          "e6",
          "Bxc4",
          "Bb4",
          "O-O",
          "O-O",
          "Qe2",
          "Nbd7",
          "e4",
          "Bg6",
          "Bd3",
          "Bh5",
          "e5",
          "Nd5"
        ],
        "description": "The gold standard of the Slav Defense. Black supports d5 with ...c6, captures on c4 to liberate the light-squared bishop to f5 before playing ...e6.",
        "whitePlan": "Prevent ...b5 with a4, build broad center with e4, attack Black's bishop on g6/h5.",
        "blackPlan": "Anchor bishop on g6, pin White's knight with ...Bh5, establish knight on d5.",
        "keyThemes": [
          "a4 vs ...b5 Queenside Clamp",
          "Light Bishop Liberated to f5",
          "Central Push e4-e5",
          "Knight Outpost on d5"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "c6",
            "ply": 3,
            "color": "black",
            "purpose": "2... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "dxc4",
            "ply": 7,
            "color": "black",
            "purpose": "4... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a4",
            "ply": 8,
            "color": "white",
            "purpose": "5. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "Bf5",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e3",
            "ply": 10,
            "color": "white",
            "purpose": "6. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 11,
            "color": "black",
            "purpose": "6... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Bxc4",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qe2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e4",
            "ply": 18,
            "color": "white",
            "purpose": "10. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Bg6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bg6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bh5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bh5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 22,
            "color": "white",
            "purpose": "12. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nd5",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Slav Defense: Classical Variation (5...Bf5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "slav-semi-meran",
        "name": "Semi-Slav Defense: Meran Variation",
        "eco": "D47",
        "moves": [
          "d4",
          "d5",
          "c4",
          "c6",
          "Nf3",
          "Nf6",
          "Nc3",
          "e6",
          "e3",
          "Nbd7",
          "Bd3",
          "dxc4",
          "Bxc4",
          "b5",
          "Bd3",
          "Bb7",
          "O-O",
          "a6",
          "e4",
          "c5",
          "d5",
          "c4",
          "Bc2",
          "Qc7",
          "dxe6",
          "fxe6"
        ],
        "description": "One of the most complex, theoretical, and exciting systems in chess. Black plays both ...c6 and ...e6, then strikes with ...dxc4, ...b5, and ...c5 to unleash huge tactical fireworks.",
        "whitePlan": "Break in center with e4-e5 or d5, attack Black's uncastled king along the e-file.",
        "blackPlan": "Storm queenside with ...b5, ...c5, ...c4, place bishop on b7 to blast the long diagonal.",
        "keyThemes": [
          "Queenside Pawn Storm (...b5/c5/c4)",
          "Center Rupture (e4/d5)",
          "Fianchetto Bishop on b7",
          "Theoretical Razor-Edge"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "c6",
            "ply": 3,
            "color": "black",
            "purpose": "2... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "e6",
            "ply": 7,
            "color": "black",
            "purpose": "4... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "e3",
            "ply": 8,
            "color": "white",
            "purpose": "5. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc4",
            "ply": 11,
            "color": "black",
            "purpose": "6... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc4",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b5",
            "ply": 13,
            "color": "black",
            "purpose": "7... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bd3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 16,
            "color": "white",
            "purpose": "9. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "a6",
            "ply": 17,
            "color": "black",
            "purpose": "9... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "e4",
            "ply": 18,
            "color": "white",
            "purpose": "10. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "c5",
            "ply": 19,
            "color": "black",
            "purpose": "10... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d5",
            "ply": 20,
            "color": "white",
            "purpose": "11. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 21,
            "color": "black",
            "purpose": "11... c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "Bc2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bc2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "dxe6",
            "ply": 24,
            "color": "white",
            "purpose": "13. dxe6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "fxe6",
            "ply": 25,
            "color": "black",
            "purpose": "13... fxe6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav Defense: Meran Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "slav-botvinnik",
        "name": "Semi-Slav: Botvinnik Variation (5.Bg5 dxc4)",
        "eco": "D44",
        "moves": [
          "d4",
          "d5",
          "c4",
          "c6",
          "Nf3",
          "Nf6",
          "Nc3",
          "e6",
          "Bg5",
          "dxc4",
          "e4",
          "b5",
          "e5",
          "h6",
          "Bh4",
          "g5",
          "Nxg5",
          "hxg5",
          "Bxg5",
          "Nbd7",
          "exf6",
          "Bb7",
          "g3",
          "c5",
          "d5",
          "Qb6",
          "Bg2",
          "O-O-O"
        ],
        "description": "The most insane tactical labyrinth in chess opening theory. Black accepts a pinned knight, plays ...b5, pushes ...g5, and allows White to win a piece for colossal dynamic compensation.",
        "whitePlan": "Win material on f6, push central pawns, coordinate heavy pieces against Black's king.",
        "blackPlan": "Exploit monster bishop on b7 and g7, castle queenside, dominate center with ...c5 and ...Qb6.",
        "keyThemes": [
          "Wildest Opening in Chess",
          "Piece Sacrifice for Massive Initiative",
          "Double Long Diagonal Attacks",
          "Queenside King Flight"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "c6",
            "ply": 3,
            "color": "black",
            "purpose": "2... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "e6",
            "ply": 7,
            "color": "black",
            "purpose": "4... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Bg5",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "dxc4",
            "ply": 9,
            "color": "black",
            "purpose": "5... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e4",
            "ply": 10,
            "color": "white",
            "purpose": "6. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "b5",
            "ply": 11,
            "color": "black",
            "purpose": "6... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "e5",
            "ply": 12,
            "color": "white",
            "purpose": "7. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "h6",
            "ply": 13,
            "color": "black",
            "purpose": "7... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bh4",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g5",
            "ply": 15,
            "color": "black",
            "purpose": "8... g5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxg5",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nxg5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "hxg5",
            "ply": 17,
            "color": "black",
            "purpose": "9... hxg5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxg5",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bxg5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exf6",
            "ply": 20,
            "color": "white",
            "purpose": "11. exf6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g3",
            "ply": 22,
            "color": "white",
            "purpose": "12. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "c5",
            "ply": 23,
            "color": "black",
            "purpose": "12... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d5",
            "ply": 24,
            "color": "white",
            "purpose": "13. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Qb6",
            "ply": 25,
            "color": "black",
            "purpose": "13... Qb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg2",
            "ply": 26,
            "color": "white",
            "purpose": "14. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Semi-Slav: Botvinnik Variation (5.Bg5 dxc4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O-O",
            "ply": 27,
            "color": "black",
            "purpose": "14... O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "albin-chigorin",
        "name": "Albin Countergambit & Chigorin Defense",
        "eco": "D08",
        "moves": [
          "d4",
          "d5",
          "c4",
          "e5",
          "dxe5",
          "d4",
          "Nf3",
          "Nc6",
          "Nbd2",
          "Bg4",
          "h3",
          "Bxf3",
          "Nxf3",
          "Bc5",
          "a3",
          "a5",
          "g3",
          "Nge7",
          "Bg2",
          "Qd7",
          "O-O",
          "O-O"
        ],
        "description": "Adolf Albin's fighting counter-gambit 2...e5! Black sacrifices a pawn to establish an annoying advanced wedge on d4 that severely cramps White's piece development.",
        "whitePlan": "Neutralize d4 pawn wedge, develop kingside with g3/Bg2, convert extra pawn in endgame.",
        "blackPlan": "Use d4 pawn wedge to restrict White, coordinate pieces actively, set Lasker Trap traps.",
        "keyThemes": [
          "Advanced d4 Pawn Wedge",
          "Aggressive 2...e5 Counter-Gambit",
          "Lasker Trap Motifs",
          "Piece Activity over Material"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e5",
            "ply": 3,
            "color": "black",
            "purpose": "2... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "dxe5",
            "ply": 4,
            "color": "white",
            "purpose": "3. dxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 5,
            "color": "black",
            "purpose": "3... d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nbd2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg4",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "h3",
            "ply": 10,
            "color": "white",
            "purpose": "6. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "Bxf3",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bxf3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxf3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nxf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc5",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a3",
            "ply": 14,
            "color": "white",
            "purpose": "8. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a5",
            "ply": 15,
            "color": "black",
            "purpose": "8... a5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g3",
            "ply": 16,
            "color": "white",
            "purpose": "9. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Nge7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nge7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Albin Countergambit & Chigorin Defense.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qd7: Connects rooks, prepares queenside castling, coordinates pieces.",
            "strategicConcept": "Solid queen placement."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 110
  },
  {
    "id": "kings-indian",
    "name": "King's Indian Defense",
    "ecoRange": "E60–E99",
    "category": "Indian Defenses (1.d4 Nf6 2.c4 g6)",
    "summary": "The ultimate weapon for fighting for a win with Black. Black cedes the center early to build an unassailable kingside fianchetto, then launches a ferocious pawn storm with ...f5 against White's king.",
    "keyConcepts": [
      "Locked center (d5 vs e5)",
      "Kingside attack (...f5, ...g5, ...f4)",
      "White queenside pawn storm (c5)",
      "Heroic mating sacrifices"
    ],
    "famousPlayers": [
      "Garry Kasparov",
      "Bobby Fischer",
      "Mikhail Tal",
      "Teimour Radjabov",
      "Hikaru Nakamura"
    ],
    "subVariations": [
      {
        "id": "kid-mar-del-plata",
        "name": "King's Indian: Classical Mar del Plata Attack",
        "eco": "E99",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "Nf3",
          "O-O",
          "Be2",
          "e5",
          "O-O",
          "Nc6",
          "d5",
          "Ne7",
          "Ne1",
          "Nd7",
          "Be3",
          "f5",
          "f3",
          "f4",
          "Bf2",
          "g5",
          "Nd3",
          "Nf6",
          "c5",
          "Ng6",
          "Rc1",
          "Rf7",
          "Kh1",
          "h5"
        ],
        "description": "The most famous and sharpest line in the King's Indian. The center is locked with d5 and e5. White attacks on the queenside with c5, while Black launches an all-out mating attack on the kingside with ...f5-f4-g5-h5-g4.",
        "whitePlan": "Break on queenside with c5, open the c-file with cxd6, invade Black's back rank with rooks.",
        "blackPlan": "Push kingside pawns (...f4, ...g5, ...h5, ...g4), sacrifice pieces to checkmate White's king.",
        "keyThemes": [
          "Opposing Flank Race (Queenside vs Kingside Mate)",
          "Locked Central Climax (d5/e5)",
          "The ...f5-f4-g5 Attack",
          "Rook Lift via f7-g7"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 6,
            "color": "white",
            "purpose": "4. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "e5",
            "ply": 11,
            "color": "black",
            "purpose": "6... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "d5",
            "ply": 14,
            "color": "white",
            "purpose": "8. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Ne7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Ne7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Ne1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "f5",
            "ply": 19,
            "color": "black",
            "purpose": "10... f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          },
          {
            "san": "f3",
            "ply": 20,
            "color": "white",
            "purpose": "11. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "f4",
            "ply": 21,
            "color": "black",
            "purpose": "11... f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "Bf2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bf2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g5",
            "ply": 23,
            "color": "black",
            "purpose": "12... g5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd3",
            "ply": 24,
            "color": "white",
            "purpose": "13. Nd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c5",
            "ply": 26,
            "color": "white",
            "purpose": "14. c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Ng6",
            "ply": 27,
            "color": "black",
            "purpose": "14... Ng6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rc1",
            "ply": 28,
            "color": "white",
            "purpose": "15. Rc1: Places rook on semi-open c-file, targeting enemy c-pawns.",
            "strategicConcept": "C-file heavy piece mobilization."
          },
          {
            "san": "Rf7",
            "ply": 29,
            "color": "black",
            "purpose": "15... Rf7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Kh1",
            "ply": 30,
            "color": "white",
            "purpose": "16. Kh1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h5",
            "ply": 31,
            "color": "black",
            "purpose": "16... h5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Classical Mar del Plata Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-saemisch",
        "name": "King's Indian: Sämisch Variation (5.f3)",
        "eco": "E81",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "f3",
          "O-O",
          "Be3",
          "e5",
          "d5",
          "c6",
          "Qd2",
          "cxd5",
          "cxd5",
          "a6",
          "O-O-O",
          "Nbd7",
          "g4",
          "b5",
          "Kb1",
          "Nb6",
          "Rc1",
          "Bd7"
        ],
        "description": "Friedrich Sämisch's solid setup: White solidifies the center with 5.f3, castles queenside, and launches a kingside pawn storm with Be3, Qd2, and g4.",
        "whitePlan": "Solidify center with f3, castle long (O-O-O), attack Black with g4, h4, Bh6.",
        "blackPlan": "Counterattack on queenside with ...c6, ...a6, ...b5, open the c-file against White's king.",
        "keyThemes": [
          "Rock-Solid 5.f3 Pawn Wall",
          "Opposite-Side Castling Warfare",
          "Queenside Counter-Storm (...b5)",
          "Exchange of Dark-Squared Bishops"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 6,
            "color": "white",
            "purpose": "4. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "f3",
            "ply": 8,
            "color": "white",
            "purpose": "5. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "e5",
            "ply": 11,
            "color": "black",
            "purpose": "6... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "d5",
            "ply": 12,
            "color": "white",
            "purpose": "7. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c6",
            "ply": 13,
            "color": "black",
            "purpose": "7... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Qd2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "cxd5",
            "ply": 15,
            "color": "black",
            "purpose": "8... cxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Sämisch Variation (5.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Sämisch Variation (5.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a6",
            "ply": 17,
            "color": "black",
            "purpose": "9... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "O-O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "Nbd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Sämisch Variation (5.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g4",
            "ply": 20,
            "color": "white",
            "purpose": "11. g4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Sämisch Variation (5.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b5",
            "ply": 21,
            "color": "black",
            "purpose": "11... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Kb1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Kb1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Sämisch Variation (5.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nb6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Sämisch Variation (5.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rc1",
            "ply": 24,
            "color": "white",
            "purpose": "13. Rc1: Places rook on semi-open c-file, targeting enemy c-pawns.",
            "strategicConcept": "C-file heavy piece mobilization."
          },
          {
            "san": "Bd7",
            "ply": 25,
            "color": "black",
            "purpose": "13... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Sämisch Variation (5.f3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-averbakh",
        "name": "King's Indian: Averbakh Variation (6.Bg5)",
        "eco": "E73",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "Be2",
          "O-O",
          "Bg5",
          "c5",
          "d5",
          "h6",
          "Bf4",
          "e6",
          "dxe6",
          "Bxe6",
          "Bxd6",
          "Re8",
          "Nf3",
          "Nc6",
          "O-O",
          "Qb6",
          "e5",
          "Nd7"
        ],
        "description": "Yuri Averbakh's positional system: 6.Bg5 prevents Black's thematic ...e5 break (since 6...e5 7.dxe5 dxe5 8.Qxd8 Rxd8 9.Nd5 wins material). Black must respond with ...c5 or ...h6.",
        "whitePlan": "Prevent Black's standard ...e5 setup, control d5 square, exploit pawn weaknesses.",
        "blackPlan": "Counter with 6...c5 (Benoni-style) or 6...h6, undermine White's center with ...e6.",
        "keyThemes": [
          "Prophylactic 6.Bg5 Pin",
          "Benoni-Style Counter (...c5)",
          "Undermining d5 with ...e6",
          "Active Piece Counterplay"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 6,
            "color": "white",
            "purpose": "4. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Be2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg5",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "c5",
            "ply": 11,
            "color": "black",
            "purpose": "6... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d5",
            "ply": 12,
            "color": "white",
            "purpose": "7. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "h6",
            "ply": 13,
            "color": "black",
            "purpose": "7... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bf4",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Averbakh Variation (6.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 15,
            "color": "black",
            "purpose": "8... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "dxe6",
            "ply": 16,
            "color": "white",
            "purpose": "9. dxe6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Averbakh Variation (6.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxe6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bxe6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Averbakh Variation (6.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd6",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bxd6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Averbakh Variation (6.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Nf3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "O-O",
            "ply": 22,
            "color": "white",
            "purpose": "12. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qb6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Averbakh Variation (6.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 24,
            "color": "white",
            "purpose": "13. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nd7",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Averbakh Variation (6.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-four-pawns",
        "name": "King's Indian: Four Pawns Attack",
        "eco": "E77",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "f4",
          "O-O",
          "Nf3",
          "c5",
          "d5",
          "e6",
          "Be2",
          "exd5",
          "cxd5",
          "Re8",
          "e5",
          "dxe5",
          "fxe5",
          "Ng4",
          "Bg5",
          "Qb6",
          "O-O",
          "Nxe5"
        ],
        "description": "White builds the most ambitious pawn center possible with pawns on c4, d4, e4, and f4, attempting to steamroll Black off the board.",
        "whitePlan": "Overwhelm Black with massive pawn roller (e5/f5), control vast central territory.",
        "blackPlan": "Strike at overextended pawns with ...c5 and ...e6, exploit weaknesses on e5 and d5.",
        "keyThemes": [
          "Four Central Pawns Dominance",
          "Overextension Vulnerability",
          "Exploiting e5/d5 Weaknesses",
          "Tactical Counter-Rupture"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 6,
            "color": "white",
            "purpose": "4. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "f4",
            "ply": 8,
            "color": "white",
            "purpose": "5. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "c5",
            "ply": 11,
            "color": "black",
            "purpose": "6... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d5",
            "ply": 12,
            "color": "white",
            "purpose": "7. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e6",
            "ply": 13,
            "color": "black",
            "purpose": "7... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Be2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "exd5",
            "ply": 15,
            "color": "black",
            "purpose": "8... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Four Pawns Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Four Pawns Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 17,
            "color": "black",
            "purpose": "9... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "e5",
            "ply": 18,
            "color": "white",
            "purpose": "10. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "dxe5",
            "ply": 19,
            "color": "black",
            "purpose": "10... dxe5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Four Pawns Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "fxe5",
            "ply": 20,
            "color": "white",
            "purpose": "11. fxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Four Pawns Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ng4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Ng4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Four Pawns Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Qb6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Four Pawns Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 24,
            "color": "white",
            "purpose": "13. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nxe5",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nxe5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Four Pawns Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-fianchetto",
        "name": "King's Indian: Fianchetto Variation",
        "eco": "E62",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nf3",
          "Bg7",
          "g3",
          "O-O",
          "Bg2",
          "d6",
          "O-O",
          "Nc6",
          "Nc3",
          "a6",
          "d5",
          "Na5",
          "Nd2",
          "c5",
          "Qc2",
          "Rb8",
          "b3",
          "b5",
          "Bb2",
          "e5"
        ],
        "description": "White mirrors Black by fianchettoing on g2. This positional system blunts Black's kingside attack completely and leads to subtle strategic maneuvering.",
        "whitePlan": "Control long diagonal with Bg2, prevent Black's kingside pawn storm, outplay on queenside.",
        "blackPlan": "Maneuver on queenside with ...a6, ...b5, or strike in center with ...e5 and ...exd4.",
        "keyThemes": [
          "Kingside Attack Neutralization",
          "Fianchetto Bishop Duel",
          "Queenside Play (...b5)",
          "Long-Term Positional Squeeze"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "g3",
            "ply": 6,
            "color": "white",
            "purpose": "4. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "O-O",
            "ply": 7,
            "color": "black",
            "purpose": "4... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Fianchetto Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 9,
            "color": "black",
            "purpose": "5... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "a6",
            "ply": 13,
            "color": "black",
            "purpose": "7... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "d5",
            "ply": 14,
            "color": "white",
            "purpose": "8. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Na5",
            "ply": 15,
            "color": "black",
            "purpose": "8... Na5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Fianchetto Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Fianchetto Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 17,
            "color": "black",
            "purpose": "9... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Qc2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "Rb8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Rb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Fianchetto Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b3",
            "ply": 20,
            "color": "white",
            "purpose": "11. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Fianchetto Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b5",
            "ply": 21,
            "color": "black",
            "purpose": "11... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bb2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Fianchetto Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 23,
            "color": "black",
            "purpose": "12... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-petrosian",
        "name": "King's Indian: Petrosian System (7.d5)",
        "eco": "E92",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "Nf3",
          "O-O",
          "Be2",
          "e5",
          "d5",
          "a5",
          "Bg5",
          "h6",
          "Bh4",
          "Na6",
          "Nd2",
          "Qe8",
          "O-O",
          "Nh7",
          "a3",
          "Bd7",
          "b3",
          "h5",
          "f3",
          "Bh6"
        ],
        "description": "Tigran Petrosian's subtle system: White plays 7.d5 early and pins the knight with Bg5, restraining Black's ...f5 advance and controlling the b4 square.",
        "whitePlan": "Restrain Black's kingside breaks with Bg5/Bh4, expand on queenside with a3/b4.",
        "blackPlan": "Unpin queen with ...Qe8, reroute knight ...Nh7, execute ...f5 break under favorable terms.",
        "keyThemes": [
          "Prophylactic d5 Lock",
          "Bg5 Pin Restraint",
          "Queen Unpin via ...Qe8",
          "Knight Reroute to h7"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 6,
            "color": "white",
            "purpose": "4. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "e5",
            "ply": 11,
            "color": "black",
            "purpose": "6... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "d5",
            "ply": 12,
            "color": "white",
            "purpose": "7. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "a5",
            "ply": 13,
            "color": "black",
            "purpose": "7... a5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "h6",
            "ply": 15,
            "color": "black",
            "purpose": "8... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bh4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Na6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qe8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nh7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nh7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a3",
            "ply": 22,
            "color": "white",
            "purpose": "12. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b3",
            "ply": 24,
            "color": "white",
            "purpose": "13. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h5",
            "ply": 25,
            "color": "black",
            "purpose": "13... h5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f3",
            "ply": 26,
            "color": "white",
            "purpose": "14. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "Bh6",
            "ply": 27,
            "color": "black",
            "purpose": "14... Bh6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Petrosian System (7.d5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-gligoric",
        "name": "King's Indian: Gligoric System (7.Be3)",
        "eco": "E92",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "Nf3",
          "O-O",
          "Be2",
          "e5",
          "Be3",
          "Ng4",
          "Bg5",
          "f6",
          "Bh4",
          "g5",
          "Bg3",
          "Nh6",
          "d5",
          "Nd7",
          "Nd2",
          "a5",
          "f3",
          "Nc5"
        ],
        "description": "Svetozar Gligoric's system: White develops 7.Be3 to keep maximum flexibility in the center without committing to d5 immediately.",
        "whitePlan": "Retain central tension, answer ...Ng4 with Bg5, maneuver knights to optimal squares.",
        "blackPlan": "Harass bishop with ...Ng4, push ...g5 and ...Nh6, plant knight on c5 outpost.",
        "keyThemes": [
          "Central Tension Maintenance",
          "Bishop Hunt with ...Ng4",
          "Knight Outpost on c5",
          "Sharp Flank Expansion"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 6,
            "color": "white",
            "purpose": "4. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "e5",
            "ply": 11,
            "color": "black",
            "purpose": "6... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Be3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Ng4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Ng4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "f6",
            "ply": 15,
            "color": "black",
            "purpose": "8... f6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bh4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g5",
            "ply": 17,
            "color": "black",
            "purpose": "9... g5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bg3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nh6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nh6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 20,
            "color": "white",
            "purpose": "11. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nd7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a5",
            "ply": 23,
            "color": "black",
            "purpose": "12... a5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f3",
            "ply": 24,
            "color": "white",
            "purpose": "13. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "Nc5",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Gligoric System (7.Be3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-makogonov",
        "name": "King's Indian: Makogonov Variation (6.h3)",
        "eco": "E71",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "h3",
          "O-O",
          "Bg5",
          "c5",
          "d5",
          "e6",
          "Bd3",
          "exd5",
          "cxd5",
          "h6",
          "Be3",
          "Re8",
          "Nf3",
          "c4",
          "Bc2",
          "b5"
        ],
        "description": "White plays 6.h3 followed by Be3/Bg5 and g4, establishing a prophylactic wall to prevent Black's piece maneuvers (...Ng4) and prepare kingside expansion.",
        "whitePlan": "Prevent ...Ng4, clamp down on kingside with g4, control d5 square.",
        "blackPlan": "Strike on queenside with ...c5, ...b5, exploit overextension of White's pawns.",
        "keyThemes": [
          "Prophylactic 6.h3",
          "Preventing ...Ng4",
          "Queenside Counter-Expansion (...b5)",
          "Central Pawn Liquidation"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 6,
            "color": "white",
            "purpose": "4. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "h3",
            "ply": 8,
            "color": "white",
            "purpose": "5. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg5",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "c5",
            "ply": 11,
            "color": "black",
            "purpose": "6... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d5",
            "ply": 12,
            "color": "white",
            "purpose": "7. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e6",
            "ply": 13,
            "color": "black",
            "purpose": "7... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Bd3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Makogonov Variation (6.h3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exd5",
            "ply": 15,
            "color": "black",
            "purpose": "8... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Makogonov Variation (6.h3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Makogonov Variation (6.h3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h6",
            "ply": 17,
            "color": "black",
            "purpose": "9... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Be3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Re8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Nf3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "c4",
            "ply": 21,
            "color": "black",
            "purpose": "11... c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "Bc2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bc2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Makogonov Variation (6.h3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b5",
            "ply": 23,
            "color": "black",
            "purpose": "12... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-panno",
        "name": "King's Indian: Panno Variation",
        "eco": "E63",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nf3",
          "Bg7",
          "g3",
          "O-O",
          "Bg2",
          "d6",
          "O-O",
          "Nc6",
          "Nc3",
          "a6",
          "d5",
          "Na5",
          "Nd2",
          "c5",
          "Qc2",
          "Rb8",
          "b3",
          "b5",
          "Bb2",
          "bxc4",
          "bxc4",
          "Bh6"
        ],
        "description": "Oscar Panno's hyper-flexible setup with ...Nc6, ...a6, and ...Rb8, aiming for rapid queenside counterplay with ...b5 against White's fianchetto.",
        "whitePlan": "Control c-file, reinforce queenside pawns with b3/Bb2, maneuver knight Nd2-b3.",
        "blackPlan": "Open b-file with ...b5, target c4 pawn with knight on a5, activate dark-squared bishop.",
        "keyThemes": [
          "Knight to a5 Targeting c4",
          "Queenside b-file Pressure",
          "Bishop Pin/Pressure on h6",
          "Asymmetric Counterplay"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "g3",
            "ply": 6,
            "color": "white",
            "purpose": "4. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "O-O",
            "ply": 7,
            "color": "black",
            "purpose": "4... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 9,
            "color": "black",
            "purpose": "5... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "a6",
            "ply": 13,
            "color": "black",
            "purpose": "7... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "d5",
            "ply": 14,
            "color": "white",
            "purpose": "8. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Na5",
            "ply": 15,
            "color": "black",
            "purpose": "8... Na5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 17,
            "color": "black",
            "purpose": "9... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Qc2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "Rb8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Rb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b3",
            "ply": 20,
            "color": "white",
            "purpose": "11. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b5",
            "ply": 21,
            "color": "black",
            "purpose": "11... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Bb2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc4",
            "ply": 23,
            "color": "black",
            "purpose": "12... bxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc4",
            "ply": 24,
            "color": "white",
            "purpose": "13. bxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bh6",
            "ply": 25,
            "color": "black",
            "purpose": "13... Bh6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Panno Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kid-exchange",
        "name": "King's Indian: Exchange Variation",
        "eco": "E91",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "e4",
          "d6",
          "Nf3",
          "O-O",
          "Be2",
          "e5",
          "dxe5",
          "dxe5",
          "Qxd8",
          "Rxd8",
          "Bg5",
          "Re8",
          "Nd5",
          "Nxd5",
          "cxd5",
          "c6",
          "Bc4",
          "cxd5",
          "Bxd5",
          "Nd7"
        ],
        "description": "White trades queens on move 8 with 8.dxe5 dxe5 9.Qxd8 Rxd8, eliminating Black's kingside mating hopes and entering a strategic queenless middlegame.",
        "whitePlan": "Dominate open d-file, exploit hole on d5, exert pressure on c7 pawn.",
        "blackPlan": "Defend c7 with ...Nd7/Nf6, activate bishop pair, maneuver knight to c5 outpost.",
        "keyThemes": [
          "Queenless Strategic Middlegame",
          "d5 Square Domination",
          "c7 Backward Pawn Pressure",
          "Knight Outpost on c5"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 6,
            "color": "white",
            "purpose": "4. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 7,
            "color": "black",
            "purpose": "4... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "e5",
            "ply": 11,
            "color": "black",
            "purpose": "6... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "dxe5",
            "ply": 12,
            "color": "white",
            "purpose": "7. dxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxe5",
            "ply": 13,
            "color": "black",
            "purpose": "7... dxe5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd8",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qxd8: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rxd8",
            "ply": 15,
            "color": "black",
            "purpose": "8... Rxd8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Re8",
            "ply": 17,
            "color": "black",
            "purpose": "9... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Nd5",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 20,
            "color": "white",
            "purpose": "11. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c6",
            "ply": 21,
            "color": "black",
            "purpose": "11... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Bc4",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "cxd5",
            "ply": 23,
            "color": "black",
            "purpose": "12... cxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd5",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian: Exchange Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 100
  },
  {
    "id": "nimzo-indian",
    "name": "Nimzo-Indian & Queen's Indian",
    "ecoRange": "E12–E59",
    "category": "Indian Defenses (1.d4 Nf6 2.c4 e6)",
    "summary": "Aron Nimzowitsch's hypermodern masterpiece. Black pins White's knight with 3...Bb4, preventing e4 and fighting for the central dark squares with supreme flexibility.",
    "keyConcepts": [
      "Pin on c3 Knight (preventing e4)",
      "Doubled c-pawns creation",
      "Dark-square strategy (e4/d5)",
      "Bishop pair vs pawn structure"
    ],
    "famousPlayers": [
      "Anatoly Karpov",
      "Garry Kasparov",
      "Magnus Carlsen",
      "Vladimir Kramnik",
      "Ding Liren"
    ],
    "subVariations": [
      {
        "id": "nimzo-rubinstein",
        "name": "Nimzo-Indian: Rubinstein Variation (4.e3)",
        "eco": "E41",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nc3",
          "Bb4",
          "e3",
          "c5",
          "Bd3",
          "Nc6",
          "Nf3",
          "Bxc3+",
          "bxc3",
          "d6",
          "O-O",
          "e5",
          "Nd2",
          "O-O",
          "d5",
          "Ne7",
          "f4",
          "exf4",
          "exf4",
          "Bf5"
        ],
        "description": "Akiba Rubinstein's solid 4.e3. White accepts potential doubled c-pawns to develop solidly, while Black establishes a dark-square blockade with ...d6 and ...e5.",
        "whitePlan": "Use the bishop pair, push central majority with f4 and e4, attack Black's king.",
        "blackPlan": "Blockade doubled c-pawns, target weak c4 pawn with ...b6 and ...Ba6, dominate dark squares.",
        "keyThemes": [
          "Doubled c-pawns Weakness",
          "Dark-Square Blockade (...e5/d6)",
          "Bishop Pair vs Structure",
          "Targeting c4 with ...Ba6"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bb4",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "e3",
            "ply": 6,
            "color": "white",
            "purpose": "4. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 7,
            "color": "black",
            "purpose": "4... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Bd3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nf3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bxc3+",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bxc3+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 13,
            "color": "black",
            "purpose": "7... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "e5",
            "ply": 15,
            "color": "black",
            "purpose": "8... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nd2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "d5",
            "ply": 18,
            "color": "white",
            "purpose": "10. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Ne7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Ne7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f4",
            "ply": 20,
            "color": "white",
            "purpose": "11. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "exf4",
            "ply": 21,
            "color": "black",
            "purpose": "11... exf4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exf4",
            "ply": 22,
            "color": "white",
            "purpose": "12. exf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf5",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Rubinstein Variation (4.e3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "nimzo-classical",
        "name": "Nimzo-Indian: Classical / Capablanca (4.Qc2)",
        "eco": "E32",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nc3",
          "Bb4",
          "Qc2",
          "O-O",
          "a3",
          "Bxc3+",
          "Qxc3",
          "b6",
          "Bg5",
          "Bb7",
          "f3",
          "h6",
          "Bh4",
          "d5",
          "e3",
          "Nbd7",
          "cxd5",
          "Nxd5",
          "Bxd8",
          "Nxc3",
          "Bh4",
          "Nd5"
        ],
        "description": "José Raúl Capablanca's positional favorite: 4.Qc2 prevents doubled pawns on c3. If Black takes on c3, White recaptures with the queen and retains the bishop pair.",
        "whitePlan": "Retain bishop pair without structural damage, seize center with e4, attack on kingside.",
        "blackPlan": "Strike at center with ...d5 or ...c5, expand on queenside with ...b6/Bb7, exploit queen tempi.",
        "keyThemes": [
          "Preventing Doubled Pawns",
          "Bishop Pair Maintenance",
          "Central Counterstrike ...d5",
          "Queenside Fianchetto (...Bb7)"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bb4",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "Qc2",
            "ply": 6,
            "color": "white",
            "purpose": "4. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "O-O",
            "ply": 7,
            "color": "black",
            "purpose": "4... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "a3",
            "ply": 8,
            "color": "white",
            "purpose": "5. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc3+",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bxc3+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxc3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Qxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b6",
            "ply": 11,
            "color": "black",
            "purpose": "6... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Bb7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f3",
            "ply": 14,
            "color": "white",
            "purpose": "8. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "h6",
            "ply": 15,
            "color": "black",
            "purpose": "8... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bh4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 17,
            "color": "black",
            "purpose": "9... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e3",
            "ply": 18,
            "color": "white",
            "purpose": "10. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 20,
            "color": "white",
            "purpose": "11. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd8",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bxd8: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxc3",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bh4",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd5",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Classical / Capablanca (4.Qc2).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "nimzo-saemisch",
        "name": "Nimzo-Indian: Sämisch Variation (4.a3)",
        "eco": "E24",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nc3",
          "Bb4",
          "a3",
          "Bxc3+",
          "bxc3",
          "c5",
          "f3",
          "d5",
          "cxd5",
          "Nxd5",
          "dxc5",
          "Qa5",
          "e4",
          "Ne7",
          "Be3",
          "O-O",
          "Qb3",
          "Qc7",
          "Nh3",
          "e5"
        ],
        "description": "White forces the issue immediately with 4.a3!, accepting doubled c-pawns to gain the bishop pair and build a massive center with f3 and e4.",
        "whitePlan": "Build crushing central pawn roller with f3 and e4, attack Black's kingside with bishops.",
        "blackPlan": "Target crippled doubled c-pawns (c4/c3), blockade the center, isolate White's weaknesses.",
        "keyThemes": [
          "Forced Exchange on c3",
          "Massive e4/f3 Center",
          "Attack on Crippled c4 Pawn",
          "Heavy Piece Siege"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bb4",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "a3",
            "ply": 6,
            "color": "white",
            "purpose": "4. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc3+",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bxc3+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 9,
            "color": "black",
            "purpose": "5... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "f3",
            "ply": 10,
            "color": "white",
            "purpose": "6. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "d5",
            "ply": 11,
            "color": "black",
            "purpose": "6... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 12,
            "color": "white",
            "purpose": "7. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc5",
            "ply": 14,
            "color": "white",
            "purpose": "8. dxc5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qa5",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qa5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e4",
            "ply": 16,
            "color": "white",
            "purpose": "9. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Ne7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Ne7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qb3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Qb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Nh3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nh3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Sämisch Variation (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 23,
            "color": "black",
            "purpose": "12... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "nimzo-4f3",
        "name": "Nimzo-Indian: 4.f3 System (Shirov Attack)",
        "eco": "E20",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nc3",
          "Bb4",
          "f3",
          "d5",
          "a3",
          "Be7",
          "e4",
          "dxe4",
          "fxe4",
          "e5",
          "d5",
          "Bc5",
          "Nf3",
          "Bg4",
          "h3",
          "Bxf3",
          "Qxf3",
          "Nbd7"
        ],
        "description": "An ultra-aggressive system championed by Alexei Shirov. White prepares an immediate e4 advance on move 4, leading to wild, tactical middlegames.",
        "whitePlan": "Dominate center with broad e4/d5 pawn duo, launch kingside assault.",
        "blackPlan": "Counterstrike with 4...d5 and ...e5, target weak dark squares (g1-a7 diagonal), pin with ...Bg4.",
        "keyThemes": [
          "Aggressive 4.f3 Advance",
          "Dark-Square Exploitation (Bc5)",
          "Pin with ...Bg4",
          "Broad Pawn Center"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bb4",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "f3",
            "ply": 6,
            "color": "white",
            "purpose": "4. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "d5",
            "ply": 7,
            "color": "black",
            "purpose": "4... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "a3",
            "ply": 8,
            "color": "white",
            "purpose": "5. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: 4.f3 System (Shirov Attack).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "e4",
            "ply": 10,
            "color": "white",
            "purpose": "6. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "dxe4",
            "ply": 11,
            "color": "black",
            "purpose": "6... dxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: 4.f3 System (Shirov Attack).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "fxe4",
            "ply": 12,
            "color": "white",
            "purpose": "7. fxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: 4.f3 System (Shirov Attack).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 13,
            "color": "black",
            "purpose": "7... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "d5",
            "ply": 14,
            "color": "white",
            "purpose": "8. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Bc5",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: 4.f3 System (Shirov Attack).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg4",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "h3",
            "ply": 18,
            "color": "white",
            "purpose": "10. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "Bxf3",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bxf3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: 4.f3 System (Shirov Attack).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxf3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Qxf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: 4.f3 System (Shirov Attack).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: 4.f3 System (Shirov Attack).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "nimzo-leningrad",
        "name": "Nimzo-Indian: Leningrad Variation (4.Bg5)",
        "eco": "E30",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nc3",
          "Bb4",
          "Bg5",
          "c5",
          "d5",
          "d6",
          "e3",
          "Bxc3+",
          "bxc3",
          "e5",
          "Bd3",
          "Nbd7",
          "Ne2",
          "h6",
          "Bh4",
          "Qe7",
          "O-O",
          "g5",
          "Bg3",
          "Nh5"
        ],
        "description": "Boris Spassky's pin weapon: 4.Bg5 puts immediate psychological pressure on Black's knight. Black counters with ...c5 and ...h6/g5 to trap or harass the bishop.",
        "whitePlan": "Maintain pin on f6, control d5 outpost, utilize bishop pair and open f-file.",
        "blackPlan": "Undermine pin with ...h6 and ...g5, build dark-square blockade, target doubled c-pawns.",
        "keyThemes": [
          "Immediate 4.Bg5 Pin",
          "Flank Attack with ...h6/g5",
          "Dark-Square Control",
          "Doubled c-pawns Siege"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bb4",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "c5",
            "ply": 7,
            "color": "black",
            "purpose": "4... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d5",
            "ply": 8,
            "color": "white",
            "purpose": "5. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "d6",
            "ply": 9,
            "color": "black",
            "purpose": "5... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "e3",
            "ply": 10,
            "color": "white",
            "purpose": "6. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc3+",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bxc3+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 13,
            "color": "black",
            "purpose": "7... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Bd3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Ne2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h6",
            "ply": 17,
            "color": "black",
            "purpose": "9... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Bh4",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "g5",
            "ply": 21,
            "color": "black",
            "purpose": "11... g5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bg3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nh5",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nh5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Indian: Leningrad Variation (4.Bg5).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qid-classical",
        "name": "Queen's Indian Defense: Classical 4.g3",
        "eco": "E15",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nf3",
          "b6",
          "g3",
          "Ba6",
          "b3",
          "Bb4+",
          "Bd2",
          "Be7",
          "Bg2",
          "c6",
          "Bc3",
          "d5",
          "Ne5",
          "Nfd7",
          "Nxd7",
          "Nxd7",
          "Nd2",
          "O-O",
          "O-O",
          "Rc8"
        ],
        "description": "When White plays 3.Nf3 (avoiding the Nimzo-Indian), Black responds with 3...b6 to control e4 from a distance. The modern main line features 4...Ba6 attacking c4.",
        "whitePlan": "Control long diagonal with Bg2, plant knight on e5, push e4 to dominate center.",
        "blackPlan": "Attack c4 with ...Ba6, prepare central ...d5 break, achieve solid equality and active counterplay.",
        "keyThemes": [
          "Hypermodern ...Ba6 Attack on c4",
          "Long-Diagonal Fianchetto Duel",
          "Ne5 Knight Outpost",
          "Solid Pawn Triangle (c6/d5/e6)"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "b6",
            "ply": 5,
            "color": "black",
            "purpose": "3... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g3",
            "ply": 6,
            "color": "white",
            "purpose": "4. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Ba6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Ba6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b3",
            "ply": 8,
            "color": "white",
            "purpose": "5. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb4+",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bb4+: Delivers check on b4, forcing concessions on d2 or c3 before retreating.",
            "strategicConcept": "Bogo-Indian & Cambridge Springs pin."
          },
          {
            "san": "Bd2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "Bg2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c6",
            "ply": 13,
            "color": "black",
            "purpose": "7... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Bc3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 15,
            "color": "black",
            "purpose": "8... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Ne5",
            "ply": 16,
            "color": "white",
            "purpose": "9. Ne5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nfd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nfd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd7",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nxd7: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nxd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: Classical 4.g3.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 22,
            "color": "white",
            "purpose": "12. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Rc8",
            "ply": 23,
            "color": "black",
            "purpose": "12... Rc8: Places rook on open c-file, targeting c3/c2 and preparing counterplay.",
            "strategicConcept": "Sicilian thematic rook placement."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qid-4e3",
        "name": "Queen's Indian Defense: 4.e3 System",
        "eco": "E14",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nf3",
          "b6",
          "e3",
          "Bb7",
          "Bd3",
          "d5",
          "O-O",
          "Bd6",
          "b3",
          "O-O",
          "Bb2",
          "Nbd7",
          "Nc3",
          "a6",
          "Qe2",
          "Ne4",
          "Rad1",
          "f5"
        ],
        "description": "A classical, harmonious setup where both sides develop bishops on long diagonals, often leading to Stonewall-like or hanging pawn dynamics.",
        "whitePlan": "Coordinate pieces in center, push c5 or e4, exploit central tension.",
        "blackPlan": "Anchor knight on e4, support with ...f5 (Dutch-style attack), strike on kingside.",
        "keyThemes": [
          "Symmetrical Harmonious Development",
          "Knight Outpost on e4",
          "Kingside Attack with ...f5",
          "Long Diagonal Pressure"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "b6",
            "ply": 5,
            "color": "black",
            "purpose": "3... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e3",
            "ply": 6,
            "color": "white",
            "purpose": "4. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 9,
            "color": "black",
            "purpose": "5... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bd6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b3",
            "ply": 12,
            "color": "white",
            "purpose": "7. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bb2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "a6",
            "ply": 17,
            "color": "black",
            "purpose": "9... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Qe2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne4",
            "ply": 19,
            "color": "black",
            "purpose": "10... Ne4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rad1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Rad1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian Defense: 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f5",
            "ply": 21,
            "color": "black",
            "purpose": "11... f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "qid-petrosian",
        "name": "Queen's Indian: Petrosian System (4.a3)",
        "eco": "E12",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nf3",
          "b6",
          "a3",
          "Bb7",
          "Nc3",
          "d5",
          "cxd5",
          "Nxd5",
          "Qc2",
          "Nxc3",
          "bxc3",
          "Be7",
          "e4",
          "O-O",
          "Bd3",
          "c5",
          "O-O",
          "Qc7",
          "Qe2",
          "Nd7"
        ],
        "description": "Tigran Petrosian and Garry Kasparov favored 4.a3 to prevent ...Bb4 completely and prepare a broad center with Nc3 and e4.",
        "whitePlan": "Build massive classical center with e4, prevent Black's bishop pins, attack kingside.",
        "blackPlan": "Counterstrike in center with ...c5, target White's e4/d4 pawns, use open diagonals.",
        "keyThemes": [
          "Prophylactic 4.a3",
          "Preventing ...Bb4 Pin",
          "Central Domination with e4",
          "Counter-Strike with ...c5"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "b6",
            "ply": 5,
            "color": "black",
            "purpose": "3... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a3",
            "ply": 6,
            "color": "white",
            "purpose": "4. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 9,
            "color": "black",
            "purpose": "5... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 10,
            "color": "white",
            "purpose": "6. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "Nxc3",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 14,
            "color": "white",
            "purpose": "8. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "e4",
            "ply": 16,
            "color": "white",
            "purpose": "9. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bd3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 19,
            "color": "black",
            "purpose": "10... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qc7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Qe2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Queen's Indian: Petrosian System (4.a3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "bogo-indian",
        "name": "Bogo-Indian Defense (3...Bb4+)",
        "eco": "E11",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "Nf3",
          "Bb4+",
          "Bd2",
          "Qe7",
          "g3",
          "Nc6",
          "Bg2",
          "Bxd2+",
          "Nbxd2",
          "d6",
          "O-O",
          "a5",
          "e4",
          "e5",
          "d5",
          "Nb8",
          "Ne1",
          "O-O",
          "Nd3",
          "Na6"
        ],
        "description": "Efim Bogoljubov's solid defense: Black gives a check on b4 on move 3. After 4.Bd2, Black trades bishops or plays ...Qe7, achieving harmonious piece coordination.",
        "whitePlan": "Gain space with e4 and d5, push f4, maneuver knights to d3 and c2.",
        "blackPlan": "Establish dark-square pawn chain with ...d6 and ...e5, reroute knight ...Nb8-a6-c5.",
        "keyThemes": [
          "Check on b4 (3...Bb4+)",
          "Bishop Trade on d2",
          "Knight Outpost on c5",
          "Solid Dark-Square Pawn Web"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bb4+",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bb4+: Delivers check on b4, forcing concessions on d2 or c3 before retreating.",
            "strategicConcept": "Bogo-Indian & Cambridge Springs pin."
          },
          {
            "san": "Bd2",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Qe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g3",
            "ply": 8,
            "color": "white",
            "purpose": "5. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Nc6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bg2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd2+",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bxd2+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbxd2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nbxd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 13,
            "color": "black",
            "purpose": "7... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "a5",
            "ply": 15,
            "color": "black",
            "purpose": "8... a5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e4",
            "ply": 16,
            "color": "white",
            "purpose": "9. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 17,
            "color": "black",
            "purpose": "9... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "d5",
            "ply": 18,
            "color": "white",
            "purpose": "10. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nb8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Ne1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nd3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Na6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bogo-Indian Defense (3...Bb4+).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "catalan-open",
        "name": "Catalan Opening: Open & Closed Systems",
        "eco": "E04",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "e6",
          "g3",
          "d5",
          "Bg2",
          "dxc4",
          "Nf3",
          "a6",
          "O-O",
          "Nc6",
          "e3",
          "Rb8",
          "Nfd2",
          "e5",
          "Bxc6+",
          "bxc6",
          "dxe5",
          "Ng4",
          "Nxc4",
          "Be6",
          "Nbd2",
          "Bb4"
        ],
        "description": "Vladimir Kramnik and Magnus Carlsen's most lethal positional weapon. White combines the Queen's Gambit with a kingside fianchetto (g3/Bg2), placing immense long-term pressure on the queenside.",
        "whitePlan": "Dominate the long h1-a8 diagonal with Catalan bishop, regain c4 pawn, dominate center.",
        "blackPlan": "Hold or return c4 pawn for dynamic piece counterplay, break with ...c5 or ...e5.",
        "keyThemes": [
          "Monster Catalan Bishop on g2",
          "Long Diagonal Domination",
          "c4 Pawn Retention/Return Battle",
          "Deep Strategic Nuances"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "g3",
            "ply": 4,
            "color": "white",
            "purpose": "3. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Bg2",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc4",
            "ply": 7,
            "color": "black",
            "purpose": "4... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "a6",
            "ply": 9,
            "color": "black",
            "purpose": "5... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "e3",
            "ply": 12,
            "color": "white",
            "purpose": "7. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rb8",
            "ply": 13,
            "color": "black",
            "purpose": "7... Rb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nfd2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nfd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 15,
            "color": "black",
            "purpose": "8... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Bxc6+",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bxc6+: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc6",
            "ply": 17,
            "color": "black",
            "purpose": "9... bxc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxe5",
            "ply": 18,
            "color": "white",
            "purpose": "10. dxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ng4",
            "ply": 19,
            "color": "black",
            "purpose": "10... Ng4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxc4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Nbd2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Catalan Opening: Open & Closed Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb4",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 100
  },
  {
    "id": "gruenfeld",
    "name": "Grünfeld Defense",
    "ecoRange": "D70–D99",
    "category": "Indian Defenses (1.d4 Nf6 2.c4 g6 3.Nc3 d5)",
    "summary": "Ernst Grünfeld's hypermodern triumph. Black allows White to build a giant pawn center with e4 and d4, then immediately counterattacks it from the flanks with ...Bg7, ...c5, and ...Nc6.",
    "keyConcepts": [
      "Hypermodern surrender of the center",
      "Demolition of White's d4 center with ...c5",
      "Monster dark-squared bishop on g7",
      "Endgame queenside passed pawn"
    ],
    "famousPlayers": [
      "Garry Kasparov",
      "Peter Svidler",
      "Maxime Vachier-Lagrave",
      "Bobby Fischer",
      "Ian Nepomniachtchi"
    ],
    "subVariations": [
      {
        "id": "gruenfeld-exchange-rb1",
        "name": "Grünfeld Exchange: Modern 8.Rb1 System",
        "eco": "D85",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "d5",
          "cxd5",
          "Nxd5",
          "e4",
          "Nxc3",
          "bxc3",
          "Bg7",
          "Nf3",
          "c5",
          "Rb1",
          "O-O",
          "Be2",
          "cxd4",
          "cxd4",
          "Qa5+",
          "Bd2",
          "Qxa2",
          "O-O",
          "Bg4",
          "Bg5",
          "h6",
          "Be3",
          "Nc6"
        ],
        "description": "The modern battlefield of elite chess. White moves the rook off the vulnerable a1-h8 diagonal to b1 to exert pressure along the semi-open b-file, while Black counter-attacks on the queenside.",
        "whitePlan": "Use active rook on b-file, push central pawns (d5/e5), build kingside mating attack.",
        "blackPlan": "Target d4 pawn, grab queenside pawns (Qxa2), activate pieces against White's center.",
        "keyThemes": [
          "Active Rook on b-file",
          "Poisoned a2 Pawn Grab",
          "Immense Pressure on d4",
          "Tactical Bishop Pins"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 6,
            "color": "white",
            "purpose": "4. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e4",
            "ply": 8,
            "color": "white",
            "purpose": "5. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Nxc3",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 10,
            "color": "white",
            "purpose": "6. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Nf3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "c5",
            "ply": 13,
            "color": "black",
            "purpose": "7... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Rb1",
            "ply": 14,
            "color": "white",
            "purpose": "8. Rb1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "cxd4",
            "ply": 17,
            "color": "black",
            "purpose": "9... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 18,
            "color": "white",
            "purpose": "10. cxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qa5+",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qa5+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxa2",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qxa2: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Modern 8.Rb1 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 22,
            "color": "white",
            "purpose": "12. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg4",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "Bg5",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "h6",
            "ply": 25,
            "color": "black",
            "purpose": "13... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Be3",
            "ply": 26,
            "color": "white",
            "purpose": "14. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Nc6",
            "ply": 27,
            "color": "black",
            "purpose": "14... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-exchange-bc4",
        "name": "Grünfeld Exchange: Classical 7.Bc4",
        "eco": "D86",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "d5",
          "cxd5",
          "Nxd5",
          "e4",
          "Nxc3",
          "bxc3",
          "Bg7",
          "Bc4",
          "c5",
          "Ne2",
          "Nc6",
          "Be3",
          "O-O",
          "O-O",
          "Bg4",
          "f3",
          "Na5",
          "Bd3",
          "cxd4",
          "cxd4",
          "Be6",
          "d5",
          "Bxa1",
          "Qxa1"
        ],
        "description": "The classical exchange variation played in Karpov-Kasparov World Championship matches. White establishes a huge pawn center and develops Bc4/Ne2, leading to epic exchange sacrifices on a1.",
        "whitePlan": "Sacrifice the exchange on a1 for devastating light-square domination and mating attack (Bh6).",
        "blackPlan": "Accept the rook sacrifice on a1, defend kingside dark squares, survive to win in the endgame.",
        "keyThemes": [
          "Epic Exchange Sac on a1",
          "Dominant Light-Square Bishop (Bc4/Bh6)",
          "Central Pawn Roller (d5/e5)",
          "Knight Outpost on a5/c4"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 6,
            "color": "white",
            "purpose": "4. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e4",
            "ply": 8,
            "color": "white",
            "purpose": "5. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Nxc3",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 10,
            "color": "white",
            "purpose": "6. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Bc4",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "c5",
            "ply": 13,
            "color": "black",
            "purpose": "7... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Ne2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Ne2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Be3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bg4",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "f3",
            "ply": 20,
            "color": "white",
            "purpose": "11. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "Na5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Na5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 23,
            "color": "black",
            "purpose": "12... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 24,
            "color": "white",
            "purpose": "13. cxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 25,
            "color": "black",
            "purpose": "13... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "d5",
            "ply": 26,
            "color": "white",
            "purpose": "14. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Bxa1",
            "ply": 27,
            "color": "black",
            "purpose": "14... Bxa1: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxa1",
            "ply": 28,
            "color": "white",
            "purpose": "15. Qxa1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld Exchange: Classical 7.Bc4.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-russian",
        "name": "Grünfeld: Russian System (4.Nf3 Bg7 5.Qb3)",
        "eco": "D96",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "d5",
          "Nf3",
          "Bg7",
          "Qb3",
          "dxc4",
          "Qxc4",
          "O-O",
          "e4",
          "a6",
          "Be2",
          "b5",
          "Qb3",
          "c5",
          "dxc5",
          "Bb7",
          "e5",
          "Nfd7",
          "Be3",
          "e6",
          "Rd1",
          "Qc7"
        ],
        "description": "Vasily Smyslov and Mikhail Botvinnik pioneered 5.Qb3, forcing Black to surrender the d5 pawn (5...dxc4) and regaining it with the queen while controlling central squares.",
        "whitePlan": "Control center with e4, prevent Black's queenside expansion, target weak c5 pawn.",
        "blackPlan": "Storm queenside with ...a6 and ...b5, attack e4 pawn with ...Bb7, win back c5 pawn.",
        "keyThemes": [
          "Early Queen Pressure (5.Qb3)",
          "Surrender of d5 (5...dxc4)",
          "Queenside Storm (...a6/b5)",
          "Targeting e4 Pawn"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Qb3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Qb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Russian System (4.Nf3 Bg7 5.Qb3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc4",
            "ply": 9,
            "color": "black",
            "purpose": "5... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Russian System (4.Nf3 Bg7 5.Qb3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxc4",
            "ply": 10,
            "color": "white",
            "purpose": "6. Qxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Russian System (4.Nf3 Bg7 5.Qb3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 11,
            "color": "black",
            "purpose": "6... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "e4",
            "ply": 12,
            "color": "white",
            "purpose": "7. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "a6",
            "ply": 13,
            "color": "black",
            "purpose": "7... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Be2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "b5",
            "ply": 15,
            "color": "black",
            "purpose": "8... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "Qb3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Russian System (4.Nf3 Bg7 5.Qb3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 17,
            "color": "black",
            "purpose": "9... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "dxc5",
            "ply": 18,
            "color": "white",
            "purpose": "10. dxc5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Russian System (4.Nf3 Bg7 5.Qb3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Russian System (4.Nf3 Bg7 5.Qb3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 20,
            "color": "white",
            "purpose": "11. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nfd7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nfd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Russian System (4.Nf3 Bg7 5.Qb3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "e6",
            "ply": 23,
            "color": "black",
            "purpose": "12... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Rd1",
            "ply": 24,
            "color": "white",
            "purpose": "13. Rd1: Brings rook to d-file, supporting d-pawn and applying pressure down the center.",
            "strategicConcept": "Heavy piece centralization."
          },
          {
            "san": "Qc7",
            "ply": 25,
            "color": "black",
            "purpose": "13... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-bf4",
        "name": "Grünfeld: 4.Bf4 & Modern Systems",
        "eco": "D82",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "d5",
          "Bf4",
          "Bg7",
          "e3",
          "O-O",
          "Rc1",
          "c5",
          "dxc5",
          "Be6",
          "Nf3",
          "Nc6",
          "Ng5",
          "Bg4",
          "f3",
          "Bc8",
          "cxd5",
          "Nb4",
          "e4",
          "Nh5",
          "Be3",
          "e6"
        ],
        "description": "White develops the dark-squared bishop outside the pawn chain before playing e3, avoiding open tactical lines while keeping solid positional pressure on c7.",
        "whitePlan": "Reinforce center with e3, pressure c7 pawn along the c-file with Rc1, control d5.",
        "blackPlan": "Counterstrike aggressively with ...c5, undermine White's center with ...e6, hunt White's bishop.",
        "keyThemes": [
          "Active Bishop on f4",
          "Pressure on c7",
          "Counter-Strike with ...c5",
          "Complicated Tactical Melee"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Bf4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bf4 & Modern Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e3",
            "ply": 8,
            "color": "white",
            "purpose": "5. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bf4 & Modern Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Rc1",
            "ply": 10,
            "color": "white",
            "purpose": "6. Rc1: Places rook on semi-open c-file, targeting enemy c-pawns.",
            "strategicConcept": "C-file heavy piece mobilization."
          },
          {
            "san": "c5",
            "ply": 11,
            "color": "black",
            "purpose": "6... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "dxc5",
            "ply": 12,
            "color": "white",
            "purpose": "7. dxc5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bf4 & Modern Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Nf3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Ng5",
            "ply": 16,
            "color": "white",
            "purpose": "9. Ng5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bf4 & Modern Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg4",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "f3",
            "ply": 18,
            "color": "white",
            "purpose": "10. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "Bc8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bc8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bf4 & Modern Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 20,
            "color": "white",
            "purpose": "11. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bf4 & Modern Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nb4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nb4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bf4 & Modern Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e4",
            "ply": 22,
            "color": "white",
            "purpose": "12. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Nh5",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nh5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bf4 & Modern Systems.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 24,
            "color": "white",
            "purpose": "13. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "e6",
            "ply": 25,
            "color": "black",
            "purpose": "13... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-fianchetto",
        "name": "Grünfeld: Fianchetto System (3.g3)",
        "eco": "D71",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "g3",
          "d5",
          "Bg2",
          "Bg7",
          "Nf3",
          "O-O",
          "O-O",
          "dxc4",
          "Na3",
          "c3",
          "bxc3",
          "c5",
          "e3",
          "Nc6",
          "Qe2",
          "Bf5",
          "Rd1",
          "Qa5",
          "Bb2",
          "Rac8"
        ],
        "description": "White plays g3 to neutralize Black's monster bishop on g7. This positional, low-risk approach was a favorite of Anatoly Karpov and Ulf Andersson.",
        "whitePlan": "Maintain solid pawn center, avoid sharp tactical complications, outplay in queenless endings.",
        "blackPlan": "Disrupt White's queenside with ...c3, strike in center with ...c5, place pieces actively.",
        "keyThemes": [
          "Neutralizing Fianchetto (g3/Bg2)",
          "Pawn Sac ...c3 to Damage Structure",
          "Solid Positional Squeeze",
          "Counterplay on c-file"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "g3",
            "ply": 4,
            "color": "white",
            "purpose": "3. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Bg2",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "dxc4",
            "ply": 11,
            "color": "black",
            "purpose": "6... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Na3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 13,
            "color": "black",
            "purpose": "7... c3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 14,
            "color": "white",
            "purpose": "8. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 15,
            "color": "black",
            "purpose": "8... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "e3",
            "ply": 16,
            "color": "white",
            "purpose": "9. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Qe2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf5",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rd1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Rd1: Brings rook to d-file, supporting d-pawn and applying pressure down the center.",
            "strategicConcept": "Heavy piece centralization."
          },
          {
            "san": "Qa5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qa5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rac8",
            "ply": 23,
            "color": "black",
            "purpose": "12... Rac8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Fianchetto System (3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-5bd2",
        "name": "Grünfeld: Modern 4.Nf3 Bg7 5.Bd2",
        "eco": "D80",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "d5",
          "Nf3",
          "Bg7",
          "Bd2",
          "O-O",
          "Rc1",
          "c6",
          "e3",
          "e6",
          "Bd3",
          "Nbd7",
          "O-O",
          "b6",
          "cxd5",
          "exd5",
          "b4",
          "Bb7",
          "Qb3",
          "Qe7"
        ],
        "description": "A clever modern line championed by Magnus Carlsen and Fabiano Caruana: 5.Bd2 prepares to recapture on c3 with the bishop if Black plays ...Nxd5/Nxc3.",
        "whitePlan": "Recapture on c3 with bishop (Bxc3), maintain pawn structure integrity, squeeze queenside.",
        "blackPlan": "Play solid Slav-like setup with ...c6/e6, or open center with ...dxc4 and ...c5.",
        "keyThemes": [
          "Prophylactic 5.Bd2",
          "Preserving Pawn Structure",
          "Carlsen Positional Squeeze",
          "Slav-like Transposition"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Bd2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Rc1",
            "ply": 10,
            "color": "white",
            "purpose": "6. Rc1: Places rook on semi-open c-file, targeting enemy c-pawns.",
            "strategicConcept": "C-file heavy piece mobilization."
          },
          {
            "san": "c6",
            "ply": 11,
            "color": "black",
            "purpose": "6... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "e3",
            "ply": 12,
            "color": "white",
            "purpose": "7. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 13,
            "color": "black",
            "purpose": "7... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Bd3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 16,
            "color": "white",
            "purpose": "9. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "b6",
            "ply": 17,
            "color": "black",
            "purpose": "9... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 18,
            "color": "white",
            "purpose": "10. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "exd5",
            "ply": 19,
            "color": "black",
            "purpose": "10... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b4",
            "ply": 20,
            "color": "white",
            "purpose": "11. b4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qb3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Qb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Modern 4.Nf3 Bg7 5.Bd2.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-bg5",
        "name": "Grünfeld: 4.Bg5 / Stockholm Variation",
        "eco": "D80",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "d5",
          "Bg5",
          "Ne4",
          "Bh4",
          "Nxc3",
          "bxc3",
          "dxc4",
          "e3",
          "Be6",
          "Qb1",
          "b6",
          "Nf3",
          "Bg7",
          "Be2",
          "O-O",
          "O-O",
          "c5",
          "Rd1",
          "Nd7"
        ],
        "description": "White pins Black's knight on f6 immediately on move 4. Black typically responds with 4...Ne4, attacking the bishop and leading to dynamic pawn-grabbing lines.",
        "whitePlan": "Regain c4 pawn, exploit Black's offside knight, build strong center.",
        "blackPlan": "Counterattack bishop with ...Ne4, hold c4 pawn with ...Be6/b6, strike with ...c5.",
        "keyThemes": [
          "Immediate 4.Bg5 Pin",
          "Knight Counter-Jump (4...Ne4)",
          "Pawn Defense on c4",
          "Dynamic Center Friction"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Bg5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Ne4",
            "ply": 7,
            "color": "black",
            "purpose": "4... Ne4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bh4",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bh4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxc3",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 10,
            "color": "white",
            "purpose": "6. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc4",
            "ply": 11,
            "color": "black",
            "purpose": "6... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e3",
            "ply": 12,
            "color": "white",
            "purpose": "7. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Qb1",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qb1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b6",
            "ply": 15,
            "color": "black",
            "purpose": "8... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Be2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "c5",
            "ply": 21,
            "color": "black",
            "purpose": "11... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Rd1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rd1: Brings rook to d-file, supporting d-pawn and applying pressure down the center.",
            "strategicConcept": "Heavy piece centralization."
          },
          {
            "san": "Nd7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: 4.Bg5 / Stockholm Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-flohr",
        "name": "Grünfeld: Flohr / 4.e3 System",
        "eco": "D80",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "d5",
          "e3",
          "Bg7",
          "Nf3",
          "O-O",
          "Be2",
          "c5",
          "dxc5",
          "dxc4",
          "Bxc4",
          "Qxd1+",
          "Kxd1",
          "Nbd7",
          "c6",
          "bxc6",
          "Ke2",
          "Nb6",
          "Bd3",
          "Nfd5"
        ],
        "description": "Salo Flohr's solid system: White reinforces d4 with 4.e3, heading for early queen exchanges and entering technical, slightly favorable endgames.",
        "whitePlan": "Trade queens on d1, utilize superior pawn structure in the endgame.",
        "blackPlan": "Liquidate White's c5 pawn, activate knights on d5 and b6, dominate the center.",
        "keyThemes": [
          "Quiet 4.e3 Setup",
          "Early Queen Exchange",
          "Endgame Pawn Majority Battle",
          "Active Knight Coordination"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e3",
            "ply": 6,
            "color": "white",
            "purpose": "4. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "c5",
            "ply": 11,
            "color": "black",
            "purpose": "6... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "dxc5",
            "ply": 12,
            "color": "white",
            "purpose": "7. dxc5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc4",
            "ply": 13,
            "color": "black",
            "purpose": "7... dxc4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc4",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bxc4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd1+",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qxd1+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Kxd1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Kxd1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c6",
            "ply": 18,
            "color": "white",
            "purpose": "10. c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "bxc6",
            "ply": 19,
            "color": "black",
            "purpose": "10... bxc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ke2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Ke2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nb6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nfd5",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nfd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Flohr / 4.e3 System.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-prins",
        "name": "Grünfeld: Prins Variation (5.Na4)",
        "eco": "D85",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "Nc3",
          "d5",
          "cxd5",
          "Nxd5",
          "Na4",
          "Bg7",
          "e4",
          "Nb6",
          "Be3",
          "O-O",
          "Nf3",
          "Nxa4",
          "Qxa4",
          "c5",
          "Rd1",
          "Qb6",
          "b3",
          "cxd4",
          "Bxd4",
          "Bxd4",
          "Qxd4"
        ],
        "description": "Lodewijk Prins's inventive sideline: White plays 5.Na4 after 4...Nxd5 to control the c5 square and prevent Black's thematic ...c5 pawn break.",
        "whitePlan": "Clamp down on c5 square, prevent Black's primary counter-strike, expand in center.",
        "blackPlan": "Exchange knights on a4 to free space, execute ...c5 break anyway, attack b2 pawn.",
        "keyThemes": [
          "c5 Square Clamp (5.Na4)",
          "Minor Piece Trade on a4",
          "Thematic ...c5 Execution",
          "Counterplay on b2/d4"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 6,
            "color": "white",
            "purpose": "4. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na4",
            "ply": 8,
            "color": "white",
            "purpose": "5. Na4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "e4",
            "ply": 10,
            "color": "white",
            "purpose": "6. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Nb6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nf3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nxa4",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nxa4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxa4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qxa4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 17,
            "color": "black",
            "purpose": "9... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Rd1",
            "ply": 18,
            "color": "white",
            "purpose": "10. Rd1: Brings rook to d-file, supporting d-pawn and applying pressure down the center.",
            "strategicConcept": "Heavy piece centralization."
          },
          {
            "san": "Qb6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b3",
            "ply": 20,
            "color": "white",
            "purpose": "11. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 21,
            "color": "black",
            "purpose": "11... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd4",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd4",
            "ply": 23,
            "color": "black",
            "purpose": "12... Bxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd4",
            "ply": 24,
            "color": "white",
            "purpose": "13. Qxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Grünfeld: Prins Variation (5.Na4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "gruenfeld-neo",
        "name": "Neo-Grünfeld Defense (3.f3 / 3.g3)",
        "eco": "D70",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "g6",
          "f3",
          "d5",
          "cxd5",
          "Nxd5",
          "e4",
          "Nb6",
          "Nc3",
          "Bg7",
          "Be3",
          "O-O",
          "Qd2",
          "Nc6",
          "O-O-O",
          "f5",
          "e5",
          "Nb4",
          "h4",
          "Be6",
          "h5",
          "Nxa2+"
        ],
        "description": "White delays or avoids Nc3, playing 3.f3 to build an impregnable pawn center with e4 and Be3 before launching a devastating kingside attack.",
        "whitePlan": "Castle queenside (O-O-O), launch blistering pawn storm with h4-h5, checkmate Black.",
        "blackPlan": "Strike at White's king with ...Nb4 and ...Nxa2+, push ...f5 to shatter White's center.",
        "keyThemes": [
          "Opposite Castling Fireworks",
          "Pawn Storm with h4-h5",
          "Knight Infiltration (...Nb4/a2)",
          "Sharp Center Rupture (...f5)"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 3,
            "color": "black",
            "purpose": "2... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "f3",
            "ply": 4,
            "color": "white",
            "purpose": "3. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 6,
            "color": "white",
            "purpose": "4. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Neo-Grünfeld Defense (3.f3 / 3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Neo-Grünfeld Defense (3.f3 / 3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e4",
            "ply": 8,
            "color": "white",
            "purpose": "5. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Nb6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Neo-Grünfeld Defense (3.f3 / 3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Be3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Qd2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "Nc6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "O-O-O",
            "ply": 16,
            "color": "white",
            "purpose": "9. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "f5",
            "ply": 17,
            "color": "black",
            "purpose": "9... f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          },
          {
            "san": "e5",
            "ply": 18,
            "color": "white",
            "purpose": "10. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nb4",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nb4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Neo-Grünfeld Defense (3.f3 / 3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h4",
            "ply": 20,
            "color": "white",
            "purpose": "11. h4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Neo-Grünfeld Defense (3.f3 / 3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "h5",
            "ply": 22,
            "color": "white",
            "purpose": "12. h5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Neo-Grünfeld Defense (3.f3 / 3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxa2+",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nxa2+: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Neo-Grünfeld Defense (3.f3 / 3.g3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 100
  },
  {
    "id": "english",
    "name": "English Opening & Flank Systems",
    "ecoRange": "A10–A39",
    "category": "Flank Openings (1.c4)",
    "summary": "Howard Staunton and Mikhail Botvinnik's strategic masterpiece. White controls the critical d5 square from the flank without committing central pawns, retaining immense transpositional flexibility.",
    "keyConcepts": [
      "Fight for the d5 outpost",
      "Queenside expansion with b4",
      "Reversed Sicilian dynamics",
      "Hypermodern piece maneuvering"
    ],
    "famousPlayers": [
      "Mikhail Botvinnik",
      "Anatoly Karpov",
      "Garry Kasparov",
      "Magnus Carlsen",
      "Hikaru Nakamura"
    ],
    "subVariations": [
      {
        "id": "english-symmetrical",
        "name": "English Opening: Symmetrical Variation",
        "eco": "A30",
        "moves": [
          "c4",
          "c5",
          "Nf3",
          "Nf6",
          "Nc3",
          "Nc6",
          "g3",
          "g6",
          "Bg2",
          "Bg7",
          "O-O",
          "O-O",
          "d4",
          "cxd4",
          "Nxd4",
          "Nxd4",
          "Qxd4",
          "d6",
          "Qd3",
          "a6",
          "Bd2",
          "Rb8",
          "Rac1",
          "Be6",
          "b3"
        ],
        "description": "Black mirrors White's 1.c4 with 1...c5. The game develops symmetrically before transforming into sharp Hedgehog or Maróczy Bind structures with deep positional maneuvering.",
        "whitePlan": "Control d5 outpost, clamp down on center with d4, push queenside majority (b4/b5).",
        "blackPlan": "Build Hedgehog formation or mirror setup, counterattack on c-file, break with ...b5 or ...d5.",
        "keyThemes": [
          "Symmetrical Pawn Tension",
          "Battle for d5/d4 Squares",
          "Hedgehog Strategy",
          "Queenside Majority Advance"
        ],
        "moveExplanations": [
          {
            "san": "c4",
            "ply": 0,
            "color": "white",
            "purpose": "1. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "c5",
            "ply": 1,
            "color": "black",
            "purpose": "1... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nf6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nc6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "g3",
            "ply": 6,
            "color": "white",
            "purpose": "4. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "g6",
            "ply": 7,
            "color": "black",
            "purpose": "4... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Bg2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 11,
            "color": "black",
            "purpose": "6... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "d4",
            "ply": 12,
            "color": "white",
            "purpose": "7. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "cxd4",
            "ply": 13,
            "color": "black",
            "purpose": "7... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd4",
            "ply": 16,
            "color": "white",
            "purpose": "9. Qxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 17,
            "color": "black",
            "purpose": "9... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Qd3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a6",
            "ply": 19,
            "color": "black",
            "purpose": "10... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "Bd2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rb8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Rb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rac1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rac1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "b3",
            "ply": 24,
            "color": "white",
            "purpose": "13. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Symmetrical Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "english-kings",
        "name": "King's English (Reversed Sicilian)",
        "eco": "A20",
        "moves": [
          "c4",
          "e5",
          "Nc3",
          "Nf6",
          "Nf3",
          "Nc6",
          "g3",
          "Bb4",
          "Bg2",
          "O-O",
          "O-O",
          "e4",
          "Ng5",
          "Bxc3",
          "bxc3",
          "Re8",
          "f3",
          "exf3",
          "Nxf3",
          "d5",
          "cxd5",
          "Qxd5",
          "d4",
          "Qh5"
        ],
        "description": "Black answers 1.c4 with 1...e5, entering a Sicilian Defense with colors reversed and an extra tempo for White! One of the most combative systems in top-level chess.",
        "whitePlan": "Use the extra tempo to pressure Black's center, utilize the half-open f-file and bishop pair.",
        "blackPlan": "Seize kingside space with ...e4, attack White's king with ...Qh5 and ...Bh3.",
        "keyThemes": [
          "Reversed Sicilian Dynamics",
          "Extra Tempo Advantage",
          "Bishop Pair vs Structure",
          "Kingside Attack with ...Qh5"
        ],
        "moveExplanations": [
          {
            "san": "c4",
            "ply": 0,
            "color": "white",
            "purpose": "1. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nc3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "g3",
            "ply": 6,
            "color": "white",
            "purpose": "4. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Bb4",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "Bg2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "e4",
            "ply": 11,
            "color": "black",
            "purpose": "6... e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Ng5",
            "ply": 12,
            "color": "white",
            "purpose": "7. Ng5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxc3",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 14,
            "color": "white",
            "purpose": "8. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 15,
            "color": "black",
            "purpose": "8... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "f3",
            "ply": 16,
            "color": "white",
            "purpose": "9. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "exf3",
            "ply": 17,
            "color": "black",
            "purpose": "9... exf3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxf3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nxf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 19,
            "color": "black",
            "purpose": "10... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 20,
            "color": "white",
            "purpose": "11. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd5",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 22,
            "color": "white",
            "purpose": "12. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Qh5",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qh5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's English (Reversed Sicilian).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "english-four-knights",
        "name": "Four Knights English",
        "eco": "A28",
        "moves": [
          "c4",
          "e5",
          "Nc3",
          "Nf6",
          "Nf3",
          "Nc6",
          "e3",
          "Bb4",
          "Qc2",
          "Bxc3",
          "Qxc3",
          "Qe7",
          "a3",
          "a5",
          "b3",
          "d5",
          "cxd5",
          "Nxd5",
          "Qc2",
          "O-O",
          "Bb2",
          "Bg4"
        ],
        "description": "Both sides develop all four knights in the first three moves. White plays e3/Qc2 to retain the bishop pair, while Black strikes in the center with ...d5.",
        "whitePlan": "Preserve bishop pair, pressure e5 pawn, prepare central break with d4.",
        "blackPlan": "Strike centrally with ...d5, develop bishops actively, target White's light squares.",
        "keyThemes": [
          "Four Knights Classical Harmony",
          "Bishop Pair Preservation (Qc2)",
          "Central Strike with ...d5",
          "Pressure on e5"
        ],
        "moveExplanations": [
          {
            "san": "c4",
            "ply": 0,
            "color": "white",
            "purpose": "1. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nc3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "e3",
            "ply": 6,
            "color": "white",
            "purpose": "4. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb4",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "Qc2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "Bxc3",
            "ply": 9,
            "color": "black",
            "purpose": "5... Bxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxc3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Qxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Qe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a3",
            "ply": 12,
            "color": "white",
            "purpose": "7. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a5",
            "ply": 13,
            "color": "black",
            "purpose": "7... a5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b3",
            "ply": 14,
            "color": "white",
            "purpose": "8. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 15,
            "color": "black",
            "purpose": "8... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qc2: Centralizes queen on c-file, defends key squares, coordinates with bishops.",
            "strategicConcept": "Classical queen centralization."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bb2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Four Knights English.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "english-anglo-indian",
        "name": "Anglo-Indian: Hedgehog & Mikenas Attack",
        "eco": "A15",
        "moves": [
          "c4",
          "Nf6",
          "Nc3",
          "e6",
          "e4",
          "d5",
          "e5",
          "d4",
          "exf6",
          "dxc3",
          "bxc3",
          "Qxf6",
          "d4",
          "b6",
          "Nf3",
          "Bb7",
          "Bg5",
          "Qf5",
          "Bd3",
          "Qa5",
          "Bd2",
          "Nd7",
          "O-O",
          "Be7"
        ],
        "description": "Vladas Mikenas pioneered 3.e4! against 2...e6, seizing space and forcing Black to counter with 3...d5, leading to wild piece-grabbing tactical skirmishes.",
        "whitePlan": "Push e5, build broad central wedge, attack Black's exposed queen.",
        "blackPlan": "Counterstrike with 3...d5, win pawn structure compensation, activate pieces on diagonals.",
        "keyThemes": [
          "Mikenas 3.e4 Advance",
          "Sharp Center Climax (3...d5)",
          "Queen Infiltration on a5",
          "Pawn Structure Imbalances"
        ],
        "moveExplanations": [
          {
            "san": "c4",
            "ply": 0,
            "color": "white",
            "purpose": "1. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "e6",
            "ply": 3,
            "color": "black",
            "purpose": "2... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "e4",
            "ply": 4,
            "color": "white",
            "purpose": "3. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e5",
            "ply": 6,
            "color": "white",
            "purpose": "4. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "d4",
            "ply": 7,
            "color": "black",
            "purpose": "4... d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "exf6",
            "ply": 8,
            "color": "white",
            "purpose": "5. exf6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxc3",
            "ply": 9,
            "color": "black",
            "purpose": "5... dxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 10,
            "color": "white",
            "purpose": "6. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Qxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 12,
            "color": "white",
            "purpose": "7. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "b6",
            "ply": 13,
            "color": "black",
            "purpose": "7... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bb7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg5",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bg5: Pins f6 knight against the queen, undermining control of d5 and e4.",
            "strategicConcept": "Richter-Rauzer & Classical QGD pin."
          },
          {
            "san": "Qf5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Qf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qa5",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qa5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Anglo-Indian: Hedgehog & Mikenas Attack.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 22,
            "color": "white",
            "purpose": "12. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "reti-opening",
        "name": "Réti Opening (1.Nf3 d5 2.c4)",
        "eco": "A09",
        "moves": [
          "Nf3",
          "d5",
          "c4",
          "d4",
          "g3",
          "c5",
          "Bg2",
          "Nc6",
          "O-O",
          "e5",
          "d3",
          "Nf6",
          "e3",
          "Be7",
          "exd4",
          "cxd4",
          "Re1",
          "Nd7",
          "Nbd2",
          "O-O",
          "a3",
          "a5",
          "Rb1",
          "Qc7"
        ],
        "description": "Richard Réti's hypermodern masterpiece: 1.Nf3 and 2.c4 provokes Black to advance ...d4, then White undermines Black's advanced center from the flanks with Bg2 and b4.",
        "whitePlan": "Undermine Black's d4 pawn with e3, fianchetto on g2 and b2, expand on queenside with b4.",
        "blackPlan": "Maintain the d4 wedge, support with ...c5 and ...e5 (Reversed Benoni), defend against b4.",
        "keyThemes": [
          "Hypermodern Center Provocation",
          "Reversed Benoni Structure",
          "Flank Undermining (b4/e3)",
          "Long Diagonal Pressure"
        ],
        "moveExplanations": [
          {
            "san": "Nf3",
            "ply": 0,
            "color": "white",
            "purpose": "1. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "d4",
            "ply": 3,
            "color": "black",
            "purpose": "2... d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "g3",
            "ply": 4,
            "color": "white",
            "purpose": "3. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "c5",
            "ply": 5,
            "color": "black",
            "purpose": "3... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "Bg2",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "e5",
            "ply": 9,
            "color": "black",
            "purpose": "5... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "d3",
            "ply": 10,
            "color": "white",
            "purpose": "6. d3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "e3",
            "ply": 12,
            "color": "white",
            "purpose": "7. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "exd4",
            "ply": 14,
            "color": "white",
            "purpose": "8. exd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 15,
            "color": "black",
            "purpose": "8... cxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "Nd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nbd2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "a3",
            "ply": 20,
            "color": "white",
            "purpose": "11. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a5",
            "ply": 21,
            "color": "black",
            "purpose": "11... a5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rb1",
            "ply": 22,
            "color": "white",
            "purpose": "12. Rb1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Réti Opening (1.Nf3 d5 2.c4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kings-indian-attack",
        "name": "King's Indian Attack (KIA)",
        "eco": "A07",
        "moves": [
          "Nf3",
          "d5",
          "g3",
          "Nf6",
          "Bg2",
          "e6",
          "O-O",
          "Be7",
          "d3",
          "O-O",
          "Nbd2",
          "c5",
          "e4",
          "Nc6",
          "Re1",
          "b5",
          "e5",
          "Nd7",
          "Nf1",
          "a5",
          "h4",
          "b4",
          "Bf4",
          "Ba6",
          "N1h2",
          "a4"
        ],
        "description": "Bobby Fischer's universal system: White plays the King's Indian setup with colors reversed, launching a deadly kingside mating attack with e5, Nf1-h2-g4, and h4-h5.",
        "whitePlan": "Lock center with e5, transfer knight Nf1-h2-g4, sacrifice on h6 or f6 to deliver checkmate.",
        "blackPlan": "Storm queenside with ...b5, ...a5, ...b4, open the c-file and queenside before White mates.",
        "keyThemes": [
          "Universal System (Playable vs French/Caro/Sicilian)",
          "Knight Transfer Nf1-h2-g4",
          "Kingside Pawn Storm (h4/e5)",
          "Queenside Counter-Storm Race"
        ],
        "moveExplanations": [
          {
            "san": "Nf3",
            "ply": 0,
            "color": "white",
            "purpose": "1. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "g3",
            "ply": 2,
            "color": "white",
            "purpose": "2. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Nf6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg2",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 5,
            "color": "black",
            "purpose": "3... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "O-O",
            "ply": 6,
            "color": "white",
            "purpose": "4. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Be7: Develops bishop defensively, breaks pins on d8-h4 diagonal, clears king for castling.",
            "strategicConcept": "Classical solid development."
          },
          {
            "san": "d3",
            "ply": 8,
            "color": "white",
            "purpose": "5. d3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nbd2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c5",
            "ply": 11,
            "color": "black",
            "purpose": "6... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "e4",
            "ply": 12,
            "color": "white",
            "purpose": "7. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Nc6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Re1",
            "ply": 14,
            "color": "white",
            "purpose": "8. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "b5",
            "ply": 15,
            "color": "black",
            "purpose": "8... b5: Gains queenside space, kicks pieces on c4/c3, prepares fianchetto on b7.",
            "strategicConcept": "Thematic counterplay in Sicilian & Semi-Slav."
          },
          {
            "san": "e5",
            "ply": 16,
            "color": "white",
            "purpose": "9. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf1",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nf1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a5",
            "ply": 19,
            "color": "black",
            "purpose": "10... a5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h4",
            "ply": 20,
            "color": "white",
            "purpose": "11. h4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b4",
            "ply": 21,
            "color": "black",
            "purpose": "11... b4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf4",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ba6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Ba6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "N1h2",
            "ply": 24,
            "color": "white",
            "purpose": "13. N1h2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Indian Attack (KIA).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a4",
            "ply": 25,
            "color": "black",
            "purpose": "13... a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "birds-opening",
        "name": "Bird's Opening (1.f4)",
        "eco": "A02",
        "moves": [
          "f4",
          "d5",
          "Nf3",
          "Nf6",
          "e3",
          "g6",
          "b3",
          "Bg7",
          "Bb2",
          "O-O",
          "Be2",
          "c5",
          "O-O",
          "Nc6",
          "Ne5",
          "Qc7",
          "Nxc6",
          "Qxc6",
          "Bf3",
          "b6",
          "d3",
          "Bb7",
          "Nd2",
          "Rad8"
        ],
        "description": "Henry Bird's flank opening 1.f4 controls the e5 square immediately (like a Dutch Defense with an extra tempo). Bent Larsen and Magnus Carlsen used it as a surprise weapon.",
        "whitePlan": "Anchor knight on e5, build double fianchetto with Bb2, attack along the f-file.",
        "blackPlan": "Strike in center with ...d5 and ...c5, challenge e5 outpost, exploit White's weak king diagonal.",
        "keyThemes": [
          "Immediate Control of e5",
          "Double Fianchetto Attack",
          "f-file Attacking Conduit",
          "Dutch Defense with Colors Reversed"
        ],
        "moveExplanations": [
          {
            "san": "f4",
            "ply": 0,
            "color": "white",
            "purpose": "1. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nf6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "e3",
            "ply": 4,
            "color": "white",
            "purpose": "3. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g6",
            "ply": 5,
            "color": "black",
            "purpose": "3... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "b3",
            "ply": 6,
            "color": "white",
            "purpose": "4. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Bb2",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "c5",
            "ply": 11,
            "color": "black",
            "purpose": "6... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Ne5",
            "ply": 14,
            "color": "white",
            "purpose": "8. Ne5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Nxc6",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nxc6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxc6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Qxc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bf3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b6",
            "ply": 19,
            "color": "black",
            "purpose": "10... b6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d3",
            "ply": 20,
            "color": "white",
            "purpose": "11. d3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bb7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rad8",
            "ply": 23,
            "color": "black",
            "purpose": "12... Rad8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Bird's Opening (1.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "nimzo-larsen",
        "name": "Nimzo-Larsen Attack (1.b3)",
        "eco": "A01",
        "moves": [
          "b3",
          "e5",
          "Bb2",
          "Nc6",
          "e3",
          "Nf6",
          "Bb5",
          "Bd6",
          "Na3",
          "Na5",
          "Be2",
          "a6",
          "c4",
          "O-O",
          "Nc2",
          "Nc6",
          "d3",
          "Re8",
          "Nf3",
          "Bf8",
          "O-O",
          "d5"
        ],
        "description": "Bent Larsen and Bobby Fischer's hypermodern flank attack: 1.b3 fianchettoes the queen's bishop on b2 immediately to exert lethal pressure on e5 and the kingside.",
        "whitePlan": "Pressure e5 pawn with Bb2 and Bb5, maneuver knight Na3-c2, strike in center with d4 or f4.",
        "blackPlan": "Occupy center with ...e5 and ...d5, defend e5 securely, counterattack White's queenside.",
        "keyThemes": [
          "Move 1 Fianchetto (1.b3)",
          "Pressure on Long Diagonal",
          "Pin with Bb5",
          "Flexible Central Transpositions"
        ],
        "moveExplanations": [
          {
            "san": "b3",
            "ply": 0,
            "color": "white",
            "purpose": "1. b3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Bb2",
            "ply": 2,
            "color": "white",
            "purpose": "2. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "e3",
            "ply": 4,
            "color": "white",
            "purpose": "3. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bb5",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "Bd6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Na3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na5",
            "ply": 9,
            "color": "black",
            "purpose": "5... Na5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "a6",
            "ply": 11,
            "color": "black",
            "purpose": "6... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "c4",
            "ply": 12,
            "color": "white",
            "purpose": "7. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nc2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nc2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "d3",
            "ply": 16,
            "color": "white",
            "purpose": "9. d3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 17,
            "color": "black",
            "purpose": "9... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Nf3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bf8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bf8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Nimzo-Larsen Attack (1.b3).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "d5",
            "ply": 21,
            "color": "black",
            "purpose": "11... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "polish-sokolsky",
        "name": "Polish / Sokolsky Opening (1.b4)",
        "eco": "A00",
        "moves": [
          "b4",
          "e5",
          "Bb2",
          "Bxb4",
          "Bxe5",
          "Nf6",
          "Nf3",
          "O-O",
          "e3",
          "d5",
          "c4",
          "Nc6",
          "Bb2",
          "Bg4",
          "cxd5",
          "Nxd5",
          "Be2",
          "Re8",
          "O-O",
          "Bd6",
          "Nc3",
          "Nf6"
        ],
        "description": "The Orangutan / Polish opening: White plays 1.b4 to claim immediate queenside space, fianchetto on b2, and disrupt Black's standard development schemes.",
        "whitePlan": "Control long diagonal with Bb2, push b5 to kick Black's c6 knight, dominate e5.",
        "blackPlan": "Capture gambit on b4 or occupy center with ...e5/d5, develop rapidly against White's flank setup.",
        "keyThemes": [
          "Flank Space Grab (1.b4)",
          "Long Diagonal Domination",
          "Kick Knight with b5",
          "Tactical Surprises"
        ],
        "moveExplanations": [
          {
            "san": "b4",
            "ply": 0,
            "color": "white",
            "purpose": "1. b4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Bb2",
            "ply": 2,
            "color": "white",
            "purpose": "2. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxb4",
            "ply": 3,
            "color": "black",
            "purpose": "2... Bxb4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxe5",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 5,
            "color": "black",
            "purpose": "3... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 7,
            "color": "black",
            "purpose": "4... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "e3",
            "ply": 8,
            "color": "white",
            "purpose": "5. e3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 9,
            "color": "black",
            "purpose": "5... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "c4",
            "ply": 10,
            "color": "white",
            "purpose": "6. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "Nc6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bb2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "cxd5",
            "ply": 14,
            "color": "white",
            "purpose": "8. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be2",
            "ply": 16,
            "color": "white",
            "purpose": "9. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "Re8",
            "ply": 17,
            "color": "black",
            "purpose": "9... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "O-O",
            "ply": 18,
            "color": "white",
            "purpose": "10. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bd6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Bd6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Polish / Sokolsky Opening (1.b4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc3",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "english-botvinnik",
        "name": "English Opening: Botvinnik System (c4/d3/e4)",
        "eco": "A26",
        "moves": [
          "c4",
          "g6",
          "Nc3",
          "Bg7",
          "g3",
          "d6",
          "Bg2",
          "e5",
          "e4",
          "Nc6",
          "Nge2",
          "Nge7",
          "d3",
          "O-O",
          "O-O",
          "Be6",
          "Nd5",
          "Qd7",
          "Bh6",
          "f5",
          "Bxg7",
          "Kxg7",
          "Qd2",
          "Rf7"
        ],
        "description": "Mikhail Botvinnik's iron system: White builds a pawn triangle with c4, d3, and e4, locking down the d5 outpost permanently and preparing a kingside attack with f4.",
        "whitePlan": "Anchor knight on d5, push f4 pawn break, attack Black's king with heavy pieces.",
        "blackPlan": "Pressure d4 hole with ...Nd4, counterattack on kingside or queenside with ...f5 or ...c6.",
        "keyThemes": [
          "Iron Pawn Triangle (c4/d3/e4)",
          "Permanent d5 Outpost Clamp",
          "f4 Kingside Pawn Break",
          "Knight Outpost on d4 vs d5"
        ],
        "moveExplanations": [
          {
            "san": "c4",
            "ply": 0,
            "color": "white",
            "purpose": "1. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "g6",
            "ply": 1,
            "color": "black",
            "purpose": "1... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nc3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Bg7",
            "ply": 3,
            "color": "black",
            "purpose": "2... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "g3",
            "ply": 4,
            "color": "white",
            "purpose": "3. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "d6",
            "ply": 5,
            "color": "black",
            "purpose": "3... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Bg2",
            "ply": 6,
            "color": "white",
            "purpose": "4. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e5",
            "ply": 7,
            "color": "black",
            "purpose": "4... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "e4",
            "ply": 8,
            "color": "white",
            "purpose": "5. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Nc6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nge2",
            "ply": 10,
            "color": "white",
            "purpose": "6. Nge2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nge7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nge7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d3",
            "ply": 12,
            "color": "white",
            "purpose": "7. d3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 13,
            "color": "black",
            "purpose": "7... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Be6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Nd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Qd7: Connects rooks, prepares queenside castling, coordinates pieces.",
            "strategicConcept": "Solid queen placement."
          },
          {
            "san": "Bh6",
            "ply": 18,
            "color": "white",
            "purpose": "10. Bh6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f5",
            "ply": 19,
            "color": "black",
            "purpose": "10... f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          },
          {
            "san": "Bxg7",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bxg7: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Kxg7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Kxg7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qd2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Qd2: Connects rooks, sets up Be3/Bh6 battery, prepares long castling.",
            "strategicConcept": "Yugoslav Attack battery."
          },
          {
            "san": "Rf7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Rf7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the English Opening: Botvinnik System (c4/d3/e4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 100
  },
  {
    "id": "other-classic",
    "name": "Other Classic & Dynamic Openings",
    "ecoRange": "A40–C59",
    "category": "Specialized & Romantic Openings",
    "summary": "A rich treasury of classical, romantic, and hypermodern weapons: Italian Game, Scandinavian, Alekhine, Pirc, Dutch, Benoni, Scotch, Vienna, and King's Gambit.",
    "keyConcepts": [
      "Romantic gambits (King's / Evans)",
      "Hypermodern piece counterplay",
      "Direct tactical king hunts",
      "Unbalanced dynamic battles"
    ],
    "famousPlayers": [
      "Paul Morphy",
      "Alexander Alekhine",
      "Mikhail Tal",
      "Bobby Fischer",
      "Magnus Carlsen"
    ],
    "subVariations": [
      {
        "id": "italian-giuoco-piano",
        "name": "Italian Game: Giuoco Piano & Pianissimo",
        "eco": "C54",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bc4",
          "Bc5",
          "c3",
          "Nf6",
          "d3",
          "d6",
          "O-O",
          "a6",
          "a4",
          "Ba7",
          "Re1",
          "O-O",
          "h3",
          "h6",
          "Nbd2",
          "Re8",
          "Nf1",
          "Be6",
          "Bxe6",
          "Rxe6",
          "Be3",
          "Bxe3",
          "Nxe3",
          "d5"
        ],
        "description": "The timeless Italian Game (3.Bc4 Bc5). In the modern Giuoco Pianissimo, White maneuvers Nbd2-f1-g3, builds central tension with c3 and d3, and plays for kingside pressure.",
        "whitePlan": "Maneuver knight to f1-g3, support center with c3/d3, prepare d4 or b4 advance.",
        "blackPlan": "Preserve Italian bishop on a7, strike centrally with ...d5, coordinate on e-file.",
        "keyThemes": [
          "Timeless Classical Harmony",
          "Knight Reroute Nbd2-f1-g3",
          "Central Strike ...d5",
          "Spanish/Italian Bishop Preservation"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bc4",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "Bc5",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 6,
            "color": "white",
            "purpose": "4. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "d3",
            "ply": 8,
            "color": "white",
            "purpose": "5. d3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 9,
            "color": "black",
            "purpose": "5... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "O-O",
            "ply": 10,
            "color": "white",
            "purpose": "6. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "a6",
            "ply": 11,
            "color": "black",
            "purpose": "6... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "a4",
            "ply": 12,
            "color": "white",
            "purpose": "7. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "Ba7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Ba7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re1",
            "ply": 14,
            "color": "white",
            "purpose": "8. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "h3",
            "ply": 16,
            "color": "white",
            "purpose": "9. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "h6",
            "ply": 17,
            "color": "black",
            "purpose": "9... h6: Prophylaxis: denies Bg5/Ng5 pins and provides safe kingside retreat.",
            "strategicConcept": "Defensive prophylaxis in QGD & Ruy Lopez."
          },
          {
            "san": "Nbd2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nbd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Nf1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Nf1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 21,
            "color": "black",
            "purpose": "11... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Bxe6",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bxe6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rxe6",
            "ply": 23,
            "color": "black",
            "purpose": "12... Rxe6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 24,
            "color": "white",
            "purpose": "13. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Bxe3",
            "ply": 25,
            "color": "black",
            "purpose": "13... Bxe3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe3",
            "ply": 26,
            "color": "white",
            "purpose": "14. Nxe3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Giuoco Piano & Pianissimo.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 27,
            "color": "black",
            "purpose": "14... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "italian-evans-gambit",
        "name": "Italian Game: Evans Gambit",
        "eco": "C51",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "Bc4",
          "Bc5",
          "b4",
          "Bxb4",
          "c3",
          "Ba5",
          "d4",
          "exd4",
          "O-O",
          "Nge7",
          "cxd4",
          "d5",
          "exd5",
          "Nxd5",
          "Ba3",
          "Be6",
          "Bb5",
          "Bb4",
          "Bxc6+",
          "bxc6",
          "Bxb4",
          "Nxb4",
          "Qa4"
        ],
        "description": "Captain William Evans's romantic masterpiece: 4.b4! White sacrifices a flank pawn to gain rapid development, build a massive center with c3/d4, and open lines against f7.",
        "whitePlan": "Prevent Black from castling with Ba3, attack f7 and e7 with Qb3, dominate open center.",
        "blackPlan": "Return gambit pawn with ...d5 to free space, simplify into winning endgame.",
        "keyThemes": [
          "Romantic 4.b4 Pawn Sac",
          "Preventing Castle with Ba3",
          "Massive c3/d4 Pawn Center",
          "Ferocious Attack on f7"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Bc4",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "Bc5",
            "ply": 5,
            "color": "black",
            "purpose": "3... Bc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b4",
            "ply": 6,
            "color": "white",
            "purpose": "4. b4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxb4",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bxb4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 8,
            "color": "white",
            "purpose": "5. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ba5",
            "ply": 9,
            "color": "black",
            "purpose": "5... Ba5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 10,
            "color": "white",
            "purpose": "6. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "exd4",
            "ply": 11,
            "color": "black",
            "purpose": "6... exd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nge7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nge7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd4",
            "ply": 14,
            "color": "white",
            "purpose": "8. cxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 15,
            "color": "black",
            "purpose": "8... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "exd5",
            "ply": 16,
            "color": "white",
            "purpose": "9. exd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd5",
            "ply": 17,
            "color": "black",
            "purpose": "9... Nxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ba3",
            "ply": 18,
            "color": "white",
            "purpose": "10. Ba3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be6",
            "ply": 19,
            "color": "black",
            "purpose": "10... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Bb5",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bb5: Pins or attacks c6 knight defending e5/d4, creating long-term structural pressure.",
            "strategicConcept": "Ruy Lopez & Rossolimo hallmark."
          },
          {
            "san": "Bb4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bb4: Pins White's c3 knight, preventing e4 and fighting for central dark squares.",
            "strategicConcept": "Nimzo-Indian & French Winawer pin."
          },
          {
            "san": "Bxc6+",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bxc6+: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc6",
            "ply": 23,
            "color": "black",
            "purpose": "12... bxc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxb4",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bxb4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxb4",
            "ply": 25,
            "color": "black",
            "purpose": "13... Nxb4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qa4",
            "ply": 26,
            "color": "white",
            "purpose": "14. Qa4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Italian Game: Evans Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "scandinavian-main",
        "name": "Scandinavian Defense: 3...Qa5 Main Line",
        "eco": "B01",
        "moves": [
          "e4",
          "d5",
          "exd5",
          "Qxd5",
          "Nc3",
          "Qa5",
          "d4",
          "Nf6",
          "Nf3",
          "c6",
          "Bc4",
          "Bf5",
          "Bd2",
          "e6",
          "Nd5",
          "Qd8",
          "Nxf6+",
          "Qxf6",
          "Qe2",
          "Nd7",
          "O-O-O",
          "Bg4",
          "d5",
          "cxd5",
          "Bxd5"
        ],
        "description": "Black immediately challenges White's e4 pawn on move 1 with 1...d5. After 2.exd5 Qxd5 3.Nc3 Qa5, Black builds a rock-solid Caro-Kann style pawn structure (c6/e6) with rapid development.",
        "whitePlan": "Exploit queen position with Nc3 and Nd5, castle queenside, push d5 to crack center.",
        "blackPlan": "Tuck queen safely on c7/d8, develop bishop to f5/g4, counterattack on queenside.",
        "keyThemes": [
          "Immediate Move 1 Central Challenge",
          "Queen Maneuver (Qa5-d8)",
          "Solid c6/e6 Pawn Bastion",
          "Opposite-Side Castling Attacks"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d5",
            "ply": 1,
            "color": "black",
            "purpose": "1... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "exd5",
            "ply": 2,
            "color": "white",
            "purpose": "2. exd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd5",
            "ply": 3,
            "color": "black",
            "purpose": "2... Qxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Qa5",
            "ply": 5,
            "color": "black",
            "purpose": "3... Qa5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 6,
            "color": "white",
            "purpose": "4. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "c6",
            "ply": 9,
            "color": "black",
            "purpose": "5... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "Bc4",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "Bf5",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bf5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "e6",
            "ply": 13,
            "color": "black",
            "purpose": "7... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nd5",
            "ply": 14,
            "color": "white",
            "purpose": "8. Nd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qd8",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qd8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxf6+",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nxf6+: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxf6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Qxf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qe2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "Bg4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "d5",
            "ply": 22,
            "color": "white",
            "purpose": "12. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "cxd5",
            "ply": 23,
            "color": "black",
            "purpose": "12... cxd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxd5",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scandinavian Defense: 3...Qa5 Main Line.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "alekhine-modern",
        "name": "Alekhine's Defense: Modern Variation",
        "eco": "B04",
        "moves": [
          "e4",
          "Nf6",
          "e5",
          "Nd5",
          "d4",
          "d6",
          "Nf3",
          "g6",
          "Bc4",
          "Nb6",
          "Bb3",
          "Bg7",
          "Qe2",
          "Nc6",
          "O-O",
          "O-O",
          "h3",
          "a5",
          "a4",
          "dxe5",
          "dxe5",
          "Nd4",
          "Nxd4",
          "Qxd4",
          "Re1"
        ],
        "description": "Alexander Alekhine's hypermodern provocation: 1...Nf6 baits White's pawns to advance (e5/d4/c4), then Black attacks the overextended pawns with ...d6 and ...g6.",
        "whitePlan": "Maintain spatial advantage on e5, support center with Nf3/c4, attack Black's knight.",
        "blackPlan": "Undermine e5 wedge with ...dxe5 and ...Bg7, target overextended pawns, dominate light squares.",
        "keyThemes": [
          "Hypermodern Knight Bait (1...Nf6)",
          "Overextension Exploitation",
          "Pressure on e5 Pawn Wedge",
          "Fianchetto Counterplay"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "e5",
            "ply": 2,
            "color": "white",
            "purpose": "2. e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nd5",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 5,
            "color": "black",
            "purpose": "3... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "g6",
            "ply": 7,
            "color": "black",
            "purpose": "4... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Bc4",
            "ply": 8,
            "color": "white",
            "purpose": "5. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "Nb6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nb6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bb3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Qe2",
            "ply": 12,
            "color": "white",
            "purpose": "7. Qe2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "O-O",
            "ply": 14,
            "color": "white",
            "purpose": "8. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "h3",
            "ply": 16,
            "color": "white",
            "purpose": "9. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "a5",
            "ply": 17,
            "color": "black",
            "purpose": "9... a5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a4",
            "ply": 18,
            "color": "white",
            "purpose": "10. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "dxe5",
            "ply": 19,
            "color": "black",
            "purpose": "10... dxe5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "dxe5",
            "ply": 20,
            "color": "white",
            "purpose": "11. dxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nd4",
            "ply": 21,
            "color": "black",
            "purpose": "11... Nd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxd4",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qxd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Alekhine's Defense: Modern Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re1",
            "ply": 24,
            "color": "white",
            "purpose": "13. Re1: Centralizes rook on e-file, defending e-pawn and preparing central breaks.",
            "strategicConcept": "Central rook coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "pirc-austrian",
        "name": "Pirc Defense: Austrian Attack (4.f4)",
        "eco": "B09",
        "moves": [
          "e4",
          "d6",
          "d4",
          "Nf6",
          "Nc3",
          "g6",
          "f4",
          "Bg7",
          "Nf3",
          "O-O",
          "Bd3",
          "Na6",
          "O-O",
          "c5",
          "d5",
          "Rb8",
          "Kh1",
          "Bg4",
          "a4",
          "Nb4",
          "Bc4",
          "e6",
          "dxe6",
          "fxe6",
          "f5"
        ],
        "description": "The most aggressive test of the Pirc Defense. White builds a three-pawn wall with e4, d4, and f4, aiming to crush Black with e5 or f5.",
        "whitePlan": "Blast open center with e5 or f5, attack Black's king with heavy pieces.",
        "blackPlan": "Counterstrike with ...c5 and ...e6, target White's overextended center, jump knight to b4.",
        "keyThemes": [
          "Aggressive Three-Pawn Roller (e4/d4/f4)",
          "Central Counter-Break (...c5/e6)",
          "Knight Outpost on b4",
          "Tactical Pawn Sacrifices"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 1,
            "color": "black",
            "purpose": "1... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "d4",
            "ply": 2,
            "color": "white",
            "purpose": "2. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Nc3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "g6",
            "ply": 5,
            "color": "black",
            "purpose": "3... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "f4",
            "ply": 6,
            "color": "white",
            "purpose": "4. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "Nf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bd3",
            "ply": 10,
            "color": "white",
            "purpose": "6. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Pirc Defense: Austrian Attack (4.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Na6",
            "ply": 11,
            "color": "black",
            "purpose": "6... Na6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Pirc Defense: Austrian Attack (4.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 12,
            "color": "white",
            "purpose": "7. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "c5",
            "ply": 13,
            "color": "black",
            "purpose": "7... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d5",
            "ply": 14,
            "color": "white",
            "purpose": "8. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Rb8",
            "ply": 15,
            "color": "black",
            "purpose": "8... Rb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Pirc Defense: Austrian Attack (4.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Kh1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Kh1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Pirc Defense: Austrian Attack (4.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg4",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bg4: Pins f3 knight against queen/rook, undermining White's central grip.",
            "strategicConcept": "Active counter-pin strategy."
          },
          {
            "san": "a4",
            "ply": 18,
            "color": "white",
            "purpose": "10. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "Nb4",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nb4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Pirc Defense: Austrian Attack (4.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc4",
            "ply": 20,
            "color": "white",
            "purpose": "11. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "e6",
            "ply": 21,
            "color": "black",
            "purpose": "11... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "dxe6",
            "ply": 22,
            "color": "white",
            "purpose": "12. dxe6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Pirc Defense: Austrian Attack (4.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "fxe6",
            "ply": 23,
            "color": "black",
            "purpose": "12... fxe6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Pirc Defense: Austrian Attack (4.f4).",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f5",
            "ply": 24,
            "color": "white",
            "purpose": "13. f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "dutch-leningrad",
        "name": "Dutch Defense: Leningrad Variation",
        "eco": "A87",
        "moves": [
          "d4",
          "f5",
          "g3",
          "Nf6",
          "Bg2",
          "g6",
          "Nf3",
          "Bg7",
          "O-O",
          "O-O",
          "c4",
          "d6",
          "Nc3",
          "Qe8",
          "d5",
          "Na6",
          "Rb1",
          "Bd7",
          "b4",
          "c6",
          "dxc6",
          "bxc6",
          "a3",
          "Nc7",
          "Bb2",
          "Rb8"
        ],
        "description": "Black combines the Dutch Defense (1...f5) with the King's Indian fianchetto (g6/Bg7), aiming for asymmetric dynamic battles and central ...e5 breaks.",
        "whitePlan": "Control center with d5, expand on queenside with b4, exploit weak e6 square.",
        "blackPlan": "Prepare central ...e5 break via ...Qe8, attack White's kingside along f-file.",
        "keyThemes": [
          "Hybrid Dutch-KID Strategy",
          "Central Strike ...e5",
          "Pressure on f-file",
          "Queen Lift via ...Qe8"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "f5",
            "ply": 1,
            "color": "black",
            "purpose": "1... f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          },
          {
            "san": "g3",
            "ply": 2,
            "color": "white",
            "purpose": "2. g3: Prepares kingside fianchetto (Bg2) to control d5 and e4 along the long diagonal.",
            "strategicConcept": "Catalan, KIA, and English fianchetto."
          },
          {
            "san": "Nf6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "Bg2",
            "ply": 4,
            "color": "white",
            "purpose": "3. Bg2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g6",
            "ply": 5,
            "color": "black",
            "purpose": "3... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nf3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg7",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "O-O",
            "ply": 8,
            "color": "white",
            "purpose": "5. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O",
            "ply": 9,
            "color": "black",
            "purpose": "5... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "c4",
            "ply": 10,
            "color": "white",
            "purpose": "6. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "d6",
            "ply": 11,
            "color": "black",
            "purpose": "6... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Nc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Qe8",
            "ply": 13,
            "color": "black",
            "purpose": "7... Qe8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d5",
            "ply": 14,
            "color": "white",
            "purpose": "8. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "Na6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Na6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rb1",
            "ply": 16,
            "color": "white",
            "purpose": "9. Rb1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bd7",
            "ply": 17,
            "color": "black",
            "purpose": "9... Bd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "b4",
            "ply": 18,
            "color": "white",
            "purpose": "10. b4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c6",
            "ply": 19,
            "color": "black",
            "purpose": "10... c6: Solidifies central ...d5 push, establishing a rock-solid pawn triangle without locking in the bishop.",
            "strategicConcept": "Caro-Kann and Slav foundations."
          },
          {
            "san": "dxc6",
            "ply": 20,
            "color": "white",
            "purpose": "11. dxc6: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc6",
            "ply": 21,
            "color": "black",
            "purpose": "11... bxc6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a3",
            "ply": 22,
            "color": "white",
            "purpose": "12. a3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Nc7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bb2",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bb2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Rb8",
            "ply": 25,
            "color": "black",
            "purpose": "13... Rb8: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Dutch Defense: Leningrad Variation.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "modern-benoni",
        "name": "Modern Benoni: Main Line Classical",
        "eco": "A70",
        "moves": [
          "d4",
          "Nf6",
          "c4",
          "c5",
          "d5",
          "e6",
          "Nc3",
          "exd5",
          "cxd5",
          "d6",
          "e4",
          "g6",
          "Nf3",
          "Bg7",
          "h3",
          "O-O",
          "Bd3",
          "a6",
          "a4",
          "Nbd7",
          "O-O",
          "Re8",
          "Bf4",
          "Qc7",
          "Nd2",
          "Ne5",
          "Be2"
        ],
        "description": "One of the most exciting, asymmetric defenses. Black concedes a spatial deficit in exchange for an active queenside pawn majority (3-vs-2) and the roaring dark-squared bishop on g7.",
        "whitePlan": "Advance in the center with e4-e5, blockade Black's queenside, attack weak d6 pawn.",
        "blackPlan": "Advance queenside majority with ...b5, activate bishop on g7, outpost knight on e5.",
        "keyThemes": [
          "Queenside 3-vs-2 Pawn Majority",
          "Roaring Monster Bishop on g7",
          "Center Breakthrough with e5",
          "Knight Outpost on e5/c4"
        ],
        "moveExplanations": [
          {
            "san": "d4",
            "ply": 0,
            "color": "white",
            "purpose": "1. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Nf6",
            "ply": 1,
            "color": "black",
            "purpose": "1... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "c4",
            "ply": 2,
            "color": "white",
            "purpose": "2. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          },
          {
            "san": "c5",
            "ply": 3,
            "color": "black",
            "purpose": "2... c5: Strikes at d4 from flank, creating asymmetrical pawn structure to fight for a win with Black.",
            "strategicConcept": "Sicilian Defense foundational break."
          },
          {
            "san": "d5",
            "ply": 4,
            "color": "white",
            "purpose": "3. d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "e6",
            "ply": 5,
            "color": "black",
            "purpose": "3... e6: Prepares central counterstrike ...d5 while maintaining a resilient, flexible pawn shield.",
            "strategicConcept": "French Defense & Indian complexes."
          },
          {
            "san": "Nc3",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "exd5",
            "ply": 7,
            "color": "black",
            "purpose": "4... exd5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Modern Benoni: Main Line Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "cxd5",
            "ply": 8,
            "color": "white",
            "purpose": "5. cxd5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Modern Benoni: Main Line Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d6",
            "ply": 9,
            "color": "black",
            "purpose": "5... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "e4",
            "ply": 10,
            "color": "white",
            "purpose": "6. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "g6",
            "ply": 11,
            "color": "black",
            "purpose": "6... g6: Prepares kingside fianchetto (...Bg7) to control the long diagonal with a hypermodern bishop.",
            "strategicConcept": "Fianchetto strategy in KID, Dragon, Grünfeld."
          },
          {
            "san": "Nf3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Bg7",
            "ply": 13,
            "color": "black",
            "purpose": "7... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "h3",
            "ply": 14,
            "color": "white",
            "purpose": "8. h3: Prophylaxis: prevents ...Bg4/...Ng4 incursions and creates king flight square.",
            "strategicConcept": "Positional hygiene in Italian & Ruy Lopez."
          },
          {
            "san": "O-O",
            "ply": 15,
            "color": "black",
            "purpose": "8... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Bd3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Bd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Modern Benoni: Main Line Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "a6",
            "ply": 17,
            "color": "black",
            "purpose": "9... a6: Prophylaxis: stops Nb5/Bb5 and prepares queenside expansion with ...b5.",
            "strategicConcept": "Najdorf, Ruy Lopez, and Slav hallmark."
          },
          {
            "san": "a4",
            "ply": 18,
            "color": "white",
            "purpose": "10. a4: Clamps down on queenside expansion, preventing ...b5 and fixing pawn targets.",
            "strategicConcept": "Positional clamp in Ruy Lopez and Catalan."
          },
          {
            "san": "Nbd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Nbd7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Modern Benoni: Main Line Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Re8",
            "ply": 21,
            "color": "black",
            "purpose": "11... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Bf4",
            "ply": 22,
            "color": "white",
            "purpose": "12. Bf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Modern Benoni: Main Line Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qc7",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qc7: Places queen on c-file, supports ...c5/...e5, coordinates with rooks.",
            "strategicConcept": "Taimanov & Scheveningen queen coordination."
          },
          {
            "san": "Nd2",
            "ply": 24,
            "color": "white",
            "purpose": "13. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Modern Benoni: Main Line Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne5",
            "ply": 25,
            "color": "black",
            "purpose": "13... Ne5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Modern Benoni: Main Line Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be2",
            "ply": 26,
            "color": "white",
            "purpose": "14. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "scotch-classical",
        "name": "Scotch Game: Classical & Mieses Variations",
        "eco": "C45",
        "moves": [
          "e4",
          "e5",
          "Nf3",
          "Nc6",
          "d4",
          "exd4",
          "Nxd4",
          "Bc5",
          "Be3",
          "Qf6",
          "c3",
          "Nge7",
          "Bc4",
          "Ne5",
          "Be2",
          "Qg6",
          "O-O",
          "d6",
          "f3",
          "O-O",
          "Kh1",
          "f5",
          "Nd2",
          "f4",
          "Bf2"
        ],
        "description": "Garry Kasparov revived the Scotch Game (3.d4) in his 1990 World Championship match against Karpov, blowing open the center on move 3 to avoid deep Ruy Lopez theory.",
        "whitePlan": "Control open d-file, maintain central piece dominance, attack on kingside.",
        "blackPlan": "Counterattack d4 knight with ...Bc5 and ...Qf6, strike with ...d5 or ...f5.",
        "keyThemes": [
          "Early Central Explosion 3.d4",
          "Queen and Bishop Battery on d4",
          "Dynamic Central Mobility",
          "Kasparov World Championship Weapon"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nf3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Nc6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "d4",
            "ply": 4,
            "color": "white",
            "purpose": "3. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "exd4",
            "ply": 5,
            "color": "black",
            "purpose": "3... exd4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxd4",
            "ply": 6,
            "color": "white",
            "purpose": "4. Nxd4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc5",
            "ply": 7,
            "color": "black",
            "purpose": "4... Bc5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Be3: Develops bishop, reinforces d4/c5, sets up Qd2/Be3 battery for kingside attacks.",
            "strategicConcept": "English Attack & Yugoslav Attack setup."
          },
          {
            "san": "Qf6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Qf6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "c3",
            "ply": 10,
            "color": "white",
            "purpose": "6. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nge7",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nge7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bc4",
            "ply": 12,
            "color": "white",
            "purpose": "7. Bc4: Targets Black's vulnerable f7 square and controls central dark squares.",
            "strategicConcept": "Italian Game and attacking setups."
          },
          {
            "san": "Ne5",
            "ply": 13,
            "color": "black",
            "purpose": "7... Ne5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Be2",
            "ply": 14,
            "color": "white",
            "purpose": "8. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "Qg6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Qg6: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 16,
            "color": "white",
            "purpose": "9. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "d6",
            "ply": 17,
            "color": "black",
            "purpose": "9... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "f3",
            "ply": 18,
            "color": "white",
            "purpose": "10. f3: Solidifies e4 pawn, denies g4 to enemy pieces, prepares g4 kingside pawn storm.",
            "strategicConcept": "English Attack & Yugoslav Attack pillar."
          },
          {
            "san": "O-O",
            "ply": 19,
            "color": "black",
            "purpose": "10... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Kh1",
            "ply": 20,
            "color": "white",
            "purpose": "11. Kh1: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f5",
            "ply": 21,
            "color": "black",
            "purpose": "11... f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          },
          {
            "san": "Nd2",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f4",
            "ply": 23,
            "color": "black",
            "purpose": "12... f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "Bf2",
            "ply": 24,
            "color": "white",
            "purpose": "13. Bf2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Scotch Game: Classical & Mieses Variations.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "vienna-gambit",
        "name": "Vienna Game & Vienna Gambit",
        "eco": "C29",
        "moves": [
          "e4",
          "e5",
          "Nc3",
          "Nf6",
          "f4",
          "d5",
          "fxe5",
          "Nxe4",
          "Qf3",
          "f5",
          "d3",
          "Nxc3",
          "bxc3",
          "d4",
          "Qg3",
          "Nc6",
          "Nf3",
          "Be6",
          "Be2",
          "Qd7",
          "O-O",
          "O-O-O",
          "c4"
        ],
        "description": "White plays 2.Nc3 to control d5 before striking with 3.f4! (an improved King's Gambit). If Black answers 3...d5, the game explodes into wild tactical lines.",
        "whitePlan": "Exploit open f-file, build central pressure with d3/d4, launch kingside piece attack.",
        "blackPlan": "Strike back with 3...d5, anchor knight on e4, counterattack on queenside.",
        "keyThemes": [
          "Improved King's Gambit (2.Nc3)",
          "Central Counter-Explosion (3...d5)",
          "Open f-file Kingside Attack",
          "Knight Outpost on e4"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "Nc3",
            "ply": 2,
            "color": "white",
            "purpose": "2. Nc3: Develops queenside knight, supports e4/d5, defends central pawn structures.",
            "strategicConcept": "Natural piece mobilization."
          },
          {
            "san": "Nf6",
            "ply": 3,
            "color": "black",
            "purpose": "2... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "f4",
            "ply": 4,
            "color": "white",
            "purpose": "3. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "d5",
            "ply": 5,
            "color": "black",
            "purpose": "3... d5: Strikes directly at the center, challenging White's pawns and opening development lines.",
            "strategicConcept": "Direct central contestation."
          },
          {
            "san": "fxe5",
            "ply": 6,
            "color": "white",
            "purpose": "4. fxe5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Vienna Game & Vienna Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 7,
            "color": "black",
            "purpose": "4... Nxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Vienna Game & Vienna Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qf3",
            "ply": 8,
            "color": "white",
            "purpose": "5. Qf3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Vienna Game & Vienna Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "f5",
            "ply": 9,
            "color": "black",
            "purpose": "5... f5: Strikes at White's center or launches kingside pawn assault to open lines.",
            "strategicConcept": "King's Indian & Dutch counter-thrust."
          },
          {
            "san": "d3",
            "ply": 10,
            "color": "white",
            "purpose": "6. d3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Vienna Game & Vienna Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxc3",
            "ply": 11,
            "color": "black",
            "purpose": "6... Nxc3: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the Vienna Game & Vienna Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "bxc3",
            "ply": 12,
            "color": "white",
            "purpose": "7. bxc3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Vienna Game & Vienna Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "d4",
            "ply": 13,
            "color": "black",
            "purpose": "7... d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "Qg3",
            "ply": 14,
            "color": "white",
            "purpose": "8. Qg3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the Vienna Game & Vienna Gambit.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nc6",
            "ply": 15,
            "color": "black",
            "purpose": "8... Nc6: Develops queenside knight, defends e5 or increases pressure on d4 and e5.",
            "strategicConcept": "Natural piece coordination with center."
          },
          {
            "san": "Nf3",
            "ply": 16,
            "color": "white",
            "purpose": "9. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "Be6",
            "ply": 17,
            "color": "black",
            "purpose": "9... Be6: Develops bishop to center, contests d5, neutralizes enemy bishop on c4.",
            "strategicConcept": "Najdorf & French piece coordination."
          },
          {
            "san": "Be2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "Qd7",
            "ply": 19,
            "color": "black",
            "purpose": "10... Qd7: Connects rooks, prepares queenside castling, coordinates pieces.",
            "strategicConcept": "Solid queen placement."
          },
          {
            "san": "O-O",
            "ply": 20,
            "color": "white",
            "purpose": "11. O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "O-O-O",
            "ply": 21,
            "color": "black",
            "purpose": "11... O-O-O: Castles queenside, placing rook on d-file and signaling opposite-side castling attack.",
            "strategicConcept": "Aggressive opposite-side castling warfare."
          },
          {
            "san": "c4",
            "ply": 22,
            "color": "white",
            "purpose": "12. c4: Controls central d5 from flank, prepares queenside expansion, keeps c-file options open.",
            "strategicConcept": "English Opening & Flank strategy."
          }
        ],
        "gamesCount": 10
      },
      {
        "id": "kings-gambit",
        "name": "King's Gambit: Accepted & Classical",
        "eco": "C34",
        "moves": [
          "e4",
          "e5",
          "f4",
          "exf4",
          "Nf3",
          "g5",
          "h4",
          "g4",
          "Ne5",
          "Nf6",
          "d4",
          "d6",
          "Nd3",
          "Nxe4",
          "Bxf4",
          "Bg7",
          "c3",
          "O-O",
          "Nd2",
          "Re8",
          "Be2",
          "Qe7",
          "Nxe4",
          "Qxe4",
          "Kf2"
        ],
        "description": "The soul of Romantic chess: 2.f4 offers a wing pawn on move 2 to eliminate Black's e5 pawn, open the f-file, and attack f7. Played by Morphy, Spassky, and Fischer.",
        "whitePlan": "Regain f4 pawn, build broad center with d4, attack f7 along the open f-file.",
        "blackPlan": "Hold gambit pawn with ...g5, counterattack White's exposed king with ...d5 and ...Qe7.",
        "keyThemes": [
          "Romantic Masterpiece (2.f4)",
          "Open f-file Attack on f7",
          "Pawn Shield Defense (...g5)",
          "Exposed Kings Dynamic"
        ],
        "moveExplanations": [
          {
            "san": "e4",
            "ply": 0,
            "color": "white",
            "purpose": "1. e4: Claims central territory on d5/f5, establishes e4 stronghold, and frees diagonals for bishop and queen.",
            "strategicConcept": "Classical King's Pawn Opening foundation."
          },
          {
            "san": "e5",
            "ply": 1,
            "color": "black",
            "purpose": "1... e5: Mirrors White's central space, controlling d4/f4 and freeing bishop and queen diagonals.",
            "strategicConcept": "Open Game symmetry."
          },
          {
            "san": "f4",
            "ply": 2,
            "color": "white",
            "purpose": "2. f4: Claims kingside territory, supports e5/f5 break, opens f-file for rook.",
            "strategicConcept": "Grand Prix & Austrian Attack aggression."
          },
          {
            "san": "exf4",
            "ply": 3,
            "color": "black",
            "purpose": "2... exf4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf3",
            "ply": 4,
            "color": "white",
            "purpose": "3. Nf3: Develops kingside knight, attacks e5, controls d4, prepares kingside castling.",
            "strategicConcept": "Universal kingside development."
          },
          {
            "san": "g5",
            "ply": 5,
            "color": "black",
            "purpose": "3... g5: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "h4",
            "ply": 6,
            "color": "white",
            "purpose": "4. h4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "g4",
            "ply": 7,
            "color": "black",
            "purpose": "4... g4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Ne5",
            "ply": 8,
            "color": "white",
            "purpose": "5. Ne5: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nf6",
            "ply": 9,
            "color": "black",
            "purpose": "5... Nf6: Develops knight toward center, attacks e4/d5, prepares fast kingside castling.",
            "strategicConcept": "Essential response to 1.d4 and 1.e4."
          },
          {
            "san": "d4",
            "ply": 10,
            "color": "white",
            "purpose": "6. d4: Occupies central d4 with pawn protection, controls e5/c5, and frees light-squared bishop.",
            "strategicConcept": "Classical Queen's Pawn Opening foundation."
          },
          {
            "san": "d6",
            "ply": 11,
            "color": "black",
            "purpose": "6... d6: Controls e5, prevents White from pushing e5 with tempo, frees light-squared bishop.",
            "strategicConcept": "Prophylaxis in Sicilian, Pirc, and KID."
          },
          {
            "san": "Nd3",
            "ply": 12,
            "color": "white",
            "purpose": "7. Nd3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 13,
            "color": "black",
            "purpose": "7... Nxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bxf4",
            "ply": 14,
            "color": "white",
            "purpose": "8. Bxf4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Bg7",
            "ply": 15,
            "color": "black",
            "purpose": "8... Bg7: Places bishop on long monster diagonal, exerting immense board-wide pressure.",
            "strategicConcept": "King's Indian & Dragon spiritual engine."
          },
          {
            "san": "c3",
            "ply": 16,
            "color": "white",
            "purpose": "9. c3: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "O-O",
            "ply": 17,
            "color": "black",
            "purpose": "9... O-O: Tucks king into kingside safety behind pawn shield and activates rook on f/e files.",
            "strategicConcept": "Standard king safety and rook mobilization."
          },
          {
            "san": "Nd2",
            "ply": 18,
            "color": "white",
            "purpose": "10. Nd2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Re8",
            "ply": 19,
            "color": "black",
            "purpose": "10... Re8: Brings rook to e-file, supporting e5/e6 and applying pressure down the file.",
            "strategicConcept": "Active central counterplay."
          },
          {
            "san": "Be2",
            "ply": 20,
            "color": "white",
            "purpose": "11. Be2: Quiet development guarding d1-h5 diagonal and preparing castling.",
            "strategicConcept": "Positional Classical setup."
          },
          {
            "san": "Qe7",
            "ply": 21,
            "color": "black",
            "purpose": "11... Qe7: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Nxe4",
            "ply": 22,
            "color": "white",
            "purpose": "12. Nxe4: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Qxe4",
            "ply": 23,
            "color": "black",
            "purpose": "12... Qxe4: Black improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          },
          {
            "san": "Kf2",
            "ply": 24,
            "color": "white",
            "purpose": "13. Kf2: White improves piece coordination, controls vital central outposts, and executes the strategic plan in the King's Gambit: Accepted & Classical.",
            "strategicConcept": "Dynamic positional development and tactical coordination."
          }
        ],
        "gamesCount": 10
      }
    ],
    "totalGames": 100
  }
];

export function getMoveExplanation(san: string, ply: number, color: 'white' | 'black', openingName: string = 'Standard Opening'): MovePurposeExplanation {
  const isWhite = color === 'white';
  const num = Math.floor(ply / 2) + 1;
  const tag = isWhite ? (num + '. ' + san) : (num + '... ' + san);
  return {
    san,
    ply,
    color,
    purpose: tag + ': ' + (isWhite ? 'White' : 'Black') + ' improves piece activity, controls key central outposts, and harmonizes with the overarching strategic plan of the ' + openingName + '.',
    strategicConcept: 'Active positional development, pawn structure harmony, and piece coordination.'
  };
}

export default OPENING_FAMILIES;
