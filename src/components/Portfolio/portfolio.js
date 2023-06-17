import React from "react";
import arrow from "../../images/arrow.svg";
import "./portfolio.css";
import "../Animation/animation.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element animation__link">
          <Link
            to="https://github.com"
            target="_blank"
            className="portfolio__link"
          >
            Статичный сайт
          </Link>
          <Link to="https://github.com" target="_blank">
            {" "}
            <img className="portfolio__icon" alt="Стрелка-ссылка" src={arrow} />
          </Link>
        </li>
        <li className="portfolio__element animation__link">
          <Link
            to="https://github.com"
            target="_blank"
            className="portfolio__link"
          >
            Адаптивный сайт
          </Link>
          <Link to="https://github.com" target="_blank">
            <img className="portfolio__icon" alt="Стрелка-ссылка" src={arrow} />
          </Link>
        </li>
        <li className="portfolio__element animation__link">
          <Link
            to="https://github.com"
            target="_blank"
            className="portfolio__link"
          >
            Одностраничное приложение
          </Link>
          <Link to="https://github.com" target="_blank">
            <img className="portfolio__icon" alt="Стрелка-ссылка" src={arrow} />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
