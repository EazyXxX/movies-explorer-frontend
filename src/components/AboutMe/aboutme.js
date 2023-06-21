import React from "react";
import Avatar from "../../images/photoProfile.png";
import "./aboutme.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <h2 className="about-me__title">Виталий</h2>
          <h3 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h3>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить.<br className="about-me__break"/> С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            to="https://github.com"
            target="_blank"
            className="about-me__link"
          >
            Github
          </Link>
        </div>
        <img className="about-me__image" alt="Фото в резюме" src={Avatar} />
      </div>
    </section>
  );
}

export default AboutMe;
