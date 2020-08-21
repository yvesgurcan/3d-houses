import React, { Fragment, useRef } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import MenuItem from './components/MenuItem';

extend({ OrbitControls });

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

function Controls() {
    const controls = useRef();
    const { camera, gl } = useThree();
    useFrame(() => controls.current.update());
    return (
        <orbitControls
            ref={controls}
            args={[camera, gl.domElement]}
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.5}
        />
    );
}

function App() {
    return (
        <Fragment>
            <GlobalStyles />
            <Canvas
                shadowMap
                camera={{
                    position: new Vector3(0, 3, 7)
                }}
            >
                <ambientLight intensity={1} />
                <MenuItem
                    houseMainColor="red"
                    houseRoofColor="darkred"
                    relativePosition={{ x: 1, y: -7 }}
                />
                <MenuItem
                    houseMainColor="yellow"
                    houseRoofColor="darkkhaki"
                    relativePosition={{ x: 3, y: 1 }}
                />
                <MenuItem
                    houseMainColor="blue"
                    houseRoofColor="darkblue"
                    relativePosition={{ x: -2, y: 8 }}
                />
                <Controls />
            </Canvas>
        </Fragment>
    );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
