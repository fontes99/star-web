import React from 'react';
import style from './item.module.css';

import {Link} from 'react-router-dom';

const Film = ({title, director, producer, release_date}) => {
    return(
        <div className={style.Item}>
            <Link to={`/films/${title}`} style={{textDecoration: 'none'}}>
            <h1>{title}</h1>
            </Link>
            <b>Director:</b>
            <p>{director}</p>
            <b>Producer:</b>
            <p>{producer}</p>
            <b>Release Date:</b>
            <p>{release_date}</p>
        </div>
    );
};

export default Film;