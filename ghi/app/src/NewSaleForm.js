import React, {useEffect, useState} from 'react';

export default function NewSaleForm() {

    const [vins, setVins] = useState([]);
    const [salespersons, setSalespersons] = useState([]);
    const [customers, setCustomers] = useState([]);

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const [salesperson, setSalesperson] = useState('');
    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }

    const [customer, setCustomer] = useState('');
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const [price, setPrice] = useState('');
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }

    const fetchData = async () => {
        const vinUrl = 'http://localhost:8100/api/automobiles/'
        const spUrl = 'http://localhost:8090/api/salespeople/'
        const customerUrl = 'http://localhost:8090/api/customers/'

        const vinResponse = await fetch(vinUrl);
        if(vinResponse.ok) {
            const data = await vinResponse.json();
            setVins(data.autos);
        }

        const spResponse = await fetch(spUrl);
        if(spResponse.ok) {
            const data = await spResponse.json();
            setSalespersons(data.salespeople);
        }

        const cusResponse = await fetch(customerUrl);
        if(cusResponse.ok) {
            const data = await cusResponse.json();
            setCustomers(data.customers);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            automobile: vin,
            salesperson: salesperson,
            customer: customer,
            price: price,
        }

        const salesUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salesUrl, fetchConfig);
        if(response.ok){
            const newSale = await response.json();

            setVin('');
            setSalesperson('');
            setCustomer('');
            setPrice('');
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={handleSubmit} id="create-new-sale-form">
              <div className="mb-3">
                <select onChange={handleVinChange} value={vin} required id="vin" name="vin" className="form-select">
                  <option value="">Choose an automobile VIN</option>
                  {vins.filter((item) => item.sold === false).map((item) => (
                      <option key={item.id} value={item.vin}>
                          {item.vin}
                      </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={handleSalespersonChange} value={salesperson} required id="salesperson" name="salesperson" className="form-select">
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
              <div className="mb-3">
                <select onChange={handleCustomerChange} value={customer} required id="customer" name="customer" className="form-select">
                  <option value="">Choose a customer</option>
                  {customers.map(item => {
                    return (
                        <option key={item.id} value={item.id}>
                            {`${item.first_name} ${item.last_name}`}
                        </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePriceChange} value={price} placeholder="Price" required type="text" id="price" className="form-control" />
                <label htmlFor="name">Price</label>
              </div>
              <button onClick={() => window.location.reload()} className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}
