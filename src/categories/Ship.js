import React, {useEffect, useState} from 'react';
import style from './item.module.css'

const Ship = ({name, model, cost, crew, manufacturer, pilots})=>{
    
    useEffect( () => {
        getPilots();
      }, );

    const [pilot, setPilots] = useState('');

    const getPilots = async () => {
        const response = await fetch(pilots);
        const data = await response.json();
        setPilots(data.name);
        console.log(data);
    };
    
    return(
        <div className={style.Item}>
            <h1>{name}</h1>
            <b>Model:</b>
            <p>{model}</p>
            <b>Cost:</b>
            <p>{cost} credits</p>
            <b>Crew Capacity:</b>
            <p>{crew}</p>
            <b>Manufactured by:</b>
            <p>{manufacturer}</p>
            <b>Known pilots:</b>
            <p>{pilot}</p>
        </div>
    );
};

export default Ship;