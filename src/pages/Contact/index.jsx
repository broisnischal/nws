import "./index.scss";
import Pattern from "../../assets/svgs/pattern.svg";
import Line from "../../assets/svgs/line.svg";
import Skill from "../../assets/svgs/skill.svg";
const Contact = () => {
	return (
		<section id="contact" className="contact-container">
			<img src={Pattern} alt="nothing" className="pattern bg" />
			<img src={Line} alt="nothing" className="line bg" />
			Contact
		</section>
	);
};

export default Contact;
