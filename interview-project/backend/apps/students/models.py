from django.db import models
from config.constants import DEPARTMENT_TYPE

# Create your models here.
class Student(models.Model):
    class Meta(object):
        db_table = 'student'
    name = models.CharField(
        'Name', blank=False, null=False, max_length=50, db_index=True,
    )  
    department = models.CharField(
        'Department', blank=False, null=False, choices=DEPARTMENT_TYPE,max_length=50,
    )  
    email = models.EmailField(
        'Email', blank=False, null=False, max_length=255
    )
    mobile = models.IntegerField(
        'Mobile No' , blank=False, null=False
    )
    address = models.CharField(
        'Address', blank=False, null=False, max_length=255
    )
    created_at = models.DateTimeField(
        'Created At', blank=True,null=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, null=True
    )