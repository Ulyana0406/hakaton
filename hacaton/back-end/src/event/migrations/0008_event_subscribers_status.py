# Generated by Django 5.0.4 on 2024-05-06 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0007_remove_event_comment_event_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='event_subscribers',
            name='status',
            field=models.IntegerField(choices=[(0, 'Ожидание'), (1, 'Подтверждена'), (2, 'Отклонена')], default=0, verbose_name='Стутус регистрации'),
        ),
    ]
