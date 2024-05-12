from rest_framework.viewsets import ViewSet
from rest_framework.views import APIView 
from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Projects, Project_Subscribers, Comments, TypeProjects
from profiles.models import Profiles
from .serializers import TypeProjectsSerializer,ProjectsDetailSerializer, CommentsSerializer, Project_SubscribersSerializer, ProjectsSerializer, TypeProjectsSerializer
from rest_framework.request import Request
from rest_framework.response import Response
from .filters import ProjectFilter, TypeProjectsFilter
from django_filters.rest_framework import DjangoFilterBackend
from core.settings import NoCSRF, BaseAuthentication

class ProjectsList(ViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

    def list(self, request):
        project_type_id = request.GET.get('type_project')

        if project_type_id:
            project_type = get_object_or_404(TypeProjects, id=project_type_id)
            self.queryset = self.queryset.filter(project_type=project_type)

        data = self.serializer_class(self.queryset, many=True, context={'request':request}).data
        return Response({
            'result': data,
            'description': 'ok'
        })

class ProjectApi(APIView):
    def get(self, request:Request):
        id_project = request.GET.get('id_project')
        if id_project:
            project = get_object_or_404(Projects, pk=id_project)
            if not project:
               return Response({
                'result': 'error',
                'description': 'Не найден проект по этому id'
            }) 
            data = ProjectsDetailSerializer(project, context={'request':request}).data
            return Response({
                'result': data,
                'description': 'ok'
            })
        
        return Response({
            'result': 'Error',
            'description': 'Не передан аргумент'
        }, 401) 
    def post(self, request):
        # Подготовка данных для сериализатора
        project_name = request.data['project_name']
        project_description = request.data['project_description']
        project_type_id = request.data['project_type_id']
        project_type = get_object_or_404(TypeProjects, pk=project_type_id)  
        project = Projects() 
        project.name = project_name
        project.description = project_description
        project.author = request.user.profile
        project.project_type = project_type
        project.save()
        return Response({
            'result': ProjectsDetailSerializer(project, context={'request':request}).data,
            'description': 'ok'
        })
    
class TypeProjectList(ViewSet):
    queryset = TypeProjects.objects.all()
    serializer_class = TypeProjectsSerializer
    def list(self, request):
        data = self.serializer_class(self.queryset, many=True).data
        return Response({
            'result': data,
            'description': 'ok'
        })
    
class SubscriberManage(APIView):
    def post(self, request:Request):
        '''
        post вытаскиваем id event и текущего пользователя
        создаем нового подписчика возвращаем результат
        '''
        id_project = request.data.get('project_id')
        id_user = request.data.get('user_id')
        project = get_object_or_404(Projects, pk=id_project)
        user = get_object_or_404(Profiles, pk=id_user)
        project_subscriber = Project_Subscribers()
        project_subscriber.project = project
        project_subscriber.user = user
        project_subscriber.save()
        return Response({
            'result': Project_SubscribersSerializer(project_subscriber).data,
            'description': 'ok'
        })
    
class CommentsManage(APIView):
    def post(self, request):
        project_id = request.data.get('project_id')
        project = get_object_or_404(Projects, pk=project_id)
        comment = request.data['comment']
        project_comment = Comments()
        project_comment.user = request.user.profile
        project_comment.comment = comment
        project_comment.project = project
        project_comment.save()
        return Response({
            'result':CommentsSerializer(project_comment).data,
            'description': 'ok'
        })