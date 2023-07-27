import React, {useEffect, useState} from 'react';
import DataFetch from './DataFetch';

function ModelForm() {
    const manufacturers = DataFetch('http://localhost:8100/api/manufacturers/').manufacturers;


    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const [pictureUrl, setPictureUrl] = useState('');
    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }

    const [manufacturer, setManufacturer] = useState('');
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;


        const url = 'http://localhost:8100/api/models/';

        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const newData = await response.json();

          setName('');
          setPictureUrl('');
          setManufacturer('');
        }
        else{
            console.log("Failed to response")
        }
      }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a vehicle model</h1>
            <form onSubmit={handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} placeholder="Model name..." value={name} required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Model Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePictureUrlChange} placeholder="Picture URL..." value={pictureUrl} required type="text" name="pictureUrl" id="pictureUrl" className="form-control"/>
                <label htmlFor="pictureUrl">Picture URL</label>
              </div>
              <div className="mb-3">
                <select onChange={handleManufacturerChange} value = {manufacturer} required id="manufacturer" name="manufacturer" className="form-select">
                  <option value="">Choose a manufacturer</option>
                  {manufacturers && manufacturers.map(manu => {
                        return (
                        <option key={manu.id} value={manu.id}>
                            {manu.name}
                        </option>
                        );
                    })}
                </select>
              </div>

              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>

    );

}

export default ModelForm;
