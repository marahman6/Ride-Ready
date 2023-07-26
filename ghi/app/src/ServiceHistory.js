import React, {useEffect, useState} from 'react';

function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const urlAppt = 'http://localhost:8080/api/appointments/';
        const response = await fetch(urlAppt);
        if (response.ok) {
        const dataAppt = await response.json();
        setAppointments(dataAppt.appointments);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toUpperCase();
        setInputText(lowerCase);
    };

    const searchHandler = (event) => {
        event.preventDefault();
        if(inputText === "") {
            window.location.reload();
        }
        else {
            const updatedAppt = appointments.filter(appt => appt.vin === inputText);
            setAppointments(updatedAppt);
        }
    }


    return (
        <>
            <h1>Service history</h1>
            <form>
                <div className="input-group mb-3">
                    <input type="text" onChange={inputHandler} className="form-control" placeholder="Search by VIN.." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button onClick={searchHandler} className="btn btn-outline-primary" type="button">Search</button>
                    </div>
                </div>
            </form>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {appointments && appointments.map(appt => {
                    return (
                    <tr key={appt.id}>
                        <td>{ appt.vin }</td>
                        <td>{ appt.is_vip === true ? "Yes" : "No" }</td>
                        <td>{ appt.customer }</td>
                        <td>{ appt.date_time.split("T")[0] }</td>
                        <td>{new Date(appt.date_time).toLocaleString('en-US', {
                                                        timeZone: 'UTC',
                                                        hour: 'numeric',
                                                        minute: 'numeric',
                                                        hour12: true,
                                                        }) }</td>

                        <td>{ appt.technician.first_name + " " + appt.technician.last_name }</td>
                        <td>{ appt.reason }</td>
                        <td>{ appt.status }</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default ServiceHistory;
