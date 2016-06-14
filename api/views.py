from api.serializers import CustomerSerializer
from customer_browser.models import Customer
from django.db.models import Q
from django.shortcuts import render
from rest_framework import generics


class ListCreateCustomers(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def get_queryset(self):
        qs = super().get_queryset()

        name = self.request.query_params.get('name', None)
        email = self.request.query_params.get('email', None)
        order = self.request.query_params.get('order', None)

        if email:
            qs = qs.filter(email__icontains=email)

        if name:
            qs = qs.filter(
                Q(first_name__icontains=name) |
                Q(last_name__icontains=name)
            )

        if order:
            if order == 'newest':
                qs = qs.order_by('-created_at')
            elif order == 'oldest':
                qs = qs.order_by('created_at')
            elif order == 'firstname':
                qs = qs.order_by('first_name')
            elif order == 'lastname':
                qs = qs.order_by('last_name')
            elif order == 'email':
                qs = qs.order_by('email')

        return qs


class DetailUpdateCustomer(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer