import React, {useEffect, useState} from 'react';

function ServiceAppts() {

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

    // function timeFormate(date_time_str) {
    //     const date_time = new Date(date_time_str);
    //     const hours = date_time.getHours();
    //     const minutes = date_time.getMinutes();
    //     const seconds = date_time.getSeconds();
    //     let formatted_time;
    //     if (hours >= 12) {
    //     formatted_time = `${hours === 12 ? 12 : hours - 12}:${minutes}:${seconds} PM`;
    //     } else {
    //     formatted_time = `${hours === 0 ? 12 : hours}:${minutes}:${seconds} AM`;
    //     }
    //     return formatted_time;
    // }

    return (
        <>

        <h1>Service Appointments</h1>
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
                    <th></th>
                    <th></th>
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
                                                        hour: 'numeric',
                                                        minute: 'numeric',
                                                        hour12: true,
                                                        }) }</td>
                        {/* <td> { timeFormate(appt.date_time) } </td> */}
                        <td>{ appt.technician.first_name + " " + appt.technician.last_name }</td>
                        <td>{ appt.reason }</td>
                        <td><button type="button" className="btn btn-danger">Cancel</button></td>
                        <td><button type="button" className="btn btn-success">Finish</button></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );

}


export default ServiceAppts;
