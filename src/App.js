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

  const [kilometerstand, setKilometerstand] = useState("");
  const [unfallschaden, setUnfallschaden] = useState(false);
  const [serviceHeft, setServiceHeft] = useState(false);
  const [paintConditionLack, setPaintConditionLack] = useState("");
  const [paintConditionKarosserie, setPaintConditionKarosserie] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  return (
    <Router>
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
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
        <Whatsapp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
