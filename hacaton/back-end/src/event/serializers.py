from rest_framework import serializers
from .models import Event_Subscribers, Event, TypeEvents
from profiles.serializers import ShortProfilesSerializer
from coworking.serializers import AuditoriesSerializers


class TypeEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeEvents
        fields = (
            'id',
            'name'
        )

class Event_SubcribersSerializer(serializers.ModelSerializer):
    user = ShortProfilesSerializer()
    class Meta:
        model = Event_Subscribers
        fields = (
            'id',
            'user',
            'status'
        )

class EventPostSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    #type_event = TypeEventsSerializer()
    def create(self, validated_data):
        # Устанавливаем пользователя автоматически из контекста запроса
        print(self.context['request'].user.profile.id)
        validated_data['user'] = self.context['request'].user.profile
        return super().create(validated_data)

    class Meta:
        model = Event
        fields = ( 
            'name', 
            'type_event', 
            'short_description', 
            'description',
            'start_event', 
            'end_event',
            'place_event', 
            'user',
            'extra_data', 
        )

class EventsDetailSerializer(serializers.ModelSerializer):
    event_subscribers = Event_SubcribersSerializer(many=True, required=False)
    isowner = serializers.SerializerMethodField()
    issub = serializers.SerializerMethodField()
    avatar = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()
    place_event = AuditoriesSerializers()
    type_event = TypeEventsSerializer()
    def get_user(self, instance:Event):
        return ShortProfilesSerializer(instance.user).data
    def get_issub(self, instance:Event):
        user = instance.event_subscribers.filter(user=self.context['request'].user.profile)
        return bool(user)
    def get_isowner(self, instance:Event):
        try:
            return instance.user == self.context['request'].user.profile
        except:
            return False

    def get_avatar(self, instance:Event):
        try:
            return instance.avatar.url
        except:
            return None
    
    class Meta:
        model = Event
        fields = (
            'id', 
            'name', 
            'type_event', 
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
    type_event = TypeEventsSerializer()
    def get_issub(self, instance:Event):
        try:
            user = instance.event_subscribers.filter(user=self.context['request'].user.profile)
        except:
            user = 0
        return bool(user)
    
    class Meta:
        model = Event
        fields = (
            'id', 
            'name', 
            'type_event',
            'short_description', 
            'start_event', 
            'avatar', 
            'issub'
        )
