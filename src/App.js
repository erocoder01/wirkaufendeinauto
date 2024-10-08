import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Car from "./Pages/Car/Car";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import About from "./Pages/About/About";
import Partner from "./Pages/Partner/Partner";
import CarImages from "./Pages/CarImages/CarImages";
import Success from "./Pages/Success/Success";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Impressum from "./Pages/Impressum/Impressum";
import CarAdditionalInfo from "./Pages/CarAdditionalInfo/CarAdditionalInfo";

function App() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const [brandModels, setBrandModels] = useState([]);
  const [availableYears, setAvailableYears] = useState([]); // Store available years

  // selected values for CarDetails
  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [power, setPower] = useState("");
  const [modification, setModification] = useState("");

  //zweite seite

  const [kilometerstand, setKilometerstand] = useState("");
  const [unfallschaden, setUnfallschaden] = useState(false);
  const [serviceHeft, setServiceHeft] = useState(false);
  const [paintConditionLack, setPaintConditionLack] = useState("");
  const [paintConditionKarosserie, setPaintConditionKarosserie] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  //dritte seite

  const [carKeysAmount, setCarKeyAmount] = useState("");
  const [additionalTires, setAdditionalTires] = useState("");
  const [pickerl, setPickerl] = useState("");
  // Welche art von verkäufer
  const [sellerType, setSellerType] = useState("");
  // ist das auto importiert aus dem ausland
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
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Car
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                brandModels={brandModels}
                setBrandModels={setBrandModels}
                availableYears={availableYears}
                setAvailableYears={setAvailableYears}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
            }
          />
          <Route
            path="/cardetails"
            element={
              <CarDetails
                brandName={selectedBrand}
                modelName={selectedModel}
                year={selectedYear}
                selectedBodyType={selectedBodyType}
                setSelectedBodyType={setSelectedBodyType}
                fuelType={fuelType}
                setFuelType={setFuelType}
                gearbox={gearbox}
                setGearbox={setGearbox}
                power={power}
                setPower={setPower}
                modification={modification}
                setModification={setModification}
                kilometerstand={kilometerstand}
                setKilometerstand={setKilometerstand}
                unfallschaden={unfallschaden}
                setUnfallschaden={setUnfallschaden}
                serviceHeft={serviceHeft}
                setServiceHeft={setServiceHeft}
                paintConditionLack={paintConditionLack}
                setPaintConditionLack={setPaintConditionLack}
                paintConditionKarosserie={paintConditionKarosserie}
                setPaintConditionKarosserie={setPaintConditionKarosserie}
                additionalNotes={additionalNotes}
                setAdditionalNotes={setAdditionalNotes}
              />
            }
          />

          <Route
            path="/carImages"
            element={
              <CarImages
                brandName={selectedBrand}
                modelName={selectedModel}
                year={selectedYear}
                selectedBodyType={selectedBodyType}
                fuelType={fuelType}
                gearbox={gearbox}
                power={power}
                modification={modification}
                kilometerstand={kilometerstand}
                unfallschaden={unfallschaden}
                serviceHeft={serviceHeft}
                paintConditionLack={paintConditionLack}
                paintConditionKarosserie={paintConditionKarosserie}
                additionalNotes={additionalNotes}
                //daten von seite 3
                carKeysAmount={carKeysAmount}
                additionalTires={additionalTires}
                pickerl={pickerl}
                sellerType={sellerType}
                importedCar={importedCar}
                isLeasingOrFinanced={isLeasingOrFinanced}
                carOwnerAmount={carOwnerAmount}
                carColorOutside={carColorOutside}
                carColorSeats={carColorSeats}
                isDriveable={isDriveable}
                conditionInside={conditionInside}
                conditionOutside={conditionOutside}
                hasWarningLights={hasWarningLights}
                hasDamages={hasDamages}
                isEngineInGoodCondition={isEngineInGoodCondition}
                isTransmissionInGoodCondition={isTransmissionInGoodCondition}
                isSteeringInGoodCondition={isSteeringInGoodCondition}
                isSuspensionInGoodCondition={isSuspensionInGoodCondition}
                areBrakesInGoodCondition={areBrakesInGoodCondition}
                isAirConditioningInGoodCondition={
                  isAirConditioningInGoodCondition
                }
                FIN={FIN}
              />
            }
          />
          <Route path="/" element={<Car />} />
          <Route
            path="/additionalInfo"
            element={
              <CarAdditionalInfo
                carKeysAmount={carKeysAmount}
                setCarKeyAmount={setCarKeyAmount}
                additionalTires={additionalTires}
                setAdditionalTires={setAdditionalTires}
                pickerl={pickerl}
                setPickerl={setPickerl}
                sellerType={sellerType}
                setSellerType={setSellerType}
                importedCar={importedCar}
                setImportedCar={setImportedCar}
                isLeasingOrFinanced={isLeasingOrFinanced}
                setIsLeasingOrFinanced={setIsLeasingOrFinanced}
                carOwnerAmount={carOwnerAmount}
                setCarOwnerAmount={setCarOwnerAmount}
                carColorOutside={carColorOutside}
                setCarColorOutside={setCarColorOutside}
                carColorSeats={carColorSeats}
                setCarColorSeats={setCarColorSeats}
                isDriveable={isDriveable}
                setIsDriveable={setIsDriveable}
                conditionInside={conditionInside}
                setConditionInside={setConditionInside}
                conditionOutside={conditionOutside}
                setConditionOutside={setConditionOutside}
                hasWarningLights={hasWarningLights}
                setHasWarningLights={setHasWarningLights}
                hasDamages={hasDamages}
                setHasDamages={setHasDamages}
                isEngineInGoodCondition={isEngineInGoodCondition}
                setIsEngineInGoodCondition={setIsEngineInGoodCondition}
                isTransmissionInGoodCondition={isTransmissionInGoodCondition}
                setIsTransmissionInGoodCondition={
                  setIsTransmissionInGoodCondition
                }
                isSteeringInGoodCondition={isSteeringInGoodCondition}
                setIsSteeringInGoodCondition={setIsSteeringInGoodCondition}
                isSuspensionInGoodCondition={isSuspensionInGoodCondition}
                setIsSuspensionInGoodCondition={setIsSuspensionInGoodCondition}
                areBrakesInGoodCondition={areBrakesInGoodCondition}
                setAreBrakesInGoodCondition={setAreBrakesInGoodCondition}
                isAirConditioningInGoodCondition={
                  isAirConditioningInGoodCondition
                }
                setIsAirConditioningInGoodCondition={
                  setIsAirConditioningInGoodCondition
                }
                FIN={FIN}
                setFIN={setFIN}
              />
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/success" element={<Success />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Whatsapp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
