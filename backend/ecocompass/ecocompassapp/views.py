from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
import json
import os
import numpy as np
import pandas as pd
import joblib
import xgboost as xgb
import google.generativeai as genai
from .models import CustomUser, ESGAnalysis
from .serializers import RegisterSerializer, UserSerializer, ESGAnalysisSerializer
from .utils.bert_analysis import analyze_esg

# Configure Gemini API
genai.configure(api_key=settings.GEMINI_API_KEY)

# JWT Token Generation
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'user_type': user.user_type,
    }

# User Registration
@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(get_tokens_for_user(user), status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# User Login
@api_view(['POST'])
def login_user(request):
    email = request.data.get("email")
    password = request.data.get("password")
    user = authenticate(email=email, password=password)
    if user:
        return Response(get_tokens_for_user(user), status=status.HTTP_200_OK)
    return Response({"error": "Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED)

# Get User Data
@api_view(['GET'])
def get_user_data(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

# ESG Analysis API
from rest_framework.permissions import IsAuthenticated

class ESGAnalysisView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAuthenticated]  # Ensure user is authenticated

    def post(self, request, *args, **kwargs):
        file = request.FILES.get('file')

        if not file:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)

        analysis_result = analyze_esg(file)

        esg_analyse = ESGAnalysis.objects.create(
            user=request.user,
            file_name=analysis_result["file_name"],
            esg_analysis=analysis_result["esg_analysis"],
            esg_score=analysis_result["esg_score"]
        )
        serializer = ESGAnalysisSerializer(esg_analyse)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# Get Latest ESG Analysis
@api_view(['GET'])
def latest_esg(request):
    latest_entry = ESGAnalysis.objects.last()
    if latest_entry:
        return Response(ESGAnalysisSerializer(latest_entry).data)
    return Response({"error": "No ESG data found"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def latest_logged_esg(request):
    latest_entry = ESGAnalysis.objects.filter(user=request.user).last()
    if latest_entry:
        return Response({"esg_score": latest_entry.esg_score})
    return Response({"error": "No ESG data found"}, status=status.HTTP_404_NOT_FOUND)


# Generate ESG Suggestions using Gemini API
@api_view(['POST'])
def get_esg_suggestions(request):
    esg_score = request.data.get("esg_score")
    esg_analysis = request.data.get("esg_analysis")

    if esg_score is None or not esg_analysis:
        return Response({"error": "Invalid data provided"}, status=status.HTTP_400_BAD_REQUEST)
    
    prompt = f"""
    The company has an ESG score of {esg_score}/100.
    Here is the ESG analysis: {esg_analysis}.
    Suggest specific actions the company can take to improve its ESG score.
    """
    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(prompt)
        suggestions = response.text.split("\n")
        return Response({"suggestions": suggestions}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Load ML Model and Scalers
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "ecocompassapp/models/xgb_model.json")
SCALER_PATH = os.path.join(BASE_DIR, "ecocompassapp/models/scaler.pkl")
POWER_TRANSFORMER_PATH = os.path.join(BASE_DIR, "ecocompassapp/models/power_transformer.pkl")

model = xgb.Booster()
model.load_model(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)
power_transformer = joblib.load(POWER_TRANSFORMER_PATH)

# Predict Revenue API
@csrf_exempt
def predict_revenue(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            employees = float(data["employees"])
            assets = float(data["assets"])
            profits = float(data["profits"])
            esg = float(data["esg"])
            
            input_df = pd.DataFrame({
                "employees": [employees],
                "profits": [profits],
                "assets": [assets],
                "esg": [esg]
            })
            
            input_scaled = scaler.transform(input_df)
            dmatrix = xgb.DMatrix(input_scaled)
            predicted_revenue = model.predict(dmatrix)
            revenue = power_transformer.inverse_transform(predicted_revenue.reshape(-1, 1))
            
            return JsonResponse({"revenue": float(revenue[0][0])})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)
