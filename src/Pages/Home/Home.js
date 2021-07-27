import { ArrowForward } from "@material-ui/icons";
import React, { useState } from "react";
import Particles from "react-particles-js";
import { useHistory } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import NightModeToggle from "../../Components/NightModeToggle/NightModeToggle";
import "./Home.css";

export default function Home({ isMobile, particleParams, nightMode, toggle }) {
  const [full, setFull] = useState(true);
  const history = useHistory();
  const route = (path) => {
    setFull(false);
    setTimeout(() => history.push(path), 500);
  };
  return (
    <div className="all_center">
      <div className={`Home`}>
        <div className="">
          <div className={`content all_center ${full ? "" : "exiting"}`}>
            <div>
              <Logo size="150" />
              <h1 className="f1 white title_font mb0">jorge barrueta</h1>
              <p className="white i">Software engineer in Austin, TX</p>
              <br />
              <span className="button grow dim" onClick={() => route("resume")}>
                Resume <ArrowForward />
              </span>
              <span
                className="button grow dim"
                onClick={() => route("projects")}
              >
                Projects <ArrowForward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
