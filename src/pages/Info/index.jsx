import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const data = [
  {
    title: "Undergraduation",
    focus: "BSC CSIT",
    date: "07/2022 - present",
    desc: "Studying BSC CSIT and technological stuffs in TU.",
  },
  {
    title: "NEB Grade 12",
    focus: "Premier Secondary School",
    date: "04/2021 - 08/2022",
    desc: "Certified by +2 with school leaving certificate of 3.2 GPA.",
  },
  {
    title: "Secondary Education Examination",
    focus: "Hanumanteshowr Secondary School",
    date: "09/2019 - 08/2020",
    desc: "Certified by Secondary Education Examination (SEE) with 3.7 GPA.",
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
    desc: "Learing to build real world native flutter application.",
    focus: "Documentation",
  },
  {
    date: "2022 - Present",
    title: "Typescript",
    desc: "Learing to implement and get the big resources and collaboartion with different organization including fossbyte.",
    focus: "free resources",
  },
  {
    date: "2021-2022",
    title: "Javascript",
    desc: "Learned to build web application using Javascript as the frontend and backend with Node JS with best design and implementation.",
    focus: "FREECODECAMP",
  },
  {
    date: "2020-2021",
    title: "Python",
    desc: "Learned the python as a intermediate and learned some of Machine learning and building hacking tools.",
    focus: "FREECODECAMP",
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
            ))}
          </div>
          <div className="right">
            {works.map((item, index) => (
              <div className="single" key={index}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
