from django.db import models
from event.models import Event
from coworking.models import Auditories
from profiles.models import Profiles

class Reservations(models.Model):
    class Meta:
        verbose_name = 'Бронирование'
        verbose_name_plural = 'Забронировать'
    user = models.ForeignKey(Profiles, on_delete=models.CASCADE, verbose_name='Логин')
    location = models.ForeignKey(Auditories, on_delete=models.CASCADE, verbose_name='Аудитория')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name='Мероприятие')
    datatime = models.DateTimeField(verbose_name='Время')
