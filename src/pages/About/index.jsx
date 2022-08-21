import "./index.scss";
import Hehe from "../../assets/imgs/hehe.png";
const About = () => {
	return (
		<section id="about" className="about-container">
			<div className="center">
				<h1 className="title">About ME</h1>
				<div className="flex">
					<div className="image">
						<img src={Hehe} alt="" />
					</div>
					<div className="content">
						<div className="highlight">
							I'm a Designer, Programmer, editor, and tech lover.
						</div>
						<p className="details">
							Hi, I'm Nischal Dahal, a web designer🚀developer focused on
							crafting great web experiences. I am a self taught developer, FOSS
							lover, linux enthusiast. I have always loved creating something
							out of nothing. When I was little I started with photography,
							moved on to digital marketing, and then I found the digital world
							where it was possible to create anything! I started creating
							anything and everything; games, 2D Animation, softwares and
							websites. Now I like building new stuff and work with other people
							– nothing really interesting is ever built alone!
						</p>
						<button className="btn-primary hire">Hire Me</button>
						<button className="btn-primary">CV</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
