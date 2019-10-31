# Generated by Django 2.2.5 on 2019-10-23 13:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0007_enrollment'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='enrollment',
            name='availability',
        ),
        migrations.RemoveField(
            model_name='enrollment',
            name='scheduleId',
        ),
        migrations.AddField(
            model_name='enrollment',
            name='Schedule',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.SET_DEFAULT, to='schedule.Schedule'),
        ),
        migrations.AlterField(
            model_name='enrollment',
            name='user',
            field=models.ForeignKey(default='null', on_delete=django.db.models.deletion.SET_DEFAULT, to=settings.AUTH_USER_MODEL),
        ),
    ]