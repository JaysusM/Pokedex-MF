import React from 'react';
import './PokeButton.scss';

export type PokeButtonProps = {
    text: string,
    color: string
}

const PokeButton = ({ text, color }: PokeButtonProps) => {
    return <div className='pokemon-button-container' style={{ backgroundColor: color }}>
        <img src="/pokeball.svg" />
        <a>{ text }</a>
    </div>
}

export default PokeButton;
