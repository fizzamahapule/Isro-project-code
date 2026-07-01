from fastapi import APIRouter

router = APIRouter(
    prefix="/prediction",
    tags=["Prediction"]
)

@router.get("/rainfall")
def rainfall():

    return {
        "predicted_rainfall":228
    }


@router.get("/temperature")
def temperature():

    return {
        "predicted_temperature":31.5
    }
