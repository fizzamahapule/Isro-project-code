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
