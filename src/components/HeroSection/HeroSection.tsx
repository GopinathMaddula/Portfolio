import React, { useEffect, useState } from "react";
import "./HeroSection.css";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import profile from "../../assets/images/Group 1950.png";

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

const HeroSection: React.FC = () => {
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
        // pause at end before deleting
        setTimeout(() => setDeleting(true), 900);
      } else if (deleting && displayedText.length === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % names.length);
      }
    };

    const t = window.setTimeout(handleTyping, typingSpeed);
    return () => window.clearTimeout(t);
  }, [displayedText, deleting, index]);

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Main row: profile image + text */}
        <div className="hero-main">
          <div className="profile-wrap" aria-hidden={false}>
            <img className="profile-img" src={profile} alt="Gopinath profile" />
          </div>

          <div className="hero-text">
            <h1 className="greeting">
              Hello! I'm{" "}
              <span className="typewriter-name" aria-live="polite">
                <span className="name-text">{displayedText}</span>
                <span className="cursor" aria-hidden="true" />
              </span>
            </h1>

            <div className="hero-taglines">
              <div className="tagline small">A Designer who turns</div>
              <div className="tagline big">Just Another App</div>
              <div className="tagline small">into</div>
              <div className="tagline big accent">Where Did You Get This?</div>
            </div>
          </div>
        </div>

        {/* Cards row (under the main hero) */}
        <div className="hero-cards">
          <div className="cw cw-project">
            <h2 className="cw-heading">UX UI DESIGNER</h2>
            <p className="cw-sub">Freelancer</p>
            <p className="cw-project-text">
              Project : <span className="edpedia">Edpedia</span>
            </p>
          </div>

          <div className="cw cw-location">
            <h2 className="cw-heading">Location</h2>
            <p className="cw-location-text">Hyderabad</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
