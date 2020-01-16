import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StatePractice from "./StatePractice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StatePractice />
      </header>
    </div>
  );
}

export default App;
