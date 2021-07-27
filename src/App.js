import Particles from "react-particles-js";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import "tachyons";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";
import React, { Component } from "react";
import NightModeToggle from "./Components/NightModeToggle/NightModeToggle";
import Projects from "./Pages/Projects/Projects";

class App extends Component {
  state = {
    isMobile: window.innerWidth <= 700,
    nightMode: false,
  };
  componentDidMount() {
    window.addEventListener("resize", this.checkMobile);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  }

  checkMobile = () => {
    this.setState({ isMobile: window.innerWidth <= 700 });
  };

  toggle = () => {
    this.setState((prevState) => ({ nightMode: !prevState.nightMode }));
  };

  render() {
    // alert(window.innerWidth);
    const { isMobile, nightMode } = this.state;
    const particleParams = {
      particles: {
        number: {
          value: isMobile ? 50 : 50,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: { value: nightMode ? "#FFFFFF" : "#121212" },
        line_linked: {
          enable: true,
          distance: isMobile ? 200 : 200,
          color: nightMode ? "#FFFFFF" : "#000000",
        },
        move: {
          speed: isMobile ? 0.7 : 1,
        },
      },
    };
    return (
      <Route>
        <div className={`${nightMode ? "night" : "day"}`}>
          <div className={`App`}>
            <Particles className="App_particles" params={particleParams} />
            <Switch>
              <Route path="/" exact>
                <Home
                  isMobile={isMobile}
                  particleParams={particleParams}
                  nightMode={nightMode}
                  toggle={this.toggle}
                />
                <NightModeToggle
                  nightMode={nightMode}
                  toggle={this.toggle}
                  className="App_night_toggle"
                />
              </Route>
              <Route>
                <Navigation
                  nightMode={nightMode}
                  toggle={this.toggle}
                  isMobile={isMobile}
                />
                <div className={`App_left`}></div>
                <div className={`App_right`}></div>
                <div className="App_content_area">
                  <div className="App_content shadow-3">
                    <Route
                      path="/resume"
                      component={() => <Resume isMobile={isMobile} />}
                    />
                    <Route path="/projects" component={() => <Projects />} />
                    <Route path="/contact" component={() => <Contact />} />
                  </div>
                </div>
                <div className={`App_bottom`}></div>
              </Route>
            </Switch>
          </div>
        </div>
      </Route>
    );
  }
}

export default App;
