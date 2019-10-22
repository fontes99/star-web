import React from 'react';
import style from './item.module.css'

import {Link} from 'react-router-dom';

const Planet = ({name, population, climate, terrain, surface_water}) => {
    return(
        <div className={style.Item}>
            <Link to={`/planets/${name}`} style={{textDecoration: 'none'}}>
            <h1>{name}</h1>
            </Link>
            
            <b>Population:</b>
            <p>{population} habitants</p>
            
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