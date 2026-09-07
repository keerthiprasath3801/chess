from pydantic import BaseModel, ConfigDict
from typing import Optional, List, Any

class OpeningResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    eco_code: str
    name: str
    variation: Optional[str] = None
    moves_san: str
    fen: str


class GMGameResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    white_player: str
    black_player: str
    white_elo: int
    black_elo: int
    event: str
    year: int
    result: str
    pgn: str


class StructureCategoryResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: str


class StructureGameResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    category_id: int
    white_player: str
    black_player: str
    result: str
    annotated_pgn: str


class AcademyGameResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    module_id: int
    title: str
    white_player: str
    black_player: str
    result: str
    annotated_pgn: str


class AcademyModuleResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    level: str
    title: str
    description: str
    dos_and_donts: Optional[Any] = None
    definitions: Optional[Any] = None
    games: Optional[List[AcademyGameResponse]] = []
