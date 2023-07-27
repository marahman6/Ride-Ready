# CarCar

Team:

* Alex Tram - Sales
* Mohammad Arifur Rahman - Service

## Design

## Service microservice

Technician Model: The Technician model represents an auto technician. It contains three fields: "first_name" to store the technician's first name, "last_name"" to store their last name, and "employee_id" to uniquely identify the technician.

AutomobileVO Model: As the name suggest it is a Value object from Inventory Automobile Model. The AutomobileVO contains two fields, "vin" to store the Vehicle Identification Number (VIN) that uniquely identifies each vehicle, and "sold" to indicate whether the vehicle has been sold or not.

Appointment Model: It contains "date_time", "reason", "status", "vin", "customer" and "technician" fields. The "technician" field is a   a foreign key referencing back to the Technician model.

Integration with Inventory:
To integrate with inventory microservice seamlessly we implemented AutomobileVO(custome Value Object) model in the service microservice. This model contains essential automobile information, extracted from the inventory Automobile model. We also implemented a poller service to syncronize data perodically between the microservices which ensures up-to-date information.



## Sales microservice

Explain your models and integration with the inventory
microservice, here.
