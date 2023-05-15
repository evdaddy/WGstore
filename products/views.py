from django.shortcuts import render
from products.models import Product, ProductCategory
# Create your views here.

def index(request):
    context = {''}
    return render(request, 'products/index.html')


def products(request):
    context = {'title': 'WGStore - Каталог',
               'products': Product.objects.all(),
               'categories': ProductCategory.objects.all()}
    return render(request, 'products/products.html', context=context)

