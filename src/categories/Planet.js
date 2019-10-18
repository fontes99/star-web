import React from 'react';
import style from './item.module.css';

const Planet = ({name, population, climate, terrain, surface_water}) => {
    return(
        <div className={style.Item}>
            <h1>{name}</h1>
            <b>Population:</b>
            <p>{population}</p>
            <b>Climate:</b>
            <p>{climate}</p>
            <b>Terrain:</b>
            <p>{terrain}</p> 
            <b>Percentage of water on it's surface:</b>
            <p>{surface_water}%</p>
        </div>
    );
};

export default Planet;