import React, {useState} from 'react';


export default function SalespersonForm() {

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

    const [id, setId] = useState('');
    const handleIdChange = (event) => {
        const value = event.target.value;
        setId(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {}
        data.first_name = fname;
        data.last_name = lname;
        data.employee_id = id;

        const splUrl = 'http://localhost:8090/api/salespeople/';
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
            setId('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Salesperson</h1>
            <div className="form-floating mb-3">
                <input onChange={handleFnameChange} value={fname} type="text" className="form-control" id="first_name" />
                <label htmlFor="floatingInput">First name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleLnameChange} value={lname} type="text" className="form-control" id="last_name" />
                <label htmlFor="floatingPassword">Last name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleIdChange} value={id} type="text" className="form-control" id="employee_id" />
                <label htmlFor="floatingPassword">Employee ID</label>
            </div>
            <div>
                <button className="btn btn-primary" type="submit">Create</button>
            </div>
        </form>

    )
}
