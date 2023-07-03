from django.shortcuts import render

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
