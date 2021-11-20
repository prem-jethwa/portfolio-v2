import React from "react";
import classes from "./styles/header.module.css";
import logo from "../../Assets/icons/svg/logo-white.svg";
import menu from "../../Assets/icons/svg/menu-white.svg";
import resume from "../../Assets/resume.pdf";

function Header() {
  return (
    <>
      <header className={classes.header} id="header">
        <div className={classes["header-con"]}>
          <img className={classes.logo} src={logo} />
          <button>
            <img className={classes.menu} src={menu} />
          </button>
          <nav className={classes.nav}>
            <ul className={classes["nav-menu"]}>
              <a href="#">
                <li className={classes.list}>About Me</li>
              </a>
              <a href="#projects">
                <li className={classes.list}>Projects</li>
              </a>
              <a href="#contactme">
                <li className={classes.list}>Contact Me</li>
              </a>
              <a href={resume} target="_blank">
                <li className={classes.list}>My Resume</li>
              </a>
              {/* <li className={classes.list}></li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
