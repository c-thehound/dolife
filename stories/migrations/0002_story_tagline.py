# Generated by Django 2.1.5 on 2019-01-24 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stories', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='tagline',
            field=models.CharField(blank=True, max_length=64),
        ),
    ]
