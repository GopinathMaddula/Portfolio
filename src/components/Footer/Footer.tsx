import React from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import figma from "../../assets/images/Group 1944.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import linkdn from "../../assets/images/linkdn.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import git from "../../assets/images/git.svg";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-container">
      <h1 className="footer-heading">GOPINATH MADDULA</h1>
      <p className="footer-desc">
        “Design is not just what it looks like — it’s how it works.”
      </p>
      <div className="footer-links-section">
        <div className="hr-line-container">
          <hr className="hr-line" />
        </div>
        <div className="footer-links-container">
          <div className="links-container">
            <span className="link" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="link" onClick={() => navigate("/about")}>
              About
            </span>
            <span className="link" onClick={() => navigate("/contact")}>
              Contact
            </span>
          </div>
          <div className="links-container">
            <span className="link">Resume</span>
            <span className="link">Designer</span>
            <span className="link">Case Studies</span>
          </div>
          <div className="links-container">
            <span className="link">Design Process</span>
            <span className="link">Developer</span>
            <span className="link">Filmmaker</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="footer-icons-container">
          <img src={figma} alt="Figma Logo" className="footer-icon" />
          <img src={git} alt="GitHub Logo" className="footer-icon" />
          <img src={linkdn} alt="LinkedIn Logo" className="footer-icon" />
        </div>
        <div className="footer-info-container">
          <p className="footer-terms">gopinath.maddula173@gmail.com</p>
          <p className="footer-copywright">
            © 2025 Gopinath Maddula — Designed & coded by me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
