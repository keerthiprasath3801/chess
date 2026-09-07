from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.database import get_db
from app.models import Opening, GMGame, GamePosition, StructureCategory, StructureGame, AcademyModule, AcademyGame
from app.schemas import (
    OpeningResponse,
    GMGameResponse,
    StructureCategoryResponse,
    StructureGameResponse,
    AcademyModuleResponse,
    AcademyGameResponse,
)

router = APIRouter(prefix="/api")

# Fallback in-memory rich syllabus data covering Beginner, Intermediate, and Advanced
DEFAULT_ACADEMY_MODULES = [
    {
        "id": 1,
        "level": "beginner",
        "title": "Module 1: Chess Fundamentals & Piece Movements",
        "description": "Learn piece values, move rules, files, ranks, notation, castling, and en passant.",
        "dos_and_donts": {
            "dos": [
                "Memorize piece values: Pawn = 1, Knight/Bishop = 3, Rook = 5, Queen = 9.",
                "Always check if your pieces are protected before making a move.",
                "Castle early to protect your King and activate your Rook."
            ],
            "donts": [
                "Don't move pieces into squares where enemy pawns can capture them for free.",
                "Don't make illegal moves or forget castling restrictions (cannot castle through check)."
            ]
        },
        "definitions": [
            {"term": "Check", "definition": "A direct attack on the opponent's King that must be resolved immediately."},
            {"term": "Checkmate", "definition": "The King is in check and has no legal move to escape. Game over!"},
            {"term": "Stalemate", "definition": "The player whose turn it is has no legal move, but their King is NOT in check. Results in a draw."},
            {"term": "Castling", "definition": "A special move moving the King 2 squares toward a Rook and jumping the Rook over."},
            {"term": "En Passant", "definition": "A special pawn capture when an enemy pawn moves 2 squares forward past your pawn."}
        ],
        "games": [
            {
                "id": 101,
                "module_id": 1,
                "title": "Scholar's Mate Demonstration",
                "white_player": "Teacher",
                "black_player": "Student",
                "result": "1-0",
                "annotated_pgn": '[Event "Scholar\'s Mate"] [Result "1-0"] 1. e4 {Control center with pawn} 1... e5 2. Bc4 {Develop bishop targeting f7} 2... Nc6 3. Qh5 {Bring queen targeting f7} 3... Nf6?? {Black fails to defend f7!} 4. Qxf7# {Checkmate! Queen guarded by bishop.} 1-0'
            }
        ]
    },
    {
        "id": 2,
        "level": "beginner",
        "title": "Module 2: Opening Principles & Golden Rules",
        "description": "Master essential opening rules before memorizing long theoretical lines.",
        "dos_and_donts": {
            "dos": [
                "Do control the center squares (d4, e4, d5, e5) with pawns and minor pieces.",
                "Do develop Knights before Bishops in most open positions.",
                "Do castle within the first 10 moves to secure King safety.",
                "Do connect your Rooks by clearing the back rank."
            ],
            "donts": [
                "DON'T bring your Queen out too early where it can be chased by enemy pieces.",
                "DON'T move the same piece multiple times in the opening unless necessary.",
                "DON'T make unnecessary pawn moves instead of developing pieces."
            ]
        },
        "definitions": [
            {"term": "Center Control", "definition": "Dominating e4, d4, e5, d5 to allow maximum mobility for your pieces."},
            {"term": "Development", "definition": "Moving pieces from starting squares into active central positions."},
            {"term": "King Safety", "definition": "Castling and maintaining a solid pawn shield around the King."}
        ],
        "games": [
            {
                "id": 102,
                "module_id": 2,
                "title": "Italian Game Opening Principles",
                "white_player": "Grandmaster",
                "black_player": "Grandmaster",
                "result": "1-0",
                "annotated_pgn": '[Event "Italian Game"] [Result "1-0"] 1. e4 {White claims central space} 1... e5 2. Nf3 {Develops Knight with attack on e5} 2... Nc6 {Black defends e5 pawn} 3. Bc4 {White develops Bishop to active diagonal} 3... Bc5 4. c3 {Preparing central break d2-d4} 4... Nf6 5. d4 {White strikes at the center!} 5... exd4 6. cxd4 Bb4+ 7. Nc3 {Active development} 1-0'
            }
        ]
    },
    {
        "id": 3,
        "level": "beginner",
        "title": "Module 3: Basic Tactical Motifs",
        "description": "Learn tactical patterns: Forks, Pins, Skewers, Discovered Attacks, and Deflection.",
        "dos_and_donts": {
            "dos": [
                "Always scan for Checks, Captures, and Threats (CCT) before every move.",
                "Look for undefended (hanging) enemy pieces.",
                "Use Pins to paralyze enemy pieces against high-value targets."
            ],
            "donts": [
                "Don't leave your pieces undefended (hanging).",
                "Don't ignore pinned pieces—attack them with pawns!"
            ]
        },
        "definitions": [
            {"term": "Fork", "definition": "A single piece attacks two or more enemy pieces simultaneously."},
            {"term": "Pin", "definition": "An attack on a piece that cannot move without exposing a more valuable piece behind it."},
            {"term": "Skewer", "definition": "An attack on a valuable piece, forcing it to move and exposing a lesser piece behind it."},
            {"term": "Discovered Attack", "definition": "Moving one piece opens an attack line for another piece behind it."}
        ],
        "games": [
            {
                "id": 103,
                "module_id": 3,
                "title": "Knight Fork Technique",
                "white_player": "Tactician",
                "black_player": "Opponent",
                "result": "1-0",
                "annotated_pgn": '[Event "Knight Fork"] [Result "1-0"] 1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. Nc3 Bg4 5. h3 Bh5? 6. Nxe5! {Brilliant sacrifice!} 6... Bxd1?? 7. Bxf7+ Ke7 8. Nd5# {Smothered mating net!} 1-0'
            }
        ]
    },
    {
        "id": 4,
        "level": "intermediate",
        "title": "Module 4: Calculation & Opponent Threat Analysis",
        "description": "Master calculation discipline: Candidate moves, CCT method, and Threat Assessment.",
        "dos_and_donts": {
            "dos": [
                "ALWAYS ask 'What is my opponent threatening?' BEFORE choosing your move.",
                "Calculate forcing lines (Checks $\\rightarrow$ Captures $\\rightarrow$ Threats) first.",
                "Verify your candidate moves 2-3 moves deep to prevent one-move blunders."
            ],
            "donts": [
                "Don't play hopeful chess assuming your opponent won't see your threat.",
                "Don't stop calculating early in open tactical positions."
            ]
        },
        "definitions": [
            {"term": "Candidate Moves", "definition": "The top 2 to 4 sensible move options considered before calculating deep lines."},
            {"term": "CCT Method", "definition": "Calculating Checks, Captures, and Threats in strict order of forcing priority."},
            {"term": "Prophylaxis", "definition": "Preventing opponent's active plans before executing your own attack."}
        ],
        "games": [
            {
                "id": 104,
                "module_id": 4,
                "title": "Prophylactic Defense & Counter-Attack",
                "white_player": "Karpov",
                "black_player": "Spassky",
                "result": "1-0",
                "annotated_pgn": '[Event "Prophylactic Masterpiece"] [Result "1-0"] 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3! {Prophylactic move preventing Bg4 pin} 9... Nb8 10. d4 Nbd7 1-0'
            }
        ]
    },
    {
        "id": 5,
        "level": "intermediate",
        "title": "Module 5: Positional Pawn Structures (IQP, Carlsbad, Maróczy)",
        "description": "Learn how pawn skeletons dictate piece placement, key outposts, and plans.",
        "dos_and_donts": {
            "dos": [
                "With an Isolated Queen Pawn (IQP), attack in the middlegame before endgames.",
                "Place Knights on strong outpost squares guarded by pawns.",
                "Use minority attacks (b4-b5 in Carlsbad) to create weak enemy pawns."
            ],
            "donts": [
                "Don't trade pieces when holding an IQP—trades weaken your attacking momentum.",
                "Don't create unnecessary pawn weaknesses in your own camp."
            ]
        },
        "definitions": [
            {"term": "IQP (Isolated Queen Pawn)", "definition": "A d-pawn with no friendly pawns on adjacent c- or e-files."},
            {"term": "Outpost Square", "definition": "A square on the 4th, 5th, or 6th rank guarded by a pawn that enemy pawns cannot attack."},
            {"term": "Carlsbad Structure", "definition": "A pawn structure arising from Queen's Gambit where White attacks with b4-b5."}
        ],
        "games": [
            {
                "id": 105,
                "module_id": 5,
                "title": "IQP Attacking Model Game",
                "white_player": "Kasparov",
                "black_player": "Karpov",
                "result": "1-0",
                "annotated_pgn": '[Event "IQP Attack"] [Result "1-0"] 1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 Be7 6. e3 O-O 7. Bd3 Nbd7 8. Nf3 Re8 9. O-O c6 10. Qc2 Nf8 1-0'
            }
        ]
    },
    {
        "id": 6,
        "level": "advanced",
        "title": "Module 6: Advanced Imbalances & Dynamic vs Static Advantages",
        "description": "Evaluate positional imbalances: Material vs Initiative, Bishop Pair, and Space.",
        "dos_and_donts": {
            "dos": [
                "Identify what is asymmetric between your position and your opponent's.",
                "Convert dynamic advantages (initiative/speed) into static permanent advantages (material/structure).",
                "Use the Bishop Pair to open up diagonals across the entire board."
            ],
            "donts": [
                "Don't let a dynamic initiative stall into a passive position.",
                "Don't close the board when holding the Bishop Pair."
            ]
        },
        "definitions": [
            {"term": "Static Advantage", "definition": "Permanent long-term advantages such as pawn structure or material lead."},
            {"term": "Dynamic Advantage", "definition": "Temporary time-sensitive advantages like lead in development or king attack."},
            {"term": "Bishop Pair", "definition": "Owning both light- and dark-squared Bishops in open positions."}
        ],
        "games": [
            {
                "id": 106,
                "module_id": 6,
                "title": "Bishop Pair Mastery",
                "white_player": "Fischer",
                "black_player": "Larsen",
                "result": "1-0",
                "annotated_pgn": '[Event "Bishop Pair Conversion"] [Result "1-0"] 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Ne5 11. Bb3 Rc8 12. h4 h5 1-0'
            }
        ]
    }
]

