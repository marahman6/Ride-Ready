import React, { useState } from 'react';


export default function CustomerForm() {
    const [fname, setFname] = useState('');
    const handleFnameChange = (event) => {
        const value = event.target.value;
        setFname(value);
    }

    const [lname, setLname] = useState('');
    const handleLnameChange = (event) => {
        const value = event.target.value;
        setLname(value);
    }

    const [address, setAddress] = useState('');
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const [phone, setPhone] = useState('');
    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}
        data.first_name = fname;
        data.last_name = lname;
        data.address = address;
        data.phone_number = phone;

        const splUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(splUrl, fetchConfig);
        if(response.ok){
            setFname('');
            setLname('');
            setAddress('');
            setPhone('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add a Customer</h1>
            <div className="form-floating mb-3">
                <input onChange={handleFnameChange} value={fname} type="text" className="form-control" id="first_name" />
                <label htmlFor="floatingInput">First name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleLnameChange} value={lname} type="text" className="form-control" id="last_name" />
                <label htmlFor="floatingPassword">Last name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleAddressChange} value={address} type="text" className="form-control" id="employee_id" />
                <label htmlFor="floatingPassword">Address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handlePhoneChange} value={phone} type="text" className="form-control" id="employee_id" />
                <label htmlFor="floatingPassword">Phone number</label>
            </div>
            <div>
                <button className="btn btn-primary" type="submit">Create</button>
            </div>
        </form>

    )
}
