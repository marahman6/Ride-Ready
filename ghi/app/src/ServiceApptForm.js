import React, {useEffect, useState} from 'react';

function ServiceApptForm() {

    const [technicians, setTechnicians] = useState([]);

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const [customer, setCustomer] = useState('');
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const [date, setDate] = useState('');
    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);
    }

    const [time, setTime] = useState('');
    const handleTimeChange = (event) => {
        const value = event.target.value;
        setTime(value);
    }

    const [reason, setReason] = useState('');
    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const [technician, setTechnician] = useState('');
    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const fetchData = async () => {
        const urlTech = 'http://localhost:8080/api/technicians/';
        const response = await fetch(urlTech);
        if (response.ok) {
          const dataTech = await response.json();
          setTechnicians(dataTech.technicians);
        }
      }

      useEffect(() => {
         fetchData();
      }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.customer = customer;
        data.reason = reason;
        data.date_time = date+"T"+time;
        data.technician = technician;


        const url = 'http://localhost:8080/api/appointments/';

        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const newAppt = await response.json();

          setVin('');
          setCustomer('');
          setDate('');
          setTime('');
          setReason('');
          setTechnician('');
        }
        else{
            console.log("Failed to response")
        }
      }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a service appointment</h1>

            <form onSubmit={handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input onChange={handleVinChange} placeholder="Automobile VIN" value={vin} required type="text" name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">Automobile VIN</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleCustomerChange} placeholder="Customer" value={customer} required type="text" name="customer" id="customer" className="form-control"/>
                <label htmlFor="customer">Customer</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={handleDateChange} placeholder="Date" value={date} type="date" id="date" name="date" required className="form-control"/>
                <label htmlFor="date">Date</label>
              </div>

              <div className="form-floating mb-3">
                <input onChange={handleTimeChange} placeholder="Time" value={time} type="time" id="time" name="time" required className="form-control"/>
                <label htmlFor="time">Time</label>
              </div>

              <div className="mb-3">
                <select onChange={handleTechnicianChange} value={technician} required name="technician" id="technician" className="form-select">
                  <option value="">Choose a technician</option>
                  {technicians.map(tech => {
                        return (
                        <option key={tech.id} value={tech.id}>
                            {tech.first_name}
                        </option>
                        );
                    })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleReasonChange} placeholder="Reason" value={reason} required type="text" name="reason" id="reason" className="form-control"/>
                <label htmlFor="reason">Reason</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>

    );

}

export default ServiceApptForm;
