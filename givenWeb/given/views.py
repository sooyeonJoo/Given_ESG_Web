from django.shortcuts import render

# Create your views here.
def given_home(request):
  return render(request, 'home.html')