from rest_framework import serializers
from searchapp.models import CustomUser, City, SearchFilter, NotifiedAd


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'password', 'phone_number']

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'name', 'olx_code']

class SearchFilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchFilter
        fields = ['id', 'user', 'city', 'typology', 'price_min', 'price_max', 'search_range', 'notify_by_phone']

class NotifiedAdSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotifiedAd
        fields = ['id', 'search_filter', 'ad_id']