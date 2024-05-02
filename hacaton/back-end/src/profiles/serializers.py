from rest_framework import serializers
from .models import Profiles

class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profiles
        field = ('id', 'user', 'type', 'firstname', 'secondname', 'therename')

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profiles
        field = ('id', 'profile', 'university', 'speciality')

class BusinesesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profiles
        field = ('id', 'profile', 'name_company', 'inn_company', 'possition')