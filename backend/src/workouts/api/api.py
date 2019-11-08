from rest_framework import generics, permissions, mixins
from workouts.models import Workout, Result
from .serializers import WorkoutSerializer, ResultSerializer
from rest_framework.response import Response


class WorkoutAPI(generics.GenericAPIView,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer
    lookup_field = 'id'


    def get(self, request, id=None):
        if id:
            return self.retrieve(request, id)
        else:
            return self.list(request)


    def put(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        Workout = serializer.save()
        return Response(serializer.data)

    def delete(self, request, id=None):
        if id:
            return self.destroy(request, id)

        else:
            return Response({"it failed"}, status=404)



class ResultAPI(generics.GenericAPIView,
                        mixins.ListModelMixin,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    lookup_field = 'id'


    def get(self, request, id=None):
        if id:
            return self.retrieve(request, id)
        else:
            return self.list(request)


    def put(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        Result = serializer.save()
        return Response(serializer.data)

    def delete(self, request, id=None):
        if id:
            return self.destroy(request, id)

        else:
            return Response({"it failed"}, status=404)
