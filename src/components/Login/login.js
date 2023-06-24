import "../Form/form.css";
import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  function handleInput(e) {}

  return (
    <main className="form">
      <Link className="form__logo-link" to={"/"}>
        <img
          className="form__logo"
          alt="Логотип - зелёная улыбающаяся минималистичная рожица"
          src={logo}
        />
      </Link>
      <h1 className="form__salute">Рады видеть!</h1>
      <form className="form__form" name="login">
        <ul className="form__label-container">
          <li>
            <p className="form__header">E-mail</p>
            <label className="form__label">
              <input
                onChange={handleInput}
                className="form__input"
                id="email"
                name="email"
                type="email"
                minLength="2"
                required
                value="pochta@yandex.ru"
                placeholder="E-mail"
              />
              <span className="form__error"></span>
            </label>
          </li>
          <li>
            <p className="form__header">Пароль</p>
            <label className="form__label">
              <input
                onChange={handleInput}
                className="form__input"
                id="password"
                name="password"
                type="password"
                minLength="2"
                maxLength="30"
                required
                placeholder="Пароль"
              />
              <span className="form__error"></span>
            </label>
          </li>
        </ul>
        <button
          className="form__button"
          type="submit"
          aria-label="Кнопка войти"
        >
          Войти
        </button>
        <h2 className="form__span">
          Ещё не зарегистрированы?
          <Link className="form__link" to="/signup">
            {" "}
            Регистрация
          </Link>
        </h2>
      </form>
    </main>
  );
}

export default Login;
