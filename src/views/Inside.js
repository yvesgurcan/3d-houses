import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';
import Controls from '../components/Controls';
import Block from '../components/Block';
import Pointer from '../components/Pointer';

// For readability
const Wall = Block;
const Pedestal = Block;

export default () => {
    return (
        <ViewLayer backgroundColor="rgb(140, 140, 255)" zIndex={600}>
            <Route
                exact
                path="/inside"
                render={() => <BackLink to="/">Back</BackLink>}
            />
            <Canvas
                shadowMap
                camera={{
                    position: new Vector3(-10, 0, 0)
                }}
            >
                <ambientLight intensity={0.5} />
                <hemisphereLight
                    color="rgb(100, 100, 100)"
                    intensity={0.5}
                    position={[10, 5, 0]}
                />
                <Wall
                    color="rgb(0, 0, 205)"
                    x={-60}
                    y={0}
                    z={0}
                    length={70}
                    width={30}
                />
                <Wall
                    color="rgb(0, 0, 205)"
                    x={60}
                    y={0}
                    z={0}
                    length={70}
                    width={30}
                />
                <Wall
                    color="rgb(0, 0, 205)"
                    x={0}
                    y={15}
                    z={0}
                    length={70}
                    depth={120}
                />
                <Wall
                    color="rgb(0, 0, 205)"
                    x={0}
                    y={-15}
                    z={0}
                    length={70}
                    depth={120}
                />
                <Wall
                    color="rgb(0, 0, 205)"
                    x={0}
                    y={0}
                    z={35}
                    depth={120}
                    width={30}
                />
                <Wall
                    color="rgb(0, 0, 205)"
                    x={0}
                    y={0}
                    z={-35}
                    depth={120}
                    width={30}
                />
                <Pointer to="/inside/pin1" x={10} y={-10} z={-10} />
                <Pointer to="/inside/pin2" x={40} y={-10} z={5} />
                <Pointer to="/inside/pin3" x={-40} y={-10} z={-10} />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={30}
                    y={-12}
                    z={-10}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={35}
                    y={-12}
                    z={0}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={30}
                    y={-12}
                    z={10}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={-30}
                    y={-12}
                    z={-10}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={-35}
                    y={-12}
                    z={0}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={-30}
                    y={-12}
                    z={10}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Controls enableZoom={false} />
            </Canvas>
        </ViewLayer>
    );
};

const BackLink = styled(Link)`
    padding: 2rem;
    position: absolute;
    z-index: 610;
`;
