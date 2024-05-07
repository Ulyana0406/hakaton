from django.db import models
from profiles.models import Profiles
from coworking.models import Auditories

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
    name = models.CharField(
        max_length=100, 
        default='Не указано', 
        verbose_name='Название мероприятия'
    )
    type = models.IntegerField(
        'Тип мероприятия',
        choices=TYPES,
    ) 
    short_description = models.CharField(
        'Краткое описание',
        max_length=100
    )
    description = models.TextField('Описание')
    avatar = models.ImageField(
        'Картинка мероприятия',
        upload_to='avatar_event'
    )
    start_event = models.DateTimeField('Время проведения мероприятия')
    end_event = models.DateTimeField('Время окончания мероприятия')
    place_event =  models.ForeignKey(
        Auditories, 
        models.CASCADE, 
        verbose_name='Место проведения', 
        related_name='events', 
        null=True, 
        default=None
    )
    user = models.ForeignKey(
        Profiles, 
        models.CASCADE, 
        verbose_name='Логин')
    extra_data = models.JSONField(
        verbose_name='Дополнительные данные', 
        default=dict
    )

class Event_Subscribers(models.Model):
    class Meta:
        verbose_name = 'Подписчика'
        verbose_name_plural = 'Подписки'
    STATUS = (
        (0, 'Ожидание'),
        (1, 'Подтверждена'),
        (2, 'Отклонена')
    )
    event = models.ForeignKey(
        Event, 
        on_delete=models.CASCADE, 
        verbose_name='Проект', 
        related_name='event_subscribers'
    )
    user = models.ForeignKey(
        Profiles, 
        on_delete=models.CASCADE, 
        verbose_name='Подписчик', 
        default=None, 
        null=True,   
    )
    status = models.IntegerField('Стутус регистрации', choices=STATUS, default=0)

# class VenueEvent(models.Model):
#     class Meta:
#         verbose_name = 'Место проведения мероприятия'
#         verbose_name_plural = 'Места проведения мероприятий'

#     event = models.ForeignKey(Event, on_delete=models.CASCADE,
#                               verbose_name='Мероприятие',
#                               related_name='venues')
#     auditory = models.ForeignKey(Auditories, on_delete=models.CASCADE,
#                                  verbose_name='Аудитория',
#                                  related_name='events')
#     start_time = models.DateTimeField(verbose_name='Время начала мероприятия')
#     end_time = models.DateTimeField(verbose_name='Время окончания мероприятия')

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
    state = models.IntegerField(choices=STATES, default=0)