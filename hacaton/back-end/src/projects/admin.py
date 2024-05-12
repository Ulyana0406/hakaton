from django.contrib import admin
from .models import Projects, Comments, Project_Subscribers, TypeProjects
# Register your models here.

admin.site.register(Projects)
admin.site.register(Comments)
admin.site.register(Project_Subscribers)
admin.site.register(TypeProjects)
