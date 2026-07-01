import torch

from app.ai.model import ClimateModel

model = ClimateModel()

model.load_state_dict(
    torch.load("models/climate_model.pth")
)

model.eval()


def predict(values):

    x = torch.tensor(values).float()

    x = x.unsqueeze(0)

    with torch.no_grad():

        prediction = model(x)

    return prediction.item()
