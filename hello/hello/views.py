import logging
from django.http import HttpResponse

logger = logging.getLogger('django')

def test_logging(request):
    logger.debug("這是一條 DEBUG 日誌")
    logger.info("這是一條 INFO 日誌")
    logger.warning("這是一條 WARNING 日誌")
    logger.error("這是一條 ERROR 日誌")
    
    return HttpResponse("日誌測試完成，請檢查 debug.log")
from django.http import HttpResponse

def myhello(request):
    return HttpResponse("你好，这是 myhello 页面！")
