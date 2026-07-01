import torch
import pandas as pd

from app.ai.model import ClimateModel

model = ClimateModel()

try:
    model.load_state_dict(
        torch.load("models/climate_model.pth")
    )
    model.eval()
except:
    pass


def predict(sample):

    x = torch.tensor(sample).float()

    x = x.unsqueeze(0)

    prediction = model(x)

    return prediction.item()
