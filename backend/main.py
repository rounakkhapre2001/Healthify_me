from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model
class UserData(BaseModel):
    age: int
    gender: str
    weight: float
    height: float
    activity_level: str
    health_goal: str

@app.post("/get-diet-plan")
def get_diet_plan(user_data: UserData):
    api_key = os.getenv("SPOONACULAR_API_KEY")
    
    # API Call: Weekly Plan
    url = f"https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey={api_key}"

    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()
    else:
        return {"error": "Failed to fetch diet plan"}

@app.get("/")
def root():
    return {"message": "Welcome to HealthifyMe Backend"}
