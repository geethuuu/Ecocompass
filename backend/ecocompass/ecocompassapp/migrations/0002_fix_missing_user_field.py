from django.db import migrations

class Migration(migrations.Migration):

    dependencies = [
        ('ecocompassapp', '0001_initial'),  # Make sure this matches your previous migration
    ]

    operations = [
        migrations.RunSQL(
            sql="""
            ALTER TABLE ecocompassapp_esganalysis 
            ADD COLUMN user_id bigint REFERENCES ecocompassapp_customuser(id) ON DELETE CASCADE;
            """,
            reverse_sql="""
            ALTER TABLE ecocompassapp_esganalysis DROP COLUMN user_id;
            """
        ),
    ]