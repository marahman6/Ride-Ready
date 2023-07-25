from django.urls import path

from .views import (list_technicians,
                    detail_technicians,
                    list_appointments,
                    detail_appointments,
                    cancel_appointments,
                    finish_appointments,
                    )

urlpatterns = [
    path("technicians/", list_technicians, name="list_technicians"),
    path("technicians/<int:pk>/", detail_technicians, name="detail_technicians"),
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/<int:pk>/", detail_appointments, name="detail_appointments"),
    path("appointments/<int:pk>/cancel/", cancel_appointments, name="cancel_appointments"),
    path("appointments/<int:pk>/finish/", finish_appointments, name="finish_appointments"),
]
