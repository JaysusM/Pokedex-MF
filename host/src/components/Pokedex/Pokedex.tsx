import React from 'react';
import { PokeButton } from '../PokeButton/PokeButton';
import './Pokedex.scss';

const Pokedex = () => {
    return <div className='pokedex-wrapper'>
        <div className='pokedex-container'>
            <img className='pokedex-top-section' src='https://i.imgur.com/s2a1x2C.png' />
            <img className='pokedex-bottom-section' src='https://i.imgur.com/E6SbyAl.png' />
            <div className='pokedex-content'>
                <div className='pokedex-page'>
                    <PokeButton color="#EC7A6F" text="Pokédex"/>
                    <PokeButton color="#FFCF4B" text="Pokédex"/>
                    <PokeButton color="#59A9F4" text="Pokédex"/>
                    <PokeButton color="#50C1A7" text="Pokédex"/>
                    <PokeButton color="#7c528b" text="Pokédex"/>
                </div>
            </div>
        </div>
    </div>;
}

export default Pokedex;