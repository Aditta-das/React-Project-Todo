from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from .views import MyTokenObtainPairSerializer


urlpatterns = [
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairSerializer.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]