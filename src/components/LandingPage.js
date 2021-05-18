import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>UCSD Fullstack - Tony Park React Portfolio</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "SEO",
            "Marketing",
            "Creative Content Writing",
            "MERN",
            "Node.js",
            "Bootstrap",
            "Handlebars.js",
            "MongoDB",
            "NoSQL",
            "Cybersecurity",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="/aboutme" className="btn-main-offer">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
