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

function App() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const [brandModels, setBrandModels] = useState([]);
  const [availableYears, setAvailableYears] = useState([]); // Store available years

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
              />
            }
          />
          <Route path="/contact" element={<Contact />} />

          <Route path="/howitworks" element={<HowItWorks />} />

        </Routes>
        <Whatsapp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
