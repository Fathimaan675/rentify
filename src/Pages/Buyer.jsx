import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Header from '../COMPONENTS/Header'

function Buyer() {
    const [isRed, setIsRed] = useState(false);

    const handleClick = () => {
      setIsRed(!isRed);
    };
  return (

    <>
    <Header/>
    <div className='d-flex' style={{marginTop:'100px',marginLeft:'100px'}}>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View seller detailes </Button>
      <i  style={{marginLeft:'100px'}} className={`fa-regular fa-heart ${isRed ? 'red' : ''}`} onClick={handleClick}></i>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Buyer