from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('test_login', view=views.test_auth)
]
