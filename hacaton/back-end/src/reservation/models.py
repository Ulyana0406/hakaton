from django.db import models
from event.models import Event

class Corpuses(models.Model):
    class Meta:
        verbose_name = 'Корпус'
        verbose_name_plural = 'Корпуса'
    name = models.CharField(max_length=100, verbose_name='Корпус')

class Auditories(models.Model):
    class Meta:
        verbose_name = 'Аудиторию'
        verbose_name_plural = 'Аудитории'
    name = models.CharField(max_length=100, verbose_name='Аудитория')
    corpus = models.ForeignKey(Corpuses, on_delete=models.CASCADE, verbose_name='Корпус')

class Reservations(models.Model):
    class Meta:
        verbose_name = 'Бронирование'
        verbose_name_plural = 'Забронировать'
    location = models.ForeignKey(Auditories, on_delete=models.CASCADE, verbose_name='Аудитория')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name='Мероприятие')
    datatime = models.DateTimeField(verbose_name='Время')
