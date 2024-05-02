from django.db import models
from profiles.models import Profiles

class Projects(models.Model):
    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'
    name = models.CharField(max_length=100, default='Не указано')
    description = models.CharField(max_length=100)

class Comments(models.Model):
    class Meta:
        verbose_name = 'Комментарий к проекту'
        verbose_name_plural = 'Комментарии проектов'
    user = models.ForeignKey(Profiles, on_delete=models.CASCADE, verbose_name='Логин')
    comment = models.CharField(max_length=100, verbose_name='Комментарий') 
    datetime = models.DateTimeField()
    