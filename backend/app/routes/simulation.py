from fastapi import APIRouter

router = APIRouter(
    prefix="/simulation",
    tags=["Simulation"]
)

@router.get("/whatif")
def what_if(
    rainfall: float,
    temperature: float
):

    flood = "Low"

    if rainfall > 250:
        flood = "High"

    return {
        "rainfall": rainfall,
        "temperature": temperature,
        "flood_risk": flood
    }
