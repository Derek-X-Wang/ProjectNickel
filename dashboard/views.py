from django.shortcuts import render
from django.http import HttpResponse

from datapools.quandl import quandl
import logging

logger = logging.getLogger(__name__)
# Create your views here.
def index(request):
    return render(request, 'dashboard/index.html')
