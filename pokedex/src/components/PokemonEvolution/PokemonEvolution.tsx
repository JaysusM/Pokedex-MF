import React from 'react';
import { PokemonEvolutionChainItem, PokemonEvolutionChainLite } from '../../types/PokemonEvolutionChain'
import { capitalize, parseTrigger } from '../../utils/utils';
import './PokemonEvolution.scss';

export type PokemonEvolutionProps = {
    evolutionChain: PokemonEvolutionChainLite
}

export type PokemonEvolutionItemProps = {
    evolutionItem: PokemonEvolutionChainItem
}

const PokemonEvolutionItem = ({ evolutionItem }: PokemonEvolutionItemProps) => {

    const parseTrigger = (evolutionItem: PokemonEvolutionChainItem) => {
        if (evolutionItem.trigger?.name === 'level-up') {
            if (evolutionItem.min_level)
                return 'Lvl. ' + evolutionItem.min_level;
            else if (evolutionItem.min_happiness)
                return 'Happiness';
            else 
                return 'Level Up';
        } else if (evolutionItem.trigger?.name === 'use-item' && evolutionItem.item)
            return evolutionItem.item.split('-').map(word => capitalize(word)).join(' ');

        return evolutionItem.trigger?.name;
    }

    return <>
        { evolutionItem.trigger && <div className='pokemon-evolution-trigger'>
            { parseTrigger(evolutionItem) }
        </div> }
        <div className='pokemon-evolution-item'>
            <img src={ evolutionItem.sprite } />
            <h4>{ capitalize(evolutionItem.name) }</h4>
        </div>
    </>
}

export const PokemonEvolution = ({ evolutionChain }: PokemonEvolutionProps) => {
    return <div className="pokemon-evolution">
        { evolutionChain.evolutions.map(((evolution, index) => <PokemonEvolutionItem key={ index } evolutionItem={ evolution }></PokemonEvolutionItem>))}
    </div>
}
