from rest_framework import serializers
from schedule.models import Schedule, Enrollment

class ScheduleSerializer(serializers.ModelSerializer):
    time = serializers.TimeField(format="%H:%M")
    availability = serializers.IntegerField(max_value=None, min_value=None)
    duration = serializers.IntegerField(max_value=None, min_value=None)

    class Meta:
        model = Schedule
        fields = ('id','date', 'time', 'eventType', 'duration', 'availability', 'instructor')


class EnrollmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Enrollment
        fields = ("id", "username", "schedule_id")
