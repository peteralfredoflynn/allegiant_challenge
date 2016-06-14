from customer_browser.models import Customer
from django.contrib import admin

# Register your models here.
@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'first_name', 'last_name', 'ip', 'latitude',
                    'longitude', 'created_at', 'updated_at')
