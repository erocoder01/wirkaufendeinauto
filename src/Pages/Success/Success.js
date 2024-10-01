import React from "react";
import "./Success.css"; // Make sure to style it appropriately
import Verkauf1 from "../../assets/howitworks/Verkauf1.png";
import Verkauf2 from "../../assets/howitworks/Verkauf2.jpg";
import Verkauf3 from "../../assets/howitworks/Verkauf3.png";
import Verkauf4 from "../../assets/howitworks/Verkauf4.jpg";

function Success() {
  return (
    <div className="thank-you-container">
      <div className="thank-you-message">
        <h1>Wir haben deine Auto-Details erfolgreich erhalten!</h1>
        <p>
          Wir ermitteln deinen endgültigen Verkaufspreis schnellstmöglich und
          senden ihn dir per E-Mail und SMS zu.
        </p>
        <div className="thank-you-check">
          <i className="fas fa-check-circle"></i>
        </div>
      </div>

      <div className="verkaufsprozess-container">
        <div className="section-divider"></div> {/* Oberer Divider */}
        <h2>Was wir jetzt machen?</h2>
        <div className="verkaufsprozess-schritte">
          <div className="verkaufsprozess-schritt">
            <img src={Verkauf1} alt="Auto schätzen" />
            <div className="verkaufsprozess-schritt-info">
              <h3>Bewertung</h3>
              <p>
                Wir verwenden Daten von Großhändlern, Einzelhändlern und
                1st-Party-Auktionen, um einen Schätzwert für Ihr Auto zu
                ermitteln. Anhand zusätzlicher Informationen über den Zustand
                und den Kilometerstand des Fahrzeugs verfeinern wir diesen Wert
                weiter, um sicherzustellen, dass Sie eine genaue Bewertung
                erhalten.
              </p>
            </div>
          </div>
          <div className="verkaufsprozess-schritt">
            <img src={Verkauf2} alt="Auto schätzen" />
            <div className="verkaufsprozess-schritt-info">
              <h3>Angebot & Termin</h3>
              <p>
                AutoAnkauf24 veranstaltet an drei Tagen pro Woche Auktionen, bei
                denen Hunderte von Käufern aus ganz BC und Alberta online um
                Fahrzeuge wie das Ihre konkurrieren. Sobald Sie Ihr Angebot
                erhalten haben, haben Sie 24 Stunden Zeit, um Ihre Entscheidung
                zu treffen.
              </p>
            </div>
          </div>
          <div className="verkaufsprozess-schritt">
            <img src={Verkauf3} alt="Auto schätzen" />
            <div className="verkaufsprozess-schritt-info">
              <h3>Vor Ort Inspektion</h3>
              <p>
                Um den Zustand des Fahrzeugs zu bestätigen, wird ein
                AutoAnkauf24-Mitarbeiter eine Inspektion Ihres Fahrzeugs
                durchführen, die eine kurze Probefahrt beinhaltet. Sobald diese
                abgeschlossen ist, wird das Angebot für Ihr Fahrzeug verbindlich
                sein.
              </p>
            </div>
          </div>
          <div className="verkaufsprozess-schritt">
            <img src={Verkauf4} alt="Auto schätzen" />

            <div className="verkaufsprozess-schritt-info">
              <h3>Zahlung & Papierkram</h3>
              <p>
                AutoAnkauf24 kommt an den Ort Ihrer Wahl, um alle ausstehenden
                Formalitäten zu erledigen, Ihr Fahrzeug abzuholen und Sie vor
                Ort zu bezahlen. Sie werden die Zahlung auf Ihrem Bankkonto
                sehen, noch bevor Ihr Auto Ihr Haus verlässt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="thank-you-contact-section">
        <div className="section-divider"></div> {/* Divider */}
        <div className="container">
          <h2>Hast du noch Fragen?</h2>
          <p>
            Wir sind für dich da. Zögere nicht, uns zu kontaktieren, wenn du
            Verkaufsberatung, Informationen zu Fahrzeugdetails, Fragen zum
            Prozess oder andere Anliegen hast.
          </p>

          <div className="thank-you-contact-options">
            <div className="thank-you-contact-option">
              <i className="fas fa-phone-alt thank-you-contact-icon"></i>
              <h3>Brauchst du sofortige Hilfe? Ruf uns einfach an.</h3>
              <p>
                Unser Kundensupport-Team steht dir von Mo. - Fr. 09:00 - 17:30
                Uhr | Sa. 09:00 - 13:00 Uhr bei allen Fragen oder Anliegen zur
                Verfügung.
              </p>
              <button className="thank-you-contact-btn">
                Ruf uns 0800 20 23 20
              </button>
            </div>
            <div className="thank-you-contact-option">
              <i className="fas fa-comments thank-you-contact-icon"></i>
              <h3>Chatte mit uns für Echtzeit-Support</h3>
              <p>
                Verbinde dich sofort mit uns über unsere Whatsapp, um schnelle
                Antworten auf deine Fragen zu bekommen. Verfügbar 24/7
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=436767556597&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="thank-you-contact-btn"
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

export default Success;
