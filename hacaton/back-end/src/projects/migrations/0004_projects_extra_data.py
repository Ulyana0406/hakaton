# Generated by Django 5.0.4 on 2024-05-03 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_projects_author_subscribers'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='extra_data',
            field=models.JSONField(default='{}', verbose_name='Дополнительные данные'),
        ),
    ]