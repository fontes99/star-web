import React, {useState, useEffect} from 'react';
import style from './pages.module.css'

import {Link} from 'react-router-dom';

const Ships = ({match}) =>{

    useEffect(() => {
        getInfo();
    }, );

    const [infos, setInfo] = useState([{}]);


    const getInfo = async () => {
        const response = await fetch(
          `https://swapi.co/api/starships/?search=${match.params.id}`
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

            <b>Class:</b>
            <p>{infos.starship_class}</p>
        
            <b>Model:</b>
            <p>{infos.model}</p>

            <b>Cost:</b>
            <p>{infos.cost_in_credits} credits</p>

            <b>Crew Capacity:</b>
            <p>{infos.crew}</p>

            <b>Passengers Capacity:</b>
            <p>{infos.passengers}</p>

            <b>Cargo Capacity:</b>
            <p>{infos.cargo_capacity}</p>

            <b>Manufactured by:</b>
            <p>{infos.manufacturer}</p>

            <b>Length:</b>
            <p>{infos.length} meters</p>

            <b>Maximum number of Megalights:</b>
            <p>{infos.MGLT} MGLT</p>

            <b>Macimum atmospheric speed</b>
            <p>{infos.max_atmosphering_speed} km/h</p>

            <b>Hyperdrive rating:</b>
            <p>{infos.hyperdrive_rating}</p>

            <b>Consumables:</b>
            <p>{infos.consumables}</p>

        </div>
    </div>
        
    );
};

export default Ships;