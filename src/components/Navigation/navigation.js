import React from "react";
import Avatar from "../../images/avatar.svg";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import Stripes from "../Stripes/stripes";
import "../ApiMistakes/apiMistakes.css";

function Navigation({
  handleStripesClick,
  isStripesMenuOpened,
  mainUnderline,
  filmsUnderline,
  savedFilmsUnderline,
  profileUnderline,
}) {
  return (
    <>
      <nav className="menu">
        <Stripes
          handleStripesClick={handleStripesClick}
          isStripesMenuOpened={isStripesMenuOpened}
        />
        <div className="menu__main">
          <ul className="menu__list menu__list-movies">
            <li className="menu__link-movies">
              <NavLink
                className={`menu__link menu__link_hidden ${
                  mainUnderline ? "menu__link_underline" : ""
                }`}
                to="/"
              >
                Главная
              </NavLink>
            </li>
            <li className="menu__link-movies">
              <NavLink
                className={`menu__link menu__link_margin-left ${
                  filmsUnderline ? "menu__link_underline" : ""
                }`}
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="menu__link-movies">
              <NavLink
                className={`menu__link menu__link_margin-left menu__link_saved-films ${
                  savedFilmsUnderline ? "menu__link_underline" : ""
                }`}
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <div>
            <NavLink className="menu__link-profile menu__list" to="/profile">
              <p
                className={`menu__link menu__link_avatar ${
                  profileUnderline ? "menu__link_underline" : ""
                }`}
              >
                Аккаунт
              </p>
              <div className="menu__avatar-container">
                <img
                  className="menu__avatar"
                  alt="Иконка в виде силуэта человека"
                  src={Avatar}
                />
              </div>
            </NavLink>
          </div>
        </div>
        <span className="menu__blur" />
      </nav>
    </>
  );
}

export default Navigation;
