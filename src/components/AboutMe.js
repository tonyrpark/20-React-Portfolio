import React from "react";
import tonyAndJess from "./assets/images/tonyAndJess.jpg";
import GitHub from "./assets/images/githubSquare.png";
import linkedIn from "./assets/images/linkedIn.png";
import stackoverflow from "./assets/images/stackoverflow.png";
import resume from "./assets/images/resume.png";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AboutMe = () => {
  return (
    <div id="main-container" className="container">
      <section className="main-section">
        <h1>About Me</h1>
        <img src={tonyAndJess} className="auth-image" alt="Tony and his Wife" />
        <p>
          Tony is the Senior Development Operations and Schema Engineer for
          Expeditionary Technical Solutions, Inc; a small tech company in
          Oceanside, CA. Prior to his current career, he spent the last seven
          years as an Officer in the United States Marine Corps where he
          deployed to Iraq in support of Operation Inherent Resolve. He is now
          happily settled in Temecula, CA with his wife, Jessica, and three
          dogs: Cloud, Cisco, and Nala.
        </p>

        <p>
          Tony also Co-Founded Temecula Web Solutions, LLC in April 2021. Please
          check out his{" "}
          <a href="https://www.temeculawebsolutions.com">business website!</a>
        </p>

        <p>
          Tony is a big fan of cars and loves spending his free time working on
          his Toyota 86 and Toyota Tacoma. He is also a big fan of sports and
          loves the Los Angeles Dodgers, Lakers, and Rams.
        </p>

        <p>
          He is a Certified Information Systems Security Professional (CISSP)
          and holds his Bachelor's Degree from the University of California, San
          Diego. He is currently working on his Master's of Cybersecurity
          Engineering at the University of San Diego. In December 2020, he began
          the full-stack web development bootcamp at UC San Diego extension.
          Check out my{" "}
          <a href="https://1drv.ms/b/s!Aqy4FmsQotGbhPBggZNYBepDpcOrUA">
            resume here.
          </a>
        </p>
      </section>

      <section className="sidebar">
        <div id="connect">
          <h2>Connect with Me</h2>

          <a target="_blank" href="https://github.com/tonyrpark">
            <img src={GitHub} className="social" alt="GitHub Icon" />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/tony-park-8845935a/"
          >
            <img src={linkedIn} className="social" alt="LinkedIn Icon" />
          </a>

          <a
            target="_blank"
            href="https://stackoverflow.com/users/14846612/tony-park"
          >
            <img
              src={stackoverflow}
              className="socialstack"
              alt="StackOverflow Icon"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
