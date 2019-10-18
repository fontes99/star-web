import React from 'react';
import style from './item.module.css';

const Vehicle = ({name, model, vehicle_class, passengers, cargo_capacity}) => {
    return(
        <div className={style.Item}>
            <h1>{name}</h1>
            <b>Model:</b>
            <p>{model}</p>
            <b>Vehicle Class:</b>
            <p>{vehicle_class}</p>
            <b>Passengers Capacity:</b>
            <p>{passengers}</p>
            <b>Cargo Capacity:</b>
            <p>{cargo_capacity} kg</p>
        </div>
    );
};

export default Vehicle;