def clean_fen(fen: str) -> str:
    parts = fen.strip().split()
    if len(parts) >= 4:
        return " ".join(parts[:4])
    return fen.strip()

@router.get("/openings/lookup", response_model=OpeningResponse)
async def lookup_opening(
    fen: str = Query(..., description="Target position FEN string"),
    db: AsyncSession = Depends(get_db)
):
    normalized_fen = clean_fen(fen)
    stmt = (
        select(Opening)
        .where((Opening.fen == fen) | (Opening.fen.like(f"{normalized_fen}%")))
        .limit(1)
    )
    result = await db.execute(stmt)
    opening = result.scalars().first()
    if not opening:
        raise HTTPException(status_code=404, detail="Opening not found for given FEN.")
    return opening

@router.get("/games/by-position", response_model=List[GMGameResponse])
async def get_games_by_position(
    fen: str = Query(..., description="Target position FEN string"),
    limit: int = Query(20, ge=1, le=100, description="Max number of games to return"),
    db: AsyncSession = Depends(get_db)
):
    normalized_fen = clean_fen(fen)
    stmt = (
        select(GMGame)
        .join(GamePosition, GMGame.id == GamePosition.game_id)
        .where(
            (GamePosition.fen == fen) | (GamePosition.fen.like(f"{normalized_fen}%")),
            GMGame.white_elo >= 2500,
            GMGame.black_elo >= 2500
        )
        .distinct()
        .limit(limit)
    )
    result = await db.execute(stmt)
    games = result.scalars().all()
    return games

