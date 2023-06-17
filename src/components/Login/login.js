import "../Form/form.css";
import React from "react";
import "../Animation/animation.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="form">
        <div className="form__box">
          <Link to={'/'}>
          <img
            className="form__logo animation__button"
            alt="Логотип - зелёная улыбающаяся минималистичная рожица"
            src={logo}
          />
          </Link>
          <h1 className="form__salute">Рады видеть!</h1>

          <form className="form__form">
            <ul className="form__label-container">
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
                    className="form__input form__input-error"
                    id="password"
                    name="password"
                    type="password"
                    minLength="2"
                    maxLength="30"
                    required
                  />
                  <span className="form__error"></span>
                </label>
              </li>
            </ul>

            <button
              className="form__button animation__button"
              type="submit"
              aria-label="Кнопка войти"
            >
              Войти
            </button>
            <h2 className="form__span">
              Ещё не зарегистрированы?
              <Link className="form__link animation__link" to="/signup">
                {" "}
                Регистрация
              </Link>
            </h2>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
