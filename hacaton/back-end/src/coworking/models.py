from django.db import models

class Corpuses(models.Model):
    class Meta:
        verbose_name = 'Корпус'
        verbose_name_plural = 'Корпуса'
    name = models.CharField(max_length=100, verbose_name='Корпус')

class Auditories(models.Model):
    class Meta:
        verbose_name = 'Аудиторию'
        verbose_name_plural = 'Аудитории'
    STATUS = (
        (0, "Свободна"),
        (1, "Забранирована")
    )
    name = models.CharField(max_length=100, verbose_name='Аудитория')
    corpus = models.ForeignKey(Corpuses, on_delete=models.CASCADE, verbose_name='Корпус')
    status = models.IntegerField(choices=STATUS, verbose_name='Статус аудитории')