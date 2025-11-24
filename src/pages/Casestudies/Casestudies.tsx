import React from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import figmaWhite from "../../assets/images/akar-icons_figma-fill.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import fArrow from "../../assets/images/Vector.png";
import "./Casestudies.css";

const Casestudies: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="case-studies-page">
      <div className="case-studies-header">
        <h1 className="cs-main-heading fade-up" style={{ "--d": "0s" }}>
          My Case Studies
        </h1>
        <p className="cs-tagline fade-up" style={{ "--d": "0.12s" }}>
          A curated selection of my UX/UI projects.
        </p>
        <p className="cs-description fade-up" style={{ "--d": "0.24s" }}>
          Each case study showcases my end-to-end design approach — from
          discovering user problems, defining clear goals, ideating solutions,
          and crafting polished UI experiences. These projects demonstrate how I
          blend creativity with usability to deliver meaningful digital
          products.
        </p>
      </div>

      {/* KHARIDH */}
      <div className="case-study-main-container ">
        <div className="case-study-container">
          <div className="cs-linear-container">
            <h5 className="cs-name">KHARIDH</h5>
            <p className="cs-desc">
              A Wholesale Ordering App for Kirana Store Owners
            </p>
            <div className="cs-btn-main-container">
              <div className="cs-position-main-container">
                <div className="cs-position-container">
                  <h5 className="position">POSITION</h5>
                  <p className="pos-name">UX / UI DESIGNER</p>
                </div>
                <div className="cs-position-container">
                  <h5 className="position">TOOLS</h5>
                  <img
                    src={figmaWhite}
                    alt="fig-fff"
                    style={{ height: "24px", width: "24px" }}
                  />
                </div>
              </div>
              <button
                className="cs-view-btn"
                onClick={() => navigate("/case-studies/kharidh")}
              >
                VIEW CASE STUDY <img src={fArrow} alt="btn" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* EDPEDIA */}
      <div className="case-study-main-container ">
        <div className="case-study-container-edpedia">
          <div className="cs-linear-container">
            <h5 className="cs-name">Edpedia</h5>
            <p className="cs-desc">
              A complete internal management hub for school accounts, staff,
              books, attendance, and everyday operations.
            </p>
            <div className="cs-btn-main-container">
              <div className="cs-position-main-container">
                <div className="cs-position-container">
                  <h5 className="position">POSITION</h5>
                  <p className="pos-name">UX / UI DESIGNER</p>
                </div>
                <div className="cs-position-container">
                  <h5 className="position">TOOLS</h5>
                  <img
                    src={figmaWhite}
                    alt="fig-fff"
                    style={{ height: "24px", width: "24px" }}
                  />
                </div>
              </div>
              <button
                className="cs-view-btn"
                onClick={() => navigate("/case-studies/edpedia")}
              >
                VIEW CASE STUDY <img src={fArrow} alt="btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudies;
