from rest_framework import generics, permissions, mixins
from schedule.models import Enrollment, Schedule
from .serializers import ScheduleSerializer, EnrollmentSerializer
from rest_framework.response import Response


class ScheduleAPI(generics.GenericAPIView,
                    mixins.ListModelMixin,
                    mixins.RetrieveModelMixin):
    queryset = Schedule.objects.all()
    permission_classes =[
    permissions.AllowAny
    ]
    serializer_class = ScheduleSerializer
    lookup_field = 'id'

    def get(self, request, id=None):
        if id:
            return self.retrieve(request, id)
        else:
            return self.list(request)



class EnrollmentAPI(generics.GenericAPIView,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    lookup_field = 'id'


    def get(self, request, id=None):
        if id:
            return self.retrieve(request, id)
        else:
            return self.list(request)


    def put(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        Enrollment = serializer.save()
        return Response(serializer.data)

    def delete(self, request, id=None):
        if id:
            return self.destroy(request, id)
        else:
            return Response({"it failed"}, status=404)
