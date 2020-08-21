import React from 'react';

export default () => {
    return (
        <mesh position={[0, 0.1, 1.5]}>
            <boxBufferGeometry attach="geometry" args={[1, 0.1, 2]} />
            <meshStandardMaterial
                attach="material"
                color="#c7ae87"
                roughness={0.6}
            />
        </mesh>
    );
};
