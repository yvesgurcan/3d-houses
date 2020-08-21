import React from 'react';

import Roof from './Roof';
import Walls from './Walls';

export default ({
    to = '/menu2',
    mainColor = 'yellow',
    roofColor = 'darkkhaki',
    x = 3,
    y = 0,
    mainRotation = [0, Math.PI * 0.25, 0],
    roofRotation = [0, 0, 0]
}) => {
    return (
        <>
            <Roof
                to={to}
                color={roofColor}
                x={x}
                y={y}
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
