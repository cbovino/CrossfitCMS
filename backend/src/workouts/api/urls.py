from django.urls import path
from .api import WorkoutAPI, ResultAPI


urlpatterns = [
    path('api/Workout/', WorkoutAPI.as_view()),
    path('api/Result/', ResultAPI.as_view()),
    ]
