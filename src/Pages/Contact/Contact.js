import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComments } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="about-page-background">
      <section className="contact-section">
        <div className="container-contact">
          <h2>Kontaktiere uns</h2>
          <p>
            Wir sind für dich da. Zögere nicht, uns zu kontaktieren, wenn du
            Verkaufsberatung, Informationen zu Fahrzeugdetails, Fragen zum
            Prozess oder andere Anliegen hast.
          </p>

          <div className="contact-options">
            <div className="contact-option">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <h3>Brauchst du sofortige Hilfe? Ruf uns einfach an.</h3>
              <p>
                Unser Kundensupport-Team steht dir von Mo. - Fr. 09:00 - 17:30
                Uhr | Sa. 09:00 - 13:00 Uhr bei allen Fragen oder Anliegen zur
                Verfügung.
              </p>
              <button className="contact-btn">Ruf uns 0800 20 23 20</button>
            </div>
            <div className="contact-option">
              <FontAwesomeIcon icon={faComments} className="contact-icon" />

              <h3>
                Chatte mit uns für Echtzeit-
                <br />
                Support
              </h3>
              <p>
                Verbinde dich sofort mit uns über unsere Whatsapp, um schnelle
                Antworten auf deine Fragen zu bekommen. Verfügbar 24/7
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=436767556597&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
              >
                Chat starten
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
