import React from "react";
import "./HowItWorks.css"; // Import your custom styles
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

const HowItWorks = () => {
  return (
    <div>
      <div className="howitworks-container">
        <h2>Wie Sie Ihr Auto verkaufen</h2>
        <p className="substrich">
          Erhalten Sie den besten Preis für Ihr Auto in 4 einfachen Schritten
        </p>
        <div className="howitworks-steps">
          {/* Schritte und ihre individuellen Daten */}
          {[
            {
              image: howto1,
              title: "Schätzen Sie Ihr Auto",
              description:
                "Beantworten Sie ein paar Fragen und erhalten Sie eine Schätzung",
            },
            {
              image: howto2,
              title: "Erhalten Sie Ihr Angebot",
              description:
                "Erhalten Sie ein Angebot von unserem Netzwerk von Händlern",
            },
            {
              image: howto3,
              title: "Verkaufen Sie Ihr Auto",
              description: "Akzeptieren Sie das Angebot",
            },
            {
              image: howto4,
              title: "Bezahlung erhalten",
              description:
                "Erhalten Sie Ihr Geld und wir kümmern uns um den Rest",
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

      <section className="how-it-works-section">
        <div className="section-divider"></div>
        <div className="how-it-works-container">
          <h2>Was macht AutoAnkauf24 anders?</h2>
          <div className="how-it-works-benefits-box">
            {[
              {
                icon: icon1,
                title: "Garantiertes Angebot",
                text: "Unsere Angebote ändern sich nicht, sobald wir Ihre Fahrzeugdaten haben, im Gegensatz zu privaten Käufern und Händlern.",
              },
              {
                icon: icon2,
                title: "Bequemer Verkauf",
                text: "Verkaufen Sie Ihr Auto von Ihrer Couch aus, in der Regel innerhalb eines Tages. Wir kümmern uns um alles, sodass Sie nie direkt mit Käufern zu tun haben.",
              },
              {
                icon: icon3,
                title: "Fachkundige Unterstützung",
                text: "Unser Team unterstützt Sie während des gesamten Prozesses, so dass Sie sich keine Sorgen machen müssen, viel über Autos zu wissen.",
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

      <div className="verkaufsprozess-container">
        <div className="section-divider"></div>
        <h2>Der AutoAnkauf24-Prozess</h2>
        <div className="verkaufsprozess-schritte">
          {/* Verkaufsprozess Steps */}
          {[verkauf1, verkauf2, verkauf3, verkauf4].map((image, idx) => (
            <div key={idx} className="verkaufsprozess-schritt">
              <img src={image} alt={`Verkauf ${idx + 1}`} />
              <div className="verkaufsprozess-schritt-info">
                <h3>
                  {
                    [
                      "Bewertung",
                      "Auktion",
                      "Inspektion",
                      "Zahlung & Papierkram",
                    ][idx]
                  }
                </h3>
                <p>
                  {
                    [
                      "Wir verwenden Daten von Großhändlern, Einzelhändlern und 1st-Party-Auktionen, um einen Schätzwert für Ihr Auto zu ermitteln. Anhand zusätzlicher Informationen über den Zustand und den Kilometerstand des Fahrzeugs verfeinern wir diesen Wert weiter, um sicherzustellen, dass Sie eine genaue Bewertung erhalten.",
                      "AutoAnkauf24 veranstaltet an drei Tagen pro Woche Auktionen, bei denen Hunderte von Käufern aus ganz BC und Alberta online um Fahrzeuge wie das Ihre konkurrieren. Sobald Sie Ihr Angebot erhalten haben, haben Sie 24 Stunden Zeit, um Ihre Entscheidung zu treffen.",
                      "Um den Zustand des Fahrzeugs zu bestätigen, wird ein AutoAnkauf24-Mitarbeiter eine Inspektion Ihres Fahrzeugs durchführen, die eine kurze Probefahrt beinhaltet. Sobald diese abgeschlossen ist, wird das Angebot für Ihr Fahrzeug verbindlich sein.",
                      "AutoAnkauf24 kommt an den Ort Ihrer Wahl, um alle ausstehenden Formalitäten zu erledigen, Ihr Fahrzeug abzuholen und Sie vor Ort zu bezahlen. Sie werden die Zahlung auf Ihrem Bankkonto sehen, noch bevor Ihr Auto Ihr Haus verlässt.",
                    ][idx]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="comparison-section">
        <div className="section-divider"></div>
        <div className="comparison-container">
          <h2 className="comparison-title">
            AutoAnkauf24 im Vergleich zu anderen Verkaufsoptionen
          </h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>AutoAnkauf24</th>
                <th>Händler</th>
                <th>Privatverkauf</th>
              </tr>
            </thead>
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
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="comparison-cta">
            <span className="comparison-btn">Jetzt Fahrzeug bewerten</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
