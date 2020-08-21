import React from 'react';
import House from './House';
import Globe from './Globe';

export default props => (
    <>
        <House {...props} />
        <Globe {...props} />
    </>
);
