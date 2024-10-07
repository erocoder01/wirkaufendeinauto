import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/AutoEinfachLos_Negative.webp";

const scrollWithOffset = (el) => {
  const yOffset = -70; // Hier die Höhe deiner Navbar anpassen
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

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
              <HashLink smooth to="/#sofunktionierts" scroll={scrollWithOffset}>
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
              <HashLink smooth to="/#" scroll={scrollWithOffset}>
                Verkaufe dein Auto
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#" scroll={scrollWithOffset}>
                Auto Bewertung
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/howitworks" scroll={scrollWithOffset}>
                Detalierter Ablauf
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/howitworks#vergleichstabelle"
                scroll={scrollWithOffset}
              >
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
              <HashLink
                smooth
                to="/partner#inspection"
                scroll={scrollWithOffset}
              >
                Inspektionen
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/partner#vorteile" scroll={scrollWithOffset}>
                Vorteile
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/partner#feedback" scroll={scrollWithOffset}>
                Bewertungen & Erfahrung
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hilfe & Service</h4>
          <ul>
            <li>
              <HashLink smooth to="/#häufigefragen" scroll={scrollWithOffset}>
                Häufig gestellte Fragen
              </HashLink>
            </li>
            <li>
              <Link to="/contact">Kontaktiere uns</Link>
            </li>
            <li>
              <span>
                <span>
                  Telefon: <a href="tel:0800202320">0800 20 23 20</a>
                </span>
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
            <Link to="#">AGB</Link>
          </span>
          <span>
            <Link to="#">Datenschutz</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
