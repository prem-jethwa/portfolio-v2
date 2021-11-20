import React, { useEffect, useState, useRef } from "react";
import classes from "./styles/project.module.css";
import iconSourceCode from "../../../Assets/icons/svg/icon-sourcecode.svg";
import iconPreview from "../../../Assets/icons/svg/icon-preview.svg";
// import styled from "styled-components";
import { useIntersect } from "../../../hooks/useIntersect";

const Project = ({
  position = "left",
  projectNo,
  projectImg,
  projectName,
  projectDesc,
  projectBuild,
  previewLink,
  sourceLink,
}) => {
  const [behind, setBehind] = useState(false);

  const projectRef = useRef(null);
  const imgConRef = useRef(null);
  const [setNode, entry] = useIntersect({ threshold: 1 });
  const [isIntersected, setIsIntersected] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (projectRef) setNode(projectRef);
    if (!entry.isIntersecting) return;
    setIsIntersected(true);
  }, [entry.isIntersecting]);

  const clickHandler = () => {
    setBehind((state) => setBehind(!state));
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={classes["project-con"]} ref={projectRef}>
      {" "}
      <div className={classes.project}>
        <div
          ref={imgConRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${isIntersected ? classes["project-img"] : "slideup"}
  
          ${position === "right" ? classes.right_img : ""}`}
        >
          <div className={classes["for-bg"]}></div>
          <img
            className={classes["full-proj-img"]}
            src={projectImg}
            style={{
              ...(isHover && {
                transform: `translateY(${
                  imgConRef.current.offsetHeight -
                  imgConRef.current.scrollHeight
                }px)`,
              }),
            }}
          />

          <div className={classes.icons}>
            <a href={previewLink} target="_blank">
              {" "}
              <img src={iconPreview} />
            </a>
            <a href={sourceLink} target="_blank">
              {" "}
              <img src={iconSourceCode} />{" "}
            </a>
          </div>
        </div>
        <div
          className={`${behind ? classes["build-is-on"] : ""}  
          ${position === "right" ? classes.right_desc : classes.left_desc}
          ${isIntersected ? classes["project-desc"] : "rotateoff"} 
          `}
          style={{ transformOrigin: `top ${position}` }}
        >
          <div className={classes["no-name"]}>
            <h2> {projectNo}</h2>
            <p>{projectName} </p>
          </div>
          <p className={classes["desc-lists"]}>
            {behind ? projectBuild : projectDesc}
          </p>
          <div className={classes.build} onClick={clickHandler}>
            How Its Build?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

// const [autoMargin, setAutoMargin] = useState(false);
// const screenWidth = document.body.offsetWidth;

// const ProjIMG = styled.div`
//   ${(props) =>
//     props.position === "right" &&
//     `
//         margin: 1em 1em auto auto;
//       `};
// `;

// useEffect(() => {
//   if (screenWidth < 500) setAutoMargin(true);
// }, [screenWidth]);
