import { useEffect, useState } from "react";
import "./index.scss";
// import Housefly from "../../assets/imgs/gifs/Housefly.gif";

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [bottom, setBottom] = useState(false);
  // const fly = useRef();

  const onscroll = () => {
    const winscroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winscroll / height) * 100;
    if (scrolled >= 95 || scrolled <= 7) {
      setBottom(true);
    } else {
      setBottom(false);
    }
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <div className="scroll-indicator-container">
      <div
        className={
          bottom ? "scroll-indicator-box " : "scroll-indicator-box bottom"
        }
      >
        {/* <img ref={fly} src={Housefly} alt="" className="housefly" /> */}
        <span className="indicator" style={{ height: `${scrollTop}%` }}></span>
      </div>
    </div>
  );
};

export default ScrollIndicator;
