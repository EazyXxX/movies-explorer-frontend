import React from "react";
import Avatar from "../../images/avatar.svg";
import "./navigation.css";
import "../Animation/animation.css";
import { Link } from "react-router-dom";
import Stripes from "../Stripes/stripes";
import '../ApiMistakes/apiMistakes.css'

function Navigation({ handleStripesClick, isStripesMenuOpened }) {
  return (
    <>
      <Stripes handleStripesClick={handleStripesClick} isStripesMenuOpened={isStripesMenuOpened} />
      <span className="menu__blur" />
      <nav className="menu">
        <ul className="menu__list menu__list-movies">
          <li className="menu__link-movies animation__link">
            <Link
              className="menu__link menu__link_hidden"
              activeClassName="active"
              to="/"
            >
              Главная
            </Link>
          </li>
          <li className="menu__link-movies animation__link">
            <Link
              className="menu__link menu__link_films "
              activeClassName="active"
              to="/movies"
            >
              Фильмы
            </Link>
          </li>
          <li className="menu__link-movies animation__link">
            <Link
              className="menu__link menu__link_margin-left"
              activeClassName="active"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <ul className="menu__list">
          <li className="animation__link">
            <Link
              className="menu__link menu__link_avatar"
              activeClassName="active"
              to="/profile"
            >
              Аккаунт
            </Link>
          </li>
          <Link className="menu__link" to="/profile">
            <li className="menu__avatar-container animation__button">
              <img
                className="menu__avatar"
                alt="Иконка в виде силуэта человека"
                src={Avatar}
              />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
