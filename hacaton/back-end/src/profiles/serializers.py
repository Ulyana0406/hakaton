from rest_framework import serializers
from .models import *
from library.serializer import BibliographySerializer
from event.models import Event_Subscribers
from projects.models import Projects, Project_Subscribers
class EventSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    id = serializers.SerializerMethodField()
    class Meta:
        model = Event_Subscribers
        fields = [
            'id',
            'title'
        ]
    def get_id(self, instance:Event_Subscribers):
        return instance.event.id 
    def get_title(self, instance:Event_Subscribers):
        return instance.event.name

class ProjectsSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    id = serializers.SerializerMethodField()
    class Meta:
        model = Project_Subscribers
        fields = [
            'id',
            'title'
        ]
    def get_id(self, instance:Project_Subscribers):
        return instance.project.id 
    def get_title(self, instance:Project_Subscribers):
        return instance.project.name


class UniversitySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Universitys
        fields = ['id', 'name']

class SpecialitySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Specialitys
        fields = ['id', 'name']

class StudentsSerializer(serializers.ModelSerializer):
    university = UniversitySerializer()
    speciality = SpecialitySerializer()
    publications = serializers.SerializerMethodField()
    events = serializers.SerializerMethodField()
    projects = serializers.SerializerMethodField()
    class Meta:
        model = Students
        fields = ('university', 'speciality', 'publications', 'events', 'projects')
    def get_publications(self, instance:Students):
        publications = instance.profile.profile_publications.all()
        return BibliographySerializer(publications, many=True).data
    def get_events(self, instance:Students):
        events = instance.profile.event_profile.all()
        return EventSerializer(events, many=True).data
    def get_projects(self, instance:Students):
        project = instance.profile.project_subscribers.all()
        return ProjectsSerializer(project, many=True).data
class BusinesesSerializer(serializers.ModelSerializer):
    events = serializers.SerializerMethodField()
    projects = serializers.SerializerMethodField()
    class Meta:
        model = Busineses
        fields = ( 'name_company', 'inn_company', 'possition', 'events', 'projects')
    def get_events(self, instance:Busineses):
        events = instance.profile.event_profile.all()
        return EventSerializer(events, many=True).data
    def get_projects(self, instance:Busineses):
        project = instance.profile.project_subscribers.all()
        return ProjectsSerializer(project, many=True).data   
class TeachersSerializer(serializers.ModelSerializer):
    publications = serializers.SerializerMethodField()
    projects = serializers.SerializerMethodField()
    events = serializers.SerializerMethodField()
    class Meta:
        model = Teachers
        fields = ('university', 'department', 'position', 'publications', 'events', 'projects')
    def get_publications(self, instance:Teachers):
        publications = instance.profile.profile_publications.all()
        return BibliographySerializer(publications, many=True).data
    def get_events(self, instance:Teachers):
        events = instance.profile.event_profile.all()
        return EventSerializer(events, many=True).data
    def get_projects(self, instance:Teachers):
        project = instance.profile.project_subscribers.all()
        return ProjectsSerializer(project, many=True).data
class ShortProfilesSerializer(serializers.ModelSerializer):
    avatar = serializers.SerializerMethodField()
    class Meta:
        model = Profiles
        fields = [
            'id',
            'type', 
            'firstname', 
            'secondname', 
            'therename',
            'avatar',
        ]
    def get_avatar(self, instance:Profiles):
        try:
            return instance.avatar.url
        except:
            return None
        
class ProfilesSerializer(ShortProfilesSerializer):
    extra_data = serializers.SerializerMethodField()
    class Meta:
        model = Profiles
        fields = ('id',  
                 'type', 
                 'firstname', 
                 'secondname', 
                 'therename',
                 'avatar',
                 'extra_data'
                )
        
    def get_extra_data(self, profile: Profiles):
        match profile.type:
            case 0: 
                return StudentsSerializer(profile.student_data).data
            case 2:
                return BusinesesSerializer(profile.business_data).data
            case 1:
                return TeachersSerializer(profile.teacher_data).data
