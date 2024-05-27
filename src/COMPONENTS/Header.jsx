import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
   
  
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand href="/login"><h1><i class="fa-brands fa-renren"></i>Rendify</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/login">rendify</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  


    </>
  )
}

export default Header