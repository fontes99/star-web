import React from 'react';
import style from './item.module.css';

const Film = ({title, director, release_date}) => {
    return(
        <div className={style.Item}>
            <h1>{title}</h1>
            <b>Director:</b>
            <p>{director}</p>
            <b>Release Date:</b>
            <p>{release_date}</p>
        </div>
    );
};

export default Film;