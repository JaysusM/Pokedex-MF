import React from 'react';
import './Pokedex.scss';

const Pokedex = () => {
    return <div className='pokedex-wrapper'>
        <div className='pokedex-container'>
            <img className='pokedex-top-section' src='https://i.imgur.com/s2a1x2C.png' />
            <img className='pokedex-bottom-section' src='https://i.imgur.com/E6SbyAl.png' />
            <div className='pokedex-content'></div>
        </div>
    </div>;
}

export default Pokedex;