import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import throttle from "lodash/throttle";

const Pokedex = ({ pokemonNodes, onLoadMore, loading }) => {
  const [loadBtnClicked, setLoadBtnClicked] = useState(false);

  useEffect(() => {
    const handleScroll = function reachBottom() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight / 3 &&
        !loading
      ) {
        onLoadMore();
      }
    };

    window.addEventListener("scroll", throttle(handleScroll, 2000));
    return () =>
      window.removeEventListener("scroll", throttle(handleScroll, 2000));
  });

  const pkmnNodeList = pokemonNodes.map(PkmnConnection => PkmnConnection.node);
  console.log("list", pkmnNodeList);
  return (
    <div>
      <h2>Pokemon</h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
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
      {loadBtnClicked ? null : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onLoadMore();
            setLoadBtnClicked(true);
          }}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default Pokedex;
