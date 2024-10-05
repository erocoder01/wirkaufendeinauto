import React, { useEffect, useState } from "react";
import WhatsappIcon from "../../assets/whatsapp.png";
import "./Whatsapp.css";

function Whatsapp(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        // Zeige das Icon bei mehr als 100px Scroll
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/436767556597"
      className={`whatsapp-float ${isVisible ? "visible" : ""}`} // Dynamisch sichtbare Klasse hinzufügen
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={WhatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
}

export default Whatsapp;
