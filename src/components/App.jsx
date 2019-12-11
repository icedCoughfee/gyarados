import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokedexQuery from "./PokedexQuery";
import PokemonProfileQuery from "./PokemonProfileQuery";
import "../styles/index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/pokemon/:name"
            render={props => <PokemonProfileQuery {...props} />}
          />
          <Route path="/" render={props => <PokedexQuery {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
