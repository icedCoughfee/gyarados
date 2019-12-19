import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokedexQuery from "./PokedexQuery";
import PokemonProfileQuery from "./PokemonProfileQuery";
import NavBar from "./layout/NavBar";
import "../styles/main.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="main-content-section">
          <Switch>
            <Route
              path="/pokemon/:name"
              render={props => <PokemonProfileQuery {...props} />}
            />
            <Route path="/" render={props => <PokedexQuery {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
