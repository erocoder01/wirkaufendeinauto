import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>Das ist AutoAnkauf24</h4>
          <ul>
            <li>
              <a href="howitworks.html" className="footer-link">
                So funktioniert's
              </a>
            </li>
            <li>
              <a href="about.html" className="footer-link">
                Über uns
              </a>
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
              <span className="footer-link">Verkaufe dein Auto</span>
            </li>
            <li>
              <span className="footer-link">Auto Bewertung</span>
            </li>
            <li>
              <a href="#Sofunktioniert" className="footer-link">
                Ablauf
              </a>
            </li>
            <li>
              <span className="footer-link">Alle Automarken & Modelle</span>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Partner</h4>
          <ul>
            <li>
              <span className="footer-link">Werde ein Partner</span>
            </li>
            <li>
              <span className="footer-link">Inspektionen</span>
            </li>
            <li>
              <span className="footer-link">Vorteile</span>
            </li>
            <li>
              <span className="footer-link">Bewertungen & Erfahrungen</span>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hilfe & Service</h4>
          <ul>
            <li>
              <span className="footer-link">Häufig gestellte Fragen</span>
            </li>
            <li>
              <span className="footer-link">Kontaktiere uns</span>
            </li>
            <li>
              <span className="footer-link">Telefon: 0800 20 23 20</span>
            </li>
            <li>
              <span className="footer-link">Bewertungen & Erfahrungen</span>
            </li>
            <li>
              <span className="footer-link">Presse</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <p>© 2024 AutoAnkauf24 · Alle Rechte vorbehalten</p>
        </div>
        <div className="footer-links">
          <span className="footer-link">Impressum</span>
          <span className="footer-link">AGB</span>
          <span className="footer-link">Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
