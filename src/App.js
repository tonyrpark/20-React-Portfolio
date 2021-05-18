import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <div>
        <Navbar />
        <Switch>
          <Route exact path={"/"}>
            <LandingPage />
          </Route>
          <Route exact path={"/aboutme"}>
            <AboutMe />
          </Route>
          <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
