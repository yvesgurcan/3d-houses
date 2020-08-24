import React from 'react';

import Roof from './Roof';
import Walls from './Walls';

export default ({
    to = '/menu2',
    mainColor = 'yellow',
    roofColor = 'darkkhaki',
    y = 3,
    z = 0,
    mainRotation = [0, Math.PI * 0.25, 0],
    roofRotation = [0, 0, 0]
}) => {
    return (
        <>
            <Roof
                to={to}
                color={roofColor}
                y={y}
                z={z}
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
