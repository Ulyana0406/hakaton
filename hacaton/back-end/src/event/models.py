from django.db import models
from profile import Profile


class Event(models.Model):
    type = models.CharField(max_length=100)
    users = models.ManyToManyField(Profile, related_name='events')
    comment = models.CharField(max_length=100)