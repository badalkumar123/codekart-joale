import React from "react";
import "./Footer.css";
import img01 from "../img/brand2.png";
import img02 from "../img/brand3.png";
import img03 from "../img/brand4.png";
import img04 from "../img/brand5.png";
import img05 from "../img/brand6.png";
import img06 from "../img/brand7.png";
import { FacebookRounded, Google, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer>
      <div className="contain">
        <div className="about">About</div>
        <div className="line1"></div>
        <div className="abtus">About us</div>
        <div className="services">services</div>
        <div className="term">Terms of services</div>
        <div className="privacy">Privacy Policy</div>
        <div className="works">Works</div>
        <div className="contact">Contact Us</div>
        <div className="company">Company</div>
        <div className="line2"></div>
        <div className="carrier">Carrier</div>
        <div className="cookies">Cookies</div>
        <div className="help">Help</div>
        <div className="ourteam">Our Team</div>
        <div className="awards">Awards</div>
        <div className="leader">Leadership</div>
        <div className="servic">Services</div>
        <div className="line3"></div>
        <div className="design">Design</div>
        <div className="stralegy">Stralegy</div>
        <div className="conten">Content</div>
        <div className="bonding">Bonding</div>
        <div className="reactclass">React class</div>
        <div className="digital">Digital</div>
        <div className="insta">Instagram</div>
        <div className="line4"></div>
        <img src={img01} className="footerimg1" alt=""></img>
        <img src={img02} className="footerimg2" alt=""></img>
        <img src={img03} className="footerimg3" alt=""></img>
        <img src={img04} className="footerimg4" alt=""></img>
        <img src={img05} className="footerimg5" alt=""></img>
        <img src={img06} className="footerimg6" alt=""></img>
        <div className="line5"></div>
        <div className="joa">Joale</div>
        <div className="dot01"></div>
        <div className="para01">
          Sometimes we come across some forgetful perso ns insurroundings. And
          some geniuses are also forg etfultosome extent.
        </div>
        <div className="footercont">Contact</div>
        <div className="line6"></div>
        <div className="addressdetil">
          Plot No: HIG-414, K-5, Kalinga Vihar LIG, Kalinganagar, Bhubaneswar,
          Odisha 751019 Phone: +91 8917216200
        </div>

        <div className="fbinco"><FacebookRounded/></div>
        <div className="twiticon"><Twitter/></div>
        <div className="googleicon"><Google/></div>
        <div className="rectbox"></div>
        <div className="boxcoint">copyright © 2022 All rights reserved</div>
      </div>
    </footer>
  );
}
