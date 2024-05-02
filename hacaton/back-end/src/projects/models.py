from django.db import models

class Projects(models.Model):
    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'
    name = models.CharField(max_length=100, default='Не указано')
    description = models.CharField(max_length=100)