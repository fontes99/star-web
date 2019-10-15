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
        <input className="search-bar" type="text"/>
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
