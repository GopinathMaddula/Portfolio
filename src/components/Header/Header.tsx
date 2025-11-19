import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title = "GM" }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    // { label: "Contact", path: "/contact" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "My Resume", path: "/resume" },
  ];

  return (
    <header className="header">
      <Grid
        container
        className="header-grid"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Title */}
        <Grid size={{ xs: 12, sm: 3 }} className="header-logo">
          <h1
            className={`logo-text ${hovered ? "expanded" : ""}`}
            style={{ fontSize: "32px" }}
            onClick={() => navigate("/")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? "GOPINATH M" : title}
          </h1>
        </Grid>

        {/* Navigation */}
        <Grid size={{ xs: 12, sm: 9 }}>
          <Grid
            container
            gap={4}
            justifyContent="flex-end"
            className="header-nav"
          >
            {navItems.map((item) => (
              <Grid key={item.label} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {item.label}
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
