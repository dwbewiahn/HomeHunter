# Generated by Django 4.2.3 on 2023-07-11 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('searchapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('olx_code', models.CharField(max_length=200)),
            ],
        ),
    ]
