import React from "react";
import Style from "./Yoosooop.module.scss";
import classNames from "classnames";
import { info } from "../Info/Info";

export default function Yoosooop() {
  return (
    <main>
      <div>
        <img src={info.logo} alt="logo" className={Style.mainLogo} />
      </div>
      <div className={Style.mainText}>
        <h1>LOGO</h1>
        <h2>YOOHEESOO</h2>
        <p>이 로고는 제가 직접 디자인한 로고입니다.</p>
        <p>이 로고의 의미는 다음과 같습니다.</p>
        <p>제 이름이 영어로 YOOHEESOO입니다.</p>
        <p>
          그래서 이걸 따서 만들어보았습니다. 잘 보면 여기에 모든 알파벳이
          들어가있습니다.
        </p>
        <p>
          사실 디자이너가 아니라 부족한 점이 많은 로고지만 저를 잘 보여주는
          디자인이라고 생각합니다.
        </p>
      </div>
    </main>
  );
}
