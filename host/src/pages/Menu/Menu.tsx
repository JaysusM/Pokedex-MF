import React from 'react';
import PokeButton from '../../components/PokeButton/PokeButton';
import './Menu.scss';

const Menu = () => {
    return <div className="menu-container">
        <PokeButton color="#EC7A6F" text="Pokédex"/>
        <PokeButton color="#FFCF4B" text="Pokédex"/>
        <PokeButton color="#59A9F4" text="Pokédex"/>
        <PokeButton color="#50C1A7" text="Pokédex"/>
        <PokeButton color="#7C528B" text="Pokédex"/>
        <PokeButton color="#B1736D" text="Pokédex"/>
    </div>;
}

export default Menu;
