import React, { useEffect, useState } from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import profile from "../../assets/images/Group 1950.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import f1s from "../../assets/images/F1Studioz 1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import ozo from "../../assets/images/ozonetellogowhite 1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import dina from "../../assets/images/dinamanilogo-white 1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import line from "../../assets/images/Line 6.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import figmaWhite from "../../assets/images/akar-icons_figma-fill.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import fArrow from "../../assets/images/Vector.png";
import "./MainContent.css";
import { useNavigate } from "react-router-dom";

const names = [
  "Gopinath", // English
  "గోపీనాథ్", // Telugu
  "गोपीनाथ", // Hindi
  "கோபிநாத்", // Tamil
  "ಗೋಪಿನಾಥ್", // Kannada
  "ഗോപിനാഥ്", // Malayalam
  "Гопинатх", // Russian
  "جوبيناث", // Arabic
  "戈皮纳特", // Chinese
  "ゴピナート", // Japanese
];

const MainContent: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentName = names[index];
    const typingSpeed = deleting ? 80 : 150;

    const handleTyping = () => {
      if (!deleting && displayedText.length < currentName.length) {
        setDisplayedText(currentName.slice(0, displayedText.length + 1));
      } else if (deleting && displayedText.length > 0) {
        setDisplayedText(currentName.slice(0, displayedText.length - 1));
      } else if (!deleting && displayedText.length === currentName.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && displayedText.length === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % names.length);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, deleting, index]);

  return (
    <main className="main-content">
      <div className="main-grid">
        <div className="main-content-grid">
          <div className="profile-image">
            <img src={profile} alt="Profile" />
          </div>
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <h1 className="main-text" style={{ marginBottom: "100px" }}>
                Hello! I'm{" "}
                <span className="typewriter-name" style={{ color: "#ff6bd2" }}>
                  {displayedText}
                  <span className="cursor" />
                </span>
              </h1>
              <span className="main-text-label">A Designer who turns</span>
              <span className="main-text-label label-1">Just Another App </span>
              <span className="main-text-label label-2">into</span>
              <span className="main-text-label label-3">
                Where Did You Get This?{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="current-working-section">
          <div className="current-working-container">
            <h1 className="cw-heading">UX UI DESIGNER</h1>
            <p className="cw-sub">Freelancer</p>
            <p className="cw-project">
              Project : <span className="edpedia">Edpedia</span>
            </p>
          </div>
          <div className="current-location-container">
            <h1 className="cw-heading">Location</h1>
            <p className="cw-location">Hyderabad</p>
          </div>
        </div>
      </div>

      {/* WORK EXPERIENCE */}

      <div>
        <h2 className="work-experience-heading">Work Experience</h2>
        <div className="work-experience-container">
          <span className="work-edpedia">Edpedia</span>
          <img src={line} alt="line" />
          <img src={f1s} alt="f1s" />
          <img src={line} alt="line" />
          <img src={dina} alt="dina" />
          <img src={line} alt="line" />
          <img src={ozo} alt="ozo" />
        </div>

        <hr className="divider" />
        {/* CASE STUDIES */}

        <div>
          <h2 className="work-experience-heading" style={{ marginTop: "60px" }}>
            Case Studies
          </h2>

          {/* KHARIDH */}
          <div className="case-study-main-container">
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
          <div className="case-study-main-container">
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
                    onClick={() => navigate("/case-studies/kharidh")}
                  >
                    VIEW CASE STUDY <img src={fArrow} alt="btn" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
