/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";

const Counter = ({ start = 0, end }) => {
  const [count, setCount] = useState(null);
  //   const [mount, setMount] = useState(false);
  //   const myref = useRef(null);
  const countref = useRef(start);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const accumulator = end / 100;

  const updateCounterState = () => {
    if (countref.current < end) {
      const result = Math.ceil(countref.current + accumulator);
      if (result > end) return setCount(end);
      setCount(result);
      countref.current = result;
    }
    setTimeout(updateCounterState, 50);
  };

  useEffect(() => {
    if (inView) {
      updateCounterState();
    }
  }, [start, end, inView]);

  return (
    <InView triggerOnce>
      <span ref={ref}>{count}+</span>
    </InView>
  );
};

export default Counter;
