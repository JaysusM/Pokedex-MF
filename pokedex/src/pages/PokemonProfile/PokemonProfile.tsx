import React from 'react';
import { Pokemon } from '../../types';
import './PokemonProfile.scss';

export type PokemonProfileProps = {
    pokemon: Pokemon,
    onBack: () => void
}

const PokemonProfile = ({ pokemon, onBack }: PokemonProfileProps) => {
    const formatName = (name: string) => name[0].toUpperCase() + name.slice(1);

    return <div className="pokemon-profile-container">
        <div className="pokemon-profile-navigation">
            <BackArrowSVG onClick={ onBack }/>
            <h4>{ 'ID: #' + pokemon.id }</h4>
        </div>
        <div className="pokemon-profile-header">
            <img className="pokemon-picture" src={ pokemon.sprites.front_default } />
            <div className="pokemon-profile-header-data">
                <div className="pokemon-profile-header-title">
                    <h2>{ formatName(pokemon.name) }</h2>
                </div>
                <div className="pokemon-profile-header-types">
                    { pokemon.types.map((typeItem, index) => (<div key={ index } className="pokemon-profile-header-type-item">{ formatName(typeItem.type.name) }</div>)) }
                </div>
            </div>
        </div>
        <div className="pokemon-profile-body-image">
            <img className="pokemon-profile-body-image-main" src={ pokemon.sprites.other['official-artwork'].front_default } />
            <img className="pokemon-profile-body-image-background" src="/simple_pokeball.svg" />
        </div>
    </div>;
}

const BackArrowSVG = ({ onClick }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={ onClick }>
        <line x1="20" y1="12" x2="4" y2="12"/>
        <polyline points="10 18 4 12 10 6"/>
    </svg>
);

export default PokemonProfile;