from django.db import models
from profiles.models import Profiles


class Event(models.Model):
    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'
    TYPES = (
        ('Академические', 'Академические'),
        ('Культурные и общественные', 'Культурные и общественные'),
        ('Спортивные', 'Спортивные'),
        ('Образовательные', 'Образовательные')
    )
    name = models.CharField(max_length=100, default='Не указано')
    type = models.CharField(max_length=100, choices=TYPES) 
    comment = models.CharField(max_length=100)

class ConnectEvent(models.Model):
    class Meta:
        verbose_name = 'Приосединение к мероприятию'
        verbose_name_plural = 'Присоединится к мероприятиям'
    STATES = (
        (0,"Ожидание"),
        (1,"Одобрено")
    )
    user = models.ForeignKey(Profiles, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    date_reg = models.DateTimeField(auto_now_add=True, verbose_name="Время регистрации")
    state = models.IntegerField(choices=STATES)