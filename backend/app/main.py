from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router
from app.database import init_db

app = FastAPI(
    title="Chess Engine & GM Opening Explorer API",
    version="1.0.0",
    description="High-performance backend API for FEN lookup, GM game search, and Pawn Structure Academy."
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def on_startup():
    await init_db()

app.include_router(router)

@app.get("/")
async def root():
    return {"message": "Chess API is running."}
