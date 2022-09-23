import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import { Fade } from "react-awesome-reveal";
const data = [
  {
    title: "Undergraduation",
    focus: "BSC CSIT",
    date: "07/2022 - present",
    desc: "Studying BSC CSIT and technological stuffs and also I am self taught developer.",
  },
  {
    title: "NEB Grade 12",
    focus: "Premier Secondary School",
    date: "04/2021 - 08/2022",
    desc: "Certified by +2 with school leaving certificate of 3.2 CGPA.",
  },
  {
    title: "Secondary Education Examination",
    focus: "Hanumanteshowr Secondary School",
    date: "09/2019 - 08/2020",
    desc: "Certified by Secondary Education Examination (SEE) with 3.7 GPA. It was the great experience with friends and teachers.",
  },
  {
    title: "District level education",
    focus: "Silver Star English Boarding School",
    date: "01/2018 - 12/2019",
    desc: "Completed district level examination[BLE] with GPA 3.9. ",
  },
];

const works = [
  {
    date: "2022 - Present",
    title: "Flutter",
    desc: "Learing to build real world native flutter application. I am right now learning different state management in flutter.",
    focus: "Flutter Documentation and Resources",
  },
  {
    date: "2022 - Present",
    title: "Typescript",
    desc: "Learing to implement and get the big resources and collaboartion with different organizations. I love typescript more than javascript.",
    focus: "Youtube",
  },
  {
    date: "2021-2022",
    title: "Javascript",
    desc: "Learned to build web application using Javascript as the frontend and backend with Node JS with best design and implementation.",
    focus: "MDN DOCS",
  },
  {
    date: "2020-2021",
    title: "Python",
    desc: "Learned the python as a intermediate and learned some of Machine learning and building hacking tools.",
    focus: "FCC | docs",
  },
];

const Info = () => {
  return (
    <section id="info" className="info-container">
      <div className="center">
        <div className="title">
          <h1>Experinces and Education</h1>
        </div>
        <div className="section">
          <div className="left">
            {data.map((item, index) => (
              <Fade key={index} delay={index * 100} triggerOnce>
                <div className="single" key={index}>
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="icon-self"
                    />
                  </div>
                  <div className="content">
                    <p className="date">{item.date}</p>
                    <h2>{item.title}</h2>
                    <span id="focus">{item.focus}</span>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <div className="right">
            {works.map((item, index) => (
              <Fade key={index} delay={index * 100} triggerOnce>
                <div className="single">
                  <div className="icon">
                    <FontAwesomeIcon icon={faBriefcase} className="icon-self" />
                  </div>
                  <div className="content">
                    <p className="date">{item.date}</p>
                    <h2>{item.title}</h2>
                    <span id="focus">{item.focus}</span>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
