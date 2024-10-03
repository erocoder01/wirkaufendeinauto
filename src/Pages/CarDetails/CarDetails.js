import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../config/apiUrl";
import "./CarDetails.css";
import cx from "classnames";

function CarDetails({
  brandName,
  modelName,
  year,
  selectedBodyType,
  setSelectedBodyType,
  fuelType,
  setFuelType,
  gearbox,
  setGearbox,
  power,
  setPower,
  modification,
  setModification,
  kilometerstand,
  setKilometerstand,
  unfallschaden,
  setUnfallschaden,
  serviceHeft,
  setServiceHeft,
  paintConditionLack,
  setPaintConditionLack,
  paintConditionKarosserie,
  setPaintConditionKarosserie,
  additionalNotes,
  setAdditionalNotes,
}) {
  // list of options are saved here
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [gearboxTypes, setGearboxTypes] = useState([]);
  const [powerHPOptions, setPowerHPOptions] = useState([]);
  const [modificationOptions, setModificationOptions] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      selectedBodyType !== "" &&
      fuelType !== "" &&
      gearbox !== "" &&
      power !== "" &&
      modification !== "" &&
      kilometerstand !== "" &&
      unfallschaden !== "" &&
      paintConditionLack !== "" &&
      paintConditionKarosserie !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    selectedBodyType,
    fuelType,
    gearbox,
    power,
    modification,
    kilometerstand,
    unfallschaden,
    paintConditionLack,
    paintConditionKarosserie,
  ]);

  const api = apiUrl();

  useEffect(() => {
    if (brandName && modelName && year) {
      loadBodytypes(brandName, modelName, year);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandName, modelName, year]);

  // Function to load body types based on selected brand, model, and year
  async function loadBodytypes(brandName, modelName, year) {
    if (!brandName || !modelName || !year) return;

    try {
      // Make a request to the backend to get body types for the selected brand, model, and year
      const response = await fetch(
        `${api}/carDetails/getBodyTypes/${brandName}/${modelName}/${year}`
      );

      const data = await response.json();

      if (response.ok) {
        // Create a Set to ensure uniqueness of body types
        const newBodyTypes = new Set(data.bodyTypes);

        // Append new body types while keeping the previous ones
        setBodyTypes((prevBodyTypes) => {
          const updatedBodyTypes = [
            ...prevBodyTypes,
            ...Array.from(newBodyTypes),
          ];
          return [...new Set(updatedBodyTypes)]; // Ensure no duplicates
        });

        // After selecting a body type, load the available fuels
        loadFuels(brandName, modelName, year, selectedBodyType);
      } else {
        console.error("Error fetching body types:", data.error);
        setBodyTypes([]); // Reset body types if an error occurs
      }
    } catch (error) {
      console.error("Error fetching body types:", error);
      setBodyTypes([]); // Handle errors by resetting body types
    }
  }

  async function loadFuels(brandName, modelName, year, bodytype) {
    if (!brandName || !modelName || !year || !bodytype) return;

    try {
      // Make a request to the backend to get fuel types
      const response = await fetch(
        `${api}/carDetails/getFuels/${brandName}/${modelName}/${year}/${bodytype}`
      );
      const data = await response.json();

      if (response.ok) {
        // Create a Set to ensure uniqueness of fuel types
        const newFuels = new Set(data.fuelTypes);

        // Append new fuels while keeping the previous ones
        setFuelTypes((prevFuels) => {
          const updatedFuels = [...prevFuels, ...Array.from(newFuels)];
          return [...new Set(updatedFuels)]; // Ensure no duplicates
        });
      } else {
        console.error("Error fetching fuel types:", data.error);
        setFuelTypes([]); // Reset fuel types if an error occurs
      }
    } catch (error) {
      console.error("Error fetching fuel types:", error);
      setFuelTypes([]); // Handle errors by resetting fuel types
    }
  }

  async function loadGearbox(brandName, modelName, year, bodytype, fuel) {
    if (!brandName || !modelName || !year || !fuel || !bodytype) {
      return;
    }

    try {
      const response = await fetch(
        `${api}/carDetails/getGearboxes/${brandName}/${modelName}/${year}/${bodytype}/${fuel}`
      );
      const data = await response.json();

      if (response.ok) {
        const newGearboxes = new Set(data.gearboxes);

        setGearboxTypes((prevGearboxes) => {
          const updatedGearboxes = [
            ...prevGearboxes,
            ...Array.from(newGearboxes),
          ];
          return [...new Set(updatedGearboxes)];
        });
      } else {
        console.error("Error fetching gearboxes:", data.error);
        setGearboxTypes([]);
      }
    } catch (error) {
      console.error("Error fetching gearboxes:", error);
      setGearboxTypes([]);
    }
  }

  async function loadPowerHp(
    brandName,
    modelName,
    year,
    bodytype,
    fuel,
    gearbox
  ) {
    if (!brandName || !modelName || !year || !fuel || !gearbox || !bodytype)
      return;

    try {
      const response = await fetch(
        `${api}/carDetails/getPowerHp/${brandName}/${modelName}/${year}/${bodytype}/${fuel}/${gearbox}`
      );
      const data = await response.json();

      if (response.ok) {
        const newPowerHp = new Set(data.powerHpOptions);

        setPowerHPOptions((prevPowerHp) => {
          const updatedPowerHp = [...prevPowerHp, ...Array.from(newPowerHp)];
          return [...new Set(updatedPowerHp)];
        });
      } else {
        console.error("Error fetching power HP:", data.error);
        setPowerHPOptions([]);
      }
    } catch (error) {
      console.error("Error fetching power HP:", error);
      setPowerHPOptions([]);
    }
  }

  async function loadModifications(
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
      !fuel ||
      !gearbox ||
      !powerHp ||
      !bodytype
    )
      return;

    try {
      const response = await fetch(
        `${api}/carDetails/getModifications/${brandName}/${modelName}/${year}/${bodytype}/${fuel}/${gearbox}/${powerHp}`
      );
      const data = await response.json();

      if (response.ok) {
        setModificationOptions((prevModifications) => {
          const updatedModifications = [
            ...prevModifications,
            ...data.modifications,
          ];
          return [...new Set(updatedModifications)];
        });
      } else {
        console.error("Error fetching modifications:", data.error);
        setModificationOptions([]);
      }
    } catch (error) {
      console.error("Error fetching modifications:", error);
      setModificationOptions([]);
    }
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
    setPower(horsePower);
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

          <div>
            <div className="second-page-select-wrapper">
              <label htmlFor="body-type">Karosserieform</label>
              <div className="type-options">
                {bodyTypes.map((type, index) => (
                  <div
                    key={index}
                    className={`type-box ${
                      selectedBodyType === type ? "selected" : ""
                    }`}
                    onClick={() => selectBodyType(type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>

            {fuelTypes.length > 0 && (
              <div className="second-page-select-wrapper">
                <label htmlFor="fuel-type">Kraftstoff</label>
                <div className="type-options">
                  {fuelTypes.map((type, index) => (
                    <div
                      key={index}
                      className={`type-box ${
                        fuelType === type ? "selected" : ""
                      }`}
                      onClick={() => selectFuelType(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {gearboxTypes.length > 0 && (
              <div className="second-page-select-wrapper">
                <label htmlFor="gearbox">Getriebeart</label>
                <div className="type-options">
                  {gearboxTypes.map((type, index) => (
                    <div
                      key={index}
                      className={`type-box ${
                        gearbox === type ? "selected" : ""
                      }`}
                      onClick={() => selectGearbox(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            )}

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

            <Link to={!isButtonDisabled ? "/carImages" : "#"}>
              <button
                className={cx("submit", isButtonDisabled && "disabled")}
                type="button"
                disabled={isButtonDisabled}
              >
                Bewertung abschließen
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CarDetails;
