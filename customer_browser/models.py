from django.db import models


class Customer(models.Model):
    email = models.CharField(max_length=255, unique=True, default='')
    first_name = models.CharField(max_length=30, default=None)
    last_name = models.CharField(max_length=50, default=None)
    ip = models.CharField(max_length=15, default=None)
    latitude = models.DecimalField(max_digits=10, decimal_places=6, default=None)
    longitude = models.DecimalField(max_digits=10, decimal_places=6, default=None)
    created_at = models.DateTimeField()
    updated_at = models.DateField(default=None, null=True)
