import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import wfm from "./assets/images/wfm.png";
import flb from "./assets/images/flb.png";
import msNew from "./assets/images/msNew.png";
import fitness from "./assets/images/fitness.jpg";
import GitHub from "./assets/images/githubSquare.png";
import linkedIn from "./assets/images/linkedIn.png";
import stackoverflow from "./assets/images/stackoverflow.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2> Feel free to click on any site logos:</h2>
      <h3 href="https://wavefindermorocco.com">Wave Finder Morocco</h3>
      <a href="https://wavefindermorocco.com">
        <img
          src={wfm}
          alt="WaveFinderMorocco webpage"
          width="100"
          height="100"
        />
      </a>
      <h3 href="https://fairylashbrows.com">Fairylash Brows</h3>
      <a href="https://fairylashbrows.com">
        <img src={flb} alt="Fairylash Brows webpage" width="125" height="100" />
      </a>

      <h3 href="https://ms-new-foodie.herokuapp.com/">
        Project 2 (UCSD): Ms. New Foodie
      </h3>
      <a href="https://ms-new-foodie.herokuapp.com/">
        <img
          src={msNew}
          alt="Ms. New Foodie Website Logo"
          width="125"
          height="100"
        />
      </a>

      <h3 href="https://github.com/tonyrpark/Project-01-Calorie-Exercise-API">
        Project 1 (UCSD): Fitness Calorie Calculator
      </h3>
      <a href="https://github.com/tonyrpark/Project-01-Calorie-Exercise-API">
        <img src={fitness} alt="Calorie App Logo" width="150" height="125" />
      </a>

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
export default Portfolio;
