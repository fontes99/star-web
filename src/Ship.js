import React from 'react';
import style from './ship.module.css'

const Ship = ({name, title, model, cost, clas})=>{
    return(
        <div className={style.Ship}>
            <h1>{title}</h1>
            <h1>{name}</h1>
            <b>Class:</b>
            <p>{clas}</p>
            <b>Model:</b>
            <p>{model}</p>
            <b>Cost:</b>
            <p>{cost} credits</p> 
        </div>
    );
};

export default Ship;