import React, {useEffect} from 'react';
import style from './item.module.css'

import {Link} from 'react-router-dom';

const Ship = ({name, clas, cost, crew, manufacturer})=>{
    
    useEffect( () => {
    }, []);

    return(
        
        <div className={style.Item}>
            <Link to={`/ships/${name}`} style={{textDecoration: 'none'}}>
            <h1>{name}</h1>
            </Link>
            <b>Class:</b>
            <p>{clas}</p>
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