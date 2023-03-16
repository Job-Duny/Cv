import React from 'react'
import styled from 'styled-components'
import line from '../img/line.png'
import mooni from '../img/mooni.png'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Cube } from './Cube'
import CV_En from './PinaMartinezGaelJob_CV_En.pdf'
import CV_Es from './PinaMartinezGaelJob_Cv_Es.pdf'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  /* @media only screen and (max-width: 768px) {
    height: 200vh;
  } */
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 90vw;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WtIdo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #DACBBA;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #fdf7f1
`;

const Button = styled.button`
  background-color: #044a40;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 20px;
`;


export const Me = () => {
  return (
    <Section id='me'>
      <Container>

        <Left>
        <Canvas camera={{fov:25, position: [5, 5, 5]}}> 
              <OrbitControls enableZoom={false} autoRotate={true}/>
              <ambientLight intensity={.3} />
              <directionalLight position={[5, 10, 15]} intensity={1.5} />
              <Cube></Cube>
          </Canvas>
        </Left>

        <Right>
        <Title>Think out of the box</Title>
          <WtIdo>
            <Line src={line}/>
            <Subtitle>Who am i??</Subtitle>
          </WtIdo>
          <Desc>
            I'm a IT stuent that loves cooking, playing videogames and learning new things about programming.
          </Desc>

          <span>
            <a href="https://drive.google.com/file/d/1SVRys7ysyZddXguNsEfSUEzu52hH1qH7/view?usp=sharing" >
              <Button> look my  CV (Es)</Button>
            </a>
            <a href="https://drive.google.com/file/d/1DEXpqFl40IPU9SsGWMMWYdEkkGCvAVlM/view?usp=sharing" >
              <Button> look my  CV (En)</Button>
            </a>
          </span>
        </Right>

      </Container>
    </Section>
  )
}
