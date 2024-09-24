import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div class="navbar-container">
      <div className="header">
        <div className="logo">
          <span className="logo-auto">Auto</span>
          <span className="logo-sofort">Ankauf</span>
          <span className="logo-verkaufen">24</span>
        </div>
        <div className="navigation">
          <ul class="nav-links">
            <li>
              <Link to="/" className="links">
                Auto verkaufen
              </Link>
            </li>
            <li>
              <Link to="/HowItWorks" className="links">
                So funktioniert’s
              </Link>
            </li>
            <li>
              <Link to="/partner" className="links">
                Für Partner
              </Link>
            </li>
            <li>
              <a href="about.html" className="active links">
                Über uns
              </a>
            </li>
            <li>
              <a href="contact.html" class="links">
                Kontaktiere uns
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
