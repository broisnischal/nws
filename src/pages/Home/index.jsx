import "./index.scss";

import { useState } from "react";
import About from "../About";
import Skills from "../skills";
import Works from "../Works";
import Service from "../Services";
import Contact from "../Contact";
import { Bounce } from "react-awesome-reveal";
import Views from "../Views";
import Projects from "../Project";
import Testimonial from "../Testimonials";
import Blog from "../Blog";
import Footer from "../../components/Footer";
import Plan from "../Plan/index.jsx";
import Knowledge from "../Knowledge/index.jsx";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Info from "./../Info/index";
import Recent from "../Recent/index.jsx";
import Nees from "../../assets/imgs/nees.png";
const Home = () => {
  const [loaded, setLoaded] = useState(false);
  // const src =
  //   "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661412465/icons/pp_2_11zon_sn5bhi.png";

  const { text } = useTypewriter({
    words: ["Developer", "Editor", "Designer", "Javascript Expert"],
    loop: 0,
  });
  return (
    <div className="parent">
      {/* <Parallax translateY={-40} speed={10}> */}
      <section id="home" className="home-container">
        <Bounce damping={20} style={{ scrollBehavior: "smooth" }} delay={500}>
          <div className="center">
            <div className="img" style={{ transition: "all .7s ease-in-out" }}>
              {loaded ? null : <div className="loading-shimmer" />}
              <img
                className="home-img"
                src={Nees}
                onLoad={() => setLoaded(true)}
                style={loaded ? {} : { display: "none" }}
              />
            </div>
            <div className="details">
              <span className="info ">&lt;info&gt;</span>
              <h4>Hello, I&apos;m</h4>
              <h1>
                <span className="fname">Nischal</span> Dahal
              </h1>
              <h4>
                A simple guy who think&apos;s about everyone&apos;s death.{" "}
              </h4>
              <h4 className="highlights ">
                {" "}
                I am{" "}
                <span className="animating-text">
                  {text}
                  <Cursor />
                </span>
              </h4>
              <p className="">
                A creative <span className="emoji">0️⃣</span> from Nepal who is
                trying to become <span className="emoji">!0️⃣</span>. Just
                kidding, hello if you are <span className="focus">reading</span>{" "}
                this which i know you are,Then my name is Nischal Dahal and A
                big <span className="focus">applaud</span>👏 for you that you
                landed here in my portfolio. Go through bottom sections with
                smooth scrolling to Deep dive.{" "}
                <span className="info end">&lt;/info&gt;</span>
              </p>
              <button className="btn-disabled">
                Let&apos;s work together!
              </button>
            </div>
          </div>
        </Bounce>
        <a href="#about">
          <div className="scroll-down"></div>
        </a>
      </section>
      {/* </Parallax> */}
      <About />
      <Skills />
      <Works />
      <Info />
      <Knowledge />
      <Service />
      <Views />
      <Projects />
      <Blog />
      <Plan />
      <Recent />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
