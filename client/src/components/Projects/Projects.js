import React from "react";
import classes from "./styles/projects.module.css";
import Heading from "../UI/Heading";
// import ProjectLeft from "./Project/ProjectLeft/ProjectLeft";
// import ProjectRight from "./Project/ProjectRight/ProjectRight";

import Project1Img from "../../Assets/img/dummy-proj.png";
import Project from "./Project/Project";
// project img
import alpineImg from "../../Assets/img/alpine.png";
import beesImg from "../../Assets/img/bees.png";
import keaImg from "../../Assets/img/kea.png";
import koelImg from "../../Assets/img/koel.png";

const Projects = () => {
  return (
    <div className={classes["project-con"]} id="projects">
      <Heading heading="Projects" />
      <Project
        key="1"
        projectNo="01"
        projectImg={koelImg}
        projectName="Koel"
        previewLink="https://prem-jethwa.github.io/koel"
        sourceLink="https://github.com/prem-jethwa/koel"
        projectDesc={
          <>
            <h3>
              {" "}
              Koel is a <span> Music Streaming</span> Website{" "}
            </h3>
            <ul>
              <li> Listen online Songs/music </li>
              <li> Login / Registration </li>
              <li> Save favourite Songs </li>
              <li> Upload Songs which will available to everyone </li>
              <li> Navigation to playlists (Global | MySongs | Favourites)</li>
            </ul>
          </>
        }
        projectBuild={
          <>
            <h3> Koel is a Music Streaming Website</h3>
            <ul>
              <li>
                {" "}
                Purely build with <span> JavaScript</span> (Vanila JavaScript)
              </li>
              <li>
                {" "}
                Most of high-level Array Methods are used Such as foreach(),
                map(), filter(), reduce() and more.
              </li>
              <li> BUILD based on MVC Pattern </li>
              <li> Use Classes in JavaScript </li>
              <li> Login / Registration Authentication With JWT token. </li>
              <li>
                {" "}
                NoSQL (mongoDB) Database integration with CRUD Operation{" "}
              </li>
              <li> Working With FILE (audio + images) </li>
            </ul>
          </>
        }
      />
      <Project
        key="2"
        position="right"
        projectNo="02"
        projectImg={beesImg}
        projectName="Bees"
        previewLink="https://beesbypj.herokuapp.com"
        sourceLink="https://github.com/prem-jethwa/bees"
        projectDesc={
          <>
            <h3>
              {" "}
              Bees is a <span>Task Management</span> Website{" "}
            </h3>
            <ul>
              <li>
                {" "}
                Create your Task with title, Date of Completion and Description{" "}
              </li>
              <li> Login / Registration is Required!</li>
              <li>
                {" "}
                Also, you can EDIT | COMPLETE | CREATE MORE TASK and View
                existing tasks.
              </li>
            </ul>
          </>
        }
        projectBuild={
          <>
            <h3> Bees is a Task Management Website.</h3>
            <ul>
              <li>
                {" "}
                Based on <span> NODE.JS</span>{" "}
              </li>
              <li> Used Template Engine Handle Bar.</li>
              <li> SQL(mySql) Database integration with CRUD Operation</li>
              <li> Session based authentication</li>
              <li> Proper Route Protection </li>
              <li> Proper Error Handling</li>
              <li> Prevented from XSS(cross site scripting) Attack</li>
            </ul>
          </>
        }
      />

      <Project
        key="3"
        projectNo="03"
        projectImg={alpineImg}
        projectName="Alpine"
        previewLink="https://alpinebypj.netlify.app"
        sourceLink="https://github.com/prem-jethwa/alpine"
        projectDesc={
          <>
            <h3>
              Alpine is a <span> Weather</span> Website{" "}
            </h3>
            <li> View Current Weather Data Points</li>
            <li> View Weather Map with 5 different Layers</li>
            <li> Also, you can READ Latest News</li>
          </>
        }
        projectBuild={
          <>
            {" "}
            <h3> Alpine is a Weather Website</h3>
            <ul>
              <li>
                {" "}
                Build with <span>REACT focus on API</span>{" "}
              </li>
              <li>
                {" "}
                9+ API call were made in single load from 3 different API’s
              </li>
              <li> Styled using React style.module with SASS (CSS compiler)</li>
              <li> Used context for heavy State management.</li>
              <li>
                {" "}
                Used most of React Hooks such as useState(), useEffect(),
                useRef(), useReducer() and Other as well.{" "}
              </li>
              <li> Based on Functional Component.</li>
            </ul>
          </>
        }
      />

      <Project
        key="4"
        position="right"
        projectNo="04"
        projectImg={keaImg}
        projectName="Kea"
        previewLink="https://keabypj.netlify.app"
        sourceLink="https://github.com/prem-jethwa/kea"
        projectDesc={
          <>
            <h3>
              Kea is an <span>Food Delivery</span> Website
            </h3>
            <li> Login / Registration</li>
            <li> Navigate to Restaurant</li>
            <li> Add Food to cart and Order them </li>{" "}
          </>
        }
        projectBuild={
          <>
            {" "}
            <h3> Kea is an Food Delivery Website</h3>
            <ul>
              <li>
                {" "}
                Build with <span>REACT</span>
              </li>
              <li> Based on Functional Component.</li>
              <li> Styled using React style.module with SASS language</li>
              <li>
                {" "}
                “Redux” Used for State management and login/ Registration
              </li>
              <li> “React-Router” Used for Routing</li>
              <li>
                {" "}
                Other React features are used like ref passing, hooks, and more.
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default Projects;
