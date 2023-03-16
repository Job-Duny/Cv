import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Iphone2 from './Iphone2'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 40vw;
  max-width: 550px;
  @media only screen and (max-width: 1200px) {
    width: 330px;}
  @media only screen and (max-width: 768px) {
    height: 50vh;
  }
`

export const Development = () => {
  return (
    <Container>
    <Canvas>     
      <Stage environment="city" intensity={0.9}>
        <Iphone2 scale={2}/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  </Container>
  )
}
