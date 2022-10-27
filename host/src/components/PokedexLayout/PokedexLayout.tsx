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
            <img className='pokedex-top-section' src='/pokedex_top.png' />
            <img className='pokeball-top' src='/pokeball_top.png' />
            <div className='pokeball-light-effect'></div>
            <img className='pokeball-bottom' src='/pokeball_bottom.png' />
            <img className='pokedex-bottom-section' src='/pokedex_bottom.png' />
            <div className='pokedex-content'>
                <div className='pokedex-page'>
                    <div className={ pokedexAppClassnames }>
                        <Pokedex />
                        <div className='pokeball-button'>
                            <img src="/pokemon_arrow.png" />
                        </div>
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