from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, CityViewSet, SearchFilterViewSet, NotifiedAdViewSet, login_view, register_view

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'cities', CityViewSet)
router.register(r'searches', SearchFilterViewSet)
router.register(r'ads', NotifiedAdViewSet)

urlpatterns = [
    path('login/', login_view),
    path('register/', register_view),
    path('', include(router.urls)),
]
