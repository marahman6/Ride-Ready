import React, {useEffect, useState} from 'react';
import DataFetch from './DataFetch';

function TechnicainList() {

    const technicians = DataFetch("http://localhost:8080/api/technicians/").technicians;

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
