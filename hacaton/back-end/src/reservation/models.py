from django.db import models
from event.models import Event

class Corpuses(models.Model):
    name = models.CharField(max_length=100)

class Auditories(models.Model):
    name = models.CharField(max_length=100)
    corpus = models.ForeignKey(Corpuses, on_delete=models.CASCADE)

class Reservations(models.Model):
    location = models.ForeignKey(Auditories, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    datatime = models.DateTimeField()
