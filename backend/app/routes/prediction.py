from fastapi import APIRouter

from app.ai.predict import predict

router = APIRouter(
    prefix="/prediction",
    tags=["Prediction"]
)

@router.get("/{state}")

def prediction(state:str):

    sample=[30,75,20,8]

    value=predict(sample)

    return{

        "state":state,

        "predicted_temperature":value

    }
