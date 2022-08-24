/* eslint-disable jsx-a11y/alt-text */
import "./index.scss";
import { Link } from "react-router-dom";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navref = useRef();
  const toggleNav = () => {
    setOpen((prev) => !prev);
  };
  // const activeStyle = {
  //   color: "#4d4d4e",
  // };
  return (
    <nav ref={navref}>
      <div className="center">
        <Link to="/" className="logo">
          <img src="https://res.cloudinary.com/dacp0r5b7/image/upload/v1661272914/icons/neeslogo_aoaje7.png" />
          nws
        </Link>
        <div className={open ? "nav-links hide" : "nav-links"}>
          <a className="nav-link" href="#home">
            <FontAwesomeIcon icon={faHome} className="nav-icon home" />
            <span>Home</span>
          </a>
          <a href="#about" className="nav-link">
            <FontAwesomeIcon
              icon={faUser}
              className="nav-icon about"
              color="#4d4d4e"
            />
            <span>About</span>
          </a>
          <a href="#works" className="nav-link">
            <FontAwesomeIcon
              icon={faSuitcase}
              className="nav-icon works"
              color="#4d4d4e"
            />
            <span>Works</span>
          </a>
          <a href="#services" className="nav-link">
            <FontAwesomeIcon
              icon={faBandcamp}
              className="nav-icon works"
              color="#4d4d4e"
            />
            <span>Services</span>
          </a>
          <a
            href="#contact"
            className="nav-link"
            // style={({isActive}) => (isActive ? activeStyle : undefined)}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="nav-icon works"
              color="#4d4d4e"
            />
            <span>Contact</span>
          </a>
        </div>
        <div className="toggle">
          {open ? (
            <FontAwesomeIcon
              icon={faBars}
              className="btn bars"
              size="2x"
              color="white"
              onClick={toggleNav}
            />
          ) : (
            <FontAwesomeIcon
              size="2x"
              icon={faClose}
              className="btn bars"
              color="white"
              onClick={toggleNav}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
