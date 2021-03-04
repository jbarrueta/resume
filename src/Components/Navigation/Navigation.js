import React from "react";
import "./Navigation.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="pa4 mb4">
      <div className="tc b white f1 mb4">Jorge Barrueta</div>
      <div className="flex justify-center">
        <div
          className="logo di br b--near-white"
          style={{ paddingRight: "20px" }}
        >
          <img src={logo} alt="" className="headImg" />
        </div>
        <div className="bl b--near-white bw2">
          <NavLink
            exact
            to="/"
            className="f3 link dim white pa3 pb1 mb2 pointer di"
            activeClassName="b"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/resume"
            className="f3 link dim white pa3 pb1 mb2 pointer di"
            activeClassName="b"
          >
            Resume
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="f3 link dim white pa3 pb1 mb2 pointer di"
            activeClassName="b"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
