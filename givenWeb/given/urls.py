from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.given_home, name="given_home"),
    path('heart/', views.given_heart, name="given_heart"),
    path('money/', views.given_money, name="given_money"),
    path('mypage/', views.given_mypage, name="given_mypage"),
    path('add_comment/', views.add_comment, name='add_comment'),
    path('get_comments/', views.get_comments, name='get_comments'),
    path('get_comment_count/', views.get_comment_count, name='get_comment_count'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
