from rest_framework import serializers
from .models import *

class BibliographySerializer(serializers.ModelSerializer):
    pub_type = serializers.SlugRelatedField(slug_field='title', read_only=True)
    class Meta:
        model = Bibliography
        fields = ['__all__']
