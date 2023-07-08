import requests
from django.test import TestCase
from .models import SearchFilter, NotifiedAd
from .tasks import search_apartments

class SearchApartmentsTaskTest(TestCase):
    
    def test_search_apartments_creates_notified_ads(self):
        # Arrange
        # Create a SearchFilter

        search_params = {
            "offset": "0",
            "limit": "40",
            "category_id": "4777",
            "region_id": "15",
            "sort_by": "created_at:desc",
            "filter_float_price:from": "200",
            "filter_float_price:to": "700",
           
        }
        # Simulate a response from the OLX API
        response = requests.get("https://www.olx.pt/api/v1/offers/", params=search_params)

        # Act
        # Call the function
        search_apartments()

        # Assert
        # Check that a NotifiedAd was created for each apartment
        self.assertEqual(NotifiedAd.objects.count(), 11)
        self.assertEqual(NotifiedAd.objects.first().ad_id, '1')
        self.assertEqual(NotifiedAd.objects.last().ad_id, '11')
