from rest_framework import serializers
from .models import Projects, Project_Subscribers, Comments, TypeProjects
from profiles.serializers import ShortProfilesSerializer

class CommentsSerializer(serializers.ModelSerializer):
    user = ShortProfilesSerializer()

    class Meta: 
        model = Comments
        fields = [
            'id',  
            'user', 
            'comment', 
            'datetime'
        ]

class Project_SubscribersSerializer(serializers.ModelSerializer):
    user = ShortProfilesSerializer()

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
            'title', 
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
            'avatar_project'
        ]

class ProjectsDetailSerializer(serializers.ModelSerializer):
    project_type = TypeProjectsSerializer(read_only=True)
    project_comments = CommentsSerializer(many=True, required=False, default=None)
    isowner = serializers.SerializerMethodField()
    project_subscribers = Project_SubscribersSerializer(many=True, required=False, default=None)
    avatar_project = serializers.SerializerMethodField()
    author = ShortProfilesSerializer()
    def get_avatar_project(self, instance:Projects):
        try:
            return instance.avatar_project.url
        except:
            return None
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
