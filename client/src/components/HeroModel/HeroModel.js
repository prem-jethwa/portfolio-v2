import React, { useState } from "react";
import classes from "./styles/hero-model.module.css";
import heroImg from "../../Assets/img/hero.png";
import arrow from "../../Assets/icons/svg/arrow.svg";
import { useDelay } from "../../hooks/useDelay";

function HeroModel() {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [isCompleted, setStart] = useDelay(window.innerWidth > 850 ? 1200 : 0);

  const handleOnLoad = () => {
    setIsLoaded(true);
    // setStart(true);
  };
  return (
    <div className={classes["hero-con"]} onLoad={handleOnLoad}>
      <div className={classes.hero}>
        <div
          className={
            isLoaded
              ? // ? isCompleted
                classes.title
              : "slideup-hero_title"
            // : "slideup-hero_title"
          }
        >
          <h2>
            Hi,
            <br /> I am <br /> <span>Prem Jethwa.</span>
          </h2>
          <p>
            Front end Back end Developer, <br /> UI designer
          </p>
          <div className={classes["ct-btn"]}>
            <a href="#contactme">
              <button>
                Contact Me <img src={arrow} />{" "}
              </button>
            </a>
          </div>
        </div>
        <img
          src={heroImg}
          className={
            isLoaded
              ? // ? isCompleted
                classes["hero-img"]
              : "slideup-hero_img"
            // : "slideup-hero_img"
          }
        />
        <div className={classes["circle-1"]}></div>
        <div className={classes["circle-2"]}></div>
      </div>
    </div>
  );
}

export default HeroModel;
