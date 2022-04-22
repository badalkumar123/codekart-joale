import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Ourblog.css";
import img1 from '../img/cardpic03.jpg'
import img2 from '../img/cardpic3.jpg'

export default function Ourblog() {
  return (
    <div className="blogcontainer">
      <div className="bloghead">
        <div className="oubl">Our Blog</div>
        <div className="blogline"></div>
        <div className="blogpara">
          Mexican cartels have been blamed for the arrival of fentanyl
          intoOhio,including a new deadly para-fluorofentanyl
        </div>
        <div className="blogcard">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
             
            </Card>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
             
            </Card>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}
