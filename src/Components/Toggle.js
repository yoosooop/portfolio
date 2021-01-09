import React from "react";
import Style from "./Toggle.module.scss";

export default function Toggle({ darkMode, handleClick }) {
  return (
    <div className={Style.toggle} onClick={handleClick}>
      {darkMode ? (
        <span aria-label="Yellow Heart" role="img">
          💛
        </span>
      ) : (
        <span aria-label="Black Heart" role="img">
          🖤
        </span>
      )}
    </div>
  );
}
