import React, { useEffect, useReducer, useState } from "react";
import arrow from "../../Assets/icons/svg/arrow.svg";
import classes from "./styles/skills.module.css";
import Stars from "../UI/Stars";

const onCircle = (count, circleWid, defAngle, startingDeg) => {
  let rotateLeft = [],
    translate = [],
    rotateRight = [];
  const angle = defAngle / count;
  let rot = startingDeg;

  for (let i = 0; i < count; i++) {
    rotateLeft.push(rot * 1 + "deg");
    translate.push(circleWid / 2);
    rotateRight.push(rot * -1 + "deg");

    rot += angle;
  }
  return {
    rotateLeft,
    translate,
    rotateRight,
  };
};

const reducer = (_, action) => {
  // if (action.width <= 400) {
  //   return { circleWid: 370, startingDeg: 20 };
  // }

  // if (action.width <= 500) {
  //   return { circleWid: 450, startingDeg: 25 };
  // }

  // if (action.width <= 850) {
  //   return { circleWid: 500, startingDeg: 15 };
  // }
  // if (action.width <= 1000) {
  //   return { circleWid: 550, startingDeg: 15 };
  // }
  ///new conditions

  if (action.width > 1000) {
    return { circleWid: 620, startingDeg: 15 };
  }

  if (action.width > 850) {
    return { circleWid: 550, startingDeg: 15 };
  }

  if (action.width > 500) {
    return { circleWid: 500, startingDeg: 15 };
  }

  if (action.width > 400) {
    return { circleWid: 450, startingDeg: 25 };
  }

  return { circleWid: 370, startingDeg: 20 };
};

const SkillCircles = ({ isOnSkills, isComplete, isIntersecting }) => {
  const [circles, setCircles] = useState([]);
  const [isClickedOnces, setIsClickedOnces] = useState(false);
  const [state, dispatch] = useReducer(reducer, 620);
  const [startingDeg, setStartingDeg] = useState(state.startingDeg || 15);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMove, setIsMove] = useState(false);
  const [handleInterval, setHandleInterval] = useState(null);

  useEffect(() => {
    setCircles([...document.querySelectorAll(`.${classes.circle}`)]);
  }, []);

  const circleTransForm = async () => {
    if (windowWidth !== window.innerWidth) setWindowWidth(window.innerWidth);

    setStartingDeg((starting) => {
      const circleData = onCircle(13, state.circleWid, 360, starting);

      circles.map((circle, i) => {
        circle.style.transform = `rotate(${circleData.rotateLeft[i]}) 
                                  translate(${circleData.translate[i]}px) 
                                  rotate(${circleData.rotateRight[i]})`;
      });

      return starting;
    });
  };

  useEffect(() => {
    // if (!isIntersecting) return;
    dispatch({ width: window.innerWidth }); // window.innerWidth  to windowWith
    setStartingDeg(state.startingDeg);
  }, [windowWidth, window.innerWidth]);

  useEffect(() => {
    if (!isIntersecting || windowWidth <= 550)
      return window.removeEventListener("resize", circleTransForm);

    window.addEventListener("resize", circleTransForm);

    return () => window.removeEventListener("resize", circleTransForm);
  }, [windowWidth]);

  const moveNext = async () => {
    setStartingDeg((prev) => prev + 50);
    await circleTransForm();
  };

  const handleCircleRotateClickNext = async () => {
    if (!isClickedOnces) {
      await circleTransForm();
      setIsClickedOnces(true);
    }

    clearInterval(handleInterval);
    moveNext();
  };
  // console.log(isIntersecting);
  // console.log(windowWidth);

  const movePrev = async () => {
    setStartingDeg((prev) => prev - 50);
    await circleTransForm();
  };
  const handleCircleRotateClickPrev = async () => {
    if (!isClickedOnces) {
      await circleTransForm();
      setIsClickedOnces(true);
    }
    clearInterval(handleInterval);
    movePrev();
  };

  useEffect(() => {
    if (!isOnSkills || isMove) return;
    setHandleInterval(
      setInterval(() => {
        circleTransForm();
        moveNext();
      }, 3000)
    );
    setIsMove(true);
  }, [isOnSkills]);

  return (
    <div className={classes["circle-con"]}>
      {isComplete && (
        <button
          onClick={handleCircleRotateClickPrev}
          className={classes["prev-btn"]}
        >
          <img src={arrow} />
        </button>
      )}
      <div
        className={`${
          isOnSkills ? classes.circles : classes["before-circle_animation"]
        }`}
      >
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          SASS
          <Stars val="4.5" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          Adobe XD
          <Stars val="4" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          Node.js
          <Stars val="4.5" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          React
          <Stars val="4.5" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          <p>HTML</p>
          <Stars val="4.5" />
        </div>{" "}
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          CSS
          <Stars val="4.5" />
        </div>{" "}
        <div
          className={`${classes.circle} ${classes["circle-3"]}`}
          style={{ background: "#fefff5" }}
          id="circle"
        >
          {" "}
          JavaScript
          <Stars val="5" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          PhotoShop
          <Stars val="3.5" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          Git
          <Stars val="4.5" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          SEO
          <Stars val="3" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          BootStrap
          <Stars val="4.5" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          Jest
          <Stars val="3" />
        </div>
        <div className={`${classes.circle} ${classes["circle-3"]}`} id="circle">
          {" "}
          UI design
          <Stars val="4.5" />
        </div>
      </div>
      {isComplete && (
        <button
          onClick={handleCircleRotateClickNext}
          className={classes["next-btn"]}
        >
          <img src={arrow} />
        </button>
      )}
    </div>
  );
};

export default SkillCircles;
