# Generated by Django 5.0.4 on 2024-05-04 07:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0005_alter_profiles_type'),
        ('projects', '0009_alter_projects_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_data', to='profiles.profiles', verbose_name='Автор проекта'),
        ),
    ]