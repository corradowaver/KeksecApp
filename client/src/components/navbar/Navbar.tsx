import React from "react";
import "./Navbar.scss"
import vklogo from "../../resourses/logos/VK-logo.png"
import settingslogo from "../../resourses/logos/settingslogo.png"

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <div className="Logos">
        <img src={vklogo} alt="Logo"/>
        <img src={settingslogo} alt="Logo"/>
      </div>
    </div>
  );
}

export default Navbar;