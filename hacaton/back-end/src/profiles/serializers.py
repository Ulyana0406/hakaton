from rest_framework import serializers
from .models import Profiles

class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profiles
        field = ('id', 'user', 'type', 'firstname', 'secondname', 'therename')