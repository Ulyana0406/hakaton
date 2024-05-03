from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import permissions
from .models import Profiles
from .serializers import ProfilesSerializer
from django.contrib.auth import authenticate, login

class UserInfo(APIView):
    def get(self, req:Request):
        user = req.GET.get('pk')
        if not user: 
            if req.user.is_authenticated:
                profile = req.user.profile
            else:
                return Response({
                    'result': None,
                    'description': 'Не заллогинен'
                }, status=403)
        else:
            profile = Profiles.objects.get(pk=user)
        data = ProfilesSerializer(profile).data
        return Response({
            'result': data,
            'description': 'ok'
        })
    
    def post(self, req:Request):
        userlogin = req.data['login']
        password = req.data['password']
        user = authenticate(username=userlogin, password=password)
        if user:
            login(req, user)
            return Response({
                'result': ProfilesSerializer(user.profile).data,
                'description': 'ok'
            })
        else:
            return Response({
                    'result': None,
                    'description': 'Не существует пользователя'
                }, status=403)
        #ProfilesSerializer(qweryset, many=True)
        #api для всех приложений
        #post на создание новых объектов