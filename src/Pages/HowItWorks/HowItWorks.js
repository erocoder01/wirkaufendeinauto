import React, { useState } from "react"; // useState hinzufügen
import "./HowItWorks.css"; // Import your custom styles
import { HashLink } from "react-router-hash-link";
import howto1 from "../../assets/howitworks/howto1.webp";
import howto2 from "../../assets/howitworks/howto2.webp";
import howto3 from "../../assets/howitworks/howto3.webp";
import howto4 from "../../assets/howitworks/howto4.webp";

import icon1 from "../../assets/howitworks/Icon1.svg";
import icon2 from "../../assets/howitworks/Icon2.svg";
import icon3 from "../../assets/howitworks/Icon3.svg";

import verkauf1 from "../../assets/howitworks/Verkauf1.png";
import verkauf2 from "../../assets/howitworks/Verkauf2.jpg";
import verkauf3 from "../../assets/howitworks/Verkauf3.png";
import verkauf4 from "../../assets/howitworks/Verkauf4.jpg";

import tabelle from "../../assets/howitworks/Vergleichstabelle.png";

import { useMediaQuery } from "@reactuses/core";

const HowItWorks = () => {
  const isMobile = useMediaQuery(`(max-width: ${1000}px)`);
  const [isZoomed, setIsZoomed] = useState(false); // Zustand für Zoom

  // Funktion zum Öffnen des Overlays
  const openZoom = () => {
    setIsZoomed(true);
  };

  // Funktion zum Schließen des Overlays
  const closeZoom = () => {
    setIsZoomed(false);
  };

  const scrollWithOffset = (el) => {
    const yOffset = -70; // Hier die Höhe deiner Navbar anpassen
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div>
      <div className="howitworks-container">
        <h2>So verkaufst du dein Auto</h2>
        <p className="substrich">
          Erhalte den besten Preis für dein Auto in 4 einfachen Schritten
        </p>

        <div className="howitworks-steps">
          <img
            src={howto2}
            alt="Main for Mobile"
            className="main-image-mobile"
          />
          {[
            {
              image: howto1,
              title: "Trage dein Auto ein",
              description:
                "Beantworte ein paar Fragen und erhalte eine Schätzung",
            },
            {
              image: howto2,
              title: "Erhalte dein Angebot",
              description: "Erhalte ein Angebot von unserem Händlernetzwerk",
            },
            {
              image: howto3,
              title: "Verkaufe dein Auto",
              description: "Akzeptiere das Angebot",
            },
            {
              image: howto4,
              title: "Bezahlung erhalten",
              description: "Erhalte dein Geld und wir kümmern uns um den Rest",
            },
          ].map((step, idx) => (
            <div key={idx} className="howitworks-step">
              <img
                src={step.image}
                alt={`Step ${idx + 1}`}
                className="step-image"
              />
              <div className="howitworks-step-info">
                <h3>
                  <span className="howitworks-step-number">{`Schritt ${
                    idx + 1
                  }`}</span>{" "}
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="section-divider"></div>
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2>Was macht Autoeinfachlos anders?</h2>
          <div className="how-it-works-benefits-box">
            {[
              {
                icon: icon1,
                title: "Garantiertes Angebot",
                text: "Unsere Angebote ändern sich nicht, sobald wir deine Fahrzeugdaten haben – im Gegensatz zu privaten Käufern und Händlern.",
              },
              {
                icon: icon2,
                title: "Bequemer Verkauf",
                text: "Verkaufe dein Auto bequem von deiner Couch aus, meistens innerhalb eines Tages. Wir kümmern uns um alles, sodass du nie direkt mit Käufern in Kontakt kommen musst.",
              },
              {
                icon: icon3,
                title: "Fachkundige Unterstützung",
                text: "Unser Team unterstützt dich während des gesamten Prozesses, sodass du dir keine Sorgen machen musst, viel über Autos zu wissen.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="how-it-works-benefit">
                <div className="how-it-works-icon-title">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="how-it-works-icon"
                  />
                  <h3>{benefit.title}</h3>
                </div>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="section-divider"></div>
      <div className="verkaufsprozess-container">
        <h2>Der Autoeinfachlos-Prozess</h2>
        <div className="verkaufsprozess-schritte">
          {/* Verkaufsprozess Steps */}
          {[verkauf1, verkauf2, verkauf3, verkauf4].map((image, idx) => (
            <div key={idx} className="verkaufsprozess-schritt">
              <img src={image} alt={`Verkauf ${idx + 1}`} />
              <div className="verkaufsprozess-schritt-info">
                <h3>
                  {
                    [
                      "Auto online bewerten",
                      "Auktion",
                      "Inspektion",
                      "Zahlung & Papierkram",
                    ][idx]
                  }
                </h3>
                <p>
                  {
                    [
                      "Beginne mit einer Online-Bewertung über unser Bewertungs-Tool und erhalte eine erste Schätzung für dein Auto. Danach kannst du die Online-Begutachtung durchführen und uns zusätzliche Informationen zu deinem Fahrzeug übermitteln.",
                      "Autoeinfachlos veranstaltet eine Auktion, bei der Hunderte registrierte Händler aus ganz Europa online um Fahrzeuge wie deins konkurrieren. Sobald du dein Angebot erhalten hast, vereinbarst du einen Termin für die Inspektion, um die von dir eingegebenen Daten zu überprüfen.",
                      "Um den Zustand des Fahrzeugs zu bestätigen, führt ein Autoeinfachlos-Mitarbeiter eine Inspektion deines Fahrzeugs durch, die auch eine kurze Probefahrt beinhaltet. Sobald diese abgeschlossen ist, wird das Angebot für dein Fahrzeug verbindlich sein.",
                      "Autoeinfachlos kommt an den Ort deiner Wahl, um alle ausstehenden Formalitäten zu erledigen, dein Fahrzeug abzuholen und dich direkt vor Ort zu bezahlen. Du wirst die Zahlung auf deinem Bankkonto sehen, noch bevor dein Auto dein Haus verlässt.",
                    ][idx]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="section-divider"></div>
      <section id="vergleichstabelle" className="comparison-section">
        <div className="comparison-container">
          <h2 className="comparison-title">
            Autoeinfachlos im Vergleich zu anderen Verkaufsoptionen
          </h2>
          {/* Bild der Vergleichstabelle für mobile Geräte */}
          <img
            src={tabelle}
            alt="Vergleichstabelle"
            className="comparison-image-mobile"
            onClick={openZoom} // Klick zum Zoomen
            style={{ cursor: "zoom-in" }}
          />

          {/* Overlay für das vergrößerte Bild */}
          {isZoomed && (
            <div className="overlay" onClick={closeZoom}>
              <span className="close">&times;</span>
              <img
                src={tabelle}
                alt="Zoomed Vergleichstabelle"
                className="overlay-content"
              />
            </div>
          )}
          <table className="comparison-table">
            {!isMobile ? (
              <thead>
                <tr>
                  <th></th>
                  <th>Autoeinfachlos</th>
                  <th>Händler</th>
                  <th>Privatverkauf</th>
                </tr>
              </thead>
            ) : (
              <thead>
                <tr>
                  <th>Autoeinfachlos</th>
                  <th>Händler</th>
                  <th>Privatverkauf</th>
                </tr>
              </thead>
            )}

            {!isMobile ? (
              <tbody>
                {[
                  [
                    "Reichweite",
                    "Mit einem Klick 100+ Händler erreichen",
                    "Einzelne Händler anfragen",
                    "Auf Plattformen selbst Käufer suchen",
                  ],
                  [
                    "Verkaufsgeschwindigkeit",
                    "Schnell und unkompliziert",
                    "Mittel – hängt von den Verhandlungen ab",
                    "Langsam – Wochen bis Monate",
                  ],
                  [
                    "Preis",
                    "Bestpreis durch Händlervergleich",
                    "Individuell verhandelbar",
                    "Der Preis varriert, aber ungewiss",
                  ],
                  [
                    "Aufwand",
                    "Minimal – wir kümmern uns um alles",
                    "Mittlerer Aufwand – einige Verhandlungen nötig",
                    "Hoch – viele Treffen, Verhandlungen",
                  ],
                  [
                    "Formalitäten",
                    "Wir übernehmen alle Formalitäten",
                    "Händler übernimmt teilweise Formalitäten",
                    "Selbst alle Dokumente managen",
                  ],
                  [
                    "Sicherheit",
                    "Garantierte sichere Zahlung",
                    "Hängt vom Händler ab",
                    "Risiko bei der Bezahlung",
                  ],
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td dangerouslySetInnerHTML={{ __html: row[0] }}></td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {[
                  [
                    "Mit einem Klick 100+ Händler erreichen",
                    "Einzelne Händler anfragen",
                    "Auf Plattformen selbst Käufer suchen",
                  ],
                  [
                    "Schnell und unkompliziert",
                    "Mittel – hängt von den Verhandlungen ab",
                    "Langsam – Wochen bis Monate",
                  ],
                  [
                    "Bestpreis durch Händlervergleich",
                    "Individuell verhandelbar",
                    "Der Preis varriert, aber ungewiss",
                  ],
                  [
                    "Minimal – wir kümmern uns um alles",
                    "Mittlerer Aufwand – einige Verhandlungen nötig",
                    "Hoch – viele Treffen, Verhandlungen",
                  ],
                  [
                    "Wir übernehmen alle Formalitäten",
                    "Händler übernimmt teilweise Formalitäten",
                    "Selbst alle Dokumente managen",
                  ],
                  [
                    "Garantierte sichere Zahlung",
                    "Hängt vom Händler ab",
                    "Risiko bei der Bezahlung",
                  ],
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td dangerouslySetInnerHTML={{ __html: row[0] }}></td>{" "}
                    {/* Use dangerouslySetInnerHTML for HTML injection */}
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          <div className="comparison-cta">
            <HashLink smooth to="/#" scroll={scrollWithOffset}>
              <span className="comparison-btn">Jetzt Fahrzeug bewerten</span>
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
