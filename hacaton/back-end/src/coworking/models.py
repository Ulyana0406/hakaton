from django.db import models
from profiles.models import Profiles
from reservation.models import Reservations

class CoworingReservations(models.Model):
    class Meta:
        verbose_name = 'Регистрацию коворгинга'
        verbose_name_plural = 'Регистрация коворгинга'
    profile = models.OneToOneField(Profiles, on_delete=models.CASCADE, related_name='profiles_data', verbose_name='Логин')
    location = models.OneToOneField(Reservations, on_delete=models.CASCADE, related_name='reserv_data', verbose_name='Помещение')
    datetime = models.DateTimeField(verbose_name='Время')

