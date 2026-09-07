import argparse
import os
import sys
import chess.pgn
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Add parent directory to sys.path to allow importing app models
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.models import Base, GMGame, GamePosition

def simplify_fen(fen: str) -> str:
    """Strips half-move clock and full-move number for canonical position indexing."""
    parts = fen.strip().split()
    if len(parts) >= 4:
        return " ".join(parts[:4])
    return fen.strip()

def ingest_pgn(pgn_path: str, db_url: str):
    """Parses multi-game PGN, filters GM games (>=2500 ELO), and bulk inserts positions."""
    engine = create_engine(db_url)
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()

    print(f"Reading PGN file: {pgn_path}")
    games_processed = 0
    games_inserted = 0
    positions_inserted = 0

    with open(pgn_path, encoding="utf-8", errors="ignore") as pgn_file:
        while True:
            game = chess.pgn.read_game(pgn_file)
            if game is None:
                break
            
            games_processed += 1
            headers = game.headers

            try:
                white_elo = int(headers.get("WhiteElo", 0) or 0)
            except ValueError:
                white_elo = 0

            try:
                black_elo = int(headers.get("BlackElo", 0) or 0)
            except ValueError:
                black_elo = 0

            # Filter: Both players must be 2500+ ELO
            if white_elo < 2500 or black_elo < 2500:
                continue

            white_player = headers.get("White", "Unknown")
            black_player = headers.get("Black", "Unknown")
            event = headers.get("Event", "Unknown")
            date_str = headers.get("Date", "????")
            year = int(date_str.split(".")[0]) if date_str.split(".")[0].isdigit() else 0
            result = headers.get("Result", "*")

            exporter = chess.pgn.StringExporter(headers=True, comments=False, variations=False)
            pgn_text = game.accept(exporter)

            gm_game = GMGame(
                white_player=white_player,
                black_player=black_player,
                white_elo=white_elo,
                black_elo=black_elo,
                event=event,
                year=year,
                result=result,
                pgn=pgn_text
            )
            session.add(gm_game)
            session.flush()

            games_inserted += 1

            # Iterate first 30 moves
            board = game.board()
            move_count = 0
            positions_batch = []

            for move in game.mainline_moves():
                board.push(move)
                move_count += 1

                canonical_fen = simplify_fen(board.fen())
                positions_batch.append(
                    GamePosition(
                        game_id=gm_game.id,
                        fen=canonical_fen,
                        move_number=move_count
                    )
                )

                if move_count >= 30:
                    break

            if positions_batch:
                session.bulk_save_objects(positions_batch)
                positions_inserted += len(positions_batch)

            if games_inserted % 500 == 0:
                session.commit()
                print(f"Processed {games_processed} games | Inserted {games_inserted} GM games | {positions_inserted} positions...")

    session.commit()
    session.close()
    print(f"Complete! Processed: {games_processed}, GM Games: {games_inserted}, Positions: {positions_inserted}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Ingest GM Chess PGN into PostgreSQL")
    parser.add_argument("--pgn", type=str, required=True, help="Path to PGN file")
    parser.add_argument(
        "--db",
        type=str,
        default="postgresql://postgres:postgres@localhost:5432/chess_db",
        help="SQLAlchemy DB URI"
    )

    args = parser.parse_args()
    ingest_pgn(args.pgn, args.db)
