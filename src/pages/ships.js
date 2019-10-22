import React from 'react';
import style from './pages.module.css'

import {BrowserRouter as Router, Link} from 'react-router-dom';

const Ships = ()=>{

    return(

    <div className={style.Back}>
        <div className={style.Pages}>
            <Link to='/'>
            <p>Home</p>
            </Link>
            <b>Model:</b>
            <b>Cost:</b>
            <b>Crew Capacity:</b>
            <b>Manufactured by:</b>
            <b>Known pilots:</b>
        </div>
    </div>
        
    );
};

export default Ships;