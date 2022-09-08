import "./index.scss";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
// import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
const SecondaryNav = () => {
  return (
    <div className="Secondary-nav">
      <div className="nav-links">
        <a className="nav-link" href="#home">
          <FontAwesomeIcon icon={faHome} className="nav-icon home" />
        </a>
        <a href="#about" className="nav-link">
          <FontAwesomeIcon icon={faUser} className="nav-icon about" />
        </a>
        <a href="#works" className="nav-link">
          <FontAwesomeIcon icon={faShieldAlt} className="nav-icon works" />
        </a>
        <a href="#info" className="nav-link">
          <FontAwesomeIcon icon={faGraduationCap} className="nav-icon works" />
        </a>
        <a href="#skills" className="nav-link">
          <FontAwesomeIcon icon={faLightbulb} className="nav-icon works" />
        </a>
        <a href="#services" className="nav-link">
          <FontAwesomeIcon icon={faWrench} className="nav-icon works" />
        </a>
        <a href="#recent" className="nav-link">
          <FontAwesomeIcon icon={faRocket} className="nav-icon works" />
        </a>
        <a href="#projects" className="nav-link">
          <FontAwesomeIcon icon={faLaptopFile} className="nav-icon home" />
        </a>
        <a
          href="#contact"
          className="nav-link"
          // style={({isActive}) => (isActive ? activeStyle : undefined)}
        >
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon works" />
        </a>
      </div>
    </div>
  );
};

export default SecondaryNav;
