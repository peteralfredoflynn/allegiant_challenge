from django.shortcuts import render


def get_app(request):
    return render(request, 'customer_browser/index.html')
