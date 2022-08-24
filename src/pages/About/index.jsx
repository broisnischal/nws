/* eslint-disable jsx-a11y/alt-text */

import "./index.scss";
import { useState } from "react";
import Hehe from "../../assets/imgs/hehe.png";
import { Parallax } from "react-scroll-parallax";
const About = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="about" className="about-container">
      {/* <div className="arrow"></div> */}
      <div className="center">
        <h1 className="title">About ME</h1>
        <div className="flex">
          <div className="image">
            <Parallax translateY={20}>
              <div
                className="img"
                style={{ transition: "all .7s ease-in-out" }}
              >
                {loaded ? null : (
                  <div
                    className="loading-shimmer"
                    style={{ width: "250px", height: "250px" }}
                  />
                )}
                <img
                  src={Hehe}
                  onLoad={() => setLoaded(true)}
                  style={loaded ? {} : { display: "none" }}
                />
              </div>
            </Parallax>
          </div>
          <div className="content">
            <div className="highlight">
              He the, Designer, Programmer, editor, and tech lover.
            </div>
            <p className="details">
              Hey you 🚀, Great ! that you made it here , So now let's find me
              more, I'm tech enthusiast and night dreamer.I am BlackCat who is
              willing to learn everything possible aslo,I am a{" "}
              <span className="focus">Full</span> Stack Developer, I mean Pull
              stack who <span className="focus">pulls</span> code from Github
              and Stackoverflow,Hehe Jokes a margin-left&lg;side&gt;. Now let's
              know what i doing?.WebDev,AppDev,GameDev,3d Modeling,Graphic
              Designing & also, I mentioned me as a BlackCat so, I am also
              learning hacking atleast somehow.I mean to alert("Hecked NASA").
              <br /> <br />I am Window Lover.I search for free courses on udemy.
              I google "email regex?". I am a photo&video Editor, I design logo
              , ideas which I can't even <span className="focus">
                rebember
              </span>{" "}
              the spelling of remember so I have to google it.
              <br />
              <br />⚡ Fun fact about me basically programmers don't have
              girlfriend but I do :) You can 💬 Ask me about TS,Dart,Cpp,
              🐍,JS,PHP,<span className="focus">C%23</span> don't get? I mean
              C#. I am 17 years old and hardly got +3 years of experience in
              coding and above mentioned Tech Stuffs. Being a{" "}
              <span className="focus">FireFly</span> I am able to learn{" "}
              <span className="focus">Few</span> things but lot's ideas and
              creativeness. Yaaa this much for the about me &lt;Section /&gt; 🔥
            </p>

            {/* <button className="btn-primary hire">Hire Me</button> */}
            <button className="btn-primary">CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
