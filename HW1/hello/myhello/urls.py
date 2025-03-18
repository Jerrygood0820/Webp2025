"""
urlpatterns = [
    path('', views.myIndex, name='index'),
]

urlpatterns = [
    path('', views.HelloApiView.as_view(), name='index'),
]
"""

from django.urls import path
from . import views

urlpatterns = [
    path('addcourse', views.add_post, name='add_post'),
    path('courselist', views.course_list, name='course_list'),
]
