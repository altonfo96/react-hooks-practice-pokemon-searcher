import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  {pokemons.map((pokemon) => {
    return (
    <Card.Group itemsPerRow={6}>
      <PokemonCard pokemon={pokemon}/>
    </Card.Group>
  );
  })}
  
}

export default PokemonCollection;
