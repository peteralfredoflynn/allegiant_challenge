from customer_browser.models import Customer
from django.core.urlresolvers import reverse
from rest_framework.test import APITestCase
from rest_framework import status


class CustomerTests(APITestCase):

    def test_list_customers(self):
        url = reverse('list_customers')
        response = self.client.get(url, {}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
