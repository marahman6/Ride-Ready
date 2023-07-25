from django.shortcuts import render
from common.json import ModelEncoder
import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Technician, AutomobileVO, Appointment

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "is_vip",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }

@require_http_methods(["GET", "POST"])
def list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        technicians = Technician.objects.create(**content)
        return JsonResponse(
            technicians,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def detail_technicians(request, pk):
    if request.method == "GET":
        technicians = Technician.objects.get(id=pk)
        return JsonResponse(
            technicians,
            encoder=TechnicianEncoder,
            safe=False
        )

    else:
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Technician id"},
                status=400,
            )



@require_http_methods(["GET", "POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        for appointment in appointments:
            try:
                AutomobileVO.objects.get(vin=appointment.vin)
                appointment.is_vip = True
            except AutomobileVO.DoesNotExist:
                appointment.is_vip = False

        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Technician id"},
                status=400,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def detail_appointments(request, pk):
    if request.method == "GET":
        appointments = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointments,
            encoder=AppointmentEncoder,
            safe=False
        )

    elif request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Appointment id"},
                status=400,
            )

    else:
        try:
            content = json.loads(request.body)
            Appointment.objects.filter(id=pk).update(**content)
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Appointment id"},
                status=400,
            )

@require_http_methods(["PUT"])
def cancel_appointments(request, pk):
    if request.method == "PUT":
        try:
            Appointment.objects.filter(id=pk).update(status="canceled")
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Appointment id"},
                status=400,
            )


@require_http_methods(["PUT"])
def finish_appointments(request, pk):
    if request.method == "PUT":
        try:
            Appointment.objects.filter(id=pk).update(status="finished")
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Appointment id"},
                status=400,
            )
