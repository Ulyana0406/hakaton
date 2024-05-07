# Generated by Django 5.0.4 on 2024-05-06 20:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0005_event_end_event_event_extra_data_event_place_event_and_more'),
        ('profiles', '0005_alter_profiles_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event_Subscribers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_subscribers', to='event.event', verbose_name='Проект')),
                ('user', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='profiles.profiles', verbose_name='Подписчик')),
            ],
            options={
                'verbose_name': 'Подписчика',
                'verbose_name_plural': 'Подписки',
            },
        ),
    ]
