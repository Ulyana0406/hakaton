# Generated by Django 5.0.4 on 2024-05-10 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0004_alter_event_name_alter_event_subscribers_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='type',
            field=models.IntegerField(choices=[(0, 'Академические'), (1, 'Культурные и общественные'), (2, 'Спортивные'), (3, 'Образовательные')], default=None, verbose_name='Тип мероприятия'),
        ),
    ]
