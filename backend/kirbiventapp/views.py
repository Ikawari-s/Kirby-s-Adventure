from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from kirbiventapp.serializers import UserSerializer, UserSerializerWithToken, MyTokenObtainPairSerializer
from django.contrib.auth.models import Group
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.apps import apps
from .models import Event
from .serializers import EventSerializer
from rest_framework import viewsets
from django.http import Http404
import logging

logger = logging.getLogger(__name__)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    data = request.data
    print(data)
    user.first_name = data['name']
    user.email = data['email']
    

    if data['password'] != '':
        user.password = make_password(data['password'])
    user.save()
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def registerUser(request):
    data = request.data
    print("Request Data:", data)  # Log request data to check if user_type is present
    try:
        user = User.objects.create(
            first_name=data.get('name'),
            username=data.get('email'),
            email=data.get('email'),
            password=make_password(data.get('password')),
        )

        # Check if the user is a creator and add them to the Creator group
        # if data.get('user_type') == 'creator':
        #     creator_group, _ = Group.objects.get_or_create(name='Creator')
        #     user.groups.add(creator_group)
        #     print("User added to Creator group:", user.username)  # Log if user is added to Creator group

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except Exception as e:
        print("Error:", e)  # Log any exceptions that occur during user creation
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_event(request):
    if request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class EventViewSet(viewsets.ModelViewSet):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer

@api_view(['GET'])
def get_events(request):
    events = Event.objects.all()  
    serializer = EventSerializer(events, many=True)  
    return Response(serializer.data)

@api_view(['GET'])
def get_event_by_id(request, event_id):
    logger.debug(f"Received request for event ID: {event_id}")
    try:
        event = Event.objects.get(pk=event_id)  # Retrieve the event by primary key (id)
    except Event.DoesNotExist:
        raise Http404("Event not found")  # Return a 404 if the event doesn't exist
    serializer = EventSerializer(event)  # Serialize the event
    return Response(serializer.data)  # Return the serialized data