from django.db import models


# Create your models here.
class Workout(models.Model):
    type = models.CharField(max_length=255, blank=True)
    goal = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=255, blank=True)
    keyMovement = models.CharField(max_length=255, blank=True)
    date = models.DateField(null=True, blank=True)



class Result(models.Model):
     username = models.CharField(max_length=255, blank=True)
     workout_id = models.PositiveIntegerField(default=0)
     result = models.CharField(max_length=255, blank=True)
     time = models.DurationField(null=True)
