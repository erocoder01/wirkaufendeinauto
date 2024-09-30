import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="header">
        <Link exact to="/" className="logo">
          <span className="logo-auto">Auto</span>
          <span className="logo-sofort">Ankauf</span>
          <span className="logo-verkaufen">24</span>
        </Link>

        <div
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </div>

        <div className={`navigation ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink exact to="/" className="links" activeClassName="active">
                Auto verkaufen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/HowItWorks"
                className="links"
                activeClassName="active"
              >
                So funktioniert’s
              </NavLink>
            </li>
            <li>
              <NavLink to="/partner" className="links" activeClassName="active">
                Für Partner
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="links" activeClassName="active">
                Über uns
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="links" activeClassName="active">
                Kontaktiere uns
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
