import React from 'react';
import './StatBar.scss';

export type StatBarProps = {
    name: string,
    value: number,
    max?: number
}

const StatBar = ({ name, value, max = 255 }: StatBarProps) => {
    const percentageValue = value / max;
    let color: 'red' | 'orange' | 'green' = 'green';
    if (percentageValue < 1/3)
        color = 'red';
    else if (percentageValue >= 1/3 && value <= 2/3)
        color = 'orange';

    return <div className='stat-bar'>
        <a>{ name } - { value }</a>
        <div className='stat-bar-value' data-color={ color } style={{ width: `${ Math.trunc(percentageValue * 100) }%` }}></div>
    </div>
}

export default StatBar;
