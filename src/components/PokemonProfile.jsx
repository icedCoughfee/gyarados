import React, { useState } from "react";
import {
  getPkmnImgId,
  getPkmnHeight,
  getPkmnWeight,
  getPkmnGenderRatio,
  getPropertyForLanguage
} from "../utility/pokemon";
import CONSTANTS from "../constants";
import get from "lodash/get";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

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

  const pokemonName = names.filter(n => n.language.name === "en")[0].name;
  const pokemonId = getPkmnImgId(id);
  const pokemonGenera = genera.filter(g => g.language.name === "en")[0].genus;
  const pokemonHeight = getPkmnHeight(height);
  const pokemonWeight = getPkmnWeight(weight);
  const pokemonGenderRatio = getPkmnGenderRatio(gender_rate);
  const pokemonStepsToHatch = 255 * (hatch_counter + 1);
  const pokemonBgImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`;

  const useStyles = makeStyles(theme => ({
    root: {
      flex: 1,
      maxWidth: "1240px"
    },
    light: {
      color: "#c9c9c9"
    },
    bgImage: {
      backgroundImage: `url(${pokemonBgImg})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "250px"
    },
    chip: {
      margin: theme.spacing(1)
    },
    hiddenImg: {
      display: "none"
    },
    container: {
      marginBottom: theme.spacing(2)
    }
  }));

  const classes = useStyles();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className={classes.root}>
      <Fade in={imgLoaded}>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12} className={classes.bgImage}>
            <img
              src={pokemonBgImg}
              onLoad={() => {
                setImgLoaded(true);
              }}
              className={classes.hiddenImg}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h3" component="h2">
              {pokemonName}
              <span className={classes.light}>#{pokemonId}</span>
            </Typography>
            <Grid container className={classes.container} justify="center">
              <Grid item sm={5} xs={12}>
                <Chip
                  color="secondary"
                  icon={<FaceIcon />}
                  className={classes.chip}
                  label="Fire"
                />
                <Chip color="primary" icon={<FaceIcon />} label="Dragon" />
              </Grid>
              <Grid item sm={7} xs={12}>
                <Typography variant="h4" component="h2">
                  <span className={classes.light}>{pokemonGenera}</span>
                </Typography>
              </Grid>
            </Grid>
            <PokemonProfileGridAttribute
              attribute="Weight"
              value={`${pokemonWeight.imperial.toFixed(1)} lbs`}
              classes={classes}
            />
            <PokemonProfileGridAttribute
              attribute="Height"
              value={`${pokemonHeight.imperial.feet}'${pokemonHeight.imperial.inches}"`}
              classes={classes}
            />
            <PokemonProfileGridAttribute
              attribute="Abilities"
              value={abilities.map((abilityObj, index) => {
                let abilityName = getPropertyForLanguage(
                  abilityObj.ability.node,
                  "name",
                  CONSTANTS.LANG_ENGLISH
                );
                return (
                  <span key={abilityObj.ability.name}>
                    {abilityName}
                    {!index && abilities.length > 1 ? ", " : ""}
                  </span>
                );
              })}
              classes={classes}
            />
            <PokemonProfileGridAttribute
              attribute="Egg Groups"
              value={egg_groups.map((eggGroupObj, index) => {
                let eggGroupName = getPropertyForLanguage(
                  eggGroupObj.node,
                  "name",
                  CONSTANTS.LANG_ENGLISH
                );
                return (
                  <span key={eggGroupObj.name}>
                    {eggGroupName}
                    {!index && egg_groups.length > 1 ? ", " : ""}
                  </span>
                );
              })}
              classes={classes}
            />
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

function PokemonProfileGridAttribute({ attribute, value, classes }) {
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          {attribute}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="h2">
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PokemonProfile;
