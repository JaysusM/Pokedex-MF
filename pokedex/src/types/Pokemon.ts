export type PokemonLite = {
    name: string,
    url: string
}

export type Pokemon = {
    name: string,
    id: string,
    types: {
        type: {
            name: string
        }
    }[],
    sprites: {
        front_default: string,
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    }
}
