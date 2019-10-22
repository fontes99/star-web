import React, {useState, useEffect} from 'react';
import style from './pages.module.css'

import {Link} from 'react-router-dom';

const Films = ({match}) =>{

    useEffect(() => {
        getInfo();
    }, []);

    const [infos, setInfo] = useState([{}]);

    const getInfo = async () => {
        const response = await fetch(
          `https://swapi.co/api/films/?search=${match.params.id}`
        );
        const data = await response.json();
        setInfo(data.results[0]);
        console.log(data.results[0])
    };

    return(

    <div className={style.Back}>
        <Link to='/' style={{textDecoration: 'none'}}>
            <h1 className='theLink'>Home</h1>
        </Link>
        <div className={style.Pages}>
            
            <h1>{infos.title}</h1>

            <b>Episode:</b>
            <p>{infos.episode_id}</p>

            <b>Opening crawl:</b>
            <p>{infos.opening_crawl}</p>

            <b>Director:</b>
            <p>{infos.director}</p>

            <b>Producer:</b>
            <p>{infos.producer}</p>

            <b>Release Date:</b>
            <p>{infos.release_date}</p>

        </div>
    </div>
        
    );
};

export default Films;