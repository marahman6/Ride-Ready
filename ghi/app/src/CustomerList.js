import React, { useEffect, useState } from "react"


export default function CustomersList() {
    const [cl, setCl] = useState([])

    async function loadCustomersList() {
        const response = await fetch('http://localhost:8090/api/customers/')
        if(response.ok) {
            const data = await response.json();
            setCl(data.customers)
        }
    }

    useEffect(() => {
        loadCustomersList();
    }, []);

    return(
      <>
      <h1>Customers</h1>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {cl && cl.map(clist => {
            return (
              <tr key={clist.id}>
                <td>{ clist.first_name }</td>
                <td>{ clist.last_name }</td>
                <td>{ clist.phone_number }</td>
                <td>{ clist.address }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    )
}
