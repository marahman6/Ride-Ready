import React, {useEffect, useState} from 'react';

function TechnicianForm() {

    const [first, setFirst] = useState('');
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirst(value);
    }

    const [last, setLast] = useState('');
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLast(value);
    }

    const [employeeID, setEmployeeID] = useState('');
    const handleEmployeeIDChange = (event) => {
        const value = event.target.value;
        setEmployeeID(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.first_name = first;
        data.last_name = last;
        data.employee_id = employeeID;


        const url = 'http://localhost:8080/api/technicians/';

        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const newTech = await response.json();

          setFirst('');
          setLast('');
          setEmployeeID('');
        }
        else{
            console.log("Failed to response")
        }
      }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Technician</h1>
            {/* <form id="create-location-form"> */}
            <form onSubmit={handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input onChange={handleFirstNameChange} placeholder="First Name" value={first} required type="text" name="first" id="first" className="form-control"/>
                <label htmlFor="first">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleLastNameChange} placeholder="Last Name" value={last} required type="text" name="last" id="last" className="form-control"/>
                <label htmlFor="last">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEmployeeIDChange} placeholder="Employee ID" value={employeeID} required type="text" name="employeeID" id="employeeID" className="form-control"/>
                <label htmlFor="employeeID">Employee ID</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>

    );

}

export default TechnicianForm;
