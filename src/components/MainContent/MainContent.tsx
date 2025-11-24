import React from "react";
import "./MainContent.css";
import HeroSection from "../HeroSection/HeroSection.tsx";
import WorkExperience from "../WorkExperience/WorkExperience.tsx";
import CaseStudy from "../CaseStudy/CaseStudy.tsx";

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      {/* HERO SECTION */}

      <HeroSection />

      {/* WORK EXPERIENCE */}

      <WorkExperience />

      <hr className="divider" />
      {/* CASE STUDIES */}

      <div>
        <h2 className="work-experience-heading" style={{ marginTop: "60px" }}>
          CASE STUDIES
        </h2>

        {/* KHARIDH */}
        <CaseStudy
          title="KHARIDH"
          description="A Wholesale Ordering App for Kirana Store Owners"
          link="kharidh"
          className="case-study-container"
        />

        {/* EDPEDIA */}
        <CaseStudy
          title="EDPEDIA"
          description="A complete internal management hub for school accounts, staff,
                books, attendance, and everyday operations."
          link="edpedia"
          className="case-study-container-edpedia"
        />
      </div>
    </main>
  );
};

export default MainContent;
