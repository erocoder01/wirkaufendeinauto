import React, { createContext, useState } from "react";

// Create a context
export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [brandModels, setBrandModels] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);

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
  const [conditionInside, setConditionInside] = useState("");
  const [conditionOutside, setConditionOutside] = useState("");
  const [hasWarningLights, setHasWarningLights] = useState("");
  const [hasDamages, setHasDamages] = useState("");
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
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
