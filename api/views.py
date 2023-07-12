from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from knox.models import AuthToken
import json
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

from rest_framework import viewsets
from searchapp.models import CustomUser, City, SearchFilter, NotifiedAd
from .serializers import UserSerializer, CitySerializer, SearchFilterSerializer, NotifiedAdSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer

class SearchFilterViewSet(viewsets.ModelViewSet):
    queryset = SearchFilter.objects.all()
    serializer_class = SearchFilterSerializer

class NotifiedAdViewSet(viewsets.ModelViewSet):
    queryset = NotifiedAd.objects.all()
    serializer_class = NotifiedAdSerializer

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            token = AuthToken.objects.create(user)[1]
            return JsonResponse({"status": "success", "token": token}, status=200)
        else:
            return JsonResponse({"error": "Login failed"}, status=400)
    else:
        return JsonResponse({"error": "Invalid request"}, status=400)

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        phone_number = data.get('phone_number')
        if CustomUser.objects.filter(username=username).exists():
            return JsonResponse({"error": "Username already exists"}, status=400)
        user = CustomUser.objects.create_user(username=username, password=password, email=email, phone_number=phone_number)
        user.save()
        return JsonResponse({"status": "success"}, status=200)
    else:
        return JsonResponse({"error": "Invalid request"}, status=400)
    
@login_required
def current_user(request):
    user = request.user
    return JsonResponse({
        'id': user.id,
        'username': user.username,
        'email': user.email,
    })