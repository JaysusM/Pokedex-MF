import React from 'react';
import Menu from '../../components/Menu/Menu';
import PokemonSearch from '../../components/PokemonSearch/PokemonSearch';

export type PokedexMenuProps = {
    onPokemonSelected: () => void
}

const PokedexMenu = ({ onPokemonSelected }) => {
    return <>
        <PokemonSearch onPokemonSelected={ onPokemonSelected } />
        <Menu />
    </>
}

export default PokedexMenu;
