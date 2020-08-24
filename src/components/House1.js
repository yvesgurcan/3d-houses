import React from 'react';

import Roof from './Roof';
import Walls from './Walls';

export default ({
    to = '/menu1',
    mainColor = 'rgb(220, 0, 60)',
    roofColor = 'rgb(140, 0, 30)',
    y = 0,
    z = 3.5,
    mainRotation = [Math.PI * 0.5, Math.PI * 0.25, 0],
    roofRotation = [Math.PI * 0.5, Math.PI * 0.5, 0]
}) => {
    return (
        <>
            <Roof
                to={to}
                y={y - 0.75}
                z={z + 0.75}
                color={roofColor}
                rotation={roofRotation}
            />
            <Walls
                to={to}
                y={y}
                z={z}
                color={mainColor}
                rotation={mainRotation}
            />
        </>
    );
};
