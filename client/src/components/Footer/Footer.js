import React from "react";
import classes from "./styles/footer.module.css";
import logo from "../../Assets/icons/svg/logo-white.svg";
import insta from "../../Assets/icons/svg/insta.svg";
import fb from "../../Assets/icons/svg/fb.svg";
import inIcon from "../../Assets/icons/svg/in.svg";
import gitHub from "../../Assets/icons/svg/git.svg";
import behance from "../../Assets/icons/svg/behance.svg";

const Footer = () => {
  return (
    <div className={classes["footer-con"]}>
      <div className={classes.footer}>
        <div className={classes.logo}>
          {" "}
          <img src={logo} />
        </div>
        <div className={classes.social}>
          <div className={classes.icons}>
            <a href="https://www.instagram.com/premjethwa_/" target="_blank">
              <img src={insta} alt="insta" />
            </a>
            <a href="https://www.facebook.com/premjethwa75" target="_blank">
              <img src={fb} alt="fb" />
            </a>
            <a href="https://www.linkedin.com/in/premjethwa" target="_blank">
              <img src={inIcon} alt="inIcon" />
            </a>
            <a href="https://github.com/prem-jethwa" target="_blank">
              <img src={gitHub} alt="gitHub" />
            </a>
            <a href="https://www.behance.net/premjethwa2" target="_blank">
              <img src={behance} alt="inIcon" className={classes.behance} />
            </a>
          </div>
          <h3>© 2021 Prem Jethwa All Rights Reserved</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
