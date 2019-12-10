import React from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Pokedex = ({ pokemonNodes, onLoadMore, loading }) => {
  const pkmnNodeList = pokemonNodes.map(PkmnConnection => PkmnConnection.node);
  console.log("list", pkmnNodeList);
  return (
    <div>
      <h2>Pokemon</h2>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {pkmnNodeList.map(pkmn => (
          <PokemonCard
            key={pkmn.order}
            name={pkmn.name}
            image={pkmn.sprites.front_default}
          />
        ))}
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => onLoadMore()}
        >
          Load More
        </Button>
      </Grid>
    </div>
  );
};

export default Pokedex;
