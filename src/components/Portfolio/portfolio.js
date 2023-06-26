import React from "react";
import arrow from "../../images/arrow.svg";
import "./portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__box">
          <Link
            to="https://github.com/EazyXxX/how-to-learn"
            target="_blank"
            className="portfolio__link portfolio__element"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            {" "}
            <img className="portfolio__icon" alt="Стрелка-ссылка" src={arrow} />
          </Link>
        </li>
        <li className="portfolio__box">
          <Link
            to="https://github.com/EazyXxX/russian-travel"
            target="_blank"
            className="portfolio__link portfolio__element"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            {" "}
            <img className="portfolio__icon" alt="Стрелка-ссылка" src={arrow} />
          </Link>
        </li>
        <li className="portfolio__box">
          <Link
            to="https://github.com/EazyXxX/react-mesto-api-full-gha"
            target="_blank"
            className="portfolio__link portfolio__element"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            {" "}
            <img className="portfolio__icon" alt="Стрелка-ссылка" src={arrow} />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
