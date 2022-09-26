import React from "react";
import ReactDOM from "react-dom";
import Pokedex from './components/pokedex/pokedex';

import "./index.scss";

const App = () => ( <Pokedex /> );
ReactDOM.render(<App />, document.getElementById("app"));
