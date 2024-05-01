from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.contrib.auth import authenticate, login

def test_auth(req: HttpRequest):
    print(req.user)
    user = authenticate(username = req.GET.get('username'), password = req.GET.get('password'))
    login(req, user)
    print(user)
    return HttpResponse('ok')