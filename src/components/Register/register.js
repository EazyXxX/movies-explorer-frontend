import React from "react";
import logo from "../../images/logo.svg";
import "../Animation/animation.css";
import "../Form/form.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="form">
      <div className="form__box">
        <Link className="form__link" to="/">
          <img
            className="form__logo animation__button"
            alt="Логотип - зелёная минималистичная рожица"
            src={logo}
          />
        </Link>
        <h1 className="form__salute">Добро пожаловать!</h1>

        <form className="form__form">
          <ul className="form__label-container">
            <li>
              <label className="form__label">
                <h3 className="form__header">Имя</h3>
                <input
                  className="form__input"
                  id="name"
                  name="name"
                  type="name"
                  minLength="2"
                  required
                  value="Виталий"
                />
                <span className="form__error"></span>
              </label>
            </li>

            <li>
              <label className="form__label">
                <h3 className="form__header">E-mail</h3>
                <input
                  className="form__input"
                  id="email"
                  name="email"
                  type="email"
                  minLength="2"
                  required
                  value="pochta@yandex.ru|"
                />
                <span className="form__error"></span>
              </label>
            </li>

            <li>
              <label className="form__label">
                <h3 className="form__header">Пароль</h3>
                <input
                  className="form__input form__input_password"
                  id="password"
                  name="password"
                  type="password"
                  minLength="2"
                  maxLength="30"
                  required
                  value="••••••••••••••"
                />
                <span className="form__error">Что-то пошло не так...</span>
              </label>
            </li>
          </ul>

          <button
            className="form__button animation__button"
            type="submit"
            aria-label="Кнопка сохранить"
          >
            Зарегистрироваться
          </button>
          <h2 className="form__span">
            Уже зарегистрированы?
            <Link className="form__link animation__link" to="/signin">
              {" "}
              Войти
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default Register;
