import React, {useEffect, useState} from 'react';
import DataFetch from './DataFetch';

function ModelList() {

    const models = DataFetch('http://localhost:8100/api/models/').models;


    return (
        <>
        <h1>Manufacturers</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
                </thead>
                <tbody>
                {models && models.map(model => {
                    return (
                    <tr key={ model.id }>
                        <td>{ model.name }</td>
                        <td>{ model.manufacturer.name }</td>
                        <td><img src={ model.picture_url } alt="picture of a car" width="300" height="200"/></td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
  }

export default ModelList;
