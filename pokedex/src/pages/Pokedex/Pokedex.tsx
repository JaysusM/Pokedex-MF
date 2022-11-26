import React, { useEffect } from 'react'
import PokemonProfile from '../PokemonProfile/PokemonProfile';
import { PokeApi } from '../../utils/poke-api';
import { PokedexContext, PokedexContextType } from '../../utils/PokedexContext';
import { Pokemon, PokemonLite } from '../../types';
import PokedexMenu from '../PokedexMenu/PokedexMenu';
import './Pokedex.scss';

export type PokedexProps = {
    onGainFocus: () => void,
    onLoseFocus: () => void
}

const Pokedex = ({ onGainFocus, onLoseFocus }: PokedexProps) => {
    const [pokedexState, setPokedexState] = React.useState<PokedexContextType>({ pokemonList: [], selectedPokemon: null });

    useEffect(() => {
        PokeApi.getPokemonList()
            .then((pokemonList: PokemonLite[]) => setPokedexState({ ...pokedexState, pokemonList}))
    }, []);

    const onPokemonSelected = (pokemon: Pokemon): void => {
        onGainFocus();
        setPokedexState({ ...pokedexState, selectedPokemon: pokemon });
    }

    const onProfileBack = (): void => {
        onLoseFocus();
        setPokedexState({ ...pokedexState, selectedPokemon: null });
    }

    return <PokedexContext.Provider value={ pokedexState }>
            <div className="pokedex-app-wrapper">
                { !pokedexState.selectedPokemon && <PokedexMenu onPokemonSelected={ onPokemonSelected } /> }
                { pokedexState.selectedPokemon && <PokemonProfile pokemon={ pokedexState.selectedPokemon } onBack={ onProfileBack }/>}
            </div>
        </PokedexContext.Provider>;
}

export default Pokedex;