import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './pages/Pokedex/Pokedex';
import './index.scss';

const App = () => (
  <Pokedex />
);
ReactDOM.render(<App />, document.getElementById('app'));
