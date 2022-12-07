export type PokemonEvolutionChain = {
    chain: {
        evolves_to: PokemonEvolvesToDetails[],
        species: {
            name: string
        }
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
    evolutions: PokemonEvolutionChainItem[]
};

export type PokemonEvolutionChainItem = {
    name: string,
    min_level?: number,
    min_happiness?: number,
    item?: string,
    trigger?: {
        name: string
    },
    sprite?: string
}
