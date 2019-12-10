import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 345,
    marginBottom: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain"
  }
}));

function PokemonCard({ name, image }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const hoverClass = "MuiPaper-elevation5";
  return (
    <Card
      className={`${classes.card} ${hover ? hoverClass : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardMedia className={classes.media} image={image} title={name} />
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
  );
}

export default PokemonCard;
