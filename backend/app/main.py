from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import climate
from app.routes import prediction
from app.routes import simulation

app = FastAPI(
    title="AI Climate Digital Twin",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(climate.router)
app.include_router(prediction.router)
app.include_router(simulation.router)

@app.get("/")
def root():
    return {
        "message": "AI Climate Digital Twin Backend Running"
    }