@router.get("/structures", response_model=List[StructureCategoryResponse])
async def get_structures(
    db: AsyncSession = Depends(get_db)
):
    stmt = select(StructureCategory)
    result = await db.execute(stmt)
    categories = result.scalars().all()
    if not categories:
        return [
            StructureCategoryResponse(
                id=m["id"],
                name=m["title"],
                description=m["description"]
            )
            for m in DEFAULT_ACADEMY_MODULES
        ]
    return categories

@router.get("/structures/{category_id}/games", response_model=List[StructureGameResponse])
async def get_structure_games(
    category_id: int,
    db: AsyncSession = Depends(get_db)
):
    stmt = select(StructureGame).where(StructureGame.category_id == category_id)
    result = await db.execute(stmt)
    games = result.scalars().all()
    if not games:
        module = next((m for m in DEFAULT_ACADEMY_MODULES if m["id"] == category_id), None)
        if module and "games" in module:
            return [
                StructureGameResponse(
                    id=g["id"],
                    category_id=category_id,
                    white_player=g["white_player"],
                    black_player=g["black_player"],
                    result=g["result"],
                    annotated_pgn=g["annotated_pgn"]
                )
                for g in module["games"]
            ]
        return []
    return games

@router.get("/academy/modules", response_model=List[AcademyModuleResponse])
async def get_academy_modules(
    level: Optional[str] = Query(None, description="Filter by level: beginner, intermediate, advanced"),
    db: AsyncSession = Depends(get_db)
):
    try:
        stmt = select(AcademyModule)
        if level:
            stmt = stmt.where(AcademyModule.level == level.lower())
        result = await db.execute(stmt)
        modules = result.scalars().all()
        if modules:
            return modules
    except Exception:
        pass

    # Return default rich syllabus modules
    filtered = DEFAULT_ACADEMY_MODULES
    if level:
        filtered = [m for m in DEFAULT_ACADEMY_MODULES if m["level"].lower() == level.lower()]

    return [
        AcademyModuleResponse(
            id=m["id"],
            level=m["level"],
            title=m["title"],
            description=m["description"],
            dos_and_donts=m.get("dos_and_donts"),
            definitions=m.get("definitions"),
            games=[
                AcademyGameResponse(
                    id=g["id"],
                    module_id=m["id"],
                    title=g["title"],
                    white_player=g["white_player"],
                    black_player=g["black_player"],
                    result=g["result"],
                    annotated_pgn=g["annotated_pgn"]
                )
                for g in m.get("games", [])
            ]
        )
        for m in filtered
    ]
