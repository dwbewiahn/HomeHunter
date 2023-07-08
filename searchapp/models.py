from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.core.validators import MaxValueValidator

# MODEL

class SearchFilter(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    city_code = models.IntegerField(validators=[MaxValueValidator(99)])
    price_min = models.IntegerField(validators=[MaxValueValidator(99999)])
    price_max = models.IntegerField(validators=[MaxValueValidator(99999)])
    typology = models.CharField(max_length=3, blank=True, null=True)
    search_range = models.IntegerField(validators=[MaxValueValidator(999)], blank=True, null=True)
    notify_by_phone = models.BooleanField(default=False)

    def to_dict(self):
        return {
            "offset": "0",
            "limit": "40",
            "category_id": "4777",
            "region_id": str(self.city_code),
            "sort_by": "created_at:desc",
            "filter_float_price:from": str(self.price_min),
            "filter_float_price:to": str(self.price_max),
           
        }


class NotifiedAd(models.Model):
    search_filter = models.ForeignKey(SearchFilter, on_delete=models.CASCADE)
    ad_id = models.CharField(max_length=100, unique=True)

class City(models.Model):
    name = models.CharField(max_length=20)
    olx_code = models.IntegerField(validators=[MaxValueValidator(99)])

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)
