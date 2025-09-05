"""
URL configuration for ecocompass project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ecocompassapp.views import register_user, login_user, get_user_data, ESGAnalysisView, get_esg_suggestions, predict_revenue, latest_esg, latest_logged_esg

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('user/', get_user_data, name='user_data'),
    path("upload/", ESGAnalysisView.as_view(), name="upload"),
    path("esg-suggestions/", get_esg_suggestions, name="esg-suggestions"),
    path("predict-revenue/", predict_revenue, name="predict-revenue"),
    path("api/latest-esg/", latest_esg, name="latest-esg"),
    path("latest-logged-esg/", latest_logged_esg, name="latest-logged-esg"),
]
