import "./index.scss";

import {useEffect, useState} from "react";
import About from "../About";
import Skills from "../skills";
import Works from "../Works";
import Service from "../Services";

const Home = () => {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="parent">
			<section id="home" className="home-container">
				<div
					className="center"
					style={{transform: `translateY(${offsetY * 0.6}px)`}}
				>
					<img
						src="https://avatars.githubusercontent.com/u/98168009?v=4"
						alt="neeschal
                "
					/>
					<div className="details">
						<span className="info ">&lt;info&gt;</span>
						<h4>Hi, I'm</h4>
						<h1>
							<span className="fname">Nischal</span> Dahal
						</h1>
						<h4 className="highlights "> PROGRAMMER | EDITOR | DESIGNER </h4>
						<p className="">
							I'm a computer engineer based Biratnagar, Nepal who specializes in
							building (and occasionally designing) exceptional digital
							experiences. Currently, I'm learning at Purbanchal University and
							focused on building accessible, human-centered products.
						</p>
						<span className="info">&lt;/info&gt;</span>
					</div>
				</div>
			</section>

			<About />
			<Skills />
			<Works />
			<Service />
		</div>
	);
};

export default Home;
