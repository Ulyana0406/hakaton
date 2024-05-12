# Generated by Django 5.0.4 on 2024-05-07 18:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TypeProjects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_type', models.IntegerField(choices=[(0, 'Коммерческие'), (1, 'StartApp'), (2, 'Образовательные'), (3, 'Творческие')], verbose_name='Тип проекта')),
            ],
            options={
                'verbose_name': 'Тип проекта',
                'verbose_name_plural': 'Типы проектов',
            },
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('avatar_project', models.ImageField(upload_to='project_avatar', verbose_name='Превью проекта')),
                ('extra_data', models.JSONField(default=dict, verbose_name='Дополнительные данные')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile_data', to='profiles.profiles', verbose_name='Автор проекта')),
                ('project_type', models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='projects.typeprojects', verbose_name='Тип проекта')),
            ],
            options={
                'verbose_name': 'Проект',
                'verbose_name_plural': 'Проекты',
            },
        ),
        migrations.CreateModel(
            name='Project_Subscribers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.IntegerField(choices=[(0, 'Ожидание'), (1, 'Подтверждена'), (2, 'Отклонена')], default=1, verbose_name='Стутус регистрации')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.profiles', verbose_name='Подписчик')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_subscribers', to='projects.projects', verbose_name='Проект')),
            ],
            options={
                'verbose_name': 'Подписчика',
                'verbose_name_plural': 'Подписки',
            },
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(max_length=100, verbose_name='Комментарий')),
                ('datetime', models.DateTimeField(auto_now_add=True, verbose_name='Время комментария')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.profiles', verbose_name='Логин')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_comments', to='projects.projects', verbose_name='Проект')),
            ],
            options={
                'verbose_name': 'Комментарий к проекту',
                'verbose_name_plural': 'Комментарии проектов',
            },
        ),
    ]
