import React, { useEffect, useReducer, useRef, useState } from "react";
import classes from "./styles/info-popup.module.css";

const reducer = (_, action) => {
  if (action.left > 170 && action.down > 50 && action.up > 50) {
    return "left";
  }
  if (action.right > 90 && action.down > 100) {
    return "bottom";
  }
  if (action.right > 150 && action.down > 100) {
    return "right";
  }
  if (action.up > 100 && action.left > 50) {
    return "up";
  }

  return "no";
};

console.log(10 > 100);

const InfoPopup = (props) => {
  const pupopRef = useRef(null);

  const [position, setPosition] = useState({});
  const [isHover, setIsHover] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    left: null,
    right: null,
    up: null,
    down: null,
  });

  useEffect(() => {
    if (!position) return;
    dispatch(position);
    // setIsHover(true);

    // return () => setIsHover(false);
  }, [position]);

  const handleMouseOver = (e) => {
    console.log(e.target.className.split(" ")[0] === props.childClass);

    // setIsHover(false);
    const el = e.target;
    if (!el.className.split(" ")[0] === props.childClass)
      return setIsHover(false);

    console.log(el.className.split(" ")[0] === props.childClass);
    if (!pupopRef) return setIsHover(false);

    const posObj = {
      left: el.getBoundingClientRect().left,
      up: el.getBoundingClientRect().top,
      right: window.innerWidth - el.getBoundingClientRect().right,
      down: window.innerHeight - el.getBoundingClientRect().bottom,
    };

    setIsHover(true);
    setPosition(posObj);
  };
  console.log(position);

  return (
    <>
      <div className={`${classes.popup}`}>
        {isHover && (
          <div
            className={`${classes.pop} ${classes[state]}`}
            style={{
              inset: `${position.up - 50}px ${position.right - 75}px ${
                position.down - 50
              }px ${position.left - 75}px`,
            }}
          >
            {"Dummy Text"}
            {/* <div
              className={`${classes["arrow"]} ${classes[`arrow-${state}`]}`}
            ></div> */}
          </div>
        )}
      </div>
      <div
        className={`${props.className} ${classes["popup-con"]}`}
        ref={pupopRef}
        onMouseEnter={handleMouseOver}
      >
        {props.children}
      </div>
    </>
  );
};

export default InfoPopup;

// useEffect(() => {
//   if (!pupopRef) return;

//   const posObj = {
//     left: pupopRef.current.getBoundingClientRect().left,
//     up: pupopRef.current.getBoundingClientRect().top,
//     right: window.innerWidth - pupopRef.current.getBoundingClientRect().right,
//     down:
//       window.innerHeight - pupopRef.current.getBoundingClientRect().bottom,
//   };

//   setPosition(posObj);
// }, [pupopRef]);

{
  /* <div className={`${props.className} ${classes["popup-con"]}`}> */
}
{
  /* <div
  ref={pupopRef}
  className={`${classes[""]}`}
  onMouseEnter={handleMouseOver}
  // style={{ zIndex: 10 }}
>
  {props.children}
</div> */
}
{
  /* <div className={classes["popup"]}>
  <div
    className={`${classes.pop} ${classes[state]}`}
    // style={{ zIndex: 20 }}
  >
    {props.content}
    <div
      className={`${classes["arrow"]} ${classes[`arrow-${state}`]}`}
    ></div>
  </div>
</div>
<div
  ref={pupopRef}
  className={`${classes[""]}`}
  onMouseEnter={handleMouseOver}
  style={{ zIndex: 10 }}
>
  {props.children}
</div>
</div> */
}
