import React from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import title1 from "../../assets/images/Project Title.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import pmImg from "../../assets/images/Group 2056.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import poImg from "../../assets/images/Project Overview.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import pgImg from "../../assets/images/Group 2022.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import dpImg from "../../assets/images/Design Process.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import emImg from "../../assets/images/User Research.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import ppImg from "../../assets/images/Pain Points.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import upImg from "../../assets/images/User Personas.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import usImg from "../../assets/images/User Stories.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import ujpImg from "../../assets/images/User Journey Map.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import psImg from "../../assets/images/problem statements.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import caImg from "../../assets/images/Competitive Audit.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import wmImg from "../../assets/images/Lofi Wireframes.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import usbImg from "../../assets/images/Usability Testings.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import impImg from "../../assets/images/Impacts.svg";

import "./Kharidh.css";

type Props = {
  title?: string;
};

const Kharidh: React.FC<Props> = ({ title = "Kharidh" }) => {
  return (
    <div className="kharidh-page">
      <img src={title1} alt="title" className="title-1-img" />

      {/* PERSONAL MOTIVATION */}

      <div className="personal-motivation-section">
        <img src={pmImg} alt="pm-img" className="pm-img" />
        {/* <div className="vertical-heading-container">
          <h2 className="vertical-heading">
            PERSONAL <span style={{ opacity: "0.5" }}>MOTIVATION</span>
          </h2>
        </div>
        <div className="personal-motivation-content-container">
          <img src={pmImg} alt="pm-img" className="pm-img" />
          <p className="personal-motivation-text">
            I grew up watching my father run our small kirana (grocery) store.
            Every day, he travel to multiple wholesale markets to restock goods.
            He often carried heavy rice bags, oil tins, and carton boxes on his
            bike. This was tiring, unsafe, and time-consuming — especially as he
            was getting older. It was difficult to see him struggle physically
            just to keep the business running.
            <br />
            <span>
              This personal experience made me realize that many local store
              owners face the same problem: They don't have a simple, reliable
              way to order wholesale items directly from nearby distributors.
            </span>
          </p>
        </div> */}
      </div>

      {/* PROJECT OVERVIEW */}
      <div className="project-overview-section">
        <img src={poImg} alt="pm-img" className="pm-img" />
      </div>

      {/* PROBLEM GOAL  */}
      <div className="project-overview-section">
        <img src={pgImg} alt="pm-img" className="pm-img" />
      </div>

      {/* DESIGN PROCESS  */}
      <div className="project-overview-section">
        <img src={dpImg} alt="pm-img" className="pm-img" />
      </div>

      {/* EMPATHY MAP  */}
      <div className="project-overview-section">
        <img src={emImg} alt="pm-img" className="pm-img" />
      </div>

      {/* PAIN PPOINTS  */}
      <div className="project-overview-section">
        <img src={ppImg} alt="pm-img" className="pm-img" />
      </div>

      {/* USER PERSONAS  */}
      <div className="project-overview-section">
        <img src={upImg} alt="pm-img" className="pm-img" />
      </div>

      {/* USER STORIES  */}
      <div className="project-overview-section">
        <img src={usImg} alt="pm-img" className="pm-img" />
      </div>

      {/* USER Journey Map  */}
      <div className="project-overview-section">
        <img src={ujpImg} alt="pm-img" className="pm-img" />
      </div>

      {/* PROBLEM STATEMENTS */}
      <div className="project-overview-section">
        <img src={psImg} alt="pm-img" className="pm-img" />
      </div>

      {/* COMPETITIVE AUDIT */}
      <div className="project-overview-section">
        <img src={caImg} alt="pm-img" className="pm-img" />
      </div>

      {/* WIREFRAMES TO MOCKUP */}
      <div className="project-overview-section">
        <img src={wmImg} alt="pm-img" className="pm-img" />
      </div>

      {/* USABILITY STUDY */}
      <div className="project-overview-section">
        <img src={usbImg} alt="pm-img" className="pm-img" />
      </div>

      {/* IMPACTS*/}
      <div className="project-overview-section">
        <img src={impImg} alt="pm-img" className="pm-img" />
      </div>
    </div>
  );
};

export default Kharidh;
