from fastapi import APIRouter
print("Climate Router Loaded ✅")
from app.services.data_loader import (
    get_latest_data,
    get_latest_state,
    get_all_states
)

router = APIRouter(
    prefix="/climate",
    tags=["Climate"]
)


@router.get("/states")
def states():
    return get_all_states()


@router.get("/latest")
def latest():
    return get_latest_data().to_dict(orient="records")


@router.get("/{state}")
def state(state: str):
    return get_latest_state(state).to_dict(orient="records")
