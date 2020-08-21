import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';

import Controls from '../components/Controls';
import HouseAndGlobe from '../components/HouseAndGlobe';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: sans-serif;
        margin: 0;
        background: rgb(140, 140, 255);
    }
    
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
    }
`;

export default () => {
    return (
        <>
            <GlobalStyles />
            <Canvas
                shadowMap
                camera={{
                    position: new Vector3(-13, 0, 0)
                }}
            >
                <ambientLight intensity={1} />
                <HouseAndGlobe
                    to="/menu1"
                    houseMainColor="red"
                    houseRoofColor="darkred"
                    relativePosition={{ x: 1, y: -7 }}
                />
                <HouseAndGlobe
                    to="/menu2"
                    houseMainColor="yellow"
                    houseRoofColor="darkkhaki"
                    relativePosition={{ x: 3, y: 1 }}
                />
                <HouseAndGlobe
                    to="/menu3"
                    houseMainColor="blue"
                    houseRoofColor="darkblue"
                    relativePosition={{ x: -2, y: 8 }}
                />
                <Controls />
            </Canvas>
        </>
    );
};
