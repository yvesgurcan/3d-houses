import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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

    a {
        text-decoration: none;
    }
`;

export default () => {
    const [activateControls, setActivateControls] = useState(true);
    return (
        <>
            <GlobalStyles />
            <Overlay>
                <input
                    type="checkbox"
                    checked={activateControls}
                    onClick={() => setActivateControls(!activateControls)}
                />
                Activate controls
            </Overlay>
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
                    globeColor="rgb(0, 130, 0)"
                    relativePosition={{ x: 1, y: -7 }}
                />
                <HouseAndGlobe
                    to="/menu2"
                    houseMainColor="yellow"
                    houseRoofColor="darkkhaki"
                    globeColor="rgb(0, 125, 0)"
                    relativePosition={{ x: 3, y: 1 }}
                />
                <HouseAndGlobe
                    to="/menu3"
                    houseMainColor="blue"
                    houseRoofColor="darkblue"
                    globeColor="rgb(0, 135, 0)"
                    relativePosition={{ x: -2, y: 8 }}
                />
                {activateControls && <Controls />}
            </Canvas>
        </>
    );
};

const Overlay = styled.div`
    position: absolute;
    z-index: 500;
`;
