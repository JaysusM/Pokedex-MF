import { Pokemon, PokemonLite, PokemonSpecie } from '../types';

export class PokeApi {

    static getRequest<T> (url: string): Promise<T> {
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
    
    static getPokemonByExactNameOrIdentifier = (query: string): Promise<Pokemon> => {
        return this.getRequest<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ query.toLowerCase().split(' ').join('-') }`)
            .then((pokemon: Pokemon) => ({ ...pokemon, name: pokemon.name.split('-').map(value => value[0].toUpperCase() + value.slice(1)).join(' ') }));
    }

    static getPokemonSpeciesByExactNameOrIdentifier = (query: string): Promise<PokemonSpecie> => {
        return this.getRequest<PokemonSpecie>(`https://pokeapi.co/api/v2/pokemon-species/${ query.toLowerCase().split(' ').join('-') }`);
    }
}
