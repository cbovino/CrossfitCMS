from django.db import models
from django.utils.timezone import now

# Create your models here.
class Schedule(models.Model):
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(default=now, blank=True)
    eventType = models.CharField(max_length=255, blank=True)
    duration = models.PositiveIntegerField(default=0)
    availability = models.IntegerField(default=0)
    instructor = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.id


class Enrollment(models.Model):
     username = models.CharField(max_length=255, blank=True)
     schedule_id = models.PositiveIntegerField(default=0)
