import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__header">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
      </div>
      <div className="footer__info">
        <p className="footer__year">
          ©<span>{new Date().getFullYear()}</span>
        </p>
        <ul className="footer__list">
          <li className="footer__element">
            <Link
              to="https://practicum.yandex.ru"
              target="_blank"
              className="footer__link"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__element">
            <Link
              to="https://github.com/EazyXxX"
              target="_blank"
              className="footer__link"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
