from django.db import models

# Create your models here.

class Course_table(models.Model): 
    Department = models.CharField(max_length=100) 
    CourseTitle = models.TextField(blank=True) 
    Instructor = models.CharField(max_length=100) 
