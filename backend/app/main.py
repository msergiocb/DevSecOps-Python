from fastapi import FastAPI
from .routers import orders
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="Orders API")

# CORS for frontend dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("CORS_ORIGINS", "*")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(orders.router)

@app.get("/health")
def health():
    return {"status": "ok"}
