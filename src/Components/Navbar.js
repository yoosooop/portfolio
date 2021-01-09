import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Navbar.module.scss";
import Toggle from "./Toggle";
import classNames from "classnames";
//import { info } from "../Info/Info";

export default function Navbar({ darkMode, handleClick }) {
  return (
    <nav>
      <ul className={classNames(Style.navList, darkMode ? Style.dark : null)}>
        <li>
          <NavLink exact activeClassName="current" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/about">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/yoosooop">
            MY LOGO
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="current" to="/portfolio">
            PROJECT
          </NavLink>
        </li>
        <Toggle darkMode={darkMode} handleClick={handleClick} />
      </ul>
    </nav>
  );
}
