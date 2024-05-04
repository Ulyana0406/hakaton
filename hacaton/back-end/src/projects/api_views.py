from rest_framework.viewsets import ModelViewSet 
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Projects, Subscribers, Comments
from .serializers import CommentsSerializers, SubscribersSerializers, ProjectsSerializers
from rest_framework.request import Request
from rest_framework.response import Response
from .filters import ProjectFilter
from django_filters.rest_framework import DjangoFilterBackend

class ProjectsViewSet(ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializers
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ProjectFilter

    def retrieve(self, request, pk=None, *args, **kwargs):
        project = get_object_or_404(Projects, pk=pk)
        serializer = self.serializer_class(project)
        return Response({
            'result': serializer.data,
            'description': 'ok'
        })

    def create(self, request:Request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'result': serializer.data,
                'description': 'ok'
            }, status=status.HTTP_201_CREATED)
        return Response({
            'result': serializer.errors,
            'description': 'Ошибка валидации'
        }, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None, *args, **kwargs):
        project = get_object_or_404(Projects, pk=pk)
        serializer = self.serializer_class(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'result': serializer.data,
                'description': 'ok'
            })
        return Response({
            'result': serializer.errors,
            'description': 'Ошибка валидации'
        }, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None, *args, **kwargs):
        return self.update(request, pk, *args, **kwargs)
    
class CommentViews(ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializers

    def get_queryset(self):
        """
        Возвращает QuerySet с отфильтрованными комментариями по ID проекта.
        """
        project_id = self.kwargs.get('project_id')
        if project_id is not None:
            return self.queryset.filter(project_id=project_id)
        
        return self.queryset
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'result': serializer.data,
            'description': 'ok'
        })
    
class SubscribersViews(ModelViewSet):
    queryset = Subscribers.objects.all()
    serializer_class = SubscribersSerializers

    def get_queryset(self):
        """
        Возвращает QuerySet с отфильтрованными комментариями по ID проекта.
        """
        project_id = self.kwargs.get('project_id')
        if project_id is not None:
            return self.queryset.filter(project_id=project_id)
        
        return self.queryset
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'result': serializer.data,
            'description': 'ok'
        })