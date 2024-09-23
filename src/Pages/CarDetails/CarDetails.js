import React, { useEffect, useState } from "react";
import "./CarDetails.css";
import carData from "../../carData.json";

function CarDetails({ brandName, modelName, year }) {
  const [selectedBodyType, setSelectedBodyType] = useState("");

  const [fuelType, setFuelType] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [power, setPower] = useState("");
  const [modification, setModification] = useState("");
  const [kilometerstand, setKilometerstand] = useState("");
  const [unfallschaden, setUnfallschaden] = useState("");
  const [transmission, setTransmission] = useState("");
  const [paintConditionLack, setPaintConditionLack] = useState("");
  const [paintConditionKarosserie, setPaintConditionKarosserie] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const formData = {
      selectedBodyType,
      fuelType,
      gearbox,
      power,
      modification,
      kilometerstand,
      unfallschaden,
      transmission,
      paintConditionLack,
      paintConditionKarosserie,
      additionalNotes,
    };
    console.log(formData);
  };

  // Function to load body types based on selected brand, model, and year
  function loadBodytypes(brandName, modelName, year) {
    if (!brandName || !modelName || !year) return;

    // Find the brand and model in carData
    const selectedBrand = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );

    const selectedModel = selectedBrand.models.model.find(
      (model) => model.name === modelName
    );
    if (!selectedModel) return;

    // Create a Set to ensure uniqueness of body types
    const newBodyTypes = new Set();

    // Iterate through generations and modifications to find matching body types
    selectedModel.generations.generation.forEach((generation) => {
      generation.modifications.modification.forEach((mod) => {
        const yearStart = parseInt(mod.yearstart);
        const yearStop = mod.yearstop
          ? parseInt(mod.yearstop)
          : new Date().getFullYear();
        if (year >= yearStart && year <= yearStop) {
          newBodyTypes.add(mod.coupe); // Add the body type (e.g., "Coupe")
        }
      });
    });

    // Append new body types while keeping the previous ones
    setBodyTypes((prevBodyTypes) => {
      const updatedBodyTypes = [...prevBodyTypes, ...Array.from(newBodyTypes)];
      return [...new Set(updatedBodyTypes)]; // Ensure no duplicates
    });
  }

  function loadFuels(brandName, modelName, year, bodytype) {
    if (!brandName || !modelName || !year || !bodytype) return;

    // Find the brand and model in carData
    const selectedBrand = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );
    const selectedModel = selectedBrand.models.model.find(
      (model) => model.name === modelName
    );
    if (!selectedModel) return;

    // Create a Set to ensure uniqueness of fuels
    const newFuels = new Set();

    // Iterate through generations and modifications to find matching fuels
    selectedModel.generations.generation.forEach((generation) => {
      generation.modifications.modification.forEach((mod) => {
        const yearStart = parseInt(mod.yearstart);
        const yearStop = mod.yearstop
          ? parseInt(mod.yearstop)
          : new Date().getFullYear();
        if (year >= yearStart && year <= yearStop && mod.coupe === bodytype) {
          newFuels.add(mod.fuel); // Add fuel type (e.g., "Diesel", "Petrol")
        }
      });
    });

    // Append new fuels while keeping the previous ones
    setFuelTypes((prevFuels) => {
      const updatedFuels = [...prevFuels, ...Array.from(newFuels)];
      return [...new Set(updatedFuels)]; // Ensure no duplicates
    });
  }

  useEffect(() => {
    if (brandName && modelName && year) {
      loadBodytypes(brandName, modelName, year);
    }
  }, [brandName, modelName, year]);

  useEffect(() => {
    if (brandName && modelName && year && selectedBodyType) {
      loadFuels(brandName, modelName, year, selectedBodyType);
    }
  }, [brandName, modelName, year, selectedBodyType]);

  return (
    <div className="second-page-background">
      <main>
        <div className="form-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
          <p className="estimated-time">
            Geschätzte Zeit bis zur Fertigstellung: 3 Minuten
          </p>

          <form id="second-form" onSubmit={handleSubmit}>
            {/* Felder für Karosserieform, Kraftstoff, Getriebe, PS und Variante */}
            <div className="second-page-select-wrapper">
              <label htmlFor="body-type">Karosserieform</label>
              <select
                id="body-type"
                name="body-type"
                value={selectedBodyType}
                onChange={(e) => setSelectedBodyType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {bodyTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="second-page-select-wrapper">
              <label htmlFor="fuel-type">Kraftstoff</label>
              <select
                id="fuel-type"
                name="fuel-type"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {fuelTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="second-page-select-wrapper">
              <label htmlFor="gearbox">Getriebeart</label>
              <select
                id="gearbox"
                name="gearbox"
                value={gearbox}
                onChange={(e) => setGearbox(e.target.value)}
                required
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {/* Add options here */}
              </select>
            </div>

            <div className="second-page-select-wrapper">
              <label htmlFor="power">PS</label>
              <select
                id="power"
                name="power"
                value={power}
                onChange={(e) => setPower(e.target.value)}
                required
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {/* Add options here */}
              </select>
            </div>

            <div className="second-page-select-wrapper">
              <label htmlFor="modification">Modellvariante</label>
              <select
                id="modification"
                name="modification"
                value={modification}
                onChange={(e) => setModification(e.target.value)}
                required
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {/* Add options here */}
              </select>
            </div>

            <div className="second-page-input-wrapper">
              <label htmlFor="kilometerstand">Kilometerstand</label>
              <div className="km-input-container">
                <input
                  type="text"
                  id="kilometerstand"
                  name="kilometerstand"
                  placeholder="zB: 75.000"
                  value={kilometerstand}
                  onChange={(e) => setKilometerstand(e.target.value)}
                  required
                />
                <span className="km-suffix">km</span>
              </div>
            </div>

            {/* Vorhandene Felder */}
            <div className="form-group">
              <label>Hatte dein Auto jemals einen Unfallschaden?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="unfallschaden"
                    value="Ja"
                    checked={unfallschaden === "Ja"}
                    onChange={() => setUnfallschaden("Ja")}
                    required
                  />{" "}
                  Ja
                </label>
                <label>
                  <input
                    type="radio"
                    name="unfallschaden"
                    value="Nein"
                    checked={unfallschaden === "Nein"}
                    onChange={() => setUnfallschaden("Nein")}
                    required
                  />{" "}
                  Nein
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>
                Hast du ein Serviceheft (oder einen digitalen Servicenachweis)?
              </label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="transmission"
                    value="Ja"
                    checked={transmission === "Ja"}
                    onChange={() => setTransmission("Ja")}
                    required
                  />{" "}
                  Ja
                </label>
                <label>
                  <input
                    type="radio"
                    name="transmission"
                    value="Nein"
                    checked={transmission === "Nein"}
                    onChange={() => setTransmission("Nein")}
                    required
                  />{" "}
                  Nein / Nicht vollständig
                </label>
              </div>
            </div>

            {/* Abschnitt für Lackzustand */}
            <div className="form-group-2">
              <label htmlFor="paint-condition-lack">Lackzustand:</label>
              <div className="checkbox-group-2">
                <label>
                  <input
                    type="radio"
                    name="paint-condition-lack"
                    value="Wie neu"
                    checked={paintConditionLack === "Wie neu"}
                    onChange={() => setPaintConditionLack("Wie neu")}
                    required
                  />
                  <div className="text-wrapper">
                    <span className="main-text">Wie neu</span>
                    <span className="sub-text">
                      Originallack, keine Gebrauchsspuren, keine Ausbesserungen
                    </span>
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="paint-condition-lack"
                    value="Leichte Gebrauchsspuren"
                    checked={paintConditionLack === "Leichte Gebrauchsspuren"}
                    onChange={() =>
                      setPaintConditionLack("Leichte Gebrauchsspuren")
                    }
                    required
                  />
                  <div className="text-wrapper">
                    <span className="main-text">Leichte Gebrauchsspuren</span>
                    <span className="sub-text">
                      Kleine Kratzer, die einfach behoben werden können
                    </span>
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="paint-condition-lack"
                    value="Ausgebesserte Gebrauchsspuren"
                    checked={
                      paintConditionLack === "Ausgebesserte Gebrauchsspuren"
                    }
                    onChange={() =>
                      setPaintConditionLack("Ausgebesserte Gebrauchsspuren")
                    }
                    required
                  />
                  <div className="text-wrapper">
                    <span className="main-text">
                      Ausgebesserte Gebrauchsspuren
                    </span>
                    <span className="sub-text">
                      Smart Repair, Ausbesserung kleinerer Dellen
                    </span>
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="paint-condition-lack"
                    value="Nicht ausgebesserte Gebrauchsspuren"
                    checked={
                      paintConditionLack ===
                      "Nicht ausgebesserte Gebrauchsspuren"
                    }
                    onChange={() =>
                      setPaintConditionLack(
                        "Nicht ausgebesserte Gebrauchsspuren"
                      )
                    }
                    required
                  />
                  <div className="text-wrapper">
                    <span className="main-text">
                      Nicht ausgebesserte Gebrauchsspuren
                    </span>
                    <span className="sub-text">
                      Normaler Verschleiß, kleinere Dellen oder Lackkratzer
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Abschnitt für Karosserie / Mechanik / Technik */}
            <div className="form-group-2">
              <label htmlFor="paint-condition-karosserie">
                Karosserie / Mechanik / Technik
              </label>
              <div className="checkbox-group-2">
                <label>
                  <input
                    type="radio"
                    name="paint-condition-karosserie"
                    value="Komplett schadenfrei"
                    checked={
                      paintConditionKarosserie === "Komplett schadenfrei"
                    }
                    onChange={() =>
                      setPaintConditionKarosserie("Komplett schadenfrei")
                    }
                    required
                  />
                  <div className="text-wrapper">
                    <span className="main-text">Komplett schadenfrei</span>
                    <span className="sub-text">
                      Keine Schäden und keine reparierten Vorschäden
                    </span>
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="paint-condition-karosserie"
                    value="Fachgerecht reparierte Schäden"
                    checked={
                      paintConditionKarosserie ===
                      "Fachgerecht reparierte Schäden"
                    }
                    onChange={() =>
                      setPaintConditionKarosserie(
                        "Fachgerecht reparierte Schäden"
                      )
                    }
                    required
                  />
                  <div className="text-wrapper">
                    <span className="main-text">
                      Fachgerecht reparierte Schäden
                    </span>
                    <span className="sub-text">
                      Behobene Schäden und kein Reparatur-Bedarf
                    </span>
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="paint-condition-karosserie"
                    value="Nicht reparierte Schäden"
                    checked={
                      paintConditionKarosserie === "Nicht reparierte Schäden"
                    }
                    onChange={() =>
                      setPaintConditionKarosserie("Nicht reparierte Schäden")
                    }
                    required
                  />
                  <div className="text-wrapper">
                    <span className="main-text">Nicht reparierte Schäden</span>
                    <span className="sub-text">
                      z.B Hagelschaden, Blechschaden, Schaden an Lenkung,
                      Getriebe, Achse
                    </span>
                  </div>
                </label>
                <label>
                  <input
                    type="radio"
                    name="paint-condition-karosserie"
                    value="Nicht fahrtauglich"
                    checked={paintConditionKarosserie === "Nicht fahrtauglich"}
                    onChange={() =>
                      setPaintConditionKarosserie("Nicht fahrtauglich")
                    }
                    required
                  />
                  <div className="text-wrapper">
                    <span className="main-text">Nicht fahrtauglich</span>
                    <span className="sub-text">
                      Aufgrund von Unfallschaden, Motorschaden o.Ä.
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-group-2">
              <label htmlFor="additional-notes">
                Hast du zusätzliche Anmerkungen? (optional)
              </label>
              <textarea
                id="additional-notes"
                name="additional-notes"
                placeholder="e.g. Schäden, besondere Merkmale, kürzlich durchgeführte Reparaturen, etc."
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="button-abschließen">
              Bewertung abschließen
              <i
                className="fas fa-spinner fa-spin"
                style={{ display: "none" }}
              ></i>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CarDetails;
