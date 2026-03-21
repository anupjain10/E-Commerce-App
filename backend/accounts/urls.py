from django.urls import path
from .import views

urlpatterns = [
    path('accounts/csrf_cookie/', views.GetCSRFToken.as_view()),
    path('accounts/check_auth/', views.CheckAuthView.as_view()),
    path('accounts/register/', views.RegistrationView.as_view()),
    path('accounts/login/', views.LoginView.as_view()),
    path('accounts/logout/', views.LogoutView.as_view())
]