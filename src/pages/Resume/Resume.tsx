import React from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import r1 from "../../assets/images/r1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import r2 from "../../assets/images/r2.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import r3 from "../../assets/images/r3.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import downloadIcon from "../../assets/images/download.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import resumePdf from "../../assets/images/Gopinath Maddula 2025 Resume.pdf";
import "./Resume.css";

const Resume: React.FC = () => {
  const handleDownload = () => {
    // resumePdf is a URL string after bundling
    const link = document.createElement("a");
    link.href = resumePdf;
    // set the filename the user will see
    link.download = "Gopinath_Maddula_Resume.pdf";
    // append, click and remove
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <main className="resume-main-page">
      <div className="resume-main-content">
        <div className="resume-page">
          <img src={r1} alt="resume 1" />
          <img src={r2} alt="resume 1" />
          <img src={r3} alt="resume 1" />
        </div>
        <div className="resume-download-btn-container">
          <button className="cs-view-btn" onClick={handleDownload}>
            DOWNLOAD MY RESUME <img src={downloadIcon} alt="btn" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Resume;
