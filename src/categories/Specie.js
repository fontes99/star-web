import React, {useEffect, useState} from 'react';
import style from './item.module.css';

const Specie = ({name, classification, homeworld, language, avg_lifespan}) => {
    
    useEffect( () => {
        getPlanet();
      }, );
      
    const [planet, setPlanet] = useState('');

    const getPlanet = async () => {
        const response = await fetch(homeworld);
        const data = await response.json();
        setPlanet(data.name);
        console.log(data);
    };
    
    return(
        <div className={style.Item}>
            <h1>{name}</h1>
            <b>Homeworld:</b>
            <p>{planet}</p>
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