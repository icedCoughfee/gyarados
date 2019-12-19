import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import { getPkmnImgId } from "../utility/pokemon";
import CONSTANTS from "../constants";
import "../styles/main.scss";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles(theme => ({
  cardWrapper: {
    textDecoration: "none"
  },
  card: {
    margin: "auto",
    width: "96%",
    padding: "10px 0"
  },
  cardContent: {
    padding: "0 !important"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain"
  },
  hiddenImg: {
    display: "none"
  }
}));

function PokemonCard({ pokemon, width }) {
  const { name, sprites } = pokemon;
  const pathname = `/pokemon/${pokemon.name}`;

  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const hoverClass = "MuiPaper-elevation5";
  const imgUrl = `${CONSTANTS.PKMN_IMG_URL}${getPkmnImgId(pokemon.id)}.png`;
  const [imgLoaded, setImgLoaded] = useState(false);

  const { variant } = usePokemonCard(width);
  return (
    <Fade in={imgLoaded}>
      <Link
        to={{
          pathname
        }}
        className={classes.cardWrapper}
      >
        <img
          src={imgUrl}
          onLoad={() => {
            setImgLoaded(true);
          }}
          className={classes.hiddenImg}
        />
        <Card
          className={`${classes.card} ${hover ? hoverClass : ""}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <CardMedia className={classes.media} image={imgUrl} title={name} />
          <CardContent align="center" className={classes.cardContent}>
            <Typography
              variant={variant}
              color="textSecondary"
              component="span"
            >
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Fade>
  );
}

function usePokemonCard(width) {
  let [variant, setVariant] = useState("h4");

  useEffect(() => {
    if (width == "xs" || width == "sm") {
      setVariant("h6");
    } else {
      setVariant("h5");
    }
  }, [width]);

  return { variant };
}

export default withWidth()(PokemonCard);
