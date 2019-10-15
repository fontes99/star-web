import React from 'react';
import style from './ship.module.css'

const Ship = ({title, model, cost, clas})=>{
    return(
        <div className={style.Ship}>
            <h1>{title}</h1>
            <b>Class:</b>
            <p>{clas}</p>
            <b>Model:</b>
            <p>{model}</p>
            <b>Cost:</b>
            <p>{cost} credits</p>
            <br/>
        </div>
    );
};

export default Ship;