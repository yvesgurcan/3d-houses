import React from 'react';

import Roof from './Roof';
import Walls from './Walls';

export default ({
    to = '/menu1',
    mainColor = 'rgb(220, 0, 60)',
    roofColor = 'rgb(140, 0, 30)',
    x = 0,
    y = 3.5,
    mainRotation = [Math.PI * 0.5, Math.PI * 0.25, 0],
    roofRotation = [Math.PI * 0.5, Math.PI * 0.5, 0]
}) => {
    return (
        <>
            <Roof
                to={to}
                x={x - 0.75}
                y={y + 0.75}
                color={roofColor}
                rotation={roofRotation}
            />
            <Walls
                to={to}
                x={x}
                y={y}
                color={mainColor}
                rotation={mainRotation}
            />
        </>
    );
};
