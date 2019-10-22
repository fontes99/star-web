import React, {useState, useEffect} from 'react';
import style from './pages.module.css'

import {Link} from 'react-router-dom';

const Species = ({match}) =>{

    useEffect(() => {
        getInfo();
        getPlanet();
    }, );

    const [infos, setInfo] = useState([{}]);
    const [planet, setPlanet] = useState('');


    const getInfo = async () => {
        const response = await fetch(
          `https://swapi.co/api/species/?search=${match.params.id}`
        );
        const data = await response.json();
        setInfo(data.results[0]);
        console.log(data.results[0])
    };

    const getPlanet = async () => {
        const response = await fetch(infos.homeworld);
        const data = await response.json();
        setPlanet(data.name);
    };

    return(

    <div className={style.Back}>
        <Link to='/' style={{textDecoration: 'none'}}>
            <h1 className='theLink'>Home</h1>
        </Link>
        <div className={style.Pages}>
            
            <h1>{infos.name}</h1>

            <b>Classification:</b>
            <p>{infos.classification}</p>

            <b>Designation:</b>
            <p>{infos.designation}</p>

            <b>Average Height:</b>
            <p>{infos.average_height} cm</p>

            <b>Average Lifespan:</b>
            <p>{infos.average_lifespan} years</p>

            <b>Eye Color:</b>
            <p>{infos.eye_colors}</p>

            <b>Hair Colors:</b>
            <p>{infos.hair_colors}</p>

            <b>Skin Colors:</b>
            <p>{infos.skin_colors}</p>

            <b>Language:</b>
            <p>{infos.language}</p>

            <b>Home World:</b>
            <Link to={`/planets/${planet}`} style={{textDecoration: 'none'}}>
            <p>{planet}</p>
            </Link>

        </div>
    </div>
        
    );
};

export default Species;