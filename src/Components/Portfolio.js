import React from "react";
import Style from "./Portfolio.module.scss";
import img1 from "../img/crecker_01.png";
import img2 from "../img/placepic.png";
import { info } from "../Info/Info";

export default function Portfolio() {
  let portfolioInfo = info.portfolio;

  let img = [img1, img2];

  function createGrid() {
    let results = [];
    let j = 0;
    for (let i = 0; i < portfolioInfo.length; i++) {
      results.push(
        <div className={Style.block}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={info.portfolio[i].liveLink}
          >
            <img className={Style.image} src={img[j++]} alt="good" />
          </a>
          <h2>{info.portfolio[i].title}</h2>
        </div>
      );
    }
    return results;
  }

  return (
    <main>
      <div className={Style.projectsGrid}>{createGrid()}</div>
    </main>
  );
}
