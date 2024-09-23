import React, { useEffect, useState } from "react";
import "./HowItWorks.css"; // Import your custom styles

function HowItWorks() {
  const [dynamicText, setDynamicText] = useState("schnell");
  const [faqItems, setFaqItems] = useState([]);
  const texts = ["schnell", "bequem", "einfach"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Dynamic text change logic
    const interval = setInterval(() => {
      setDynamicText(texts[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    // FAQ toggling logic
    const faqElements = document.querySelectorAll(".faq-item");
    setFaqItems(faqElements);

    faqElements.forEach((item) => {
      const questionButton = item.querySelector(".faq-question");
      questionButton.addEventListener("click", () => {
        faqElements.forEach((i) => i !== item && i.classList.remove("active"));
        item.classList.toggle("active");
      });
    });
  }, []);

  return (
    <div>
      <div className="howitworks-container">
        <h2>Wie Sie Ihr Auto verkaufen</h2>
        <p className="substrich">
          Erhalten Sie den besten Preis für Ihr Auto in 4 einfachen Schritten
        </p>
        <div className="howitworks-steps">
          {/* How It Works Steps */}
          {["Schritt 1", "Schritt 2", "Schritt 3", "Schritt 4"].map(
            (step, idx) => (
              <div key={idx} className="howitworks-step">
                <img
                  src={`images/howitworks/howto${idx + 1}.webp`}
                  alt={`Step ${idx + 1}`}
                />
                <div className="howitworks-step-info">
                  <h3>
                    <span className="howitworks-step-number">{step}</span>{" "}
                    Schätzen Sie Ihr Auto
                  </h3>
                  <p>
                    Beantworten Sie ein paar Fragen und erhalten Sie eine
                    Schätzung
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <section className="how-it-works-section">
        <div className="section-divider"></div>
        <div className="how-it-works-container">
          <h2>Was macht AutoAnkauf24 anders?</h2>
          <div className="how-it-works-benefits-box">
            {[
              {
                icon: "Icon1.svg",
                title: "Garantiertes Angebot",
                text: "Unsere Angebote ändern sich nicht, ...",
              },
              {
                icon: "Icon2.svg",
                title: "Bequemer Verkauf",
                text: "Verkaufen Sie Ihr Auto von Ihrer Couch aus, ...",
              },
              {
                icon: "Icon3.svg",
                title: "Fachkundige Unterstützung",
                text: "Unser Team unterstützt Sie während des gesamten Prozesses, ...",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="how-it-works-benefit">
                <div className="how-it-works-icon-title">
                  <img
                    src={`images/howitworks/${benefit.icon}`}
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
          {["Verkauf1.png", "Verkauf2.jpg", "Verkauf3.png", "Verkauf4.jpg"].map(
            (image, idx) => (
              <div key={idx} className="verkaufsprozess-schritt">
                <img
                  src={`images/howitworks/${image}`}
                  alt={`Verkauf ${idx + 1}`}
                />
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
                        "Wir verwenden Daten von...",
                        "AutoAnkauf24 veranstaltet...",
                        "Um den Zustand des...",
                        "AutoAnkauf24 kommt an den...",
                      ][idx]
                    }
                  </p>
                </div>
              </div>
            )
          )}
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
                  "Mit einem Klick...",
                  "Einzelne Händler...",
                  "Auf Plattformen selbst...",
                ],
                [
                  "Verkaufsgeschwindigkeit",
                  "Schnell und unkompliziert",
                  "Mittel",
                  "Langsam – Wochen bis Monate",
                ],
                [
                  "Preis",
                  "Bestpreis durch Händler...",
                  "Individuell verhandelbar",
                  "Ungewiss",
                ],
                [
                  "Aufwand",
                  "Minimal",
                  "Mittlerer Aufwand",
                  "Hoch – viele Treffen",
                ],
                [
                  "Formalitäten",
                  "Wir übernehmen alles",
                  "Teilweise",
                  "Selbst managen",
                ],
                [
                  "Sicherheit",
                  "Garantierte Zahlung",
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
            <a href="#" className="comparison-btn">
              Jetzt Fahrzeug bewerten
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
