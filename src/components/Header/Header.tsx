import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

type HeaderProps = {
  title?: string;
};

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  // { label: "Contact", path: "/contact" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "My Resume", path: "/resume" },
];

const MenuIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden
    focusable="false"
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden
    focusable="false"
  >
    <path
      d="M6 6l12 12M6 18L18 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ title = "GM" }) => {
  const [hovered, setHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // close on Escape and trap focus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
      if (!drawerOpen) return;
      // simple focus trap: keep focus inside drawer
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  // focus first link when opening drawer
  useEffect(() => {
    if (drawerOpen) {
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 50);
    }
  }, [drawerOpen]);

  // close drawer if clicked outside (on backdrop)
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setDrawerOpen(false);
  };

  const handleNavigate = (path: string) => {
    setDrawerOpen(false);
    navigate(path);
  };

  const handleLogoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") navigate("/");
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div
          className="header-logo"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h1
            className={`logo-text ${hovered ? "expanded" : ""}`}
            onClick={() => navigate("/")}
            role="button"
            tabIndex={0}
            onKeyDown={handleLogoKeyDown}
            aria-label="Go to homepage"
          >
            {hovered ? "GOPINATH M" : title}
          </h1>
        </div>

        {/* Desktop nav */}
        <nav className="nav desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-haspopup="true"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Drawer & backdrop */}
      {drawerOpen && (
        <div
          className="drawer-backdrop"
          onClick={onBackdropClick}
          role="presentation"
        >
          <aside
            className="drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <div className="drawer-header">
              <div className="drawer-title">Menu</div>
              <button
                className="drawer-close"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="drawer-nav" aria-label="Mobile primary navigation">
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.path);
                  }}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  className="drawer-link"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
