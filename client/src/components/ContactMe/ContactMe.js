import React, { useReducer, useRef, useState } from "react";
import classes from "./styles/contactme.module.css";
import Heading from "../UI/Heading";

const ContactMe = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [notify, setNotify] = useState("");

  // const [state, dispatch] = useReducer(reducer, "")

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // const contactmeEl = document.getElementById("contactme");
    // const topPos = contactmeEl.offsetTop;
    // contactmeEl.scrollTop = topPos;

    const userName = nameRef.current.value,
      email = emailRef.current.value,
      message = messageRef.current.value;

    // console.log(topPos, contactmeEl);

    if (!userName || userName.length < 3) {
      return setNotify("Name cannot be empty OR less than 3 characters!");
    }
    if (!email) {
      return setNotify("Email is required!");
    }
    if (!message || message.length < 10) {
      return setNotify(
        "Message cannot be empty & it cannot be less than 10 characters!"
      );
    }

    await fetch("https://portfoliobypj.herokuapp.com/msg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email,
        message,
      }),
    });

    nameRef.current.value =
      emailRef.current.value =
      messageRef.current.value =
        "";

    setNotify("Thanks for your responce");
  };

  return (
    <>
      <Heading heading="Contact Me" />
      <div className={classes["contactme-con"]} id="contactme">
        <div className={classes.main}>
          {notify && <div className={classes["notify-msg"]}>{notify}</div>}
          <form onSubmit={handleFormSubmit}>
            <div className={classes.contactme}>
              <div className={classes["name-email"]}>
                <div className={classes.field}>
                  <label>Name</label>
                  <input
                    ref={nameRef}
                    name="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className={classes.field}>
                  <label>Email</label>
                  <input
                    ref={emailRef}
                    name="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className={classes.msg}>
                <div className={classes.field}>
                  <label>Message</label>
                  <textarea
                    ref={messageRef}
                    name="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit">Send</button>
          </form>
          <div className={classes.or}>Or</div>
          <h2 className={classes.option}>
            <a href="mailto: dev@premjethwa.com">
              <span>Email: </span>dev@premjethwa.com{" "}
            </a>
          </h2>
          <div className={classes.or}>Or</div>
          <h2 className={classes.option}>
            <a href="tel:+919004252561">
              {" "}
              <span>Mobile: </span> (+91) 9004252561{" "}
            </a>
          </h2>
          <h1 className={classes.thanks}>Thanks for Scrolling till End!</h1>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
