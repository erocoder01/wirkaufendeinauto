import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CarAdditionalInfo.css";

import { scrollToWithOffset } from "../../helpers/scrollDown";
import { colorOutsideOptions, seatColorOptions } from "./carColors";
import RadioForm from "../../components/Form/RadioForm";
import TextForm from "../../components/Form/TextForm";
import cx from "classnames";
import { CarContext } from "../../context/CarContext";

function CarAdditionalInfo() {
  const {
    carKeysAmount,
    setCarKeyAmount,
    additionalTires,
    setAdditionalTires,
    pickerl,
    setPickerl,
    sellerType,
    setSellerType,
    importedCar,
    setImportedCar,
    isLeasingOrFinanced,
    setIsLeasingOrFinanced,
    carOwnerAmount,
    setCarOwnerAmount,
    carColorOutside,
    setCarColorOutside,
    carColorSeats,
    setCarColorSeats,
    isDriveable,
    setIsDriveable,
    conditionInside,
    setConditionInside,
    conditionOutside,
    setConditionOutside,
    hasWarningLights,
    setHasWarningLights,
    hasDamages,
    setHasDamages,
    isEngineInGoodCondition,
    setIsEngineInGoodCondition,
    isTransmissionInGoodCondition,
    setIsTransmissionInGoodCondition,
    isSteeringInGoodCondition,
    setIsSteeringInGoodCondition,
    isSuspensionInGoodCondition,
    setIsSuspensionInGoodCondition,
    areBrakesInGoodCondition,
    setAreBrakesInGoodCondition,
    isAirConditioningInGoodCondition,
    setIsAirConditioningInGoodCondition,
    FIN,
    setFIN,
  } = useContext(CarContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (
      carKeysAmount !== "" &&
      additionalTires !== "" &&
      pickerl !== "" &&
      sellerType !== "" &&
      importedCar !== "" &&
      isLeasingOrFinanced !== "" &&
      carOwnerAmount !== "" &&
      carColorOutside !== "" &&
      carColorSeats !== "" &&
      isDriveable !== "" &&
      conditionInside !== "" &&
      conditionOutside !== "" &&
      hasWarningLights !== "" &&
      hasDamages !== "" &&
      isEngineInGoodCondition !== "" &&
      isTransmissionInGoodCondition !== "" &&
      isSteeringInGoodCondition !== "" &&
      isSuspensionInGoodCondition !== "" &&
      areBrakesInGoodCondition !== "" &&
      isAirConditioningInGoodCondition !== "" &&
      FIN !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
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
  ]);

  // Create refs for each section

  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Creating refs
  const carKeysAmountRef = useRef(null);
  const additionalTiresRef = useRef(null);
  const pickerlRef = useRef(null);
  const sellerTypeRef = useRef(null);
  const importedCarRef = useRef(null);
  const isLeasingOrFinancedRef = useRef(null);
  const carOwnerAmountRef = useRef(null);
  const carColorOutsideRef = useRef(null);
  const carColorSeatsRef = useRef(null);
  const isDriveableRef = useRef(null);
  const conditionInsideRef = useRef(null);
  const conditionOutsideRef = useRef(null);
  const hasWarningLightsRef = useRef(null);
  const hasDamagesRef = useRef(null);
  const isEngineInGoodConditionRef = useRef(null);
  const isTransmissionInGoodConditionRef = useRef(null);
  const isSteeringInGoodConditionRef = useRef(null);
  const isSuspensionInGoodConditionRef = useRef(null);
  const areBrakesInGoodConditionRef = useRef(null);
  const isAirConditioningInGoodConditionRef = useRef(null);
  const FINRef = useRef(null);

  const validateAndScrollToFirstInvalid = () => {
    setSubmitClicked(true);

    if (!carKeysAmount) {
      scrollToWithOffset(carKeysAmountRef, -50);
    } else if (!additionalTires) {
      scrollToWithOffset(additionalTiresRef, -50);
    } else if (!pickerl) {
      scrollToWithOffset(pickerlRef, -50);
    } else if (!sellerType) {
      scrollToWithOffset(sellerTypeRef, -50);
    } else if (!importedCar) {
      scrollToWithOffset(importedCarRef, -50);
    } else if (!isLeasingOrFinanced) {
      scrollToWithOffset(isLeasingOrFinancedRef, -50);
    } else if (!carOwnerAmount) {
      scrollToWithOffset(carOwnerAmountRef, -50);
    } else if (!carColorOutside) {
      scrollToWithOffset(carColorOutsideRef, -50);
    } else if (!carColorSeats) {
      scrollToWithOffset(carColorSeatsRef, -50);
    } else if (!isDriveable) {
      scrollToWithOffset(isDriveableRef, -50);
    } else if (!conditionInside) {
      scrollToWithOffset(conditionInsideRef, -50);
    } else if (!conditionOutside) {
      scrollToWithOffset(conditionOutsideRef, -50);
    } else if (!hasWarningLights) {
      scrollToWithOffset(hasWarningLightsRef, -50);
    } else if (!hasDamages) {
      scrollToWithOffset(hasDamagesRef, -50);
    } else if (!isEngineInGoodCondition) {
      scrollToWithOffset(isEngineInGoodConditionRef, -50);
    } else if (!isTransmissionInGoodCondition) {
      scrollToWithOffset(isTransmissionInGoodConditionRef, -50);
    } else if (!isSteeringInGoodCondition) {
      scrollToWithOffset(isSteeringInGoodConditionRef, -50);
    } else if (!isSuspensionInGoodCondition) {
      scrollToWithOffset(isSuspensionInGoodConditionRef, -50);
    } else if (!areBrakesInGoodCondition) {
      scrollToWithOffset(areBrakesInGoodConditionRef, -50);
    } else if (!isAirConditioningInGoodCondition) {
      scrollToWithOffset(isAirConditioningInGoodConditionRef, -50);
    } else if (!FIN) {
      scrollToWithOffset(FINRef, -50);
    } else {
      // If all fields are valid, navigate to the /carImages page
      navigate("/carImages");
    }
  };

  // First 4 colors outside
  // Map the names beforehand
  const firstFourColorsNames = colorOutsideOptions
    .slice(0, 4)
    .map((color) => color.name);
  const otherColorsNames = colorOutsideOptions
    .slice(4)
    .map((color) => color.name);

  // First 4 colors outside
  // Map the names beforehand
  const firstFourColorsSeatsNames = seatColorOptions
    .slice(0, 4)
    .map((color) => color.name);
  const otherColorsSeatsNames = seatColorOptions
    .slice(4)
    .map((color) => color.name);

  return (
    <div className="second-page-background">
      <main>
        <div className="form-container">
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
          <p className="estimated-time">
            Geschätzte Zeit bis zur Fertigstellung: 5 Minuten
          </p>
          <div>
            <RadioForm
              title="Wie viele Autoschlüssel besitzt du?"
              value={carKeysAmount}
              setValue={setCarKeyAmount}
              name="carKeyAmount"
              required={true}
              submitClicked={submitClicked}
              options={["1", "2+"]}
              ref={carKeysAmountRef}
            />

            <RadioForm
              title="Hast du einen zweiten Satz Räder und/oder Reifen?"
              value={additionalTires}
              setValue={setAdditionalTires}
              name="tireAmount"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={additionalTiresRef}
            />

            <RadioForm
              title="Wurde das Pickerl in den letzten 6 Monaten erneuert?"
              value={pickerl}
              setValue={setPickerl}
              name="pickerl"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein", "Bereits abgelaufen"]}
              ref={pickerlRef}
            />

            <RadioForm
              title="Welche Art Verkäufer bist du?"
              value={sellerType}
              setValue={setSellerType}
              name="sellerType"
              required={true}
              submitClicked={submitClicked}
              options={["Privatperson", "Gewerbe (MwSt. Nachweisbar)"]}
              ref={sellerTypeRef}
            />

            <RadioForm
              title="Wurde dein Auto importiert?"
              value={importedCar}
              setValue={setImportedCar}
              name="importedCar"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={importedCarRef}
            />

            <RadioForm
              title="Besteht eine laufende Finanzierung oder ein Leasing für dein Auto?"
              value={isLeasingOrFinanced}
              setValue={setIsLeasingOrFinanced}
              name="leasing"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={isLeasingOrFinancedRef}
            />

            <RadioForm
              title="Wie viele zugelassene Halter hatte dein Auto bisher? (inkl. dir selbst)"
              value={carOwnerAmount}
              setValue={setCarOwnerAmount}
              name="carOwnerAmount"
              required={true}
              submitClicked={submitClicked}
              options={["1", "2", "3", "4+", "Weiß ich nicht"]}
              ref={carOwnerAmountRef}
            />

            <RadioForm
              title="Welche Außenfarbe hat dein Auto?"
              value={carColorOutside}
              setValue={setCarColorOutside}
              name="carColorOutside"
              required={true}
              submitClicked={submitClicked}
              options={firstFourColorsNames}
              dropdownOptions={otherColorsNames}
              isWithDropdown={true}
              ref={carColorOutsideRef}
            />

            <RadioForm
              title="Welche Farbe haben die Sitze deines Autos?"
              value={carColorSeats}
              setValue={setCarColorSeats}
              name="carColorSeats"
              required={true}
              submitClicked={submitClicked}
              options={firstFourColorsSeatsNames}
              dropdownOptions={otherColorsSeatsNames}
              isWithDropdown={true}
              ref={carColorSeatsRef}
            />

            <RadioForm
              title="Ist dein Auto in seinem momentanen Zustand fahrtüchtig?"
              value={isDriveable}
              setValue={setIsDriveable}
              name="drivable"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={isDriveableRef}
            />

            <RadioForm
              title="Wie ist der Zustand des Wageninneren?"
              value={conditionInside}
              setValue={setConditionInside}
              name="conditioninside"
              required={true}
              submitClicked={submitClicked}
              options={["Hervorragend", "Leicht gebraucht", "Stark gebraucht"]}
              ref={conditionInsideRef}
            />

            <RadioForm
              title="Wie ist der Zustand außen?"
              value={conditionOutside}
              setValue={setConditionOutside}
              name="conditionoutside"
              required={true}
              submitClicked={submitClicked}
              options={["Hervorragend", "Leicht gebraucht", "Stark gebraucht"]}
              ref={conditionOutsideRef}
            />

            <RadioForm
              title="Gibt es dauerhaft aktive Warnleuchten im Armaturenbrett deines Autos?"
              value={hasWarningLights}
              setValue={setHasWarningLights}
              name="warningLights"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={hasWarningLightsRef}
            />

            <RadioForm
              title="Gibt es Schäden und Gebrauchsspuren?"
              value={hasDamages}
              setValue={setHasDamages}
              name="damages"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={hasDamagesRef}
            />

            <RadioForm
              title="Ist der Motor in einem einwandfreien Zustand?"
              value={isEngineInGoodCondition}
              setValue={setIsEngineInGoodCondition}
              name="engineCondition"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={isEngineInGoodConditionRef}
            />

            <RadioForm
              title="Ist das Getriebe in einem einwandfreien Zustand?"
              value={isTransmissionInGoodCondition}
              setValue={setIsTransmissionInGoodCondition}
              name="transmissionCondition"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={isTransmissionInGoodConditionRef}
            />

            <RadioForm
              title="Ist die Lenkung in einem einwandfreien Zustand?"
              value={isSteeringInGoodCondition}
              setValue={setIsSteeringInGoodCondition}
              name="steeringCondition"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={isSteeringInGoodConditionRef}
            />

            <RadioForm
              title="Ist die Federung in einem einwandfreien Zustand?"
              value={isSuspensionInGoodCondition}
              setValue={setIsSuspensionInGoodCondition}
              name="suspensionCondition"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={isSuspensionInGoodConditionRef}
            />

            <RadioForm
              title="Sind die Bremsen in einem einwandfreien Zustand?"
              value={areBrakesInGoodCondition}
              setValue={setAreBrakesInGoodCondition}
              name="brakesCondition"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein"]}
              ref={areBrakesInGoodConditionRef}
            />

            <RadioForm
              title="Ist die Klimaanlage in einem einwandfreien Zustand?"
              value={isAirConditioningInGoodCondition}
              setValue={setIsAirConditioningInGoodCondition}
              name="airConditioningCondition"
              required={true}
              submitClicked={submitClicked}
              options={["Ja", "Nein", "Nicht vorhanden"]}
              ref={isAirConditioningInGoodConditionRef}
            />

            <TextForm
              title="Wie lautet deine FIN?"
              value={FIN}
              setValue={setFIN}
              name="FIN"
              id="FIN"
              placeholder="z.B.:WBAGG8101DF6493"
              required={true}
              submitClicked={submitClicked}
              ref={FINRef}
            />

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

export default CarAdditionalInfo;
