from rest_framework import serializers
from .models import Profiles, Students, Busineses, Teachers

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('profile', 'university', 'speciality')

class BusinesesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Busineses
        fields = ('profile', 'name_company', 'inn_company', 'possition')

class TeachersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = ('profile', 'university', 'department', 'position')

class ProfilesSerializer(serializers.ModelSerializer):
    extra_data = serializers.SerializerMethodField()
    avatar = serializers.SerializerMethodField()
    class Meta:
        model = Profiles
        fields = ('id', 
                 'user', 
                 'type', 
                 'firstname', 
                 'secondname', 
                 'therename',
                 'avatar',
                 'extra_data'
                )
    def get_avatar(self, instance:Profiles):
        try:
            return instance.avatar.url
        except:
            return None
    def get_extra_data(self, profile: Profiles):
        match profile.type:
            case 'Студент': 
                return StudentsSerializer(profile.student_data).data
            case 'Бизнес':
                return BusinesesSerializer(profile.business_data).data
            case 'Преподаватель':
                return TeachersSerializer(profile.teacher_data).data
