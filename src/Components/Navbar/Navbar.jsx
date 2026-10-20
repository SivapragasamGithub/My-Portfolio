import React, { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Toolkit", href: "#services" },
  { label: "Experience", href: "#experience" },
];

const Navbar = ({ theme, onThemeToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const closeMenu = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        onClick={() => closeMenu("#home")}
        aria-label="Sivapragasam home"
      >
        <span className="brand-mark">SA</span>
        <span className="brand-name">
          Sivapragasam<span className="brand-dot">.</span>
        </span>
      </a>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
      </button>
      <nav
        className={`main-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeLink === link.href ? "is-active" : ""}
            onClick={() => closeMenu(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label={
            theme === "light" ? "Switch to dark theme" : "Switch to light theme"
          }
          title="Switch theme"
          onClick={onThemeToggle}
        >
          <span aria-hidden="true">{theme === "light" ? "◐" : "☼"}</span>
        </button>
        <a className="header-cta" href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
