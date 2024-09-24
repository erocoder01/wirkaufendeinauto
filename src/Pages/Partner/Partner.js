import React, { useEffect, useState } from "react";
import "./Partner.css";

import icon1 from "../../assets/partners/Icon1.svg";
import icon2 from "../../assets/partners/Icon2.svg";
import icon3 from "../../assets/partners/Icon3.svg";
import icon4 from "../../assets/partners/Icon4.svg";
import inspection1 from "../../assets/partners/Inspection1.svg";
import inspection2 from "../../assets/partners/Inspection2.svg";
import inspection3 from "../../assets/partners/Inspection3.svg";
import inspection4 from "../../assets/partners/Inspection4.svg";
import inspection5 from "../../assets/partners/Inspection5.svg";
import inspection6 from "../../assets/partners/Inspection6.svg";

const Partner = () => {
  return (
    <div>
      {/* Partner Sektion */}
      <section className="partner-section">
        <div className="partner-content">
          <div className="partner-text">
            <h2>Der AutoAnkauf24 Partnerbereich</h2>
            <h4>Für registrierte Autohändler</h4>
            <p>
              Kaufen Sie private, gebrauchte Fahrzeuge über unsere
              Online-Auktion und unseren Marktplatz. Entdecken Sie ein
              zuverlässiges Netzwerk für den Fahrzeugkauf, das Ihren
              Fahrzeugkauf vereinfacht und eine nahtlose und stressfreie
              Erfahrung bietet.
            </p>
          </div>

          <div className="partner-form">
            <h3>Werde ein Partner</h3>
            <form action="#" method="post" id="partnerForm">
              <label htmlFor="company">Firma</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Firma"
                required
              />

              <label htmlFor="fullname">Vollständiger Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Vollständiger Name"
                required
              />

              <label htmlFor="email">E-Mail-Adresse</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-Mail-Adresse"
                required
              />

              <label htmlFor="phone">Mobiltelefonnummer</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Mobiltelefonnummer"
                required
              />

              <button type="submit" className="submit-button">
                Registriere dich als Partner
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Partner Vorteile */}
      <section className="partner-benefits">
        <div className="section-divider"></div>
        <div className="container">
          <h2>Wir betreuen professionelle Autokäufer</h2>
          <p>Die Vorteile, die unsere Partner erwarten können</p>
          <div className="benefit-grid">
            {[
              {
                icon: icon1,
                text: "Erhalten Sie Zugang zu AutoAnkauf24 kuratiertem Bestand an Fahrzeugen",
              },
              {
                icon: icon2,
                text: "Kaufen Sie professionell geprüfte Fahrzeuge mit absoluter Transparenz über den Fahrzeugzustand",
              },
              {
                icon: icon3,
                text: "AutoAnkauf24 kümmert sich um die Beschaffung und Suche von Fahrzeugen",
              },
              {
                icon: icon4,
                text: "Sparen Sie Zeit, denn wir kümmern uns um den Papierkram, die Zahlung und die Lieferung.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <img src={benefit.icon} alt={`Vorteil ${idx + 1}`} />
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspektions Sektion */}
      <section className="inspection-section">
        <div className="section-divider"></div>
        <div className="container">
          <h2>Wir führen über 150 Punkte Inspektionen durch</h2>
          <p>
            Wir bieten detaillierte Inspektionsberichte, CarFax und
            OBD2-Berichte für jedes Auto, um Ihnen den Kauf <br /> einfacher,
            schneller und intelligenter zu machen.
          </p>
          <div className="inspection-grid">
            {[
              { icon: inspection1, text: "Reifenprofilmessungen" },
              { icon: inspection2, text: "Bremsbelagmessungen" },
              { icon: inspection3, text: "Fotos und Schadensberichte" },
              { icon: inspection4, text: "Testfahrten" },
              { icon: inspection5, text: "OBD2-Scan" },
              { icon: inspection6, text: "und mehr!" },
            ].map((inspection, idx) => (
              <div key={idx} className="inspection-item">
                <img src={inspection.icon} alt={inspection.text} />
                <p>{inspection.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Sektion */}
      <section className="testimonials">
        <div className="section-divider"></div>
        <div className="container">
          <h2>Das sagen unsere Partner über AutoAnkauf24</h2>
          <div className="testimonial-grid">
            {[
              {
                quote:
                  "AutoAnkauf24 war eine großartige Quelle für zusätzlichen Lagerbestand für uns. Wir erhalten 10-15 Stück Inventar pro Woche, die wir sonst nicht bekommen hätten.",
                name: "Vertrauenswürdiger Käufer",
                location: "Wien, Österreich",
              },
              {
                quote:
                  "Wir arbeiten sehr gerne mit AutoAnkauf24 zusammen, und unser Vertreter hilft uns, während der Auktionen die besten Preise zu erzielen.",
                name: "Vertrauenswürdiger Käufer",
                location: "Salzburg, Österreich",
              },
              {
                quote:
                  "Was ich an AutoAnkauf24 am meisten schätze, ist, dass es meinem Team Zeit spart, indem es sich um den Kundenkontakt und den Verkaufsprozess kümmert.",
                name: "Vertrauenswürdiger Käufer",
                location: "Graz, Österreich",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial-item">
                <div className="quote-icon">❝</div>
                <p>{testimonial.quote}</p>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
