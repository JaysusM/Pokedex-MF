import { useEffect, useState } from 'react';
import { PokemonSpecie } from '../types';
import { PokemonEvolutionChain, PokemonEvolutionChainLite } from '../types/PokemonEvolutionChain';
import { PokeApi } from '../utils/poke-api';

const useEvolution = (pokemonName: string): [PokemonEvolutionChainLite, boolean] => {

    const [loading, setLoading] = useState<boolean>(true);
    const [evolutions, setEvolution] = useState<PokemonEvolutionChainLite>({ evolutions: [] })

    const parseEvolution = (evolution: PokemonEvolutionChain): PokemonEvolutionChainLite => {
        const getEvolutionRecursive = (evolutionItems) => {
            let parsedEvolutions: any[] = [];
            evolutionItems.forEach(evolutionItem => {
                parsedEvolutions.push({
                    name: evolutionItem.species.name,
                    min_level: evolutionItem.evolution_details[0].min_level,
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
            evolutions: getEvolutionRecursive(evolution.chain.evolves_to)
        };
    }

    useEffect(() => {
        PokeApi.getPokemonSpeciesByExactNameOrIdentifier(pokemonName)
            .then((specie: PokemonSpecie) => PokeApi.getRequest<PokemonEvolutionChain>(specie.evolution_chain.url))
            .then((evolution: PokemonEvolutionChain) => {
                setEvolution(parseEvolution(evolution));
            })
            .finally(() => setLoading(true))
    }, []);

    return [evolutions, loading];
}

export default useEvolution;