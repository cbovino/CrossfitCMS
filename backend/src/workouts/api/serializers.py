from rest_framework import serializers
from workouts.models import Workout, Result

class WorkoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Workout
        fields = ("id",'type', 'goal', 'description', 'keyMovement', 'date')


class ResultSerializer(serializers.ModelSerializer):

    class Meta:
        model = Result
        fields = ("id", "username", "workout_id", "time", "result")
