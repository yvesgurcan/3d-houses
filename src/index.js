import React, { Fragment, useRef } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import House from './components/House';
import Lawn from './components/Lawn';
import Ground from './components/Ground';
import Sun from './components/Sun';

extend({ OrbitControls });

const GlobalStyles = createGlobalStyle`
    body {
        font-family: sans-serif;
        margin: 0;
        background: rgb(175, 175, 255);
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
                <Sun />
                <House />
                <Lawn />
                <Ground />
                <Controls />
            </Canvas>
        </Fragment>
    );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
