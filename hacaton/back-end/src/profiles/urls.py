from django.urls import path, include

urlpatterns = [
    path('', include('profiles.api_urls'))
]
