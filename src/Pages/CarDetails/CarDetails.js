import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { apiUrl } from "../../config/apiUrl";
import "./CarDetails.css";
import cx from "classnames";
import { scrollToWithOffset } from "../../helpers/scrollDown";

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

  const [submitClicked, setSubmitClicked] = useState(false);

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

  // Create refs for each section
  const bodyTypeRef = useRef(null);
  const fuelTypeRef = useRef(null);
  const gearboxRef = useRef(null);
  const powerRef = useRef(null);
  const modificationRef = useRef(null);
  const kilometerstandRef = useRef(null);
  const unfallschadenRef = useRef(null);
  const paintConditionLackRef = useRef(null);
  const paintConditionKarosserieRef = useRef(null);

  const navigate = useNavigate(); // Initialize the useNavigate hook

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
        // Override the previous body types with the new ones
        setBodyTypes(data.bodyTypes || []);

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
        // Override the previous fuel types with the new ones
        setFuelTypes(data.fuelTypes || []);
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
        // Override the previous gearbox types with the new ones
        setGearboxTypes(data.gearboxes || []);
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
        setPowerHPOptions(data.powerHpOptions || []); // Override previous powerHp options
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
        setModificationOptions(data.modifications || []); // Override the previous modifications
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

    // Delete everything if selected under BodyType

    setFuelType("");
    setGearbox("");
    setPower("");
    setModification("");
  };

  const selectFuelType = (fuelType) => {
    setFuelType(fuelType);
    loadGearbox(brandName, modelName, year, selectedBodyType, fuelType);

    // Delete everything if selected under fuel

    setGearbox("");
    setPower("");
    setModification("");
  };

  const selectGearbox = (gearboxType) => {
    setPower([]);
    setGearbox(gearboxType);
    loadPowerHp(
      brandName,
      modelName,
      year,
      selectedBodyType,
      fuelType,
      gearboxType
    );

    // Delete everything if selected under gearbox

    setPower("");
    setModification("");
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

    // Delete everything if selected under power

    setModification("");
  };

  const validateAndScrollToFirstInvalid = () => {
    setSubmitClicked(true);
    if (!selectedBodyType) {
      scrollToWithOffset(bodyTypeRef, -50);
    } else if (!fuelType) {
      scrollToWithOffset(fuelTypeRef, -50);
    } else if (!gearbox) {
      scrollToWithOffset(gearboxRef, -50);
    } else if (!power) {
      scrollToWithOffset(powerRef, -50);
    } else if (!modification) {
      scrollToWithOffset(modificationRef, -50);
    } else if (!kilometerstand) {
      scrollToWithOffset(kilometerstandRef, -50);
    } else if (unfallschaden === "") {
      scrollToWithOffset(unfallschadenRef, -50);
    } else if (!paintConditionLack) {
      scrollToWithOffset(paintConditionLackRef, -50);
    } else if (!paintConditionKarosserie) {
      scrollToWithOffset(paintConditionKarosserieRef, -50);
    } else {
      // If all fields are valid, navigate to the /carImages page
      navigate("/additionalInfo");
    }
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
            <div className="second-page-select-wrapper" ref={bodyTypeRef}>
              <div className="Title-wrapper">
                <label htmlFor="body-type">Karosserieform</label>
                {submitClicked && selectedBodyType === "" && (
                  <span className="required">*Erforderlich</span>
                )}
              </div>

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
                <div className="Title-wrapper">
                  <label htmlFor="fuel-type">Kraftstoff</label>
                  {submitClicked && fuelType === "" && (
                    <span className="required">*Erforderlich</span>
                  )}
                </div>
                <div className="type-options" ref={fuelTypeRef}>
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
                <div className="Title-wrapper">
                  <label htmlFor="gearbox">Getriebeart</label>
                  {submitClicked && gearbox === "" && (
                    <span className="required">*Erforderlich</span>
                  )}
                </div>
                <div className="type-options" ref={gearboxRef}>
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
              <div className="Title-wrapper">
                <label htmlFor="power" ref={powerRef}>
                  PS
                </label>
                {submitClicked && power === "" && (
                  <span className="required">*Erforderlich</span>
                )}
              </div>
              <select
                id="power"
                name="power"
                value={power}
                onChange={(e) => selectHorsePower(e.target.value)}
                required
                disabled={fuelType === ""}
              >
                <option value="">Bitte auswählen</option>
                {powerHPOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="second-page-select-wrapper">
              <div className="Title-wrapper">
                <label htmlFor="modification" ref={modificationRef}>
                  Modellvariante
                </label>
                {submitClicked && modification === "" && (
                  <span className="required">*Erforderlich</span>
                )}
              </div>
              <select
                id="modification"
                name="modification"
                value={modification}
                onChange={(e) => setModification(e.target.value)}
                required
                disabled={power === ""}
              >
                <option value="">Bitte auswählen</option>
                {modificationOptions.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="second-page-input-wrapper">
              <div className="Title-wrapper">
                <label htmlFor="kilometerstand" ref={kilometerstandRef}>
                  Kilometerstand
                </label>
                {submitClicked && kilometerstand === "" && (
                  <span className="required">*Erforderlich</span>
                )}
              </div>
              <div className="km-input-container">
                <input
                  type="number" // changed to number
                  id="kilometerstand"
                  name="kilometerstand"
                  placeholder="zB: 75000"
                  value={kilometerstand}
                  onChange={(e) => setKilometerstand(e.target.value)}
                  required
                  min="0" // prevents negative values
                  step="1" // restricts to whole numbers
                  className="no-arrows"
                />
                <span className="km-suffix">km</span>
              </div>
            </div>

            {/* Vorhandene Felder */}
            <div className="form-group">
              <div className="Title-wrapper">
                <label ref={unfallschadenRef}>
                  Hatte dein Auto jemals einen Unfallschaden?
                </label>
                {submitClicked && unfallschaden === "" && (
                  <span className="required">*Erforderlich</span>
                )}
              </div>
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
              <div className="Title-wrapper">
                <label>
                  Hast du ein Serviceheft (oder einen digitalen
                  Servicenachweis)?
                </label>
                {submitClicked && serviceHeft === "" && (
                  <span className="required">*Erforderlich</span>
                )}
              </div>
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
              <div className="Title-wrapper">
                <label
                  htmlFor="paint-condition-lack"
                  ref={paintConditionLackRef}
                >
                  Lackzustand:
                </label>

                {submitClicked && paintConditionLack === "" && (
                  <span className="required">*Erforderlich</span>
                )}
              </div>
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
              <div className="Title-wrapper">
                <label
                  htmlFor="paint-condition-karosserie"
                  ref={paintConditionKarosserieRef}
                  className="label-title"
                >
                  Karosserie / Mechanik / Technik
                </label>
                {submitClicked && paintConditionKarosserie === "" && (
                  <span className="required">*Erforderlich</span>
                )}
              </div>
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

            <button
              className={cx("submit", isButtonDisabled && "disabled")}
              type="button"
              onClick={validateAndScrollToFirstInvalid}
            >
              Bewertung abschließen
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CarDetails;
