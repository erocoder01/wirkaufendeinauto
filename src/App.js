import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarProvider } from "./context/CarContext"; // Import your context provider
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
  return (
    <CarProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Car />} />
            <Route path="/cardetails" element={<CarDetails />} />
            <Route path="/carImages" element={<CarImages />} />
            <Route path="/additionalInfo" element={<CarAdditionalInfo />} />
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
    </CarProvider>
  );
}

export default App;
