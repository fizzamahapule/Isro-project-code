from fastapi import APIRouter

router = APIRouter(
    prefix="/climate",
    tags=["Climate"]
)

@router.get("/current")
def current():

    return {
        "rainfall":215,
        "temperature":32,
        "humidity":68,
        "prediction":"Heavy Rain"
    }
