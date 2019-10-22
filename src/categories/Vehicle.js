import React from 'react';
import style from './item.module.css';

import {Link} from 'react-router-dom';

const Vehicle = ({name, vehicle_class, cost, passengers, cargo_capacity}) => {
    return(
        <div className={style.Item}>
            <Link to={`/vehicles/${name}`} style={{textDecoration: 'none'}}>
            <h1>{name}</h1>
            </Link>
           
            <b>Vehicle Class:</b>
            <p>{vehicle_class}</p>
           
            <b>Cost:</b>
            <p>{cost} credits</p>
           
            <b>Passengers Capacity:</b>
            <p>{passengers}</p>
           
            <b>Cargo Capacity:</b>
            <p>{cargo_capacity} kg</p>
        </div>
    );
};

export default Vehicle;