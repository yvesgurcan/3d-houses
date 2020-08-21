import React from 'react';
import House from './House';
import Globe from './Globe';

export default ({ to = '/', ...props }) => {
    function onClick() {
        window.appHistory.push(to);
    }

    return (
        <>
            <House {...props} onClick={onClick} />
            <Globe {...props} onClick={onClick} />
        </>
    );
};
