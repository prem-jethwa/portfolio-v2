import React, { useEffect, useRef, useState } from "react";
import classes from "./styles/heading.module.css";
import { useIntersect } from "../../hooks/useIntersect";

const Heading = ({ heading }) => {
  const headingRef = useRef(null);
  const [setNode, entry] = useIntersect({ threshold: 1 });
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    if (headingRef) setNode(headingRef);
    if (!entry.isIntersecting) return;
    setIsIntersected(true);
  }, [entry.isIntersecting]);

  return (
    <>
      <div ref={headingRef} className={`${classes["heading-con"]}`}>
        {/* <div
          className={` ${isIntersected ? classes.dummy : "slidein-left"}`}
        ></div> */}
        <div
          className={` ${isIntersected ? classes["heading"] : "slidein-left"}`} //${classes["heading"]}
        >
          {" "}
          <h2>
            <div className={classes.dummy2}></div>
            {heading}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Heading;
