import { PokemonLite } from '../types';

export class PokeApi {

    private static getRequest<T> (url: string): Promise<T> {
        return fetch(url)
            .then((response: Response) => response.json())
    }

    static getPokemonList = (): Promise<any[]> => {
        return this.getRequest<{ results: PokemonLite[] }>('https://pokeapi.co/api/v2/pokemon?limit=2500')
            .then((parsedResponse: { results: PokemonLite[] }) => parsedResponse.results);
    }
    
    static getPokemonByExactNameOrIdentifier = (name: string): Promise<any[]> => {
        return this.getRequest<any[]>(`https://pokeapi.co/api/v2/pokemon/${ name.toLowerCase() }`);
    }
}
