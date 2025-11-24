import React from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import figmaWhite from "../../assets/images/akar-icons_figma-fill.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import fArrow from "../../assets/images/Vector.png";
import { useNavigate } from "react-router-dom";
import "./CaseStudy.css";

export interface CaseStudyProps {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  className?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  description,
  image,
  link,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <div className="case-study-main-container">
      <div className={className}>
        <div className="cs-linear-container">
          <h5 className="cs-name">{title}</h5>
          <p className="cs-desc">{description}</p>
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
              onClick={() => navigate(`/case-studies/${link}`)}
            >
              VIEW CASE STUDY <img src={fArrow} alt="btn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
