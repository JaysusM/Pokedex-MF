import React from 'react';
import './PokedexLayout.scss';
import Pokedex from 'pokedex/Pokedex';
import 'pokemon_news/App';

const PokedexLayout = () => {
    return <div className='pokedex-wrapper'>
        <div className='pokedex-container'>
            <img className='pokedex-top-section' src='https://i.imgur.com/s2a1x2C.png' />
            <img className='pokedex-bottom-section' src='https://i.imgur.com/E6SbyAl.png' />
            <div className='pokedex-content'>
                <div className='pokedex-page'>
                    <div className='pokedex-app'>
                        <Pokedex />
                    </div>
                    <div className='news-app'>
                        <vue-app />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default PokedexLayout;