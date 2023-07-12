from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, CityViewSet, SearchFilterViewSet, NotifiedAdViewSet, login_view, register_view, current_user

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'cities', CityViewSet)
router.register(r'searches', SearchFilterViewSet)
router.register(r'ads', NotifiedAdViewSet)

urlpatterns = [
    path('login/', login_view),
    path('register/', register_view),
    path('current_user/', current_user),
    path('api/auth/', include('knox.urls')),
    path('', include(router.urls)),
]
