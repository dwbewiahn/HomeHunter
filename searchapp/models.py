from django.db import models
from django.contrib.auth.models import User

# MODEL

class SearchFilter(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    city = models.CharField(max_length=100)
    price_min = models.DecimalField(max_digits=6, decimal_places=2)
    price_max = models.DecimalField(max_digits=6, decimal_places=2)
    typology = models.CharField(max_length=100)
    search_range = models.IntegerField()


class NotifiedAd(models.Model):
    search_filter = models.ForeignKey(SearchFilter, on_delete=models.CASCADE)
    ad_id = models.CharField(max_length=100, unique=True)
