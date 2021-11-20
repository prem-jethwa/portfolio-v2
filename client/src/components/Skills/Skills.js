import React, { useEffect, useRef, useState } from "react";
import { useDelay } from "../../hooks/useDelay";
import { useIntersect } from "../../hooks/useIntersect";
import resume from "../../Assets/resume.pdf";
// import InfoPopup from "../UI/InfoPopup";

import classes from "./styles/skills.module.css";
import SkillCircles from "./SkillCircles";

// console.log(onCircle(13, 600, 360, 60));

const Skills = () => {
  const skillsReff = useRef(null);

  const [setNode, entry] = useIntersect({
    threshold: document.body.offsetWidth < 500 ? 0.5 : 0.8, // change offsetHeigth to offsetWidth
    // threshold: 0.5,
  });

  const [isComplete, setStart] = useDelay(1500);
  const [isOnSkills, setIsOnSkills] = useState(false);

  useEffect(() => {
    // setCircles(document.querySelectorAll(classes.circle));
    if (skillsReff) setNode(skillsReff);
    if (!entry.isIntersecting || isOnSkills) return;

    setStart(true);
    setIsOnSkills(true);
  }, [entry.isIntersecting]);

  return (
    <div className={classes["skills-con"]} id="skills">
      <div className={classes["skills-desc"]} ref={skillsReff}>
        <div className={classes["skills"]}>
          <div className={classes["tools-heading"]}>
            <p>Skills</p>
            <a href={resume} target="_blank">
              Get Resume
            </a>
          </div>

          <div className={classes["tools-circle"]}></div>
          <div className={classes["tools-circle2"]}></div>
          {/* <InfoPopup
            content="Test"
            childClass={classes.circle}
            className={`${classes["circle-con"]}`}
          > */}
          <SkillCircles
            isOnSkills={isOnSkills}
            isIntersecting={entry.isIntersecting}
            isComplete={isComplete}
          />
          {/* </InfoPopup> */}
        </div>

        <p
          className={`${
            isOnSkills ? (isComplete ? classes["desc"] : "go-out") : "go-out"
          } `}
        >
          I'm Full Stack developer from India. <br /> Love JavaScript and Its
          Frameworks.
          <div className={classes.status}>
            <span>Now</span>
            <br /> Currently interested working on new or existing project
          </div>
        </p>
      </div>
    </div>
  );
};

export default Skills;

// const options = {
//   root: document.getElementById("header"),
//   rootMargin: "0px",
//   threshold: 0.1,
// };

// const callback = (entries, observer) => {
//   const { isIntersecting, isVisible } = [...entries][0];

//   setEntry(entries);
//   console.log(isIntersecting, isVisible);
// };
// const observer = new IntersectionObserver(callback, options);

// useEffect(() => {
//   if (!skillsReff.current) return;

//   observer.observe(skillsReff.current);
// }, [skillsReff.current, entry[0].isIntersecting, entry[0].isVisible]);

// console.log(skillsReff.current);
// console.log(entry[0].isIntersecting, entry[0].isVisible);
