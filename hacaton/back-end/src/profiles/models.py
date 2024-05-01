from django.db import models
from django.contrib.auth.models import User

class Universitys(models.Model):
    name = models.CharField(max_length=100, default='Не указано')

class Specialitys(models.Model):
    name = models.CharField(max_length=100, default='Не указано')
    university = models.ForeignKey(Universitys, on_delete=models.CASCADE, related_name='specialities')

class Profiles(models.Model):
    TYPES = (
        ('Студент', 'Студент'),
        ('Преподаватель', 'Преподаватель'),
        ('Бизнес', 'Бизнес')
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    type = models.CharField(max_length=100, choices=TYPES)
    firstname = models.CharField(max_length=100)
    secondname = models.CharField(max_length=100)
    therename = models.CharField(max_length=100)

class Students(models.Model):
    profile = models.OneToOneField(Profiles, on_delete=models.CASCADE, related_name='student_data')
    university = models.ForeignKey(Universitys, on_delete=models.CASCADE)
    speciality = models.ForeignKey(Specialitys, on_delete=models.CASCADE)

class Busineses(models.Model):
    profile = models.OneToOneField(Profiles, on_delete=models.CASCADE, related_name='business_data')
    name_company = models.CharField(max_length=100)
    inn_company = models.IntegerField()
    possition = models.CharField(max_length=100)
