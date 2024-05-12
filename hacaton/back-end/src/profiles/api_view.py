from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework import permissions
from .models import Profiles
from .serializers import ProfilesSerializer, ShortProfilesSerializer
from django.contrib.auth import authenticate, login
from core.settings import NoCSRF, BaseAuthentication


class UserList(ViewSet):
    """
    Отображения всех пользователей с фильтрами
    """
    def list(self, req:Request):
        queryset = Profiles.objects.all()
        profile_type = req.GET.get('profile_type')
        if profile_type:
            try:
                profile_type = int(profile_type)
                queryset = queryset.filter(type=profile_type)
            except:
                return Response({'result': [], 
                                 'description': 'Некорректный тип'}, 
                                 status=400)
        
        return Response({
            'result': ProfilesSerializer(queryset, many=True).data,
            'description': 'ok'
        })


class UserInfo(APIView):
    def get(self, req: Request):
        user_id = req.GET.get('user_id')
        if not user_id: 
            if req.user.is_authenticated:
                profile = req.user.profile
            else:
                return Response({
                    'result': None,
                    'description': 'Не заллогинен'
                }, status=status.HTTP_403_FORBIDDEN)
        else:
            profile = get_object_or_404(Profiles, pk=user_id)

        if req.GET.get('full_info') == "yes":
            data = ProfilesSerializer(profile).data
        else:
            data = ShortProfilesSerializer(profile).data
            
        return Response({
            'result': data,
            'description': 'ok'
        })
    
    def post(self, req: Request):
        username = req.data.get('user_login')
        password = req.data.get('user_password')
        user = authenticate(username=username, password=password)
        if user:
            login(req, user)
            return Response({
                'result': ShortProfilesSerializer(user.profile).data,
                'description': 'ok'
            })
        else:
            return Response({
                'result': None,
                'description': 'Не существует пользователя'
            }, status=status.HTTP_403_FORBIDDEN)
        #ProfilesSerializer(qveryset, many=True)
        #api для всех приложений
        #post на создание новых объектов