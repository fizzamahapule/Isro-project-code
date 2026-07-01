import pandas as pd


def load_rainfall():

    data = pd.read_csv("datasets/rainfall.csv")

    return data


def load_temperature():

    data = pd.read_csv("datasets/temperature.csv")

    return data
