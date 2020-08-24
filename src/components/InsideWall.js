import React from 'react';

export default ({ x = 0, y = 0, z = 0, length = 0, width = 0, props }) => {
    return (
        <mesh position={[0 + x, 0 + y, 0 + z]} {...props}>
            <boxBufferGeometry attach="geometry" args={[1, width, length]} />
            <meshStandardMaterial
                attach="material"
                color="black"
                roughness={0.5}
            />
        </mesh>
    );
};
