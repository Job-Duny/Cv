import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import { Cube } from './Cube'

const Conitainer = styled.div`
    width: 100vw;
    height: 100%;
    scroll-snap-align: center;
`

export const Test = () => {
  return (
    <Conitainer>
        <Canvas> 
            <OrbitControls enableZoom={false} autoRotate={false}/>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 10, 15]} intensity={1} />
            <Cube></Cube>
        </Canvas>
    </Conitainer>
  )
}
