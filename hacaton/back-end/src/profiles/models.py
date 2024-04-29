from django.db import models

class University(models.Model):
    name = models.CharField(max_length=100)

class Speciality(models.Model):
    name = models.CharField(max_length=100)

class TypeUser(models.Model):
    name = models.CharField(max_length=100)

class Profile(models.Model):
    firstname = models.CharField(max_length=100)
    secondname = models.CharField(max_length=100)
    therename = models.CharField(max_length=100)
    type = models.ForeignKey(TypeUser, on_delete=models.CASCADE)

class Student(Profile):
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    speciality = models.ForeignKey(Speciality, on_delete=models.CASCADE)

class Business(Profile):
    name_company = models.CharField(max_length=100)
    inn_company = models.IntegerField()
