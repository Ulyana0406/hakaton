from rest_framework import serializers
from .models import Projects, Project_Subscribers, Comments, TypeProjects

class CommentsSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta: 
        model = Comments
        fields = [
            'id',  
            'user', 
            'comment', 
            'datetime'
        ]

class Project_SubscribersSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = Project_Subscribers
        fields = [
            'id', 
            'user',
            'status'
        ]

class TypeProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeProjects
        fields = [
            'id', 
            'name_type', 
        ]

class ProjectsSerializer(serializers.ModelSerializer):
    project_type = TypeProjectsSerializer()

    class Meta:
        model = Projects
        fields = [
            'id',
            'name', 
            'description', 
            'project_type',
        ]

class ProjectsDetailSerializer(serializers.ModelSerializer):
    project_type = TypeProjectsSerializer()  
    project_comments = serializers.SerializerMethodField()
    isowner = serializers.SerializerMethodField()
    project_subscribers = serializers.SerializerMethodField()

    def get_isowner(self, instance):
        return instance.author == self.context['request'].user.profile
    class Meta:
        model = Projects
        fields = [
            'id',
            'name', 
            'description', 
            'avatar_project', 
            'author', 
            'extra_data',  # Corrected by adding a comma here
            'isowner',
            'project_type',
            'project_comments',
            'project_subscribers'
        ]
