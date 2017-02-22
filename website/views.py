from django.shortcuts import render
from django.http import HttpResponse

from datapools.quandl import quandl
import logging

logger = logging.getLogger(__name__)
# Create your views here.
def index(request):
    # data = quandl.get("WIKI/FB")
    # logger.error("data")
    return render(request, 'website/index.html')
