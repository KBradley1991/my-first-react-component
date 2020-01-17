import React from "react";
import "./App.css";
//import StatePractice from "./StatePractice";
import cards from "./Cards";
import CardList from "./CardList";

function App() {
  return (
    <div className="App">
      <div className="row">
        <CardList cards={cards} />
      </div>
    </div>
  );
}

export default App;
