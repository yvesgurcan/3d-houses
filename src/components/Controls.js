import React, { useRef } from 'react';
import { useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export default () => {
    const controls = useRef();
    const { camera, gl } = useThree();
    useFrame(() => {
        // We need to update frames when the camera is rotating without user input
        controls.current.update();
    });
    return (
        <orbitControls
            autoRotate={false}
            ref={controls}
            args={[camera, gl.domElement]}
            enableDamping
            dampingFactor={0.1}
            rotateSpeed={0.5}
        />
    );
};
