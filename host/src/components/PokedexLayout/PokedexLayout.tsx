import React from 'react';
import './PokedexLayout.scss';
import Pokedex from 'pokedex/Pokedex';
import News from 'news/News';

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
                        <News />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default PokedexLayout;