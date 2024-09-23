import React from "react";
import "./Navbar.css";
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
              <a href="index.html" className="links">
                Auto verkaufen
              </a>
            </li>
            <li>
              <a href="howitworks.html" className="links">
                So funktioniert’s
              </a>
            </li>
            <li>
              <a href="partner.html" className="links">
                Für Partner
              </a>
            </li>
            <li>
              <a href="about.html" className="links">
                Über uns
              </a>
            </li>
            <li>
              <a href="contact.html" class="active links">
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
