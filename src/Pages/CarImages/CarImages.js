import React, { useState, useEffect, useRef, useContext } from "react";
import { apiUrl } from "../../config/apiUrl";
import "./CarImages.css";
import cx from "classnames";
import { BarLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { scrollToWithOffset } from "../../helpers/scrollDown";
import { CarContext } from "../../context/CarContext";

function CarImages() {
  // State variables for form inputs

  const {
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
    //daten von dritte seite
    carKeysAmount,
    additionalTires,
    pickerl,
    sellerType,
    importedCar,
    isLeasingOrFinanced,
    carOwnerAmount,
    carColorOutside,
    carColorSeats,
    isDriveable,
    hadCrash,
    conditionInside,
    conditionOutside,
    hasWarningLights,
    hasDamages,
    isEngineInGoodCondition,
    isTransmissionInGoodCondition,
    isSteeringInGoodCondition,
    isSuspensionInGoodCondition,
    areBrakesInGoodCondition,
    isAirConditioningInGoodCondition,
    FIN,
    selectedMonth,
    zugelassenSelectedYear,
  } = useContext(CarContext);

  // State to manage the preview images
  const [imagePreviews, setImagePreviews] = useState({
    front: null,
    back: null,
    side: null,
    interiorFront: null,
    interiorBack: null,
    dashboard: null,
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState(""); // Postal code state
  const [priceExpectation, setPriceExpectation] = useState(""); // Price expectation state
  const [sellTime, setSellTime] = useState(""); // Sell time state
  const [isLoading, setIsLoading] = useState(false);

  const [submitClicked, setSubmitClicked] = useState(false);

  // Create refs for each section

  const imagesRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const postalCodeRef = useRef(null);
  const priceExpectationRef = useRef(null);
  const sellTimeRef = useRef(null);

  const allImagesValid = Object.values(imagePreviews).every(
    (image) => image !== null
  );

  const navigate = useNavigate(); // Initialize navigate

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      phoneNumber !== "" &&
      email !== "" &&
      postalCode !== "" &&
      priceExpectation !== "" &&
      sellTime !== "" &&
      imagePreviews.front !== null &&
      imagePreviews.back !== null &&
      imagePreviews.side !== null &&
      imagePreviews.interiorFront !== null &&
      imagePreviews.interiorBack !== null &&
      imagePreviews.dashboard !== null
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    firstName,
    lastName,
    phoneNumber,
    email,
    postalCode,
    priceExpectation,
    sellTime,
    imagePreviews.front,
    imagePreviews.back,
    imagePreviews.side,
    imagePreviews.interiorFront,
    imagePreviews.interiorBack,
    imagePreviews.dashboard,
  ]);

  // Function to preview the image
  const previewImage = (event, previewKey) => {
    const file = event.target.files[0];

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (file && !allowedTypes.includes(file.type)) {
      alert("Please upload a valid image format (JPEG, JPG, PNG, WEBP).");
      event.target.value = ""; // Reset the input
      return;
    }

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

  const validateAndScrollToFirstInvalid = () => {
    setSubmitClicked(true);

    if (!allImagesValid) {
      scrollToWithOffset(imagesRef, -50);
      return false;
    } else if (firstName === "") {
      scrollToWithOffset(firstNameRef, -50);
      return false;
    } else if (lastName === "") {
      scrollToWithOffset(lastNameRef, -50);
      return false;
    } else if (phoneNumber === "") {
      scrollToWithOffset(phoneNumberRef, -50);
      return false;
    } else if (email === "") {
      scrollToWithOffset(emailRef, -50);
      return false;
    } else if (postalCode === "") {
      scrollToWithOffset(postalCodeRef, -50);
      return false;
    } else if (priceExpectation === "") {
      scrollToWithOffset(priceExpectationRef, -50);
      return false;
    } else if (sellTime === "") {
      scrollToWithOffset(sellTimeRef, -50);
      return false;
    }

    return true; // If all validations passed
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the validation passes
    const isValid = validateAndScrollToFirstInvalid();

    if (!isValid) {
      return; // If validation failed, do not proceed
    }
    setIsLoading(true);
    setIsButtonDisabled(true);

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

    // Append additional values
    formData.append("carKeysAmount", carKeysAmount);
    formData.append("additionalTires", additionalTires);
    formData.append("pickerl", pickerl);
    formData.append("sellerType", sellerType);
    formData.append("importedCar", importedCar);
    formData.append("isLeasingOrFinanced", isLeasingOrFinanced);
    formData.append("carOwnerAmount", carOwnerAmount);
    formData.append("carColorOutside", carColorOutside);
    formData.append("carColorSeats", carColorSeats);
    formData.append("isDriveable", isDriveable);
    formData.append("hadCrash", hadCrash);
    formData.append("conditionInside", conditionInside);
    formData.append("conditionOutside", conditionOutside);
    formData.append("hasWarningLights", hasWarningLights);
    formData.append("hasDamages", hasDamages);
    formData.append("isEngineInGoodCondition", isEngineInGoodCondition);
    formData.append(
      "isTransmissionInGoodCondition",
      isTransmissionInGoodCondition
    );
    formData.append("isSteeringInGoodCondition", isSteeringInGoodCondition);
    formData.append("isSuspensionInGoodCondition", isSuspensionInGoodCondition);
    formData.append("areBrakesInGoodCondition", areBrakesInGoodCondition);
    formData.append(
      "isAirConditioningInGoodCondition",
      isAirConditioningInGoodCondition
    );
    formData.append("FIN", FIN);
    formData.append("selectedMonth", selectedMonth);
    formData.append("zugelassenSelectedYear", zugelassenSelectedYear);

    // Additional notes (if not empty)
    additionalNotes !== "" &&
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
        setIsLoading(false);
        setIsButtonDisabled(false);
        navigate("/success"); // Redirect to /success
      } else {
        alert("Error uploading car data");
        setIsLoading(false);
        setIsButtonDisabled(false);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="form-container third-page-wrapper">
      <div className="progress-bar">
        <div className="progress" style={{ width: "75%" }}></div>
      </div>
      <p className="estimated-time">
        Geschätzte Zeit bis zur Fertigstellung: 1 Minute
      </p>

      {submitClicked && !allImagesValid && (
        <span className="required">*Erforderlich</span>
      )}

      <form id="third-step-form" method="POST" encType="multipart/form-data">
        {/* Exterior Photos */}
        <div className="photo-upload-container">
          <div className="upload-section">
            {/* Front Photo */}
            <div className="photo-upload-box" ref={imagesRef}>
              <label htmlFor="front-photo">
                <div className="upload-box-content">
                  {imagePreviews.front ? (
                    <>
                      <img
                        id="front-photo-preview"
                        className="uploaded"
                        src={imagePreviews.front}
                        alt="Vorne"
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
                    accept="image/jpeg, image/jpg, image/png, image/webp" // Specify accepted formats
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
                    accept="image/jpeg, image/jpg, image/png, image/webp" // Specify accepted formats
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
                    accept="image/jpeg, image/jpg, image/png, image/webp" // Specify accepted formats
                    onChange={(event) => previewImage(event, "side")}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Interior Photos */}
        <div className="photo-upload-container">
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
                    accept="image/jpeg, image/jpg, image/png, image/webp" // Specify accepted formats
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
                    accept="image/jpeg, image/jpg, image/png, image/webp" // Specify accepted formats
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
                    accept="image/jpeg, image/jpg, image/png, image/webp" // Specify accepted formats
                    onChange={(event) => previewImage(event, "dashboard")}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="second-page-input-wrapper">
          <div className="Title-wrapper" ref={firstNameRef}>
            <label htmlFor="first-name">Vorname</label>
            {submitClicked && firstName === "" && (
              <span className="required">*Erforderlich</span>
            )}
          </div>
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
          <div className="Title-wrapper" ref={lastNameRef}>
            <label htmlFor="last-name">Nachname</label>
            {submitClicked && lastName === "" && (
              <span className="required">*Erforderlich</span>
            )}
          </div>
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
          <div className="Title-wrapper" ref={phoneNumberRef}>
            <label htmlFor="phone-number">Telefonnummer</label>
            {submitClicked && phoneNumber === "" && (
              <span className="required">*Erforderlich</span>
            )}
          </div>
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
              type="number" // changed to number
              id="phone-number"
              name="phone-number"
              placeholder="6767519696"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              min="0" // prevents negative values
              step="1" // restricts to whole numbers
              className="no-arrows phone-input"
            />
          </div>
        </div>

        <div className="second-page-input-wrapper">
          <div className="Title-wrapper" ref={emailRef}>
            <label htmlFor="email">E-Mail-Adresse</label>{" "}
            {submitClicked && email === "" && (
              <span className="required">*Erforderlich</span>
            )}
          </div>
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
          <div className="Title-wrapper" ref={postalCodeRef}>
            <label htmlFor="postal-code">Postleitzahl</label>
            {submitClicked && postalCode === "" && (
              <span className="required">*Erforderlich</span>
            )}
          </div>
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
          <div className="Title-wrapper" ref={priceExpectationRef}>
            <label htmlFor="price-expectation">Preisvorstellung</label>
            {submitClicked && priceExpectation === "" && (
              <span className="required">*Erforderlich</span>
            )}
          </div>
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
          <div className="Title-wrapper" ref={sellTimeRef}>
            <label htmlFor="sell-time">Wann möchtest du verkaufen?</label>
            {submitClicked && sellTime === "" && (
              <span className="required">*Erforderlich</span>
            )}
          </div>
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

        <button
          className={cx("submit transition", isButtonDisabled && "disabled")}
          type="submit"
          onClick={handleSubmit}
        >
          {isLoading ? (
            <BarLoader
              color="#fff"
              loading={isLoading}
              size={5}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <span>Bewertung abschließen</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default CarImages;
