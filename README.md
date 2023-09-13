<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://gitlab.com/marahman.ucf/ride-ready">
    <img src="ghi/public/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Ride Ready</h3>

  <p align="center">
    Welcome to a new era of Health and Swollenness, where your journey to a healthier, fitter you begins at your fingertips. We are thrilled to introduce our revolutionary health and wellness application designed to empower you on your quest for a stronger, happier, and more energetic life. Say goodbye to fitness confusion and hello to a user-friendly, personalized approach to exercise.
    <br />
    <br />
    <a href="https://gitlab.com/the-stay-at-homies/module3-project-gamma/-/blob/main/README.md?ref_type=heads"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://gitlab.com/the-stay-at-homies/module3-project-gamma/-/blob/main/README.md?ref_type=heads">View Demo</a>
    ·
    <a href="https://gitlab.com/WayneBasile/mod-readme/-/issues">Report Bug</a>
    ·
    <a href="https://gitlab.com/WayneBasile/mod-readme/-/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#design">Built With</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Project Name Screen Shot][project-screenshot]](https://gitlab.com/marahman.ucf/ride-ready)

A versatile automotive platform with separate sales and service departments, focused on optimizing motorcycle sales, service appointments, and inventory management.

### Design

Team:

* Alex Tram - Sales
* Mohammad Arifur Rahman - Service


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

### Built With

[![React][React.js]][React-url] &nbsp; [![ReactRouter][ReactRouter.com]][ReactRouter-url]

[![Docker][Docker.com]][Docker-url] &nbsp; [![Bootstrap][Bootstrap.com]][Bootstrap-url] &nbsp; [![HTML5][HTML5.com]][HTML5-url]

[![Python][Python.org]][Python-url] &nbsp; [![Javascript][Javascript.com]][Javascript-url] &nbsp; [![PostgreSQL][PostgreSQL.org]][PostgreSQL-url]



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

The installation instructions assume your system has the following software: [Google Chrome](https://www.google.com/chrome/) and [Docker](https://www.docker.com/).

If you don't have these (or equivalent) software, please install them before proceeding.

To get a local copy of Ride Ready up and running on your machine follow these simple steps.


### Installation

1. Clone the [repository](https://gitlab.com/marahman.ucf/ride-ready)

2. Rename the .env.sample file to .env

3. Remove the .gitlab-ci.yml file

4. Run `docker volume create beta-data`

5. Run `docker compose build`

6. Run `docker compose up`

7. Navigate to [localhost:3000](http://localhost:3000/)



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

· [React](https://react.dev/) · [React Router](https://reactrouter.com/en/main)

[Docker](https://www.docker.com/) · [Bootstrap](https://getbootstrap.com/) · [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)

[Python](https://www.python.org/) · [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) · [PostgreSQL](https://www.postgresql.org/)

[Shields.io](https://shields.io/) · [Simple Icons](https://simpleicons.org/) · [Pexels](https://www.pexels.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[project-screenshot]: ghi/public/screenshot.png


[React.js]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://reactjs.org/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

[Docker.com]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/

[HTML5.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML

[Python.org]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/

[Javascript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

[PostgreSQL.org]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/

[ReactRouter.com]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main
