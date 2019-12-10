import React, { Component } from "react";
import PokedexQuery from "./PokedexQuery";
import "../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <PokedexQuery />
        </div>
      </div>
    );
  }
}

export default App;
