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

Models:
    Salesperson - Contains information about the sales person.
    it allows them to input first and last name and also create
    their employee id by using first letter of their name and full
    last name.

    Customer - Information of a customer includes, first and last name,
    address and phone number.

    AutomobileVo - Content includes vin and if the vehicle is sold or not.

    Sale - Three foreign keys of automobile, salesperson, and customer. final field is the price. When a sale occurs, each foreign key is associated with the model it is referencing.

    Integrations - On the inventory service, this would allow us to input data to provide information needed to describe data of the vehicle. When a vehicle is created, that information is stored on the inventory database. The service/sales services would then reference that inventory to match data or have data ready for its use.
