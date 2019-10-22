import React, {useEffect, useState} from 'react';
import style from './item.module.css'

import {Link} from 'react-router-dom';

const People = ({name, birth, homeWorld, species})=>{

    useEffect( () => {
        getPlanet();
        getSpecies();
      }, );
    
    const [planet, setPlanet] = useState('');
    const [specie, setSpecies] = useState('');

    const getPlanet = async () => {
        const response = await fetch(homeWorld);
        const data = await response.json();
        setPlanet(data.name);
      };

    const getSpecies = async () => {
        const response = await fetch(species);
        const data = await response.json();
        setSpecies(data.name);
    };

    return(
        <div className={style.Item}>

            <Link to={`/peoples/${name}`} style={{textDecoration: 'none'}}>
            <h1>{name}</h1>
            </Link>

            <b>Birth year:</b>
            <p>{birth}</p>

            <b>Home Planet:</b>
            <Link to={`/planets/${planet}`} style={{textDecoration: 'none'}}>
            <p>{planet}</p>
            </Link>
            
            <b>Species:</b>
            <Link to={`/species/${specie}`} style={{textDecoration: 'none'}}>
            <p>{specie}</p>
            </Link>
        </div>
    );
};

export default People;