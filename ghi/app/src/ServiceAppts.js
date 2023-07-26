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

    const handleCancelAppointment = async (apptID) => {
        await fetch(`http://localhost:8080/api/appointments/${apptID}/cancel/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to response!!!!');
            }

            const updatedAppointments = appointments.map(appointment => {
                if (appointment.id === apptID) {
                return { ...appointment, status: "canceled"};
                }
                return appointment;
            });
            setAppointments(updatedAppointments);

        })
        .catch(error => {
            console.error("Error updating appointment status:", error);
          });
        };

    const handleFinishAppointment = async (apptID) => {
        await fetch(`http://localhost:8080/api/appointments/${apptID}/finish/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
              },
            })
            .then(response => {
                if (!response.ok) {
                throw new Error('Failed to response!!!!');
                }

                const updatedAppointments = appointments.map(appointment => {
                    if (appointment.id === apptID) {
                    return { ...appointment, status: "finished"};
                    }
                    return appointment;
                });
                setAppointments(updatedAppointments);
            })
            .catch(error => {
                console.error("Error updating appointment status:", error);
              });
            };


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
                </tr>
                </thead>
                <tbody>
                {appointments && appointments.filter(appt => appt.status !== "finished" && appt.status !== "canceled").map(appt => {
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
                        <td>
                            <button type="button" className="btn btn-danger" onClick={() => handleCancelAppointment(appt.id)}>Cancel</button>
                            &nbsp;
                            <button type="button" className="btn btn-success" onClick={() => handleFinishAppointment(appt.id)}>Finish</button>
                        </td>

                    </tr>
                    );
                })}
                </tbody>
            </table>

        </>
    );
}

export default ServiceAppts;
