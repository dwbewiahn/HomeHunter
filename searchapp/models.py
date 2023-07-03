from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# MODEL

class SearchFilter(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    city = models.CharField(max_length=100)
    price_min = models.DecimalField(max_digits=6, decimal_places=2)
    price_max = models.DecimalField(max_digits=6, decimal_places=2)
    typology = models.CharField(max_length=100)
    search_range = models.IntegerField()
    notify_by_phone = models.BooleanField(default=False)


class NotifiedAd(models.Model):
    search_filter = models.ForeignKey(SearchFilter, on_delete=models.CASCADE)
    ad_id = models.CharField(max_length=100, unique=True)

class City(models.Model):
    name = models.CharField(max_length=200)
    olx_code = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)
