import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import profile from "../../assets/images/Group 1950.png";
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
      <Grid container>
        <Grid size={{ xs: 12, sm: 6 }} className="profile-image">
          <img src={profile} alt="Profile" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Grid container direction="column" sx={{ marginLeft: "-26px" }}>
            <h1 className="main-text" style={{ marginBottom: "100px" }}>
              Hello! I'm{" "}
              <span className="typewriter-name" style={{ color: "#842063" }}>
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
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default MainContent;
