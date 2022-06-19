from django.urls import path
from . import views

urlpatterns = [
    path('',views.StudentList.as_view(),name = 'List'),
    path('add/',views.StudentAdd.as_view(),name='Add_student')
]