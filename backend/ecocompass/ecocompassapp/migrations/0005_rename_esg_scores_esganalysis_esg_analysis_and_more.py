# Generated by Django 5.1.6 on 2025-02-24 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecocompassapp', '0004_remove_esganalysis_environment_score_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='esganalysis',
            old_name='esg_scores',
            new_name='esg_analysis',
        ),
        migrations.AddField(
            model_name='esganalysis',
            name='esg_score',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
    ]
