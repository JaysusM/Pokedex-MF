import React from 'react';
import './PokeButton.scss';

export type PokeButtonProps = {
    text: string,
    color: string
}

export const PokeButton = ({ text, color }: PokeButtonProps) => {
    return <div className='pokemon-button-container' style={{ backgroundColor: color }}>
        <img src="/pokeball.svg" />
        <a>{ text }</a>
    </div>
}
