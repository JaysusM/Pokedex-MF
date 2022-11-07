import React, { useContext, useEffect } from 'react';
import { Pokemon, PokemonLite } from '../../types';
import { PokeApi } from '../../utils/poke-api';
import { PokedexContext } from '../../utils/PokedexContext';
import Input from '../Input/Input';
import './PokemonSearch.scss';

export type PokemonSearchProps = {
    onPokemonSelected: (pokemon: Pokemon) => void;
}

const PokemonSearch = ({ onPokemonSelected }: PokemonSearchProps) => {

    const [ pokemonSearch, setPokemonSearch ] = React.useState('');
    const [ pokemonSuggestions, setPokemonSuggestions ] = React.useState<Pokemon[]>([]);
    const pokedexState = useContext(PokedexContext);

    useEffect(() => {
        if (pokemonSearch.length < 3)
            return;

        const suggestedPokemons: PokemonLite[] = pokedexState.pokemonList.filter((pokemon: PokemonLite) => pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase()));
        Promise.all(
            suggestedPokemons
                .map((pokemon: PokemonLite) => PokeApi.getPokemonByExactNameOrIdentifier(pokemon.name))
        )
            .then((suggestions: Pokemon[]) => setPokemonSuggestions(suggestions));
        
    }, [pokemonSearch]);

    return <div className='pokemon-search-container'>
        <Input onSearch={ setPokemonSearch }/>
        { pokemonSuggestions.length > 0 && <div className='pokemon-search-suggestions'>
            { pokemonSuggestions.map((pokemon, index) => (<PokemonSearchSuggestion onClick={ () => onPokemonSelected(pokemon) } pokemon={ pokemon } key={ index } />)) }
        </div> }
    </div>;

}

type PokemonSearchSuggestionProps = {
    pokemon: Pokemon,
    onClick: () => void
}

const PokemonSearchSuggestion = ({ pokemon, onClick }: PokemonSearchSuggestionProps) => {
    if (!pokemon.sprites.front_default)
        return <></>;

    return <div className='pokemon-search-suggestion' onClick={ onClick }>
        <img src={ pokemon.sprites.front_default } />
        <a>{ pokemon.name } - #{ pokemon.id }</a>
    </div>
}


export default PokemonSearch;