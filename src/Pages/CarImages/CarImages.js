import React, { useState } from "react";
import { apiUrl } from "../../config/apiUrl";
import "./CarImages.css";

function CarImages({
  brandName,
  modelName,
  year,
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
}) {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState(""); // Postal code state
  const [priceExpectation, setPriceExpectation] = useState(""); // Price expectation state
  const [sellTime, setSellTime] = useState(""); // Sell time state

  // State to manage the preview images
  const [imagePreviews, setImagePreviews] = useState({
    front: null,
    back: null,
    side: null,
    interiorFront: null,
    interiorBack: null,
    dashboard: null,
  });

  // Function to preview the image
  const previewImage = (event, previewKey) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImagePreviews((prev) => ({
        ...prev,
        [previewKey]: e.target.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file); // Read the image file as data URL
    }
  };

  // Function to remove the image preview and reset the file input
  const removeImage = (previewKey, inputId) => {
    setImagePreviews((prev) => ({
      ...prev,
      [previewKey]: null,
    }));

    const fileInput = document.getElementById(inputId);
    fileInput.value = ""; // Reset the file input
  };

  const api = apiUrl();

  // Function to handle form submission (dummy for now)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    // Append car details
    formData.append("brandName", brandName);
    formData.append("modelName", modelName);
    formData.append("year", year);
    formData.append("selectedBodyType", selectedBodyType);
    formData.append("fuelType", fuelType);
    formData.append("gearbox", gearbox);
    formData.append("power", power);
    formData.append("modification", modification);
    formData.append("kilometerstand", kilometerstand);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("postalCode", postalCode);
    formData.append("priceExpectation", priceExpectation);
    formData.append("sellTime", sellTime);
    formData.append("unfallschaden", unfallschaden);
    formData.append("serviceHeft", serviceHeft);
    formData.append("paintConditionLack", paintConditionLack);
    formData.append("paintConditionKarosserie", paintConditionKarosserie);
    formData.append("additionalNotes", additionalNotes);

    // Append images (ensure these inputs are files in the state)
    if (document.getElementById("front-photo").files[0]) {
      formData.append("Vorne", document.getElementById("front-photo").files[0]);
    }
    if (document.getElementById("back-photo").files[0]) {
      formData.append("Hinten", document.getElementById("back-photo").files[0]);
    }
    if (document.getElementById("side-photo").files[0]) {
      formData.append("Seite", document.getElementById("side-photo").files[0]);
    }
    if (document.getElementById("interior-front-photo").files[0]) {
      formData.append(
        "interiorFront",
        document.getElementById("interior-front-photo").files[0]
      );
    }
    if (document.getElementById("interior-back-photo").files[0]) {
      formData.append(
        "interiorBack",
        document.getElementById("interior-back-photo").files[0]
      );
    }
    if (document.getElementById("interior-dashboard-photo").files[0]) {
      formData.append(
        "dashboard",
        document.getElementById("interior-dashboard-photo").files[0]
      );
    }

    try {
      const response = await fetch(`${api}/cars/uploadCar`, {
        method: "POST",
        body: formData, // Send the formData with images and other fields
      });

      if (response.ok) {
        alert("Car data uploaded successfully!");
      } else {
        alert("Error uploading car data");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="form-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: "75%" }}></div>
      </div>
      <p className="estimated-time">
        Geschätzte Zeit bis zur Fertigstellung: 1 Minute
      </p>

      <form
        id="third-step-form"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        {/* Exterior Photos */}
        <div className="photo-upload-container">
          <h2>Wie sieht dein Auto von außen aus?</h2>
          <p>
            Um deinen Verkaufspreis so genau wie möglich zu bestimmen, benötigen
            wir einige Fotos vom Außenraum deines Autos. Bitte lade die
            folgenden Bilder hoch.
          </p>

          <div className="upload-section">
            {/* Front Photo */}
            <div className="photo-upload-box">
              <label htmlFor="front-photo">
                <div className="upload-box-content">
                  {imagePreviews.front ? (
                    <>
                      <img
                        id="front-photo-preview"
                        className="uploaded"
                        src={imagePreviews.front}
                        alt="Vorne"
                        name="Vorne"
                      />
                      <button
                        type="button"
                        className="delete-icon"
                        onClick={() => removeImage("front", "front-photo")}
                      >
                        ×
                      </button>
                    </>
                  ) : (
                    <span>Vorne</span>
                  )}
                  <input
                    type="file"
                    className="input-image"
                    id="front-photo"
                    accept="image/*"
                    onChange={(event) => previewImage(event, "front")}
                  />
                </div>
              </label>
            </div>

            {/* Back Photo */}
            <div className="photo-upload-box">
              <label htmlFor="back-photo">
                <div className="upload-box-content">
                  {imagePreviews.back ? (
                    <>
                      <img
                        id="back-photo-preview"
                        className="uploaded"
                        src={imagePreviews.back}
                        alt="Hinten"
                        name="Hinten"
                      />
                      <button
                        type="button"
                        className="delete-icon"
                        onClick={() => removeImage("back", "back-photo")}
                      >
                        ×
                      </button>
                    </>
                  ) : (
                    <span>Hinten</span>
                  )}
                  <input
                    type="file"
                    id="back-photo"
                    className="input-image"
                    accept="image/*"
                    onChange={(event) => previewImage(event, "back")}
                  />
                </div>
              </label>
            </div>

            {/* Side Photo */}
            <div className="photo-upload-box">
              <label htmlFor="side-photo">
                <div className="upload-box-content">
                  {imagePreviews.side ? (
                    <>
                      <img
                        id="side-photo-preview"
                        className="uploaded"
                        src={imagePreviews.side}
                        alt="Seite"
                        name="Seite"
                      />
                      <button
                        type="button"
                        className="delete-icon"
                        onClick={() => removeImage("side", "side-photo")}
                      >
                        ×
                      </button>
                    </>
                  ) : (
                    <span>Seite</span>
                  )}
                  <input
                    type="file"
                    id="side-photo"
                    accept="image/*"
                    onChange={(event) => previewImage(event, "side")}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Interior Photos */}
        <div className="photo-upload-container">
          <h2>Wie sieht dein Auto von innen aus?</h2>
          <p>
            Um deinen Verkaufspreis so genau wie möglich zu bestimmen, benötigen
            wir einige Fotos vom Innenraum deines Autos. Bitte lade die
            folgenden Bilder hoch.
          </p>

          <div className="upload-section">
            {/* Interior Front Photo */}
            <div className="photo-upload-box">
              <label htmlFor="interior-front-photo">
                <div className="upload-box-content">
                  {imagePreviews.interiorFront ? (
                    <>
                      <img
                        id="interior-front-photo-preview"
                        className="uploaded"
                        src={imagePreviews.interiorFront}
                        alt="Vordersitze"
                        name="interiorFront"
                      />
                      <button
                        type="button"
                        className="delete-icon"
                        onClick={() =>
                          removeImage("interiorFront", "interior-front-photo")
                        }
                      >
                        ×
                      </button>
                    </>
                  ) : (
                    <span>Vordersitze</span>
                  )}
                  <input
                    type="file"
                    id="interior-front-photo"
                    accept="image/*"
                    onChange={(event) => previewImage(event, "interiorFront")}
                  />
                </div>
              </label>
            </div>

            {/* Interior Back Photo */}
            <div className="photo-upload-box">
              <label htmlFor="interior-back-photo">
                <div className="upload-box-content">
                  {imagePreviews.interiorBack ? (
                    <>
                      <img
                        id="interior-back-photo-preview"
                        className="uploaded"
                        src={imagePreviews.interiorBack}
                        alt="Rücksitzbank"
                        name="interiorBack"
                      />
                      <button
                        type="button"
                        className="delete-icon"
                        onClick={() =>
                          removeImage("interiorBack", "interior-back-photo")
                        }
                      >
                        ×
                      </button>
                    </>
                  ) : (
                    <span>Rücksitzbank</span>
                  )}
                  <input
                    type="file"
                    id="interior-back-photo"
                    accept="image/*"
                    onChange={(event) => previewImage(event, "interiorBack")}
                  />
                </div>
              </label>
            </div>

            {/* Dashboard Photo */}
            <div className="photo-upload-box">
              <label htmlFor="interior-dashboard-photo">
                <div className="upload-box-content">
                  {imagePreviews.dashboard ? (
                    <>
                      <img
                        id="interior-dashboard-photo-preview"
                        className="uploaded"
                        src={imagePreviews.dashboard}
                        alt="Tacho"
                        name="dashboard"
                      />
                      <button
                        type="button"
                        className="delete-icon"
                        onClick={() =>
                          removeImage("dashboard", "interior-dashboard-photo")
                        }
                      >
                        ×
                      </button>
                    </>
                  ) : (
                    <span>Tacho</span>
                  )}
                  <input
                    type="file"
                    id="interior-dashboard-photo"
                    accept="image/*"
                    onChange={(event) => previewImage(event, "dashboard")}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="second-page-input-wrapper">
          <label htmlFor="first-name">Vorname</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Vorname"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="second-page-input-wrapper">
          <label htmlFor="last-name">Nachname</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Nachname"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="phone-input-wrapper">
          <label htmlFor="phone-number">Telefonnummer</label>
          <small className="third-step-subtitle">
            Wir werden sie nur verwenden, um dir deinen Verkaufspreis per
            SMS/WhatsApp zu schicken. Sie wird nicht an Dritte weitergegeben.
          </small>
          <div className="phone-input-container">
            <div className="country-code">
              <span className="flag">🇦🇹</span>
              <span className="code">+43</span>
            </div>
            <input
              type="text"
              id="phone-number"
              name="phone-number"
              placeholder="6767519696"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="second-page-input-wrapper">
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="zB: maxmustermann@gmail.de"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="second-page-input-wrapper">
          <label htmlFor="postal-code">Postleitzahl</label>
          <small className="third-step-subtitle">
            Wir werden sie verwenden, um dir einen besseren Kundenservice zu
            bieten. Sie wird keinen Einfluss auf deinen Preis haben.
          </small>
          <input
            type="text"
            id="postal-code"
            name="postal-code"
            placeholder="zB: 12345"
            onChange={(e) => setPostalCode(e.target.value)} // Handle postal code state
            required
          />
        </div>

        <div className="second-page-input-wrapper">
          <label htmlFor="price-expectation">Preisvorstellung (optional)</label>
          <small className="third-step-subtitle">
            Dies hat keinen Einfluss auf deinen endgültigen Verkaufspreis.
          </small>
          <input
            type="text"
            id="price-expectation"
            name="price-expectation"
            placeholder="zB: 15000"
            onChange={(e) => setPriceExpectation(e.target.value)} // Handle price expectation state
          />
        </div>

        <div className="second-page-select-wrapper">
          <label htmlFor="sell-time">Wann möchtest du verkaufen?</label>
          <select
            id="sell-time"
            name="sell-time"
            value={sellTime} // Bind the sell time state to the select input
            onChange={(e) => setSellTime(e.target.value)} // Handle sell time state
            required
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            <option value="Sofort">Schnellstmöglich</option>
            <option value="2-wochen">Innerhalb 4 Wochen</option>
            <option value="4-wochen">Innerhalb 3 Monaten</option>
          </select>
        </div>

        <button type="submit" className="button-abschließen">
          Bewertung abschließen{" "}
          <i className="fas fa-spinner fa-spin" style={{ display: "none" }}></i>
        </button>
      </form>
    </div>
  );
}

export default CarImages;
