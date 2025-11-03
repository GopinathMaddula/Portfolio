import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import "./Header.css";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title = "GM" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="header">
      <Grid
        container
        className="header-grid"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Title section */}
        <Grid
          size={{ xs: 12, sm: 3 }}
          className="header-logo"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className={`logo-text ${hovered ? "expanded" : ""}`}>
            {hovered ? "GOPINATH M" : title}
          </span>
        </Grid>

        {/* Navigation section */}
        <Grid size={{ xs: 12, sm: 9 }}>
          <Grid
            container
            gap={4}
            justifyContent="flex-end"
            className="header-nav"
          >
            {["Home", "About", "Contact", "Case Studies", "My Resume"].map(
              (item) => (
                <Grid key={item} className="nav-item">
                  {item}
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
