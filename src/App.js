import React, { useState } from 'react';
import Searchpokemon from "./components/searchpokemon";
import Pokelist from "./components/pokelist";
import './App.css';

function App() {
  let [pokemonData, setPokemonData] = useState({});
  
  const handleSetPokemondata = (data) =>  {
    const pokeName = data.name;
    const pokeArranged = {
      name: pokeName, 
      id:data.id,
      img: data.sprites.front_default
    };
    if (pokemonData[pokeName] === undefined) {
      setPokemonData({...pokemonData, [pokeName]: pokeArranged});
    } else {
      alert(`Pokemon ${pokeName} is already fetched`);
    }
  }

  return (
    <div className="App">
      <Searchpokemon handlePokemonData={handleSetPokemondata} />
      <Pokelist pokemons={pokemonData}/>
    </div>
  );
}

export default App;
