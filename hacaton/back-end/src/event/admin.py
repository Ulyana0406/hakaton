from django.contrib import admin
from event.models import Event, ConnectEvent, Event_Subscribers
admin.site.register(Event)
admin.site.register(ConnectEvent)
admin.site.register(Event_Subscribers)