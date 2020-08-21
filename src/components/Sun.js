import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export default () => {
    const position = [0, 3, 0];
    const meshRef = useRef();
    const lightRef = useRef();

    useFrame(() => {
        const now = Date.now() * 0.001;
        const x = Math.cos(now) * 1;
        const z = Math.sin(now) * 1;
        // meshRef is always set at this point
        meshRef.current.position.x = x;
        meshRef.current.position.z = z;
        lightRef.current.position.x = x;
        lightRef.current.position.z = z;
    });
    return (
        <>
            <mesh ref={meshRef} position={position}>
                <sphereBufferGeometry attach="geometry" args={[0.25, 32, 32]} />
                <meshStandardMaterial attach="material" color="#d8a921" />
            </mesh>
            <spotLight
                ref={lightRef}
                intensity={0.1}
                position={position}
                castShadow
            />
        </>
    );
};
