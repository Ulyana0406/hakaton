from django.contrib import admin
from .models import Projects, Comments, Subscribers
# Register your models here.

admin.site.register(Projects)
admin.site.register(Comments)
admin.site.register(Subscribers)
