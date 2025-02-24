# Generated by Django 5.1.6 on 2025-02-23 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecocompassapp', '0003_esganalysis'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='esganalysis',
            name='environment_score',
        ),
        migrations.RemoveField(
            model_name='esganalysis',
            name='esg_score',
        ),
        migrations.RemoveField(
            model_name='esganalysis',
            name='governance_score',
        ),
        migrations.RemoveField(
            model_name='esganalysis',
            name='social_score',
        ),
        migrations.AddField(
            model_name='esganalysis',
            name='esg_scores',
            field=models.JSONField(default={}),
            preserve_default=False,
        ),
    ]
