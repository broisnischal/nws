import "./index.scss";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
// import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
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
          <FontAwesomeIcon icon={faSuitcase} className="nav-icon works" />
        </a>
        <a href="#skills" className="nav-link">
          <FontAwesomeIcon icon={faSlack} className="nav-icon works" />
        </a>
        <a href="#services" className="nav-link">
          <MiscellaneousServicesOutlinedIcon className="nav-icon mui" />
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
