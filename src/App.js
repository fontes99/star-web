import React, {useEffect, useState} from 'react';
import Ship from './categories/Ship';
import People from './categories/People';
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
    setSearch('');
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
    return(
      items.map(item => (
        <Ship
          key={item.name} 
          name={item.name}
          title={item.title}
          model={item.model}
          cost={item.cost_in_credits}
          clas={item.starship_class}
          films={item.films}
        />
      ))
    )
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
