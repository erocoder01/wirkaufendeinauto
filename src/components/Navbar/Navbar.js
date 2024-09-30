import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "@reactuses/core";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${1000}px)`);

  return (
    <div
      className="navbar-container"
      style={{ height: !isOpen ? "70px" : "350px" }}
    >
      {!isMobile ? (
        <div className="header">
          <Link exact to="/" className="logo">
            <span className="logo-auto">Auto</span>
            <span className="logo-sofort">Ankauf</span>
            <span className="logo-verkaufen">24</span>
          </Link>

          <div className={`navigation`}>
            <ul className="nav-links">
              <li>
                <NavLink
                  exact
                  to="/"
                  className="links"
                  activeClassName="active"
                >
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
                <NavLink
                  to="/partner"
                  className="links"
                  activeClassName="active"
                >
                  Für Partner
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="links" activeClassName="active">
                  Über uns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="links"
                  activeClassName="active"
                >
                  Kontaktiere uns
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="header">
          <div className="mobile-nav-header">
            <Link exact to="/" className="logo">
              <span className="logo-auto">Auto</span>
              <span className="logo-sofort">Ankauf</span>
              <span className="logo-verkaufen">24</span>
            </Link>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>

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
      )}
    </div>
  );
}

export default Navbar;
