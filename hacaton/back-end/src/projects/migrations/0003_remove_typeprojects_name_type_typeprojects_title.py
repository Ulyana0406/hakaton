# Generated by Django 5.0.4 on 2024-05-07 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_alter_projects_avatar_project'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='typeprojects',
            name='name_type',
        ),
        migrations.AddField(
            model_name='typeprojects',
            name='title',
            field=models.CharField(default='Коммерческие', max_length=100, verbose_name='Название'),
            preserve_default=False,
        ),
    ]