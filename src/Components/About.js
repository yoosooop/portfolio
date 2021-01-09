import React from "react";
import Style from "./About.module.scss";
import classNames from "classnames";
import { info, colors } from "../Info/Info";

const Carrier = ({ title, role, term }) => (
  <div>
    <div className={Style.carrier}>
      <h2 className={Style.title}>{title}</h2>
      <div>
        <p className={Style.role}>{role}</p>
        <div className={Style.term}>{term}</div>
      </div>
    </div>
  </div>
);

export default function About() {
  return (
    <main className={Style.main}>
      <h1>EXPERIENCE</h1>

      <Carrier
        title="영어 회화 동아리 DAISY"
        role="부회장"
        term="2019.02-2019.08"
      />
      <Carrier
        title="IT 벤처 창업 동아리 SOPT"
        role="서버 파트"
        term="2019.09-2020.01"
      />
      <Carrier
        title="(주)퀀텀솔루션 동계 인턴"
        role="소프트웨어개발팀"
        term="2020.01-2020.02"
      />
      <Carrier
        title="IT 벤처 창업 동아리 SOPT"
        role="기획 파트"
        term="2020.03-2020.08"
      />
      <Carrier
        title="IT 벤처 창업 동아리 SOPT"
        role="웹 파트 / 총무"
        term="2020.09-Current"
      />
    </main>
  );
}
