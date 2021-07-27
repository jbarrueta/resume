import {
  Brightness2 as NightIcon,
  Brightness7 as DayIcon,
  WbSunny,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import "./NightModeToggle.css";

export default function NightModeToggle({ nightMode, toggle, className }) {
  useEffect(() => {
    //TODO
    return () => {
      //TODO
    };
  }, [nightMode]);

  return (
    <div className={`NightModeToggle ${className}`}>
      <label className="toggle_wrapper" htmlFor="toggle">
        <div
          className={`toggle shadow-3 ${nightMode ? "enabled" : "disabled"}`}
        >
          <div className="icons">
            <WbSunny />
            <NightIcon />
          </div>
          <input
            type="checkbox"
            id="toggle"
            name="toggle"
            defaultChecked={nightMode}
            onClick={toggle}
          />
        </div>
      </label>
    </div>
  );
}
