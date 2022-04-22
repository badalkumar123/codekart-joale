import React from 'react'
import { Card } from 'react-bootstrap'
import covering from '../img/coveimg.jpg'
import './Bannertwo.css'

export default function Bannertwo() {
  return (
    <div className='bannerend'>
       
  <Card>
    <Card.Img variant="top" src={covering} />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  

    </div>
  )
}
