export type PokemonEvolutionChain = {
    chain: {
        evolves_to: PokemonEvolvesToDetails[]
    }
}

type PokemonEvolvesToDetails = {
    evolution_details: PokemonEvolutionDetails[],
    evolves_to: PokemonEvolvesToDetails[]
    species: {
        name: string
    }
}

type PokemonEvolutionDetails = {

    min_level: number,
    trigger: {
        name: string
    }
}

export type PokemonEvolutionChainLite = {
    evolutions: {
        name: string,
        min_level: number,
        trigger: {
            name: string
        }
    }[]
};
