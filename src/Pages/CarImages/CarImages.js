import React, { useState, useEffect, useRef, useContext } from "react";
import { apiUrl } from "../../config/apiUrl";
import "./CarImages.css";
import cx from "classnames";
import { BarLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { scrollToWithOffset } from "../../helpers/scrollDown";
import { CarContext } from "../../context/CarContext";

function CarImages() {
  const {
    selectedBrand,
    selectedModel,
    selectedYear,
    selectedBodyType,
    fuelType,
    gearbox,
    power,
    modification,
    kilometerstand,
    unfallschaden,
    serviceHeft,
    completedAndDocumentedMaintenances,
    isDamageRepaired,
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
    conditionInside,
    hasDamagesAndWear,
    conditionOutside,
    hasWarningLights,
    isEngineInGoodCondition,
    isTransmissionInGoodCondition,
    isSteeringInGoodCondition,
    isSuspensionInGoodCondition,
    areBrakesInGoodCondition,
    isAirConditioningInGoodCondition,
    FIN,
    selectedDamages,
  } = useContext(CarContext);

  // State to manage the preview images
  const [imagePreviews, setImagePreviews] = useState({
    front: null,
  });

  // State to manage the preview images for damages
  const [damagePreviews, setDamagePreviews] = useState({});

  // Initialize damagePreviews based on selectedDamages
  useEffect(() => {
    const previews = {};
    selectedDamages.forEach((damage) => {
      previews[damage] = null; // Initially, no image for the damage
    });
    setDamagePreviews(previews);
  }, [selectedDamages]);

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

  const allImagesValid =
    Object.values(imagePreviews).every((image) => image !== null) &&
    Object.values(damagePreviews).every((image) => image !== null);

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

  const previewImage = (event, previewKey) => {
    const file = event.target.files[0];

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (file && !allowedTypes.includes(file.type)) {
      alert("Please upload a valid image format (JPEG, JPG, PNG, WEBP).");
      event.target.value = ""; // Reset the input
      return;
    }

    // Store the file object in the state and generate a preview URL for display
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreviews((prev) => ({
        ...prev,
        [previewKey]: {
          file, // Store the actual file object
          preview: e.target.result, // Store the base64 string for preview
        },
      }));
    };

    if (file) {
      reader.readAsDataURL(file); // Read the image file as data URL for preview
    }
  };

  const previewImageDamages = (event, previewKey) => {
    const file = event.target.files[0];

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (file && !allowedTypes.includes(file.type)) {
      alert("Please upload a valid image format (JPEG, JPG, PNG, WEBP).");
      event.target.value = ""; // Reset the input
      return;
    }

    // Store the file object in the state and generate a preview URL for display
    const reader = new FileReader();
    reader.onload = (e) => {
      setDamagePreviews((prev) => ({
        ...prev,
        [previewKey]: {
          file, // Store the actual file object
          preview: e.target.result, // Store the base64 string for preview
        },
      }));
    };

    if (file) {
      reader.readAsDataURL(file); // Read the image file as data URL for preview
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

    // Append car details (same as before)
    // Car.js
    formData.append("selectedBrand", selectedBrand);
    formData.append("selectedModel", selectedModel);
    formData.append("selectedYear", selectedYear);
    // CarDetails.js
    formData.append("selectedBodyType", selectedBodyType);
    formData.append("fuelType", fuelType);
    formData.append("gearbox", gearbox);
    formData.append("power", power);
    formData.append("modification", modification);
    formData.append("kilometerstand", kilometerstand);
    formData.append("unfallschaden", unfallschaden);
    formData.append("serviceHeft", serviceHeft);
    formData.append(
      "completedAndDocumentedMaintenances",
      completedAndDocumentedMaintenances
    );
    formData.append("isDamageRepaired", isDamageRepaired);
    formData.append("paintConditionLack", paintConditionLack);
    formData.append("paintConditionKarosserie", paintConditionKarosserie);
    // Additional notes (if not empty)
    if (additionalNotes !== "") {
      formData.append("additionalNotes", additionalNotes);
    }

    //CarAdditionalInfo.js

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
    formData.append("hasDamagesAndWear", hasDamagesAndWear);
    formData.append("selectedDamages", selectedDamages);
    formData.append("conditionInside", conditionInside);
    formData.append("conditionOutside", conditionOutside);
    formData.append("hasWarningLights", hasWarningLights);
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

    //CarImages.js

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("postalCode", postalCode);
    formData.append("priceExpectation", priceExpectation);
    formData.append("sellTime", sellTime);

    // Append images from imagePreviews (front, back, side)
    Object.keys(imagePreviews).forEach((key) => {
      if (imagePreviews[key] && imagePreviews[key].file) {
        // Ensure we're appending the file object, not the preview
        formData.append(key, imagePreviews[key].file); // Append the actual File object
      }
    });

    Object.keys(damagePreviews).forEach((key) => {
      if (damagePreviews[key] && damagePreviews[key].file) {
        // Ensure we're appending the file object, not the preview
        formData.append(key, damagePreviews[key].file); // Append the actual File object
      }
    });
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
          <label htmlFor="Exterior-images" className="title-label">
            Füge ein Bild des Außenbereichs deines Autos hinzu
          </label>

          <div className="upload-section">
            {/* Front Photo */}
            <div className="photo-upload-box" ref={imagesRef}>
              <label htmlFor="front-photo">
                <div className="upload-box-content">
                  {imagePreviews.front && imagePreviews.front.preview ? ( // Check if preview exists
                    <>
                      <img
                        id="front-photo-preview"
                        className="uploaded"
                        src={imagePreviews.front.preview} // Display the preview image
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
                    <span>Dein Auto</span> // Placeholder text
                  )}
                  <input
                    type="file"
                    className="input-image"
                    id="front-photo"
                    accept="image/jpeg, image/jpg, image/png, image/webp" // Specify accepted formats
                    onChange={(event) => previewImage(event, "front")} // Handle preview and file selection
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="photo-upload-container">
          <label htmlFor="Exterior-images" className="title-label">
            Füge Bilder der Schäden in deinem Auto ein
          </label>
          <div className="upload-section">
            {/* Dynamically map through selectedDamages and create upload boxes */}
            {selectedDamages.map((damage) => (
              <div key={damage} className="photo-upload-box">
                <label htmlFor={`${damage}-photo`}>
                  <div className="upload-box-content">
                    {damagePreviews[damage] &&
                    damagePreviews[damage].preview ? ( // Access the preview property
                      <>
                        <img
                          id={`${damage}-photo-preview`}
                          className="uploaded"
                          src={damagePreviews[damage].preview} // Show preview from the preview property
                          alt={damage}
                        />
                        <button
                          type="button"
                          className="delete-icon"
                          onClick={() => removeImage(damage, `${damage}-photo`)} // Remove image handler
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <span>{damage}</span> // Show damage type as placeholder
                    )}
                    <input
                      type="file"
                      id={`${damage}-photo`}
                      accept="image/jpeg, image/jpg, image/png, image/webp" // Accepted formats
                      onChange={(event) => previewImageDamages(event, damage)} // Preview image handler
                    />
                  </div>
                </label>
              </div>
            ))}
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
