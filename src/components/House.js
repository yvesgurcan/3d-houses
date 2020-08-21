import React from 'react';

export default () => {
    return (
        <>
            <mesh position={[0, 1.25, 0]} rotation={[0, Math.PI * 0.25, 0]}>
                <coneBufferGeometry attach="geometry" args={[1.6, 0.5, 4]} />
                <meshStandardMaterial
                    attach="material"
                    color="#d8342b"
                    roughness={0.3}
                />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
                <boxBufferGeometry attach="geometry" args={[2, 1, 2]} />
                <meshStandardMaterial
                    attach="material"
                    color="#dec7c7"
                    roughness={0.5}
                />
            </mesh>
        </>
    );
};
