import React from "react";
import Banner from "./Banner";
import Contentpage from "./Contentpage";
import Core from "./Core";
import Face from "./Face";
import Footer from "./Footer";
import Header from "./Header";
import Midphotocard from "./Midphotocard";
import Planning from "./Planning";
import Slid from "./Slid";

export default function home() {
  return (
    <div>
      <Header/>
      <Slid/>
      <Contentpage/>
      <Midphotocard/>
      <Core/>
      <Banner/>
      <Planning/>
     
      <Footer/>
     
      
    </div>
  );
}
