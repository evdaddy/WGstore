from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator

from products.models import Product, ProductCategory, Basket


def index(request):
    context = {''}
    return render(request, 'products/index.html')


def products(request, category_id=None, page_number=1):

    products = Product.objects.filter(category_id=category_id) if category_id else Product.objects.all()
    paginator = Paginator(products, per_page=4)
    products_paginator = paginator.page(page_number)

    context = {'title': 'WGStore - Каталог',
               'products': products_paginator,
               'categories': ProductCategory.objects.all()}

    return render(request, 'products/products.html', context=context)


def item_page(request, item_id):
    item = Product.objects.get(id=item_id)
    context = {'products': item,
    }
    return render(request, 'products/item_page', context=context)

@login_required
def basket_add(request, product_id):
    product = Product.objects.get(id=product_id)
    baskets = Basket.objects.filter(user=request.user, product=product)

    if not baskets.exists():
        Basket.objects.create(user=request.user, product=product, quantity=1)
    else:
        basket = baskets.first()
        basket.quantity += 1
        basket.save()

    return HttpResponseRedirect(request.META['HTTP_REFERER'])

@login_required
def basket_remove(request, basket_id):
    basket = Basket.objects.get(id=basket_id )
    basket.delete()
    return HttpResponseRedirect(request.META['HTTP_REFERER'])
