# Generated by Django 5.0.4 on 2024-05-02 21:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coworking', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Corpuses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Корпус')),
            ],
            options={
                'verbose_name': 'Корпус',
                'verbose_name_plural': 'Корпуса',
            },
        ),
        migrations.CreateModel(
            name='Auditories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Аудитория')),
                ('status', models.IntegerField(choices=[(0, 'Свободна'), (1, 'Забранирована')], verbose_name='Статус аудитории')),
                ('corpus', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='coworking.corpuses', verbose_name='Корпус')),
            ],
            options={
                'verbose_name': 'Аудиторию',
                'verbose_name_plural': 'Аудитории',
            },
        ),
        migrations.DeleteModel(
            name='CoworingReservations',
        ),
    ]