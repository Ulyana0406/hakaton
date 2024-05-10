# Generated by Django 5.0.4 on 2024-05-10 07:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0003_alter_event_avatar'),
        ('profiles', '0002_alter_profiles_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Название мероприятия'),
        ),
        migrations.AlterField(
            model_name='event_subscribers',
            name='user',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='event_profile', to='profiles.profiles', verbose_name='Подписчик'),
        ),
    ]