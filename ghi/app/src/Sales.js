import React, { useEffect, useState } from "react"


export default function Saleslist() {
    const [slist, setSlist] = useState([])

    async function loadSalesList() {
        const response = await fetch('http://localhost:8090/api/sales/')
        if(response.ok) {
            const data = await response.json();
            setSlist(data.sales)
        }
    }

    useEffect(() => {
        loadSalesList();
    }, []);

    return(
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Salesperson Employee ID</th>
            <th>Salesperson Name</th>
            <th>Customer</th>
            <th>Vin</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {slist.map(slist => {
            return (
              <tr key={slist.id}>
                <td>{ slist.salesperson.employee_id }</td>
                <td>{ `${slist.salesperson.first_name} ${slist.salesperson.last_name}` }</td>
                <td>{ `${slist.customer.first_name} ${slist.customer.last_name}` }</td>
                <td>{ slist.automobile.vin }</td>
                <td>{ slist.price }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}
