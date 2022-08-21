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

const Navbar = () => {
	const activeStyle = {
		color: "#4d4d4e",
	};
	return (
		<nav>
			<div className="center">
				<div className="logo">nws</div>
				<div className="nav-links">
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
					<FontAwesomeIcon
						icon={faBars}
						className="btn bars"
						size="2x"
						color="white"
					></FontAwesomeIcon>
					<FontAwesomeIcon
						size="2x"
						icon={faClose}
						className="btn close"
						color="white"
					></FontAwesomeIcon>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
