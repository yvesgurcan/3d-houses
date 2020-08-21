import React, { useEffect } from 'react';

export default ({
    to = '/',
    x = 0,
    y = 0,
    color = 'rgb(200, 50, 50)',
    ...props
}) => {
    return (
        <mesh
            onClick={() => window.appHistory.push(to)}
            onPointerUp={() => window.appHistory.push(to)}
            position={[0, 1.25 + x, 0 + y]}
            {...props}
        >
            <coneBufferGeometry attach="geometry" args={[1.6, 0.5, 4]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.3}
            />
        </mesh>
    );
};
