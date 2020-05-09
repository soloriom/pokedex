import React from 'react';


function Pokelist({pokemons}) {
  console.log("props", pokemons)
  
  let list = [];
  
  for (const pokemon in pokemons) {
    console.log("pokemon inside", pokemon)
    list.push(
      <React.Fragment  key={pokemon} >
        <img src={pokemons[pokemon].img} alt={pokemon}></img>
        <div>Name: {pokemon}</div>
        <div>weight: {pokemons[pokemon].id}</div>
        <p/>
      </React.Fragment>
    );
  }
  
  return (
    <ul>
     {list}
    </ul>
  );
}

export default  Pokelist;