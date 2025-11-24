import React, { useEffect, useRef, useState } from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import r1 from "../../assets/images/r1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import r2 from "../../assets/images/r2.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import r3 from "../../assets/images/r3.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import downloadIcon from "../../assets/images/download.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import resumePdf from "../../assets/images/Gopinath Resume 2025.pdf";
import "./Resume.css";

/**
 * If you have an uploaded file on the server/dev machine and want to use that path directly,
 * you can also fallback to a local path like:
 * const uploadedPdfPath = "/mnt/data/Gopinath Resume 2025.pdf";
 *
 * Then use uploadedPdfPath in the iframe `src` if needed instead of `resumePdf`.
 */

const Resume: React.FC = () => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const viewerRef = useRef<HTMLDivElement | null>(null);

  // lock body scroll when viewer open
  useEffect(() => {
    document.body.style.overflow = viewerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [viewerOpen]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // handle download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf; // or use uploadedPdfPath if you want the direct /mnt/data path
    link.download = "Gopinath_Maddula_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // close when clicking backdrop
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setViewerOpen(false);
  };

  return (
    <main className="resume-main-page">
      <div className="resume-main-content">
        <div className={`resume-page ${viewerOpen ? "blurred" : ""}`}>
          {/* border + expand icon wrapper */}
          <div className="resume-preview">
            <button
              className="expand-btn"
              aria-label="Open resume preview"
              title="Open resume"
              onClick={() => setViewerOpen(true)}
            >
              {/* simple expand icon (SVG) */}
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Images / thumbnails */}
            <div className="resume-thumbs">
              <img src={r1} alt="img 1" />
              <img src={r2} alt="img 2" />
              <img src={r3} alt="img 3" />
            </div>
          </div>
        </div>

        <div className="resume-download-btn-container">
          <button className="cs-view-btn" onClick={handleDownload}>
            DOWNLOAD MY RESUME <img src={downloadIcon} alt="download" />
          </button>
        </div>
      </div>

      {/* Viewer modal */}
      {viewerOpen && (
        <div
          className="resume-viewer-backdrop"
          onClick={onBackdropClick}
          role="presentation"
        >
          <div
            className="resume-viewer"
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            ref={viewerRef}
          >
            <div className="viewer-header">
              <div className="viewer-title">Resume — Gopinath Maddula</div>
              <div className="viewer-actions">
                <a
                  className="viewer-download-link"
                  href={resumePdf}
                  download="Gopinath_Maddula_Resume.pdf"
                >
                  Download
                </a>
                <button
                  className="viewer-close"
                  aria-label="Close resume preview"
                  onClick={() => setViewerOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="viewer-body">
              {/* Use the imported resumePdf URL. If you prefer direct server path, replace src with that path. */}
              <iframe
                src={resumePdf}
                title="Resume PDF"
                className="resume-iframe"
                frameBorder={0}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Resume;
