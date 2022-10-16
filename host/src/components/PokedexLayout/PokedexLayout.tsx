import React, { useEffect, useRef, useState } from 'react';
import './PokedexLayout.scss';
import classNames from 'classnames';
import Pokedex from 'pokedex/Pokedex';
import { mount as mountNewsComponent } from 'pokemon_news/News';

enum PokedexScreenMode {
    POKEDEX,
    NEWS,
    DEFAULT
}

const PokedexLayout = () => {
    const newsRef = useRef(null);
    const [ screenMode, setScreenMode ] = useState<PokedexScreenMode>(PokedexScreenMode.DEFAULT);

    useEffect(() => {
        mountNewsComponent(newsRef.current, { onViewAll: () =>  setScreenMode(PokedexScreenMode.NEWS) });
    }, []);

    const pokedexAppClassnames = classNames(
        'pokedex-app',
        {
            'closed': screenMode === PokedexScreenMode.NEWS
        }
    );

    return <div className='pokedex-wrapper'>
        <div className='pokedex-container'>
            <img className='pokedex-top-section' src='https://i.imgur.com/s2a1x2C.png' />
            <img className='pokedex-bottom-section' src='https://i.imgur.com/E6SbyAl.png' />
            <div className='pokedex-content'>
                <div className='pokedex-page'>
                    <div className={ pokedexAppClassnames }>
                        <Pokedex />
                    </div>
                    <div className='news-app'>
                        <div ref={ newsRef } />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default PokedexLayout;