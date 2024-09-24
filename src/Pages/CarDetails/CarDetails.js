import React, { useEffect, useState } from "react";
import "./CarDetails.css";
import carData from "../../carData.json";

function CarDetails({ brandName, modelName, year }) {
  // selected values
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [power, setPower] = useState("");
  const [modification, setModification] = useState("");

  const [kilometerstand, setKilometerstand] = useState("");
  const [unfallschaden, setUnfallschaden] = useState(false);
  const [serviceHeft, setServiceHeft] = useState(false);
  const [paintConditionLack, setPaintConditionLack] = useState("");
  const [paintConditionKarosserie, setPaintConditionKarosserie] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // list of options are saved here
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [gearboxTypes, setGearboxTypes] = useState([]);
  const [powerHPOptions, setPowerHPOptions] = useState([]);
  const [modificationOptions, setModificationOptions] = useState([]);

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
      serviceHeft,
      paintConditionLack,
      paintConditionKarosserie,
      additionalNotes,
    };
    console.log(formData);
  };

  useEffect(() => {
    if (brandName && modelName && year) {
      loadBodytypes(brandName, modelName, year);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandName, modelName, year]);

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

    //load the Fuel types after selecting bodytype

    loadFuels(brandName, modelName, year, selectedBodyType);
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

  function loadGearbox(brandName, modelName, year, bodytype, fuel) {
    if (!brandName || !modelName || !year || !fuel || !bodytype) return;

    // Find the brand and model in carData
    const selectedBrand = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );
    const selectedModel = selectedBrand.models.model.find(
      (model) => model.name === modelName
    );
    if (!selectedModel) return;

    // Create a Set to ensure uniqueness of gearboxes
    const newGearboxes = new Set();

    // Iterate through generations and modifications to find matching gearboxes
    selectedModel.generations.generation.forEach((generation) => {
      generation.modifications.modification.forEach((mod) => {
        const yearStart = parseInt(mod.yearstart);
        const yearStop = mod.yearstop
          ? parseInt(mod.yearstop)
          : new Date().getFullYear();
        if (
          year >= yearStart &&
          year <= yearStop &&
          mod.coupe === bodytype &&
          mod.fuel === fuel
        ) {
          if (mod.gearboxMT) newGearboxes.add("Manuell");
          if (mod.gearboxAT) newGearboxes.add("Automatik");
        }
      });
    });

    // Append new gearboxes while keeping the previous ones
    setGearboxTypes((prevGearboxes) => {
      const updatedGearboxes = [...prevGearboxes, ...Array.from(newGearboxes)];
      return [...new Set(updatedGearboxes)]; // Ensure no duplicates
    });
  }

  function loadPowerHp(brandName, modelName, year, bodytype, fuel, gearbox) {
    if (!brandName || !modelName || !year || !fuel || !gearbox || !bodytype)
      return;

    // Find the brand and model in carData
    const selectedBrand = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );
    const selectedModel = selectedBrand.models.model.find(
      (model) => model.name === modelName
    );
    if (!selectedModel) return;

    // Create a Set to ensure uniqueness of power HP options
    const newPowerHp = new Set();

    // Iterate through generations and modifications to find matching power HP
    selectedModel.generations.generation.forEach((generation) => {
      generation.modifications.modification.forEach((mod) => {
        const yearStart = parseInt(mod.yearstart);
        const yearStop = mod.yearstop
          ? parseInt(mod.yearstop)
          : new Date().getFullYear();
        if (
          year >= yearStart &&
          year <= yearStop &&
          mod.coupe === bodytype &&
          mod.fuel === fuel &&
          ((gearbox === "Manuell" && mod.gearboxMT) ||
            (gearbox === "Automatik" && mod.gearboxAT))
        ) {
          newPowerHp.add(mod.powerHp); // Add power HP value
        }
      });
    });

    // Append new power HP options while keeping the previous ones
    setPowerHPOptions((prevPowerHp) => {
      const updatedPowerHp = [...prevPowerHp, ...Array.from(newPowerHp)];
      return [...new Set(updatedPowerHp)]; // Ensure no duplicates
    });
  }

  function loadModifications(
    brandName,
    modelName,
    year,
    bodytype,
    gearbox,
    fuel,
    powerHp
  ) {
    if (
      !brandName ||
      !modelName ||
      !year ||
      !powerHp ||
      !fuel ||
      !gearbox ||
      !bodytype
    )
      return;

    // Find the brand and model in carData
    const selectedBrand = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );
    const selectedModel = selectedBrand.models.model.find(
      (model) => model.name === modelName
    );
    if (!selectedModel) return;

    // Create an array to store modifications
    const newModifications = [];

    // Iterate through generations and modifications to find matching modifications
    selectedModel.generations.generation.forEach((generation) => {
      generation.modifications.modification.forEach((mod) => {
        const yearStart = parseInt(mod.yearstart);
        const yearStop = mod.yearstop
          ? parseInt(mod.yearstop)
          : new Date().getFullYear();
        if (
          year >= yearStart &&
          year <= yearStop &&
          mod.coupe === bodytype &&
          mod.fuel === fuel &&
          mod.powerHp === powerHp &&
          ((gearbox === "Manuell" && mod.gearboxMT) ||
            (gearbox === "Automatik" && mod.gearboxAT))
        ) {
          // Combine generation and modification details for dropdown text
          const modificationText = `${generation.name} ${mod.engine} (${
            mod.powerHp
          } PS) ${mod.gearboxAT ? "Steptronic" : "Manuell"}`;
          newModifications.push(modificationText);
        }
      });
    });

    // Append new modifications while keeping the previous ones
    setModificationOptions((prevModifications) => {
      const updatedModifications = [...prevModifications, ...newModifications];
      return [...new Set(updatedModifications)]; // Ensure no duplicates
    });
  }

  const selectBodyType = (bodytype) => {
    setSelectedBodyType(bodytype);
    loadFuels(brandName, modelName, year, bodytype);
  };

  const selectFuelType = (fuelType) => {
    setFuelType(fuelType);
    loadGearbox(brandName, modelName, year, selectedBodyType, fuelType);
  };

  const selectGearbox = (gearboxType) => {
    setGearbox(gearboxType);
    loadPowerHp(
      brandName,
      modelName,
      year,
      selectedBodyType,
      fuelType,
      gearboxType
    );
  };

  const selectHorsePower = (horsePower) => {
    setPower(fuelType);
    loadModifications(
      brandName,
      modelName,
      year,
      selectedBodyType,
      gearbox,
      fuelType,
      horsePower
    );
  };

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
                onChange={(e) => selectBodyType(e.target.value)}
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
                onChange={(e) => selectFuelType(e.target.value)}
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
                onChange={(e) => selectGearbox(e.target.value)}
                required
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {gearboxTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="second-page-select-wrapper">
              <label htmlFor="power">PS</label>
              <select
                id="power"
                name="power"
                value={power}
                onChange={(e) => selectHorsePower(e.target.value)}
                required
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {powerHPOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
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
                {modificationOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
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
                    checked={unfallschaden}
                    onChange={() => setUnfallschaden(true)}
                    required
                  />
                  Ja
                </label>
                <label>
                  <input
                    type="radio"
                    name="unfallschaden"
                    value="Nein"
                    checked={!unfallschaden}
                    onChange={() => setUnfallschaden(false)}
                    required
                  />
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
                    name="serviceHeft"
                    value={true}
                    checked={serviceHeft}
                    onChange={() => setServiceHeft(true)}
                    required
                  />{" "}
                  Ja
                </label>
                <label>
                  <input
                    type="radio"
                    name="serviceHeft"
                    value={false}
                    checked={!serviceHeft}
                    onChange={() => setServiceHeft(false)}
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
