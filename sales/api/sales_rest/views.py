import json, requests
from common.json import ModelEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Salesperson, Customer, Sale, AutomobileVO
from .encoders import (
    CustomerEncoder,
    SaleEncoder,
    SalespersonEncoder,
    AutomobileVOEncoder
)


@require_http_methods(["GET", "POST"])
def salesperson_list(request):
    if request.method == "GET":
        salesPerson = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salesPerson},
            encoder=SalespersonEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        salesPerson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesPerson,
            encoder=SalespersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def salesperson_detail(request, id):
    if request.method == "GET":
        try:
            person = Salesperson.objects.get(id=id)
            return JsonResponse(
                person,
                encoder=SalespersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            person = Salesperson.objects.get(id=id)
            person.delete()
            return JsonResponse(
                person,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customers": customer},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def customer_detail(request, id):
    if request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"}, status=404)


@require_http_methods(["GET", "POST"])
def sales_list(request):
    if request.method == "GET":
        salesperson_id = request.GET.get("salesperson")
        if salesperson_id:
            sales = Sale.objects.filter(salesperson__id=salesperson_id)
        else:
            sales = Sale.objects.all()
        for sale in sales:
            sale.price = float(sale.price)
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)

        salesperson_id = content["salesperson"]
        customer_id = content["customer"]
        try:
            salesperson_instance = Salesperson.objects.get(id=salesperson_id)
            content["salesperson"] = salesperson_instance
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales person ID"},
                status=400,
            )
        try:
            customer_instance = Customer.objects.get(id=customer_id)
            content["customer"] = customer_instance
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer"},
                status=400,
            )
        try:
            autos_detail = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=autos_detail)
            automobile.sold = True
            automobile.save()

            inventory_url = (
                f"http://project-beta-inventory-api-1:8000/api/automobiles/{autos_detail}/"
            )
            inventory_data = {"sold": True}
            inventory_response = requests.put(
                inventory_url,
                json=inventory_data
            )

            if not inventory_response.ok:
                return JsonResponse(
                    {"message": "Could not update inventory"},
                    status=500,
                )

            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid vin"},
                status=400,
            )
        sales = Sale.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SaleEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def sales_detail(request, id):
    if request.method == "DELETE":
        try:
            sale = Sale.objects.get(id=id)
            sale.delete()
            return JsonResponse(
                {"message": "deleted"},
                safe=False,
                status=200,
            )
        except Sale.DoesNotExist:
            return JsonResponse({"message": "Does not exist"}, status=404)
