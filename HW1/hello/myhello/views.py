"""
from django.http import HttpResponse


def myIndex(request):
     my_name = request.GET.get('name' , "CGU")
     return HttpResponse("Hello" + my_name)
"""

"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name' , None)
        if my_name:
            retValue = {}
            retValue['data']  = "Hello" + my_name
            return Response(retValue, status = status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status = status.HTTP_400_BAD_REQUEST
            )
"""

from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json 
import logging

from . models import Course_table

logger = logging.getLogger('django')

@api_view(['GET'])
def add_post(request):
    Department = request.GET.get('Department' , '')
    CourseTitle = request.GET.get('CourseTitle' , '')
    Instructor = request.GET.get('Instructor' , '')

    new_post = Course_table()
    new_post.Department = Department
    new_post.CourseTitle = CourseTitle
    new_post.Instructor = Instructor   
    new_post.save()
    logger.debug(" ** myhello_api: " + Department)
    if Department:
        return Response({"data": CourseTitle + "insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
@api_view(['GET'])
def course_list(request):
    posts = Course_table.objects.all().values()
    return JsonResponse(list(posts), safe=False)
    # return Response({"data":
    #                  json.dumps(
    #                      list(posts),
    #                      sort_keys = True,
    #                      indent = 1,
    #                      cls = DjangoJSONEncoder)},
    #                 status=status.HTTP_200_OK)
