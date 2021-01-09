import React from "react";
import Style from "./Home.module.scss";
import classNames from "classnames";
import { info } from "../Info/Info";

export default function Home() {
  const firstNameStyle = {
    background: info.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  let me = info.me;

  function createList() {
    let results = [];
    for (let i = 0; i < me.length; i++) {
      let value = me[i];
      results.push(
        <li>
          <span aria-label="emoji" role="img" className={Style.emoji}>
            {value[0]}
          </span>{" "}
          {value[1]}
        </li>
      );
    }
    return results;
  }

  return (
    <main>
      <div className={classNames(Style.avatar)}>
        <img src={info.profileImg} alt="profile" className={Style.mainImg} />
      </div>
      <div className={Style.mainText}>
        <h1>
          <span style={firstNameStyle}>{info.firstName} </span> 's Portfolio👩🏻‍💻
        </h1>
        <h2>안녕하세요! 유희수입니다.</h2>
        <ul>{createList()}</ul>
      </div>
    </main>
  );
}
