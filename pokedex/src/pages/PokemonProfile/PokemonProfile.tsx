import React, { useEffect } from 'react';
import { PokemonEvolution } from '../../components/PokemonEvolution/PokemonEvolution';
import StatBar from '../../components/StatBar/StatBar';
import useEvolution from '../../hooks/useEvolution';
import { Pokemon } from '../../types';
import { capitalize } from '../../utils/utils';
import './PokemonProfile.scss';

export type PokemonProfileProps = {
    pokemon: Pokemon,
    onBack: () => void
}

const PokemonProfile = ({ pokemon, onBack }: PokemonProfileProps) => {
    const [evolutions, loading] = useEvolution(pokemon.name);

    const getStatValue = (name: string): number => {
        return pokemon.stats.filter(stat => stat.stat.name === name)[0].base_stat;
    }

    return <div className="pokemon-profile-container">
        <div className="pokemon-profile-navigation">
            <BackArrowSVG onClick={ onBack }/>
            <h4>{ 'ID: #' + pokemon.id }</h4>
        </div>
        <div className="pokemon-profile-header">
            <img className="pokemon-picture" src={ pokemon.sprites.front_default } />
            <div className="pokemon-profile-header-data">
                <div className="pokemon-profile-header-title">
                    <h2>{ capitalize(pokemon.name) }</h2>
                </div>
                <div className="pokemon-profile-header-types">
                    { pokemon.types.map((typeItem, index) => (<div key={ index } className="pokemon-profile-header-type-item">{ capitalize(typeItem.type.name) }</div>)) }
                </div>
            </div>
        </div>
        <div className="pokemon-profile-body">
            <div className="pokemon-profile-body-image">
                <img className="pokemon-profile-body-image-main" src={ pokemon.sprites.other['official-artwork'].front_default } />
                <img className="pokemon-profile-body-image-background" src="/simple_pokeball.svg" />
            </div>
            <div className="pokemon-profile-body-stats">
                <StatBar name="Health Points" value={getStatValue('hp')} />
                <StatBar name="Attack" value={getStatValue('attack')} />
                <StatBar name="Defense" value={getStatValue('defense')} />
                <StatBar name="Special Attack" value={getStatValue('special-attack')} />
                <StatBar name="Special Defense" value={getStatValue('special-defense')} />
                <StatBar name="Speed" value={getStatValue('speed')} />
            </div>
        </div>
        { !loading && evolutions && <div className="pokemon-profile-evolution-chain">
            <h4>Evolution Chain</h4>
            <PokemonEvolution evolutionChain={evolutions} />
        </div> }
    </div>;
}

const BackArrowSVG = ({ onClick }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={ onClick }>
        <line x1="20" y1="12" x2="4" y2="12"/>
        <polyline points="10 18 4 12 10 6"/>
    </svg>
);

export default PokemonProfile;