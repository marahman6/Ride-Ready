# CarCar

Team:

* Alex Tram - Sales
* Mohammad Arifur Rahman - Service

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

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
