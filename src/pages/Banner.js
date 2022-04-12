import React from 'react'
import { Card } from 'react-bootstrap'
import coverimg from '../img/coveimg.jpg'
import './Banner.css'

export default function Banner() {
  return (
    <div><>
    <Card>
      <Card.Img className='coverpic' variant="top" src={coverimg} />
      <Card.Text className='covertext'>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      
    </Card>
  </></div>
  )
}
