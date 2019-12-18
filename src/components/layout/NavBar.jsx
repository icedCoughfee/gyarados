import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import mainStyles from "../../styles/main.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  nav: {
    margin: "auto"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <Grid container>
      <nav className={classes.root}>
        <Grid item sm={6} xs={12} className={classes.nav}>
          <AppBar
            position="static"
            style={{
              backgroundColor: mainStyles.brandPrimary,
              boxShadow: "none"
            }}
          >
            <Toolbar>
              <Link to="/">
                <img src="/logo.png" alt="gyarados logo" />
              </Link>
            </Toolbar>
          </AppBar>
        </Grid>
      </nav>
    </Grid>
  );
}

export default NavBar;
