import React from "react";
import "./about.css";

function AboutProject() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__column-box">
        <div className="about__nested-box">
          <h3 className="about__headtext">Дипломный проект включал 5 этапов</h3>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__nested-box">
          <h3 className="about__headtext">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ul className="about__time-bar">
        <li className="about__time-grid">1 неделя</li>
        <li className="about__time-grid">4 недели</li>
        <li className="about__time-grid">Back-end</li>
        <li className="about__time-grid">Front-end</li>
      </ul>
    </section>
  );
}

export default AboutProject;
