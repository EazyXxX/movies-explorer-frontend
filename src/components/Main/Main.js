import "./main.css";
import React from "react";
import Promo from "../Promo/promo";
import AboutProject from "../About/about";
import Techs from "../Techs/techs";
import AboutMe from "../AboutMe/aboutme";
import Portfolio from "../Portfolio/portfolio";

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
