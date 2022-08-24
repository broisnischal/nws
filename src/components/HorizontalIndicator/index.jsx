import React from "react";
import { useState, useEffect } from "react";
import "./index.scss";

const HorizontalIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [bottom, setBottom] = useState(false);
  const onscroll = () => {
    const winscroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = Math.floor((winscroll / height) * 100);
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
    <div className={bottom ? "horizontal-box bottom" : "horizontal-box"}>
      <div className="inner" style={{ width: `${scrollTop}%` }}></div>
    </div>
  );
};

export default HorizontalIndicator;
