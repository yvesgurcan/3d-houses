import React from 'react';

export default () => {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" args={[5, 0.1, 5]} />
            <meshStandardMaterial
                attach="material"
                color="green"
                roughness={0.45}
            />
        </mesh>
    );
};
