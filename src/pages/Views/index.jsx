import Counter from "../../components/Counter";
import "./index.scss";
import { useInView } from "react-intersection-observer";

const items = [
  {
    title: "Website Developed",
    number: 61,
    icon: "asf",
  },
  {
    title: "App Developed",
    number: 3,
    icon: "asf",
  },
  {
    title: "Game Developed",
    number: 4,
    icon: "asf",
  },
  {
    title: "Designs projects",
    number: 101,
    icon: "asf",
  },
];

const Views = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return (
    <section id="views" className="views-container">
      <div className="center">
        <div className="content">
          <div className="title">
            <h1 className={inView ? "bganimate" : ""} ref={ref}>
              What i have done?
            </h1>
          </div>
          <div className="flex-wrapper">
            {items.map((item, index) => (
              <div className="items" key={index}>
                <h3>{item.title}</h3>
                <div className="count">
                  <Counter end={item.number} start={item?.start} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Views;
