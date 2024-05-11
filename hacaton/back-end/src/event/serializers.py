from rest_framework import serializers
from .models import *
from profiles.serializers import ProfilesSerializer


class Event_SubcribersSerializer(serializers.ModelSerializer):
    user = ProfilesSerializer()
    class Meta:
        model = Event_Subscribers
        fields = (
            'id',
            'user',
            'status'
        )

class EventsDetailSerializer(serializers.ModelSerializer):
    event_subscribers = Event_SubcribersSerializer(many=True, required=False)
    isowner = serializers.SerializerMethodField()
    issub = serializers.SerializerMethodField()
    avatar = serializers.SerializerMethodField()
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    def create(self, validated_data):
        # Устанавливаем пользователя автоматически из контекста запроса
        validated_data['user'] = self.context['request'].user.profile
        return super().create(validated_data)
    def get_issub(self, instance:Event):
        user = instance.event_subscribers.filter(user=self.context['request'].user.profile)
        return bool(user)
    def get_isowner(self, instance:Event):
        return instance.user == self.context['request'].user.profile
    def get_avatar(self, instance:Event):
        try:
            return instance.avatar.url
        except:
            return None
    
    class Meta:
        model = Event
        fields = ('id', 
                  'name', 
                  'type', 
                  'short_description', 
                  'description',
                  'start_event', 
                  'end_event',
                  'avatar', 
                  'place_event', 
                  'user',
                  'isowner',
                  'extra_data', 
                  'issub',
                  'event_subscribers'
                )

class EventsSerializer(serializers.ModelSerializer):
    issub = serializers.SerializerMethodField()
    def get_issub(self, instance:Event):
        user = instance.event_subscribers.filter(user=self.context['request'].user.profile)
        return bool(user)
    
    class Meta:
        model = Event
        fields = ('id', 
                  'name', 
                  'short_description', 
                  'start_event', 
                  'avatar', 
                  'issub'
                )