from django.db import models
from profiles.models import Profiles

class TypeProjects(models.Model):
    class Meta:
        verbose_name = 'Тип проекта'
        verbose_name_plural = 'Типы проектов'
    title = models.CharField(
        'Название',
        max_length=100
    )

class Projects(models.Model):
    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    avatar_project = models.ImageField(
        'Превью проекта', 
        upload_to='project_avatar', 
        null=True, 
        default=None,
        blank=True
    )
    author = models.ForeignKey(
        Profiles, 
        on_delete=models.CASCADE, 
        related_name='profile_data', 
        verbose_name='Автор проекта'
    )
    extra_data = models.JSONField(
        verbose_name='Дополнительные данные', 
        default=dict
    )
    project_type = models.ForeignKey(
        TypeProjects, 
        models.CASCADE,
        verbose_name='Тип проекта',
        default=0,
        related_name='project_type'
    )

class Comments(models.Model):
    class Meta:
        verbose_name = 'Комментарий к проекту'
        verbose_name_plural = 'Комментарии проектов'
    project = models.ForeignKey(
        Projects, models.CASCADE, 
        verbose_name='Проект', 
        related_name='project_comments'
    )
    user = models.ForeignKey(
        Profiles, 
        on_delete=models.CASCADE, 
        verbose_name='Логин'
    )
    comment = models.CharField(
        max_length=100, 
        verbose_name='Комментарий'
    ) 
    datetime = models.DateTimeField(
        auto_now_add=True, 
        verbose_name='Время комментария'
    )
    

class Project_Subscribers(models.Model):
    class Meta:
        verbose_name = 'Подписчика'
        verbose_name_plural = 'Подписки'
    STATUS = (
        (0, 'Ожидание'),
        (1, 'Подтверждена'),
        (2, 'Отклонена')
    )
    project = models.ForeignKey(
        Projects, 
        on_delete=models.CASCADE, 
        verbose_name='Проект', 
        related_name='project_data'
    )
    user = models.ForeignKey(
        Profiles, 
        on_delete=models.CASCADE, 
        verbose_name='Подписчик',
        related_name='project_subscribers'
    )
    status = models.IntegerField('Стутус регистрации', choices=STATUS, default=1)