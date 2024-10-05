import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/AutoEinfachLos_Negative.webp";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>
            Das ist{" "}
            <img
              src={logo}
              alt="Autoeinfachlos Logo"
              className="footer-logo-right"
            />
          </h4>
          <ul>
            <li>
              <HashLink smooth to="/#sofunktionierts">
                So funktioniert´s
              </HashLink>
            </li>
            <li>
              <Link to="/about">Über uns</Link>
            </li>
            <li>
              <span className="highlighted">
                Karriere <span className="badge">Wir stellen ein!</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Verkauf</h4>
          <ul>
            <li>
              <HashLink smooth to="/#">
                Verkaufe dein Auto
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#">
                Auto Bewertung
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/howitworks">
                Detalierter Ablauf
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/howitworks#vergleichstabelle">
                Vergleichstabelle
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Partner</h4>
          <ul>
            <li>
              <Link to="/partner">Werde ein Partner</Link>
            </li>
            <li>
              <HashLink smooth to="/partner#inspection">
                Inspektionen
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/partner#vorteile">
                Vorteile
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/partner#feedback">
                Bewertungen & Erfahrung
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hilfe & Service</h4>
          <ul>
            <li>
              <HashLink smooth to="/#häufigefragen">
                Häufig gestellte Fragen
              </HashLink>
            </li>
            <li>
              <Link to="/contact">Kontaktiere uns</Link>
            </li>
            <li>
              <span>
                <span>Telefon: 0800 20 23 20</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <p>© 2024 Autoeinfachlos · Alle Rechte vorbehalten</p>
        </div>
        <div className="footer-links">
          <span>
            <Link to="/impressum">Impressum</Link>
          </span>
          <span>
            <p>AGB</p>
          </span>
          <span>
            <p>Datenschutz</p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
