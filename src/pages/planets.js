import React, {useState, useEffect} from 'react';
import style from './pages.module.css'

import {Link} from 'react-router-dom';

const Planets = ({match}) =>{

    useEffect(() => {
        getInfo();
    }, );

    const [infos, setInfo] = useState([{}]);


    const getInfo = async () => {
        const response = await fetch(
          `https://swapi.co/api/planets/?search=${match.params.id}`
        );
        const data = await response.json();
        setInfo(data.results[0]);
    };

    return(

    <div className={style.Back}>
        <Link to='/' style={{textDecoration: 'none'}}>
            <div className={style.theLink}>
                <h1>Home</h1>
            </div>
        </Link>
        <div className={style.Pages}>
            
            <h1>{infos.name}</h1>

            <b>Diameter</b>
            <p>{infos.diameter}</p>

            <b>Rotation Period:</b>
            <p>{infos.rotation_period} hours</p>

            <b>Orbital Period:</b>
            <p>{infos.orbital_period} days</p>

            <b>Gravity:</b>
            <p>{infos.gravity}</p>

            <b>Population:</b>
            <p>{infos.population}</p>

            <b>Climate</b>
            <p>{infos.climate}</p>
            
            <b>Terrain:</b>
            <p>{infos.terrain}</p>

            <b>Surface Water Percentage:</b>
            <p>{infos.surface_water}%</p>

        </div>
    </div>
        
    );
};

export default Planets;