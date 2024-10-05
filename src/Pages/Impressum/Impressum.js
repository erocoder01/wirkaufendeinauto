import React from "react";
import "./Impressum.css"; // Das CSS von oben

function Impressum() {
  return (
    <div className="impressum-container">
      <h1>Impressum</h1>
      <p>
        <strong>Autoeinfachlos GmbH</strong>
      </p>
      <p>
        Platzhalter 55
        <br />
        6020 Innsbruck, Österreich
      </p>

      <p>
        <strong>Geschäftsführer:</strong>
        <br />
        Max Mustermann
      </p>

      <div className="contact-info">
        <p>
          <strong>Kontakt:</strong>
        </p>
        <p>
          Tel.: <a href="tel:+43676555555">+43 676 30303030</a>
        </p>
        <p>
          E-Mail:{" "}
          <a href="mailto:hilfe@autoeinfachlos.at">hilfe@autoeinfachlos.at</a>
        </p>
      </div>

      <p>
        <strong>UID-Nummer:</strong> ATU 0000000
      </p>

      <p>
        <strong>Firmenbuchnummer:</strong> FN 000000 f<br />
        Handelsgericht: Landesgericht Innsbruck
      </p>

      <p>
        <strong>Aufsichtsbehörde/Gewerbebehörde:</strong>
        <br />
        Magistrat der Stadt Innsbruck (gemäß ECG)
      </p>
    </div>
  );
}

export default Impressum;
