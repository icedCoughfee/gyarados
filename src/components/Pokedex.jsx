import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import { makeStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "hidden"
  },
  gridList: {
    width: "100%",
    height: "100%"
  },
  bgImg: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "auto !important"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const Pokedex = ({ pokemonNodes, onLoadMore, loading, width }) => {
  const pkmnNodeList = pokemonNodes.map(PkmnConnection => PkmnConnection.node);
  const classes = useStyles();

  const { colSize } = usePokedex(width);
  return (
    <div>
      <div className={classes.root}>
        <GridList
          cellHeight={300}
          className={classes.gridList}
          cols={colSize}
          spacing={10}
        >
          {pkmnNodeList.map(pkmn => {
            return (
              <GridListTile key={pkmn.id} className={classes.bgImg} cols={1}>
                <PokemonCard pokemon={pkmn} />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "40px" }}
      >
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

function usePokedex(width) {
  const [colSize, setColSize] = useState(0);

  useEffect(() => {
    switch (width) {
      case "xs":
        setColSize(2);
        break;
      case "sm":
        setColSize(3);
        break;
      case "md":
        setColSize(4);
        break;
      case "lg":
        setColSize(5);
        break;
      case "xl":
        setColSize(6);
        break;
      default:
        setColSize(1);
    }
  }, [width]);

  return { colSize };
}

export default withWidth()(Pokedex);
