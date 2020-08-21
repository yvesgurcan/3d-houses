import React from 'react';

export default ({
    onClick,
    globeColor = 'green',
    relativePosition: { x, y } = { x: 0, y: 0 }
}) => {
    return (
        <mesh
            onClick={onClick}
            position={[0, -3.2 + x, 0 + y]}
            rotation={[0, 0, 0]}
            castShadow
        >
            <sphereGeometry attach="geometry" args={[3.5, 100, 100]} />
            <meshStandardMaterial
                attach="material"
                color={globeColor}
                transparent
                roughness={0.1}
                metalness={0.1}
            />
        </mesh>
    );
};
