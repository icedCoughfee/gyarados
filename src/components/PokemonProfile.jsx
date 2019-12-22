import React, { useState } from "react";
import {
  getPkmnImgId,
  getPkmnHeight,
  getPkmnWeight,
  getPkmnGenderRatio,
  getPropertyForLanguage
} from "../utility/pokemon";
import { commaPerItem } from "../utility/text";
import CONSTANTS from "../constants";
import get from "lodash/get";
import capitalize from "lodash/capitalize";
import BaseStats from "./BaseStats";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import typePallete from "../styles/types.scss";
import mainStyles from "../styles/main.scss";

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
  const pokemonDescription = flavor_text_entries.filter(
    g => g.language.name === "en"
  )[0].flavor_text;
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
      marginRight: "5px",
      color: mainStyles.brandPrimaryTextColor
    },
    chipIcon: {
      width: "24px",
      height: "24px"
    },
    chipContainer: {
      display: "flex",
      alignItems: "center"
    },
    hiddenImg: {
      display: "none"
    },
    container: {
      marginBottom: theme.spacing(2)
    },
    pokemonName: {
      marginBottom: "5px"
    },
    attributeName: {
      flexDirection: "column"
    },
    hiddenAbility: {
      backgroundColor: "grey",
      padding: "0 2px",
      borderRadius: "3px",
      opacity: "0.8"
    }
  }));

  const classes = useStyles();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className={classes.root}>
      <Fade in={imgLoaded}>
        <Grid container spacing={3}>
          <Column sm={6} className={classes.bgImage}>
            <img
              src={pokemonBgImg}
              onLoad={() => {
                setImgLoaded(true);
              }}
              className={classes.hiddenImg}
            />
          </Column>
          <Column sm={6}>
            <Row>
              <Typography
                variant="h3"
                component="h2"
                className={classes.pokemonName}
              >
                {pokemonName}
                <span className={classes.light}>#{pokemonId}</span>
              </Typography>
            </Row>
            <Row justify="center" className={classes.container}>
              <Column
                sm={types.length > 1 ? 5 : 3}
                className={classes.chipContainer}
              >
                {types
                  .sort((a, b) => a.slot - b.slot)
                  .map(typeObj => {
                    const typeResourceName = typeObj.type.name;
                    return (
                      <Chip
                        key={typeResourceName}
                        icon={
                          <img
                            src={`/types/${typeResourceName}.png`}
                            className={classes.chipIcon}
                          />
                        }
                        label={capitalize(typeResourceName)}
                        className={classes.chip}
                        style={{
                          backgroundColor: typePallete[typeResourceName]
                        }}
                      />
                    );
                  })}
              </Column>
              <Column sm={types.length > 1 ? 7 : 9}>
                <Typography variant="h5" component="h2">
                  <span className={classes.light}>{pokemonGenera}</span>
                </Typography>
              </Column>
            </Row>
            <Row className={classes.container}>
              <Typography variant="body1" component="h2">
                {pokemonDescription}
              </Typography>
            </Row>
            <Row className={classes.container}>
              <Column xs={6} className={classes.attributeName}>
                <PokemonProfileGridAttribute
                  attribute="Weight"
                  value={`${pokemonWeight.imperial.toFixed(1)} lbs`}
                />
              </Column>
              <Column xs={6} className={classes.attributeName}>
                <PokemonProfileGridAttribute
                  attribute="Height"
                  value={`${pokemonHeight.imperial.feet}'${pokemonHeight.imperial.inches}"`}
                />
              </Column>
            </Row>
            <Row className={classes.container}>
              <Column xs={6} className={classes.attributeName}>
                <PokemonProfileGridAttribute
                  attribute="Abilities"
                  value={abilities
                    .sort((a, b) => a.slot - b.slot)
                    .map((abilityObj, index) => {
                      let abilityName = getPropertyForLanguage(
                        abilityObj.ability.node,
                        "name",
                        CONSTANTS.LANG_ENGLISH
                      );
                      return (
                        <span
                          key={abilityObj.ability.name}
                          className={
                            abilityObj.is_hidden ? classes.hiddenAbility : ""
                          }
                        >
                          {abilityName}
                          {commaPerItem(abilities, index)}
                        </span>
                      );
                    })}
                />
              </Column>
              <Column xs={6} className={classes.attributeName}>
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
                        {commaPerItem(egg_groups, index)}
                      </span>
                    );
                  })}
                />
              </Column>
            </Row>
          </Column>
        </Grid>
      </Fade>
      <BaseStats stats={stats} />
    </div>
  );
}

function PokemonProfileGridAttribute({ attribute, value }) {
  return (
    <React.Fragment>
      <Typography variant="h6" component="h2">
        {attribute}
      </Typography>
      <Typography variant="body1" component="h2">
        {value}
      </Typography>
    </React.Fragment>
  );
}

function Column({ children, xs, ...rest }) {
  const defaultXS = { ...rest, xs: xs ? xs : 12 };
  return (
    <Grid container item {...defaultXS}>
      {children}
    </Grid>
  );
}

function Row({ children, ...rest }) {
  return (
    <Grid container item xs={12} {...rest}>
      {children}
    </Grid>
  );
}

export default PokemonProfile;
