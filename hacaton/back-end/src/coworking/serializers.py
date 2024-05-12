from rest_framework import serializers
from .models import Corpuses, Auditories

class CorpusesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Corpuses
        fields = ('id','name')

class AuditoriesSerializers(serializers.ModelSerializer):
    corpus = CorpusesSerializers()
    class Meta:
        model = Auditories
        fields = ['id','name', 'corpus', 'capacity']