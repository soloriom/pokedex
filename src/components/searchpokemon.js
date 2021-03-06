import React, {useState } from 'react';
import axios from 'axios';




function Searchpokemon(props) {
  let [inputPokemon, setInputPokemon] = useState("");
  
  const handleInput = (e) => {
    setInputPokemon(e.target.value);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
      let url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}/`;
      try {
        const pokemonRetrieve = await axios(url);
        props.handlePokemonData(pokemonRetrieve.data);
        setInputPokemon("");
      } catch (error) {
        setInputPokemon("");
        alert(`${inputPokemon} does not exist`)
      }
  }

  return (
    <form style={{ marginTop: "50px"}} onSubmit={handleSubmit}>
        <label>
          Pokemon to get: 
          <input style={{marginLeft: "10px"}} type="text" value={inputPokemon} onChange={(e) => handleInput(e)} />
        </label>
        <input type="submit" value="Submit" />
    </form>

  );
}

export default Searchpokemon;
