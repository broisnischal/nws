/* eslint-disable jsx-a11y/alt-text */
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

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const src =
    "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661412465/icons/pp_2_11zon_sn5bhi.png";

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
                src={src}
                onLoad={() => setLoaded(true)}
                style={loaded ? {} : { display: "none" }}
              />
            </div>
            <div className="details">
              <span className="info ">&lt;info&gt;</span>
              <h4>Hello, I'm</h4>
              <h1>
                <span className="fname">Nischal</span> Dahal
              </h1>
              <h4>A simple guy who think's about everyone's death. </h4>
              <h4 className="highlights ">
                {" "}
                PROGRAMMER | EDITOR | DESIGNER | JavaScript Expert{" "}
              </h4>
              <p className="">
                A creative <span className="emoji">0️⃣</span> from Nepal who is
                trying to become <span className="emoji">!0️⃣</span>. Just
                kidding, hello if you are <span className="focus">reading</span>{" "}
                this which i know you are,Then my name is Nischal Dahal and A
                big <span className="focus">applaud</span>👏 for you that you
                landed here in my portfolio. Here you will know about me, that
                even I don't know what to write so lorem500🤣. Go through bottom
                sections with smooth scrolling to Deep dive into{" "}
                <span className="emoji">🌊</span>.
                <span className="info end">&lt;/info&gt;</span>
              </p>
              <button className="btn-disabled">Let's work together!</button>
            </div>
          </div>
        </Bounce>
      </section>
      {/* </Parallax> */}
      <About />
      <Skills />
      <Works />
      <Service />
      <Views />
      <Projects />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
