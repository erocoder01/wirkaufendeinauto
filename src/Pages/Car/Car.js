import React, { useEffect } from "react";
import "./Car.css";
import carData from "../../carData.json";
import { Link } from "react-router-dom";

const allowedBrands = [
  "Abarth",
  "Aiways",
  "Aixam",
  "Alfa Romeo",
  "Alpine",
  "Aston Martin",
  "Audi",
  "Barkas",
  "Bentley",
  "BMW",
  "Brilliance",
  "Buick",
  "BYD",
  "Cadillac",
  "Caterham",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Cupra",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "DS",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Honda",
  "Hyundai",
  "INEOS",
  "Infiniti",
  "Isuzu",
  "Iveco",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lada",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "LEVC",
  "Lexus",
  "Lotus",
  "Lucid",
  "Lynk & Co",
  "Mahindra",
  "Maserati",
  "Maxus",
  "Mazda",
  "Mercedes-Benz",
  "MG",
  "MINI",
  "Mitsubishi",
  "NIO",
  "Nissan",
  "Opel",
  "Ora",
  "Peugeot",
  "Vespa",
  "Polestar",
  "Pontiac",
  "Porsche",
  "Proton",
  "Renault",
  "Rover",
  "Saab",
  "Seat",
  "Skoda",
  "Smart",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tata",
  "Tesla",
  "Toyota",
  "Trabant",
  "Triumph",
  "VinFast",
  "Volkswagen",
  "Volvo",
  "Wartburg",
  "Westfield",
  "Zastava",
];

function Car({
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  brandModels,
  setBrandModels,
  availableYears,
  setAvailableYears,
  setSelectedYear,
  selectedYear,
}) {
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel(""); // Reset model when the brand changes
    setAvailableYears([]); // Reset years when the brand changes
  };

  const handleModelChange = (event) => {
    const modelName = event.target.value;
    setSelectedModel(modelName);
    setSelectedYear(""); // Reset selected year when the model changes
    setAvailableYears([]); // Clear available years until a model is chosen

    if (selectedBrand && modelName) {
      // Load the available years for the selected brand and model
      const years = loadYears(selectedBrand, modelName);
      setAvailableYears(years); // Update state with available years
    }
  };

  const handleSelectYear = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  // Function to load models for the selected brand
  function loadModels(brandName) {
    const selectedBrandData = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );

    if (selectedBrandData) {
      const models = selectedBrandData.models.model.map((model) => model.name);
      setBrandModels(models);
    } else {
      setBrandModels([]); // If no brand found, reset models
    }
  }

  function loadYears(brandName, modelName) {
    const selectedBrand = carData.brands.brand.find(
      (brand) => brand.name === brandName
    );
    const selectedModel = selectedBrand.models.model.find(
      (model) => model.name === modelName
    );

    const years = new Set(); // To avoid duplicate years
    const currentYear = new Date().getFullYear();

    selectedModel.generations.generation.forEach((generation) => {
      generation.modifications.modification.forEach((mod) => {
        const yearStart = parseInt(mod.yearstart);
        const yearStop = mod.yearstop ? parseInt(mod.yearstop) : currentYear; // Use current year if yearstop is not present

        // Add all years between yearStart and yearStop to the Set
        for (let year = yearStart; year <= yearStop; year++) {
          years.add(year);
        }
      });
    });

    // Convert the Set to an array, sort it from newest to oldest, and return it
    return Array.from(years).sort((a, b) => b - a);
  }

  useEffect(() => {
    if (selectedBrand) {
      loadModels(selectedBrand);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrand]);

  return (
    <div className="home-container">
      <section className="hero">
        <div className="container">
          <div className="slogan-box">
            <p className="hero-subtitle">Klick, Kleck, Auto weg!</p>
          </div>
          <div className="form-container">
            <h1>
              Verkaufe dein Auto <span id="dynamic-text">bequem</span>
            </h1>
            <p>
              Ohne Stress zum besten Preis - Erhalte direkt deinen finalen
              Verkaufspreis und buche deinen Abgabe-Termin online
            </p>
            <form id="evaluation-form" action="second-page.html" method="GET">
              <div className="input-wrapper">
                <label htmlFor="make">
                  <b>Von welcher Marke ist dein Auto?</b>
                </label>
                <select
                  id="make"
                  name="make"
                  required
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value="" disabled>
                    Marke auswählen
                  </option>
                  {allowedBrands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-wrapper">
                <label htmlFor="model">
                  <b>Welches Modell?</b>
                </label>
                <select
                  id="model"
                  name="model"
                  required
                  value={selectedModel}
                  onChange={handleModelChange}
                  disabled={!brandModels.length}
                >
                  <option value="" disabled>
                    Modell auswählen
                  </option>
                  {brandModels.map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-wrapper">
                <label htmlFor="year">
                  <b>In welchem Jahr wurde es zugelassen?</b>
                </label>
                <select
                  id="year"
                  name="year"
                  value={selectedYear}
                  required
                  onChange={handleSelectYear}
                  disabled={!availableYears.length}
                >
                  <option value="" disabled>
                    Erstzulassung auswählen
                  </option>
                  {availableYears.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <Link to="/cardetails">
                <button className="submit">
                  Jetzt Bewertung ansehen <i className="fas fa-arrow-right"></i>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Car;
