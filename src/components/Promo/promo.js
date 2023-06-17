import React from "react";
import "./promo.css";
import "../Animation/animation.css";

function promo() {
  return (
    <section className="promo">
      <div className="promo__all-box">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <ul className="promo__navbar">
          <li className="promo__nav-wrap animation__button">
            <a href="#about" className="promo__nav-element">О проекте</a>
          </li>
          <li className="promo__nav-wrap animation__button">
            <a href="#tech" className="promo__nav-element">Технологии</a>
          </li>
          <li className="promo__nav-wrap animation__button">
            <a href="#about-me" className="promo__nav-element">Студент</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default promo;
