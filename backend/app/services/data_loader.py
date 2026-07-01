import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent

DATA_PATH = BASE_DIR / "datasets" / "india_all_states_climate_10year_master.xlsx"

df = pd.read_excel(DATA_PATH)

# Convert Date column
df["Date"] = pd.to_datetime(df["Date"])

# Remove missing values
df = df.fillna(0)

print("Dataset Loaded Successfully")
print(df.head())
def get_all_states():
    return sorted(df["State"].unique())


def get_latest_data():
    latest = df["Date"].max()
    return df[df["Date"] == latest]


def get_state_data(state):
    return df[df["State"] == state]


def get_latest_state(state):
    latest = df["Date"].max()

    return df[
        (df["State"] == state)
        &
        (df["Date"] == latest)
    ]
