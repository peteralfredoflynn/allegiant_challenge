from customer_browser.models import Customer
from rest_framework import serializers


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    created_at = serializers.DateTimeField(format="%b %d, %Y %I:%M %p", read_only=True)
    class Meta:
        model = Customer
        fields = ('id', 'email', 'first_name', 'last_name', 'ip', 'latitude',
                  'longitude', 'created_at', 'updated_at')
        read_only_fields = ('updated_at',)