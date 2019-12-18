import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px auto"
  }
}));

function CenteredContainer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.root}>
        <Typography component="div" style={{ display: "flex" }}>
          {props.children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default CenteredContainer;
