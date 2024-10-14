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