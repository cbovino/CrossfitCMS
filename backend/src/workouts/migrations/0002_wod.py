# Generated by Django 2.2.5 on 2019-11-12 13:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0010_enrollment_schedule_id'),
        ('workouts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Wod',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Schedule', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='schedule.Schedule')),
                ('Workout', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='workouts.Workout')),
            ],
        ),
    ]
