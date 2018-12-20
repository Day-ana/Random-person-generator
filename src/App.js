import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomXe from "./RandomXe";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <RandomXe />
        </header>
      </div>
    );
  }
}

export default App;
