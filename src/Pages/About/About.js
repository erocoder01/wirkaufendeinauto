import React from "react";
import "./About.css";
import securityImage from "../../assets/security.png";

const About = () => {
  return (
    <div>
      <div className="about">
        <section className="about-header">
          <h1>Wir sind AutoAnkauf24</h1>
          <h3>Ihrem vertrauenswürdigen Partner für den Autoankauf.</h3>
          <div className="about-content">
            <div className="about-text">
              <p>
                Unsere Mission ist es, den Autoverkaufsprozess so einfach und
                transparent wie möglich zu gestalten. Wir verstehen, dass der
                Verkauf eines Autos eine wichtige Entscheidung ist, und wir sind
                hier, um dich bei jedem Schritt zu unterstützen. Unser
                Engagement für exzellenten Kundenservice und faire Preise hat
                uns zu einer vertrauenswürdigen Anlaufstelle für Autoverkäufer
                gemacht.
              </p>
            </div>
          </div>
        </section>

        <section className="about-features">
          {[
            { image: securityImage, title: "Bequem", alt: "Bequem" },
            { image: securityImage, title: "Sicher", alt: "Sicher" },
            { image: securityImage, title: "Schnell", alt: "Schnell" },
          ].map((feature, idx) => (
            <div key={idx} className="about-feature">
              <img src={feature.image} alt={feature.alt} />
              <h4>{feature.title}</h4>
            </div>
          ))}
        </section>

        <section className="about-details">
          <h2>Warum Sie uns wählen sollten</h2>
          <p>
            <strong>Fachkompetenz:</strong> Unser Team vereint langjährige
            Erfahrung in der Automobilbranche mit umfassendem Marktverständnis.
            Wir sind Experten darin, den Wert von Fahrzeugen präzise zu
            ermitteln und Ihnen faire sowie marktgerechte Angebote zu
            unterbreiten.
          </p>
          <p>
            <strong>Kundenzufriedenheit:</strong> Ihre Zufriedenheit steht für
            uns an erster Stelle. Wir setzen alles daran, dass jeder Kunde den
            bestmöglichen Service erhält und mit einem Lächeln unser Unternehmen
            verlässt.
          </p>
          <p>
            <strong>Schnelligkeit und Effizienz:</strong> Wir wissen, wie
            kostbar Ihre Zeit ist. Mit unserem optimierten Verkaufsprozess
            können Sie Ihr Auto schnell und unkompliziert veräußern – ganz ohne
            langwierige Abläufe.
          </p>
          <p>
            <strong>Transparenz:</strong> Ehrlichkeit und Offenheit sind uns
            wichtig. Bei uns gibt es keine versteckten Kosten oder unangenehmen
            Überraschungen. Wir kommunizieren alle Schritte klar und
            nachvollziehbar.
          </p>
          <p>
            <strong>Lokale Verbundenheit:</strong> Als fest verwurzeltes
            Unternehmen in der Region sind wir stolz darauf, unseren Kunden vor
            Ort zur Seite zu stehen.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
