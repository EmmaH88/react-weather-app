import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Weather App</h2>
      <div className="container">
        <Weather />
      </div>
      <footer>
        This page is open-sourced on
        <a
          href="https://github.com/EmmaH88/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , is hosted with
        <a
          href="https://delightful-gaufre-f62114.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
        and was coded by Emma H 😍
      </footer>
    </div>
  );
}

export default App;
