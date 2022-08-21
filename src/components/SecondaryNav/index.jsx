import "./index.scss";
import {
	faHome,
	faUser,
	faEnvelope,
	faSuitcase,
	faBars,
	faClose,
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
