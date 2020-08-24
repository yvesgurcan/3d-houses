import React from 'react';

export default ({
    color = 'rgb(200, 200, 200)',
    x = 0,
    y = 0,
    z = 0,
    length = 0,
    width = 0,
    depth = 0,
    props
}) => {
    return (
        <mesh position={[0 + x, 0 + y, 0 + z]} {...props}>
            <boxBufferGeometry
                attach="geometry"
                args={[depth, width, length]}
            />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.5}
            />
        </mesh>
    );
};
