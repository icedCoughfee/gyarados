import React from "react";
import {
  getPkmnImgId,
  getPkmnHeight,
  getPkmnWeight,
  getPkmnGenderRatio
} from "../utility/pokemon";
import CONSTANTS from "../constants";
import get from "lodash/get";

function PokemonProfile({ pokemon }) {
  const { id, height, weight, order, abilities, stats, types } = pokemon;
  const {
    name,
    color,
    capture_rate,
    egg_groups,
    evolves_from_species,
    gender_rate,
    flavor_text_entries,
    names,
    genera,
    generation,
    growth_rate,
    habitat,
    hatch_counter
  } = get(pokemon, "species.node");

  const pokemonName = names.filter(n => n.language.name == "en")[0].name;
  const pokemonGenera = genera.filter(g => g.language.name == "en")[0].genus;
  const pokemonHeight = getPkmnHeight(height);
  const pokemonWeight = getPkmnWeight(weight);
  const pokemonGenderRatio = getPkmnGenderRatio(gender_rate);

  return (
    <>
      <ul>
        <li>id: #{id} (translate to #000 format)</li>
        <li>name: {pokemonName}</li>
        <li>genus: {pokemonGenera}</li>

        <li>
          height: {pokemonHeight.imperial.feet}'{pokemonHeight.imperial.inches}
          ", {pokemonHeight.metric} m
        </li>
        <li>
          weight: {pokemonWeight.imperial.toFixed(1)} lbs,
          {pokemonWeight.metric} kg
        </li>
        <li>capture rate: {capture_rate}</li>
        <li>color: {color.name}</li>
        <li>
          egg groups:
          <ul>
            {egg_groups.map(eg => (
              <li key={eg.name}>{eg.name}</li>
            ))}
          </ul>
        </li>
        <li>
          abilities
          <ul>
            {abilities.map(abilityObj => (
              <li key={abilityObj.ability.name}>{abilityObj.ability.name}</li>
            ))}
          </ul>
        </li>
        {evolves_from_species && (
          <li>evolves from {evolves_from_species.name}</li>
        )}
        <li>
          gender ratio: {pokemonGenderRatio.male}% male,
          {pokemonGenderRatio.female}% female
        </li>
        <li>growth rate: {growth_rate.name}</li>
        <li>hatch counter: steps needed ~{255 * (hatch_counter + 1)}</li>
        <li>habitat: {habitat.name}</li>
        <li>
          types:
          <ul>
            {types.map(typeObj => (
              <li key={typeObj.type.name}>{typeObj.type.name}</li>
            ))}
          </ul>
        </li>
      </ul>
      <img
        src={`${CONSTANTS.PKMN_IMG_URL}${getPkmnImgId(pokemon.id)}.png`}
        alt={name}
      />
    </>
  );
}

export default PokemonProfile;
