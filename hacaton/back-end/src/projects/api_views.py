from rest_framework.viewsets import ViewSet
from django.shortcuts import get_object_or_404
from .models import Projects, Subscribers, Comments
from .serializers import CommentsSerializers, SubscribersSerializers, ProjectsSerialiazers
from rest_framework.request import Request
from rest_framework.response import Response

class Projects(ViewSet):
    queryset = Projects.objects.all()
    def GET_list(self, req:Request):
        serializer = ProjectsSerialiazers(self.queryset, many=True)
        return Response({
            'result': serializer.data,
            'description': 'ok'
        })
    def GET_retrieve(self, req:Request, pk=None):
        item = get_object_or_404(self.queryset, pk=pk)
        serializer = ProjectsSerialiazers(item)
        return Response({
            'result': serializer.data,
            'description': 'ok'
        })