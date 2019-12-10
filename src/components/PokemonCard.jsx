import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { getPkmnImgId } from "../utility/pokemon";
import CONSTANTS from "../constants";

const useStyles = makeStyles(theme => ({
  cardWrapper: {
    textDecoration: "none",
  },
  card: {
    minWidth: 345,
    marginBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
}));

function PokemonCard({ pokemon }) {
  const { name, sprites } = pokemon;
  const pathname = `/pokemon/${pokemon.name}`;

  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const hoverClass = "MuiPaper-elevation5";
  return (
    <Link
      to={{
        pathname,
        state: { pokemon },
      }}
      className={classes.cardWrapper}
    >
      <Card
        className={`${classes.card} ${hover ? hoverClass : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CardMedia
          className={classes.media}
          image={`${CONSTANTS.PKMN_IMG_URL}/${getPkmnImgId(pokemon.id)}.png`}
          title={name}
        />
        <CardContent>
          <Typography
            variant="h5"
            color="textSecondary"
            component="p"
            align="center"
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PokemonCard;
