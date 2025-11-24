import React from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import aboutMe from "../../assets/images/About me.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import f1s from "../../assets/images/F1Studioz 1.png";

import "./About.css";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel.tsx";

const About: React.FC = () => {
  return (
    <main className="about-page-main-container">
      <img src={aboutMe} alt="About Me" style={{ width: "100%" }} />

      {/* About */}

      <div className="about-text-container">
        <h2 className="about-heading">UI Engineer / Designer</h2>
        <p className="about-description">
          My journey began in front-end development, where I mastered{" "}
          <span className="highlighter">React.js, TypeScript, HTML, CSS, </span>
          and<span className="highlighter"> Material UI </span>to build
          pixel-perfect, responsive layouts. Over time, I evolved into designing
          user experiences that balance form, function, and emotion — because I
          believe every click, scroll, and hover should make sense.
        </p>
        <p className="about-description">
          I’ve also completed the{" "}
          <span className="highlighter">Google UX Design Certification</span>,
          which strengthened my foundation in{" "}
          <span className="highlighter">
            user research, wireframing, prototyping
          </span>
          , and <span className="highlighter">usability testing</span> — helping
          me design experiences that are not only visually engaging but also
          grounded in user-centered thinking.
        </p>
      </div>

      <hr />

      {/* WORK EXPERIENCE */}

      <div className="work-experience-head-container">
        <h2 className="work-experience-about-heading">Work Experience</h2>
        <div className="work-experience-all-container">
          <div className="work-experience-container about-work-experience">
            <span className="edp-head">Edpedia</span>
            <span className="designation">Freelance UX/UI Designer</span>
            <span className="duration">
              Duration: <span className="dur-period">6 Months</span>
            </span>
            <span className="duration">Description:</span>
            <p className="edpedia-description">
              Led the complete UX/UI design for the Library Management Module,
              taking ownership from research to final handoff.
              <br />
              <br />
              Designed intuitive user flows for book issuing, tracking,
              cataloging, and internal school operations. Created scalable
              design components and a cohesive interface aligned with Edpedia’s
              overall school management system.
              <br />
              <br />
              Collaborated closely with stakeholders to refine requirements and
              deliver a clean, efficient, and user-friendly module.
            </p>
          </div>
          <div className="work-experience-container about-work-experience">
            <img src={f1s} alt="f1s" />
            <span className="designation">UX/UI Designer & Developer</span>
            <span className="duration">
              Duration: <span className="dur-period">2+ Years</span>
            </span>

            <span className="duration">Dinamani (News & Media Website)</span>
            <span className="duration">
              Role:
              <span className="dur-period">Designer & Frontend Developer</span>
            </span>
            <p className="edpedia-description">
              Worked on designing and developing user-interactive pages for
              stories, videos, and galleries. Delivered pixel-perfect UI layouts
              based on editorial requirements. Improved accessibility,
              responsiveness, and overall user experience across devices.
            </p>
            <span className="duration">
              Ozonetel (Call Center Software Platform)
            </span>
            <span className="duration">
              Role:
              <span className="dur-period">Frontend Developer</span>
            </span>
            <p className="edpedia-description">
              Developed dashboards and interface components for global call
              center operations. Built reusable React components and optimized
              UI performance. Collaborated with cross-functional teams in an
              agile environment to deliver production-ready features.
            </p>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "40px" }} />

      {/*Certifications */}

      <div className="work-experience-head-container">
        <h2 className="work-experience-about-heading">Certifications</h2>
        <div className="certification-container">
          <ImageCarousel />
        </div>
      </div>
    </main>
  );
};

export default About;
