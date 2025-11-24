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
            <span className="link" onClick={() => navigate("/resume")}>
              Resume
            </span>
          </div>
          <div className="links-container">
            <span className="link" onClick={() => navigate("/case-studies")}>
              Case Studies
            </span>
            <span className="link" onClick={() => navigate("/about")}>
              Designer
            </span>
            <span className="disabled-link">Design Process</span>
          </div>
          <div className="links-container">
            <span className="disabled-link">Developer</span>
            <span className="disabled-link">Filmmaker</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="footer-icons-container">
          <a
            href="https://www.figma.com/design/i1trPpphuiuyHiIoBx81YE/MY-PORTFOLIO?node-id=0-1&t=7YQud02kUY3fm74f-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={figma} alt="Figma Logo" className="footer-icon" />
          </a>
          <a
            href="https://github.com/GopinathMaddula/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="GitHub Logo" className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/gopinath-maddula-21ab72261/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkdn} alt="LinkedIn Logo" className="footer-icon" />
          </a>
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
