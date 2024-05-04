from django.db import models
from profiles.models import Profiles


class Event(models.Model):
    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'
    TYPES = (
        (0, 'Академические'),
        (1, 'Культурные и общественные'),
        (2, 'Спортивные'),
        (3, 'Образовательные')
    )
    name = models.CharField(max_length=100, 
                            default='Не указано', 
                            verbose_name='Название мероприятия')
    type = models.IntegerField('Тип мероприятия',
                               choices=TYPES,) 
    comment = models.CharField(max_length=100)
    avatar = models.ImageField('Картинка мероприятия', upload_to='avatar_event')

class ConnectEvent(models.Model):
    class Meta:
        verbose_name = 'Приосединение к мероприятию'
        verbose_name_plural = 'Присоединится к мероприятиям'
    STATES = (
        (0,"Ожидание"),
        (1,"Одобрено")
    )
    user = models.ForeignKey(Profiles, 
                             on_delete=models.CASCADE)
    event = models.ForeignKey(Event, 
                              on_delete=models.CASCADE)
    date_reg = models.DateTimeField(auto_now_add=True, 
                                    verbose_name="Время регистрации")
    state = models.IntegerField(choices=STATES)