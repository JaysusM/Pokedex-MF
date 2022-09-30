import React from 'react'
import Input from '../../components/Input/Input';
import Menu from '../../components/Menu/Menu';
import './Pokedex.scss';

const Pokedex = () => {

    return <div className="pokedex-app-wrapper">
        <Input />
        <Menu />
    </div>;
}

export default Pokedex;