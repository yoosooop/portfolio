import React from "react";
import profile from "../img/self.png";
import logo from "../img/logo.jpg";

export let colors = ["rgb(185, 85, 211)", "rgb(247, 10, 7)"];

export const info = {
  firstName: "Heesoo",
  lastName: "YOO",
  initials: "YOOSOOOP",
  profileImg: profile,
  logo: logo,
  gradient: `linear-gradient(90deg, ${colors})`,
  me: [
    ["✨", "YOO HEESOO"],
    ["🏫", "Seoul Women's University"],
    ["📖", "Software Convergence"],
    ["✉️", "heesoo21627@naver.com"],
  ],

  portfolio: [
    {
      title: "Crecker",
    },
    {
      title: "Placepic",
    },
  ],
};
