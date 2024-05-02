from rest_framework import serializers
from .models import Profiles, Students, Busineses

#3 модели Университет, специальность, преподаватель

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ('profile', 'university', 'speciality')

class BusinesesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Busineses
        fields = ('profile', 'name_company', 'inn_company', 'possition')

class ProfilesSerializer(serializers.ModelSerializer):
    # student_data = StudentsSerializer()
    # business_data = BusinesesSerializer()
    extra_data = serializers.SerializerMethodField()
    class Meta:
        model = Profiles
        fields = ('pk', 
                 'user', 
                 'type', 
                 'firstname', 
                 'secondname', 
                 'therename',
                 'extra_data'
                #  'student_data',
                #  'business_data',
                #  'profileteacher' - в скором
                )
    
    def get_extra_data(self, profile: Profiles):
        match profile.type:
            case 'Студент': 
                return StudentsSerializer(profile.student_data).data
            case 'Бизнес':
                return BusinesesSerializer(profile.business_data).data
