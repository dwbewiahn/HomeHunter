from django.contrib import admin
from .models import CustomUser, SearchFilter, NotifiedAd, City

admin.site.register(CustomUser)
admin.site.register(SearchFilter)
admin.site.register(NotifiedAd)
admin.site.register(City)