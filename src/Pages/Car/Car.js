import React, { useEffect, useState } from "react";
import "./Car.css";
import carData from "../../carData.json";
import { Link } from "react-router-dom";
import securityImage from "../../assets/security.png";
import whysell1 from "../../assets/bildone.webp";
import whysell2 from "../../assets/bildtwo.webp";
import whysell3 from "../../assets/bildthree.webp";
import whysell4 from "../../assets/bildfour.webp";

const allowedBrands = [
  "Abarth",
  "Aiways",
  "Aixam",
  "Alfa Romeo",
  "Alpine",
  "Aston Martin",
  "Audi",
  "Barkas",
  "Bentley",
  "BMW",
  "Brilliance",
  "Buick",
  "BYD",
  "Cadillac",
  "Caterham",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Cupra",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "DS",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Honda",
  "Hyundai",
  "INEOS",
  "Infiniti",
  "Isuzu",
  "Iveco",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lada",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "LEVC",
  "Lexus",
  "Lotus",
  "Lucid",
  "Lynk & Co",
  "Mahindra",
  "Maserati",
  "Maxus",
  "Mazda",
  "Mercedes-Benz",
  "MG",
  "MINI",
  "Mitsubishi",
  "NIO",
  "Nissan",
  "Opel",
  "Ora",
  "Peugeot",
  "Vespa",
  "Polestar",
  "Pontiac",
  "Porsche",
  "Proton",
  "Renault",
  "Rover",
  "Saab",
  "Seat",
  "Skoda",
  "Smart",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tata",
  "Tesla",
  "Toyota",
  "Trabant",
  "Triumph",
  "VinFast",
  "Volkswagen",
  "Volvo",
  "Wartburg",
  "Westfield",
  "Zastava",
];

