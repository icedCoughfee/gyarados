import React from "react";
import { getPkmnImgId } from "../utility/pokemon";
import CONSTANTS from "../constants";

function PokemonProfile({ location }) {
  const { pokemon } = location.state;
  const { name } = pokemon;
  return (
    <>
      <div>{name}</div>
      <img
        src={`${CONSTANTS.PKMN_IMG_URL}${getPkmnImgId(pokemon.id)}.png`}
        alt={name}
      />
    </>
  );
}

export default PokemonProfile;
