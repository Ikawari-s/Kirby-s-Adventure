from django.contrib import admin
from django.urls import path
from kirbiventapp.views import *
from .views import create_event

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', registerUser, name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('create/', create_event, name='create_event'),
    
]

