from api.views import ListCreateCustomers, DetailUpdateCustomer
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^customers/$', ListCreateCustomers.as_view(), name='list_customers'),
    url(r'^customers/(?P<pk>\d+)/$', DetailUpdateCustomer.as_view(), name='detail_update_customer')
]
