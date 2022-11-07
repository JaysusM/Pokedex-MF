import React from 'react'
import { PokemonLite } from '../types'

export type PokedexContextType = {
    pokemonList: PokemonLite[],
    selectedPokemon: any | null
}
export const PokedexContext = React.createContext<PokedexContextType>({ pokemonList: [], selectedPokemon: null })