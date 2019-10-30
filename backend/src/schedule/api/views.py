from rest_framework import viewsets, permissions, generics
from schedule.models import Schedule, Enrollment
from .serializers import ScheduleSerializer, EnrollmentSerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    permission_classes = [
    permissions.AllowAny
    ]
    serializer_class = ScheduleSerializer

class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    permission_classes = [
    permissions.AllowAny
    ]
    serializer_class = EnrollmentSerializer
