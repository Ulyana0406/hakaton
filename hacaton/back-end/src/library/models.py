from django.db import models
from profiles.models import Profiles

class TypeBibliography(models.Model):
    class Meta:
        verbose_name = 'Тип публикаций'
        verbose_name_plural = 'Типы публикаций'
    title = models.CharField(
        'Название типа',
        max_length=256
    )

class Bibliography(models.Model):
    class Meta:
        verbose_name = 'Публикация'
        verbose_name_plural = 'Публикации'
    title = models.CharField(
        'Название публикации',
        max_length=256
    )
    profile = models.ForeignKey(
        Profiles, 
        models.CASCADE,
        related_name='profile_publications',
        null=True,
        blank=True,
        default=None
    )
    pub_date = models.DateField(
        'Дата публикации',
        blank=True,
        null=True,
        default=None
    )
    pub_type = models.ForeignKey(
        TypeBibliography,
        models.CASCADE,
        related_name='publications'
    )
    pub_place = models.CharField(
        'Место публикации',
        max_length=100,
        blank=True,
        null=True,
        default=None
    )
    pub_url = models.URLField(
        'Ссылка на публикацию',
        blank=True,
        null=True
    )
    def __str__(self) -> str:
        return f'{self.title}, {self.profile}'