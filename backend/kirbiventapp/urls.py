from django.contrib import admin
from django.urls import path
from kirbiventapp.views import *
from .views import create_event
from .views import get_events
# from kirbiventapp.views import EventViewSet
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'events', EventViewSet)  # Register the events viewset

# urlpatterns = router.urls  # Automatically creates URL patterns for the viewset

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', registerUser, name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('create/', create_event, name='create_event'),
    path('events/', get_events, name='get_events'),
]

