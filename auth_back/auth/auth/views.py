from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
dic ={'user' : '12345'}

def index(request):
    return HttpResponse('<form></form>')
@csrf_exempt
def get_data(request):
    data = json.loads(request.body)
    if (data['password'] in dic.values() and dic[data['login']] == data['password']):
        return HttpResponse("Success")
    return HttpResponse("Authentication Failed")