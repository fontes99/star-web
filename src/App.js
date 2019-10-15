import React, {useEffect, useState} from 'react';
import Ship from './Ship';
import './App.css';

const App = () => {

  const [starships, setStarships] = useState([]);
  
  useEffect( () => {
    getStarships();
  }, []);

  const getStarships = async () => {
    const response = await fetch(
      `https://swapi.co/api/starships/`
    );
    const data = await response.json();
    setStarships(data.results);
    console.log(data.results)
  };

  return(
    <div className="App">
      
      <form className="search-form">
        <select className="selectOpt">
          <option value="starship">Starships</option>
          <option value="planet">Planets</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
          <option value="films">Films</option>
        </select>
        <input className="search-bar" type="text" placeholder="Type here your search"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className='ships'>
        {starships.map(starship => (
          <Ship
          key={starship.name} 
          title={starship.name} 
          model={starship.model}
          cost={starship.cost_in_credits}
          clas={starship.starship_class}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
