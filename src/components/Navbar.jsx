
import React from "react";
import styled from "styled-components";
import vecttor12 from "../img/Group24.png";
import search from "../img/search.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const Container = styled.div`
  width: 95vw;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const Icons = styled.div`  
  display: flex;
  align-items: center;
  gap: 50px;
`

const Icon = styled.img``

const Logo = styled.img`
  height: 50px;
  @media only screen and (max-width: 768px) {
    height: 30px;
  }
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const ListItem = styled.li`
  cursor: pointer;
`

const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #044a40;
  color: white;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: auto;
    padding: 10 20px;
    background: none;
  }
`


export const Navbar = () => {
  return (
    <BrowserRouter>
    <Section>
        <Container>
          <Links>
            <Logo src={vecttor12} />
            <List>
              <ListItem><Link to='#home'>Home</Link></ListItem>
              <ListItem><Link to='#me'>About</Link></ListItem>
              <ListItem><Link to='#works'>Works</Link></ListItem>
            </List>
          </Links>
          <Icons>
            <Link to='#cont'>
              <Button>Contact me!</Button>
            </Link>
          </Icons>
        </Container>
    </Section>
    </BrowserRouter>
  )
}
