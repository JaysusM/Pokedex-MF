import React, { useEffect } from 'react'
import Input from '../../components/Input/Input';
import Menu from '../../components/Menu/Menu';
import PokemonProfile from '../../components/PokemonProfile/PokemonProfile';
import { PokeApi } from '../../shared/poke-api';
import { PokemonLite } from '../../types';
import './Pokedex.scss';

export type PokedexContextType = {
    search: string,
    pokemonList: PokemonLite[],
    selectedPokemon: any | null
}
const PokedexContext = React.createContext<PokedexContextType>({ search: '', pokemonList: [], selectedPokemon: null })

export type PokedexProps = {
    onGainFocus: () => void
}

const Pokedex = ({ onGainFocus }: PokedexProps) => {
    const [pokedexState, setPokedexState] = React.useState<PokedexContextType>({ search: '', pokemonList: [], selectedPokemon: null });
    const setPokedexSearch = (query: string) => {
        setPokedexState({ ...pokedexState, search: query })
    }

    useEffect(() => {
        PokeApi.getPokemonList()
            .then((pokemonList: PokemonLite[]) => setPokedexState({ ...pokedexState, pokemonList}))
    }, []);

    useEffect(() => {
        if (pokedexState.pokemonList.some(pokemon => pokemon.name === pokedexState.search.toLowerCase()))
            PokeApi.getPokemonByExactNameOrIdentifier(pokedexState.search)
                .then((pokemon: any) => {
                    onGainFocus();
                    setPokedexState({ ...pokedexState, selectedPokemon: pokemon });
                });
    }, [pokedexState.search]);

    return <PokedexContext.Provider value={ pokedexState }>
            <div className="pokedex-app-wrapper">
                <Input onSearch={ setPokedexSearch }/>
                { !pokedexState.selectedPokemon && <Menu /> }
                { pokedexState.selectedPokemon && <PokemonProfile pokemon={ pokedexState.selectedPokemon } />}
            </div>
        </PokedexContext.Provider>;
}

export default Pokedex;