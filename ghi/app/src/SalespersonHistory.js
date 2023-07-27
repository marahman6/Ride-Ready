import React, { useEffect, useState } from "react"


export default function SalesHistory() {
    const [slist, setSlist] = useState([])
    const [salespersons, setSalespersons] = useState([])
    const [selected, setSelected] = useState('')

    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSelected(value);
    }

    const fetchData = async () => {
        const spUrl = 'http://localhost:8090/api/salespeople/'

        const spResponse = await fetch(spUrl);
        if (spResponse.ok) {
            const data = await spResponse.json();
            setSalespersons(data.salespeople);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchSelectedsp = async (salespersonId) => {
        const salesUrl = `http://localhost:8090/api/sales/?salesperson=${salespersonId}`

        const response = await fetch(salesUrl)
        if (response.ok) {
            const data = await response.json()
            setSlist(data.sales)
        }
    };

    useEffect(() => {
        if (selected) {
            fetchSelectedsp(selected);
        }
    }, [selected])

    return (
        <>
        <h1>Salesperson History</h1>
            <div className="mb-3">
                <select onChange={handleSalespersonChange} value={selected} required id="salesperson" name="salesperson" className="form-select">
                    <option value="">Choose a salesperson</option>
                    {salespersons.map(item => {
                        return (
                            <option key={item.id} value={item.id}>
                                {`${item.first_name} ${item.last_name}`}
                            </option>
                        );
                    })}
                </select>
            </div>
            {slist.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Salesperson</th>
                            <th>Customer</th>
                            <th>Vin</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slist.map(slist => {
                            return (
                                <tr key={slist.id}>
                                    <td>{`${slist.salesperson.first_name} ${slist.salesperson.last_name}`}</td>
                                    <td>{`${slist.customer.first_name} ${slist.customer.last_name}`}</td>
                                    <td>{slist.automobile.vin}</td>
                                    <td>{slist.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <div>
                    No sales
                </div>
            )}
        </>
    )
}
