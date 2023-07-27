import React, {useEffect, useState} from 'react';
import DataFetch from './DataFetch';

function ManufacturersList() {

    const manufacturer = DataFetch('http://localhost:8100/api/manufacturers/').manufacturers;

    return (
        <>
        <h1>Manufacturers</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {manufacturer && manufacturer.map(manufacturer => {
                    return (
                    <tr key={ manufacturer.id }>
                        <td>{ manufacturer.name }</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
  }

export default ManufacturersList;
