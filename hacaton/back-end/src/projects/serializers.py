from rest_framework import serializers
from .models import Projects, Subscribers, Comments

class CommentsSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Comments
        fields = ('user', 'comment', 'datatime')

class SubscribersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Subscribers
        fields = ('project', 'user')

class ProjectsSerialiazers(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('pk', 'name', 'description', 'author')