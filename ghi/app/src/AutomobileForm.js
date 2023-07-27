import React, { useState, useEffect } from 'react';


export default function AutomobileForm() {
    const [color, setColor] = useState('');
    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const [year, setYear] = useState('');
    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const [models, setModels] = useState([]);
    const [model, setModel] = useState('');
    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            color: color,
            year: year,
            vin: vin,
            model_id: model,
        };

        const autosUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(autosUrl, fetchConfig);
        if(response.ok){
            setColor('');
            setYear('');
            setVin('');
            setModel('');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8100/api/models/")
            if (response.ok) {
                const data = await response.json()
                setModels(data.models)
            }
        }
        fetchData();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add an automobile to inventory</h1>
            <div className="form-floating mb-3">
                <input onChange={handleColorChange} value={color} type="text" className="form-control" id="color" />
                <label htmlFor="floatingInput">Color</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleYearChange} value={year} type="text" className="form-control" id="year" />
                <label htmlFor="floatingPassword">Year</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={handleVinChange} value={vin} type="text" className="form-control" id="vin" />
                <label htmlFor="floatingPassword">VIN</label>
            </div>
            <div className="mb-3" key="model-dropdown">
                <select onChange={handleModelChange} value={model} required id="model" name="model" className="form-select">
                  <option value="">Choose a model</option>
                  {models && models.map(item => (
                        <option key={item.id} value={item.id}>
                            { item.name }
                        </option>
                  ))}
                </select>
              </div>
            <div>
                <button className="btn btn-primary" type="submit">Create</button>
            </div>
        </form>

    )
}
