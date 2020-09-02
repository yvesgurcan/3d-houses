import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';

import GlobalStyles from '../components/GlobalStyles';
import Controls from '../components/Controls';
import Globe from '../components/Globe';
import House1 from '../components/House1';
import House2 from '../components/House2';
import House3 from '../components/House3';

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
        <span ref={elementReference}>
            <GlobalStyles />
            <Canvas
                shadowMap
                camera={{
                    position: new Vector3(-10, 0, 0)
                }}
            >
                <ambientLight intensity={0.9} />
                <directionalLight
                    color="rgb(200, 200, 100)"
                    intensity={0.3}
                    position={[-2, 9, 0]}
                />
                <directionalLight
                    color="rgb(200, 200, 100)"
                    intensity={0.2}
                    position={[7, -3, -5]}
                />
                <directionalLight
                    color="rgb(200, 200, 100)"
                    intensity={0.1}
                    position={[10, 6, 5]}
                />
                <House1 />
                <House2 />
                <House3 />
                <Globe />
                <Controls autoRotate={true} delayRotation={delayRotation} />
            </Canvas>
        </span>
    );
};
