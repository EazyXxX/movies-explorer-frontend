import React from "react";
import "./navtab.css";
import "../Animation/animation.css";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li>
          <Link className="nav-menu__link animation__link" to="/signup">
            Регистрация
          </Link>
        </li>
        <li className="nav-menu__box animation__button">
          <Link className="nav-menu__link nav-menu__text-button" to="/signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
