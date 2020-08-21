import React from 'react';

export default ({ to = '/', x = 0, y = 0, color = 'moccasin', ...props }) => {
    return (
        <mesh
            onClick={() => window.appHistory.push(to)}
            position={[0, 0.5 + x, 0 + y]}
            {...props}
        >
            <boxBufferGeometry attach="geometry" args={[2, 1, 2]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.5}
            />
        </mesh>
    );
};
