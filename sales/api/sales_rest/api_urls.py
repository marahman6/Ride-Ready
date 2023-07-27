from django.urls import path
from .views import (
    salesperson_list,
    salesperson_detail,
    customer_list,
    customer_detail,
    sales_list,
    sales_detail
)


urlpatterns = [
    path("sales/<int:id>/", sales_detail, name="sales_detail"),
    path("sales/", sales_list, name="sales_list"),
    path("customers/<int:id>/", customer_detail, name="customer_detail"),
    path("customers/", customer_list, name="customer_list"),
    path("salespeople/<int:id>/", salesperson_detail, name="salesperson_detail"),
    path("salespeople/", salesperson_list, name="salesperson_list")
]
