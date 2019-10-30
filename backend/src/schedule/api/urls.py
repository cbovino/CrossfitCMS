from django.urls import path
from rest_framework import routers
from.views import ScheduleViewSet, EnrollmentViewSet


router = routers.DefaultRouter()
router.register('Schedule', ScheduleViewSet, 'Schedule')
router.register('Enrollment', EnrollmentViewSet, 'Enrollment')

urlpatterns = router.urls
