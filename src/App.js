import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path={"/main"}>
            <Main />
          </Route>
          {/* <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
  // return (
  //   <>
  //     <Particles
  //       className="particles-canvas"
  //       params={{
  //         particles: {
  //           number: {
  //             value: 30,
  //             density: {
  //               enable: true,
  //               value_area: 900,
  //             },
  //           },
  //           shape: {
  //             type: "circle",
  //             stroke: {
  //               width: 6,
  //               color: "#f9ab00",
  //             },
  //           },
  //         },
  //       }}
  //     />
  //     <Navbar />
  //     <Header />
  //   </>
  // );
}

export default App;
