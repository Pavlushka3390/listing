import React from "react";
import Listing from "./components/Listing";
import "./App.css";
import items from "./data/etsy.json"

function App() {
  return (
    <div className="container">
      <Listing items={items} />
    </div>
  );
}

export default App;
