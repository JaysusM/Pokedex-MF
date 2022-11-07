import React, { useEffect } from 'react'
import Menu from '../../components/Menu/Menu';
import PokemonProfile from '../../components/PokemonProfile/PokemonProfile';
import PokemonSearch from '../../components/PokemonSearch/PokemonSearch';
import { PokeApi } from '../../utils/poke-api';
import { PokedexContext, PokedexContextType } from '../../utils/PokedexContext';
import { Pokemon, PokemonLite } from '../../types';
import './Pokedex.scss';

export type PokedexProps = {
    onGainFocus: () => void
}

const Pokedex = ({ onGainFocus }: PokedexProps) => {
    const [pokedexState, setPokedexState] = React.useState<PokedexContextType>({ pokemonList: [], selectedPokemon: null });

    useEffect(() => {
        PokeApi.getPokemonList()
            .then((pokemonList: PokemonLite[]) => setPokedexState({ ...pokedexState, pokemonList}))
    }, []);

    const onPokemonSelected = (pokemon: Pokemon): void => {
        onGainFocus();
        setPokedexState({ ...pokedexState, selectedPokemon: pokemon });
    }

    return <PokedexContext.Provider value={ pokedexState }>
            <div className="pokedex-app-wrapper">
                <PokemonSearch onPokemonSelected={ onPokemonSelected } />
                { !pokedexState.selectedPokemon && <Menu /> }
                { pokedexState.selectedPokemon && <PokemonProfile pokemon={ pokedexState.selectedPokemon } />}
            </div>
        </PokedexContext.Provider>;
}

export default Pokedex;