import React from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import f1s from "../../assets/images/F1Studioz 1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import ozo from "../../assets/images/ozonetellogowhite 1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import dina from "../../assets/images/dinamanilogo-white 1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
// import line from "../../assets/images/Line 6.png";
import "./WorkExperience.css";

const WorkExperience: React.FC = () => {
  return (
    <div>
      <h2 className="work-experience-heading">WORK EXPERIENCE</h2>
      <div className="work-experience-container">
        <span className="work-edpedia">Edpedia</span>
        <div className="responsive-line"></div>

        <img src={f1s} alt="f1s" />
        <div className="responsive-line"></div>

        <img src={dina} alt="dina" />
        <div className="responsive-line"></div>

        <img src={ozo} alt="ozo" />
      </div>
    </div>
  );
};

export default WorkExperience;
