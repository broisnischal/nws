/* eslint-disable jsx-a11y/alt-text */

import "./index.scss";
import Pattern from "../../assets/svgs/pattern.svg";
import Line from "../../assets/svgs/line.svg";
// import Skill from "../../assets/svgs/skill.svg";
import { Parallax } from "react-scroll-parallax";
import { Zoom } from "react-awesome-reveal";

const testimonials = [
  {
    name: "Sudip Pandey",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661519069/icons/Screenshot_39_dgc9r2.png",
    message:
      "Ma chai minor project garne manxe khojdaii thiyea teti bela thakkai neeswebservices vettayea ani minor project gardeu na vaneko hunxa vanera Dami UI sahit backend pani dami gardeko xa free ma dherai dherai dhanyabaad to neeswebservices, keep rocking 😂🔥.",
    date: "Aug 24, 2022",
    src: "https://sudippandey.com.np/",
  },
  {
    name: "Manoj Kc",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661520139/icons/Screenshot_40_goh18g.png",
    message:
      "Nischal was great to work with and I've already personally recommended him to colleagues also I have worked with him in project and It was a great and awesome experiences with lots of hardworking and passion.",
    src: "https://kcmanoj-unofficial.netlify.app/",
    date: "Aug 15, 2022",
  },
  {
    name: "Prakrati Acharya",
    message:
      "I rarely like to write reviews, but the nws team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.",
    date: "Aug 12, 2022",
  },
  {
    name: "Bidhan Acharya",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661517453/icons/Screenshot_38_thk9l1.png",
    message:
      "Amazing website !! There are so many workouts to choose from.It’s impossible to get bored. They eliminate any excuses because there are workouts for all levels, all time frames, no equipment options, small space options, and even options to have your kids join you. I truly love service provided by neeswebservices and have had several friends join as well..",
    date: "Dec 12, 2021",
    src: "https://www.facebook.com/bidhan.acharya.10",
  },
  {
    name: "Swoooo",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661520864/icons/Screenshot_41_cqdpwo.png",
    message:
      "kukur,goru,badar sabai ho yo ani machai mayale yeslai gadhuu vanxu.yo chai 1No. ko fata Manxe hoina vaneko kei mandaina vanera Vanna ta mildaina tara maney pani dherai choti vanexi matra manxa.Jati nai j vane ni yo manxe ekdam sweet,caring ra responsible xa.Ma sanga jaile neu khojxa tara lastma fakauna ni aauxaa.Tara jati nai jhagada gare nabole ni ekxin matra ho paxi ekaixin mailihalxaa ani yo chor ko lagi chai mero heart ma special thau xa ani sadai rahanxaa.I love you kukur 😂😽💖",
    date: "Nov 17, 2020",
  },

  {
    name: "Kuldip Bastola",
    img: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661517455/icons/Screenshot_37_ohtkis.png",
    message:
      "I am satisfied with the service provided by neesebservices.I found them very humble towards me and the work they deliver is the best.The service they provide is on time.I am very glad to do project with you.Hoping to do more projects in future.",
    src: "https://kuldipbastola.com.np/",
    date: "Aug 25, 2022",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials-container">
      <img src={Pattern} className="pattern bg" />
      <img src={Line} className="line bg" />
      <div className="center">
        <Parallax translateY={-1}>
          <h1 className="title">
            Testimonials{" "}
            <div className="highlight">What they say about me ?</div>
          </h1>
        </Parallax>
        <div className="content-div">
          {testimonials.map((item, index) => (
            <Zoom triggerOnce key={index}>
              <Parallax translateY={10}>
                <div className="testmonial" key={index}>
                  <div className="box">
                    {item.src ? (
                      <a href={item.src} target="_blank">
                        <img
                          className="home-img"
                          src={
                            item?.img ||
                            "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661510421/icons/images_r8bfk8.png"
                          }
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img
                        src={
                          item?.img ||
                          "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661510421/icons/images_r8bfk8.png"
                        }
                        loading="lazy"
                      />
                    )}

                    <h2>{item?.name}</h2>
                    <p>{item.message}</p>
                    <h5 className="date">{item.date}</h5>
                  </div>
                </div>
              </Parallax>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
