import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Face.css";
import face from "../img/face.jpg";


export default function Face() {
  return (
    <div className="facediv">
      <div >
        <CardGroup>
          <Card>
            <Card.Img className="faceimg" variant="top" src={face} />
          </Card>
          <Card>
            <Card.Img className="faceimg" variant="top" src={face} />
          </Card>
          <Card>
            <Card.Img className="faceimg" variant="top" src={face} />
          </Card>
          <Card>
            <Card.Img className="faceimg" variant="top" src={face} />
          </Card>
        </CardGroup>
      </div>
      <div>
        <CardGroup>
          <Card>
            <Card.Img className="faceimg" variant="top" src={face} />
          </Card>
          <Card>
            <Card.Img className="faceimg" variant="top" src={face} />
          </Card>
          <Card>
            <Card.Img className="faceimg" variant="top" src={face} />
          </Card>
          <Card>
            <Card.Img className="faceimg" variant="top" src={face} />
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
