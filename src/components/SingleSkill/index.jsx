import "./index.scss";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
// import AnimatedNumber from "react-animated-number";

const SingleSkill = ({ title, percentage, color }) => {
  const iref = useRef();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      iref.current.style.width = `${percentage}%`;
    } else {
      iref.current.style.width = "0%";
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} className="single-skill-container">
      <div className="up">
        <h5>{title}</h5>
        <h4 style={{ color: `${color}` }} className="percentage">
          {percentage}%
        </h4>
      </div>
      <div className="indicator">
        <div
          ref={iref}
          style={{ background: `${color}` }}
          className="innerindicator"
        ></div>
      </div>
    </div>
  );
};

export default SingleSkill;
