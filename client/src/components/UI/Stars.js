import React from "react";
import classes from "./styles/stars.module.css";

const calcStars = (stars) => {
  if (stars > 5) return console.log("invalid stars val!");

  let starsArr = [];
  const splited = stars + "".split(".");

  for (let i = 0; i < splited[0]; i++) {
    starsArr.push(
      <div
        key={`${i}-filled`}
        className={`${classes["clip-star"]} ${classes["filled"]}`}
      ></div>
    );
  }

  if (splited[1])
    starsArr.push(
      <div
        key={`half`}
        className={`${classes["clip-star"]} ${classes["half"]}`}
      ></div>
    );

  const starsArrLength = starsArr.length;
  if (starsArrLength === 5) return starsArr;

  const remainingStars = 5 - starsArrLength;
  for (let i = 0; i < remainingStars; i++) {
    starsArr.push(
      <div key={`${i}-star`} className={`${classes["clip-star"]}`}></div>
    );
  }
  return starsArr;
};

const Stars = ({ val }) => {
  const finJsx = calcStars(val);
  return (
    <div className={classes["stars-con"]}>
      <div> {finJsx}</div>
      {/* <p>{val}</p> */}
    </div>
  );
};

export default Stars;

// TRASH
// import parse from "html-react-parser";  (install is needed)
// const finJsx = calcStars(3).map((str) => parse(str.replace(/\\\//g, "/")));
// console.log(finJsx);

// const calcStars = (val) => {
//   let totalStars;
//   const stars = val + "".split(".");

//   const fullStars = "<div className={`${classes['clip-star']}`}></div>".repeat(
//     stars[0]
//   );

//   totalStars = fullStars;
//   if (stars[1])
//     totalStars += "<div className={`${classes['clip-star']} half`}></div>";

//   const totalStarsArray = totalStars.split("</div>");
//   const totalStarsLength = totalStarsArray.length - 1;

//   if (totalStarsLength === 5) return totalStars;

//   const remainingStars = 5 - totalStarsLength;

//   totalStars +=
//     "<div className={`${classes['clip-star']} noStar`}></div>".repeat(
//       remainingStars
//     );

//   const finalStarsArr = totalStarsArray.map((star) => star + "</div>");

//   return finalStarsArr;
// };
