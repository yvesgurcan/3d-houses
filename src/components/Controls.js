import React, { useRef } from 'react';
import { useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export default ({ delayRotation, autoRotate = false, ...props }) => {
    const elementReference = useRef();
    const { camera, gl } = useThree();
    useFrame(() => {
        if (delayRotation) {
            return;
        }

        // We need to update frames when the camera is rotating without user input
        elementReference.current.update();
    });

    return (
        <orbitControls
            enabled={true}
            autoRotate={autoRotate}
            ref={elementReference}
            args={[camera, gl.domElement]}
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.5}
            {...props}
        />
    );
};
