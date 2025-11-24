import React from "react";
import "./Edpedia.css";

const Edpedia = () => {
  const handleRequestAccess = () => {
    const subject = encodeURIComponent(
      "Requesting Access to Locked Case Study"
    );
    const body = encodeURIComponent(
      `Hi,\n\nI would like to request access to view this locked case study. Please let me know the process.\n\nRegards,\n[Your Name]`
    );
    window.location.href = `mailto:gopinath.maddula173@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="locked-wrapper">
      <div className="locked-container">
        {/* Left Section */}
        <div className="locked-image">
          <div className="locked-image-overlay">
            <svg className="locked-big-icon" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="10"
                width="18"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M7 10V7a5 5 0 0 1 10 0v3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="15" r="1.25" fill="currentColor" />
            </svg>
            <p>Protected Content</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="locked-content">
          <div className="locked-card">
            <div className="locked-icon-wrap">
              <svg className="locked-icon" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="10"
                  width="18"
                  height="11"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 10V7a5 5 0 0 1 10 0v3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="12" cy="15" r="1.25" fill="currentColor" />
              </svg>
            </div>

            <h1 className="locked-title">
              This Case Study is <span>Locked</span>
            </h1>

            <p className="locked-text">
              This project is protected under a{" "}
              <strong>NDA (Non-Disclosure Agreement)</strong>. I cannot share
              the complete case study publicly.
            </p>

            <p className="locked-text small">
              I can share high-level details, design process insights, and
              redacted screens during an interview or private discussion.
            </p>

            <div className="locked-buttons">
              <button className="btn-primary" onClick={handleRequestAccess}>
                Request Access
              </button>
              <a className="btn-secondary" href="/case-studies">
                Back to Projects
              </a>
            </div>

            <p className="locked-footer">
              For recruiters: A private walkthrough can be arranged on request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edpedia;
