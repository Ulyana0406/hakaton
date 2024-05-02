from django.contrib import admin
from .models import Corpuses, Auditories, Reservations
# Register your models here.
admin.site.register(Corpuses)
admin.site.register(Auditories)
admin.site.register(Reservations)