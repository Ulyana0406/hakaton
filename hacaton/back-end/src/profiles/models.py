from django.db import models
from django.contrib.auth.models import User

class Universitys(models.Model):
    class Meta:
        verbose_name = 'Университет'
        verbose_name_plural = 'Университеты'
    name = models.CharField(max_length=100, default='Не указано')

class Specialitys(models.Model):
    class Meta:
        verbose_name = 'Специальность'
        verbose_name_plural = 'Специальности'
    name = models.CharField(max_length=100, 
                            default='Не указано', 
                            verbose_name='Название специальности')
    university = models.ForeignKey(Universitys, 
                                   on_delete=models.CASCADE, 
                                   verbose_name='Университет')

class Departament(models.Model):
    class Meta:
        verbose_name = 'Кафедру'
        verbose_name_plural = 'Кафедры'
    university = models.ForeignKey(Universitys, 
                                   on_delete=models.CASCADE,  
                                   verbose_name='Университет')
    name = models.CharField(max_length=100, 
                            default='Не указано', 
                            verbose_name='Название кафедры')

class Profiles(models.Model):
    class Meta:
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'
    TYPES = (
        ('Студент', 'Студент'),
        ('Преподаватель', 'Преподаватель'),
        ('Бизнес', 'Бизнес')
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile', verbose_name='Логин')
    type = models.CharField(max_length=100, choices=TYPES, verbose_name='Тип учетной записи')
    firstname = models.CharField(max_length=100, verbose_name='Фамилия')
    secondname = models.CharField(max_length=100, verbose_name='Имя')
    therename = models.CharField(max_length=100, verbose_name='Отчество')

class Teachers(models.Model):
    class Meta:
        verbose_name = 'Учителя'
        verbose_name_plural = 'Учителей'
    
    profile = models.OneToOneField(Profiles, 
                                   on_delete=models.CASCADE, 
                                   related_name='teacher_data', 
                                   verbose_name='Логин')
    university = models.ForeignKey(Universitys, 
                                   on_delete=models.CASCADE, 
                                   verbose_name='Университет')
    department = models.ForeignKey(Departament, 
                                   on_delete=models.CASCADE, 
                                   verbose_name='Кафедры')
    position = models.IntegerField()

class Students(models.Model):
    class Meta:
        verbose_name = 'Студент'
        verbose_name_plural = 'Студенты'
    profile = models.OneToOneField(Profiles, 
                                   on_delete=models.CASCADE, 
                                   related_name='student_data', 
                                   verbose_name='Логин')
    university = models.ForeignKey(Universitys, 
                                   on_delete=models.CASCADE, 
                                   verbose_name='Университет')
    speciality = models.ForeignKey(Specialitys, 
                                   on_delete=models.CASCADE, 
                                   verbose_name='Специальность')

class Busineses(models.Model):
    class Meta:
        verbose_name = 'Бизнес'
        verbose_name_plural = 'Бизнесы'
    profile = models.OneToOneField(Profiles, on_delete=models.CASCADE, 
                                   related_name='business_data', 
                                   verbose_name='Логин')
    name_company = models.CharField(max_length=100, 
                                    verbose_name='Название компании')
    inn_company = models.IntegerField(verbose_name='ИНН компании')
    possition = models.CharField(max_length=100, 
                                 verbose_name='Должность')
