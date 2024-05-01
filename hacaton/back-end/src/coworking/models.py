from django.db import models
from profiles.models import Profiles
from reservation.models import Reservations

class CoworingReservations(models.Model):
    profile = models.OneToOneField(Profiles, on_delete=models.CASCADE, related_name='profiles_data')
    location = models.OneToOneField(Reservations, on_delete=models.CASCADE, related_name='reserv_data')
    datetime = models.DateTimeField()

