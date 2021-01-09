import React, { useState } from "react";
import Style from "./BaseLayout.module.scss";
import classNames from "classnames";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Yoosooop from "./Yoosooop";

function BaseLayout() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    console.log(darkMode);
  }

  return (
    <div
      className={classNames(
        Style.container,
        darkMode ? Style.dark : Style.light
      )}
    >
      <Navbar darkMode={darkMode} handleClick={handleClick} />
      <Main />
      <footer>
        <a target="_blank" href="https://github.com/yoosooop/">
          HEESOO's Github
        </a>
      </footer>
    </div>
  );
}

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/portfolio" component={Portfolio}></Route>
    <Route exact pate="/yoosooop" component={Yoosooop}></Route>
  </Switch>
);

export default BaseLayout;
