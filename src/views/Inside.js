import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';
import Controls from '../components/Controls';
import Wall from '../components/InsideWall';

export default () => {
    return (
        <ViewLayer backgroundColor="rgb(0, 0, 205)" zIndex={600}>
            <BackLink to="/">Back</BackLink>
            <span>
                <Canvas
                    shadowMap
                    camera={{
                        position: new Vector3(5, 0, 0)
                    }}
                >
                    <Wall x={-20} y={0} z={0} length={50} width={30} />
                    <Controls />
                </Canvas>
            </span>
        </ViewLayer>
    );
};

const BackLink = styled(Link)`
    padding: 2rem;
    position: absolute;
    z-index: 610;
`;
