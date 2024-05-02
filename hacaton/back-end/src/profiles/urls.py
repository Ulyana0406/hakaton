from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('test_login', view=views.test_auth),
    path('api/', include('profiles.api_urls'))
]
