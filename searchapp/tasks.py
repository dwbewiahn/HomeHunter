
import requests
import json
from datetime import datetime, timedelta
from celery import shared_task
from django.core.mail import send_mail


@shared_task
def search_apartments():
    from .models import SearchFilter, NotifiedAd

    all_search_filters = SearchFilter.objects.all()
    
    for search_filter in all_search_filters: 

        search_params = search_filter.to_dict()

        response = requests.get("https://www.olx.pt/api/v1/offers/", params=search_params)
        data = json.loads(response.text)
        apartments = data['data']

        # Iterate over the apartments
        for apartment in apartments:
                if is_new_apartment(apartment):
                    # Check if this apartment has already been notified
                    if NotifiedAd.objects.filter(search_filter=search_filter, ad_id=apartment['id']).exists():
                        continue  # Skip to the next apartment

                    # If the apartment is new and has not been notified, create a new NotifiedAd
                    NotifiedAd.objects.create(search_filter=search_filter, ad_id=apartment['id'])
                    # Send an email to the user
                    # send_mail(
                    #     'New apartment found!',
                    #     f'We found a new apartment that matches your search criteria! You can view it here: {apartment["url"]}',
                    #     'House Hunter TEAM',
                    #     [search_filter.user.email],
                    #     fail_silently=False,
                    # )
                    print(search_filter.user.email)
      


def is_new_apartment(apartment):
    last_refresh_time = datetime.fromisoformat(apartment['last_refresh_time'][:-6])  # remove timezone offset
    # created_time = datetime.fromisoformat(apartment['created_time'][:-6])  # remove timezone offset
    now = datetime.now()
    delta = now - last_refresh_time
    search_window = timedelta(minutes=600)
    # days = delta.days
    # hours, remainder = divmod(delta.seconds, 3600)
    # minutes, _ = divmod(remainder, 60)
    # delta_created = now - created_time
    # days_created = delta_created.days
    if delta < search_window :
        return True
    else:
        return False
        
    
    ##To start the task use : 
    # redis-server (redis-cli and PING to check if is working)
    # celery -A HomeHunter worker --loglevel=info
    # celery -A HomeHunter beat --loglevel=info

    

