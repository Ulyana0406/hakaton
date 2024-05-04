from rest_framework import serializers
from .models import Projects, Subscribers, Comments

class CommentsSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Comments
        fields = ('pk', 'project', 'user', 'comment', 'datetime')

class SubscribersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Subscribers
        fields = ('pk', 'project', 'user')

class ProjectsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('pk', 'name', 'description', 'author', 'extra_data')