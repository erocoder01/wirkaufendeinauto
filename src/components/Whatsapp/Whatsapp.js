import React from "react";
import WhatsappIcon from "../../assets/whatsapp.png";
import "./Whatsapp.css";
function Whatsapp(props) {
  return (
    <a
      href="https://wa.me/436767556597"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={WhatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
}

export default Whatsapp;
