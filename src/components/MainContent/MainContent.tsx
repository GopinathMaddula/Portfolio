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
import "./MainContent.css";

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
          <img src={f1s} alt="f1s" />
          <img src={line} alt="line" />
          <img src={ozo} alt="ozo" />
          <img src={line} alt="line" />
          <img src={dina} alt="dina" />
          <img src={line} alt="line" />
          <span className="work-edpedia">Edpedia</span>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
