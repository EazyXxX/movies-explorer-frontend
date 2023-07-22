import React from "react";
import "./navtab.css";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li>
            <Link className="nav-menu__link nav-menu__text-button" to="/signup">
              Регистрация
            </Link>
        </li>
        <Link className="nav-menu__link" to="/signin">
        <li className="nav-menu__box">
            <p className="nav-menu__text-button nav-menu__text-button_black">
              Войти
            </p>
        </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavTab;
