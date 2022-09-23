import "./index.scss";
import { useState } from "react";
import Hehe from "../../assets/imgs/hehe.png";
import { Parallax } from "react-scroll-parallax";
import { saveAs } from "file-saver";
import CV from "../../assets/nischal.pdf";
import { Open } from "../../utils/Open";

const About = () => {
  const date = new Date();
  const [loaded, setLoaded] = useState(false);
  const downloadImage = () => {
    saveAs(CV, `nischal_resume_${date.getTime()}.pdf`);
  };
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
              Hey you <span className="emoji rocket">🚀</span>, Great ! that you
              made it here , So now let&apos;s find me more, I&apos;m tech
              enthusiast and night dreamer.I am BlackCat who is willing to learn
              everything possible also,I am a{" "}
              <span className="focus">Full</span> Stack Developer, I mean Pull
              stack who <span className="focus">pulls</span> code from Github
              and Stackoverflow ,Hehe Jokes a margin-left&lt;side&gt;. Now
              let&apos;s know what do i do?. Web Dev,App Dev,Game Dev,3d
              Modeling,Graphic Designing & also, I mentioned me as a Black Cat
              so, I am also learning hacking atleast somehow.I mean to
              alert(&quot;Hecked NASA&quot;).
              <br />
              <br />
              <ol id="about-list">
                <li>I am Window Lover.I search for free courses on udemy.</li>
                <li>I google &quot;email regex?&quot;.</li>
                <li>I am a photo&video Editor,</li>
                <li>
                  ⚡ Fun fact about me basically programmers don&apos;t have
                  girlfriend but I do :)
                </li>
                <li>
                  You can 💬 Ask me about TS,Dart,Cpp,🐍,JS,PHP,
                  <span className="focus">C#</span>
                </li>
                <li>
                  I design logo , ideas which I can&apos;t even{" "}
                  <span className="focus">rebember</span> the spelling of
                  remember so I have to google it.
                </li>
              </ol>
            </p>
            <br />
            {/* <button className="btn-primary hire">Hire Me</button> */}
            <button className="btn-primary" onClick={downloadImage}>
              RESUME
            </button>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                Open("https://www.github.com/neeswebservices");
              }}
              style={{ marginLeft: 20 }}
            >
              GITHUB
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
