import React, { useState } from "react";
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
import { apiUrl } from "../../config/apiUrl"; // Assuming you have an apiUrl function to get the API base URL

const Partner = () => {
  // Define states for form fields
  const [company, setCompany] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const api = apiUrl();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const partnerData = {
      company,
      name: fullname,
      email,
      phone,
    };

    try {
      const response = await fetch(`${api}/partner/uploadPartner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partnerData),
      });

      if (response.ok) {
        alert("Partner information submitted successfully!");
        // Reset form fields after successful submission
        setCompany("");
        setFullname("");
        setEmail("");
        setPhone("");
      } else {
        alert("Error submitting partner information");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error submitting partner information");
    }
  };

  return (
    <div>
      {/* Partner Section */}
      <section className="partner-section">
        <div className="partner-content">
          <div className="partner-text">
            <h2>Der Autoeinfachlos Partnerbereich</h2>
            <h4>Für registrierte Autohändler</h4>
            <p>
              Kaufe private, gebrauchte Fahrzeuge über unsere Online-Auktion und
              unseren Marktplatz. Entdecke ein zuverlässiges Netzwerk für den
              Fahrzeugkauf, das dir den Prozess vereinfacht und eine nahtlose,
              stressfreie Erfahrung bietet.
            </p>
          </div>

          <div className="partner-form">
            <h3>Werde ein Partner</h3>
            <form onSubmit={handleSubmit} id="partnerForm">
              <label htmlFor="company">Firma</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Firma"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />

              <label htmlFor="fullname">Vollständiger Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Vollständiger Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />

              <label htmlFor="email">E-Mail-Adresse</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="phone">Mobiltelefonnummer</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Mobiltelefonnummer"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
      <div class="section-divider"></div>
      <section id="vorteile" className="partner-benefits">
        <div className="container">
          <h2>Wir betreuen professionelle Autokäufer</h2>
          <p className="subtitle">
            Die Vorteile, die unsere Partner erwarten können
          </p>
          <div className="benefit-grid">
            {[
              {
                icon: icon1,
                text: "Erhalte exklusiven Zugang zu dem kuratierten Fahrzeugbestand von Autoeinfachlos",
              },
              {
                icon: icon2,
                text: "Kaufe professionell geprüfte Fahrzeuge mit vollständiger Transparenz über den Fahrzeugzustand",
              },
              {
                icon: icon3,
                text: "Autoeinfachlos übernimmt für dich die gesamte Beschaffung und Suche nach Fahrzeugen",
              },
              {
                icon: icon4,
                text: "Spare Zeit, denn wir übernehmen den gesamten Papierkram, die Zahlung und die Lieferung für dich",
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
      <div class="section-divider"></div>
      <section id="inspection" className="inspection-section">
        <div className="container">
          <h2>Wir führen über 150 Punkte Inspektionen durch</h2>
          <p>
            Wir bieten für jedes Auto detaillierte Inspektionsberichte,
            CarFax-Berichte und OBD2-Daten, damit dein Kauf <br /> einfacher,
            schneller und intelligenter wird.
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
      <div class="section-divider"></div>
      <section id="feedback" className="testimonials">
        <div className="container">
          <h2>Das sagen unsere Partner über Autoeinfachlos</h2>
          <div className="testimonial-grid">
            {[
              {
                quote:
                  "Autoeinfachlos war eine großartige Quelle für zusätzlichen Lagerbestand für uns. Wir erhalten 10-15 Stück Inventar pro Monat, die wir sonst nicht bekommen hätten.",
                name: "Vertrauenswürdiger Käufer",
                location: "Wien, Österreich",
              },
              {
                quote:
                  "Wir arbeiten sehr gerne mit Autoeinfachlos zusammen, und unser Vertreter hilft uns, während der Auktionen die besten Preise zu erzielen.",
                name: "Vertrauenswürdiger Käufer",
                location: "Salzburg, Österreich",
              },
              {
                quote:
                  "Was ich an Autoeinfachlos am meisten schätze, ist, dass es meinem Team Zeit spart, indem es sich um den Kundenkontakt und den Verkaufsprozess kümmert.",
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
