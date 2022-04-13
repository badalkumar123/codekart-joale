import { FiberManualRecord } from "@mui/icons-material";
import React from "react";
import { Button, Carousel } from "react-bootstrap";
import img1 from "../img/solidcolor (7).png";
import "./Slid.css";

export default function Slid() {
  return (
    <Carousel variant="dark" indicators={<FiberManualRecord />}>
      <Carousel.Item>
        <img className="d-block" src={img1} alt="First slide" />
        <Carousel.Caption className="cap">
          <h1>Think Simple Design Simple.</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button className="read">READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={img1} alt="Second slide" />
        <Carousel.Caption className="cap">
          <h1>
            Think Simple<br></br>
            Design Simple.
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="read">READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={img1} alt="Third slide" />
        <Carousel.Caption className="cap">
          <h1>
            Think Simple<br></br>
            Design Simple.
          </h1>
          <p>
            An aim is a goal or objective to achieve in life. In order to
            succeed i
          </p>
          <button className="read">READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
