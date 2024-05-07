from rest_framework.viewsets import ViewSet
from rest_framework.views import APIView 
from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Projects, Project_Subscribers, Comments, TypeProjects
from .serializers import TypeProjectsSerializer,ProjectsDetailSerializer, CommentsSerializer, Project_SubscribersSerializer, ProjectsSerializer
from rest_framework.request import Request
from rest_framework.response import Response
from .filters import ProjectFilter, TypeProjectsFilter
from django_filters.rest_framework import DjangoFilterBackend

class ProjectsList(ViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    def list(self, request):
        data = self.serializer_class(self.queryset, many=True, context={'request':request}).data
        return Response({
            'result': data,
            'description': 'ok'
        })

class ProjectApi(APIView):
    def get(self, request:Request, pk=None):
        pk = request.GET.get('pk')
        if not pk:
           return Response({
            'result': 'Error',
            'description': 'Не передан аргумент'
        }, 401) 
        project = get_object_or_404(Projects, pk=pk)
        data = ProjectsDetailSerializer(project, context={'request':request}).data
        return Response({
            'result': data,
            'description': 'ok'
        })
    def post(self, request:Request):
        serializer = ProjectsDetailSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({
                'result':serializer.errors,
                'description': 'Ошибка валидации'
            }, 401)
        serializer.save()
        return Response({
            'result': serializer.data,
            'description': 'ok'
        })
    
class SubscriberManage(APIView):
    def post(self, request:Request):
        '''
        post вытаскиваем id event и текущего пользователя
        создаем нового подписчика возвращаем результат
        '''
        id_project = request.data['project_id']
        project = get_object_or_404(Projects, id_project)
        project_subscriber = Project_Subscribers()
        project_subscriber.project = project
        project_subscriber.user = request.user.profile
        project_subscriber.save()
        return Response({
            'result': Project_SubscribersSerializer(project_subscriber).data,
            'description': 'ok'
        })
    
class CommentsManage(APIView):
    def post(self, request, pk=None):
        if not pk:
            return
        project = get_object_or_404(Projects, pk=pk)
        comment = request.data['comment']
        project_comment = Comments()
        project_comment.user = request.user.profile
        project_comment.comment = comment


# class TypeProjectsViewSet(ModelViewSet):
#     queryset = TypeProjects.objects.all()
#     serializer_class = TypeProjectsSerializers
#     filter_backends = (DjangoFilterBackend,)
#     filterset_class = TypeProjectsFilter
    
#     def retrieve(self, request, name_type=None, *args, **kwargs):
#         # Фильтруем TypeProjects по name_type
#         type_projects = get_list_or_404(TypeProjects, name_type=name_type)

#         # Находим все проекты, связанные с этими типами проекта
#         projects = []
#         for tp in type_projects:
#             projects.extend(Projects.objects.filter(type_project=tp))

#         # Сериализуем найденные проекты
#         serializer = ProjectsSerializers(projects, many=True)
#         return Response({
#             'result': serializer.data,
#             'description': 'ok'
#         })
    
#     def create(self, request:Request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({
#                 'result': serializer.data,
#                 'description': 'ok'
#             }, status=status.HTTP_201_CREATED)
#         return Response({
#             'result': serializer.errors,
#             'description': 'Ошибка валидации'
#         }, status=status.HTTP_400_BAD_REQUEST)
    
#     def update(self, request, name_type=None, *args, **kwargs):
#         project = get_object_or_404(Projects, pk=name_type)
#         serializer = self.serializer_class(project, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({
#                 'result': serializer.data,
#                 'description': 'ok'
#             })
#         return Response({
#             'result': serializer.errors,
#             'description': 'Ошибка валидации'
#         }, status=status.HTTP_400_BAD_REQUEST)

#     def partial_update(self, request, name_type=None, *args, **kwargs):
#         return self.update(request, name_type, *args, **kwargs)
    
# class ProjectsViewSet(ModelViewSet):
#     queryset = Projects.objects.all()
#     serializer_class = ProjectsSerializers
#     filter_backends = (DjangoFilterBackend,)
#     filterset_class = ProjectFilter

#     def retrieve(self, request, pk=None, *args, **kwargs):
#         project = get_object_or_404(Projects, pk=pk)
#         serializer = self.serializer_class(project)
#         return Response({
#             'result': serializer.data,
#             'description': 'ok'
#         })

#     def create(self, request:Request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({
#                 'result': serializer.data,
#                 'description': 'ok'
#             }, status=status.HTTP_201_CREATED)
#         return Response({
#             'result': serializer.errors,
#             'description': 'Ошибка валидации'
#         }, status=status.HTTP_400_BAD_REQUEST)

#     def update(self, request, pk=None, *args, **kwargs):
#         project = get_object_or_404(Projects, pk=pk)
#         serializer = self.serializer_class(project, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({
#                 'result': serializer.data,
#                 'description': 'ok'
#             })
#         return Response({
#             'result': serializer.errors,
#             'description': 'Ошибка валидации'
#         }, status=status.HTTP_400_BAD_REQUEST)

#     def partial_update(self, request, pk=None, *args, **kwargs):
#         return self.update(request, pk, *args, **kwargs)
    
# class CommentViews(ModelViewSet):
#     queryset = Comments.objects.all()
#     serializer_class = CommentsSerializers

#     def get_queryset(self):
#         """
#         Возвращает QuerySet с отфильтрованными комментариями по ID проекта.
#         """
#         project_id = self.kwargs.get('project_id')
#         if project_id is not None:
#             return self.queryset.filter(project_id=project_id)
        
#         return self.queryset
#     def list(self, request, *args, **kwargs):
#         queryset = self.filter_queryset(self.get_queryset())
#         serializer = self.get_serializer(queryset, many=True)
#         return Response({
#             'result': serializer.data,
#             'description': 'ok'
#         })
    
# class SubscribersViews(ModelViewSet):
#     queryset = Subscribers.objects.all()
#     serializer_class = SubscribersSerializers

#     def get_queryset(self):
#         """
#         Возвращает QuerySet с отфильтрованными комментариями по ID проекта.
#         """
#         project_id = self.kwargs.get('project_id')
#         if project_id is not None:
#             return self.queryset.filter(project_id=project_id)
        
#         return self.queryset
#     def list(self, request, *args, **kwargs):
#         queryset = self.filter_queryset(self.get_queryset())
#         serializer = self.get_serializer(queryset, many=True)
#         return Response({
#             'result': serializer.data,
#             'description': 'ok'
#         })