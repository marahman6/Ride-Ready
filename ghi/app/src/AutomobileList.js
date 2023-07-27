import React, { useEffect, useState } from "react"


export default function AutomobileList() {
    const [autolist, setAutolist] = useState([])

    async function loadAutomobileList() {
        const response = await fetch("http://localhost:8100/api/automobiles/")
        if(response.ok) {
            const data = await response.json();
            setAutolist(data.autos)
        }
    }

    useEffect(() => {
        loadAutomobileList();
    }, []);

    return(
        <>
        <h1>Automobiles</h1>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {autolist.map(list => {
            return (
              <tr key={list.id}>
                <td>{ list.vin }</td>
                <td>{ list.color }</td>
                <td>{ list.year }</td>
                <td>{ list.model && list.model.name }</td>
                <td>{ list.model.manufacturer && list.model.manufacturer.name }</td>
                <td>{ list.sold ? "Yes" : "No" }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    )
}
