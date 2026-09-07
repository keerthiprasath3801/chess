from typing import List, Optional
from sqlalchemy import String, Text, Integer, ForeignKey, Index, JSON
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

class Opening(Base):
    __tablename__ = "openings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    eco_code: Mapped[str] = mapped_column(String(10), nullable=False)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    variation: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    moves_san: Mapped[str] = mapped_column(Text, nullable=False)
    fen: Mapped[str] = mapped_column(String(255), index=True, nullable=False)


class GMGame(Base):
    __tablename__ = "gm_games"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    white_player: Mapped[str] = mapped_column(String(255), nullable=False)
    black_player: Mapped[str] = mapped_column(String(255), nullable=False)
    white_elo: Mapped[int] = mapped_column(Integer, nullable=False)
    black_elo: Mapped[int] = mapped_column(Integer, nullable=False)
    event: Mapped[str] = mapped_column(String(255), nullable=False)
    year: Mapped[int] = mapped_column(Integer, nullable=False)
    result: Mapped[str] = mapped_column(String(10), nullable=False)
    pgn: Mapped[str] = mapped_column(Text, nullable=False)

    positions: Mapped[List["GamePosition"]] = relationship(
        "GamePosition", back_populates="game", cascade="all, delete-orphan"
    )


class GamePosition(Base):
    __tablename__ = "game_positions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    game_id: Mapped[int] = mapped_column(
        Integer, ForeignKey("gm_games.id", ondelete="CASCADE"), nullable=False
    )
    fen: Mapped[str] = mapped_column(String(255), index=True, nullable=False)
    move_number: Mapped[int] = mapped_column(Integer, nullable=False)

    game: Mapped["GMGame"] = relationship("GMGame", back_populates="positions")


class StructureCategory(Base):
    __tablename__ = "structure_categories"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)

    games: Mapped[List["StructureGame"]] = relationship(
        "StructureGame", back_populates="category", cascade="all, delete-orphan"
    )


class StructureGame(Base):
    __tablename__ = "structure_games"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    category_id: Mapped[int] = mapped_column(
        Integer, ForeignKey("structure_categories.id", ondelete="CASCADE"), nullable=False
    )
    white_player: Mapped[str] = mapped_column(String(255), nullable=False)
    black_player: Mapped[str] = mapped_column(String(255), nullable=False)
    result: Mapped[str] = mapped_column(String(10), nullable=False)
    annotated_pgn: Mapped[str] = mapped_column(Text, nullable=False)

    category: Mapped["StructureCategory"] = relationship("StructureCategory", back_populates="games")


class AcademyModule(Base):
    __tablename__ = "academy_modules"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    level: Mapped[str] = mapped_column(String(50), nullable=False)  # 'beginner', 'intermediate', 'advanced'
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    dos_and_donts: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    definitions: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)

    games: Mapped[List["AcademyGame"]] = relationship(
        "AcademyGame", back_populates="module", cascade="all, delete-orphan"
    )


class AcademyGame(Base):
    __tablename__ = "academy_games"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    module_id: Mapped[int] = mapped_column(
        Integer, ForeignKey("academy_modules.id", ondelete="CASCADE"), nullable=False
    )
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    white_player: Mapped[str] = mapped_column(String(255), nullable=False)
    black_player: Mapped[str] = mapped_column(String(255), nullable=False)
    result: Mapped[str] = mapped_column(String(10), nullable=False)
    annotated_pgn: Mapped[str] = mapped_column(Text, nullable=False)

    module: Mapped["AcademyModule"] = relationship("AcademyModule", back_populates="games")
