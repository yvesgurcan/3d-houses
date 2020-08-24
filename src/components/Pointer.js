import React from 'react';

export default ({
    x = 0,
    y = 0,
    z = 0,
    color = 'rgb(150, 150, 150)',
    ...props
}) => {
    return (
        <mesh position={[0 + x, 0 + y, 0 + z]} {...props}>
            <coneBufferGeometry attach="geometry" args={[2, -5, 2]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.3}
            />
        </mesh>
    );
};
