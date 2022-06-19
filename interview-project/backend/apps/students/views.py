from django.shortcuts import render
from .models import Student
from rest_framework import generics
from .serializers import StudentSerializer
# Create your views here.

class StudentList(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentAdd(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer    