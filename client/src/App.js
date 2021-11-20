import React, { useState } from "react";
import ReactDOM from "react-dom";
import ContactMe from "./components/ContactMe/ContactMe.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import HeroModel from "./components/HeroModel/HeroModel";
import Projects from "./components/Projects/Projects.js";
import Skills from "./components/Skills/Skills.js";
import "./styles/animation.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAppLoading = () => {
    setIsLoaded(true);
  };

  //  let times = 1;
  //  console.log("APP running :", times + 1);

  return (
    <div onLoad={handleAppLoading}>
      {!isLoaded &&
        ReactDOM.createPortal(
          <div className="loading-model">
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>,
          document.getElementById("loading-model_con")
        )}

      <Header />
      <HeroModel />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
