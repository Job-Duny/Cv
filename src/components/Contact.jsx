import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import MapChart from './Map'
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';


const Section = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1200px) {
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

`
const Right = styled.div`
  flex: 1;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  color: #036b5c;
`
const Form = styled.form`
  width: 70%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 3vw;
  @media only screen and (max-width: 768px) {
    width:300px;
  }
`
const Input = styled.input`
  padding: 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
`
const Button = styled.button`
  background-color: #044a40;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
`

export const Contact = () => {

  const ref = useRef();
  const [sucesss, setSucesss] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();
  // setSucesss(true);
  emailjs.sendForm('service_6qkrjif', 'template_qz2jqwq', ref.current, 'Eep72mwq-XuIZLjcD')
  .then((result) => {
      console.log(result.text);
      setSucesss(true);
  }, (error) => {
      console.log(error.text);
      setSucesss(false);
  });
  Toast.fire({
    icon: 'success',
    title: 'Message send successfully',
    background: '#DACBBA',
  })
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

  return (
    <BrowserRouter>
    <Section id='cont'>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact me!</Title>
            <Input type="text" placeholder="Name" name='name' required/>
            <Input type="email" placeholder="Email"  name='email' required/>
            <TextArea placeholder="Message" rows={10} name='message' required/>
            <Button type='submit'>Send</Button>
            {sucesss && (
              "Thanks, I'll reply ASAP :)"
              // <HashLink to='home'>Back to start?</HashLink>
              
              )}
              <Link to='#home'>Back to start?</Link>
          </Form>
            
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
    </BrowserRouter>
  )
}
