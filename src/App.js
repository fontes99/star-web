import React, {useEffect, useState} from 'react';
import Ship from './categories/Ship';
import People from './categories/People';
import Planet from './categories/Planet';
import Specie from './categories/Specie';
import Vehicle from './categories/Vehicle';
import Film from './categories/Film';
import './App.css';

const App = () => {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('starships');
  
  useEffect( () => {
    getItems();
  }, [query, category]);

  const getItems = async () => {
    const response = await fetch(
      `https://swapi.co/api/${category}/?search=${query}`
    );
    const data = await response.json();
    setItems(data.results);
    console.log(data.results)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const updateCategory = e =>{
    setCategory(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // setSearch('');
  };

  const displayItem = () => {
    if (category === 'people') {
      return(
        items.map(item => (
          <People
            key={item.name} 
            name={item.name}
            birth={item.birth_year}
            homeWorld={item.homeworld}
            species={item.species}
            films={item.films}
          />
        ))
      )
    }
    else if (category === 'starships') {
      return(
        items.map(item => (
          <Ship
          key={item.name} 
          name={item.name}
          model={item.model}
          cost={item.cost_in_credits}
          crew={item.crew}
          manufacturer={item.manufacturer}
          pilots={item.pilots}
          />
        ))
      )
    }
    else if (category === 'planets') {
      return(
        items.map(item => (
          <Planet
            key={item.name} 
            name={item.name}
            population={item.population}
            climate={item.climate}
            terrain={item.terrain}
            surface_water={item.surface_water}
          />
        ))
      )
    }
    else if (category === 'species') {
      return(
        items.map(item => (
          <Specie
            key={item.name}
            name={item.name}
            classification={item.classification}
            homeworld={item.homeworld}
            language={item.language}
            avg_lifespan={item.average_lifespan}
          />
        ))
      )
    }
    else if (category === 'vehicles') {
      return(
        items.map(item => (
          <Vehicle
            key={item.name} 
            name={item.name}
            model={item.model}
            vehicle_class={item.vehicle_class}
            passengers={item.passengers}
            cargo_capacity={item.cargo_capacity}
          />
        ))
      )
    }
    else if (category === 'films') {
      return(
        items.map(item => (
          <Film
            key={item.title}
            title={item.title}
            director={item.director}
            release_date={item.release_date}
          />
        ))
      )
    }
  };

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <select className="selectOpt" onChange={updateCategory}>
          <option value="starships">Starships</option>
          <option value="people">Characters</option>
          <option value="planets">Planets</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
          <option value="films">Films</option>
          
        </select>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      
      <div className="items">
        {displayItem()}
      </div>
    
    </div>
  );
};

export default App;
