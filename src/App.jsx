import styled from 'styled-components'
import { Hero } from './components/Hero'
import { Me } from './components/Me'
import { Works } from './components/Works'
import { Contact } from './components/contact'
import bg from './img/background.jpg'
import { Test } from './components/Test'


const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  background: url( ${bg} ) center/cover no-repeat;
  &::-webkit-scrollbar {
    display: none;
  }
`



function App() {

  return (
    <Container>
      <Hero />
      <Me/>
      <Works/>
      <Contact/> 
    </Container>
  )
}

export default App
