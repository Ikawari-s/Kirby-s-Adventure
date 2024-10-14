from django.contrib import admin
from django.urls import path
from kirbiventapp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', registerUser, name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
]

