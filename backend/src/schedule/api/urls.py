from django.urls import path
from .api import ScheduleAPI, EnrollmentAPI


urlpatterns = [
    path('api/Schedule/', ScheduleAPI.as_view()),
    path('api/Schedule/<int:id>/', ScheduleAPI.as_view()),
    path('api/Enrollment/', EnrollmentAPI.as_view()),
    path('api/Enrollment/<int:id>/', EnrollmentAPI.as_view())
    ]
