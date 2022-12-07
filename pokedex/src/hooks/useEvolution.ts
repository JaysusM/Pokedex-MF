import { useEffect, useState } from 'react';
import { Pokemon, PokemonSpecie } from '../types';
import { PokemonEvolutionChain, PokemonEvolutionChainItem, PokemonEvolutionChainLite } from '../types/PokemonEvolutionChain';
import { PokeApi } from '../utils/poke-api';

const useEvolution = (pokemonName: string): [PokemonEvolutionChainLite, boolean] => {

    const [loading, setLoading] = useState<boolean>(true);
    const [evolutions, setEvolutions] = useState<PokemonEvolutionChainLite>({ evolutions: [] })

    const parseEvolution = (evolution: PokemonEvolutionChain): PokemonEvolutionChainLite => {
        const getEvolutionRecursive = (evolutionItems): PokemonEvolutionChainItem[] => {
            let parsedEvolutions: any[] = [];
            evolutionItems.forEach(evolutionItem => {
                parsedEvolutions.push({
                    name: evolutionItem.species.name,
                    min_level: evolutionItem.evolution_details[0].min_level,
                    min_happiness: evolutionItem.evolution_details[0].min_happiness,
                    item: evolutionItem.evolution_details[0].item?.name,
                    trigger: {
                        name: evolutionItem.evolution_details[0].trigger.name
                    }
                })

                if (evolutionItem.evolves_to.length > 0)
                    parsedEvolutions = [...parsedEvolutions, ...getEvolutionRecursive(evolutionItem.evolves_to)];
                });

            return parsedEvolutions;
        }

        return {
            evolutions: [ { name: evolution.chain.species.name }, ...getEvolutionRecursive(evolution.chain.evolves_to) ]
        };
    }

    useEffect(() => {
        PokeApi.getPokemonSpeciesByExactNameOrIdentifier(pokemonName)
            .then((specie: PokemonSpecie) => PokeApi.getRequest<PokemonEvolutionChain>(specie.evolution_chain.url))
            .then((evolution: PokemonEvolutionChain) => parseEvolution(evolution))
            .then((evolutionChain: PokemonEvolutionChainLite) => {
                return Promise.all(evolutionChain.evolutions.map((evolutionItem: PokemonEvolutionChainItem) => PokeApi.getPokemonByExactNameOrIdentifier(evolutionItem.name)))
                    .then((pokemons: Pokemon[]) => {
                        evolutionChain.evolutions.forEach((pokemonItem: PokemonEvolutionChainItem) => {
                            const pokemon: Pokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase() === pokemonItem.name.toLowerCase())[0];
                            pokemonItem.sprite = pokemon.sprites.front_default;
                        });
                        setEvolutions(evolutionChain);
                    });
            })
            .finally(() => setLoading(false))
    }, []);

    return [evolutions, loading];
}

export default useEvolution;