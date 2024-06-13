from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Comment
import json

# Create your views here.
def given_home(request):
  return render(request, 'home.html')

def given_heart(request):
  return render(request, 'heart.html')

def given_money(request):
  return render(request, 'money.html')

def given_mypage(request):
  return render(request, 'mypage.html')


@csrf_exempt
def add_comment(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        content = data.get('content')
        if content:
            Comment.objects.create(content=content)
            return JsonResponse({'status': 'success'}, status=201)
    return JsonResponse({'status': 'fail'}, status=400)

def get_comments(request):
    comments = Comment.objects.all().order_by('wri_date')
    comment_list = [{'content': comment.content, 'wri_date': comment.wri_date} for comment in comments]
    return JsonResponse(comment_list, safe=False)

def get_comment_count(request):
    comment_count = Comment.objects.count()
    return JsonResponse({'count': comment_count})