# Generated by Django 2.2a1 on 2019-01-26 17:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('admin', '0003_logentry_add_action_flag_choices'),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserAccount',
        ),
    ]
