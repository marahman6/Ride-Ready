import React, { useEffect, useState } from "react"


export default function Salespeoplelist() {
    const [spl, setSpl] = useState([])

    async function loadSalespeopleList() {
        const response = await fetch('http://localhost:8090/api/salespeople/')
        if(response.ok) {
            const data = await response.json();
            setSpl(data.salespeople)
        }
    }

    useEffect(() => {
        loadSalespeopleList();
    }, []);

    return(
      <>
        <h1>Salespeople</h1>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Emplyee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {spl && spl.map(splist => {
            return (
              <tr key={splist.id}>
                <td>{ splist.employee_id }</td>
                <td>{ splist.first_name }</td>
                <td>{ splist.last_name }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
    )
}
