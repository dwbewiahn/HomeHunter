# CONTROLLER
from django.shortcuts import render

from django.http import HttpResponse
from django.views import View

class HomeView(View):
    def get(self, request):
        return HttpResponse('Voce esta na pagina de procura')

