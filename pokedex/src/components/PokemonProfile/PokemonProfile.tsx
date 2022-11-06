import React from 'react';
import './PokemonProfile.scss';

export type PokemonProfileProps = {
    pokemon: any
}

const PokemonProfile = ({ pokemon }: PokemonProfileProps) => {
    const formatName = (name: string) => name[0].toUpperCase() + name.slice(1);

    return <div className="pokemon-profile-container">
        <div className="pokemon-profile-header">
            <img className="pokemon-picture" src={ pokemon.sprites.front_default } />
            <div className="pokemon-profile-header-data">
                <div className="pokemon-profile-header-title">
                    <h2>{ formatName(pokemon.name) }</h2>
                    <h4>{ 'ID: #' + pokemon.id }</h4>
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

export default PokemonProfile;