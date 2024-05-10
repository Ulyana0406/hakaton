# Generated by Django 5.0.4 on 2024-05-10 07:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_alter_profiles_avatar'),
        ('projects', '0004_alter_projects_project_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project_subscribers',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_data', to='projects.projects', verbose_name='Проект'),
        ),
        migrations.AlterField(
            model_name='project_subscribers',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_subscribers', to='profiles.profiles', verbose_name='Подписчик'),
        ),
    ]