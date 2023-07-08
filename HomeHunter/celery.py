import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'HomeHunter.settings')

app = Celery('HomeHunter')


app.config_from_object('django.conf:settings', namespace='CELERY')


app.autodiscover_tasks(['HomeHunter'])
