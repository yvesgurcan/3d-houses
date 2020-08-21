import React, { useState, useEffect, useRef } from 'react';
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
        color: white;
        font-weight: bold;

        :hover {
            color: black;
        }
    }
`;

export default () => {
    const [delayRotation, setDelayRotation] = useState(0);
    const elementReference = useRef();
    const delayRotationRef = useRef(delayRotation);

    // Set up event listeners for clicks
    useEffect(() => {
        if (!elementReference.current) {
            return;
        }

        elementReference.current.addEventListener('click', delayAutoRotate);
        setInterval(() => decreaseAutoRotate(delayRotation), 1000);
        elementReference.current.addEventListener(
            'touchstart',
            delayAutoRotate
        );
        setInterval(() => decreaseAutoRotate(delayRotation), 1000);

        return () => {
            elementReference.current.removeEventListener(
                'click',
                delayAutoRotate
            );
            elementReference.current.removeEventListener(
                'touchstart',
                delayAutoRotate
            );
        };
    }, [elementReference]);

    // Stop rotation for 3 seconds
    function delayAutoRotate() {
        const updatedDelayRotation = 3000;
        delayRotationRef.current = updatedDelayRotation;
        setDelayRotation(updatedDelayRotation);
    }

    // Decrease timer to reset rotation by 1 second
    function decreaseAutoRotate(delayRotation) {
        const updatedDelayRotation = Math.max(
            0,
            delayRotationRef.current - 1000
        );
        setDelayRotation(updatedDelayRotation);
        delayRotationRef.current = updatedDelayRotation;
    }

    return (
        <>
            <span ref={elementReference}>
                <GlobalStyles />
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
                    <Controls delayRotation={delayRotation} />
                </Canvas>
            </span>
        </>
    );
};

const Overlay = styled.div`
    position: absolute;
    z-index: 500;
`;
