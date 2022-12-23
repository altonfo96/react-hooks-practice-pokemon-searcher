import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [flip,setFlip] = useState(false)
  function handleFlip(){
    setFlip(!flip)
  {
    flip? pokemon.sprites.front: pokemon.sprites.back
  }
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img src = {pokemon.sprites.front} onClick = {handleFlip}alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
