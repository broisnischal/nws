/* eslint-disable jsx-a11y/alt-text */

import "./index.scss";
import Pattern from "../../assets/svgs/pattern.svg";
import Line from "../../assets/svgs/line.svg";
import Skill from "../../assets/svgs/skill.svg";
import { Parallax } from "react-scroll-parallax";
import { Zoom } from "react-awesome-reveal";

const testimonials = [
  {
    name: "Sudip Pandey",
    img: "https://avatars.githubusercontent.com/techneesofficial17",
    written:
      "I rarely like to write reviews, but the nws team truly deserve a standing ovation for their customer support, customisation and most importantly, friendliness and professionalism.",
    date: "Aug 24, 2022",
  },
  {
    name: "Bidhan Acharya",
    img: "",
    written:
      "Many thanks once again for everything and hope that I get to deal with you again in the near future.",
    date: "Sept 12, 2022",
  },
  {
    name: "Kritika Basnet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAv25BnXYMJRSvdZkm-veK3YRWdof57Ehlw&usqp=CAU",
    written:
      "This guy works awesome with behaviour and all the efforts. What a hard work in a very young age ,just great and too good for you. Keep growing with all the best wishes from me !!",
    date: "Sept 12, 2022",
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
            Testimonials <div className="highlight">What My Clients Say's</div>
          </h1>
        </Parallax>
        <div className="content-div">
          {testimonials.map((item, index) => (
            <Zoom triggerOnce key={index}>
              <Parallax translateY={10}>
                <div className="testmonial" key={index}>
                  <div className="box">
                    <img
                      src={
                        item?.img ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWPgMndVeCsaNK6w3JYZrWhB7GyduPoxhZ25mbXmtPCHJXN11T2Kf7i2US7GXrxgwGCo&usqp=CAU"
                      }
                    />
                    <h2>{item.name}</h2>
                    <p>{item.written}</p>
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
