import React, {useEffect, useState} from 'react';
import style from './item.module.css'

const People = ({name, birth, homeWorld, species})=>{

    useEffect( () => {
        getPlanet();
        getSpecies();
      }, []);
    
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
            <h1>{name}</h1>
            <b>Birth year:</b>
            <p>{birth}</p>
            <b>Home Planet:</b>
            <p>{planet}</p>
            <b>Species:</b>
            <p>{specie}</p> 
        </div>
    );
};

export default People;