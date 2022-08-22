import "./index.scss";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import {JackInTheBox} from "react-awesome-reveal";
import {useState, useEffect} from "react";
import {Parallax} from "react-scroll-parallax";
const works = [
	{
		title: "swivt technology",
		description:
			"Helped senior developers to write modern, performant, maintainable code for a diverse array of client and internal ",
		img: "https://www.freelogodesign.org/assets/img/logo-couleurs.jpeg",
		date: "oct 2021 to present",
	},
	{
		title: "Neeswebservices ",
		description:
			"Helped senior developers to write modern, performant, maintainable code for a diverse array of client and internal ",
		img: "https://i0.wp.com/kuldipbastola.com.np/wp-content/uploads/2022/08/kb-logo-e1659620513505.png?w=791&ssl=1",
		date: "oct 2021 to present",
	},
	{
		title: "Routine of Nepal Technology",
		description:
			"Helped senior developers to write modern, performant, maintainable code for a diverse array of client and internal ",
		img: "https://www.freelogodesign.org/assets/img/logo-couleurs.jpeg",
		date: "oct 2021 to present",
	},
	{
		title: "swivt technology",
		description:
			"Helped senior developers to write modern, performant, maintainable code for a diverse array of client and internal ",
		img: "https://i0.wp.com/kuldipbastola.com.np/wp-content/uploads/2022/08/kb-logo-e1659620513505.png?w=791&ssl=1",
		date: "oct 2021 to present",
	},
	{
		title: "Neeswebservices ",
		description:
			"Helped senior developers to write modern, performant, maintainable code for a diverse array of client and internal ",
		img: "https://www.freelogodesign.org/assets/img/logo-couleurs.jpeg",
		date: "oct 2021 to present",
	},
	{
		title: "Routine of Nepal Technology",
		description:
			"Helped senior developers to write modern, performant, maintainable code for a diverse array of client and internal ",
		img: "https://www.thesmbguide.com/images/freelogoservices-1024x512-20190808.png",
		date: "oct 2021 to present",
	},
	{
		title: "Routine of Nepal Technology",
		description:
			"Helped senior developers to write modern, performant, maintainable code for a diverse array of client and internal ",
		date: "oct 2021 to present",
	},
];

const Works = () => {
	const swiper = useSwiper();
	return (
		<section id="works" className="work-container">
			<div className="center">
				<h1 className="title">Working with</h1>
				<Parallax translateY={[40, -40]} speed={15}>
					<JackInTheBox triggerOnce delay={500}>
						<Swiper
							className="swiper"
							spaceBetween={100}
							slidesPerView={3}
							onSlideChange={() => console.log("slide change")}
							onSwiper={(swiper) => console.log(swiper)}
						>
							{works.map((item, index) => (
								<SwiperSlide className="swipe" key={index}>
									<div className="box">
										<h3>{item.title}</h3>
										{item.img && <img src={item.img} alt={item.title} />}
										<p>{item.description}</p>
										<h5> {item.date}</h5>
									</div>
								</SwiperSlide>
							))}
							<button onClick={() => swiper.slideNext()}>&gt;</button>
						</Swiper>
					</JackInTheBox>
				</Parallax>
			</div>
		</section>
	);
};

export default Works;
