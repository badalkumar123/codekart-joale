import {
  ChangeHistoryOutlined,
  DiamondOutlined,
  GridViewOutlined,
  LanguageOutlined,
  PanoramaVerticalOutlined,
  TokenOutlined,
  ViewInAr,
  WidgetsOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Award.css";
import { SiHackthebox } from "@react-icons/all-files";

export default function Award() {
  return (
    <div className="awardcontainer">
      <div className="tophead">
        <div className="ouraward"> Our Awards & Honors</div>
        <div className="awardline"></div>
        <div className="awardpara">
          Mexican cartels have been blamed for the arrival of fentanyl
          intoOhio,including a new deadly para-fluorofentanyl
        </div>
      </div>
      <div className="alllogo">
        <div className="aw1logo">
          <ViewInAr fontSize="large" />
        </div>
        <div className="jeale">Jeale Brand 2017</div>
        <div className="aw2logo">
          <TokenOutlined fontSize="large" />
        </div>
        <div className="ldadward">LD Award 2017</div>
        <div className="aw3logo">
          <GridViewOutlined fontSize="large" />
        </div>
        <div className="mzaward">MZ Award 2016</div>

        <div className="aw4logo">
          <PanoramaVerticalOutlined fontSize="large" />
        </div>
        <div className="tlaward">TL Award 2016</div>

        <div className="aw5logo">
          <ChangeHistoryOutlined fontSize="large" />
        </div>
        <div className="zgb">ZGB Award 2015</div>

        <div className="aw6logo">
          <LanguageOutlined fontSize="large" />
        </div>
        <div className="uni">Universe 2015</div>

        <div className="aw7logo">
          <WidgetsOutlined fontSize="large" />
        </div>
        <div className="hn">HN Award 2014</div>

        <div className="aw8logo">
          <DiamondOutlined fontSize="large" />
        </div>
        <div className="diamond">Diamond Award</div>
      </div>
    </div>
  );
}
