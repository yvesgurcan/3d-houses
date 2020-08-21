import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';

import Controls from '../components/Controls';
import Globe from '../components/Globe';
import House1 from '../components/House1';
import House2 from '../components/House2';
import House3 from '../components/House3';

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
                    position: new Vector3(-10, 0, 0)
                }}
            >
                <ambientLight intensity={1} />
                <House1 />
                <House2 />
                <House3 />
                <Globe />
                {activateControls && <Controls />}
            </Canvas>
        </>
    );
};

const Overlay = styled.div`
    position: absolute;
    z-index: 500;
`;
