import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import line from '../img/line.png'
import mooni from '../img/mooni.png'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 90vw;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 0 20px;
  }
` 

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    flex: 1;
  }
` 
const Title = styled.h1`
  font-size: 50px;
` 
const WtIdo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`
  color: #DACBBA;
`
const Desc = styled.p`
  font-size: 24px;
  color: #fdf7f1
`
const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #044a40;
  color: white;
  cursor: pointer;
`
const Right = styled.div`
  flex: 2;
  position: relative;
  /* background-color: #f9a826; */
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100vw;
  }
` 
const Img = styled.img`
  width: 700px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 5s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate{
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`

export const Hero = () => {
  return (
    <Section id='home'>
      <Navbar />
      <Container>
        <Left>
          <Title>Hi, I'm Job</Title>
          <WtIdo>
            <Line src={line}/>
            <Subtitle>What i do?</Subtitle>
          </WtIdo>
          <Desc>
          I'm a Frontend Developer, I like to create websites, mobile apps and y wanna improve my habilities like Backend Developer.
          </Desc>
          <a href="https://github.com/Job-Duny">
            <Button>Watch my personal Github</Button>
          </a>
        </Left>

        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#1c5647"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={mooni}/>
        </Right>
      </Container>
    </Section>
  )
}
