import React from "react";
import "./navtab.css";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li>
          <button type="button" className="nav-menu__link">
            <Link className="nav-menu__text-button" to="/signup">
              Регистрация
            </Link>
          </button>
        </li>
        <li className="nav-menu__box">
          <button
            type="button"
            className="nav-menu__link"
          >
            <Link className="nav-menu__text-button nav-menu__text-button_black" to="/signin">
              Войти
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
