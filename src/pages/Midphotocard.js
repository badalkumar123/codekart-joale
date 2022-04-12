import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import cardpic1 from "../img/cardpic1.jpg";
import cardpic2 from "../img/cardpic2.jpg";
import cardpic3 from "../img/cardpic3.jpg";
import cardpic01 from "../img/cardpic01.jpg";
import cardpic02 from "../img/cardpic02.jpg";
import cardpic03 from "../img/cardpic03.jpg";
import './Midphotocard.css'

export default function Midphotocard() {
  return (
    <div >
        
      <div>
      <CardGroup>
        <Card className="cardpic1"> 
          <Card.Img variant="top" src={cardpic1} />
          
        </Card>
        <Card className="cardpic1">
          <Card.Img variant="top" src={cardpic2} />
         
        </Card>
        <Card className="cardpic1">
          <Card.Img variant="top" src={cardpic3} />
    
        </Card>
      </CardGroup>

      </div>
      <div>
      <CardGroup>
        <Card className="cardpic1"> 
          <Card.Img variant="top" src={cardpic01} />
          
        </Card>
        <Card className="cardpic1">
          <Card.Img variant="top" src={cardpic02} />
         
        </Card>
        <Card className="cardpic1">
          <Card.Img variant="top" src={cardpic03} />
    
        </Card>
      </CardGroup>
      </div>
    </div>
  );
}
