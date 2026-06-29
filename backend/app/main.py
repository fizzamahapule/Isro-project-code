from fastapi import FastAPI

app = FastAPI(title="AI Climate Digital Twin")

@app.get("/")
def home():
    return {
        "message":"AI Climate Digital Twin Backend Running"
    }

@app.get("/health")
def health():
    return {
        "status":"Healthy"
    }
