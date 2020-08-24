import React from 'react';

export default ({ color = 'rgb(0, 120, 0)', x = 0, y = 0 }) => {
    return (
        <mesh position={[0, 0 + x, 0 + y]} rotation={[0, 0, 0]} castShadow>
            <sphereGeometry attach="geometry" args={[3.5, 100, 100]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                transparent
                roughness={0.1}
                metalness={0.1}
            />
        </mesh>
    );
};
