import React, {useEffect, useState} from 'react';
import style from './item.module.css';

import {Link} from 'react-router-dom';

const Specie = ({name, classification, homeworld, language, avg_lifespan}) => {
    
    useEffect( () => {
        getPlanet();
      }, );
      
    const [planet, setPlanet] = useState('');

    const getPlanet = async () => {
        const response = await fetch(homeworld);
        const data = await response.json();
        setPlanet(data.name);
    };
    
    return(
        <div className={style.Item}>
            <Link to={`/species/${name}`} style={{textDecoration: 'none'}}>
            <h1>{name}</h1>
            </Link>

            <b>Homeworld:</b>
            <Link to={`/planets/${planet}`} style={{textDecoration: 'none'}}>
            <p className={style.Planet}>{planet}</p>
            </Link>

            <b>Language:</b>
            <p>{language}</p>

            <b>Classification:</b>
            <p>{classification}</p> 
            
            <b>Average Lifespan:</b>
            <p>{avg_lifespan} years</p>
        </div>
    );
};

export default Specie;