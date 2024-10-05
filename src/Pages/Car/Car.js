import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config/apiUrl";
import "./Car.css";


import "@fortawesome/fontawesome-free/css/all.min.css";

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import securityImage from "../../assets/security.png";
import stats1 from "../../assets/public-relation.png";
import stats2 from "../../assets/service.png";
import stats3 from "../../assets/customer-service.png";
import whysell1 from "../../assets/bildone.webp";
import whysell2 from "../../assets/bildtwo.webp";
import whysell3 from "../../assets/bildthree.webp";
import whysell4 from "../../assets/bildfour.webp";
import cx from "classnames";

function DynamicText() {
  const texts = ["schnell", "bequem", "einfach"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span id="dynamic-text">{texts[currentIndex]}</span>;
}

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
  const [carBrands, setCarBrands] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (selectedBrand !== "" && selectedModel !== "" && selectedYear !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [selectedBrand, selectedModel, selectedYear]);

  const api = apiUrl();

  // Fetch the car brands from the backend when the page loads
  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        const response = await fetch(`${api}/cars/carBrands`);
        let brands = await response.json();
        // Sort the brands alphabetically (A-Z)
        brands = brands.sort((a, b) => a.localeCompare(b));
        setCarBrands(brands);
      } catch (error) {
        console.error("Error fetching car brands:", error);
      }
    };

    fetchCarBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel(""); // Reset model when the brand changes
    setAvailableYears([]); // Reset years when the brand changes
  };

  // Handle when the model is changed
  const handleModelChange = async (event) => {
    const modelName = event.target.value;
    setSelectedModel(modelName);
    setSelectedYear(""); // Reset selected year when the model changes
    setAvailableYears([]); // Clear available years until they are fetched

    if (selectedBrand && modelName) {
      // Load the available years for the selected brand and model
      const years = await loadYears(selectedBrand, modelName);
      setAvailableYears(years); // Update state with available years
    }
  };

  const handleSelectYear = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  async function loadModels(brandName) {
    try {
      const response = await fetch(`${api}/cars/getModels/${brandName}`);

      // Parse the JSON response
      const data = await response.json();

      if (response.ok) {
        // If models are found, sort and set them in the state
        const models = data.models; // Custom sorting (optional)
        setBrandModels(models); // Assuming you have a state setter like useState
      } else {
        setBrandModels([]); // Reset models if no data or error
      }
    } catch (error) {
      console.error("Error fetching models:", error);
      setBrandModels([]); // Handle errors by resetting models
    }
  }

  async function loadYears(brandName, modelName) {
    try {
      const response = await fetch(
        `${api}/cars/getYears/${brandName}/${modelName}`
      );

      const data = await response.json();

      if (response.ok) {
        return data.years; // Return years from the backend response
      } else {
        console.error(data.error);
        return [];
      }
    } catch (error) {
      console.error("Error fetching years:", error);
      return [];
    }
  }

  useEffect(() => {
    if (selectedBrand) {
      loadModels(selectedBrand);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrand]);

  // FAQ State and toggle logic with dynamic height for animation
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  // Handle input change and filter car brands
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedBrand("");
    // Filter the brands based on the input value
    const filtered = carBrands.filter((brand) =>
      brand.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBrands(filtered);
  };


  return (
    <div className="home-container">
      <section className="hero">
        <div className="container">
          <div className="slogan-box">
            <p className="hero-subtitle">Aktuell nur in Tirol verfügbar!</p>
          </div>
          <div className="form-container">
            <div className="form-header">
              <h1>
                Verkaufe dein Auto <DynamicText />{" "}
                {/* Nutze DynamicText hier */}
              </h1>
              <p>
                Einfach und stressfrei zum Top-Preis. Erhalte sofort dein
                finales Angebot und buche bequem online deinen Termin zur
                Abgabe.
              </p>
            </div>

            <form id="evaluation-form" action="second-page.html" method="GET">
              <div className="input-wrapper">
                <label htmlFor="brand">
                  <b>Von welcher Marke ist dein Auto?</b>
                </label>
                <select
                  type="text"
                  id="make"
                  name="make"
                  required
                  placeholder="Marke auswählen"
                  value={selectedBrand}
                  onChange={(e) => handleBrandSelect(e.target.value)}
                >
                  <option value="" disabled>
                    Modell auswählen
                  </option>
                  {/* List with filtered brands */}
                  {carBrands.map((brand, index) => (
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

              <div className="submit-button-wrapper">
                <Link to={!isButtonDisabled ? "/cardetails" : "#"}>
                  <button
                    className={cx("submit", isButtonDisabled && "disabled")}
                    type="button"
                    disabled={isButtonDisabled}
                  >
                    Jetzt Bewertung ansehen{" "}
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
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
      <div class="section-divider"></div>
      <section id="sofunktionierts" className="how-it-works">
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
          <HashLink smooth to="/#">
            <div className="cta-button">
              <button>Mit der Bewertung fortfahren</button>
            </div>
          </HashLink>
        </div>
      </section>
      {/* Warum bei uns verkaufen */}
      <div class="section-divider"></div>
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
      {/* Stats Section */}
      <section className="stats-section" style={{ display: "none" }}>
        <div className="section-title">
          <h2>Zahlen & Fakten</h2>
        </div>
        <div className="container">
          <div className="stat-item">
            <div className="stat-icon">
              <img src={stats1} alt="Zufriedene Kunden Icon" />
            </div>
            <div className="stat-number">2,793+</div>
            <div className="stat-description">Zufriedene Kunden</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <img src={stats2} alt="Weiterempfehlungen Icon" />
            </div>
            <div className="stat-number">197+</div>
            <div className="stat-description">Weiterempfehlungen</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <img src={stats3} alt="Auto Bewertungen Icon" />
            </div>
            <div className="stat-number">3,924</div>
            <div className="stat-description">Auto Bewertungen</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div class="section-divider"></div>
      <section id="häufigefragen" className="faq">
        <div className="container">
          <h2>Häufig gestellte Fragen</h2>
          {[
            {
              question:
                "Muss ich Gebühren bezahlen, wenn ich mein Auto nicht verkaufe?",
              answer:
                "Nein, für dich entstehen keinerlei Gebühren. Unser Service ist vollkommen kostenlos. Übrigens: Bei uns kannst du auch dein defektes Auto verkaufen.",
            },
            {
              question:
                "Wie verkaufe ich mein Auto nachdem ich den endgültigen Verkaufspreis erhalten habe?",
              answer:
                "Nachdem du deinen endgültigen Verkaufspreis erhalten hast, buchst du einen Abgabe-Termin in einer unserer Filialen in deiner Nähe. Vor Ort werden die Auto-Details von einem unserer Mitarbeiter bestätigt. Anschließend wird der Kaufvertrag aufgesetzt und mit deiner Unterschrift der Verkauf deines Autos abgeschlossen. Das Auto bleibt direkt in unserer Filiale. Wir überweisen dir dein Geld und melden dein Auto kostenlos für dich ab.",
            },
            {
              question: "Wie buche ich meinen Abgabe-Termin?",
              answer:
                "Nach der Online-Begutachtung erhältst du per E-Mail deinen endgültigen Verkaufspreis. Gleichzeitig schicken wir dir einen Link, damit du auf unserer Website bequem deinen Abgabe-Termin buchen kannst.",
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
                "Wir überweisen dir nach dem Verkauf den Verkaufspreis umgehend und absolut sicher auf dein Bankkonto. Du erhältst dein Geld komfortabel, zuverlässig und auf sicherem Weg. Eine Barauszahlung ist aus Sicherheits- und organisatorischen Gründen leider nicht möglich.",
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
              {/* Use style to animate max-height */}
              <div
                className="faq-answer"
                style={{ maxHeight: activeIndex === idx ? "200px" : "0" }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Car;
