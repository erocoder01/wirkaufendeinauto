import React, { createContext, useState } from "react";

// Create a context
export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [brandModels, setBrandModels] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);

  // Car.js

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // CarDetails.js

  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [power, setPower] = useState("");
  const [modification, setModification] = useState("");
  const [kilometerstand, setKilometerstand] = useState("");
  const [unfallschaden, setUnfallschaden] = useState("");
  const [serviceHeft, setServiceHeft] = useState("");
  const [
    completedAndDocumentedMaintenances,
    setCompletedAndDocumentedMaintenances,
  ] = useState("");
  const [isDamageRepaired, setIsDamageRepaired] = useState("");
  const [paintConditionLack, setPaintConditionLack] = useState("");
  const [paintConditionKarosserie, setPaintConditionKarosserie] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // CarAdditionalInfo.js
  const [carKeysAmount, setCarKeyAmount] = useState("");
  const [additionalTires, setAdditionalTires] = useState("");
  const [pickerl, setPickerl] = useState("");
  const [sellerType, setSellerType] = useState("");
  const [importedCar, setImportedCar] = useState("");
  const [isLeasingOrFinanced, setIsLeasingOrFinanced] = useState("");
  const [carOwnerAmount, setCarOwnerAmount] = useState("");
  const [carColorOutside, setCarColorOutside] = useState("");
  const [carColorSeats, setCarColorSeats] = useState("");
  const [isDriveable, setIsDriveable] = useState("");
  const [hasDamagesAndWear, setHasDamagesAndWear] = useState("");
  const [selectedDamages, setSelectedDamages] = useState([]);
  const [conditionInside, setConditionInside] = useState("");
  const [conditionOutside, setConditionOutside] = useState("");
  const [hasWarningLights, setHasWarningLights] = useState("");
  const [isEngineInGoodCondition, setIsEngineInGoodCondition] = useState("");
  const [isTransmissionInGoodCondition, setIsTransmissionInGoodCondition] =
    useState("");
  const [isSteeringInGoodCondition, setIsSteeringInGoodCondition] =
    useState("");
  const [isSuspensionInGoodCondition, setIsSuspensionInGoodCondition] =
    useState("");
  const [areBrakesInGoodCondition, setAreBrakesInGoodCondition] = useState("");
  const [
    isAirConditioningInGoodCondition,
    setIsAirConditioningInGoodCondition,
  ] = useState("");
  const [FIN, setFIN] = useState("");

  return (
    <CarContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand,
        selectedModel,
        setSelectedModel,
        selectedYear,
        setSelectedYear,
        brandModels,
        setBrandModels,
        availableYears,
        setAvailableYears,
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
        completedAndDocumentedMaintenances,
        setCompletedAndDocumentedMaintenances,
        isDamageRepaired,
        setIsDamageRepaired,
        paintConditionLack,
        setPaintConditionLack,
        paintConditionKarosserie,
        setPaintConditionKarosserie,
        additionalNotes,
        setAdditionalNotes,
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
        hasDamagesAndWear,
        setHasDamagesAndWear,
        conditionInside,
        setConditionInside,
        conditionOutside,
        setConditionOutside,
        hasWarningLights,
        setHasWarningLights,
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
        selectedDamages,
        setSelectedDamages,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
