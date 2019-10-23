import React, {useState, useEffect} from 'react';
import style from './pages.module.css'

import {Link} from 'react-router-dom';

const Peoples = ({match}) =>{

    useEffect(() => {
        getInfo();
        getPlanet();
        getSpecies();
    }, );

    const [infos, setInfo] = useState([{}]);
    const [planet, setPlanet] = useState('');
    const [specie, setSpecies] = useState('');     
    
    const getInfo = async () => {
        const response = await fetch(
          `https://swapi.co/api/people/?search=${match.params.id}`
        );
        const data = await response.json();
        setInfo(data.results[0]);
    };

    const getPlanet = async () => {
        const response = await fetch(infos.homeworld);
        const data = await response.json();
        setPlanet(data.name);
    };
    
    const getSpecies = async () => {
        const response = await fetch(infos.species);
        const data = await response.json();
        setSpecies(data.name);
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

            <b>Birth year:</b>
            <p>{infos.birth_year}</p>

            <b>Eye color:</b>
            <p>{infos.eye_color}</p>

            <b>Gender:</b>
            <p>{infos.gender}</p>

            <b>Hair Color:</b>
            <p>{infos.hair_color}</p>

            <b>Height:</b>
            <p>{infos.height} cm</p>

            <b>Mass:</b>
            <p>{infos.mass} kg</p>

            <b>Skin Color:</b>
            <p>{infos.skin_color}</p>

            <b>Home World:</b>
            <Link to={`/planets/${planet}`} style={{textDecoration: 'none'}}>
            <p className={style.Planet}>{planet}</p>
            </Link>

            <b>Species:</b>
            <p>{specie}</p>
    
        </div>
    </div>
        
    );
};

export default Peoples;