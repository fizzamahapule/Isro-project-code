from fastapi import APIRouter

router=APIRouter(
    prefix="/simulation",
    tags=["Simulation"]
)

@router.get("/")

def simulation(
    rainfall:float,
    temperature:float
):

    flood="Low"

    if rainfall>200:
        flood="High"

    drought="Low"

    if temperature>40:
        drought="High"

    return{

        "rainfall":rainfall,

        "temperature":temperature,

        "flood_risk":flood,

        "drought_risk":drought

    }
