import React, {useEffect} from 'react';
import style from './item.module.css'

import {Link} from 'react-router-dom';

const Ship = ({name, model, cost, crew, manufacturer})=>{
    
    useEffect( () => {
    }, []);

    return(
        
        <div className={style.Item}>
            <Link to={`/ships/${name}`}>
            <h1>{name}</h1>
            </Link>
            <b>Model:</b>
            <p>{model}</p>
            <b>Cost:</b>
            <p>{cost} credits</p>
            <b>Crew Capacity:</b>
            <p>{crew}</p>
            <b>Manufactured by:</b>
            <p>{manufacturer}</p>
        </div>
        
    );
};

export default Ship;