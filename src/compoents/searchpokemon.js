import React, {useState } from 'react';
import axios from 'axios';




function Searchpokemon(props) {
  let [inputPokemon, setInputPokemon] = useState("");
  
  const handleInput = (e) => {

    setInputPokemon(e.target.value);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();

      let url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}/`;
      try {
        const pokemonRetrieve = await axios(url);
        props.handlePokemonData(pokemonRetrieve.data);
        setInputPokemon("");
      } catch (error) {
        setInputPokemon("");
        alert("Pokemon does not exist")
        console.log('error :>> ', error);
      }


  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Pokemon to get:
          <input type="text" value={inputPokemon} onChange={(e) => handleInput(e)} />
        </label>
        <input type="submit" value="Submit" />
    </form>

  );
}

export default Searchpokemon;
