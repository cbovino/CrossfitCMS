from rest_framework import serializers
from workouts.models import Workout, Result

class WorkoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Workout
        fields = ('type', 'goal', 'description', 'keyMovement')


class ResultSerializer(serializers.ModelSerializer):

    class Meta:
        model = Result
        fields = ("id", "username", "workout_id", "time")
