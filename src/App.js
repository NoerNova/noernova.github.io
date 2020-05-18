import React from "react";
import "./App.scss";
import Routes from "./routes";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
