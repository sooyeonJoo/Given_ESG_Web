from django.shortcuts import render

# Create your views here.
def given_home(request):
  return render(request, 'home.html')

def given_heart(request):
  return render(request, 'heart.html')

def given_money(request):
  return render(request, 'money.html')

def given_mypage(request):
  return render(request, 'mypage.html')