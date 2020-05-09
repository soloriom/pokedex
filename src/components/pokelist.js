import React from 'react';


function Pokelist({pokemons}) {
  let list = [];
  for (const pokemon in pokemons) {
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