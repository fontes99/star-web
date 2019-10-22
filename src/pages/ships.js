import React from 'react';
import style from './pages.module.css'

import {BrowserRouter as Router, Link} from 'react-router-dom';

const Ships = ()=>{

    return(

    <div className={style.Back}>
        <Link to='/' style={{textDecoration: 'none'}}>
            <h1 className='theLink'>Home</h1>
        </Link>
        <div className={style.Pages}>
            <b>Model:</b>
            <b>Cost:</b>
            <b>Crew Capacity:</b>
            <b>Manufactured by:</b>
        </div>
    </div>
        
    );
};

export default Ships;