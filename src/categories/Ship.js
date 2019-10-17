import React from 'react';
import style from './item.module.css'

const Ship = ({name, model, cost, clas})=>{
    return(
        <div className={style.Item}>
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