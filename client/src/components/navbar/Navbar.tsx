import React from "react";
import "./Navbar.css"
import vklogo from "../../resourses/logos/VK-logo.png"
import settingslogo from "../../resourses/logos/settingslogo.png"

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <div className="Logos">
        <a className="ImageLink" href="https://vk.com/keksecproduct">
          <img src={vklogo} alt="Logo"/>
        </a>
        <a className="ImageLink" href="https://vk.com/keksecproduct">
          <img src={settingslogo} alt="Logo"/>
        </a>
      </div>
    </div>
  );
}

export default Navbar;