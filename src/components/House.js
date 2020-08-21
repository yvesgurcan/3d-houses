import React from 'react';

export default ({
    onClick,
    houseMainColor = 'moccasin',
    houseRoofColor = 'rgb(200, 50, 50)',
    relativePosition: { x, y } = { x: 0, y: 0 }
}) => {
    return (
        <>
            <mesh
                onClick={onClick}
                position={[0, 1.25 + x, 0 + y]}
                rotation={[0, Math.PI * 0.25, 0]}
            >
                <coneBufferGeometry attach="geometry" args={[1.6, 0.5, 4]} />
                <meshStandardMaterial
                    attach="material"
                    color={houseRoofColor}
                    roughness={0.3}
                />
            </mesh>
            <mesh onClick={onClick} position={[0, 0.5 + x, 0 + y]}>
                <boxBufferGeometry attach="geometry" args={[2, 1, 2]} />
                <meshStandardMaterial
                    attach="material"
                    color={houseMainColor}
                    roughness={0.5}
                />
            </mesh>
        </>
    );
};
