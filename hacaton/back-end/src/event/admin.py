from django.contrib import admin
from event.models import Event, ConnectEvent
admin.site.register(Event)
admin.site.register(ConnectEvent)