import React from "react";
import logo from "../../images/logo.svg";
import "../Form/form.css";
import { Link } from "react-router-dom";

function Register() {
  function handleInput(e) {}

  return (
    <main className="form">
      <section>
        <Link className="form__logo-link" to="/">
          <img
            className="form__logo"
            alt="Логотип - зелёная минималистичная рожица"
            src={logo}
          />
        </Link>
        <h1 className="form__salute">Добро пожаловать!</h1>
        <form className="form__form" name="registration">
          <ul className="form__label-container">
            <li>
              <p className="form__header">Имя</p>
              <label className="form__label">
                <input
                  onChange={handleInput}
                  className="form__input"
                  id="name"
                  name="name"
                  type="text"
                  minLength="2"
                  maxLength="20"
                  required
                  value="Виталий"
                  placeholder="Имя"
                />
                <span className="form__error"></span>
              </label>
            </li>

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
                  className="form__input form__input_password"
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  required
                  value="••••••••••••••"
                  placeholder="Пароль"
                />
                <span className="form__error">Что-то пошло не так...</span>
              </label>
            </li>
          </ul>
          <button
            className="form__button"
            type="submit"
            aria-label="Кнопка сохранить"
          >
            Зарегистрироваться
          </button>
          <h2 className="form__span">
            Уже зарегистрированы?
            <Link className="form__link" to="/signin">
              {" "}
              Войти
            </Link>
          </h2>
        </form>
      </section>
    </main>
  );
}

export default Register;
