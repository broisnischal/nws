import "./index.scss";

import Problem from "../../assets/imgs/idea.png";
import Time from "../../assets/imgs/tim.png";
import Flex from "../../assets/imgs/flexible.png";
import Communication from "../../assets/imgs/conv.png";
import Pixel from "../../assets/imgs/pixel.png";
import Experties from "../../assets/imgs/experties.jpg";
import { Bounce } from "react-awesome-reveal";

const items = [
  {
    title: "time management",
    icon: Time,
  },
  {
    title: "Communication",
    icon: Communication,
    color: "#3b4451",
  },
  {
    title: "Flexibility",
    icon: Flex,
  },
  {
    title: "Problem Solving",
    icon: Problem,
  },
  {
    title: "Pixel Perfect",
    icon: Pixel,
    color: "#c38def",
  },
  {
    title: "Expertise",
    icon: Experties,
    color: "#c38def",
  },
];

const Knowledge = () => {
  return (
    <section id="knowledge" className="know-div">
      <div className="center">
        <div className="title">
          <h1>Knowledge</h1>
        </div>
        <div className="flex">
          {items.map((item, index) => (
            <Bounce
              key={index}
              delay={index * 70}
              cascade
              style={{ margin: "auto" }}
            >
              <div key={index} className="box">
                <img src={item.icon} alt="" className="icon" />
                <h4>{item.title}</h4>
              </div>
            </Bounce>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
