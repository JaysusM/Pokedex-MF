import React from "react";
import ReactDOM from "react-dom";
import PokedexLayout from './components/PokedexLayout/PokedexLayout';

import "./index.scss";

const App = () => ( <PokedexLayout /> );
ReactDOM.render(<App />, document.getElementById("app"));
