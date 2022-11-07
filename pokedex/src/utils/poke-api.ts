import PokemonSearch from '../components/PokemonSearch/PokemonSearch';
import { Pokemon, PokemonLite } from '../types';

export class PokeApi {

    private static getRequest<T> (url: string): Promise<T> {
        return fetch(url)
            .then((response: Response) => response.json())
    }

    static getPokemonList = (): Promise<PokemonLite[]> => {
        return this.getRequest<{ results: PokemonLite[] }>('https://pokeapi.co/api/v2/pokemon?limit=2500')
            .then((parsedResponse: { results: PokemonLite[] }) => parsedResponse.results)
            .then((pokemons: PokemonLite[]) => pokemons.map(pokemon => {
                const parsedName: string = pokemon.name.split('-').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
                return { ...pokemon, name:  parsedName };
            }));
    }
    
    static getPokemonByExactNameOrIdentifier = (name: string): Promise<Pokemon> => {
        return this.getRequest<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ name.toLowerCase().split(' ').join('-') }`)
            .then((pokemon: Pokemon) => ({ ...pokemon, name: pokemon.name.split('-').map(value => value[0].toUpperCase() + value.slice(1)).join(' ') }));
    }
}
