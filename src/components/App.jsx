import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokedexQuery from "./PokedexQuery";
import PokemonProfile from "./PokemonProfile";
import "../styles/index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/pokemon/:name"
            render={props => <PokemonProfile {...props} />}
          />
          <Route path="/" render={props => <PokedexQuery {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