function Car({
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  brandModels,
  setBrandModels,
  availableYears,
  setAvailableYears,
  setSelectedYear,
  selectedYear,
}) {
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel(""); // Reset model when the brand changes
    setAvailableYears([]); // Reset years when the brand changes
  };

  const handleModelChange = (event) => {
    const modelName = event.target.value;
    setSelectedModel(modelName);
    setSelectedYear(""); // Reset selected year when the model changes
    setAvailableYears([]); // Clear available years until a model is chosen

    if (selectedBrand && modelName) {
      // Load the available years for the selected brand and model
      const years = loadYears(selectedBrand, modelName);
      setAvailableYears(years); // Update state with available years
    }
  };

  const handleSelectYear = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  // Benutzerdefinierte Sortierung der Modelle: Zuerst Zahlen, dann Buchstaben
  function customSortModels(models) {
    return models.sort((a, b) => {
      const regex = /^\d+/;
      const aIsNumber = regex.test(a);
      const bIsNumber = regex.test(b);

      if (aIsNumber && !bIsNumber) return -1;
      if (!aIsNumber && bIsNumber) return 1;

      if (aIsNumber && bIsNumber) {
        return parseInt(a.match(regex)[0]) - parseInt(b.match(regex)[0]);
      }

      return a.localeCompare(b, undefined, { numeric: true });
    });
  }

  // Function to load models for the selected brand
  function loadModels(brandName) {
    const selectedBrandData = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );

    if (selectedBrandData) {
      let models = selectedBrandData.models.model.map((model) => model.name);

      customSortModels(models);
      setBrandModels(models);
    } else {
      setBrandModels([]); // If no brand found, reset models
    }
  }

  function loadYears(brandName, modelName) {
    const selectedBrand = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );
    const selectedModel = selectedBrand.models.model.find(
      (model) => model.name === modelName
    );

    const years = new Set(); // To avoid duplicate years
    const currentYear = new Date().getFullYear();

    selectedModel.generations.generation.forEach((generation) => {
      generation.modifications.modification.forEach((mod) => {
        const yearStart = parseInt(mod.yearstart);
        const yearStop = mod.yearstop ? parseInt(mod.yearstop) : currentYear; // Use current year if yearstop is not present

        // Add all years between yearStart and yearStop to the Set
        for (let year = yearStart; year <= yearStop; year++) {
          years.add(year);
        }
      });
    });

    // Convert the Set to an array, sort it from newest to oldest, and return it
    return Array.from(years).sort((a, b) => b - a);
  }

  useEffect(() => {
    if (selectedBrand) {
      loadModels(selectedBrand);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrand]);

  // FAQ State
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="container">
          <div className="slogan-box">
            <p className="hero-subtitle">Klick, Kleck, Auto weg!</p>
          </div>
          <div className="form-container">
            <h1>
              Verkaufe dein Auto <span id="dynamic-text">bequem</span>
            </h1>
            <p>
              Ohne Stress zum besten Preis - Erhalte direkt deinen finalen
              Verkaufspreis und buche deinen Abgabe-Termin online
            </p>
            <form id="evaluation-form" action="second-page.html" method="GET">
              <div className="input-wrapper">
                <label htmlFor="make">
                  <b>Von welcher Marke ist dein Auto?</b>
                </label>
                <select
                  id="make"
                  name="make"
                  required
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value="" disabled>
                    Marke auswählen
                  </option>
                  {allowedBrands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-wrapper">
                <label htmlFor="model">
                  <b>Welches Modell?</b>
                </label>
                <select
                  id="model"
                  name="model"
                  required
                  value={selectedModel}
                  onChange={handleModelChange}
                  disabled={!brandModels.length}
                >
                  <option value="" disabled>
                    Modell auswählen
                  </option>
                  {brandModels.map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-wrapper">
                <label htmlFor="year">
                  <b>In welchem Jahr wurde es zugelassen?</b>
                </label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear}
                  required
                  onChange={handleSelectYear}
                  disabled={!availableYears.length}
                >
                  <option value="" disabled>
                    Erstzulassung auswählen
                  </option>
                  {availableYears.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <Link to="/cardetails">
                <button className="submit">
                  Jetzt Bewertung ansehen <i className="fas fa-arrow-right"></i>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>

      {/* Vorteile - Neuer Abschnitt */}
      <section className="features">
        <div className="container">
          <div className="feature">
            <img
              src={securityImage}
              alt="Sicherheit Icon"
              className="feature-image"
            />
            <h3>Kostenlose Bewertung online</h3>
            <p>Erhalten Sie sofort ein Angebot für Ihr Fahrzeug.</p>
          </div>
          <div className="feature">
            <img
              src={securityImage}
              alt="Sicherheit Icon"
              className="feature-image"
            />
            <h3>Einfacher Prozess</h3>
            <p>Wenige Schritte bis zum Verkauf – komplett online.</p>
          </div>
          <div className="feature">
            <img
              src={securityImage}
              alt="Sicherheit Icon"
              className="feature-image"
            />
            <h3>Fairer Preis</h3>
            <p>
              Wir bieten dir einen kompetitiven Preis basierend auf dem
              aktuellen Markt.
            </p>
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="how-it-works">
        <div className="container">
          <h2 id="Sofunktioniert's">So funktioniert's</h2>
          <div className="steps">
            {[
              {
                number: "1",
                title: "Fahrzeugdaten eingeben",
                text: "Stelle uns Informationen zu deinem Auto und dem Zustand zur Verfügung.",
              },
              {
                number: "2",
                title: "Verkaufspreis erhalten",
                text: "Sobald dein Verkaufspreis ermittelt wurde, erhältst du ihn per E-mail oder SMS. Das Angebot ist zeitlich begrenzt.",
              },
              {
                number: "3",
                title: "In Zahlung geben oder verkaufen",
                text: "Gib dein Auto in Zahlung für ein anderes von Autohero oder buche einen Verkaufstermin, um direkt zu verkaufen.",
              },
              {
                number: "4",
                title: "Übergib dein Auto",
                text: "Beim Verkaufstermin werden deine online eingegebenen Daten verifiziert und dein Preis bestätigt, entweder direkt von uns oder von unserem Partner.",
              },
            ].map((step, idx) => (
              <div className="step" key={idx}>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-button">
            <button>Mit der Bewertung fortfahren</button>
          </div>
        </div>
      </section>

      {/* Warum bei uns verkaufen */}
      <section className="why-sell">
        <div className="container">
          <h2>Warum bei uns verkaufen?</h2>
          <div className="why-grid">
            {[
              {
                imgSrc: whysell1,
                altText: "100% von Zuhause",
                title: "100% von Zuhause",
                text: "Verkaufe dein Auto bequem von Zuhause aus. Wir kümmern uns um alles - vom Anfang bis zum Ende.",
              },
              {
                imgSrc: whysell2,
                altText: "Lokale Käufer bieten auf dein Auto",
                title: "Lokale Käufer bieten auf dein Auto",
                text: "Erreiche Hunderte lokaler Händler, die um dein Auto konkurrieren und den besten Preis bieten.",
              },
              {
                imgSrc: whysell3,
                altText: "Sicherheit & Privatsphäre",
                title: "Sicherheit & Privatsphäre",
                text: "Wir fungieren als dein vertrauenswürdiger Vermittler, damit deine Identität geschützt bleibt.",
              },
              {
                imgSrc: whysell4,
                altText: "Experten im Autoverkauf",
                title: "Experten im Autoverkauf",
                text: "Unser Team aus Branchenexperten begleitet dich bei jedem Schritt, um den Verkaufsprozess zu vereinfachen.",
              },
            ].map((why, idx) => (
              <div className="why-item" key={idx}>
                <img src={why.imgSrc} alt={why.altText} />
                <div className="why-content">
                  <h3>{why.title}</h3>
                  <p>{why.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>Häufig gestellte Fragen</h2>
          {[
            {
              question:
                "Muss ich Gebühren bezahlen, wenn ich mein Auto nicht verkaufe?",
              answer:
                "Nein, für dich entstehen keinerlei Gebühren. Unser Service ist vollkommen kostenlos.",
            },
            {
              question:
                "Wie verkaufe ich mein Auto nachdem ich den endgültigen Verkaufspreis erhalten habe?",
              answer:
                "Nachdem du deinen endgültigen Verkaufspreis erhalten hast, buchst du einen Abgabe-Termin in einer unserer Filialen.",
            },
            {
              question: "Wie buche ich meinen Abgabe-Termin?",
              answer:
                "Nach der Online-Begutachtung erhältst du per E-Mail deinen endgültigen Verkaufspreis.",
            },
            {
              question: "Wie läuft mein Abgabe-Termin ab?",
              answer: (
                <>
                  <p>
                    1. Du kommst zum vereinbarten Termin in einer unserer
                    Filialen.
                  </p>
                  <p>
                    2. Ein Mitarbeiter prüft deine Angaben und bestätigt alle
                    Details.
                  </p>
                  <p>
                    3. Anschließend wird der Kaufvertrag abgeschlossen und wir
                    überweisen dir den Verkaufspreis.
                  </p>
                  <p>
                    4. Wir übernehmen die Abmeldung deines Fahrzeugs und senden
                    dir die Abmeldebestätigung zu.
                  </p>
                </>
              ),
            },
            {
              question: "Wie bezahlt ihr den Verkaufspreis für mein Auto?",
              answer:
                "Wir überweisen dir nach dem Verkauf den Verkaufspreis umgehend und sicher auf dein Bankkonto.",
            },
            {
              question: "Du hast noch weitere Fragen?",
              answer:
                "Solltest du noch offene Fragen haben, kannst du jederzeit unseren 24/7 WhatsApp-Support kontaktieren.",
            },
          ].map((faq, idx) => (
            <div
              className={`faq-item ${activeIndex === idx ? "active" : ""}`}
              key={idx}
            >
              <button
                className="faq-question"
                onClick={() => handleToggle(idx)}
              >
                {faq.question}
              </button>
              {activeIndex === idx && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Car;
