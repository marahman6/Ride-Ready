import React, {useEffect, useState} from 'react';

function TechnicainList() {
    const [technicians, setTechnicians] = useState([]);

    const fetchData = async () => {
        const urlTechnicians = 'http://localhost:8080/api/technicians/';
        const response = await fetch(urlTechnicians);
        if (response.ok) {
        const dataTechnicians = await response.json();
        setTechnicians(dataTechnicians.technicians);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <h1>Technicians</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {technicians && technicians.map(tech => {
                    return (
                    <tr key={tech.id}>
                        <td>{ tech.employee_id }</td>
                        <td>{ tech.first_name }</td>
                        <td>{ tech.last_name }</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
  }

export default TechnicainList;
