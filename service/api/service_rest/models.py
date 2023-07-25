from django.db import models

# Create your models here.
class Technician(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    employee_id = models.CharField(max_length=30)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


class Appointment(models.Model):
    # STATUS_CHOICES = (
    #     ('FINISH', 'Finish'),
    #     ('CANCEL', 'Cancel'),
    #     ('CREATED', 'Created'),
    # )
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=300)
    # status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='CREATED')
    status = models.CharField(max_length=20, default="created")
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=150)
    is_vip = models.BooleanField(default=False, null=True)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
        )
