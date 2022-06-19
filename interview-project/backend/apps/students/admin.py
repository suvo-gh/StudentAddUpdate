from django.contrib import admin
from .models import Student
# Register your models here.

@admin.register(Student)
class StudentModel(admin.ModelAdmin):
    fields= ['name','email','department','mobile','address']
    search_fields = ['email','name','department','mobile']
    list_display = fields