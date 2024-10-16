from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from kirbiventapp.views import *
from kirbiventapp.urls import *
from kirbiventapp.views import EventViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('kirbiventapp.urls')),
    # path('api/users/', include('kirbiventapp.urls')),
    # path('api/create/', include('kirbiventapp.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)