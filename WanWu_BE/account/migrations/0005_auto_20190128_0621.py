# Generated by Django 2.2a1 on 2019-01-28 06:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_userprofile'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='userprofile',
            table='user_profile',
        ),
    ]
